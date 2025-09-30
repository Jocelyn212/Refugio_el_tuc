import { connectDB } from "../db.js";
import User from "../models/User.js";
import { hashPassword, generateToken, setAuthCookie } from "../../../utils/auth.js";

// Helper para devolver JSON con un status code específico
function json(data, status = 200, headers = {}) {
    return new Response(JSON.stringify(data), {
        status,
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    });
}

// Obtener el código secreto desde las variables de entorno
const REGISTRO_SECRETO = import.meta.env.REGISTRO_SECRETO;

// Verificar que la variable de entorno existe
if (!REGISTRO_SECRETO) {
    console.error('Error crítico: REGISTRO_SECRETO no está definido en las variables de entorno');
}

export async function POST({ request }) {
    try {
        const body = await request.json();

        // Validación básica
        if (!body.username?.trim() || !body.password?.trim()) {
            return json(
                { success: false, message: "El nombre de usuario y la contraseña son obligatorios" },
                400
            );
        }

        // Validación del código secreto
        if (body.registrationCode !== REGISTRO_SECRETO) {
            return json(
                { success: false, message: "Código de registro no válido" },
                403
            );
        }

        await connectDB();

        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ username: body.username });
        if (existingUser) {
            return json(
                { success: false, message: "El nombre de usuario ya está en uso" },
                400
            );
        }

        // Crear nuevo usuario con contraseña hasheada
        const hashedPassword = await hashPassword(body.password);

        const user = await User.create({
            username: body.username,
            password: hashedPassword,
            role: body.role || 'editor'  // Por defecto, rol editor
        });

        // Generar token
        const token = generateToken({
            id: user._id.toString(),
            username: user.username,
            role: user.role
        });

        // Devolver respuesta con cookie de autenticación
        const cookieHeaders = setAuthCookie(token);

        return json(
            {
                success: true,
                message: "Usuario registrado correctamente",
                user: {
                    id: user._id,
                    username: user.username,
                    role: user.role
                }
            },
            201,
            cookieHeaders
        );
    } catch (error) {
        console.error("Error en registro:", error);
        return json(
            { success: false, message: "Error al registrar usuario", error: error.message },
            500
        );
    }
}
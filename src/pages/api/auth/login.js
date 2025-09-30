import { connectDB } from "../db.js";
import User from "../models/User.js";
import { comparePassword, generateToken, setAuthCookie } from "../../../utils/auth.js";

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

        await connectDB();

        // Buscar el usuario
        const user = await User.findOne({ username: body.username });
        if (!user) {
            return json(
                { success: false, message: "Credenciales inválidas" },
                401
            );
        }

        // Verificar contraseña
        const isPasswordValid = await comparePassword(body.password, user.password);
        if (!isPasswordValid) {
            return json(
                { success: false, message: "Credenciales inválidas" },
                401
            );
        }

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
                message: "Login exitoso",
                user: {
                    id: user._id,
                    username: user.username,
                    role: user.role
                }
            },
            200,
            cookieHeaders
        );
    } catch (error) {
        console.error("Error en login:", error);
        return json(
            { success: false, message: "Error al iniciar sesión", error: error.message },
            500
        );
    }
}
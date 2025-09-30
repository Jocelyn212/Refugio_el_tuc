import { connectDB } from "../db.js";
import User from "../models/User.js";
import { verifyToken, extractTokenFromRequest } from "../../../utils/auth.js";

// Helper para devolver JSON con un status code específico
function json(data, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" }
    });
}

export async function GET({ request }) {
    try {
        // Extraer token
        const token = extractTokenFromRequest(request);
        if (!token) {
            return json({ success: false, message: "No autorizado - Token no proporcionado" }, 401);
        }

        // Verificar token
        const decoded = verifyToken(token);
        if (!decoded) {
            return json({ success: false, message: "No autorizado - Token inválido" }, 401);
        }

        // Obtener información del usuario
        await connectDB();
        const user = await User.findById(decoded.id).select('-password');

        if (!user) {
            return json({ success: false, message: "Usuario no encontrado" }, 404);
        }

        return json({
            success: true,
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });
    } catch (error) {
        console.error("Error en verificación de usuario:", error);
        return json(
            { success: false, message: "Error al verificar el usuario", error: error.message },
            500
        );
    }
}
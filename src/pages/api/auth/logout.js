import { clearAuthCookie } from "../../../utils/auth.js";

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

export function GET() {
    const cookieHeaders = clearAuthCookie();

    return json(
        { success: true, message: "Sesión cerrada correctamente" },
        200,
        cookieHeaders
    );
}
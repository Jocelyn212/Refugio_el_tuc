import { verifyToken } from "./utils/auth.js";

/**
 * Middleware para verificar la autenticación en páginas de Astro
 * @param {Object} request - Objeto request
 * @returns {Object|null} - Usuario autenticado o null
 */
export async function checkAuth(request) {
    try {
        // Extraer token de cookies
        const cookies = request.headers.get('cookie');
        if (!cookies) return null;

        const tokenMatch = cookies.match(/token=([^;]+)/);
        if (!tokenMatch) return null;

        const token = tokenMatch[1];

        // Verificar el token
        const userData = verifyToken(token);
        if (!userData) return null;

        return userData;
    } catch (error) {
        console.error("Error en auth middleware:", error);
        return null;
    }
}

/**
 * Verifica si el usuario tiene el rol requerido
 * @param {Object} user - Usuario autenticado
 * @param {Array|String} roles - Roles permitidos
 * @returns {Boolean} - True si tiene permiso
 */
export function hasRole(user, roles) {
    if (!user) return false;

    const allowedRoles = Array.isArray(roles) ? roles : [roles];
    return allowedRoles.includes(user.role);
}
/**
 * Middleware de seguridad para proteger páginas y verificar permisos
 * 
 * Este archivo contiene funciones que se usan para proteger páginas y endpoints
 * del sistema, verificando que los usuarios estén autenticados y tengan los
 * permisos necesarios para acceder a ciertas funcionalidades.
 * 
 * Dependencias principales:
 * - utils/auth.js para verificar tokens JWT
 * - Astro request objects para extraer información de las peticiones
 */

import { verifyToken } from "./utils/auth.js";

/**
 * Función middleware para verificar si un usuario está autenticado
 * 
 * Esta función se usa en páginas protegidas para verificar que el usuario
 * tenga una sesión válida. Extrae el token de las cookies y verifica que
 * sea auténtico y no haya expirado.
 * 
 * Se usa típicamente en páginas como el panel de administración o cualquier
 * página que requiera que el usuario esté logueado.
 * 
 * Parámetros:
 * - request: La petición HTTP que incluye las cookies con el token
 * 
 * Devuelve: La información del usuario si está autenticado, o null si no lo está
 */
export async function checkAuth(request) {
    try {
        // Extraer las cookies de la petición HTTP
        const cookies = request.headers.get('cookie');
        if (!cookies) return null;

        // Buscar específicamente la cookie que contiene el token de sesión
        const tokenMatch = cookies.match(/token=([^;]+)/);
        if (!tokenMatch) return null;

        const token = tokenMatch[1];

        // Verificar que el token sea válido y no haya expirado
        const userData = verifyToken(token);
        if (!userData) return null;

        return userData;
    } catch (error) {
        console.error("Error en auth middleware:", error);
        return null;
    }
}

/**
 * Función para verificar si un usuario tiene los permisos necesarios
 * 
 * Esta función verifica si el usuario autenticado tiene el rol necesario
 * para acceder a una funcionalidad específica. Por ejemplo, solo los
 * administradores pueden crear otros usuarios, mientras que los editores
 * pueden gestionar animales.
 * 
 * Se usa para crear diferentes niveles de acceso en el sistema del refugio.
 * 
 * Parámetros:
 * - user: La información del usuario autenticado (incluye su rol)
 * - roles: Los roles que tienen permiso (puede ser un string o un array)
 * 
 * Devuelve: Verdadero si el usuario tiene permiso, falso si no lo tiene
 */
export function hasRole(user, roles) {
    // Si no hay usuario autenticado, no tiene permisos
    if (!user) return false;

    // Convertir roles a array si es un string simple
    const allowedRoles = Array.isArray(roles) ? roles : [roles];

    // Verificar si el rol del usuario está en la lista de roles permitidos
    return allowedRoles.includes(user.role);
}
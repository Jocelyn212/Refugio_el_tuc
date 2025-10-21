import { v as verifyToken } from './auth_BUCedew-.mjs';

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
async function checkAuth(request) {
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
 * Middleware principal de Astro
 * 
 * Esta función se ejecuta automáticamente en cada petición HTTP cuando
 * Astro detecta el archivo middleware.js. Actualmente no intercepta peticiones
 * pero debe estar presente para que Vercel pueda compilar correctamente.
 * 
 * Parámetros:
 * - context: Contexto de Astro con request, cookies, etc.
 * - next: Función para continuar al siguiente middleware o página
 * 
 * Devuelve: La respuesta de continuar con la petición normal
 */
const onRequest = async (context, next) => {
    try {
        // Solo continúa con la petición normal sin ninguna modificación
        return await next();
    } catch (error) {
        console.error("Error en middleware:", error);
        return await next();
    }
};

export { checkAuth as c, onRequest as o };

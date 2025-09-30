import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

/**
 * Función para obtener y validar variables de entorno críticas para la seguridad
 * @param {string} name - Nombre de la variable de entorno
 * @param {boolean} required - Si es true, lanza un error si la variable no existe
 * @param {*} defaultValue - Valor por defecto si la variable no existe y no es requerida
 * @returns {string} - El valor de la variable de entorno
 */
function getEnvVariable(name, required = true, defaultValue = null) {
    const value = import.meta.env[name];

    if (!value && required) {
        console.error(`Error crítico de seguridad: Variable de entorno ${name} no definida`);
        // En producción, mejor no mostrar qué variable falta exactamente
        if (import.meta.env.PROD) {
            throw new Error('Error de configuración en el servidor. Contacte con el administrador.');
        } else {
            throw new Error(`La variable de entorno ${name} es requerida pero no está definida.`);
        }
    }

    return value || defaultValue;
}

// Obtener variables de entorno críticas
const JWT_SECRET = getEnvVariable('JWT_SECRET');
const JWT_EXPIRES_IN = parseInt(getEnvVariable('JWT_EXPIRES_IN', false, '86400'), 10); // 24h por defecto

/**
 * Genera un hash a partir de una contraseña en texto plano
 * @param {string} password - Contraseña en texto plano
 * @returns {Promise<string>} - Hash de la contraseña
 */
export const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

/**
 * Compara una contraseña en texto plano con un hash
 * @param {string} password - Contraseña en texto plano a verificar
 * @param {string} hash - Hash almacenado
 * @returns {Promise<boolean>} - True si coinciden
 */
export const comparePassword = async (password, hash) => {
    return bcrypt.compare(password, hash);
};

/**
 * Genera un token JWT con la información del usuario
 * @param {Object} payload - Datos del usuario a incluir en el token
 * @returns {string} - Token JWT
 */
export const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: `${JWT_EXPIRES_IN}s` });
};

/**
 * Verifica un token JWT
 * @param {string} token - Token JWT a verificar
 * @returns {Object|null} - Payload del token o null si es inválido
 */
export const verifyToken = (token) => {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
};

/**
 * Extrae el token de los headers de una solicitud
 * @param {Object} request - Objeto de solicitud
 * @returns {string|null} - Token extraído o null
 */
export const extractTokenFromRequest = (request) => {
    try {
        const authHeader = request.headers.get('Authorization');

        if (!authHeader?.startsWith('Bearer ')) {
            // También podemos extraer de las cookies
            const cookies = request.headers.get('Cookie');
            if (!cookies) return null;

            const tokenCookie = cookies.split(';').find(c => c.trim().startsWith('token='));
            if (!tokenCookie) return null;

            return tokenCookie.split('=')[1].trim();
        }

        return authHeader.split(' ')[1];
    } catch (error) {
        return null;
    }
};

/**
 * Configura la cookie de autenticación
 * @param {string} token - Token JWT
 * @returns {string} - Header Set-Cookie
 */
export const setAuthCookie = (token) => {
    return {
        'Set-Cookie': `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${JWT_EXPIRES_IN}`
    };
};

/**
 * Limpia la cookie de autenticación
 * @returns {Object} - Header Set-Cookie para limpiar
 */
export const clearAuthCookie = () => {
    return {
        'Set-Cookie': `token=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`
    };
};
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": undefined, "SSR": true};
function getEnvVariable(name, required = true, defaultValue = null) {
  const value = Object.assign(__vite_import_meta_env__, { JWT_SECRET: "refugioeltuc_jwt_secret_2025", JWT_EXPIRES_IN: "86400" })[name];
  if (!value && required) {
    console.error(`Error crítico de seguridad: Variable de entorno ${name} no definida`);
    if (Object.assign(__vite_import_meta_env__, { JWT_SECRET: "refugioeltuc_jwt_secret_2025", JWT_EXPIRES_IN: "86400" }).PROD) {
      throw new Error("Error de configuración en el servidor. Contacte con el administrador.");
    } else {
      throw new Error(`La variable de entorno ${name} es requerida pero no está definida.`);
    }
  }
  return value || defaultValue;
}
const JWT_SECRET = getEnvVariable("JWT_SECRET");
const JWT_EXPIRES_IN = parseInt(getEnvVariable("JWT_EXPIRES_IN", false, "86400"), 10);
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};
const comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
};
const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: `${JWT_EXPIRES_IN}s` });
};
const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};
const extractTokenFromRequest = (request) => {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      const cookies = request.headers.get("Cookie");
      if (!cookies) return null;
      const tokenCookie = cookies.split(";").find((c) => c.trim().startsWith("token="));
      if (!tokenCookie) return null;
      return tokenCookie.split("=")[1].trim();
    }
    return authHeader.split(" ")[1];
  } catch (error) {
    return null;
  }
};
const setAuthCookie = (token) => {
  return {
    "Set-Cookie": `token=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${JWT_EXPIRES_IN}`
  };
};
const clearAuthCookie = () => {
  return {
    "Set-Cookie": `token=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0`
  };
};

export { clearAuthCookie as a, comparePassword as c, extractTokenFromRequest as e, generateToken as g, hashPassword as h, setAuthCookie as s, verifyToken as v };

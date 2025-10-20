import { c as connectDB } from '../../../chunks/db_Bxg4Ogys.mjs';
import { U as User } from '../../../chunks/User_DfIrkK66.mjs';
import { h as hashPassword, g as generateToken, s as setAuthCookie } from '../../../chunks/auth_ClMEOBlK.mjs';
export { renderers } from '../../../renderers.mjs';

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...headers
    }
  });
}
const REGISTRO_SECRETO = "R3fugioElTuc_2025";
async function POST({ request }) {
  try {
    const body = await request.json();
    if (!body.username?.trim() || !body.password?.trim()) {
      return json(
        { success: false, message: "El nombre de usuario y la contraseña son obligatorios" },
        400
      );
    }
    if (body.registrationCode !== REGISTRO_SECRETO) {
      return json(
        { success: false, message: "Código de registro no válido" },
        403
      );
    }
    await connectDB();
    const existingUser = await User.findOne({ username: body.username });
    if (existingUser) {
      return json(
        { success: false, message: "El nombre de usuario ya está en uso" },
        400
      );
    }
    const hashedPassword = await hashPassword(body.password);
    const user = await User.create({
      username: body.username,
      password: hashedPassword,
      role: body.role || "editor"
      // Por defecto asignar rol de editor
    });
    const token = generateToken({
      id: user._id.toString(),
      username: user.username,
      role: user.role
    });
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

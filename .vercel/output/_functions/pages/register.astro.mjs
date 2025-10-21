import { e as createComponent, f as createAstro, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DTyRL0dX.mjs';
import { $ as $$Layout } from '../chunks/Layout_B5ffo2os.mjs';
import { c as checkAuth } from '../chunks/middleware_98i3sU2U.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const userData = await checkAuth(Astro2.request);
  if (userData) {
    return Astro2.redirect("/admin");
  }
  const url = Astro2.url;
  const secretToken = url.searchParams.get("secret");
  const REGISTRO_URL_SECRETO = "acceso_eltuc_2025";
  if (!secretToken || secretToken !== REGISTRO_URL_SECRETO) {
    return Astro2.redirect("/");
  }
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  // Manejador del formulario de registro\n  document\n    .getElementById("registerForm")\n    .addEventListener("submit", async (e) => {\n      e.preventDefault();\n\n      const errorDiv = document.getElementById("errorMessage");\n      errorDiv.classList.add("hidden");\n\n      // Usar FormData para acceder a los valores del formulario\n      const formData = new FormData(e.target);\n      const username = formData.get("username");\n      const password = formData.get("password");\n      const confirmPassword = formData.get("confirmPassword");\n      const registrationCode = formData.get("registrationCode");\n\n      // Validación simple\n      if (password !== confirmPassword) {\n        errorDiv.textContent = "Las contraseñas no coinciden";\n        errorDiv.classList.remove("hidden");\n        return;\n      }\n\n      try {\n        const response = await fetch("/api/auth/register", {\n          method: "POST",\n          headers: { "Content-Type": "application/json" },\n          body: JSON.stringify({ username, password, registrationCode }),\n        });\n\n        const data = await response.json();\n\n        if (data.success) {\n          // Redirigir al panel de administración\n          window.location.href = "/admin";\n        } else {\n          // Mostrar error\n          errorDiv.textContent = data.message || "Error al registrarse";\n          errorDiv.classList.remove("hidden");\n        }\n      } catch (error) {\n        console.error("Error:", error);\n        errorDiv.textContent = "Error de conexión. Intenta de nuevo más tarde.";\n        errorDiv.classList.remove("hidden");\n      }\n    });\n</script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Registro - Refugio ElTuc" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8"> <div class="text-center mb-8"> <h1 class="text-3xl font-bold text-amber-600">Crear Cuenta</h1> <p class="mt-2 text-gray-600">
Regístrate para acceder al panel de administración
</p> </div> <form id="registerForm" class="space-y-6"> <div> <label for="username" class="block text-sm font-medium text-gray-700">
Nombre de usuario
</label> <div class="mt-1"> <input id="username" name="username" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500"> </div> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">
Contraseña
</label> <div class="mt-1"> <input id="password" name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500"> </div> </div> <div> <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
Confirmar Contraseña
</label> <div class="mt-1"> <input id="confirmPassword" name="confirmPassword" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500"> </div> </div> <div> <label for="registrationCode" class="block text-sm font-medium text-gray-700">
Código de Registro
</label> <div class="mt-1"> <input id="registrationCode" name="registrationCode" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500"> </div> </div> <div> <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
Registrarse
</button> </div> <div id="errorMessage" class="text-red-500 text-center hidden"></div> </form> <div class="mt-6 text-center"> <p class="text-sm text-gray-600">
¿Ya tienes una cuenta?
<a href="/login?admin=true" class="font-medium text-amber-600 hover:text-amber-500">
Inicia sesión aquí
</a> </p> </div> </div> </div> ` }));
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/register.astro", void 0);
const $$file = "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { e as createComponent, f as createAstro, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DTyRL0dX.mjs';
import { $ as $$Layout } from '../chunks/Layout_B5ffo2os.mjs';
import { c as checkAuth } from '../chunks/middleware_98i3sU2U.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Login;
  const userData = await checkAuth(Astro2.request);
  if (userData) {
    return Astro2.redirect("/admin");
  }
  const url = Astro2.url;
  const adminParam = url.searchParams.get("admin");
  const referer = Astro2.request.headers.get("referer");
  const isInternalReferrer = referer && new URL(referer).hostname === url.hostname;
  if (!adminParam && !isInternalReferrer) {
    return Astro2.redirect("/");
  }
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  // Manejador del formulario de login\n  document.getElementById("loginForm").addEventListener("submit", async (e) => {\n    e.preventDefault();\n\n    const errorDiv = document.getElementById("errorMessage");\n    errorDiv.classList.add("hidden");\n\n    // En Astro, es mejor usar el FormData para acceder a los datos del formulario\n    const formData = new FormData(e.target);\n    const username = formData.get("username");\n    const password = formData.get("password");\n\n    try {\n      const response = await fetch("/api/auth/login", {\n        method: "POST",\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify({ username, password }),\n      });\n\n      const data = await response.json();\n\n      if (data.success) {\n        // Redirigir al panel de administraci\xF3n\n        window.location.href = "/admin";\n      } else {\n        // Mostrar error\n        errorDiv.textContent = data.message || "Error al iniciar sesi\xF3n";\n        errorDiv.classList.remove("hidden");\n      }\n    } catch (error) {\n      console.error("Error:", error);\n      errorDiv.textContent = "Error de conexi\xF3n. Intenta de nuevo m\xE1s tarde.";\n      errorDiv.classList.remove("hidden");\n    }\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar Sesi\xF3n - Refugio ElTuc" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8"> <div class="max-w-md w-full bg-white rounded-lg shadow-md p-8"> <div class="text-center mb-8"> <h1 class="text-3xl font-bold text-amber-600">Iniciar Sesión</h1> <p class="mt-2 text-gray-600">Acceso al panel de administración</p> </div> <form id="loginForm" class="space-y-6"> <div> <label for="username" class="block text-sm font-medium text-gray-700">
Nombre de usuario
</label> <div class="mt-1"> <input id="username" name="username" type="text" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500"> </div> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">
Contraseña
</label> <div class="mt-1"> <input id="password" name="password" type="password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-amber-500 focus:border-amber-500"> </div> </div> <div> <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
Iniciar Sesión
</button> </div> <div id="errorMessage" class="text-red-500 text-center hidden"></div> </form> <div class="mt-6 text-center"> <p class="text-sm text-gray-600">
¿No tienes una cuenta?
<a href="/register" class="font-medium text-amber-600 hover:text-amber-500">
Regístrate aquí
</a> </p> </div> </div> </div> ` }));
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/login.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { e as createComponent, f as createAstro, h as addAttribute, n as renderHead, o as renderSlot, r as renderTemplate, m as maybeRenderHead, l as renderScript } from './astro/server_DTyRL0dX.mjs';
/* empty css                              */
/* empty css                              */
import { c as checkAuth } from './middleware_98i3sU2U.mjs';

const $$Astro$1 = createAstro();
const $$AdminLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AdminLayout;
  const { title = "Panel Admin - Refugio ElTuc" } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-2kanml4j> <head><meta charset="UTF-8"><meta name="description" content="Panel de administración - Refugio ElTuc"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-gray-50" data-astro-cid-2kanml4j> <!-- Sin NavBar público - cada página admin incluye su AdminNavBar --> <!-- Main Content (sin flex-grow ya que no hay footer) --> <main class="min-h-screen" data-astro-cid-2kanml4j> ${renderSlot($$result, $$slots["default"])} </main> <!-- Sin Footer - no es necesario en área administrativa -->  </body> </html>`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/layouts/AdminLayout.astro", void 0);

const $$Astro = createAstro();
const $$AdminNavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdminNavBar;
  let userData = null;
  let isAuthenticated = false;
  try {
    userData = await checkAuth(Astro2.request);
    isAuthenticated = !!userData;
  } catch (error) {
    console.error("Error verificando autenticaci\xF3n en AdminNavBar:", error);
    return Astro2.redirect("/login");
  }
  if (!isAuthenticated) {
    return Astro2.redirect("/login");
  }
  return renderTemplate`${maybeRenderHead()}<header class="bg-slate-800 shadow-lg border-b-4 border-fuchsia-500"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <!-- Barra superior con logo y usuario --> <div class="flex justify-between items-center h-16"> <div class="flex items-center space-x-4"> <a href="/admin" class="text-xl font-bold text-white hover:text-fuchsia-200 transition-colors">
🐾 Panel Administrativo
</a> <span class="text-slate-400 text-sm hidden sm:block">
Refugio ElTuc
</span> </div> <!-- Información del usuario y botones de acción --> <div class="flex items-center space-x-2 sm:space-x-4"> <span class="text-slate-300 text-sm hidden sm:block">
Bienvenido, <span class="text-amber-200 font-medium">${userData?.username}</span> </span> <!-- Botón para volver al sitio público --> <a href="/" class="bg-slate-700 hover:bg-slate-600 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors" title="Volver al sitio público"> <span class="hidden sm:inline">🌐 Sitio Público</span> <span class="sm:hidden">🌐</span> </a> <!-- Botón de cerrar sesión --> <button id="adminLogoutBtn" class="bg-red-600 hover:bg-red-700 text-white px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm transition-colors" title="Cerrar sesión de administrador"> <span class="hidden sm:inline">🚪 Cerrar Sesión</span> <span class="sm:hidden">🚪</span> </button> </div> </div> <!-- Navegación principal del admin --> <nav class="border-t border-slate-700"> <ul class="flex flex-wrap space-x-2 sm:space-x-6 py-4"> <!-- Dashboard principal --> <li> <a href="/admin" class="flex items-center space-x-1 sm:space-x-2 text-slate-300 hover:text-white hover:bg-slate-700 px-2 py-1 sm:px-3 sm:py-2 rounded-lg transition-colors text-sm"> <span>📊</span> <span class="hidden sm:inline">Dashboard</span> </a> </li> <!-- Gestión de animales con dropdown --> <li class="relative group"> <button class="flex items-center space-x-1 sm:space-x-2 text-slate-300 hover:text-white hover:bg-slate-700 px-2 py-1 sm:px-3 sm:py-2 rounded-lg transition-colors text-sm"> <span>🐕</span> <span class="hidden sm:inline">Animales</span> <span class="text-xs hidden sm:inline">▼</span> </button> <!-- Submenu desplegable --> <div class="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"> <a href="/admin/animals" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-t-lg text-sm">
📋 Ver Todos
</a> <a href="/admin/animals/add-animal" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">
➕ Agregar Nuevo
</a> <a href="/admin/adoptions" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-b-lg text-sm">
💝 Adopciones
</a> </div> </li> <!-- Reportes y estadísticas --> <li> <a href="/admin/reports" class="flex items-center space-x-1 sm:space-x-2 text-slate-300 hover:text-white hover:bg-slate-700 px-2 py-1 sm:px-3 sm:py-2 rounded-lg transition-colors text-sm"> <span>📈</span> <span class="hidden sm:inline">Reportes</span> </a> </li> <!-- Configuración del sistema --> <li> <a href="/admin/settings" class="flex items-center space-x-1 sm:space-x-2 text-slate-300 hover:text-white hover:bg-slate-700 px-2 py-1 sm:px-3 sm:py-2 rounded-lg transition-colors text-sm"> <span>⚙️</span> <span class="hidden sm:inline">Config</span> </a> </li> </ul> </nav> </div> </header> ${renderScript($$result, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/components/AdminNavBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/components/AdminNavBar.astro", void 0);

export { $$AdminNavBar as $, $$AdminLayout as a };

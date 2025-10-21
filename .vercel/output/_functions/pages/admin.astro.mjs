import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_DTyRL0dX.mjs';
import { a as $$AdminLayout, $ as $$AdminNavBar } from '../chunks/AdminNavBar_B-vsLOmy.mjs';
import { c as checkAuth } from '../chunks/middleware_98i3sU2U.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const userData = await checkAuth(Astro2.request);
  if (!userData) {
    return Astro2.redirect("/login");
  }
  let stats = {
    totalAnimals: 0,
    adoptedAnimals: 0,
    availableAnimals: 0,
    pendingRequests: 0
  };
  try {
    const baseUrl = Astro2.url.origin;
    const response = await fetch(`${baseUrl}/api/animals`);
    if (response.ok) {
      const result = await response.json();
      const animals = result.data || [];
      stats.totalAnimals = animals.length;
      stats.adoptedAnimals = animals.filter(
        (animal) => animal.status === "adoptado"
      ).length;
      stats.availableAnimals = animals.filter(
        (animal) => animal.status === "en adopci\xF3n"
      ).length;
      stats.pendingRequests = Math.floor(stats.availableAnimals * 0.3);
    }
  } catch (error) {
    console.error("Error obteniendo estad\xEDsticas:", error);
  }
  ({
    name: userData.username,
    role: userData.role
  });
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Panel de Administraci\xF3n - Refugio ElTuc" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-50 min-h-screen"> <!-- Navbar de administración --> ${renderComponent($$result2, "AdminNavBar", $$AdminNavBar, {})} <!-- Contenido principal del dashboard --> <!-- Contenido principal --> <div class="py-6"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Mensajes de éxito/error --> <div id="successMessage" class="hidden mb-6"> <div class="bg-green-50 border border-green-200 rounded-lg p-4"> <div class="flex"> <div class="flex-shrink-0"> <svg class="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="ml-3"> <p class="text-sm font-medium text-green-800" id="successText">
Operación completada exitosamente
</p> </div> <div class="ml-auto pl-3"> <button type="button" class="text-green-400 hover:text-green-600" onclick="document.getElementById('successMessage').classList.add('hidden')"> <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> </div> </div> </div> <!-- Título del dashboard --> <div class="mb-8"> <h1 class="text-3xl font-bold text-gray-900">Dashboard Principal</h1> <p class="mt-2 text-gray-600">
Resumen general del estado actual del refugio ElTuc
</p> </div> <!-- Tarjetas de estadísticas con datos reales --> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8"> <!-- Total de Animales --> <div class="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow"> <div class="px-4 py-5 sm:p-6"> <div class="flex items-center"> <div class="flex-shrink-0 bg-blue-500 rounded-lg p-3"> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <dl> <dt class="text-sm font-medium text-gray-500 truncate">
Total Animales
</dt> <dd> <div class="text-2xl font-bold text-gray-900"> ${stats.totalAnimals} </div> <div class="text-xs text-gray-500 mt-1">
Registrados en el refugio
</div> </dd> </dl> </div> </div> </div> </div> <!-- Animales Disponibles --> <div class="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow"> <div class="px-4 py-5 sm:p-6"> <div class="flex items-center"> <div class="flex-shrink-0 bg-amber-500 rounded-lg p-3"> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <dl> <dt class="text-sm font-medium text-gray-500 truncate">
En Adopción
</dt> <dd> <div class="text-2xl font-bold text-amber-600"> ${stats.availableAnimals} </div> <div class="text-xs text-gray-500 mt-1">
Esperando familia
</div> </dd> </dl> </div> </div> </div> </div> <!-- Animales Adoptados --> <div class="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow"> <div class="px-4 py-5 sm:p-6"> <div class="flex items-center"> <div class="flex-shrink-0 bg-green-500 rounded-lg p-3"> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <dl> <dt class="text-sm font-medium text-gray-500 truncate">
Adoptados
</dt> <dd> <div class="text-2xl font-bold text-green-600"> ${stats.adoptedAnimals} </div> <div class="text-xs text-gray-500 mt-1">
Familias felices
</div> </dd> </dl> </div> </div> </div> </div> <!-- Solicitudes Pendientes --> <div class="bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200 hover:shadow-xl transition-shadow"> <div class="px-4 py-5 sm:p-6"> <div class="flex items-center"> <div class="flex-shrink-0 bg-purple-500 rounded-lg p-3"> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <dl> <dt class="text-sm font-medium text-gray-500 truncate">
Solicitudes
</dt> <dd> <div class="text-2xl font-bold text-purple-600"> ${stats.pendingRequests} </div> <div class="text-xs text-gray-500 mt-1">
Pendientes de revisar
</div> </dd> </dl> </div> </div> </div> </div> </div> <!-- Acciones rápidas y navegación principal --> <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8"> <!-- Gestión de Animales --> <a href="/admin/animals" class="group bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200 hover:shadow-xl hover:border-fuchsia-300 transition-all duration-300"> <div class="px-6 py-6"> <div class="flex items-center"> <div class="flex-shrink-0 bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-lg p-3 group-hover:from-fuchsia-600 group-hover:to-pink-600 transition-colors"> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <h3 class="text-lg font-semibold text-gray-900 group-hover:text-fuchsia-600 transition-colors">
Gestión de Animales
</h3> <p class="mt-1 text-sm text-gray-500">
Ver, añadir, editar o eliminar animales del refugio
</p> <div class="mt-3 text-xs text-fuchsia-600 font-medium"> ${stats.totalAnimals} animales registrados →
</div> </div> </div> </div> </a> <!-- Agregar Nuevo Animal --> <a href="/admin/animals/add-animal" class="group bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200 hover:shadow-xl hover:border-green-300 transition-all duration-300"> <div class="px-6 py-6"> <div class="flex items-center"> <div class="flex-shrink-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3 group-hover:from-green-600 group-hover:to-emerald-600 transition-colors"> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <h3 class="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
Agregar Animal
</h3> <p class="mt-1 text-sm text-gray-500">
Registrar un nuevo animal en el refugio
</p> <div class="mt-3 text-xs text-green-600 font-medium">
Registro rápido →
</div> </div> </div> </div> </a> <!-- Reportes y Estadísticas --> <a href="/admin/reports" class="group bg-white overflow-hidden shadow-lg rounded-xl border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"> <div class="px-6 py-6"> <div class="flex items-center"> <div class="flex-shrink-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg p-3 group-hover:from-blue-600 group-hover:to-indigo-600 transition-colors"> <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path> </svg> </div> <div class="ml-5 w-0 flex-1"> <h3 class="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
Reportes
</h3> <p class="mt-1 text-sm text-gray-500">
Estadísticas y análisis del refugio
</p> <div class="mt-3 text-xs text-blue-600 font-medium">
Ver gráficos →
</div> </div> </div> </div> </a> </div> <!-- Actividad reciente (placeholder para futuras funciones) --> <div class="bg-white shadow-lg rounded-xl border border-gray-200"> <div class="px-6 py-4 border-b border-gray-200"> <h3 class="text-lg font-semibold text-gray-900">
Actividad Reciente
</h3> <p class="text-sm text-gray-500">Últimas acciones en el sistema</p> </div> <div class="px-6 py-6"> <div class="text-center text-gray-500"> <svg class="mx-auto h-12 w-12 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <p class="mt-2 text-sm">
Próximamente: registro de actividades del sistema
</p> </div> </div> </div> </div> </div> </div>  ${renderScript($$result2, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/index.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/index.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

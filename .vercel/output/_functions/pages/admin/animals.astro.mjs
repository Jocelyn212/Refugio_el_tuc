import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript, h as addAttribute } from '../../chunks/astro/server_DTyRL0dX.mjs';
import { a as $$AdminLayout, $ as $$AdminNavBar } from '../../chunks/AdminNavBar_B-vsLOmy.mjs';
import { c as checkAuth } from '../../chunks/middleware_98i3sU2U.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const userData = await checkAuth(Astro2.request);
  if (!userData) {
    return Astro2.redirect("/login");
  }
  let animals = [];
  let error = null;
  try {
    const baseUrl = Astro2.url.origin;
    const response = await fetch(`${baseUrl}/api/animals`);
    if (response.ok) {
      const result = await response.json();
      animals = result.data || [];
    } else {
      throw new Error("Error al cargar los animales");
    }
  } catch (err) {
    console.error("Error cargando animales:", err);
    error = "No se pudieron cargar los animales en este momento";
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Gesti\xF3n de Animales - Admin | Refugio ElTuc" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div style="position: absolute; top: 0; left: 0; right: 0; z-index: 50;"> ${renderComponent($$result2, "AdminNavBar", $$AdminNavBar, {})} </div> <div class="bg-gray-50 min-h-screen pt-20"> <div class="py-6"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Encabezado --> <div class="mb-8"> <h1 class="text-3xl font-bold text-gray-900">
Gestión de Animales del Refugio
</h1> <p class="mt-2 text-gray-600">
Administra todos los animales registrados en el sistema
</p> </div> <!-- Estadísticas rápidas --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"> <div class="bg-white p-6 rounded-lg shadow"> <h3 class="text-lg font-semibold text-gray-900">
Total de Animales
</h3> <p class="text-3xl font-bold text-blue-600">${animals.length}</p> </div> <div class="bg-white p-6 rounded-lg shadow"> <h3 class="text-lg font-semibold text-gray-900">En Adopción</h3> <p class="text-3xl font-bold text-green-600"> ${animals.filter((animal) => animal.status === "en adopci\xF3n").length} </p> </div> <div class="bg-white p-6 rounded-lg shadow"> <h3 class="text-lg font-semibold text-gray-900">Adoptados</h3> <p class="text-3xl font-bold text-purple-600"> ${animals.filter((animal) => animal.status === "adoptado").length} </p> </div> </div> <!-- Acciones --> <div class="mb-6"> <a href="/admin/animals/add-animal" class="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-lg font-medium">
➕ Agregar Nuevo Animal
</a> </div> <!-- Lista de animales --> ${error ? renderTemplate`<div class="bg-red-50 border border-red-200 rounded-lg p-6 text-center"> <h3 class="text-red-800 font-medium">Error al cargar</h3> <p class="text-red-600">${error}</p> </div>` : animals.length === 0 ? renderTemplate`<div class="bg-white rounded-lg p-12 text-center"> <h3 class="text-gray-900 font-medium">
No hay animales registrados
</h3> <p class="text-gray-500">
Comienza agregando el primer animal al refugio.
</p> </div>` : renderTemplate`<div class="bg-white rounded-lg shadow overflow-hidden"> <div class="overflow-x-auto"> <table class="min-w-full divide-y divide-gray-200"> <thead class="bg-gray-50"> <tr> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Animal
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Especie
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Estado
</th> <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
Acciones
</th> </tr> </thead> <tbody class="bg-white divide-y divide-gray-200"> ${animals.map((animal) => renderTemplate`<tr class="hover:bg-gray-50"> <td class="px-6 py-4 whitespace-nowrap"> <div class="flex items-center"> <div class="flex-shrink-0 h-10 w-10"> ${animal.photoUrl ? renderTemplate`<img class="h-10 w-10 rounded-full object-cover"${addAttribute(animal.photoUrl, "src")}${addAttribute(animal.name, "alt")}>` : renderTemplate`<div class="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center"> <span>🐾</span> </div>`} </div> <div class="ml-4"> <div class="text-sm font-medium text-gray-900"> ${animal.name} </div> <div class="text-sm text-gray-500"> ${animal.breed || "Sin raza especificada"} </div> </div> </div> </td> <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 capitalize"> ${animal.species || "No especificado"} </td> <td class="px-6 py-4 whitespace-nowrap"> <span${addAttribute(`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${animal.status === "en adopci\xF3n" ? "bg-green-100 text-green-800" : animal.status === "adoptado" ? "bg-blue-100 text-blue-800" : animal.status === "en acogida" ? "bg-yellow-100 text-yellow-800" : "bg-gray-100 text-gray-800"}`, "class")}> ${animal.status || "Sin estado"} </span> </td> <td class="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2"> <a${addAttribute(`/adoptar-mascota?id=${animal._id}`, "href")} class="text-blue-600 hover:text-blue-900">
Ver
</a> <a${addAttribute(`/admin/animals/edit-animal?id=${animal._id}`, "href")} class="text-green-600 hover:text-green-900">
Editar
</a> <button${addAttribute(`deleteAnimal('${animal._id}', '${animal.name}')`, "onclick")} class="text-red-600 hover:text-red-900">
Eliminar
</button> </td> </tr>`)} </tbody> </table> </div> </div>`} </div> </div> </div> ${renderScript($$result2, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/animals/index.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/animals/index.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/animals/index.astro";
const $$url = "/admin/animals";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

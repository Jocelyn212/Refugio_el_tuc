import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_DTyRL0dX.mjs';
import { $ as $$Layout } from '../chunks/Layout_B5ffo2os.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Adopta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Adopta;
  const searchParams = Astro2.url.searchParams;
  const speciesFilter = searchParams.get("species") || "";
  const statusFilter = searchParams.get("status") || "";
  const genderFilter = searchParams.get("gender") || "";
  let animals = [];
  let error = null;
  try {
    const baseUrl = Astro2.url.origin;
    let apiUrl = `${baseUrl}/api/animals`;
    let queryParams = [];
    if (speciesFilter)
      queryParams.push(`species=${encodeURIComponent(speciesFilter)}`);
    if (statusFilter)
      queryParams.push(`status=${encodeURIComponent(statusFilter)}`);
    if (genderFilter)
      queryParams.push(`gender=${encodeURIComponent(genderFilter)}`);
    if (queryParams.length > 0) {
      apiUrl += `?${queryParams.join("&")}`;
    }
    console.log("Consultando API de animales (URL completa):", apiUrl);
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error(`Error al llamar a la API: ${res.status} ${res.statusText}`);
      throw new Error(`Error ${res.status}: ${res.statusText}`);
    }
    const result = await res.json();
    console.log("Respuesta API completa:", result);
    if (result && result.success && Array.isArray(result.data)) {
      console.log(`Recibidos ${result.data.length} animales de la API`);
      animals = result.data;
    } else {
      console.error("La API no devolvi\xF3 un array de datos v\xE1lido:", result);
      animals = [];
    }
  } catch (e) {
    error = e.message;
    animals = [];
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Adopta - Refugio ElTuc", "data-astro-cid-3bxqegcm": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" data-astro-cid-3bxqegcm> <!-- Encabezado con navegación --> <div class="flex flex-col md:flex-row justify-between items-center mb-8" data-astro-cid-3bxqegcm> <h1 class="text-4xl font-bold text-fuchsia-500 mb-4 md:mb-0" data-astro-cid-3bxqegcm>
Adopta una Mascota
</h1> <a href="/" class="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2 px-5 rounded-md transition duration-200 flex items-center" data-astro-cid-3bxqegcm> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3bxqegcm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-3bxqegcm></path> </svg>
Volver al inicio
</a> </div> <!-- Formulario de filtros --> <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-8" data-astro-cid-3bxqegcm> <h2 class="text-lg font-semibold text-gray-700 mb-4 flex items-center" data-astro-cid-3bxqegcm> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3bxqegcm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" data-astro-cid-3bxqegcm></path> </svg>
Filtrar animales
</h2> <form method="get" action="/adopta" class="grid grid-cols-1 md:grid-cols-3 gap-4" data-astro-cid-3bxqegcm> <!-- Filtro por especie --> <div class="space-y-1" data-astro-cid-3bxqegcm> <label for="species" class="block text-sm font-medium text-gray-700" data-astro-cid-3bxqegcm>Tipo de animal</label> <select id="species" name="species" class="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500"${addAttribute(speciesFilter, "value")} data-astro-cid-3bxqegcm> <option value="" data-astro-cid-3bxqegcm>Todos</option> <option value="perro"${addAttribute(speciesFilter === "perro", "selected")} data-astro-cid-3bxqegcm>Perros</option> <option value="gato"${addAttribute(speciesFilter === "gato", "selected")} data-astro-cid-3bxqegcm>Gatos</option> <option value="conejo"${addAttribute(speciesFilter === "conejo", "selected")} data-astro-cid-3bxqegcm>Conejos</option> <option value="otro"${addAttribute(speciesFilter === "otro", "selected")} data-astro-cid-3bxqegcm>Otros</option> </select> </div> <!-- Filtro por estado --> <div class="space-y-1" data-astro-cid-3bxqegcm> <label for="status" class="block text-sm font-medium text-gray-700" data-astro-cid-3bxqegcm>Estado</label> <select id="status" name="status" class="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500"${addAttribute(statusFilter, "value")} data-astro-cid-3bxqegcm> <option value="" data-astro-cid-3bxqegcm>Todos</option> <option value="en adopción"${addAttribute(statusFilter === "en adopci\xF3n", "selected")} data-astro-cid-3bxqegcm>En adopción</option> <option value="en acogida"${addAttribute(statusFilter === "en acogida", "selected")} data-astro-cid-3bxqegcm>En acogida</option> <option value="adoptado"${addAttribute(statusFilter === "adoptado", "selected")} data-astro-cid-3bxqegcm>Adoptados</option> </select> </div> <!-- Filtro por género --> <div class="space-y-1" data-astro-cid-3bxqegcm> <label for="gender" class="block text-sm font-medium text-gray-700" data-astro-cid-3bxqegcm>Género</label> <select id="gender" name="gender" class="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-blue-500"${addAttribute(genderFilter, "value")} data-astro-cid-3bxqegcm> <option value="" data-astro-cid-3bxqegcm>Todos</option> <option value="macho"${addAttribute(genderFilter === "macho", "selected")} data-astro-cid-3bxqegcm>Macho</option> <option value="hembra"${addAttribute(genderFilter === "hembra", "selected")} data-astro-cid-3bxqegcm>Hembra</option> </select> </div> <!-- Botones --> <div class="md:col-span-3 flex justify-end gap-3 mt-3" data-astro-cid-3bxqegcm> <a href="/adopta" class="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none" data-astro-cid-3bxqegcm>
Limpiar filtros
</a> <button type="submit" class="py-2 px-6 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-md shadow-sm transition duration-200" data-astro-cid-3bxqegcm>
Aplicar filtros
</button> </div> </form> </div> <!-- Mensaje de error si existe --> ${error && renderTemplate`<div class="bg-red-50 border-l-4 border-red-400 p-4 mb-8 rounded-md" data-astro-cid-3bxqegcm> <div class="flex" data-astro-cid-3bxqegcm> <div class="flex-shrink-0" data-astro-cid-3bxqegcm> <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-3bxqegcm> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" data-astro-cid-3bxqegcm></path> </svg> </div> <div class="ml-3" data-astro-cid-3bxqegcm> <h3 class="text-sm font-medium text-red-800" data-astro-cid-3bxqegcm>
Error al cargar los animales
</h3> <p class="text-sm text-red-700 mt-1" data-astro-cid-3bxqegcm>${error}</p> </div> </div> </div>`} <!-- Resumen de filtros y resultados --> <div class="flex flex-col md:flex-row justify-between items-center mb-6" data-astro-cid-3bxqegcm> <div data-astro-cid-3bxqegcm> ${(speciesFilter || statusFilter || genderFilter) && renderTemplate`<div class="flex flex-wrap gap-2 mb-4" data-astro-cid-3bxqegcm> <span class="text-gray-700 mr-1" data-astro-cid-3bxqegcm>Filtros aplicados:</span> ${speciesFilter && renderTemplate`<span class="inline-flex items-center bg-pink-100 text-pink-600 text-xs font-medium px-2.5 py-0.5 rounded-full" data-astro-cid-3bxqegcm> ${speciesFilter === "perro" ? "Perros" : speciesFilter === "gato" ? "Gatos" : speciesFilter === "conejo" ? "Conejos" : "Otros"} </span>`} ${statusFilter && renderTemplate`<span class="inline-flex items-center bg-amber-200 text-amber-700 text-xs font-medium px-2.5 py-0.5 rounded-full" data-astro-cid-3bxqegcm> ${statusFilter} </span>`} ${genderFilter && renderTemplate`<span class="inline-flex items-center bg-fuchsia-100 text-fuchsia-500 text-xs font-medium px-2.5 py-0.5 rounded-full" data-astro-cid-3bxqegcm> ${genderFilter === "macho" ? "Machos" : "Hembras"} </span>`} </div>`} </div> <div class="text-gray-500 text-sm" data-astro-cid-3bxqegcm> <span class="font-semibold text-gray-700" data-astro-cid-3bxqegcm>${animals.length}</span> ${animals.length === 1 ? "animal encontrado" : "animales encontrados"} </div> </div> <!-- Grid de animales --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-3bxqegcm> ${animals.map((animal) => renderTemplate`<article class="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100" data-astro-cid-3bxqegcm> <div class="relative" data-astro-cid-3bxqegcm> <img class="w-full h-72 object-cover"${addAttribute(
    animal.photoUrl || "https://placehold.co/400x300/e6e6e6/969696?text=Sin+Imagen",
    "src"
  )}${addAttribute(`Foto de ${animal.name}`, "alt")} onerror="this.src='https://placehold.co/400x300/e6e6e6/969696?text=Sin+Imagen'" data-astro-cid-3bxqegcm> <div class="absolute top-0 right-0 bg-fuchsia-500 text-white py-1 px-4 m-3 rounded-full text-sm font-medium" data-astro-cid-3bxqegcm> ${animal.status} </div> </div> <div class="p-6" data-astro-cid-3bxqegcm> <div class="flex justify-between items-center mb-3" data-astro-cid-3bxqegcm> <h2 class="text-2xl font-bold text-gray-800" data-astro-cid-3bxqegcm>${animal.name}</h2> <span class="text-sm bg-gray-100 text-gray-800 rounded-full px-3 py-1 font-medium capitalize" data-astro-cid-3bxqegcm> ${animal.species} </span> </div> <div class="grid grid-cols-2 gap-3 mb-4" data-astro-cid-3bxqegcm> <div class="flex items-center text-gray-700" data-astro-cid-3bxqegcm> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3bxqegcm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" data-astro-cid-3bxqegcm></path> </svg> <span data-astro-cid-3bxqegcm> <b data-astro-cid-3bxqegcm>Raza:</b> ${animal.breed || "Desconocida"} </span> </div> <div class="flex items-center text-gray-700" data-astro-cid-3bxqegcm> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3bxqegcm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-3bxqegcm></path> </svg> <span data-astro-cid-3bxqegcm> <b data-astro-cid-3bxqegcm>Edad:</b>${" "} ${animal.age ? `${animal.age} a\xF1os` : "Desconocida"} </span> </div> <div class="flex items-center text-gray-700" data-astro-cid-3bxqegcm> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3bxqegcm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-3bxqegcm></path> </svg> <span data-astro-cid-3bxqegcm> <b data-astro-cid-3bxqegcm>Género:</b> ${animal.gender || "Desconocido"} </span> </div> </div> <p class="text-gray-600 mb-6 line-clamp-3" data-astro-cid-3bxqegcm> ${animal.description} </p> <div class="flex justify-center" data-astro-cid-3bxqegcm> <a${addAttribute(`/adoptar-mascota?id=${animal._id}`, "href")} class="bg-pink-600 hover:bg-pink-700 text-white font-medium py-2.5 px-6 rounded-lg transition duration-200 flex items-center justify-center shadow-md hover:shadow-lg" data-astro-cid-3bxqegcm> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3bxqegcm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-3bxqegcm></path> </svg>
Adoptar
</a> </div> </div> </article>`)} </div> <!-- Estado vacío --> ${animals.length === 0 && !error && renderTemplate`<div class="text-center py-20 bg-gray-50 rounded-xl shadow-sm border border-gray-100" data-astro-cid-3bxqegcm> <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3bxqegcm> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-3bxqegcm></path> </svg> <h3 class="text-2xl font-semibold text-gray-700 mb-2" data-astro-cid-3bxqegcm>
No hay animales registrados
</h3> <p class="text-gray-500 max-w-md mx-auto" data-astro-cid-3bxqegcm>
No se encontraron animales en la base de datos. Consulta con el
            administrador del refugio.
</p> </div>`} </main> ` })} `;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/adopta.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/adopta.astro";
const $$url = "/adopta";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Adopta,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

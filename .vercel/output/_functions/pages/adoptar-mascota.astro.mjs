import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, p as Fragment } from '../chunks/astro/server_DTyRL0dX.mjs';
import { $ as $$Layout } from '../chunks/Layout_B5ffo2os.mjs';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$AdoptarMascota = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdoptarMascota;
  const id = Astro2.url.searchParams.get("id");
  let animal = null;
  let error = null;
  let formSubmitted = false;
  let formSuccess = false;
  let formError = "";
  try {
    if (id) {
      const baseUrl = Astro2.url.origin;
      const apiUrl = `${baseUrl}/api/animals?id=${id}`;
      const res = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (!res.ok) {
        throw new Error(`Error ${res.status}: ${res.statusText}`);
      }
      const result = await res.json();
      animal = result.success ? result.data : null;
    } else {
      error = "No se especific\xF3 un ID de animal v\xE1lido";
    }
  } catch (e) {
    error = e.message;
  }
  if (Astro2.request.method === "POST") {
    try {
      formSubmitted = true;
      const formData = await Astro2.request.formData();
      const nombre = formData.get("nombre");
      const email = formData.get("email");
      const telefono = formData.get("telefono");
      const mensaje = formData.get("mensaje");
      if (!nombre || !email || !telefono) {
        formError = "Por favor, complete todos los campos obligatorios";
        formSuccess = false;
      } else {
        formSuccess = true;
      }
    } catch (e) {
      formError = e.message;
      formSuccess = false;
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-bhlq5lwk": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10" data-astro-cid-bhlq5lwk>  <nav class="flex mb-8" aria-label="Breadcrumb" data-astro-cid-bhlq5lwk> <ol class="inline-flex items-center space-x-1 md:space-x-3" data-astro-cid-bhlq5lwk> <li class="inline-flex items-center" data-astro-cid-bhlq5lwk> <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600" data-astro-cid-bhlq5lwk> <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" data-astro-cid-bhlq5lwk> <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" data-astro-cid-bhlq5lwk></path> </svg>
Inicio
</a> </li> <li data-astro-cid-bhlq5lwk> <div class="flex items-center" data-astro-cid-bhlq5lwk> <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" data-astro-cid-bhlq5lwk> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" data-astro-cid-bhlq5lwk></path> </svg> <a href="/animales" class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2" data-astro-cid-bhlq5lwk>Animales</a> </div> </li> <li aria-current="page" data-astro-cid-bhlq5lwk> <div class="flex items-center" data-astro-cid-bhlq5lwk> <svg class="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" data-astro-cid-bhlq5lwk> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" data-astro-cid-bhlq5lwk></path> </svg> <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2" data-astro-cid-bhlq5lwk>Adopción</span> </div> </li> </ol> </nav>  ${error && renderTemplate`<div class="bg-red-50 border-l-4 border-red-400 p-4 mb-8 rounded-md" data-astro-cid-bhlq5lwk> <div class="flex" data-astro-cid-bhlq5lwk> <div class="flex-shrink-0" data-astro-cid-bhlq5lwk> <svg class="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-bhlq5lwk> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" data-astro-cid-bhlq5lwk></path> </svg> </div> <div class="ml-3" data-astro-cid-bhlq5lwk> <h3 class="text-sm font-medium text-red-800" data-astro-cid-bhlq5lwk>Error</h3> <p class="text-sm text-red-700 mt-1" data-astro-cid-bhlq5lwk>${error}</p> <a href="/animales" class="mt-3 inline-flex items-center text-sm text-blue-600 hover:underline" data-astro-cid-bhlq5lwk> <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bhlq5lwk> <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" data-astro-cid-bhlq5lwk></path> </svg>
Volver a la lista de animales
</a> </div> </div> </div>`}  ${animal && renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 gap-10" data-astro-cid-bhlq5lwk>  <div data-astro-cid-bhlq5lwk> <div class="relative rounded-2xl overflow-hidden mb-6" data-astro-cid-bhlq5lwk> <img class="w-full h-[400px] object-cover"${addAttribute(
    animal.photoUrl || "https://via.placeholder.com/600x400?text=Sin+Imagen",
    "src"
  )}${addAttribute(`Foto de ${animal.name}`, "alt")} onerror="this.src='https://via.placeholder.com/600x400?text=Sin+Imagen'" data-astro-cid-bhlq5lwk> <div class="absolute top-0 right-0 bg-blue-600 text-white py-1 px-4 m-4 rounded-full text-sm font-medium" data-astro-cid-bhlq5lwk> ${animal.status} </div> </div> <h1 class="text-3xl font-bold text-gray-900 mb-2" data-astro-cid-bhlq5lwk>${animal.name}</h1> <div class="flex items-center gap-3 mb-6" data-astro-cid-bhlq5lwk> <span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800" data-astro-cid-bhlq5lwk> ${animal.species} </span> ${animal.breed && renderTemplate`<span class="inline-block px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800" data-astro-cid-bhlq5lwk> ${animal.breed} </span>`} </div> <div class="grid grid-cols-2 gap-4 mb-6" data-astro-cid-bhlq5lwk> <div class="bg-gray-50 p-3 rounded-lg" data-astro-cid-bhlq5lwk> <h3 class="text-sm font-semibold text-gray-500 mb-1" data-astro-cid-bhlq5lwk>Edad</h3> <p class="text-gray-900" data-astro-cid-bhlq5lwk> ${animal.age ? `${animal.age} a\xF1os` : "Desconocida"} </p> </div> <div class="bg-gray-50 p-3 rounded-lg" data-astro-cid-bhlq5lwk> <h3 class="text-sm font-semibold text-gray-500 mb-1" data-astro-cid-bhlq5lwk>Género</h3> <p class="text-gray-900" data-astro-cid-bhlq5lwk>${animal.gender || "Desconocido"}</p> </div> <div class="bg-gray-50 p-3 rounded-lg" data-astro-cid-bhlq5lwk> <h3 class="text-sm font-semibold text-gray-500 mb-1" data-astro-cid-bhlq5lwk>Tamaño</h3> <p class="text-gray-900" data-astro-cid-bhlq5lwk>${animal.size || "No especificado"}</p> </div>  </div> <div class="mb-8" data-astro-cid-bhlq5lwk> <h2 class="text-xl font-semibold text-gray-800 mb-3" data-astro-cid-bhlq5lwk>
Sobre ${animal.name} </h2> <p class="text-gray-700 whitespace-pre-line" data-astro-cid-bhlq5lwk> ${animal.description} </p> </div> ${animal.healthInfo && renderTemplate`<div class="mb-8" data-astro-cid-bhlq5lwk> <h2 class="text-xl font-semibold text-gray-800 mb-3" data-astro-cid-bhlq5lwk>
Información de salud
</h2> <div class="bg-blue-50 p-4 rounded-lg" data-astro-cid-bhlq5lwk> <ul class="list-disc list-inside text-gray-700 space-y-2" data-astro-cid-bhlq5lwk> <li data-astro-cid-bhlq5lwk> ${animal.healthInfo.vaccinated ? "Vacunado/a" : "No vacunado/a"} </li> <li data-astro-cid-bhlq5lwk> ${animal.healthInfo.sterilized ? "Esterilizado/a" : "No esterilizado/a"} </li> <li data-astro-cid-bhlq5lwk> ${animal.healthInfo.dewormed ? "Desparasitado/a" : "No desparasitado/a"} </li> ${animal.healthInfo.additionalInfo && renderTemplate`<li data-astro-cid-bhlq5lwk>
Información adicional:${" "} ${animal.healthInfo.additionalInfo} </li>`} </ul> </div> </div>`} </div>  <div data-astro-cid-bhlq5lwk> ${!formSuccess ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-bhlq5lwk": true }, { "default": async ($$result3) => renderTemplate` <div class="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6" data-astro-cid-bhlq5lwk> <h2 class="text-2xl font-bold text-gray-800 mb-4" data-astro-cid-bhlq5lwk>
Solicitar adopción
</h2> <p class="text-gray-600 mb-6" data-astro-cid-bhlq5lwk>
Complete el formulario para iniciar el proceso de adopción.
                    Nos pondremos en contacto con usted a la brevedad.
</p> ${formSubmitted && formError && renderTemplate`<div class="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6" data-astro-cid-bhlq5lwk> <div class="flex" data-astro-cid-bhlq5lwk> <svg class="h-5 w-5 text-red-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-bhlq5lwk> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" data-astro-cid-bhlq5lwk></path> </svg> <span data-astro-cid-bhlq5lwk>${formError}</span> </div> </div>`} <form method="POST" class="space-y-4" data-astro-cid-bhlq5lwk> <input type="hidden" name="animalId"${addAttribute(animal._id, "value")} data-astro-cid-bhlq5lwk> <div data-astro-cid-bhlq5lwk> <label for="nombre" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-bhlq5lwk>
Nombre completo *
</label> <input type="text" name="nombre" id="nombre" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" data-astro-cid-bhlq5lwk> </div> <div data-astro-cid-bhlq5lwk> <label for="email" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-bhlq5lwk>
Correo electrónico *
</label> <input type="email" name="email" id="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" data-astro-cid-bhlq5lwk> </div> <div data-astro-cid-bhlq5lwk> <label for="telefono" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-bhlq5lwk>
Teléfono *
</label> <input type="tel" name="telefono" id="telefono" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" data-astro-cid-bhlq5lwk> </div> <div data-astro-cid-bhlq5lwk> <label for="mensaje" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-bhlq5lwk>
¿Por qué quiere adoptar a ${animal.name}?
</label> <textarea name="mensaje" id="mensaje" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" data-astro-cid-bhlq5lwk></textarea> </div> <button type="submit" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition duration-200 flex items-center justify-center" data-astro-cid-bhlq5lwk> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bhlq5lwk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" data-astro-cid-bhlq5lwk></path> </svg>
Enviar solicitud de adopción
</button> </form> </div> <div class="bg-blue-50 rounded-xl border border-blue-100 p-6" data-astro-cid-bhlq5lwk> <h3 class="text-lg font-semibold text-blue-800 mb-3" data-astro-cid-bhlq5lwk>
Proceso de adopción
</h3> <ol class="list-decimal list-inside text-gray-700 space-y-3" data-astro-cid-bhlq5lwk> <li data-astro-cid-bhlq5lwk>Complete el formulario de adopción.</li> <li data-astro-cid-bhlq5lwk>
Evaluaremos su solicitud y nos pondremos en contacto.
</li> <li data-astro-cid-bhlq5lwk>
Si es preseleccionado/a, programaremos una visita al
                      refugio.
</li> <li data-astro-cid-bhlq5lwk>
Conozca a ${animal.name} y complete la documentación
                      necesaria.
</li> <li data-astro-cid-bhlq5lwk>¡Lleve a ${animal.name} a su nuevo hogar!</li> </ol> </div> ` })}` : renderTemplate`<div class="bg-green-50 border border-green-100 rounded-xl p-8 text-center" data-astro-cid-bhlq5lwk> <div class="mb-4 flex justify-center" data-astro-cid-bhlq5lwk> <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-bhlq5lwk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-bhlq5lwk></path> </svg> </div> <h2 class="text-2xl font-bold text-green-800 mb-4" data-astro-cid-bhlq5lwk>
¡Solicitud enviada con éxito!
</h2> <p class="text-green-700 mb-6" data-astro-cid-bhlq5lwk>
Hemos recibido su solicitud para adoptar a ${animal.name}. Un
                  miembro de nuestro equipo se pondrá en contacto con usted a la
                  brevedad para continuar con el proceso.
</p> <a href="/animales" class="inline-flex items-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center" data-astro-cid-bhlq5lwk> <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-bhlq5lwk> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" data-astro-cid-bhlq5lwk></path> </svg>
Ver más animales
</a> </div>`} </div> </div>`} </main> ` })} `;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/adoptar-mascota.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/adoptar-mascota.astro";
const $$url = "/adoptar-mascota";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AdoptarMascota,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

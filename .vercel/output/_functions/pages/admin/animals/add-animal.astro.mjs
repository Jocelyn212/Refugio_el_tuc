import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_DTyRL0dX.mjs';
import { $ as $$AdminNavBar, a as $$AdminLayout } from '../../../chunks/AdminNavBar_B2K2K_N_.mjs';
import { c as checkAuth } from '../../../chunks/middleware_XVbAUySc.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$AddAnimal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AddAnimal;
  const userData = await checkAuth(Astro2.request);
  if (!userData) {
    return Astro2.redirect("/login");
  }
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const animalData = {
        name: formData.get("name"),
        species: formData.get("species"),
        breed: formData.get("breed"),
        age: parseInt(formData.get("age")) || null,
        gender: formData.get("gender"),
        description: formData.get("description"),
        status: formData.get("status"),
        photoUrl: formData.get("photoUrl") || null
      };
      if (!animalData.name || !animalData.species || !animalData.status) {
        throw new Error("Los campos nombre, especie y estado son obligatorios");
      }
      const baseUrl = Astro2.url.origin;
      const response = await fetch(`${baseUrl}/api/animals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(animalData)
      });
      if (response.ok) {
        return Astro2.redirect("/admin/animals?success=created");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al crear el animal");
      }
    } catch (error) {
      console.error("Error creando animal:", error);
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": "Agregar Animal - Admin | Refugio ElTuc" }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "AdminNavBar", $$AdminNavBar, {})} ${maybeRenderHead()}<div class="bg-gray-50 min-h-screen"> <div class="py-6"> <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Encabezado --> <div class="mb-8"> <h1 class="text-3xl font-bold text-gray-900">Agregar Nuevo Animal</h1> <p class="mt-2 text-gray-600">
Registra un nuevo animal en el refugio
</p> </div> <!-- Formulario --> <form method="POST" class="bg-white shadow rounded-lg"> <div class="px-6 py-6 space-y-6"> <!-- Nombre --> <div> <label for="name" class="block text-sm font-medium text-gray-700">
Nombre del animal *
</label> <input type="text" id="name" name="name" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> </div> <!-- Especie --> <div> <label for="species" class="block text-sm font-medium text-gray-700">
Especie *
</label> <select id="species" name="species" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> <option value="">Seleccionar especie</option> <option value="perro">Perro</option> <option value="gato">Gato</option> <option value="conejo">Conejo</option> <option value="ave">Ave</option> <option value="otro">Otro</option> </select> </div> <!-- Raza --> <div> <label for="breed" class="block text-sm font-medium text-gray-700">
Raza
</label> <input type="text" id="breed" name="breed" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> </div> <!-- Edad --> <div> <label for="age" class="block text-sm font-medium text-gray-700">
Edad (años)
</label> <input type="number" id="age" name="age" min="0" max="30" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> </div> <!-- Género --> <div> <label for="gender" class="block text-sm font-medium text-gray-700">
Género
</label> <select id="gender" name="gender" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> <option value="">Seleccionar género</option> <option value="macho">Macho</option> <option value="hembra">Hembra</option> <option value="desconocido">Desconocido</option> </select> </div> <!-- Estado --> <div> <label for="status" class="block text-sm font-medium text-gray-700">
Estado *
</label> <select id="status" name="status" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> <option value="">Seleccionar estado</option> <option value="en adopción">En adopción</option> <option value="en acogida">En acogida</option> <option value="no disponible">No disponible</option> </select> </div> <!-- Descripción --> <div> <label for="description" class="block text-sm font-medium text-gray-700">
Descripción
</label> <textarea id="description" name="description" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"></textarea> </div> <!-- URL de foto --> <div> <label for="photoUrl" class="block text-sm font-medium text-gray-700">
URL de la foto
</label> <input type="url" id="photoUrl" name="photoUrl" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> <p class="mt-1 text-sm text-gray-500">
Opcional: URL de una imagen del animal
</p> </div> </div> <!-- Botones --> <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg flex justify-end space-x-3"> <a href="/admin/animals" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
Cancelar
</a> <button type="submit" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-fuchsia-600 hover:bg-fuchsia-700">
Crear Animal
</button> </div> </form> </div> </div> </div> ` })}`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/animals/add-animal.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/animals/add-animal.astro";
const $$url = "/admin/animals/add-animal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AddAnimal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

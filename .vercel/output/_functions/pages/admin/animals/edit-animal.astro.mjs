import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as renderScript } from '../../../chunks/astro/server_DTyRL0dX.mjs';
import { a as $$AdminLayout, $ as $$AdminNavBar } from '../../../chunks/AdminNavBar_B-vsLOmy.mjs';
import { c as checkAuth } from '../../../chunks/middleware_98i3sU2U.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$EditAnimal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$EditAnimal;
  const userData = await checkAuth(Astro2.request);
  if (!userData) {
    return Astro2.redirect("/login");
  }
  const animalId = Astro2.url.searchParams.get("id");
  if (!animalId) {
    return Astro2.redirect("/admin/animals");
  }
  let animal = null;
  let error = null;
  try {
    const baseUrl = Astro2.url.origin;
    const response = await fetch(`${baseUrl}/api/animals?id=${animalId}`);
    if (response.ok) {
      const result = await response.json();
      animal = result.data;
      if (!animal) {
        throw new Error("Animal no encontrado");
      }
    } else {
      throw new Error("Error al cargar el animal");
    }
  } catch (err) {
    console.error("Error cargando animal:", err);
    error = err.message;
  }
  if (error || !animal) {
    return Astro2.redirect("/admin/animals?error=not-found");
  }
  if (Astro2.request.method === "POST") {
    try {
      const formData = await Astro2.request.formData();
      const animalData = {
        name: formData.get("name"),
        species: formData.get("species"),
        breed: formData.get("breed"),
        age: formData.get("age") ? parseInt(formData.get("age").toString()) : null,
        gender: formData.get("gender"),
        description: formData.get("description"),
        status: formData.get("status"),
        photoUrl: formData.get("photoUrl") || null
      };
      if (!animalData.name || !animalData.species || !animalData.status) {
        throw new Error("Los campos nombre, especie y estado son obligatorios");
      }
      const baseUrl = Astro2.url.origin;
      const response = await fetch(`${baseUrl}/api/animals?id=${animalId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(animalData)
      });
      if (response.ok) {
        return Astro2.redirect("/admin/animals?success=updated");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al actualizar el animal");
      }
    } catch (error2) {
      console.error("Error actualizando animal:", error2);
    }
  }
  return renderTemplate`${renderComponent($$result, "AdminLayout", $$AdminLayout, { "title": `Editar ${animal.name} - Admin | Refugio ElTuc` }, { "default": async ($$result2) => renderTemplate`  ${renderComponent($$result2, "AdminNavBar", $$AdminNavBar, {})} ${maybeRenderHead()}<div class="bg-gray-50 min-h-screen"> <div class="py-6"> <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8"> <!-- Encabezado --> <div class="mb-8"> <h1 class="text-3xl font-bold text-gray-900">
Editar ${animal.name} </h1> <p class="mt-2 text-gray-600">Modifica la información del animal</p> </div> <!-- Formulario --> <form method="POST" class="bg-white shadow rounded-lg"> <div class="px-6 py-6 space-y-6"> <!-- Nombre --> <div> <label for="name" class="block text-sm font-medium text-gray-700">
Nombre del animal *
</label> <input type="text" id="name" name="name"${addAttribute(animal.name || "", "value")} required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> </div> <!-- Especie --> <div> <label for="species" class="block text-sm font-medium text-gray-700">
Especie *
</label> <select id="species" name="species" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> <option value="">Seleccionar especie</option> <option value="perro"${addAttribute(animal.species === "perro", "selected")}>Perro</option> <option value="gato"${addAttribute(animal.species === "gato", "selected")}>Gato</option> <option value="conejo"${addAttribute(animal.species === "conejo", "selected")}>Conejo</option> <option value="ave"${addAttribute(animal.species === "ave", "selected")}>Ave</option> <option value="otro"${addAttribute(animal.species === "otro", "selected")}>Otro</option> </select> </div> <!-- Raza --> <div> <label for="breed" class="block text-sm font-medium text-gray-700">
Raza
</label> <input type="text" id="breed" name="breed"${addAttribute(animal.breed || "", "value")} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> </div> <!-- Edad --> <div> <label for="age" class="block text-sm font-medium text-gray-700">
Edad (años)
</label> <input type="number" id="age" name="age"${addAttribute(animal.age || "", "value")} min="0" max="30" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> </div> <!-- Género --> <div> <label for="gender" class="block text-sm font-medium text-gray-700">
Género
</label> <select id="gender" name="gender" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> <option value="">Seleccionar género</option> <option value="macho"${addAttribute(animal.gender === "macho", "selected")}>Macho</option> <option value="hembra"${addAttribute(animal.gender === "hembra", "selected")}>Hembra</option> <option value="desconocido"${addAttribute(animal.gender === "desconocido", "selected")}>Desconocido</option> </select> </div> <!-- Estado --> <div> <label for="status" class="block text-sm font-medium text-gray-700">
Estado *
</label> <select id="status" name="status" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> <option value="">Seleccionar estado</option> <option value="en adopción"${addAttribute(animal.status === "en adopci\xF3n", "selected")}>En adopción</option> <option value="adoptado"${addAttribute(animal.status === "adoptado", "selected")}>Adoptado</option> <option value="en acogida"${addAttribute(animal.status === "en acogida", "selected")}>En acogida</option> <option value="no disponible"${addAttribute(animal.status === "no disponible", "selected")}>No disponible</option> </select> </div> <!-- Descripción --> <div> <label for="description" class="block text-sm font-medium text-gray-700">
Descripción
</label> <textarea id="description" name="description" rows="4" class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500">${animal.description || ""}</textarea> </div> <!-- URL de foto --> <div> <label for="photoUrl" class="block text-sm font-medium text-gray-700">
URL de la foto
</label> <input type="url" id="photoUrl" name="photoUrl"${addAttribute(animal.photoUrl || "", "value")} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-fuchsia-500 focus:border-fuchsia-500"> <p class="mt-1 text-sm text-gray-500">
Opcional: URL de una imagen del animal
</p> </div> </div> <!-- Botones --> <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 rounded-b-lg flex justify-between"> <button type="button"${addAttribute(`deleteAnimal('${animal._id}', '${animal.name}')`, "onclick")} class="px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50">
Eliminar Animal
</button> <div class="flex space-x-3"> <a href="/admin/animals" class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
Cancelar
</a> <button type="submit" class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-fuchsia-600 hover:bg-fuchsia-700">
Actualizar Animal
</button> </div> </div> </form> </div> </div> </div> ${renderScript($$result2, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/animals/edit-animal.astro?astro&type=script&index=0&lang.ts")}
});
` })}`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/animals/edit-animal.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/admin/animals/edit-animal.astro";
const $$url = "/admin/animals/edit-animal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EditAnimal,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

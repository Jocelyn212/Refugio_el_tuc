import { e as createComponent, m as maybeRenderHead, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_DTyRL0dX.mjs';
import { $ as $$Layout } from '../chunks/Layout_B5ffo2os.mjs';
export { renderers } from '../renderers.mjs';

const $$Prueba = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<h1 class="text-4xl font-bold text-center bg-amber-400 ">HOLA REFUGIO</h1> <p class="text- text-lg mt-4 text-center">ESTO ES UNA PRUEBA DE TAILWIND</p>`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/components/Prueba.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Qui\xE9nes Somos - Refugio ElTuc" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Prueba", $$Prueba, {})} ${maybeRenderHead()}<div class="container mx-auto py-8 px-4 text-center"> <h2 class="text-2xl font-bold mb-6 text-fuchsia-500">
Explora nuestro refugio
</h2> <div class="flex flex-wrap gap-4 justify-center"> <a href="/adopta" class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
Ver animales en adopción
</a> </div> </div> ` })}`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/index.astro", void 0);

const $$file = "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

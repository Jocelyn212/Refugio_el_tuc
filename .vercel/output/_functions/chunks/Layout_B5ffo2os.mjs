import { e as createComponent, m as maybeRenderHead, l as renderScript, r as renderTemplate, f as createAstro, h as addAttribute, n as renderHead, k as renderComponent, o as renderSlot } from './astro/server_DTyRL0dX.mjs';
/* empty css                              */
/* empty css                          */

const $$NavBar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-md"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <!-- Logo del refugio --> <div class="flex items-center"> <a href="/" class="text-xl font-bold text-fuchsia-500 hover:text-fuchsia-600 transition-colors duration-200">
🐾 Refugio ElTuc
</a> </div> <!-- Navegación para desktop (oculta en móvil) --> <nav class="hidden md:block"> <ul class="flex space-x-8"> <li> <a href="/" class="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-pink-600">
Inicio
</a> </li> <li> <a href="/adopta" class="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-pink-600">
Adopta
</a> </li> <li> <a href="/colabora" class="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-pink-600">
Colabora
</a> </li> <li> <a href="/contacto" class="text-gray-700 hover:text-pink-600 font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-pink-600">
Contacto
</a> </li> </ul> </nav> <!-- Botón hamburguesa para móvil (visible solo en móvil) --> <div class="md:hidden"> <button id="mobile-menu-btn" class="text-gray-700 hover:text-pink-600 focus:outline-none focus:text-pink-600 transition-colors" aria-label="Abrir menú de navegación"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Menú móvil (oculto por defecto) --> <div id="mobile-menu" class="md:hidden hidden border-t border-gray-200"> <div class="px-2 pt-2 pb-3 space-y-1 bg-white"> <a href="/" class="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium transition-colors">
🏠 Inicio
</a> <a href="/adopta" class="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium transition-colors">
🐕 Adopta
</a> <a href="/colabora" class="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium transition-colors">
🤝 Colabora
</a> <a href="/contacto" class="block px-3 py-2 text-gray-700 hover:text-pink-600 hover:bg-pink-50 rounded-md font-medium transition-colors">
📞 Contacto
</a> </div> </div> </div> </header> ${renderScript($$result, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/components/NavBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/components/NavBar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 text-white py-8"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> <!-- About --> <div> <h3 class="text-lg font-semibold mb-4 text-pink-500">Sobre Nosotros</h3> <p class="text-gray-300">
Refugio ElTuc es una asociación sin ánimo de lucro dedicada al rescate
          y adopción de animales abandonados.
</p> </div> <!-- Contact --> <div> <h3 class="text-lg font-semibold mb-4 text-fuchsia-500">Contacto</h3> <ul class="text-gray-300 space-y-2"> <li>📍 Calle Ejemplo, 123</li> <li>📱 +34 600 000 000</li> <li>✉️ info@refugioeltuc.org</li> </ul> </div> <!-- Links --> <div> <h3 class="text-lg font-semibold mb-4 text-amber-200">Enlaces</h3> <ul class="text-gray-300 space-y-2"> <li> <a href="/adopta" class="hover:text-amber-200">Adopta</a> </li> <li> <a href="/colabora" class="hover:text-amber-200">Colabora</a> </li> <li> <a href="/contacto" class="hover:text-amber-200">Contacto</a> </li> </ul> </div> </div> <div class="border-t border-gray-700 mt-8 pt-6 text-center"> <p class="text-gray-400">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Refugio ElTuc. Todos los derechos reservados.
</p> </div> </div> </footer>`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Refugio ElTuc - Adopta un amigo" } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Refugio animal - ElTuc"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-screen flex flex-col bg-gray-50" data-astro-cid-sckkx6r4> <!-- Navegación usando el componente NavBar --> ${renderComponent($$result, "NavBar", $$NavBar, { "data-astro-cid-sckkx6r4": true })} <!-- Main Content --> <main class="flex-grow" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer usando el componente Footer --> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })}  </body> </html>`;
}, "/Users/jocelyncastro/Desktop/WEBREFUGITUC/RefugioEltuc/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };

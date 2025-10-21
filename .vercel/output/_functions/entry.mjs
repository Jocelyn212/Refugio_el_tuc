import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_B9DUPaW8.mjs';
import { manifest } from './manifest_Bozwyr4W.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/admin/animals/add-animal.astro.mjs');
const _page2 = () => import('./pages/admin/animals/edit-animal.astro.mjs');
const _page3 = () => import('./pages/admin/animals.astro.mjs');
const _page4 = () => import('./pages/admin/reports.astro.mjs');
const _page5 = () => import('./pages/admin/settings.astro.mjs');
const _page6 = () => import('./pages/admin.astro.mjs');
const _page7 = () => import('./pages/adopta.astro.mjs');
const _page8 = () => import('./pages/adoptar-mascota.astro.mjs');
const _page9 = () => import('./pages/api/animals.astro.mjs');
const _page10 = () => import('./pages/api/auth/login.astro.mjs');
const _page11 = () => import('./pages/api/auth/logout.astro.mjs');
const _page12 = () => import('./pages/api/auth/me.astro.mjs');
const _page13 = () => import('./pages/api/auth/register.astro.mjs');
const _page14 = () => import('./pages/api/db.astro.mjs');
const _page15 = () => import('./pages/api/models/animal.astro.mjs');
const _page16 = () => import('./pages/api/models/user.astro.mjs');
const _page17 = () => import('./pages/colabora.astro.mjs');
const _page18 = () => import('./pages/contacto.astro.mjs');
const _page19 = () => import('./pages/home.astro.mjs');
const _page20 = () => import('./pages/login.astro.mjs');
const _page21 = () => import('./pages/register.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.14.7_@types+node@24.5.2_@vercel+functions@2.2.13_jiti@2.5.1_lightningcss@1.30.1_rollup@4.50.2_typescript@5.9.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/admin/animals/add-animal.astro", _page1],
    ["src/pages/admin/animals/edit-animal.astro", _page2],
    ["src/pages/admin/animals/index.astro", _page3],
    ["src/pages/admin/reports.astro", _page4],
    ["src/pages/admin/settings.astro", _page5],
    ["src/pages/admin/index.astro", _page6],
    ["src/pages/adopta.astro", _page7],
    ["src/pages/adoptar-mascota.astro", _page8],
    ["src/pages/api/animals.js", _page9],
    ["src/pages/api/auth/login.js", _page10],
    ["src/pages/api/auth/logout.js", _page11],
    ["src/pages/api/auth/me.js", _page12],
    ["src/pages/api/auth/register.js", _page13],
    ["src/pages/api/db.js", _page14],
    ["src/pages/api/models/Animal.js", _page15],
    ["src/pages/api/models/User.js", _page16],
    ["src/pages/colabora.astro", _page17],
    ["src/pages/contacto.astro", _page18],
    ["src/pages/home.astro", _page19],
    ["src/pages/login.astro", _page20],
    ["src/pages/register.astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "7482adc1-680f-4878-b325-d54402e2d401",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };

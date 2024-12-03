import { createRouter, createWebHashHistory } from "vue-router";
import { cursosdb } from '@/data/cursos';

const routes = [
  {
    path: "/cursos",
    component: () => import("../page/PaginaPrincipalCursos.vue"),
  },
  {
    path: "/maestrias",
    component: () => import("../page/PaginaPrincipalMaestrias.vue"),
  },

  /* Rutas a maestrias ---------*/
  {
    path: "/maestrias-todos",
    component: () => import("../page/maestrias/PaginaMaestrias.vue"),
  },
  /*NavBar */
  {
    path: "/maestrias/historia",
    component: () => import("../page/Historia/PaginaHistoriaMaestria.vue"),
  },

  {
    path: "/maestrias/noticias",
    component: () => import("../page/noticias/NoticiasMaestrias.vue"),
  },
  {
    path: "/maestrias/preguntas",
    component: () => import("../page/preguntas/PreguntasViewMaestria.vue"),
  },
  {
    path: "/maestrias/formas-pago",
    component: () => import("../page/pago/FormasPagoMaestriaPage.vue"),
  },
  /*Info  (por corregir)*/
  {
    path: "/maestria-transporte",
    component: () => import("../page/maestrias/MaestriaTransportePage.vue"),
  },
  {
    path: "/maestria-estructural",
    component: () => import("../page/maestrias/MaestriaEstructuralPage.vue"),
  },
  {
    path: "/maestria-vial",
    component: () => import("../page/maestrias/MaestriaVialPage.vue"),
  },
  {
    path: "/maestria-sistemas",
    component: () => import("../page/maestrias/MaestriaSistemasPage.vue"),
  },

  /* Rutas a cursos ---------*/
  {
    path: "/cursos-todos",
    component: () => import("../page/cursos/PaginaCursos.vue"),
  },
  /*NavBar */
  {
    path: "/cursos/historia",
    component: () => import("../page/Historia/PaginaHistoriaCursos.vue"),
  },
  {
    path: "/cursos/noticias",
    component: () => import("../page/noticias/NoticiasCursos.vue"),
  },
  {
    path: "/cursos/preguntas",
    component: () => import("../page/preguntas/PreguntasViewCursos.vue"),
  },
  {
    path: "/cursos/formas-pago",
    component: () => import("../page/pago/FormasPagoCursosPage.vue"),
  },
  /*Info  (por corregir)*/
  /*{
    path: "/curso-puentes",
    component: () => import("../page/cursos/Curso1PuentesPage.vue"),
  },
  {
    path: "/curso-arcgis",
    component: () => import("../page/cursos/Curso2ArcGISPage.vue"),
  },
  {
    path: "/curso-analisis",
    component: () => import("../page/cursos/Curso3AnalisisPage.vue"),
  },
  {
    path: "/curso-hidraulico-swmm",
    component: () => import("../page/cursos/Curso4SWMMPage.vue"),
  },
  {
    path: "/curso-hidraulico-epanet",
    component: () => import("../page/cursos/Curso5EPANETPage.vue"),
  },
  {
    path: "/curso-hormigon",
    component: () => import("../page/cursos/Curso6HormigonPage.vue"),
  },
  {
    path: "/curso-sismo-geotecnica",
    component: () => import("../page/cursos/Curso7SismoPage.vue"),
  },
  {
    path: "/curso-ciberseguridad",
    component: () => import("../page/cursos/Curso8CiberseguridadPage.vue"),
  },
  {
    path: "/curso-cloud",
    component: () => import("../page/cursos/Curso9CloudPage.vue"),
  },
  {
    path: "/curso-seguridad",
    component: () => import("../page/cursos/Curso10SeguridadPage.vue"),
  },
  {
    path: "/curso-qgis",
    component: () => import("../page/cursos/Curso11QGISPage.vue"),
  },
  {
    path: "/curso-arcgis-avanzado",
    component: () => import("../page/cursos/Curso12ArcGISAvanzadoPage.vue"),
  },*/

  /* Rutas a adicionales */
  {
    path: '/:pathMatch(.*)*',
    component: () => import("../page/NotFoundPage.vue"),
  },
  

];

// Añadir rutas dinámicas para los cursos
cursosdb.forEach(curso => {
  routes.push({
    path: curso.url,
    component: () => import("../page/cursos/CursoGenericoPage.vue"),
    props: { curso }
  });
});

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
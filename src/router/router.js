import { createRouter, createWebHashHistory } from "vue-router";
import { cursosdb } from '@/data/cursos';
import { maestriasdb } from '@/data/maestrias';

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
  /* Rutas a adicionales */
  {
    path: '',
    component: () => import("../page/NotFoundPage.vue"),
  },
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

// Añadir rutas dinámicas para las maestrías
maestriasdb.forEach(maestria => {
  routes.push({
    path: maestria.url,
    component: () => import("../page/maestrias/MaestriaGenericaPage.vue"), // Asegúrate de tener un componente genérico para maestrías
    props: { maestria }
  });
});

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <Curso10Seguridad />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso10Seguridad from "@/components/cursos/Curso10Seguridad.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    NavBar,
    Breadcrumb,
    Curso10Seguridad,
    Footer,
    BtnAtras,
  },
  data() {
    return {
      logo: logo,
      texto:"Curso de Indicadores de Seguridad y Seguridad Ocupacional",
      atras: "cursos",
    };
  },
};
</script>

<style src="../../css/diseñoCursosPage.css" scoped>
</style>


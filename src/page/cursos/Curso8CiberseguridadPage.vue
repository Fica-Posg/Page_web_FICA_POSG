<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <Curso8Ciberseguridad />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso8Ciberseguridad from "@/components/cursos/Curso8Ciberseguridad.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    BtnAtras,
    NavBar,
    Breadcrumb,
    Curso8Ciberseguridad,
    Footer
  },
  data() {
    return {
      logo: logo,
      atras: "cursos",
      texto: "Curso de Especialización en Ciberseguridad"
    };
  },
};
</script>

<style src="../../css/diseñoCursosPage.css" scoped>
</style>

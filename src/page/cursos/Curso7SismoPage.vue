<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <Curso7Sismo />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso7Sismo from "@/components/cursos/Curso7Sismo.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    BtnAtras,
    NavBar,
    Breadcrumb,
    Curso7Sismo,
    Footer
  },
  data() {
    return {
      logo: logo,
      atras: "cursos",
      texto:"Curso Especializado en Ingeniería Sismo-Geotécnica y Interacción Suelo-Estructura"
    };
  },
};
</script>

<style src="../../css/diseñoCursosPage.css" scoped>
</style>

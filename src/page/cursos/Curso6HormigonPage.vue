<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <Curso6Hormigon />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso6Hormigon from "@/components/cursos/Curso6Hormigon.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    BtnAtras,
    NavBar,
    Breadcrumb,
    Curso6Hormigon,
    Footer
  },
  data() {
    return {
      logo: logo,
      atras: "cursos",
      texto: "Curso de Diseño de Canales y Alcantarillas de Hormigón Armado con la Norma AA SHTO LRFD 2017 y SAP 2000"
    };
  },
};
</script>

<style src="../../css/diseñoCursosPage.css" scoped>
</style>

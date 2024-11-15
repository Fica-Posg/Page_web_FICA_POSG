<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <Curso11QGIS />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso11QGIS from "@/components/cursos/Curso11QGIS.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    NavBar,
    Breadcrumb,
    Curso11QGIS,
    BtnAtras,
    Footer
  },
  data() {
    return {
      logo: logo,
      texto:"Curso en Sistema de Información Geográfica con QGIS",
      atras: "cursos",
    };
  },
};
</script>

<style src="../../css/diseñoCursosPage.css" scoped>
</style>

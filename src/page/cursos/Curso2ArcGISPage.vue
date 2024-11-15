<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>

    <div class="content-wrap">
      <div class="container">
        <Curso2ArcGIS />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso2ArcGIS from "@/components/cursos/Curso2ArcGIS.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    BtnAtras,
    NavBar,
    Breadcrumb,
    Curso2ArcGIS,
    Footer
  },
  data() {
    return {
      logo: logo,
      texto: "Curso en Sistemas de Información Geográfica con ArcGIS",
      atras: "cursos",
    };
  },
};
</script>

<style src="../../css/diseñoCursosPage.css" scoped>
</style>

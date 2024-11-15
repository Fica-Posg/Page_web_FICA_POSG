<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <Curso5EPANET />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso5EPANET from "@/components/cursos/Curso5EPANET.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    NavBar,
    Breadcrumb,
    Curso5EPANET,
    BtnAtras,
    Footer
  },
  data() {
    return {
      logo: logo,
      atras: "cursos",
      texto:"Curso de Análisis de Funcionamiento Hidráulico de Redes de Distribución con EPANET"
    };
  },
};
</script>

<style src="../../css/diseñoCursosPage.css" scoped>
</style>

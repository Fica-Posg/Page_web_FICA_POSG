<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <Curso1Puentes />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso1Puentes from "@/components/cursos/Curso1Puentes.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    NavBar,
    Breadcrumb,
    Curso1Puentes,
    Footer,
    BtnAtras
  },
  data() {
    return {
      logo: logo,
      texto: "Curso de Diseño de Puentes de Acero de Alma Llena Aplicando la Norma AA SHTO LRFD 2017 y CSI BRIDGE",
      atras: "cursos",
    };
  },
};
</script>

<style src="../../css/diseñoCursosPage.css" scoped>
</style>

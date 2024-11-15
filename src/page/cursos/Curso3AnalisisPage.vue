<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>

    <div class="content-wrap">
      <div class="container">
        <Curso3Analisis />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso3Analisis from "@/components/cursos/Curso3Analisis.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    NavBar,
    Breadcrumb,
    Curso3Analisis,
    Footer,
    BtnAtras,
  },
  data() {
    return {
      logo: logo,
      atras: "cursos",
      texto: "Curso de Especialización en Análisis no Lineal y Diseño por Desempeño Sísmico de Estructura"
    };
  },
};
</script>
<style src="../../css/diseñoCursosPage.css" scoped>
</style>

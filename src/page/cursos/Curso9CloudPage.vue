<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocurso="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <Curso9Cloud />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>
    
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
import Curso9Cloud from "@/components/cursos/Curso9Cloud.vue";
import Footer from "@/components/inicio/Footer.vue";
import logo from "@/assets/logo_uce.png";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";

export default {
  components: {
    NavBar,
    Breadcrumb,
    Curso9Cloud,
    Footer,
    BtnAtras,
  },
  data() {
    return {
      logo: logo,
      texto: "Curso de Especialización en Gestión del Cloud Computing en la Empresa",
      atras: "cursos",
    };
  },
};
</script>

<style src="../../css/diseñoCursosPage.css" scoped>
</style>

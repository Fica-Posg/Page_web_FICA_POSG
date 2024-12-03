<template>
    <div class="page-container">
      <NavBar class="navbar" />
      <div class="breadcrumb">
        <Breadcrumb :tipocurso="curso.titleMain"/>
      </div>
      <div class="content-wrap">
        <div class="container">
          <CursoGenerico :curso="curso" />
          <BtnAtras :atras="atras"/>
          <Footer/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/navBar/NavBarCursos.vue";
  import Breadcrumb from "@/components/breadcrumb/BreadcrumbCursos.vue";
  import CursoGenerico from "@/components/cursos/CursoGenerico.vue";
  import Footer from "@/components/inicio/Footer.vue";
  import logo from "@/assets/logo_uce.png";
  import BtnAtras from "@/components/boton/BtnAtrasLista.vue";
  
  export default {
    components: {
      NavBar,
      Breadcrumb,
      CursoGenerico,
      Footer,
      BtnAtras
    },
    props: ['curso'],
    data() {
      return {
        logo: logo,
        atras: "cursos",
      };
    },
  };
  </script>
  
  <style src="../../css/diseñoCursosPage.css" scoped></style>
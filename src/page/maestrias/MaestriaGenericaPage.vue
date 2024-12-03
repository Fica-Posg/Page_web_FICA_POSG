<template>
    <div class="page-container">
      <NavBar class="navbar" />
      <div class="breadcrumb">
        <Breadcrumb :tipomaestria="maestria.titleMain"/>
      </div>
      <div class="content-wrap">
        <div class="container">
          <MaestriaGenerica :maestria="maestria" />
          <BtnAtras :atras="atras"/>
          <Footer/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from "@/components/navBar/NavBarMaestrias.vue";
  import Breadcrumb from "@/components/breadcrumb/BreadcrumbMaestrias.vue";
  import MaestriaGenerica from "@/components/maestrias/MaestriaGenerica.vue";
  import Footer from "@/components/inicio/Footer.vue";
  import BtnAtras from "@/components/boton/BtnAtrasLista.vue";
  import logo from "@/assets/logo_uce.png";
  
  export default {
    components: {
      NavBar,
      Breadcrumb,
      MaestriaGenerica,
      Footer,
      BtnAtras
    },
    props: ['maestria'],
    data() {
      return {
        logo: logo,
        atras: "maestrias",
      };
    },
  };
  </script>
  
  <style src="../../css/estiloPageMaestrias.css" scoped></style>
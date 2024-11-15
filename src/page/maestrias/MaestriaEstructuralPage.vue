<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocmaestria="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <MaestriaEstructural />
        <BtnAtras :atras="atras"/>
        <Footer/>
      </div>
    </div>
    
  </div>
</template>
  
  <script>
import NavBar from "@/components/navBar/NavBarMaestrias.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbMaestrias.vue";
import logo from "@/assets/logo_uce.png";
import MaestriaEstructural from "@/components/maestrias/MaestriaEstructural-DeBaja.vue";
import Footer from "@/components/inicio/Footer.vue";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";


export default {
  components: {
    NavBar,
    Breadcrumb,
    MaestriaEstructural,
    Footer,
    BtnAtras,
  },
  data() {
    return {
      logo: logo,
      texto: "Maestría en Ingeniería Civil, mención en Ingeniería de Transporte y Planificación de Tránsito (2da cohorte)",
      atras: "maestrias",
    };
  },
};
</script>
  
<style src="../../css/estiloPageMaestrias.css" scoped>
</style>
  
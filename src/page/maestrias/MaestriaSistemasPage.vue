<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <div class="breadcrumb">
      <Breadcrumb :tipocmaestria="texto"/>
    </div>
    <div class="content-wrap">
      <div class="container">
        <MaestriaSistemas />
        <BtnAtras :atras="atras"/>
        <Footer />
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarMaestrias.vue";
import Breadcrumb from "@/components/breadcrumb/BreadcrumbMaestrias.vue";
import logo from "@/assets/logo_uce.png";
import MaestriaSistemas from "@/components/maestrias/MaestriaSistemas.vue";
import Footer from "@/components/inicio/Footer.vue";
import BtnAtras from "@/components/boton/BtnAtrasLista.vue";


export default {
  components: {
    NavBar,
    Breadcrumb,
    MaestriaSistemas,
    Footer,
    BtnAtras,
  },
  data() {
    return {
      logo: logo,
      atras: "maestrias",
      texto: "Maestría en Sistemas de Información, mención en Inteligencia de Negocios (2da cohorte)"
    };
  },
};
</script>

<style src="../../css/estiloPageMaestrias.css" scoped>
</style>

<template>
  <div class="container">
    <NavBar class="navbar" />
    <div class="header">
      <h1>Noticias</h1>
    </div>
    <div class="noticias">
      <!-- agregar noticias -->
      <Noticia :newsId="'procTitu'" />
      
      <Noticia :newsId="'mcivil1'" />
      <Noticia :newsId="'mcivil2'" />
      <Noticia :newsId="'mcivil3'" />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Footer from "@/components/inicio/Footer.vue";
import Noticia from "@/components/noticia/Noticia.vue";

export default {
    components: {
    NavBar,
    Footer,
    Noticia,
  },
}
</script>

<style src="@/css/estiloNoticia.css" scoped></style>
<template>
  <div class="container">
    
    <NavBar class="navbar" />
        <div class="header">
            <h1>Noticias</h1>
        </div>
     <div class="noticias">  
      <Noticia :newsId="'mcivil1'" />
      <Noticia :newsId="'mcivil2'" />
      <Noticia :newsId="'mcivil3'" />

    </div> 
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarMaestrias.vue";
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

<style scoped>
.header {
    background: linear-gradient(to right, #1e446b, #00aaff); /* Degradado de azul oscuro a azul claro */
    padding: 0.5%;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); 
}
h1 {
    color: white;
    font-size: 2.5rem;
    margin: 1% 0% 1% 0%;
    text-align: center;
}
.noticias{
  margin-top: 2%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); 

}
</style>
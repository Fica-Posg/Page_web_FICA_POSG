<template>
  <div class="container">
    
    <NavBar class="navbar" />
    <div class="header">
            <h1>Noticias</h1>
    </div>
    <div class="noticias">
      <!-- agregar noticias -->
      <Noticia :newsId="'null'" />
    </div> 
    <Footer/>
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

<style scoped>
@font-face {
    font-family: 'Gravity';
    src: url('@/assets/fonts/Gravity-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}

* {
    font-family: 'Gravity', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: white;
}

.header {
    background: linear-gradient(to right, #1e446b, #00aaff); /* Degradado */
    padding: 1%;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
}

h1 {
    color: white;
    font-size: 2.5rem;
    margin: 0;
    text-align: center;
}

.noticias {
    margin: 20px auto;
    padding: 20px;
    max-width: 800px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    background-color: #f9f9f9;
    text-align: justify;
}
</style>

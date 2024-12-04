<template>
  <div class="container">
    <NavBar class="navbar" />
    <div class="header">
      <h1>Noticias</h1>
    </div>
    <div class="noticias">
      <Noticia v-for="noticia in sortedNoticias" :key="noticia.id" :newsId="noticia.id" />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarMaestrias.vue";
import Footer from "@/components/inicio/Footer.vue";
import Noticia from "@/components/noticia/Noticia.vue";
import { noticiasMaestrias } from "@/data/noticiasMaestrias.js"; // Asegúrate de que esta ruta sea correcta

export default {
  components: {
    NavBar,
    Footer,
    Noticia,
  },
  data() {
    return {
      noticias: noticiasMaestrias
    };
  },
  computed: {
    sortedNoticias() {
      return this.noticias.slice().sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        if (dateA > dateB) return -1;
        if (dateA < dateB) return 1;
        // If dates are equal, maintain the order in the JSON
        return 0;
      });
    }
  }
};
</script>

<style scoped>
.header {
  background: linear-gradient(to right, #1e446b, #00aaff);
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
.noticias {
  margin-top: 2%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
}
</style>
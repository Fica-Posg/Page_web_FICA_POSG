<template>
  <div class="page-container">
    <NavBar class="navbar" />

    <!-- Breadcrumb -->
    <nav class="breadcrumb">
      <ul>
        <li><a href="/#/cursos">Inicio</a></li>
        <li>Cursos</li>
      </ul>
    </nav>

    <div class="content-wrap">
      <div class="container">
        <CursosLista />
      </div>
    </div>
    <Footer/>
    <a
      href="https://wa.me/593983747088"
      class="whatsapp-button"
      target="_blank"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp.png"
        alt="WhatsApp"
      />
      <span class="tooltip">Chatea con nosotros</span>
    </a>
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import CursosLista from "@/components/cursos/CursosLista.vue";
import logo from "@/assets/logo_uce.png";
import Footer from "@/components/inicio/Footer.vue";

export default {
  components: {
    NavBar,
    CursosLista,
    Footer,
  },
  data() {
    return {
      logo: logo,
    };
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Gravity';
  src: url('@/assets/fonts/Gravity-Regular.otf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Gravity', sans-serif;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  font-family: 'Gravity', sans-serif;
}

.breadcrumb {
  margin-bottom: 20px;
}

.breadcrumb ul {
  list-style: none;
  padding: 0;
  display: flex;
}

.breadcrumb li {
  margin-right: 10px;
}

.breadcrumb li a {
  color: #007bff;
  text-decoration: none;
}

.breadcrumb li a:hover {
  text-decoration: underline;
}

.breadcrumb li::after {
  content: " » ";
  margin-left: 10px;
}

.breadcrumb li:last-child::after {
  content: "";
  margin-left: 0;
}

.content-wrap {
  flex: 1;
  padding: 0;
  overflow: auto;
}

.container {
  position: relative;
  text-align: left;
  margin-left: 0;
  align-items: left;
}

.navbar {
  position: relative;
  top: 0;
  z-index: 1000;
  background-color: white;
  width: 100%;
  text-align: left;
}

.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  text-decoration: none;
}

.whatsapp-button:hover {
  transform: scale(1.1);
}

.whatsapp-button img {
  width: 30px;
  height: 30px;
}

.tooltip {
  visibility: hidden;
  width: 110px;
  background-color: #25d366;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%; 
  left: 50%;
  margin-left: -70px;
  opacity: 0;
  transition: opacity 0.3s;
  z-index: 1005;
}

.whatsapp-button:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Gravity', sans-serif;
}
</style>

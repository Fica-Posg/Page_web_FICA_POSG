<template>
  <div class="page-container">
    <NavBar class="navbar" />
  
    <div class="deslizables"><Deslizables /></div>

    
    <div class="content-wrap">
      <div class="container">
        <CursosYProgramas />
        <Footer/>
      </div>
    </div>

  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Deslizables from "@/components/inicio/DeslizablesCursos.vue";
import CursosYProgramas from "@/components/inicio/ComponentCursosProgramas.vue";
import Footer from "@/components/inicio/Footer.vue"; 

export default {
  components: {
    NavBar,
    CursosYProgramas,
    Deslizables,
    Footer, 
  },
};
</script>

<style scoped>
@font-face {
  font-family: 'Gravity';
  src: url('@/assets/fonts/Gravity-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: white;
  font-family: 'Gravity', sans-serif; 
}

.content-wrap {
  flex: 1;
  padding: 0;
  overflow: auto;
  font-family: 'Gravity', sans-serif; 
}

.container {
  position: relative;
  text-align: left;
  margin-left: 0;
  align-items: left;
}

.deslizables {
  position: relative;
  z-index: 1001;
}

.navbar {
  position: relative;
  z-index: 1002;
}
</style>

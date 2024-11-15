<template>
  <div class="page-container">
    <NavBar class="navbar" />
    <Particulas id="particulas" />
    <Deslizables class="deslizables" />

    <div class="content-wrap">
      <div class="two-columns">
        <div class="history">
          <Accordion :activeIndex="activeIndex" class="acordeon-mv">
            <!-- Sección Misión y Visión -->
            <AccordionTab>
              <template #header>
                <i class="pi pi-compass" style="font-size: 1.4rem; margin-right: 10px;"></i>
                <span>Misión y Visión</span>
              </template>
              <h5><strong>MISIÓN</strong></h5>
              <p>
                Formar profesionales especializados de cuarto nivel, en áreas relacionadas con Ingeniería y Ciencias,
                mediante programas académicos de excelencia; que fomenten el conocimiento, la innovación, el liderazgo y
                la ética para enfrentar los retos actuales y futuros, conservando la identidad institucional a nivel
                nacional.
              </p>
              <h5><strong>VISIÓN</strong></h5>
              <p>
                Ser un líder en el ámbito nacional en programas de cuarto nivel y cursos de formación profesional, en los
                campos de la ingeniería y ciencias, priorizando la innovación y la excelencia académica.
              </p>
            </AccordionTab>

            <!-- Sección Valores -->
            <AccordionTab>
              <template #header>
                <i class="pi pi-book" style="font-size: 1.4rem; margin-right: 10px;"></i>
                <span>Valores</span>
              </template>
              <ul>
                <li><strong>Honestidad:</strong> Ejecución y promoción de actividades inherentes a la formación
                  profesional de manera integral y transparente.
                </li>
                <li><strong>Proactividad:</strong> Capacidad para innovar y proponer soluciones para una mejora continua.
                </li>
                <li><strong>Responsabilidad social:</strong> Generación de un impacto positivo al país, mediante la
                  formación de líderes éticos, comprometidos con el desarrollo nacional y su entorno.
                </li>
                <li><strong>Profesionalismo:</strong> Compromiso con la excelencia, trabajo en equipo, respeto y
                  responsabilidad con la comunidad.
                </li>
                <li><strong>Resiliencia:</strong> Predisposición al cambio y capacidad de adaptación a nuevos entornos y
                  desafíos en el medio social y laboral.
                </li>
              </ul>
            </AccordionTab>
          </Accordion>
        </div>

        <div class="video-container">
          <iframe
            width="100%"
            height="100%"
            :src="videoUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="container">
        <ComponentMaestrias class="comp-maestria" />
      </div>
    </div>
  </div>

  <div class="footer">
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarMaestrias.vue";
import Particulas from "@/components/inicio/Particulas.vue";
import Deslizables from "@/components/inicio/DeslizablesMaestrias.vue";
import ComponentMaestrias from "@/components/inicio/ComponentMaestrias.vue";
import Footer from "@/components/inicio/Footer.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

export default {
  components: {
    NavBar,
    ComponentMaestrias,
    Deslizables,
    Footer,
    Particulas,
    Accordion,
    AccordionTab,
  },
  data(){
    return{
      activeIndex: 0,
      videoUrl: "https://www.youtube.com/embed/0rBCqvXuKBI?autoplay=1&mute=1" 

    }
  }
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
}

.content-wrap {
  flex: 1;
  padding: 0;
  overflow: auto;
  background-color: white; 

}

.container {
  position: relative;
  text-align: left;
  margin-left: 0;
  align-items: left;
}

#particulas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}
.deslizables {
  position: relative;
  z-index: 1001;
}
.comp-maestria {
  position: relative;
  z-index: 1002;
  background-color: rgba(255, 255, 255, 0);
}
.navbar {
  position: relative;
  z-index: 1003;
  background-color: rgba(255, 255, 255, 0.429);
}

.footer {
  position: relative;
  z-index: 1004;
}
.two-columns {
    display: flex;
    justify-content: space-between;
    gap: 5%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 2%;
    background: rgba(255, 255, 255, 0.9);
    z-index: 1001;
    position: relative;
    border-radius: 2%;
    margin: 45px;
}
.history {
    width: 50%; 
    text-align: justify;
    margin-left: 2%;
    z-index: 1000;
    margin: 5px;


}
.video-container {
    width: 50%; 
    height: auto; 
    min-height: 450px;
    display: flex;
    align-items: center; 
    justify-content: center; 
    margin-top: 2%;
    margin-right: 2%;
    z-index: 1000;

}
.history p {
    line-height: 1.6; 
    margin-bottom: 1rem; 
    font-family: 'Gravity', sans-serif !important;
    

}

.history li {
    line-height: 1.4; 
    margin-bottom: 1rem; 
    font-family: 'Gravity', sans-serif;

}
h5, span { 
  font-family: 'Gravity', sans-serif !important;
}
@media (max-width: 1100px) {
    .two-columns {
        flex-direction: column;
        align-items: center;
        margin: 0;
        padding: 0;
    }

    .history, .video-container {
        width: 100%;
        margin: 20px;
    }

    .video-container {
        margin-bottom: 0;
        height: 200px;
    }
}
</style>

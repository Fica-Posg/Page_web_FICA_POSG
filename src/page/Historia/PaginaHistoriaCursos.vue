<template>
  <div class="container">
    <NavBar class="navbar" />

    <div class="hero">
      <img src="@/assets/historia/Recurso21.png" alt="HISTORIA CONSEJO DE POSGRADO" class="solid-image" />
    </div>

    <section class="content">
      <div class="two-columns">
        <div class="history">
          <p>
            La Facultad de Ingeniería en Ciencias Aplicadas ha liderado la enseñanza en tecnología e innovación educativa, desarrollando una oferta de cursos en diversas áreas para responder a las demandas del mercado y del entorno académico. A lo largo de los años, sus programas han evolucionado constantemente, integrando nuevas herramientas y tecnologías emergentes.
          </p>
          <p>
            Estos cursos están diseñados para beneficiar tanto a estudiantes como a profesionales del sector público y privado, consolidando a la facultad como un referente en formación especializada. Hoy, la Facultad de Ingeniería en Ciencias Aplicadas mantiene su compromiso con la excelencia académica, ofreciendo programas que combinan conocimientos avanzados y prácticas innovadoras.

          </p>
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

      <h2>Evolución e Incorporación de Cursos Académicos</h2>

      <div class="timeline-container" ref="timelineContainer">
        <div class="timeline-line" ref="timelineLine" :style="{ background: currentColor }"></div>
        <Timeline :value="events" align="alternate" class="customized-timeline">
          <template #marker="slotProps">
            <span
              class="flex w-8 h-8 items-center justify-center z-10 shadow-sm icon-circle"
              :style="{ backgroundColor: slotProps.item.color }"
            >
              <i class="pi" :class="slotProps.item.icon"></i>
            </span>
          </template>
          <template #content="slotProps">
            <Card class="mt-4 timeline-card animated-card">
              <template #title>
                {{ slotProps.item.status }}
              </template>
              <template #subtitle>
                {{ slotProps.item.date }}
              </template>
              <template #content>
                <ul v-if="!slotProps.item.expanded" class="timeline-card-content" v-html="slotProps.item.shortDescription"></ul>
                <div class="boton">              
                  <Button
                    v-if="!slotProps.item.expanded"
                    @click="slotProps.item.expanded = true"
                    label="Ver más"
                    class="boton-ver-mas"
                  />
                  <ul v-if="slotProps.item.expanded" class="timeline-card-content" v-html="slotProps.item.fullDescription"></ul>
                </div>  
                  <div class="boton"> 
                  <Button
                    v-if="slotProps.item.expanded"
                    @click="slotProps.item.expanded = false"
                    label="Ver menos"
                    class="boton-ver-mas"
                  />
                  </div>
                
              </template>
            </Card>
          </template>
        </Timeline>
      </div>
    </section>
    <Footer />
  </div>
</template>


<script>
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Footer from "@/components/inicio/Footer.vue";
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import Button from 'primevue/button';

export default {
  components: {
    NavBar,
    Footer,
    Timeline,
    Card,
    Button,
  },
  data() {
  return {
    events: [
    {
        status: "Septiembre 2010",
        icon: "pi pi-circle",
        color: "#a8e6a3",
        shortDescription: `
          <ul>
            El área de capacitación informática pasa a pertenecer a la Facultad de Ingeniería, Ciencias Físicas y Matemáticas.
          </ul>
        `,
        fullDescription: `
          <ul>El área de capacitación informática pasa a pertenecer a la Facultad de Ingeniería, Ciencias Físicas y Matemáticas. Se empiezan a dictar cursos abiertos a estudiantes, profesores, empleados y particulares, con el objetivo de capacitar a los usuarios en el manejo y utilización de software para microcomputadoras.
          </ul>
        `,
      },
      {
        status: "Cursos ofrecidos en 2010",
        icon: "pi pi-circle",
        color: "#92d3be",
        shortDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>EXCEL AVANZADO</li>
          </ul>
        `,
        fullDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>EXCEL AVANZADO</li>
            <li>EXCEL BÁSICO</li>
            <li>PLANIFICACIÓN Y CONTROL DE PROYECTOS CON PROJECT BASICO</li>
          </ul>
        `,
      },
      {
        status: "Cursos ofrecidos en 2011",
        icon: "pi pi-circle",
        color: "#7cbfda",
        shortDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>AUTOCAD 2D</li>
          </ul>
        `,
        fullDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>ANIMACIÓN 3D-MAX</li>
            <li>AUTOCAD 2D</li>
            <li>AUTOCAD 3D</li>
            <li>ESTADÍSTICA CON SPSS</li>
            <li>EXCEL AVANZADO</li>
            <li>EXCEL BÁSICO</li>
            <li>EXCEL FINANCIERO</li>
            <li>GESTIÓN DE BASE DE DATOS CON ACCESS</li>
            <li>INTERNET APLICADO A LA EDUCACIÓN</li>
            <li>INTERNET Y CORREO ELECTRÓNICO</li>
            <li>MANEJO DE PROYECTOS CON PROJECT AVANZADO</li>
          </ul>
        `,
      },
      {
        status: "Cursos ofrecidos en 2012",
        icon: "pi pi-circle",
        color: "#66aadb",
        shortDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>ANIMACIÓN 3D-MAX</li>
          </ul>
        `,
        fullDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>ANIMACIÓN 3D-MAX</li>
            <li>AUTOCAD 2D</li>
            <li>AUTOCAD 3D</li>
            <li>DISEÑO DE PÁGINAS WEB BÁSICO (DREAMWEAVER)</li>
            <li>ESTADÍSTICA CON SPSS</li>
            <li>EXCEL AVANZADO</li>
            <li>EXCEL BÁSICO</li>
            <li>EXCEL FINANCIERO</li>
            <li>INTERNET APLICADO A LA EDUCACIÓN</li>
            <li>INTERNET Y CORREO ELECTRÓNICO</li>
            <li>MANEJO DE PROYECTOS CON PROJECT AVANZADO</li>
            <li>PLANIFICACIÓN Y CONTROL DE PROYECTOS CON PROJECT BÁSICO</li>
            <li>WINDOWS OFFICE BÁSICO E INTERNET</li>
            <li>WORD AVANZADO</li>
          </ul>
        `,
      },
      {
        status: "Cursos ofrecidos en 2013",
        icon: "pi pi-circle",
        color: "#5095db",
        shortDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>ANIMACIÓN 3D-MAX</li>
          </ul>
        `,
        fullDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>ANIMACIÓN 3D-MAX</li>
            <li>AUTOCAD 2D</li>
            <li>AUTOCAD 3D</li>
            <li>CAD AVANZADO</li>
            <li>CAD BÁSICO</li>
            <li>DISEÑO DE PÁGINAS WEB BÁSICO (DREAMWEAVER)</li>
            <li>ESTADÍSTICA CON SPSS</li>
            <li>ETABS (ANÁLISIS Y DISEÑO ESTRUCTURAL PARA EDIFICIOS)</li>
            <li>EXCEL AVANZADO</li>
            <li>EXCEL BÁSICO</li>
            <li>EXCEL FINANCIERO</li>
            <li>INTERNET APLICADO A LA EDUCACIÓN</li>
            <li>INTERNET Y CORREO ELECTRÓNICO</li>
            <li>MANEJO DE PROYECTOS CON PROJECT AVANZADO</li>
            <li>MANTENIMIENTO Y ENSAMBLAJE DE COMPUTADORAS</li>
            <li>MAT-LAB</li>
            <li>PLANIFICACIÓN Y CONTROL DE PROYECTOS CON PROJECT BÁSICO</li>
            <li>WINDOWS OFFICE BÁSICO E INTERNET</li>
            <li>WORD AVANZADO</li>
          </ul>
        `,
      },
      {
        status: "Cursos ofrecidos en 2014",
        icon: "pi pi-circle",
        color: "#3a80dc",
        shortDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>ANIMACIÓN 3D-MAX</li>
          </ul>
        `,
        fullDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>ANIMACIÓN 3D-MAX</li>
            <li>AUTOCAD 2D</li>
            <li>AUTOCAD 3D</li>
            <li>ESTADÍSTICA CON SPSS</li>
            <li>ETABS (ANÁLISIS Y DISEÑO ESTRUCTURAL PARA EDIFICIOS)</li>
            <li>EXCEL AVANZADO</li>
            <li>EXCEL BÁSICO</li>
            <li>EXCEL FINANCIERO</li>
            <li>INTERNET APLICADO A LA EDUCACIÓN</li>
            <li>INTERNET Y CORREO ELECTRÓNICO</li>
            <li>MANTENIMIENTO Y ENSAMBLAJE DE COMPUTADORAS</li>
            <li>MAT-LAB</li>
            <li>PLANIFICACIÓN Y CONTROL DE PROYECTOS CON PROJECT BÁSICO</li>
            <li>WINDOWS OFFICE BÁSICO E INTERNET</li>
            <li>WORD AVANZADO</li>
          </ul>
        `,
      },
      {
        status: "Cursos ofrecidos en 2015",
        icon: "pi pi-circle",
        color: "#246bdd",
        shortDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>ESTADÍSTICA CON SPSS</li>
          </ul>
        `,
        fullDescription: `
          <ul>
            <li>ANÁLISIS Y DISEÑO DE ESTRUCTURAL CON SAP2000</li>
            <li>AUTOCAD 2D</li>
            <li>AUTOCAD 3D</li>
            <li>ESTADÍSTICA CON SPSS</li>
            <li>ETABS (ANÁLISIS Y DISEÑO ESTRUCTURAL PARA EDIFICIOS)</li>
            <li>EXCEL AVANZADO</li>
            <li>EXCEL BÁSICO</li>
            <li>INTERNET APLICADO A LA EDUCACIÓN</li>
            <li>INTERNET Y CORREO ELECTRÓNICO</li>
            <li>MANEJO DE PROYECTOS CON PROJECT AVANZADO</li>
            <li>MANTENIMIENTO Y ENSAMBLAJE DE COMPUTADORAS</li>
            <li>PLANIFICACIÓN Y CONTROL DE PROYECTOS CON PROJECT BÁSICO</li>
            <li>WINDOWS OFFICE BÁSICO E INTERNET</li>
            <li>WORD AVANZADO</li>
          </ul>
        `,
      }
    ],
    currentColor: '#a8e6a3', // Color inicial de la línea
    videoUrl: "https://www.youtube.com/embed/ZhpESglF5XY" 
  };

  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const timelineContainer = this.$refs.timelineContainer;
      const timelineLine = this.$refs.timelineLine;

      if (!timelineContainer || !timelineLine) return;

      const containerRect = timelineContainer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrolled = windowHeight - containerRect.top;

      const totalHeight = containerRect.height;
      const progress = Math.max(Math.min((scrolled / totalHeight) * 100, 100), 0);

      timelineLine.style.height = `${progress}%`;

      for (let i = 0; i < this.events.length; i++) {
        const event = this.events[i];
        const markerPosition = ((i + 1) / this.events.length) * 100;

        if (progress >= markerPosition) {
          this.currentColor = event.color;
          timelineLine.style.background = this.currentColor;
        }
      }
    },
  },
};
</script>

<<style scoped>
@font-face {
  font-family: 'Gravity';
  src: url('@/assets/fonts/Gravity-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

.container {
  font-family: 'Gravity', sans-serif;
    color: #333;
}

.hero {
    text-align: center;
}

.solid-image {
    width: 100%;
    height: auto; 
    display: block; 
    margin: 0 auto; 
}

.title {
    text-align: center;
    font-size: 3rem;
    color: #0c56c4;
    margin-top: 20px;
}

.content {
    padding: 20px;
    background-color: #f9f9f9;
}

.two-columns {
    display: flex;
    justify-content: space-between; 
    gap: 5%;
}

.history {
    width: 50%; 
    text-align: justify;
    margin-left: 2%;
}

.video-container {
    width: 50%; 
    display: flex;
    align-items: center; 
    justify-content: center; 
    margin-top: 2%;
    margin-right: 2%;
    height: auto; 

}

@media (max-width: 800px) {
    .two-columns {
        flex-direction: column;
    }

    .history, .video-container {
        width: 100%; 
        height: auto;
    }

    .video-container {
        margin-top: 5%;
    }
}

.history p {
    font-size: 1.1rem;
    line-height: 1.6;
}

h2 {
    color: #1a388d;
    text-align: center;
    margin-top: 4%;
}

p {
margin-top: 1%;
  padding: 2%;
  font-size: 1.5rem;
}

.timeline-container {
    position: relative;
    margin-top: 3%;
}

.timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px; 
    height: 0;
    transform: translateX(-50%);
    z-index: 0;
}
.customized-timeline {
    position: relative;
    z-index: 0;
}

.customized-timeline .p-card {
    border-radius: 20px;
    background: #ebebeb;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); 

}

@keyframes slideInFromTop {
    0% {
        opacity: 0;
        transform: translateY(-50px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animated-card {
    animation: slideInFromTop 0.8s ease-out forwards;
    opacity: 0;
}

.timeline-container .flex {
    width: 20px; 
    height: 20px; 
    border-radius: 50%; 
    display: flex;
    background: white;
    align-items: center;
    justify-content: center;
}
::v-deep .p-timeline.p-timeline-vertical .p-timeline-event-connector {
    width: 0px !important; 
}
.timeline-card-content {
    text-align: left;
    text-align: justify;
    margin: 5% 5% 2% -10%
}
.pi-circle:before {
    background: white; 
    border-radius: 50%; 
    width: 10px; 
    height: 10px; 
    display: flex; 
    color: transparent; 
    position: relative;
}
::v-deep .p-card-title {
    font-size: 1rem;
    font-weight: 700;
    padding: 0%;
    font-family: 'Gravity', sans-serif;

}
::v-deep .p-card .p-card-content {
    padding: 0px;
}
.boton-ver-mas {
  display: flex; 
  justify-content: right; 
  align-items: center; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); 
  border-radius: 10%; 
  cursor: pointer; 
  border: none; 
  text-align: center;
  background-color: #63affa; 
  font-size: 10px;
  padding: 1% 3%;
  font-family: 'Gravity', sans-serif;

}

.boton-ver-mas:hover {
  background-color: #93c7ff; 
  transform: scale(1.05); 
}

.boton-ver-mas:hover:active {
  transform: scale(0.95); 
}
.boton{
  display: flex;
  justify-content: right;
}
iframe {
    width: 100%;
    height: auto; 
    aspect-ratio: 16/9; 
}
ul{
  font-family: 'Gravity', sans-serif;
}
</style>

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
            La Facultad de Ingeniería en Ciencias Aplicadas de la Universidad Central del Ecuador, comprometida con la excelencia académica y la formación de profesionales de alto nivel, ha desarrollado una sólida oferta de programas de posgrado a lo largo de los años. Las maestrías nacieron con el propósito de responder a las demandas sociales y tecnológicas del país, adaptándose a las necesidades emergentes del mercado y fomentando el conocimiento especializado en diversas áreas.

            posgrado.
          </p>
          <p>
            Hoy en día, la Facultad de Ingeniería en Ciencias Aplicadas sigue consolidando su liderazgo en educación superior, ofreciendo programas actualizados y relevantes que garantizan una preparación integral, alineada con las exigencias del mundo actual.

          </p>
        </div>
        <!--        Div para agregar el video (cambiar el width en los estilos de .history al 50%)
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
        </div>-->
      </div>

      <h2>Evolución e Incorporación de Maestrias</h2>

      <div class="timeline-container" ref="timelineContainer">
        <div class="timeline-line" ref="timelineLine" :style="{ background: currentColor }"></div>
        <Timeline :value="showAll ? events : events.slice(0, 6)" align="alternate" class="customized-timeline">
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
                {{ slotProps.item.date }}
              </template>
              <template #subtitle>
                {{ slotProps.item.status }}
              </template>
              
            </Card>
          </template>
        </Timeline>
        </div>
        <div class="boton-ver-mas">
  <Button 
    @click="showMore" 
    label="Ver Más" 
    class="p-button-text ver-mas" 
    v-if="!showAll" 
  />
  <Button 
    @click="showLess" 
    label="Ver Menos" 
    class="p-button-text ver-mas" 
    v-if="showAll" 
  />
</div>
      </section>
    <Footer />
  </div>
</template>


<script>
import NavBar from "@/components/navBar/NavBarMaestrias.vue";
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
    showAll: false, 
    events: [
      {
        date: "2024 - En ejecución",
        status: "Maestría en Sistemas Integrados con Mención en Sostenibilidad.",
        icon: "pi pi-circle",
        color: "#003366",  // 54
      },
      {
        date: "2024 - En ejecución",
        status: "Maestría en Ingeniería Industrial, Mención Logística y Cadena de Suministros.",
        icon: "pi pi-circle",
        color: "#003b6d",  // 53
      },
      {
        date: "2024 - En ejecución",
        status: "Maestría en Ingeniería Civil con Mención en Evaluación y Rehabilitación de Estructuras.",
        icon: "pi pi-circle",
        color: "#004374",  // 52
      },
      {
        date: "2022 - Terminada",
        status: "Maestría en Ingeniería Civil con Mención en Ingeniería Estructural, Sísmica y de Cimentaciones.",
        icon: "pi pi-circle",
        color: "#004b7b",  // 51
      },
      {
        date: "2022 - 2023",
        status: "Maestría en Sistemas de Información, Mención Inteligencia de Negocio.",
        icon: "pi pi-circle",
        color: "#005382",  // 50
      },
      {
        date: "2022 - ejecución",
        status: "Maestría en Construcciones de Obras Civiles, Mención en Gestión y Dirección - 3era Cohorte.",
        icon: "pi pi-circle",
        color: "#005b89",  // 49
      },
      {
        date: "2021 - 2023",
        status: "Maestría en Construcciones de Obras Civiles, Mención en Gestión y Dirección - 2da. Cohorte.",
        icon: "pi pi-circle",
        color: "#006390",  // 48
      },
      {
        date: "2019 - 2023",
        status: "Maestría en Ingeniería de Organización y Producción.",
        icon: "pi pi-circle",
        color: "#006b97",  // 47
      },
      {
        date: "2019 - 2021",
        status: "Maestría en Sistemas de Manufactura. ",
        icon: "pi pi-circle",
        color: "#00739e",  // 46
      },
      {
        date: "2018 - 2020",
        status: "Maestría en Construcciones de Obras Civiles, Mención en Gestión y Dirección.",
        icon: "pi pi-circle",
        color: "#007ba5",  // 45
      },
      {
        date: "2016 - 2017",
        status: "Maestría en Docencia Matemática Universitaria.",
        icon: "pi pi-circle",
        color: "#0083ac",  // 44
      },
      {
        date: "2015 - 2015",
        status: "Docencia Matemática Universitaria curso propedéutico.",
        icon: "pi pi-circle",
        color: "#008bb3",  // 43
      },
      {
        date: "2011 - 2012",
        status: "Maestría Matemáticas Puras y Aplicadas.",
        icon: "pi pi-circle",
        color: "#0093ba",  // 42
      },
      {
        date: "2010 - 2013",
        status: "Maestría en Estructuras y Ciencias de los Materiales. I Promoción.",
        icon: "pi pi-circle",
        color: "#009bc1",  // 41
      },
      {
        date: "2010 - 2011",
        status: "Maestría en Procesos Industriales. I Promoción.",
        icon: "pi pi-circle",
        color: "#00a3c8",  // 40
      },
      {
        date: "2014 - 2016",
        status: "Maestría Matemáticas Puras y Aplicadas, III Promoción.",
        icon: "pi pi-circle",
        color: "#00abcf",  // 39
      },
      {
        date: "2012 - 2014",
        status: "Maestría Matemáticas Puras y Aplicadas, II Promoción.",
        icon: "pi pi-circle",
        color: "#00b3d6",  // 38
      },
      {
        date: "2013 - 2015",
        status: "Maestría en Sistemas de Gestión Integral, II Promoción.",
        icon: "pi pi-circle",
        color: "#00bbdd",  // 37
      },
      {
        date: "2013 - 2015",
        status: "Maestría en Gestión y Logística del Transporte Multimodal II Promoción.",
        icon: "pi pi-circle",
        color: "#00c3e4",  // 36
      },
      {
        date: "2012 - 2014",
        status: "Maestría en Gerencia de la Construcción II.",
        icon: "pi pi-circle",
        color: "#00cbeb",  // 35
      },
      {
        date: "2009 - 2011",
        status: "Maestría en Gerencia de la Construcción III ",
        icon: "pi pi-circle",
        color: "#00d3f2",  //34
      },
      {
        date: "2010 - 2012",
        status: "Maestría en Sistemas de Gestión Integral. I Promoción.",
        icon: "pi pi-circle",
        color: "#00daf9",  // 33
      },
      {
        date: "2009 - 2011",
        status: "Maestría en Gestión y Logística del Transporte Multimodal. I Promoción.",
        icon: "pi pi-circle",
        color: "#00e2ff",  // 32
      },
      {
        date: "2009 - 2010",
        status: "Maestría en Docencia Universitaria en Ciencias de la Ingeniería. II Promoción. ",
        icon: "pi pi-circle",
        color: "#00eaff",  // 31
      },
      {
        date: "2009 - 2011",
        status: "Maestría en Gestión Informática Empresarial. III Promoción.",
        icon: "pi pi-circle",
        color: "#00f2ff",  // 30
      },
      {
        date: "2009 - 2011",
        status: "Maestría en Gestión Tecnológica. III Promoción. ",
        icon: "pi pi-circle",
        color: "#00faff",  // 29
      },
      {
        date: "2008 - 2010",
        status: "Maestría en Docencia Universitaria en Ciencias de la Ingeniería. II Promoción. ",
        icon: "pi pi-circle",
        color: "#00ffc4",  // 28
      },
      {
        date: "2008 - 2009",
        status: "Maestría en Sistemas de Información Geográfica, Aplicación a la Conservación y el Desarrollo Sostenible. II Promoción",
        icon: "pi pi-circle",
        color: "#00ffbc",  // 27
      },
      {
        date: "2008 - 2009",
        status: "Especialidad en Gerencia de Proyectos. II Promoción. ",
        icon: "pi pi-circle",
        color: "#00ffb4",  // 26
      },
      {
        date: "2007 - 2008",
        status: "Especialidad en Gerencia de Proyectos. I Promoción.",
        icon: "pi pi-circle",
        color: "#00ffaa",  // 25
      },
      {
        date: "2007 - 2009",
        status: "Maestría en Gerencia de Empresas de Servicios Públicos Domiciliarios. I Promoción.",
        icon: "pi pi-circle",
        color: "#00ffa0",  // 24
      },
      {
        date: "2007 - 2008",
        status: "Maestría en Sistemas de Información Geográfica, Aplicación a la Conservación y el Desarrollo Sostenible. I Promoción.",
        icon: "pi pi-circle",
        color: "#00ff96",  // 23
      },
      {
        date: "2007 - 2009",
        status: "Maestría en Ciencias de la Ingeniería con énfasis en Gerencia de la Construcción. II Promoción. ",
        icon: "pi pi-circle",
        color: "#00ff8c",  // 22
      },
      {
        date: "2006 - 2008",
        status: "Maestría en Gestión Informática Empresarial. II Promoción.",
        icon: "pi pi-circle",
        color: "#00ff82",  // 21
      },
      {
        date: "2006 - 2007",
        status: "Maestría en Gestión de la Producción Industrial. II Promoción. ",
        icon: "pi pi-circle",
        color: "#00ff78",  // 20
      },
      {
        date: "2005 - 2008",
        status: "Maestría en Docencia Matemática. IV Promoción",
        icon: "pi pi-circle",
        color: "#00ff6e",  // 19
      },
      {
        date: "2005 - 2006",
        status: "Maestría en Docencia Universitaria en Ciencias de la Ingeniería. I Promoción. ",
        icon: "pi pi-circle",
        color: "#00ff64",  // 18
      },
      {
        date: "2005 - 2007",
        status: "Maestría en Gerencia de la Construcción.  ",
        icon: "pi pi-circle",
        color: "#00ff5a",  // 17
      },
      {
        date: "2005 - 2007",
        status: "Maestría en Gestión Estratégica de Pequeñas y Medianas Empresas, PYMES. I Promoción.",
        icon: "pi pi-circle",
        color: "#00ff50",  // 16
      },
      {
        date: "2007 - 2009",
        status: "Maestría en Docencia Matemática. IV Promoción.",
        icon: "pi pi-circle",
        color: "#00ff46",  // 15
      },
      {
        date: "2005 - 2007",
        status: "Maestría en Ciencias de la Ingeniería con énfasis en Gerencia de la Construcción. II Promoción.",
        icon: "pi pi-circle",
        color: "#00ff3c",  // 14
      },
      {
        date: "2004 - 2006",
        status: "Maestría en Gestión Tecnológica. II Promoción. ",
        icon: "pi pi-circle",
        color: "#00ff32",  // 13
      },
      {
        date: "2002 - 2004",
        status: "Maestría en Docencia Matemática. III Promoción. ",
        icon: "pi pi-circle",
        color: "#00ff28",  // 12
      },
      {
        date: "2010 - 2012",
        status: "Maestría en Gestión Informática Empresarial",
        icon: "pi pi-circle",
        color: "#00ff1e",  // 11
      },
      {
        date: "2005 - 2007",
        status: "Maestría en Gerencia de la Construcción. I Promoción ",
        icon: "pi pi-circle",
        color: "#00ff14",  // 10
      },
      {
        date: "2002 - Continuo",
        status: "Maestría en Gestión y Auditorías Ambientales.",
        icon: "pi pi-circle",
        color: "#00ff0a",  // 9
      },
      {
        date: "2003 - 2005",
        status: "Maestría en Seguridad, Salud y Ambiente. I Promoción ",
        icon: "pi pi-circle",
        color: "#00ff00",  // 8
      },
      {
        date: "2002 - 2004",
        status: "Maestría en Gestión de la Producción Industrial. I Promoción",
        icon: "pi pi-circle",
        color: "#00ff08",  //7
      },
      {
        date: "2000 - 2003",
        status: "Maestría en Gestión Informática Empresarial. I Promoción ",
        icon: "pi pi-circle",
        color: "#00ff10",  // 6
      },
      {
        date: "2000 - 2002",
        status: "Maestría en Docencia Matemática. II Promoción",
        icon: "pi pi-circle",
        color: "#00ff18",  // 5
      },
      {
        date: "1998 - 2000",
        status: "Maestría en Gestión Tecnológica. I Promoción ",
        icon: "pi pi-circle",
        color: "#00ff20",  // 4
      },
      {
        date: "2000 - 2002",
        status: "Maestría en Ciencia, Tecnología y Sociedad. I Promoción ",
        icon: "pi pi-circle",
        color: "#00ff28",  // 3
      },
      {
        date: "1998 - 2000",
        status: "Maestría en Ciencias de la Ingeniería con énfasis en Gerencia de la Construcción",
        icon: "pi pi-circle",
        color: "#00ff30",  // 2
      },
      {
        date: "1998 - 2000 ",
        status: "Maestría en Docencia Matemática. I Promoción. ",
        icon: "pi pi-circle",
        color: "#00ff38",  //1
      }
    ],
    currentColor: '#003366',
    videoUrl: "https://www.youtube.com/embed/tPeuiHgWdgg"
  };
},
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  
  methods: {
    showMore() {
    this.showAll = true;
  },
  showLess() {
    this.showAll = false; 
  },
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

<style scoped>
@font-face {
  font-family: 'Gravity';
  src: url('@/assets/fonts/Gravity-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

.container {
  font-family: 'Gravity';
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
    font-family: 'Gravity';

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
  
    width: 100%;                         
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

}

@media (max-width: 800px) {
    .two-columns {
        flex-direction: column;
    }

    .history, .video-container {
        width: 100%; 
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
    font-size: 1rem;
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
    font-family: 'Gravity';

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
    background: rgb(255, 255, 255);
    align-items: center;
    justify-content: center;
}
::v-deep .p-timeline.p-timeline-vertical .p-timeline-event-connector {
    width: 0px !important; 
}
.timeline-card-content {
    text-align: left;
    margin-left: -10%; 
    text-align: justify;
    margin-right: 5%;
    
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
    font-family: 'Gravity';

}
::v-deep .p-card .p-card-content {
    padding: 0px;
}
.boton-ver-mas {
  margin-top: 3%;
  display: flex;
  justify-content: center; 
  align-items: center; 
}

.ver-mas {
  padding: 0.75% 2.5%; 
  font-size: 1rem; 
  color: #fff; 
  background-color: #86b8f8; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  transition: transform 0.3s ease, background-color 0.3s ease; 
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); 
  font-family: 'Gravity';

}

.ver-mas:hover {
  background-color: #3997fc; 
  transform: scale(1.05); 
}

.ver-mas:active {
  transform: scale(0.95); 
}


</style>

<template>
  <div class="curso-page">
    <div class="header">
      <img src="@/assets/cursos/curso2.png" alt="Curso de ArcGIS" class="curso-image" @click="showImage"/>
      <div class="title-section">
        <h1>Curso en Sistemas de Información Geográfica con ArcGIS</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            El curso tiene como objetivo capacitar a las personas interesadas en el manejo de sistemas de información geográfica utilizando el software ARC GIS necesario en el ámbito profesional, impartir conocimientos sobre Sistemas de Información Geográfica (GIS), realizar modelaciones con ArcGIS utilizando los archivos más usados, metodologías de importación y realizar representaciones de mapas editando y generando mapas cartográficos desde cero, para el análisis correspondiente.
          </p>
        </div>

        <div class="info-box">
          <div class="info-item">
            <p><strong>Modalidad:</strong> Presencial</p>
          </div>
          <div class="info-item">
            <p><strong>Duración:</strong> 40 horas / 4 semanas </p>
          </div>
          <div class="info-item">
            <p><strong>Costo:</strong> $80</p>
          </div>
          <div class="info-item">
            <p><strong>Área:</strong> Ingeniería Civil</p>
          </div>
        </div>
      </div> 
      
    </div>

    


      <Accordion v-model:activeIndex="activeIndex">
      <!-- Sección 1: Datos Informativos -->
      <AccordionTab header="Datos Informativos">
        <div>
          <p><strong>Orientación:</strong> Ingeniería Civil</p>
          <p><strong>Requisito:</strong> Computador personal con ArcGIS</p>
          <p><strong>Certificado:</strong> Académico de aprobación</p>
          <p><strong>Días del curso:</strong> Lunes a viernes</p>
          <p><strong>Horario:</strong> 18h00 a 20h00</p>
        </div>
      </AccordionTab>

      <!-- Sección 2: Contenido del Curso -->
      <AccordionTab header="Contenido del Curso">
        <p>Acceda al PDF para obtener más información.</p>
        <div class="contenido-curso-container">
          <a href="https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C2-Sistemas_de_Información_Geográfica_con_ArcGIS.pdf" 
          target="_blank">
            <img src="@/assets/pdf.png" alt="Más Información PDF" class="pdf-button" />
          </a>
        </div>

      </AccordionTab>


      <!-- Sección 3: Formulario de inscripción -->
      <AccordionTab header="Formulario de inscripción">
        <div class="inscripcion-container">
          <p>Para inscribirse, haga clic en el siguiente enlace:</p>
          <a href="https://forms.gle/2GnSsDM6KJWcjQGQ7" target="_blank">
            <button class="inscripcion-button">Inscribirse</button>
          </a>
        </div>
      </AccordionTab>

    </Accordion>

  </div>
</template>

<script>
import Tabs from '@/components/inicio/Tabs.vue';
import Accordion from 'primevue/accordion';
import AccordionTab from 'primevue/accordiontab';

export default {
  components: {
    Tabs,
    Tabs,
    Accordion,
    AccordionTab,
    
  },
  data() {
    return {
      activeIndex: 0,

    };
  },
  methods:{
    showImage(){
      this.isImageFullscreen= true;
    },
    closeImage(){
      this.isImageFullscreen= false;

    }
  }
};
</script>

<style src="../../css/estiloCursos.css" scoped>
</style>

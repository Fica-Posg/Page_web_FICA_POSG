<template>
    <div class="maestria-page">
      <div class="header">
        <img :src="maestria.imgMain" :alt="maestria.titleMain" class="curso-image" />
        <div class="title-section">
          <h1>{{ maestria.titleMain }}</h1>
          <div class="description-section">
            <p><strong>Objetivos:</strong></p>
            <p>{{ maestria.objectives }}</p>
          </div>
          <div class="info-box">
            <div class="info-item">
              <p><strong>Modalidad:</strong> {{ maestria.mode }}</p>
            </div>
            <div class="info-item">
              <p><strong>Duración:</strong> {{ maestria.duration }}</p>
            </div>
            <div class="info-item">
              <p><strong>Inscripción:</strong> {{ maestria.inscription }}</p>
            </div>
            <div class="info-item">
              <p><strong>Costo:</strong> {{ maestria.price }}</p>
            </div>
            <div class="info-item">
              <p><strong>Área:</strong> {{ maestria.area }}</p>
            </div>
          </div>
        </div>
      </div>
      <Accordion v-model:activeIndex="activeIndex">
        <AccordionTab header="Datos Informativos">
          <div>
            <p><strong>Orientación:</strong> {{ maestria.orientation }}</p>
            <p><strong>Coordinador:</strong> {{ maestria.coordinator }}</p>
            <p><strong>Requisitos:</strong></p>
            <ul>
              <li v-for="(requirement, index) in maestria.requirements" :key="index">{{ requirement }}</li>
            </ul>
            <p><strong>Horario:</strong></p>
            <ul>
              <li v-for="(time, index) in maestria.schedule" :key="index">{{ time }}</li>
            </ul>
          </div>
        </AccordionTab>
        <AccordionTab header="Módulos de la Maestría">
          <div class="contenido-maestria-container">
            <p>Acceda al PDF para obtener más información.</p>
            <a :href="maestria.pdfLink" target="_blank">
              <img src="@/assets/pdf.png" alt="Más Información PDF" class="pdf-button" />
            </a>
          </div>
        </AccordionTab>
        <AccordionTab header="Formulario de inscripción">
          <div class="inscripcion-container">
            <p>Para inscribirse, haga clic en el siguiente enlace:</p>
            <a :href="maestria.formLink" target="_blank">
              <button class="inscripcion-button">Inscribirse</button>
            </a>
          </div>
        </AccordionTab>
      </Accordion>
    </div>
  </template>
  
  <script>
  import Accordion from 'primevue/accordion';
  import AccordionTab from 'primevue/accordiontab';
  
  export default {
    props: ["maestria"],
    components: {
      Accordion,
      AccordionTab,
    },
    data() {
      return {
        activeIndex: 0,
      };
    },
  };
  </script>
  
  <style src="../../css/estiloMaestrias.css" scoped></style>

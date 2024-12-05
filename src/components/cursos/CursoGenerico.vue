<template>
  <div class="curso-page">
    <div class="header">
      <img :src="curso.image" :alt="curso.titleMain" class="curso-image" />
      <div class="title-section">
        <h1>{{ curso.titleMain }}</h1>
        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>{{ curso.objectives }}</p>
        </div>
        <div class="info-box">
          <div class="info-item">
            <p><strong>Modalidad:</strong> {{ curso.mode }}</p>
          </div>
          <div class="info-item">
            <p><strong>Duración:</strong> {{ curso.duration }}</p>
          </div>
          <div class="info-item">
            <p><strong>Costo:</strong> {{ curso.price }}</p>
          </div>
          <div class="info-item">
            <p><strong>Área:</strong> {{ curso.area }}</p>
          </div>
        </div>
      </div>
    </div>
    <Accordion v-model:activeIndex="activeIndex">
      <AccordionTab header="Datos Informativos">
        <div>
          <p><strong>Orientación:</strong> {{ curso.orientation }}</p>
          <p><strong>Requisito:</strong> {{ curso.requirements }}</p>
          <p><strong>Certificado:</strong> {{ curso.certificate }}</p>
          <p><strong>Días del curso:</strong> {{ curso.dias }}</p>
          <p><strong>Horario:</strong> {{ curso.horas }}</p>
        </div>
      </AccordionTab>
      <AccordionTab header="Contenido del Curso">
        <div class="contenido-curso-container">
          <p>Acceda al PDF para obtener más información.</p>
          <a :href="curso.pdfLink" target="_blank">
            <img
              src="@/assets/pdf.png"
              alt="Más Información PDF"
              class="pdf-button"
            />
          </a>
        </div>
      </AccordionTab>
      <AccordionTab header="Formulario de inscripción">
        <div class="inscripcion-container">
          <p>Para inscribirse, haga clic en el siguiente enlace:</p>
          <a :href="curso.formLink" target="_blank">
            <button class="inscripcion-button">Inscribirse</button>
          </a>
        </div>
      </AccordionTab>
    </Accordion>
  </div>
</template>
  
<script>
import Tabs from "@/components/inicio/Tabs.vue";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

export default {
  props: ["curso"],
  components: {
    Tabs,
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
  
<style src="../../css/estiloCursos.css" scoped></style>
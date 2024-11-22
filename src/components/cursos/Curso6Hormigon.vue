<template>
  <div class="curso-page">
    <div class="header">
      <img src="@/assets/cursos/curso6.png" alt="Curso de Hormigón Armado" class="curso-image" />
      <div class="title-section">
        <h1>Curso de Diseño de Canales y Alcantarillas de Hormigón Armado con la Norma AASHTO LRFD 2017 y SAP 2000</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            El curso tiene como objetivo capacitar a las personas interesadas en el diseño de canales y alcantarillas de hormigón armado mediante conocimientos de la norma AASHTO LRFD 2017 y utilizando el software SAP 2000 versión 2.1.0 para cumplir con proyectos de manera eficiente en su vida profesional, dotar de los conocimientos necesarios y actualizados en el campo de la ingeniería de alcantarillas y canales concretamente en el diseño estructural con hormigón armado y conocer los tipos de cargas que se presentan en las estructuras de alcantarillas y canales.
          </p>
        </div>

        <div class="info-box">
          <div class="info-item">
            <p><strong>Modalidad:</strong> Presencial</p>
          </div>
          <div class="info-item">
            <p><strong>Duración:</strong> 60 horas / 4 semanas </p>
          </div>
          <div class="info-item">
            <p><strong>Costo:</strong> $90</p>
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
          <p><strong>Requisito:</strong> Computador personal con SAP 2000 versión 2.1.0</p>
          <p><strong>Certificado:</strong> Académico de aprobación</p>
          <p><strong>Días del curso:</strong> Lunes a viernes</p>
          <p><strong>Horario:</strong> 18h00 a 21h00</p>
        </div>
      </AccordionTab>

      <!-- Sección 2: Contenido del Curso -->
      <AccordionTab header="Contenido del Curso">
        <div>
          <p>Acceda al PDF para obtener más información.</p>
          <div class="contenido-curso-container">
            <a href="https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C6-Diseño_de_Canales_y_Alcantarillas_de_Hormigón_Armado_con_la_Norma_AASHTO_LRFD_2017_y_SAP_2000.pdf" 
               target="_blank">
              <img src="@/assets/pdf.png" alt="Más Información PDF" class="pdf-button" />
            </a>
          </div>
        </div>
      </AccordionTab>

      <!-- Sección 3: Formulario de inscripción -->
      <AccordionTab header="Formulario de inscripción">
        <div class="inscripcion-container">
          <p>Para inscribirse, haga clic en el siguiente enlace:</p>
          <a href="https://forms.gle/AUYWNUK5HDinrsMT9" target="_blank">
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

<style src="../../css/estiloCursos.css" scoped></style>

<template>
  <div class="curso-page">
    <div class="header">
      <img src="@/assets/cursos/curso7.png" alt="Curso de Sismo-Geotécnica" class="curso-image" />
      <div class="title-section">
        <h1>Curso Especializado en Ingeniería Sismo-Geotécnica y Interacción Suelo-Estructura</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            Capacitar a las personas interesadas en ingeniería Sismo - Geotécnica e interacción suelo-estructura, a partir de conceptos básicos en las distintas normativas vigentes y con la ayuda de software que son Shake 2000 y ETABS.     
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
          <p><strong>Requisito:</strong> Computador personal con ETABS, SHAKE-2000</p>
          <p><strong>Certificado:</strong> Académico de aprobación</p>
          <p><strong>Días del curso:</strong> Lunes a viernes</p>
          <p><strong>Horario:</strong> 18h00 a 21h00</p>
        </div>
      </AccordionTab>

      <!-- Sección 2: Contenido del Curso -->
      <AccordionTab header="Contenido del Curso">
        <div>
          <p>Acceda al PDF para obtener más información.</p>
          <!-- Botón de Más Información -->
          <div class="contenido-curso-container">
            <a href="https://uceedu-my.sharepoint.com/:b:/g/personal/ymflorez_uce_edu_ec/Eevlfffm2Q1AlkqciupJESgB0yyJikGUVYMJZ4UQclJV-w?e=Jzbj4u" 
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
          <a href="https://forms.gle/uQiYxMspR1VYtpu66" target="_blank">
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

<style src="../../css/cursos_Diseño.css" scoped></style>

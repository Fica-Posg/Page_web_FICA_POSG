<template>
  <div class="curso-page">
    <div class="header">
      <img src="@/assets/cursos/curso8.png" alt="Curso de Ciberseguridad" class="curso-image" />
      <div class="title-section">
        <h1>Curso de Especialización en Ciberseguridad</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            El curso tiene como objetivo capacitar a las personas interesadas en la protección de datos de empresas o personas naturales que pueden ser afectados por ciber delincuentes para proteger información valiosa, 
            dotar de los conocimientos necesarios y actualizados en el campo de la ingeniería informática en particular en ciberseguridad, 
            conocer y comprender los tipos de cargas que se presentan en las estructuras de alcantarillas y canales, 
            y conocer las debilidades y fortalezas de una compañía para tener más control, y establecer estrategias para protegerse de los ciberataques.
          </p>
        </div>

        <div class="info-box">
          <div class="info-item">
            <p><strong>Modalidad:</strong> Presencial</p>
          </div>
          <div class="info-item">
            <p><strong>Duración:</strong> 75 horas / 5 semanas </p>
          </div>
          <div class="info-item">
            <p><strong>Costo:</strong> $100</p>
          </div>
          <div class="info-item">
            <p><strong>Área:</strong> Sistemas</p>
          </div>
        </div>
      </div>
    </div>

    <Accordion v-model:activeIndex="activeIndex">
      <!-- Sección 1: Datos Informativos -->
      <AccordionTab header="Datos Informativos">
        <div>
          <p><strong>Orientación:</strong> Ingeniería Informática</p>
          <p><strong>Requisito:</strong> Computador personal</p>
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
            <a href="https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C8-Especialización_en_Ciberseguridad.pdf" 
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
          <a href="https://forms.gle/gv6R4STeJmGSmYzg8" target="_blank">
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

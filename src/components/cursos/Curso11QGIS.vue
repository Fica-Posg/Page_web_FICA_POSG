<template>
  <div class="curso-page">
    <div class="header">
      <img src="@/assets/cursos/curso11.png" alt="Curso de QGIS" class="curso-image" />
      <div class="title-section">
        <h1>Curso en Sistema de Información Geográfica con QGIS</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            El curso tiene como objetivo capacitar a las personas interesadas en el manejo de sistemas de información Geográfica utilizando el software libre QGIS necesario en el ámbito profesional, 
            impartir conocimientos sobre Sistemas de información Geográfica, 
            realizar modelaciones con QGIS utilizando los archivos más usados, metodologías de importación y 
            realizar representaciones de mapas editando y generando mapas cartográficos desde cero, para el análisis correspondiente.
          </p>
        </div>

        <div class="info-box">
          <div class="info-item">
            <p><strong>Modalidad:</strong> Virtual</p>
          </div>
          <div class="info-item">
            <p><strong>Duración:</strong> 40 horas / 4 semanas </p>
          </div>
          <div class="info-item">
            <p><strong>Costo:</strong> $80</p>
          </div>
          <div class="info-item">
            <p><strong>Área:</strong> Computación</p>
          </div>
        </div>
      </div>
    </div>

    <Accordion v-model:activeIndex="activeIndex">
      <!-- Sección 1: Datos Informativos -->
      <AccordionTab header="Datos Informativos">
        <div>
          <p><strong>Orientación:</strong> Todas las áreas de la Ingeniería</p>
          <p><strong>Requisito:</strong> Computador personal con QGIS</p>
          <p><strong>Certificado:</strong> Académico de aprobación</p>
          <p><strong>Días del curso:</strong> Lunes a viernes</p>
          <p><strong>Horario:</strong> 19h00 a 21h00</p>
        </div>
      </AccordionTab>

      <!-- Sección 2: Contenido del Curso -->
      <AccordionTab header="Contenido del Curso">
        <div>
          <p>Acceda al PDF para obtener más información.</p>
          <!-- Botón de Más Información -->
          <div class="contenido-curso-container">
            <a href="https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C11-Sistema_de_Información_Geográfica_con_QGIS.pdf" 
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
          <a href="https://forms.gle/8sKS1FCPR9aSkk2KA" target="_blank">
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

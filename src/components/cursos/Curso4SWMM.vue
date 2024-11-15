<template>
  <div class="curso-page">
    <div class="header">
      <img src="@/assets/cursos/curso4.png" alt="Curso de Redes de Alcantarillado con SWMM" class="curso-image" />
      <div class="title-section">
        <h1>Curso en Análisis de Funcionamiento Hidráulico de Redes de Alcantarillado con SWMM</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            El curso tiene como objetivo capacitar a las personas interesadas en el análisis de funcionamiento hidráulico de redes de alcantarillado con el software de SWMM, dominar el manejo de SWMM, sus características y análisis de resultados, conocer el alcance y limitaciones que tiene SWMM, para redes de alcantarillado e interpretar los datos obtenidos de las redes de alcantarillado.
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
          <p><strong>Requisito:</strong> Computador personal con software SWMM</p>
          <p><strong>Certificado:</strong> Académico de aprobación</p>
          <p><strong>Días del curso:</strong> Lunes a viernes</p>
          <p><strong>Horario:</strong> 18h00 a 20h00</p>
        </div>
      </AccordionTab>

      <!-- Sección 2: Contenido del Curso -->
      <AccordionTab header="Contenido del Curso">
        <div>
         

          <!-- Botón de Más Información -->
          <div class="contenido-curso-container">
            <p>Acceda al PDF para obtener más información.</p>
            <a href="https://uceedu-my.sharepoint.com/:b:/g/personal/ymflorez_uce_edu_ec/EUj7LTDcsvNCspbZqEkk-H0BkHuaCpvmTLegvjn_PWa1rg?e=HBKSQo" 
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
          <a href="https://forms.gle/BWEcuV7kuARUwXJQ8" target="_blank">
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

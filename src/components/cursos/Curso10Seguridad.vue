<template>
  <div class="curso-page">
    <div class="header">
      <img src="@/assets/cursos/curso10.png" alt="Curso de Indicadores de Seguridad" class="curso-image" />
      <div class="title-section">
        <h1>Curso de Indicadores de Seguridad y Seguridad Ocupacional</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            El curso tiene como objetivo capacitar a las personas interesadas en los indicadores de seguridad y seguridad ocupacional para gestionarlo de manera práctica y óptima en distintas empresas y evitar catástrofes en empleados,
            dotar de los conocimientos necesarios y actualizados de la prevención de riesgos laborales, a nivel empresarial,
            conocer las normativas de seguridad y salud a nivel nacional y ponerlas en práctica en una empresa, para evitar y disminuir los accidentes y enfermedades de los empleados,
            gestionar lineamientos para controlar el Sistema de Gestión de Seguridad y Salud en el trabajo (SG-SST) y 
            desarrollar métodos de cálculo y registros de reportes.
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
            <p><strong>Área:</strong> Industrial</p>
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
          <p><strong>Horario:</strong> 18h00 a 20h00</p> 
        </div>
      </AccordionTab>

      <!-- Sección 2: Contenido del Curso -->
      <AccordionTab header="Contenido del Curso">
        <div>
          <p>Acceda al PDF para obtener más información.</p>

          <!-- Botón de Más Información -->
          <div class="contenido-curso-container">
            <a href="https://uceedu-my.sharepoint.com/:b:/g/personal/ymflorez_uce_edu_ec/ETUkd__AraNDj-oo8AK7c5EBv_ayU_q-1_jRCrw4ZT5xyg?e=WOQdvA" 
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
          <a href="https://forms.gle/WHeM2hepbk96YBfT9" target="_blank">
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

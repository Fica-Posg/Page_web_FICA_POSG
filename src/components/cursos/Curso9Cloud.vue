<template>
  <div class="curso-page">
    <div class="header">
      <img src="@/assets/cursos/curso9.png" alt="Curso de Cloud Computing" class="curso-image" />
      <div class="title-section">
        <h1>Curso de Especialización en Gestión del Cloud Computing en la Empresa</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            El curso tiene como objetivo capacitar a las personas interesadas en la gestión de empresas por medio de Cloud Computing, para tomar decisiones de mejor manera en la gestión de datos digitales, 
            dotar de los conocimientos necesarios y actualizados en el del gestor de empresas por medio de la nube, principal para trabajar de manera óptima y profesional en una empresa, 
            conocer los beneficios y desventajas que tiene gestionar una empresa a partir del Cloud Computing 
            y manejar de manera eficiente este gestor e implementar seguridad en un entorno Cloud Computing.
          </p>
        </div>

        <div class="info-box">
          <div class="info-item">
            <p><strong>Modalidad:</strong> Presencial</p>
          </div>
          <div class="info-item">
             <p><strong>Duración:</strong> 50 horas / 5 semanas </p>
            
          
          </div>
          <div class="info-item">
            <p><strong>Costo:</strong> $80</p>
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
          <p><strong>Horario:</strong> 18h00 a 20h00</p>
        </div>
      </AccordionTab>

      <!-- Sección 2: Contenido del Curso -->
      <AccordionTab header="Contenido del Curso">
        <div>
          <p>Acceda al PDF para obtener más información.</p>

          <!-- Botón de Más Información -->
          <div class="contenido-curso-container">
            <a href="https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C9-Especialización_en_Gestión_del_Cloud_Computing_en_la_Empresa.pdf" 
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

<style src="../../css/estiloCursos.css" scoped></style>
v
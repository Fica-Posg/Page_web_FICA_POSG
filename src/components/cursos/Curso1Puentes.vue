<template>
  <div class="curso-page">
    <div class="header">
      <img src="@/assets/cursos/curso1.png" alt="Curso de Puentes de Acero" class="curso-image" />
      <div class="title-section">
        <h1>Curso de Diseño de Puentes de Acero de Alma Llena Aplicando la Norma AA SHTO LRFD 2017 y CSI BRIDGE</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            El curso tiene como objetivo capacitar a las personas interesadas en el diseño de puentes de acero con
            criterio técnico y conocimiento estructural aplicando la normativa AASHTO LRFD 2017 requeridos para
            desarrollo en la práctica profesional, impartir conocimientos técnicos que la norma AASHTO LRFD 2017 y
            realizar modelaciones con la ayuda del software de la casa comercial CSI Bridge aplicando la normativa
            AASHTO LRFD 2017. En el presente curso se detallará de manera teórica y práctica el diseño de puentes de
            almas llenas, utilizando la norma AASHTO LRFD 2017 y el software CSI BRIDGE. Se presenta los conceptos
            estructurales y la modelación respectiva en el software mencionado anteriormente, este curso está destinado
            a estudiantes y profesionales para ampliar su conocimiento y su hoja de vida.
          </p>
        </div>

        <div class="info-box">
          <div class="info-item">
            <p><strong>Modalidad:</strong> Presencial</p>
          </div>
          <div class="info-item">
            <p><strong>Duración:</strong> 105 horas / 7 semanas </p>
          </div>
          <div class="info-item">
            <p><strong>Costo:</strong> $110</p>
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
          <p><strong>Requisito:</strong> Computador personal con CSI BRIDGE</p>
          <p><strong>Certificado:</strong> Académico de aprobación</p>
          <p><strong>Días del curso:</strong> Lunes a viernes</p>
          <p><strong>Horario:</strong> 18h00 a 21h00</p>
        </div>
      </AccordionTab>

      <!-- Sección 2: Contenido del Curso -->
      <AccordionTab header="Contenido del Curso">
        <div class="contenido-curso-container">
          <p>Acceda al PDF para obtener más información.</p>
          <a href="https://uceedu-my.sharepoint.com/:b:/g/personal/ymflorez_uce_edu_ec/EbgwrWGFBYVIig64sthrNIQBeOBoJDrpophyBB30unudNg?e=vJWbZM" 
             target="_blank">
            <img src="@/assets/pdf.png" alt="Más Información PDF" class="pdf-button" />
          </a>
        </div>
      </AccordionTab>

      <!-- Sección 3: Formulario de inscripción -->
      <AccordionTab header="Formulario de inscripción">
        <div class="inscripcion-container">
          <p>Para inscribirse, haga clic en el siguiente enlace:</p>
          <a href="https://forms.gle/H3D5g1WLweW9ZGgj7" target="_blank">
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
    Accordion,
    AccordionTab,
  },
  data() {
    return {
      activeIndex: 0,
    };
  }
};
</script>

<style src="../../css/cursos_Diseño.css" scoped></style>

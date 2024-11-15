<!--  Esta PAGE se dio de baja - se puede usar como plantilla para proximas maestrias   -->
<template>
  <div class="maestria-page">
    <div class="header">
      <img src="@/assets/maestrias/maestria3.png" alt="Maestría Vial" class="curso-image" />
      <div class="title-section">
        <h1>Maestría en Ingeniería Civil, mención en Ingeniería Vial y Pavimentos</h1>

        <div class="description-section">
          <p><strong>Objetivos:</strong></p>
          <p>
            El programa académico propuesto se enfoca en el estudio de la ingeniería vial y de pavimentos debido a que
            se tiene como objeto fundamental formar profesionales en estas ramas de la ingeniería civil, en base a
            los últimos avances tecnológicos y científicos, con el fin de transformar y repotenciar del sistema vial
            nacional,
            de tal forma que se contribuya con el progreso y el desarrollo del país.
          </p>
        </div>


        <div class="info-box">
          <div class="info-item">
            <p><strong>Modalidad:</strong> Presencial</p>
          </div>
          <div class="info-item">
            <p><strong>Duración:</strong> 3 semestres</p>
          </div>
          <div class="info-item">
            <p><strong>Inscripción:</strong> $80</p>
          </div>
          <div class="info-item">
            <p><strong>Costo:</strong> $5520</p>
          </div>
          <div class="info-item">
            <p><strong>Área:</strong> Civil</p>
          </div>
        </div>
      </div>
    </div>

    <Accordion v-model:activeIndex="activeIndex">
      <AccordionTab header="Datos Informativos">
        <div>
          <p><strong>Orientación:</strong> Ingeniería Civil</p>
          <p><strong>Coordinador:</strong> Ing. Byron Heredia, MSc.</p>
          <p><strong>Requisitos:</strong><br>
            - Título de tercer nivel en Ingeniería Civil, registrado en la SENESCYT.<br>
            - Si el título es extranjero, debe estar apostillado o legalizado por vía consular.<br>
            - Entrevista con el coordinador del programa.<br>
            - Aprobar examen de admisión.<br>
            - Suficiencia en inglés (nivel A2).
          </p>
          <p><strong>Horario:</strong> </p>
          <p>Jueves y Viernes 18h00 a 21h00.</p>
          <p>Sabado 8h00 a 14h00.</p>
        </div>
      </AccordionTab>

      <AccordionTab header="Módulos de la Maestría">
        <p>Acceda al PDF para obtener más información.</p>
        <div class="contenido-curso-container">
          <a href="https://uceedu-my.sharepoint.com/:b:/g/personal/ymflorez_uce_edu_ec/ERMpQHW3aPZGsOd4mhehTIEBxDIE5ExvMxx7Rq85Phtw8w?e=tT9NO0"
            target="_blank">
            <img src="@/assets/pdf.png" alt="Más Información PDF" class="pdf-button" />
          </a>
        </div>
      </AccordionTab>

      <AccordionTab header="Formulario de inscripción">
        <p>Para inscribirse, haga clic en el siguiente enlace:</p>
        <a href="https://forms.gle/isTmSvFy2oyjDedG9" target="_blank">
          <button class="inscripcion-button">Inscribirse</button>
        </a>
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

<style src="../../css/estiloMaestrias.css" scoped></style>

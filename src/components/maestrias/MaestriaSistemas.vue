<template>
  <div class="maestria-page">
    <div class="header">
      <img src="@/assets/maestrias/maestria4.png" alt="Maestría en Sistemas" class="curso-image" />
      <div class="title-section">
        <h1>Maestría en Sistemas de Información, mención en Inteligencia de Negocios (2da cohorte)</h1>
          <div class="description-section">
            <p><strong>Objetivos:</strong></p>
            <p>
              Dada la realidad actual de las empresas, día a día con el aumento significativo de datos,
              provoca que el manejo de información en muchos casos se encuentre saturada en los sistemas informáticos
              transaccionales o los conocidos ERP. Por lo cual, de acuerdo con la lógica de negocio y necesidad
              de una determinada empresa, se requiere gestores de bases de datos y herramientas de inteligencia
              de negocios para gestionar de mejor manera grandes cantidades de datos.
            </p>
            <p>
              A partir de ello, el objeto de estudio es convertir en información la data captada mediante el
              procesamiento
              y gestión de datos, metodologías de análisis de información, modelos predictivos, programación,
              aprendizaje estadístico, reconocimientos de patrones y minería de datos, para la generación de
              conocimiento
              y presentación del mismo mediante herramientas de visualización que, de forma amigable, sencilla, útil
              y rápida, contribuyan a la toma de decisiones y desarrollo de estrategias empresariales en las
              organizaciones.
            </p>
            <p>
              Esto indica que los procesos ETL y la inteligencia de negocios son una herramienta hacia el apalancamiento
              de los nuevos desafíos que asumen otras disciplinas en el contexto actual del desarrollo tecnológico.
            </p>
          </div>


        <div class="info-box">
          <div class="info-item">
            <p><strong>Modalidad:</strong> Presencial</p>
          </div>
          <div class="info-item">
            <p><strong>Duración:</strong> 2 semestres</p>
          </div>
          <div class="info-item">
            <p><strong>Inscripción:</strong> $80</p>
          </div>
          <div class="info-item">
            <p><strong>Costo:</strong> $4120</p>
          </div>
          <div class="info-item">
            <p><strong>Área:</strong> Sistemas</p>
          </div>
        </div>
      </div>
    </div>

    <Accordion v-model:activeIndex="activeIndex">
      <AccordionTab header="Datos Informativos">
        <div>
          <p><strong>Orientación:</strong> Ingeniería Informática</p>
          <p><strong>Coordinador:</strong> Ing. Ramiro Pilaluisa, PhD.</p>
          <p><strong>Requisitos:</strong><br>
            - Título de tercer nivel registrado en la SENESCYT.<br>
            - Si el título es extranjero, debe estar legalizado por vía consular.<br>
            - Entrevista con el coordinador del programa.<br>
            - Aprobar examen de admisión.<br>
          </p>
          <p><strong>Horario:</strong> </p>
          <p>Jueves y Viernes 18h00 a 21h00.</p>
          <p>Sabado 8h00 a 14h00.</p>
        </div>
      </AccordionTab>

      <AccordionTab header="Módulos de la Maestría">
        <p>Acceda al PDF para obtener más información.</p>
        <div class="contenido-curso-container">
          <a href="https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Maestrias/m4-mención_en_Inteligencia_de_Negocios_.pdf"
            target="_blank">
            <img src="@/assets/pdf.png" alt="Más Información PDF" class="pdf-button" />
          </a>
        </div>
      </AccordionTab>

      <AccordionTab header="Formulario de inscripción">
        <p>Para inscribirse, haga clic en el siguiente enlace:</p>
        <a href="https://forms.gle/5YJabhmvATVaxPqZ8" target="_blank">
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

<template>
    <div class="page-container">
        <NavBar class="navbar" />
        <div class="header">
            <h1>Preguntas Frecuentes</h1>
        </div>
        <div class="contenedor-formulario content-wrap">
            <div class="infor2">

                <Accordion class="preguntas" :activeIndex="activeIndex">
                    <AccordionTab>
                        <template #header>
                            <i class="pi pi-info-circle" style="font-size: 1.5rem; margin-right: 10px;"></i>
                            <span>Información General del Curso</span>
                        </template>
                        <h4>¿Qué tipos de cursos ofrece la institución?</h4>
                        <p>Ofrecemos una amplia variedad de cursos en áreas como Civil, Computación, Industrial, Sistemas, entre otros.</p>

                        <h4>¿Cuánto tiempo duran los cursos?</h4>
                        <p>La duración de los cursos varía, desde 4 semanas para cursos cortos hasta 12 semanas para programas más extensos.</p>

                        <h4>¿Cuál es el horario de los cursos?</h4>
                        <p>Los cursos se ofrecen de lunes a viernes de 18h00 a 21h00.
                        </p>
                    </AccordionTab>

                    <AccordionTab>
                        <template #header>
                            <i class="pi pi-book" style="font-size: 1.5rem; margin-right: 10px;"></i>
                            <span>Inscripción y Requisitos</span>
                        </template>
                        <h4>¿Cuál es el requisito para inscribirse en un curso?</h4>
                        <p>El requisito varía según el curso, pero generalmente es abierto al publico y tener un interés en el tema.</p>

                        <h4>¿Cómo es el proceso de inscripción?</h4>
                        <p>El proceso de inscripción se realiza en línea a través de nuestra plataforma. Solo debes completar el formulario de inscripción y realizar el pago.</p>

                        <h4>¿Cuáles son las fechas de inicio y fin de inscripción?</h4>
                        <p>Las inscripciones abren un mes antes del inicio de cada curso y cierran una semana antes de la fecha de inicio del curso.</p>

                        <h4>¿Se necesita experiencia previa para inscribirse en un curso?</h4>
                        <p>La mayoría de nuestros cursos no requieren experiencia previa, aunque algunos avanzados sí tienen prerrequisitos.</p>
                    </AccordionTab>

                    <AccordionTab>
                        <template #header>
                            <i class="pi pi-chart-line" style="font-size: 1.5rem; margin-right: 10px;"></i>
                            <span>Metodología y Evaluación</span>
                        </template>
                        <h4>¿Cuál es la metodología de enseñanza utilizada en los cursos?</h4>
                        <p>Utilizamos una metodología práctica y participativa, combinando clases teóricas con ejercicios prácticos y proyectos.</p>

                        <h4>¿Cómo se evalúa el desempeño de los estudiantes?</h4>
                        <p>El desempeño se evalúa a través de trabajos prácticos, exámenes y la participación en las clases.</p>

                        <h4>¿Se entregan certificados al finalizar los cursos?</h4>
                        <p>Sí, se entrega un certificado de finalización a todos los estudiantes que completen el curso con éxito.</p>

                        <h4>¿Qué pasa si no puedo asistir a una clase?</h4>
                        <p>Si no puedes asistir a una clase, puedes acceder a la grabación y los materiales de estudio en nuestra plataforma en línea, siempre y cuando el curso sea en la modalidad Virtual; en la modalidad presencial no existen grabaciones.</p>
                        
                        <h4>¿Cuál es la calificación mínima necesaria para aprobar el curso?</h4>
                        <p>La nota mínima para aprobar el curso depende de la rubrica del curso, y se requiere una asistencia del 80% del total de las horas del curso.</p>
                    </AccordionTab>

                    <AccordionTab>
                        <template #header>
                            <i class="pi pi-users" style="font-size: 1.5rem; margin-right: 10px;"></i>
                            <span>Recursos y Servicios Adicionales</span>
                        </template>
                        <h4>¿Qué materiales de estudio se proporcionan durante el curso?</h4>
                        <p>Proporcionamos guías de estudio, presentaciones, ejercicios prácticos y recursos adicionales según el curso.</p>

                        <h4>¿Hay tutorías o asesorías disponibles durante el curso?</h4>
                        <p>Sí, ofrecemos tutorías y asesorías en horarios establecidos para resolver tus dudas y ayudarte con el contenido del curso.</p>

                        <h4>¿Cómo puedo acceder a las grabaciones de las clases si están disponibles?</h4>
                        <p>Puedes acceder a las grabaciones de las clases a través de la plataforma del curso utilizando tu cuenta de estudiante, siempre y cuando el curso sea de modalidad virtual.</p>

                        <h4>¿Cómo puedo comunicarme con el instructor o coordinador del curso?</h4>
                        <p>Puedes comunicarte con el instructor o coordinador a través del foro de la plataforma, por correo electrónico o en las sesiones de tutoría.</p>
                    </AccordionTab>
                </Accordion>

            </div>
        </div>

        <ConfirmDialog />
        <Toast />

        <div class="footer">
            <Footer />
        </div>

    </div>
</template>


<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import InputSwitch from "primevue/inputswitch";
import ConfirmDialog from "primevue/confirmdialog";
import Toast from "primevue/toast";
import { useToast } from "primevue/usetoast";
import NavBar from "@/components/navBar/NavBarCursos.vue";
import Footer from "@/components/inicio/Footer.vue";

export default {
    components: {
        InputSwitch,
        Toast,
        ConfirmDialog,
        Accordion,
        AccordionTab,
        NavBar,
        Footer
    },

    data() {
        return {
            activeIndex: 0,
            checked: true,
            agregarQueja: false,
            quejas: null,
            toast: useToast(),
        };
    },

    methods: {
        mensajeVista() {
            if (this.checked) {
                this.toast.add({
                    severity: "info",
                    summary: "Modo Administrador",
                    detail: "Estas en la vista de administrador",
                    life: 3000,
                });
            } else {
                this.toast.add({
                    severity: "info",
                    summary: "Modo Lectura",
                    detail: "Estas en la vista de solo lectura",
                    life: 3000,
                });
            }
        },

        cancelarFormulario(event) {
            this.agregarQueja = event;
        },
    },
};
</script>


<style scoped>
@font-face {
    font-family: 'Gravity';
    src: url('@/assets/fonts/Gravity-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
}


.header {
    background: linear-gradient(to right, #1e446b, #00aaff); /* Degradado de azul oscuro a azul claro */
    padding: 0.5%;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); 
    font-family: 'Gravity', sans-serif;

}
h1 {
    color: white;
    font-size: 2.5rem;
    margin: 1% 0% 1% 0%;
    text-align: center;
    font-family: 'Gravity', sans-serif;

}

.page-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

h4, h5 {
    text-align: left;
    font-family: 'Gravity', sans-serif;

}

p {
    text-align: left;
    font-size: 10pt;
    font-family: 'Gravity', sans-serif;

}

.contenedor-formulario {
    margin: 5% 10% 5% 10%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
 
}
span{
    font-family: 'Gravity', sans-serif;
}

.pi {
    vertical-align: middle;

}

</style>
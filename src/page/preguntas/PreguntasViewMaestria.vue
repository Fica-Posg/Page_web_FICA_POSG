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
                            <span>Información General</span>
                        </template>
                        <h4>¿Qué programas de postgrado ofrece la facultad?</h4>
                        <p>La facultad ofrece una amplia variedad de programas de posgrado en áreas como Civil, Sistemas, entre otros.</p>

                        <h4>¿Cuáles son los horarios de clases para los programas de postgrado?</h4>
                        <p>"Los horarios de clases son jueves y viernes de 18h00 a 21h00, y sábado de 8h00 a 14h00.</p>

                        <h4>¿Cuáles son los requisitos de aprobación?</h4>
                        <p>La nota mínima para aprobar es 16, y se requiere una asistencia del 80% del total de las horas del programa.</p>

                    </AccordionTab>

                    <!-- Admisión y Matrícula -->
                    <AccordionTab>
                        <template #header>
                            <i class="pi pi-book" style="font-size: 1.5rem; margin-right: 10px;"></i>
                            <span>Admisión y Matrícula</span>
                        </template>
                        <h4>¿Cuáles son los requisitos para aplicar a un programa de postgrado?</h4>
                        <p>Los requisitos varían según la oferta e incluyen un título de tercer nivel, una entrevista con el coordinador del programa y otros requisitos adicionales específicos del programa.</p>

                        <h4>¿Cómo es el proceso de selección y admisión para los programas de postgrado?</h4>
                        <p>El proceso de selección incluye la revisión de los documentos presentados, una entrevista y
                            en algunos casos un examen.</p>

                        <h4>¿Cuándo inicia el proceso de admisión y cuáles son las fechas importantes?</h4>
                        <p>El proceso de admisión generalmente inicia en marzo y agosto, pero las fechas exactas se
                            publican en el sitio web.</p>

                        <h4>¿Cuáles son las formas de pago disponibles?</h4>
                            <ul>
                              <li>Efectivo.</li>
                              <li>Tarjeta de Crédito.</li>
                              <li>Transferencia.</li>
                              <li>Pago Mixto.</li>
                            </ul>
                            <p>Para más detalles, de clic <strong><router-link to="/maestrias/formas-pago" class="link-formas-pago">aquí</router-link>.</strong></p>
                    </AccordionTab>

                    <AccordionTab>
                        <template #header>
                            <i class="pi pi-users" style="font-size: 1.5rem; margin-right: 10px;"></i>
                            <span>Recursos y Servicios al Estudiante</span>
                        </template>
                        <h4>¿Qué recursos ofrece la universidad para estudiantes de postgrado?</h4>
                        <p>La universidad ofrece laboratorios, bibliotecas, software especializado y acceso a bases de
                            datos científicas.</p>

                        <h4>¿Dónde puedo obtener apoyo académico o asesoramiento para mi tesis?</h4>
                        <p>Puedes obtener apoyo a través del coordinador del programa</p>

                        <h4>¿Cómo puedo acceder a los servicios de la biblioteca virtual?</h4>
                        <p>El acceso a la biblioteca virtual se realiza a través de la página web de la universidad con
                            tus credenciales de estudiante.</p>

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
import NavBar from "@/components/navBar/NavBarMaestrias.vue";
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

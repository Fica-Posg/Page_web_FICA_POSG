//img LOCALES 
//Ejemplo: import imgMaestriaAdministracion from '@/assets/noticias/img-n/img-maestria-administracion.jpg';
import procesoTitulacion from '@/assets/noticas/afiche-web-01-01.png';




/**
 *                   |Formato de noticias|
 * -Siempre ir agregando las ultimas noticias al principio
 * -El orden de las noticias mostradas en la Page Web se define en 
 *      src\page\noticias\NoticiasCursos.vue
 *      src\page\noticias\NoticiasMaestrias.vue
 * -No borrar las noticias antiguas / qutar y pegar al final del js
 * -El contenido de la noticia se puede dar formato con html 
 */
export const news = [
    /**
     * Maestrias
     */
    {
        id: 'procTitu',
        title: '¡Inicia el Proceso de Titulación!',
        image: procesoTitulacion,
        videoUrl:null,
        content: `
            <p>Estimado estudiante:</p>
            <p>El Consejo de Posgrado de la Facultad de Ingeniería y Ciencias Aplicadas de la Universidad Central del Ecuador informa que ha iniciado el PROCESO DE TITULACIÓN.</p>
            <p>Según el Reglamento del Régimen Académico, si no te has graduado dentro de los 10 años posteriores a la finalización de tu malla curricular, puedes inscribirte en este proceso y culminar tu programa de maestría.</p>
            <p>Pasos del Proceso:</p>
            <p>1️⃣ Postulación<br>
            2️⃣ Curso de Actualización de Conocimientos<br>
            3️⃣ Aprobación del Trabajo de Titulación<br>
            4️⃣ Graduación</p>
            <p>👉 Envía tus documentos<br>
            Completa y firma el formulario adjunto y envíalo a:<br>
            📧 fing.consejo.posgrado@uce.edu.ec<br>
            📧 Con copia a: pepauca@uce.edu.ec</p>
            <p>Plazo límite:<br>
            📅 Hasta el 31 de diciembre de 2024</p>
            <p>Información Adicional<br>
            El curso de Actualización iniciará la tercera semana de enero de 2025 (cronograma pendiente de aprobación).<br>
            Cada etapa tiene un arancel vigente que debe ser cancelado.</p>
            <p>Para dudas o inquietudes, no dudes en escribirnos.</p>
            <p>Atentamente,<br>
            Dirección de Posgrado</p>
        `,
        date: '2024-07-12'
    },
    {
        id: 'mcivil1',
        title: 'Maestría en Ingeniería Civil',
        image: null,
        videoUrl: 'https://www.tiktok.com/@posgradofica/video/7390794815589321989',
        content: '¡Estudia la maestría en Ingeniería Civil con especialización en Ingeniería de Transporte y Planificación de Tránsito! 🎓 Descubre cómo puedes ser parte del futuro de la movilidad urbana y conviértete en un experto en diseño, gestión y optimización de sistemas de transporte, una de las áreas más estratégicas y demandadas del futuro.',
        date: '2024-07-12'
    },
    {
        id: 'mcivil2',
        title: 'Maestría en Ingeniería Civil',
        image: null,
        videoUrl: 'https://www.tiktok.com/@posgradofica/video/7394470539156393222',
        content: '¡Estudia la maestría en Ingeniería Civil con especialización en Transporte y Planificación de Tránsito! 🎓 Sé un líder en la movilidad urbana del futuro.',
        date: '2024-07-12'
    },
    {
        id: 'mcivil3',
        title: 'Maestría en Ingeniería Civil',
        image: null,
        videoUrl: 'https://www.tiktok.com/@posgradofica/video/7405707083892428037',
        content: '¡Estudia la maestría en Ingeniería Civil con especialización en Ingeniería de Transporte y Planificación de Tránsito! 🎓 Descubre cómo puedes ser parte del futuro de la movilidad urbana y conviértete en un experto en diseño, gestión y optimización de sistemas de transporte, una de las áreas más estratégicas y demandadas del futuro.',
        date: '2024-07-12'
    },


    /**
     * Cursos
     */


];

/**
 * Noticias antiguas
 */
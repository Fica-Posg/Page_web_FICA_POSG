//img LOCALES 
//Ejemplo: import imgMaestriaAdministracion from '@/assets/noticias/img-n/img-maestria-administracion.jpg';


/**
 * ejemplo de noticia en la db
 *      {
        id: 'mcivil',                           // id para llamar el contenido desde el  componente
        title: 'Maestría en Ingeniería Civil',  // titulo del contenido
        image: null,                            // imagen del contenido, puede ser desde archivo(import) o link 
        videoUrl: 'https://www.tiktok.com/@posgradofica/video/7390794815589321989', // URL del video facebook o tiktok
        content: '¡Estudia la maestría en Ingeniería Civil con especialización...', // informacion de la noticia (resmen)
        date: '2024-07-12',                     // fecha de publicacion de la noticia
    },
 */

export const news = [

    //Noticias Maestrias
    {
        id: 'mcivil1',
        title: 'Maestría en Ingeniería Civil',  
        image: null,    
        videoUrl: 'https://www.tiktok.com/@posgradofica/video/7390794815589321989', 
        content: '¡Estudia la maestría en Ingeniería Civil con especialización en Ingeniería de Transporte y Planificación de Tránsito! 🎓 Descubre cómo puedes ser parte del futuro de la movilidad urbana y conviértete en un experto en diseño, gestión y optimización de sistemas de transporte, una de las áreas más estratégicas y demandadas del futuro.',
        date: '2024-07-12',  
    },
    {
        id: 'mcivil2',
        title: 'Maestría en Ingeniería Civil',
        image: null,
        videoUrl: 'https://www.tiktok.com/@posgradofica/video/7394470539156393222', 
        content: '¡Estudia la maestría en Ingeniería Civil con especialización en Transporte y Planificación de Tránsito! 🎓 Sé un líder en la movilidad urbana del futuro.',
        date: '2024-07-12',
    },
    {
        id: 'mcivil3',
        title: 'Maestría en Ingeniería Civil',
        image: null,
        videoUrl: 'https://www.tiktok.com/@posgradofica/video/7405707083892428037', // URL del video de YouTube
        content: '¡Estudia la maestría en Ingeniería Civil con especialización en Ingeniería de Transporte y Planificación de Tránsito! 🎓 Descubre cómo puedes ser parte del futuro de la movilidad urbana y conviértete en un experto en diseño, gestión y optimización de sistemas de transporte, una de las áreas más estratégicas y demandadas del futuro.',
        date: '2024-07-12',
    },
    
    //Noticias Cursos


/*
//ejemplos de noticias
    {
        id: 'posAdmin',
        title: 'Maestría en Administración de Empresas: Potencia tu Carrera',
        videoUrl: null,
        image: imgMaestriaAdministracion,
        content: 'La Universidad Central del Ecuador presenta su nueva Maestría en Administración de Empresas, enfocada en el desarrollo de habilidades de liderazgo y gestión empresarial. Los participantes aprenderán sobre finanzas, marketing y estrategia, lo que les permitirá sobresalir en el competitivo mundo empresarial. Este programa es ideal para profesionales que buscan avanzar en sus carreras.',
        date: '2024-09-29',
    },   
    {
// ejemplo de insta      
        id: 'insta',
        title: 'Ejem insta ',
        image: imgMaestriaAdministracion,
        videoUrl: 'https://www.instagram.com/reel/C9fUwe7ubWQ/',
        content: 'La Universidad Central del Ecuador presenta su nueva Maestría en Administración de Empresas, enfocada en el desarrollo de habilidades de liderazgo y gestión empresarial. Los participantes aprenderán sobre finanzas, marketing y estrategia, lo que les permitirá sobresalir en el competitivo mundo empresarial. Este programa es ideal para profesionales que buscan avanzar en sus carreras.',
        date: '2024-09-29',
    },
    {
//ejemplo de facebook
        id: 'fb',
        title: 'Ejem fb ',
        videoUrl: 'https://www.facebook.com/watch/?v=1027562445541665',
        image: imgMaestriaAdministracion,
        content: 'La Universidad Central del Ecuador presenta su nueva Maestría en Administración de Empresas, enfocada en el desarrollo de habilidades de liderazgo y gestión empresarial. Los participantes aprenderán sobre finanzas, marketing y estrategia, lo que les permitirá sobresalir en el competitivo mundo empresarial. Este programa es ideal para profesionales que buscan avanzar en sus carreras.',
        date: '2024-09-29',
    },
    {
        //ejemplo de facebook
        id: 'fbjk',
        title: 'Ejemplo video',
        videoUrl: 'https://www.facebook.com/watch/?v=542790424887308&t=150',
        image: imgMaestriaAdministracion,
        content: 'La Universidad Central del Ecuador presenta su nueva Maestría en Administración de Empresas, enfocada en el desarrollo de habilidades de liderazgo y gestión empresarial.',
        date: '2024-09-29',
    },
    {
        id: 'tiktok',
        title: 'Ejem tik tok',
        image: null,
        videoUrl: 'https://www.tiktok.com/@posgradofica/video/7394470539156393222', 
        content: '¡Estudia la maestría en Ingeniería Civil con especialización en Transporte.',
        date: '2024-07-12',
    },
    {
        id: "X",
        title: "Ejem X",
        videoUrl: "https://twitter.com/tctelevision/status/1842213200688808122?ref_src=twsrc%5Etfw",
        image: null,
        content: "La Universidad Central del La Universidad Central del Ecuador presenta su nueva Maestría en Administración de Empresas, enfocada en el desarrollo de habilidades de liderazgo y gestión empresarial. Los participantes aprenderán sobre finanzas, marketing y estrategia, lo que les permitirá sobresalir en el competitivo mundo empresarial. Este programa es ideal para profesionales que buscan avanzar en sus carreras. presenta su nueva Maestría en Administración de Empresas...",
        date: "2024-09-29"
    },
    {
//ejemplo sin video
        id: 'sinv',
        title: 'SIN Video',
        image: 'https://www.salud.gob.ec/wp-content/uploads/2024/05/UCE.jpg',
        videoUrl: null, // No hay video disponible para este EJEMPLO
        content: 'IMG CON LINK... El departamento de Psicología de la Universidad Central del Ecuador...',
        date: '2024-09-25',
    },
    {
//ejemplo sin img
        id: 'sinimg',
        title: 'Sin Imagen',
        image: null,
        videoUrl: null,
        content: 'La Universidad Central del Ecuador presenta su nueva Maestría en Administración de Empresas, enfocada en el desarrollo de habilidades de liderazgo y gestión empresarial. Los participantes aprenderán sobre finanzas, marketing y estrategia, lo que les permitirá sobresalir en el competitivo mundo empresarial. Este programa es ideal para profesionales que buscan avanzar en sus carreras.',
        date: '2024-09-29',
    },
    */
];

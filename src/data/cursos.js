import curso1 from '@/assets/cursos/curso1.png';
import curso2 from '@/assets/cursos/curso2.png';
import curso3 from '@/assets/cursos/curso3.png';
import curso4 from '@/assets/cursos/curso4.png';
import curso5 from '@/assets/cursos/curso5.png';
import curso6 from '@/assets/cursos/curso6.png';
import curso7 from '@/assets/cursos/curso7.png';
import curso8 from '@/assets/cursos/curso8.png';
import curso9 from '@/assets/cursos/curso9.png';
import curso10 from '@/assets/cursos/curso10.png';
import curso11 from '@/assets/cursos/curso11.png';
import curso12 from '@/assets/cursos/curso12.png';

import curso1Main from '@/assets/cursos2/curso1.png';
import curso2Main from '@/assets/cursos2/curso2.png';
import curso3Main from '@/assets/cursos2/curso3.png';
import curso4Main from '@/assets/cursos2/curso4.png';
import curso5Main from '@/assets/cursos2/curso5.png';
import curso6Main from '@/assets/cursos2/curso6.png';
import curso7Main from '@/assets/cursos2/curso7.png';
import curso8Main from '@/assets/cursos2/curso8.png';
import curso9Main from '@/assets/cursos2/curso9.png';
import curso10Main from '@/assets/cursos2/curso10.png';
import curso11Main from '@/assets/cursos2/curso11.png';
import curso12Main from '@/assets/cursos2/curso12.png';

export const cursosdb = [
    //Información del primer curso
    {
        //Lista
        id: 1,
        image: curso1,
        title: 'Curso de Diseño de Puentes',
        duration: '105 horas / 7 Semanas',
        mode: 'Presencial',
        price: '$110',
        area: 'Civil',
        url: '/curso-puentes',

        //Main
        imgMain: curso1Main,
        titleMain: 'Curso de Diseño de Puentes de Acero de Alma Llena Aplicando la Norma AA SHTO LRFD 2017 y CSI BRIDGE',

        //Individual
        objectives: 'Capacitar a las personas interesadas en el diseño de puentes de acero con criterio técnico y conocimiento estructural aplicando la normativa AASHTO LRFD 2017 requeridos para desarrollo en la práctica profesional, impartir conocimientos técnicos que la norma AASHTO LRFD 2017 y  realizar modelaciones con la ayuda del software de la casa comercial CSI Bridge aplicando la normativa AASHTO LRFD 2017. En el presente curso se detallará de manera teórica y práctica el diseño de puentes de almas llenas, utilizando la norma AASHTO LRFD 2017 y el software CSI BRIDGE. Se presenta los conceptos estructurales y la modelación respectiva en el software mencionado anteriormente, este curso está destinado a estudiantes y profesionales para ampliar su conocimiento y su hoja de vida.',
        orientation: 'Ingeniería Civil',
        requirements: 'Computador personal con CSI BRIDGE',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 21h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C1-Diseño_de_Puentes_de_Acero_de_Alma_Llena_Aplicando_la_Norma_AA_SHTO_LRFD_2017_y_CSI_BRIDGE.pdf',
        formLink: 'https://forms.gle/H3D5g1WLweW9ZGgj7'
    },
    //Información del segundo curso
    {
        //Lista
        id: 2,
        image: curso2,
        title: 'Curso en Sistemas de Información Geográfica con ArcGIS',
        duration: '40 horas / 4 semanas',
        mode: 'Presencial',
        price: '$80',
        area: 'Computación',
        url: '/curso-arcgis',

        //Main
        imgMain: curso2Main,
        titleMain: 'Curso en Sistemas de Información Geográfica con ArcGIS',

        //Individual
        objectives: 'El curso tiene como objetivo capacitar a las personas interesadas en el manejo de sistemas de información geográfica utilizando el software ARC GIS necesario en el ámbito profesional, impartir conocimientos sobre Sistemas de Información Geográfica (GIS), realizar modelaciones con ArcGIS utilizando los archivos más usados, metodologías de importación y realizar representaciones de mapas editando y generando mapas cartográficos desde cero, para el análisis correspondiente.',
        orientation: 'Ingeniería Civil',
        requirements: 'Computador personal con ArcGIS',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 20h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C2-Sistemas_de_Información_Geográfica_con_ArcGIS.pdf',
        formLink: 'https://forms.gle/2GnSsDM6KJWcjQGQ7'
    },
    //Información del tercer curso
    {
        //Lista
        id: 3,
        image: curso3,
        title: 'Curso de Especialización en Análisis no Lineal y Diseño por Desempeño Sísmico de Estructura',
        duration: '60 horas / 4 semanas',
        mode: 'Presencial',
        price: '$90',
        area: 'Civil',
        url: '/curso-analisis',

        //Main
        imgMain: curso3Main,
        titleMain: 'Curso de Especialización en Análisis no Lineal y Diseño por Desempeño Sísmico de Estructura',
        
        //Individual
        objectives: 'El curso tiene como objetivo proporcionar al participante los conceptos básicos para la determinación del desempeño sísmico de estructuras, aplicando el análisis estático no lineal, facilitando el uso de herramientas computacionales utilizando un enfoque teórico práctico desarrollando ejemplos con software de última generación.',
        orientation: 'Ingeniería Civil',
        requirements: 'Computador personal con ETABS Y SAP 2000',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 21h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C3-Especialización_en_Análisis_no_Lineal_y_Diseño_por_Desempeño_Sísmico_de_Estructura.pdf',
        formLink: 'https://forms.gle/rtWPd9nEMieM7TYRA'
    },
    //Información del cuarto curso
    {
        //Lista
        id: 4,
        image: curso4,
        title: 'Curso en Análisis de Funcionamiento Hidráulico de Redes de Alcantarillado con SWMM',
        duration: '40 horas / 4 semanas',
        mode: 'Presencial',
        price: '$80',
        area: 'Civil',
        url: '/curso-swmm',

        //Main
        imgMain: curso4Main,
        titleMain: 'Curso en Análisis de Funcionamiento Hidráulico de Redes de Alcantarillado con SWMM',

        //Individual
        objectives: 'El curso tiene como objetivo capacitar a las personas interesadas en el análisis de funcionamiento hidráulico de redes de alcantarillado con el software de SWMM, dominar el manejo de SWMM, sus características y análisis de resultados, conocer el alcance y limitaciones que tiene SWMM, para redes de alcantarillado e interpretar los datos obtenidos de las redes de alcantarillado.',
        orientation: 'Ingeniería Civil',
        requirements: 'Computador personal con software SWMM',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 20h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C4-Análisis_de_Funcionamiento_Hidráulico_de_Redes_de_Alcantarillado_con_SWMM.pdf',
        formLink: 'https://forms.gle/BWEcuV7kuARUwXJQ8'
    },
    //Información del quinto curso
    {
        //Lista
        id: 5,
        image: curso5,
        title: 'Curso de Análisis de Funcionamiento Hidráulico de Redes de Distribución con EPANET',
        duration: '40 horas / 4 semanas',
        mode: 'Presencial',
        price: '$80',
        area: 'Civil',
        url: '/curso-hidraulico-epanet',

        //Main
        imgMain: curso5Main,
        titleMain: 'Curso de Análisis de Funcionamiento Hidráulico de Redes de Distribución con EPANET',
        
        //Individual
        objectives: 'El curso tiene como objetivo capacitar a las personas interesadas en el análisis de funcionamiento hidráulico de redes de distribución con el software de EPANET, dominar el manejo de EPANET, sus características y análisis de resultados, conocer el alcance y limitaciones que tiene EPANET, para redes de distribución e interpretar los datos obtenidos de las redes de distribución.',
        orientation: 'Ingeniería Civil',
        requirements: 'Computador personal con EPANET',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 20h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C5-Análisis_de_Funcionamiento_Hidráulico_de_Redes_de_Distribución_con_EPANET.pdf',
        formLink: 'https://forms.gle/HsFFJcffgPJb1oNN7'
    },
    //Información del sexto curso
    {
        // Lista
        id: 6,
        image: curso6,
        title: 'Curso de Diseño de Canales y Alcantarillas de Hormigón Armado con la Norma AASHTO LRFD 2017 y SAP 2000',
        duration: '60 horas / 4 semanas',
        mode: 'Presencial',
        price: '$90',
        area: 'Civil',
        url: '/curso-hormigon',

        // Main
        imgMain: curso6Main,
        titleMain: 'Curso de Diseño de Canales y Alcantarillas de Hormigón Armado con la Norma AASHTO LRFD 2017 y SAP 2000',
        
        //Individual
        objectives: 'El curso tiene como objetivo capacitar a las personas interesadas en el diseño de canales y alcantarillas de hormigón armado mediante conocimientos de la norma AASHTO LRFD 2017 y utilizando el software SAP 2000 versión 2.1.0 para cumplir con proyectos de manera eficiente en su vida profesional, dotar de los conocimientos necesarios y actualizados en el campo de la ingeniería de alcantarillas y canales concretamente en el diseño estructural con hormigón armado y conocer los tipos de cargas que se presentan en las estructuras de alcantarillas y canales.',
        orientation: 'Ingeniería Civil',
        requirements: 'Computador personal con SAP 2000 versión 2.1.0',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 21h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C6-Diseño_de_Canales_y_Alcantarillas_de_Hormigón_Armado_con_la_Norma_AASHTO_LRFD_2017_y_SAP_2000.pdf',
        formLink: 'https://forms.gle/AUYWNUK5HDinrsMT9'
    },
    //Información del séptimo curso
    {
        //Lista
        id: 7,
        image: curso7,
        title: 'Curso Especializado en Ingeniería Sismo-Geotécnica y Interacción Suelo-Estructura',
        duration: '60 horas / 4 semanas',
        mode: 'Presencial',
        price: '$90',
        area: 'Civil',
        url: '/curso-sismo-geotecnica',

        //Main
        imgMain: curso7Main,
        titleMain: 'Curso Especializado en Ingeniería Sismo-Geotécnica y Interacción Suelo-Estructura',
        
        //Individual
        objectives: 'Capacitar a las personas interesadas en ingeniería Sismo - Geotécnica e interacción suelo-estructura, a partir de conceptos básicos en las distintas normativas vigentes y con la ayuda de software que son Shake 2000 y ETABS.',
        orientation: 'Ingeniería Civil',
        requirements: 'Computador personal con ETABS, SHAKE-2000',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 21h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C7-Especializado_en_Ingeniería_Sismo-Geotécnica_y_Interacción_Suelo-Estructura.pdf',
        formLink: 'https://forms.gle/uQiYxMspR1VYtpu66'
    },
    //Información del octavo curso
    {
        //Lista
        id: 8,
        image: curso8,
        title: 'Curso de Especialización en Ciberseguridad',
        duration: '75 horas / 5 semanas',
        mode: 'Presencial',
        price: '$100',
        area: 'Informática',
        url: '/curso-ciberseguridad',

        //Main
        imgMain: curso8Main,
        titleMain: 'Curso de Especialización en Ciberseguridad',
        
        //Individual
        objectives: 'El curso tiene como objetivo capacitar a las personas interesadas en la protección de datos de empresas o personas naturales que pueden ser afectados por ciber delincuentes para proteger información valiosa, dotar de los conocimientos necesarios y actualizados en el campo de la ingeniería informática en particular en ciberseguridad, conocer y comprender los tipos de cargas que se presentan en las estructuras de alcantarillas y canales, y conocer las debilidades y fortalezas de una compañía para tener más control, y establecer estrategias para protegerse de los ciberataques.',
        orientation: 'Ingeniería Informática',
        requirements: 'Computador personal',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 21h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C8-Especialización_en_Ciberseguridad.pdf',
        formLink: 'https://forms.gle/gv6R4STeJmGSmYzg8'
    },
    //Información del noveno curso
    {
        // Lista
        id: 9,
        image: curso9,
        title: 'Curso de Especialización en Gestión del Cloud Computing en la Empresa',
        duration: '50 horas / 5 semanas',
        mode: 'Presencial',
        price: '$80',
        area: 'Informática',
        url: '/curso-cloud',

        // Main
        imgMain: curso9Main,
        titleMain: 'Curso de Especialización en Gestión del Cloud Computing en la Empresa',

        // Individual
        objectives: 'El curso tiene como objetivo capacitar a las personas interesadas en la gestión de empresas por medio de Cloud Computing, para tomar decisiones de mejor manera en la gestión de datos digitales, dotar de los conocimientos necesarios y actualizados en el del gestor de empresas por medio de la nube, principal para trabajar de manera óptima y profesional en una empresa, conocer los beneficios y desventajas que tiene gestionar una empresa a partir del Cloud Computing y manejar de manera eficiente este gestor e implementar seguridad en un entorno Cloud Computing.',
        orientation: 'Ingeniería Informática',
        requirements: 'Computador personal',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 20h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C9-Especialización_en_Gestión_del_Cloud_Computing_en_la_Empresa.pdf',
        formLink: 'https://forms.gle/WHeM2hepbk96YBfT9'
    },
    //Información del décimo curso
    {
        // Lista
        id: 10,
        image: curso10,
        title: 'Curso de Indicadores de Seguridad y Seguridad Ocupacional',
        duration: '40 horas / 4 semanas',
        mode: 'Presencial',
        price: '$80',
        area: 'Industrial',
        url: '/curso-seguridad',

        // Main
        imgMain: curso10Main,
        titleMain: 'Curso de Indicadores de Seguridad y Seguridad Ocupacional',

        // Individual
        objectives: 'El curso tiene como objetivo capacitar a las personas interesadas en los indicadores de seguridad y seguridad ocupacional para gestionarlo de manera práctica y óptima en distintas empresas y evitar catástrofes en empleados, dotar de los conocimientos necesarios y actualizados de la prevención de riesgos laborales, a nivel empresarial, conocer las normativas de seguridad y salud a nivel nacional y ponerlas en práctica en una empresa, para evitar y disminuir los accidentes y enfermedades de los empleados, gestionar lineamientos para controlar el Sistema de Gestión de Seguridad y Salud en el trabajo (SG-SST) y desarrollar métodos de cálculo y registros de reportes.',
        orientation: 'Ingeniería Informática',
        requirements: 'Computador personal',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '18h00 a 20h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C10-Indicadores_de_Seguridad_y_Seguridad_Ocupacional.pdf',
        formLink: 'https://forms.gle/WHeM2hepbk96YBfT9'
    },
    //Información del décimo-primero curso
    {
        // Lista
        id: 11,
        image: curso11,
        title: 'Curso en Sistema de Información Geográfica con QGIS',
        duration: '40 horas / 4 semanas',
        mode: 'Virtual',
        price: '$80',
        area: 'Computación',
        url: '/curso-qgis',

        // Main
        imgMain: curso11Main,
        titleMain: 'Curso en Sistema de Información Geográfica con QGIS',

        // Individual
        objectives: 'El curso tiene como objetivo capacitar a las personas interesadas en el manejo de sistemas de información Geográfica utilizando el software libre QGIS necesario en el ámbito profesional, impartir conocimientos sobre Sistemas de información Geográfica, realizar modelaciones con QGIS utilizando los archivos más usados, metodologías de importación y realizar representaciones de mapas editando y generando mapas cartográficos desde cero, para el análisis correspondiente.',
        orientation: 'Todas las áreas de la Ingeniería',
        requirements: 'Computador personal con QGIS',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '19h00 a 21h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C11-Sistema_de_Información_Geográfica_con_QGIS.pdf',
        formLink: 'https://forms.gle/8sKS1FCPR9aSkk2KA'
    },
    //Información del décimo-segundo curso
    {
        // Lista
        id: 12,
        image: curso12,
        title: 'Curso en Sistema de Información Geográfica con ArcGIS Avanzado',
        duration: '40 horas / 4 semanas',
        mode: 'Virtual',
        price: '$80',
        area: 'Computación',
        url: '/curso-arcgis-avanzado',

        // Main
        imgMain: curso12Main,
        titleMain: 'Curso en Sistema de Información Geográfica con ArcGIS Avanzado',

        // Individual
        objectives: 'El curso tiene como objetivo capacitar a las personas preparadas en el manejo de Sistemas de Información Geográfica utilizando el software ArcGIS de manera avanzada, profesionalizando su aplicación en el campo laboral, ampliar las aplicaciones de los Sistemas de información Geográfica, realizar modelos en 3D y análisis de construcción y riesgos con ArcGIS y realizar el depurado de mapas editando y generando mapas cartográficos, sin errores y con la estructura y formatos utilizados.',
        orientation: 'Todas las áreas de la Ingeniería',
        requirements: 'Computador personal con ArcGIS',
        certificate: 'Académico de aprobación',
        dias: 'Lunes a viernes',
        horas: '19h00 a 21h00',
        pdfLink: 'https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Cursos/C12-Sistema_de_Información_Geográfica_con_ArcGIS_Avanzado.pdf',
        formLink: 'https://forms.gle/CRZpz1RLvSMpJiYt6'
    }
];

import maestria1 from '@/assets/maestrias/maestria1.png';
import maestria2 from '@/assets/maestrias/maestria2.png';
import maestria3 from '@/assets/maestrias/maestria3.png';
import maestria4 from '@/assets/maestrias/maestria4.png';

import maestria1Main from "@/assets/maestrias2/maestria1.jpg";
import maestria2Main from "@/assets/maestrias2/maestria2.jpg";
import maestria3Main from "@/assets/maestrias2/maestria3.jpg";
import maestria4Main from "@/assets/maestrias2/maestria4.jpg";

import sismica1Main from "@/assets/maestrias2/sismica1.png";
import rehabilitacionMain from "@/assets/maestrias2/rehabilitacion.png";
import sostenibleMain from "@/assets/maestrias2/sostenible.png";
import ecoeficienciaMain from "@/assets/maestrias2/ecoeficiencia.png";
import logisticaMain from "@/assets/maestrias2/logistica_sum.png";

export const maestriasdb = [
   {
    id: 1,
    image: maestria1,
    title: 'Maestría en Ingeniería Civil, mención en Ingeniería de Transporte y Planificación de Tránsito',
    duration: '3 semestres',
    mode: 'Presencial',
    price: '$5520',
    url: '/maestria-transporte',
    imgMain: maestria1Main,
    titleMain: "Maestría en Ingeniería Civil, mención en Ingeniería de Transporte y Planificación de Tránsito",
    description: "Ingeniería Civil",
    area: "Civil",
    mode: "presencial",
    requirements: [
      "Título de tercer nivel en Ingeniería Civil registrado en la SENESCYT.",
      "Si el título es extranjero, debe estar apostillado o legalizado.",
      "Entrevista con el coordinador del programa.",
      "Aprobar examen de admisión."
    ],
    schedule: [
      "Jueves y Viernes 18h00 a 21h00.",
      "Sábado 8h00 a 14h00."
    ],
    coordinator: "Ing. Jorge Crespo, MSc.",
    pdfLink: "https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Maestrias/m1-mención_en_Ingeniería_de_Transporte_y_Planificación_de_Tránsito.pdf",
    formLink: "https://forms.gle/WqFc9WFKZBoZqSDu9"
  },
  {
    id: 2,
    image: maestria2,
    title: 'Maestría en Ingeniería Civil, mención en Ingeniería Estructural, Sísmica y de Cimentaciones (2da cohorte)',
    duration: '3 semestres',
    mode: 'Presencial',
    price: '$5520',
    url: '/maestria-estructural',
    imgMain: maestria2Main,
    titleMain: "Maestría en Ingeniería Civil, mención en Ingeniería Estructural, Sísmica y de Cimentaciones (2da cohorte)",
    description: "Ingenieria Civil",
    area: "Civil",
    mode: "presencial",
    requirements: [
      "Título de tercer nivel registrado en la SENESCYT.",
      "Si el título es extranjero, debe estar legalizado por vía consular.",
      "Entrevista con el coordinador del programa.",
      "Aprobar examen de admisión.",
      "Suficiencia en inglés (nivel A2)."
    ],
    schedule: [
      "Jueves y Viernes 18h00 a 21h00.",
      "Sábado 8h00 a 14h00."
    ],
    coordinator: "Ing. Alejandro Machado, MSc.",
    pdfLink: "https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Maestrias/m2-mención_en_Ingeniería_Estructural,_Sísmica_y_de_Cimentaciones.pdf",
    formLink: "https://forms.gle/Pq3ZEnJHKyEpbvfk7"
  },
    {
    id: 3,
    image: maestria3,
    title: 'Maestría en Ingeniería Civil, mención en Ingeniería Vial y Pavimentos',
    duration: '3 semestres',
    mode: 'Presencial',
    price: '$5520',
    url: '/maestria-vial',
    imgMain: maestria3Main,
    titleMain: "Maestría en Ingeniería Civil, mención en Ingeniería Vial y Pavimentos",
    description: "Ingenieria Civil",
    area: "Civil",
    mode: "presencial",
    requirements: [
      "Título de tercer nivel en Ingeniería Civil, registrado en la SENESCYT.",
      "Si el título es extranjero, debe estar apostillado o legalizado por vía consular.",
      "Entrevista con el coordinador del programa.",
      "Aprobar examen de admisión.",
      "Suficiencia en inglés (nivel A2)."
    ],
    schedule: [
      "Jueves y Viernes 18h00 a 21h00.",
      "Sábado 8h00 a 14h00."
    ],
    coordinator: "Ing. Byron Heredia, MSc.",
    pdfLink: "https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Maestrias/m3-mención_en_Ingeniería_Vial_y_Pavimentos.pdf",
    formLink: "https://forms.gle/isTmSvFy2oyjDedG9"
  },
   {
    id: 4,
    image: maestria4,
    title: 'Maestría en Sistemas de Información, mención en Inteligencia de Negocios (2da cohorte)',
    duration: '2 semestres',
    mode: 'Presencial',
    price: '$4120',
    url: '/maestria-sistemas',
    imgMain: maestria4Main,
    titleMain: "Maestría en Sistemas de Información, mención en Inteligencia de Negocios (2da cohorte)",
    description: "Ingeniería en Sistemas",
    area: "Sistemas",
    mode: "presencial",
    requirements: [
      "Título de tercer nivel registrado en la SENESCYT.",
      "Si el título es extranjero, debe estar legalizado por vía consular.",
      "Entrevista con el coordinador del programa.",
      "Aprobar examen de admisión."
    ],
    schedule: [
      "Jueves y Viernes 18h00 a 21h00.",
      "Sábado 8h00 a 14h00."
    ],
    coordinator: "Ing. Ramiro Pilaluisa, PhD.",
    pdfLink: "https://repositorio.uce.edu.ec/archivos/FING/Posgrado/Maestrias/m4-mención_en_Inteligencia_de_Negocios_.pdf",
    formLink: "https://forms.gle/5YJabhmvATVaxPqZ8"
  },
  {
    id: 5,
    titleMain: "Maestría en Ingeniería Civil, mención en evaluación y rehabilitación de estructuras (FINALIZADA)",
    imgMain: rehabilitacionMain,
    area: "Civil",
    description: "Ingenieria Civil",
    mode: "presencial",
    url: '',
  },
  {
    titleMain: "Maestría en Ingeniería Civil, mención en Ingeniería Estructural, Sísmica y de Cimentaciones (1ra cohorte) (FINALIZADA)",
    imgMain: sismica1Main,
    area: "Civil",
    description: "Ingenieria Civil",
    mode: "presencial",
    url: '',
  },
  {
    titleMain: "Maestría en Sistemas Integrados, con mención en Sostenibilidad (En Ejecución)",
    imgMain: sostenibleMain,
    area: "Industrial",
    description: "Ingenieria Industrial",
    mode: "virtual",
    url: '',
  },
  {
    titleMain: "Maestría en Ecoeficiencia Industrial (En Ejecución)",
    imgMain: ecoeficienciaMain,
    area: "Industrial",
    description: "Ingenieria Industrial",
    mode: "virtual",
    url: '',
  },
  {
    titleMain: "Maestría en Ingeniería Industrial, con mención en logística y cadena de suministros (En Ejecución)",
    imgMain: logisticaMain,
    area: "Industrial",
    description: "Ingenieria Industrial",
    mode: "virtual",
    url: '',
  },
];
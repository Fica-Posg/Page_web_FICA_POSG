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


/*
  las img de la page Main(imgMain) q van a componenteMaestrias.vue
  deben ser 16:9 
*/

export const maestriasdb = [
    {
        //lista
        id: 1,
        image: maestria1,
        title: 'Maestría en Ingeniería Civil',
        duration: '3 semestres',
        mode: 'Presencial',
        price: '$5520',
        url: '/maestria-transporte',

        //main filtrado
        titleMain: "Maestría en Ingeniería Civil, mención en Ingeniería de Transporte y Planificación de Tránsito",
        imgMain: maestria1Main,
        area: "Civil",
        description: "Ingeniería Civil",
        mode:"presencial",



      },
      {
        //lista
        id: 2, 
        image: maestria2, 
        title: 'Maestría en Ingeniería Civil, mención en Ingeniería Estructural, Sísmica y de Cimentaciones (2da cohorte)', 
        duration: '3 semestres', 
        mode: 'Presencial', 
        price: '$5520', 
        url: '/maestria-estructural',

        //main
        imgMain: maestria2Main,
        titleMain: "Maestría en Ingeniería Civil, mención en Ingeniería Estructural, Sísmica y de Cimentaciones (2da cohorte)",
        description: "Ingenieria Civil",
        area: "Civil",
        mode:"presencial",

      },
      {
        //lista
        id: 3, 
        image: maestria3, 
        title: 'Maestría en Ingeniería Civil, mención en Ingeniería Vial y Pavimentos', 
        duration: '3 semestres', 
        mode: 'Presencial', 
        price: '$5520', 
        url: '/maestria-vial',
        
        //main
        imgMain: maestria3Main,
        titleMain: "Maestría en Ingeniería Civil, mención en Ingeniería Vial y Pavimentos",
        description: "Ingenieria Civil",
        area: "Civil",   
        mode:"presencial",

      },
      {
        //lista
        id: 4,
        image: maestria4, 
        title: 'Maestría en Sistemas de Información', 
        duration: '2 semestres', 
        mode: 'Presencial', 
        price: '$4120', 
        url: '/maestria-sistemas',

        //main
        titleMain: "Maestría en Sistemas de Información, mención en Inteligencia de Negocios (2da cohorte)",
        imgMain: maestria4Main,
        area: "Sistemas",
        description: "Ingeniería en Sistemas",
        mode:"presencial",

        //Individual

      },



      //Maestria en diferente estado (Main) Pd: no tienen Individual
      {
        //main filtrado
        id:5,
        titleMain: "Maestría en Ingeniería Civil, mención en evaluación y rehabilitación de estructuras (FINALIZADA)",
        imgMain: rehabilitacionMain,
        area: "Civil", 
        description: "Ingenieria Civil",
        mode:"presencial",
        url: '',
      },
      {
        //main filtrado
        titleMain: "Maestría en Ingeniería Civil, mención en Ingeniería Estructural, Sísmica y de Cimentaciones (1ra cohorte) (FINALIZADA)",
        imgMain: sismica1Main,
        area: "Civil", 
        description: "Ingenieria Civil",
        mode:"presencial",
        url: '',
      },
      {
        //main filtrado
        titleMain: "Maestría en Sistemas Integrados, con mención en Sostenibilidad (En Ejecución)",
        imgMain: sostenibleMain,
        area: "Industrial",
        description: "Ingenieria Industrial",
        mode:"virtual",
        url: '',
      },
      {
        //main filtrado
        titleMain: "Maestría en Ecoeficiencia Industrial (En Ejecución)",
        imgMain: ecoeficienciaMain,
        area: "Industrial",
        description: "Ingenieria Industrial",
        mode:"virtual",
        url: '',
      },
      {
        //main filtrado
        titleMain: "Maestría en Ingeniería Industrial, con mención en logística y cadena de suministros (En Ejecución)",
        imgMain: logisticaMain,
        area: "Industrial",
        description: "Ingenieria Industrial",
        mode:"virtual",
        url: '',
      },

];
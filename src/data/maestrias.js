import maestria1 from '@/assets/maestrias/maestria1.png';
import maestria1Main from "@/assets/maestrias2/maestria1.jpg";
import maestria2 from '@/assets/maestrias/maestria2.png';
import maestria2Main from "@/assets/maestrias2/maestria2.jpg";
import maestria3 from '@/assets/maestrias/maestria3.png';
import maestria3Main from "@/assets/maestrias2/maestria3.jpg";
import maestria4 from '@/assets/maestrias/maestria4.png';
import maestria4Main from "@/assets/maestrias2/maestria4.jpg";

import sismica2 from "@/assets/maestrias2/sismica1.jpeg";
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

      },



      
      /*
      {
        //main filtrado
        titleMain: "Maestría en Sistemas de Información, mención en Inteligencia de Negocios (1ra cohorte) (FINALIZADA)",
        imgMain: sismica2,
        area: "Sistemas",
        description: "Ingeniería en Sistemas",
        url: '',
      },
      */

];
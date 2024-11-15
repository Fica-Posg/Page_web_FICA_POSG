<template>
  <div class="component1">
    <h2 class="title">Cursos y Programas de Formación</h2>
    <div class="button-container">
      <div v-for="(item, index) in buttons" :key="index" :class="['button', { active: currentArea === item }]"
        @click="filterByArea(item)">
        {{ item }}
      </div>
    </div>

    <div class="content">
      <div v-if="filteredCursos.length" class="cursos-container">
        <div v-for="(curso, index) in filteredCursos" :key="index" class="curso">
          <router-link :to="curso.url" class="curso-link" @click="scrollToTop">
            <img :src="curso.imgMain" alt="Curso" class="curso-image" />
            <p class="curso-title">{{ curso.titleMain }}</p>
          </router-link>
        </div>
      </div>
      <div v-else>
        <p>No hay cursos disponibles para esta área.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { cursosdb } from '@/data/cursos';


export default {
  data() {
    return {
      buttons: ["Civil", "Computacion", "Industrial", "Informática", "Otros"],
      currentArea: "Civil", // Por defecto mostrar el área "Civil"
      cursos: cursosdb,
    };
  },
  computed: {
    filteredCursos() {
      return this.cursos.filter(curso => curso.area === this.currentArea);
    },
  },
  methods: {
    filterByArea(area) {
      this.currentArea = area;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
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


.component1 {
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
}

.button {
  background-color: transparent;
  color: #0076bd;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: inline-block;
  border: 2px solid transparent;
}

.button:hover {
  background-color: #0076bd;
  color: white;
}

.button.active {
  background-color: #0076bd;
  color: white;
}

.content {
  margin-top: 20px;
}

.cursos-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.curso {
  width: calc(25% - 30px);
  text-align: center;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.curso-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.curso-title {
  margin-top: 15px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
  max-width: 200px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  transition: text-decoration 0.3s ease;
}

.curso-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ddd;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.curso-image:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.curso-title {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  text-align: center;
  max-width: 200px;
  word-wrap: break-word;
  overflow-wrap: break-word;
  transition: text-decoration 0.3s ease;
}

.curso-title:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .curso {
    width: calc(50% - 30px);
  }

  .curso-image {
    width: 130px;
    height: 130px;
  }

}

@media (max-width: 600px) {
  .curso {
    width: calc(100% - 30px);
  }

  .curso-image {
    width: 100px;
    height: 100px;
  }

  .button-container {
    font-weight: bold;

  }

}
</style>

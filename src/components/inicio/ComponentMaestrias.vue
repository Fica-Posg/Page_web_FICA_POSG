<template>
  <div class="component1">
    <h2 class="title">Maestrías</h2>
    <div class="button-container">
      <div v-for="(item, index) in buttons" :key="index" :class="['button', { active: currentArea === item }]"
        @click="filterByArea(item)">
        {{ item }}
      </div>
    </div>
    <div class="content">
      <div v-if="filteredMaestrias.length" class="maestrias-container">
        <div v-for="(maestria, index) in filteredMaestrias" :key="index" class="maestria">
          <router-link :to="maestria.url" class="maestria-link" @click="scrollToTop">
            <img :src="maestria.imgMain" alt="Maestría" class="maestria-image" />
            <div class="maestria-info">
              <p class="maestria-title">{{ maestria.titleMain }}</p>
              <p class="maestria-description">{{ maestria.description }}</p>
              <p class="maestria-mode">
                <i class="pi pi-desktop"></i> Modalidad {{maestria.mode}}
              </p>
              <button v-if="maestria.url!=''" class="info-button">Más información</button>
            </div>
          </router-link>
        </div>
      </div>
      <div v-else>
        <p>No hay maestrías disponibles para esta área.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { maestriasdb } from '@/data/maestrias';

export default {
  data() {
    return {
      buttons: ["Civil", "Sistemas", "Industrial","Otros"],
      currentArea: "Civil",
      maestrias: maestriasdb,
    };
  },
  computed: {
    filteredMaestrias() {
      return this.maestrias.filter((maestria) => maestria.area === this.currentArea);
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
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: 'Gravity', sans-serif;
}

.button-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 20px;
  font-family: 'Gravity', sans-serif;
}

.button {
  background-color: transparent;
  color: #007bff;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: inline-block;
  border: 2px solid transparent;
}

.button:hover {
  background-color: #0076BD;
  color: white;
}

.button.active {
  background-color: #0076BD;
  color: white;
}

.maestrias-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.maestria {
  width: calc(33% - 30px);
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: left;
  padding: 20px;
  overflow: hidden;
}

.maestria:hover {
  transform: translateY(-5px);
}

.maestria-link {
  text-decoration: none;
  color: inherit;
}

.maestria-image {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 10px;
}

.maestria-info {
  padding: 10px 0;
}

.maestria-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
  font-family: 'Gravity', sans-serif;
}

.maestria-description {
  font-size: 14px;
  color: #808183;
  margin-bottom: 10px;
  font-family: 'Gravity', sans-serif;
}

.maestria-mode {
  font-size: 14px;
  color: #007bff;
  margin-bottom: 20px;
  font-family: 'Gravity', sans-serif;
}

.info-button {
  background-color: #808183;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: 'Gravity', sans-serif;
}

.info-button:hover {
  background-color: #084771;
}

@media (max-width: 1024px) {
  .maestria {
    width: calc(50% - 30px);
  }
}

@media (max-width: 600px) {
  .maestria {
    width: calc(100% - 30px);
  }

  .maestria-image {
    height: 150px;
  }
}
</style>

<template>
  <div class="page-container">
    <div class="filters-sidebar">
      <h2>Filtrar por</h2>
      <div class="filter">
        <!-- Duración -->
        <div class="filter-section">
          <h3>Duración</h3>
          <div>
            <input type="radio" id="duration2" name="duration" value="2 semestres" v-model="filters.duration">
            <label for="duration2">2 semestres</label>
          </div>
          <div>
            <input type="radio" id="duration1" name="duration" value="3 semestres" v-model="filters.duration">
            <label for="duration1">3 semestres</label>
          </div>
          <div>
            <input type="radio" id="duration3" name="duration" value="" v-model="filters.duration">
            <label for="duration3">Todos</label>
          </div>
        </div>
        <!-- Costo -->
        <div class="filter-section">
          <h3>Costo</h3>
          <div>
            <input type="radio" id="cost1" name="cost" value="Menos de $4000" v-model="filters.cost">
            <label for="cost1">Menos de $4000</label>
          </div>
          <div>
            <input type="radio" id="cost2" name="cost" value="Entre $4000 y $5000" v-model="filters.cost">
            <label for="cost2">Entre $4000 y $5000</label>
          </div>
          <div>
            <input type="radio" id="cost3" name="cost" value="Más de $5000" v-model="filters.cost">
            <label for="cost3">Más de $5000</label>
          </div>
          <div>
            <input type="radio" id="cost4" name="cost" value="" v-model="filters.cost">
            <label for="cost4">Todos</label>
          </div>
        </div>
        <!-- Modalidad -->
        <div class="filter-section">
          <h3>Modalidad</h3>
          <div>
            <input type="radio" id="mode1" name="mode" value="Presencial" v-model="filters.mode">
            <label for="mode1">Presencial</label>
          </div>
          <div>
            <input type="radio" id="mode2" name="mode" value="Online" v-model="filters.mode">
            <label for="mode2">Online</label>
          </div>
          <div>
            <input type="radio" id="mode3" name="mode" value="" v-model="filters.mode">
            <label for="mode3">Todos</label>
          </div>
        </div>
        <!-- Área -->
        <div class="filter-section">
          <h3>Área</h3>
          <div>
            <input type="radio" id="area1" name="area" value="Civil" v-model="filters.area">
            <label for="area1">Ingeniería Civil</label>
          </div>
          <div>
            <input type="radio" id="area2" name="area" value="Sistemas" v-model="filters.area">
            <label for="area2">Ingeniería Informática</label>
          </div>
          <div>
            <input type="radio" id="area3" name="area" value="" v-model="filters.area">
            <label for="area3">Todos</label>
          </div>
        </div>
      </div>
    </div>
    <div class="items-list">
      <div v-if="filteredMaestrias.length === 0" class="no-results">
        <i class="pi pi-exclamation-circle icono-advertencia" style="font-size: 5rem;"></i>
        <p>No se encontraron maestrías que coincidan con los filtros seleccionados.</p>
      </div>
      <div v-else class="item-card" v-for="maestria in filteredMaestrias" :key="maestria.id">
        <router-link :to="maestria.url" class="item-link" @click="scrollToTop">
          <img :src="maestria.image" alt="Imagen de la maestría" class="item-image">
          <h3>{{ maestria.title }}</h3>
        </router-link>
        <p><strong>Duración:</strong> {{ maestria.duration }}</p>
        <p><strong>Modalidad:</strong> {{ maestria.mode }}</p>
        <p><strong>Precio:</strong> {{ maestria.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { maestriasdb } from '@/data/maestrias';
import MaestriasService from '@/service/maestrias/MaestriasService';

export default {
  name: 'MaestriasPage',
  data() {
    return {
      maestrias: maestriasdb,
      filters: {
        duration: '',
        cost: '',
        mode: '',
        area: ''
      }
    };
  },
  computed: {
    filteredMaestrias() {
      const filtered = MaestriasService.filterMaestrias(this.maestrias, this.filters);
      if (filtered.length === 0) {
        this.scrollToTop();
      }
      return filtered;
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style src="@/css/estiloLista.css" scoped></style>
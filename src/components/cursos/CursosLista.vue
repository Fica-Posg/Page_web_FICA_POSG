<template>
  <div class="page-container">
    <div class="filters-sidebar">
      <h2>Filtrar por</h2>
      <div class="filter">
        <!-- Duración -->
        <div class="filter-section">
          <h3>Duración</h3>
          <div>
            <input type="radio" id="duration2" name="duration" value="Menos de 50 horas" v-model="filters.duration">
            <label for="duration2">Menos de 50 horas</label>
          </div>
          <div>
            <input type="radio" id="duration1" name="duration" value="Entre 50 y 80 horas" v-model="filters.duration">
            <label for="duration1">Entre 50 y 80 horas</label>
          </div>
          <div>
            <input type="radio" id="duration3" name="duration" value="Más de 80 horas" v-model="filters.duration">
            <label for="duration3">Más de 80 horas</label>
          </div>
          <div>
            <input type="radio" id="duration4" name="duration" value="" v-model="filters.duration">
            <label for="duration4">Todos</label>
          </div>
        </div>
        <!-- Costo -->
        <div class="filter-section">
          <h3>Costo</h3>
          <div>
            <input type="radio" id="cost1" name="cost" value="Menos de $90" v-model="filters.cost">
            <label for="cost1">Menos de $90</label>
          </div>
          <div>
            <input type="radio" id="cost2" name="cost" value="Entre $90 y $100" v-model="filters.cost">
            <label for="cost2">Entre $90 y $100</label>
          </div>
          <div>
            <input type="radio" id="cost3" name="cost" value="Más de $100" v-model="filters.cost">
            <label for="cost3">Más de $100</label>
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
            <input type="radio" id="mode2" name="mode" value="Virtual" v-model="filters.mode">
            <label for="mode2">Virtual</label>
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
            <input type="radio" id="area2" name="area" value="Informática" v-model="filters.area">
            <label for="area2">Ingeniería Sistemas</label>
          </div>
          <div>
            <input type="radio" id="area3" name="area" value="Industrial" v-model="filters.area">
            <label for="area3">Ingeniería Industrial</label>
          </div>
          <div>
            <input type="radio" id="area4" name="area" value="Computación" v-model="filters.area">
            <label for="area4">Ingeniería Computación</label>
          </div>
          <div>
            <input type="radio" id="area5" name="area" value="" v-model="filters.area">
            <label for="area5">Todos</label>
          </div>
        </div>
      </div>
    </div>
    <div class="items-list">
      <div v-if="filteredCursos.length === 0" class="no-results">
        <!--
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icono-advertencia">
          <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
        </svg>-->
        <i class="pi pi-exclamation-circle icono-advertencia" style="font-size: 5rem;"></i>
        <p>No se encontraron cursos que coincidan con los filtros seleccionados.</p>
      </div>
      <div v-else class="item-card" v-for="curso in filteredCursos" :key="curso.id">
        <router-link :to="curso.url" class="item-link" @click="scrollToTop">
          <img :src="curso.image" alt="Imagen del curso" class="item-image">
          <h3>{{ curso.title }}</h3>
        </router-link>
        <p><strong>Duración:</strong> {{ curso.duration }}</p>
        <p><strong>Modalidad:</strong> {{ curso.mode }}</p>
        <p><strong>Precio:</strong> {{ curso.price }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { cursosdb } from '@/data/cursos';
import CursoService from '@/service/cursos/CursoService';

export default {
  name: 'CursosPage',
  data() {
    return {
      cursos: cursosdb,
      filters: {
        duration: '',
        cost: '',
        mode: '',
        area: ''
      }
    };
  },
  computed: {
    filteredCursos() {
      const filtered = CursoService.filterCursos(this.cursos, this.filters);
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
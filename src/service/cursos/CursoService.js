// src/services/CursoService.js

export default {
    filterCursos(cursos, filters) {
      return cursos.filter(curso => {
        const matchesDuration = filters.duration ? this.checkDuration(curso.duration, filters.duration) : true;
        const matchesCost = filters.cost ? this.checkPrice(curso.price, filters.cost) : true;
        const matchesMode = filters.mode ? curso.mode === filters.mode : true;
        const matchesArea = filters.area ? curso.area === filters.area : true;
  
        return matchesDuration && matchesCost && matchesMode && matchesArea;
      });
    },
    checkDuration(duration, filter) {
      const numericDuration = parseFloat(duration.replace(' horas', '').replace(',', ''));
      if (filter === 'Menos de 50 horas') return numericDuration < 50;
      if (filter === 'Entre 50 y 80 horas') return numericDuration >= 50 && numericDuration <= 80;
      if (filter === 'Más de 80 horas') return numericDuration > 80;
      return true;
    },
    checkPrice(price, filter) {
      const numericPrice = parseFloat(price.replace('$', '').replace(',', ''));
      if (filter === 'Menos de $90') return numericPrice < 90;
      if (filter === 'Entre $90 y $100') return numericPrice >= 90 && numericPrice <= 100;
      if (filter === 'Más de $100') return numericPrice > 100;
      return true;
    }
};
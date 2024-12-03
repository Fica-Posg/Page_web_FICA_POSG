// FILE: MaestriasService.js

export default {
  filterMaestrias(maestrias, filters) {
    return maestrias.filter(maestria => {
      const hasTitle = maestria.title && maestria.title.trim() !== '';
      const matchesDuration = filters.duration ? maestria.duration === filters.duration : true;
      const matchesCost = filters.cost ? this.checkPrice(maestria.price, filters.cost) : true;
      const matchesMode = filters.mode ? maestria.mode === filters.mode : true;
      const matchesArea = filters.area ? maestria.title.includes(filters.area) : true;

      return hasTitle && matchesDuration && matchesCost && matchesMode && matchesArea;
    });
  },

  checkPrice(price, filter) {
    if (!price) return false; // Verificar si price es undefined o null
    const numericPrice = parseFloat(price.replace('$', '').replace(',', ''));
    if (filter === 'Menos de $4000') return numericPrice < 4000;
    if (filter === 'Entre $4000 y $5000') return numericPrice >= 4000 && numericPrice <= 5000;
    if (filter === 'Más de $5000') return numericPrice > 5000;
    return true;
  }
};
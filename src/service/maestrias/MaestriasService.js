export default {
  filterMaestrias(maestrias, filters) {
    return maestrias.filter(maestria => {
      // Excluir maestrías que no tienen la propiedad 'title'
      if (!maestria.title) {
        return false;
      }

      const hasTitle = (maestria.title && maestria.title.trim() !== '') || (maestria.titleMain && maestria.titleMain.trim() !== '');
      const matchesDuration = filters.duration ? maestria.duration === filters.duration : true;
      const matchesCost = filters.cost ? this.checkPrice(maestria.price, filters.cost) : true;
      const matchesMode = filters.mode ? maestria.mode === filters.mode : true;
      const matchesArea = filters.area ? (maestria.title && maestria.title.includes(filters.area)) || (maestria.titleMain && maestria.titleMain.includes(filters.area)) : true;

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
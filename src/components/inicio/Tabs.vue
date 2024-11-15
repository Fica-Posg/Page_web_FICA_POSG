<template>
  <div>
    <ul class="tabs">
      <li
        v-for="tab in tabs"
        :key="tab.name"
        :class="{ active: tab.name === selectedTab }"
        @click="selectedTab = tab.name"
      >
        {{ tab.label }}
      </li>
    </ul>
    <div class="tab-content">
      <slot :name="selectedTab"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      selectedTab: "datos-informativos", // Tab por defecto
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.tabs {
  list-style-type: none;
  padding: 0;
  display: flex;
}

.tabs li {
  padding: 10px;
  cursor: pointer;
  background-color: #ddd;
  margin-right: 5px;
  border-radius: 5px;
}

.tabs li.active {
  background-color: #003366;
  color: white;
}

.tab-content {
  margin-top: 20px;
}
</style>

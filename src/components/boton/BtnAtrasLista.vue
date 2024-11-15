<template>
  <div class="container">
    <button class="btn" @click="goback">Atrás</button>
  </div>
</template>

<script>
export default {
    props: {
        atras: {
            type: String,
            required: true
        }
    },
    methods:{
        goback(){
            this.$router.push("/"+ this.atras +"-todos");
        }

  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Gravity';
  src: url('@/assets/fonts/Gravity-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}
.container {
    width: 100%;
}

.btn {
  margin: 20px 30px ;
  background-color: transparent;
  color: #007bff;
  padding: 12px 25px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: inline-block;
  border: 2px solid transparent;
  font-family: 'Gravity', sans-serif;


}
.btn:hover {
  background-color: #007bff;
  color: white;
}
</style>
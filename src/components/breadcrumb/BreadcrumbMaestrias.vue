<template>
    <nav class="breadcrumb">
      <ul>
        <li><a href="/#/maestrias">Inicio</a></li>
        <li><a href="/#/maestrias-todos">Maestrías</a></li>
        <li>{{ tipocmaestria }}</li>
      </ul>
    </nav>
</template>

<script>
export default {
    props: {
      tipocmaestria: {
        type: String,
        required: true
    }
  }
}
</script>

<style>
.breadcrumb {
    margin-bottom: 20px;
  }
  
  .breadcrumb ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  .breadcrumb li {
    margin-right: 10px;
  }
  
  .breadcrumb li a {
    color: #007bff;
    text-decoration: none;
  }
  
  .breadcrumb li a:hover {
    text-decoration: underline;
  }
  
  .breadcrumb li::after {
    content: " » ";
    margin-left: 10px;
  }
  
  .breadcrumb li:last-child::after {
    content: "";
    margin-left: 0;
  }
  a,li{
    font-family: "Gravity", sans-serif;
  }

</style>
<template>
  <nav class="breadcrumb">
      <ul>
        <li><a href="/#/cursos">Inicio</a></li>
        <li><a href="/#/cursos-todos">Cursos</a></li>
        <li>{{ tipocurso }}</li>
      </ul>
    </nav>
</template>

<script>
export default {
    props: {
        tipocurso: {
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

</style>
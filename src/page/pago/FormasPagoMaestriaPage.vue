<template>
  <NavBar class="navbar" />
  <div class="header">
    <h1>Formas de Pago</h1>
  </div>
  <div class="formas-pago-container">
    <div class="formas-pago-grid">
      <div class="pago-item">
        <h2>Efectivo</h2>
        <p>
          El estudiante debe generar su voucher a través de la plataforma SIIU y
          presentarlo en el Departamento Financiero.
        </p>
        <img
          src="@/assets/pagos/efectivo.png"
          alt="Efectivo"
          class="pago-image"
        />
      </div>

      <!-- Tarjeta de Crédito -->
      <div class="pago-item">
        <h2>Tarjeta de Crédito</h2>
        <p>
          Si el pago se realiza con tarjeta, el estudiante debe enviar un correo
          a:
          <a href="mailto:fing.consejo.posgrado@uce.edu.ec" class="email-link"
            >fing.consejo.posgrado@uce.edu.ec</a
          >, indicando la forma de pago, y acercarse al Departamento Financiero
          para legalizar el trámite correspondiente.
        </p>
        <img
          src="@/assets/pagos/tarjeta.png"
          alt="Tarjeta de Crédito"
          class="pago-image"
        />
      </div>

      <!-- Transferencia Bancaria -->
      <div class="pago-item">
        <h2>Transferencia</h2>
        <p>
          En caso de que el pago sea por transferencia, el estudiante debe
          enviar un correo a:
          <a href="mailto:fing.consejo.posgrado@uce.edu.ec" class="email-link"
            >fing.consejo.posgrado@uce.edu.ec</a
          >, indicando la forma de pago, y acercarse al Departamento Financiero
          para legalizar el trámite correspondiente.
        </p>
        <img
          src="@/assets/pagos/transferencia.png"
          alt="Transferencia Bancaria"
          class="pago-image"
        />
      </div>

      <!-- Pago Mixto -->
      <div class="pago-item">
        <h2>Pago Mixto</h2>
        <p>
          Para el pago mixto, el estudiante debe enviar un correo a:
          <a href="mailto:fing.consejo.posgrado@uce.edu.ec" class="email-link"
            >fing.consejo.posgrado@uce.edu.ec</a
          >, indicando la forma de pago, y acercarse al Departamento Financiero
          para legalizar el trámite correspondiente.
        </p>
        <img
          src="@/assets/pagos/efectivo-credito.png"
          alt="Pago Mixto"
          class="pago-image"
        />
      </div>
    </div>
  </div>
  <div class="footer">
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/navBar/NavBarMaestrias.vue";
import Footer from "@/components/inicio/Footer.vue";
export default {
  components: {
    NavBar,
    Footer,
  },
  name: "FormasDePago",
};
</script>

<style scoped>


@font-face {
  font-family: "Gravity";
  src: url("@/assets/fonts/Gravity-Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

.header {
  width: 100%;
  background: linear-gradient(
    to right,
    #1e446b,
    #00aaff
  ); 
  padding: 0.5%;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

}

h1 {
  color: white;
  font-size: 2.5rem;
  margin: 1% 0% 1% 0%;
  text-align: center;
  font-family: "Gravity";

}

.formas-pago-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.pago-item {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2), 0 -5px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.pago-item:hover {
  transform: scale(1.02);
}

.pago-item h2 {
  font-size: 20px;
  color: #007bff;
  margin-bottom: 10px;
  font-family: "Gravity";

}

.pago-image {
  margin-top: 10px;
  max-width: 80px;
  height: auto;
}

.formas-pago-container {
  padding: 2%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 800px;
  text-align: left;
}

.formas-pago-section {
  margin-bottom: 20px;
}

.formas-pago-section h2 {
  font-size: 20px;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #666;
  font-family: "Gravity";

}
.email-link {
  color: blue;
  text-decoration: underline;
  cursor: pointer; 
  font-family: "Gravity";

}

.email-link:hover {
  color: darkblue; 
  font-family: "Gravity";

}
</style>
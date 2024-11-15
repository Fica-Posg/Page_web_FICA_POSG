<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-columns">
        <div class="footer-column-sellos">
          <div class="footer-logo">
            <img :src="logouce" alt="Logo UCE" />
            <img :src="logo" alt="Logo Consejo Posgrado" />
          </div>
        </div>
        <div class="footer-column">
          <h4>Contáctenos</h4>
          <p>
            Av. América y Av. Universitaria, 4to piso del edificio de aulas de
            la Facultad de Ingeniería y Ciencias Aplicadas.
          </p>
          <p>Atención de: Lunes a Viernes de 08h00 - 13h00 y 14h00 - 16h00</p>
        </div>
        <div class="footer-column">
          <h4>Soporte al cliente</h4>
          <p>Email: fing.consejo.posgrado@uce.edu.ec</p>
          <p>Teléfono: (593-02) 2551270</p>
        </div>
        <div class="footer-column social-media">
          <h4>Síguenos en</h4>
          <div class="social-icons">
            <a href="https://www.facebook.com/posgradofica" target="_blank">
              <i class="pi pi-facebook" style="font-size: 1.5rem; margin-right: 10px; color: white;"></i>
            </a>
            <a href="https://www.instagram.com/posgradofica" target="_blank">
              <i class="pi pi-instagram" style="font-size: 1.5rem; margin-right: 10px; color: white;"></i>
            </a>
            <a href="https://twitter.com/posgradofica" target="_blank">
              <i class="pi pi-twitter" style="font-size: 1.5rem; margin-right: 10px; color: white;"></i>
            </a>
            <a href="https://www.tiktok.com/@posgradofica" target="_blank">
              <i class="pi pi-tiktok" style="font-size: 1.5rem; margin-right: 10px; color: white;"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <p>Copyright © 2024 Consejo de Posgrado · Todos los derechos reservados</p>
    </div>
  </footer>

  <a
    href="https://wa.me/593983747088"
    class="whatsapp-button"
    target="_blank"
  >
    <img
      src="https://img.icons8.com/color/48/000000/whatsapp.png"
      alt="WhatsApp"
    />
    <span class="tooltip">Chatea con nosotros</span>
  </a>

</template>
  
<script>
import logo from "@/assets/logo-posgrado.png";
import logouce from "@/assets/logo_uce.png";

export default {
  data() {
    return {
      logo: logo,
      logouce:logouce,
    };
  },
};
</script>
  
<style scoped>
@font-face {
  font-family: 'Gravity';
  src: url('@/assets/fonts/Gravity-Regular.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}


.footer {
  background-color: #084771;
  color: white;
  padding: 0px;
  width: 100%;
  text-align: left;
  margin: 0;
  box-sizing: border-box;
  position: relative;
  left: 0;
  font-family: 'Gravity', sans-serif;

}

.footer-content {
  display: flex;
  flex-wrap: wrap; /* Permite que las columnas se ajusten */
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: auto auto;
}
.footer-logo {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  gap: 20px; 
  margin: 30px 0; 
  
}
.footer-logo img {
  width: 70px;
  height: auto;
  object-fit: contain;
}

.footer-columns {
  display: flex;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.footer-column {
  flex: 1 1 200px; 
  padding: 0 15px;
  justify-content: center;
  text-align: center;
}

.footer-column-sellos {
  flex: 1 1 200px;
  padding: 0 15px;
  display: flex; /* Activar flexbox en cada columna */
  flex-direction: column; /* Alinear contenido en columna */
  justify-content: center; /* Centrar contenido verticalmente */
  text-align: center; /* Alinear contenido horizontalmente */
  height: 100%; /* Opcional: ajustar altura según tus necesidades */
}

.footer-column h3 {
  margin-bottom: 10px;
  text-align: center;
}

.footer-column p {
  margin: 10px 0;
  text-align: center;
  font-size: 12px; 
}

.footer-column.social-media {
  text-align: center;
}

.social-icons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Permite que los íconos se ajusten */
}

.social-icons a {
  margin: 3px;
}

.social-icons img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 5px;
  transition: transform 0.3s;
}

.social-icons img:hover {
  transform: scale(1.1);
}

/**/

.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
  text-decoration: none;
}

.whatsapp-button:hover {
  transform: scale(1.1);
}

.whatsapp-button img {
  width: 30px;
  height: 30px;
}

.tooltip {
  visibility: hidden;
  width: 110px;
  background-color: #25d366;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -70px;
  opacity: 0;
  transition: opacity 0.3s;
}

.whatsapp-button:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

/* */

.copyright {
  display: flex;
  align-items: center;
  justify-content: center;
  padding:  0%;
  font-size: 12px; 

}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-columns {
    flex-direction: column;
    align-items: center;
  }

  .footer-column {
    text-align: center;
    padding: 10px 0;
  }

  .social-icons {
    margin: 10px 0;
  }
}

@media (max-width: 576px) {
  .footer-logo img {
    width: 45px;
  }

  .social-icons img {
    width: 40px;
    height: 40px;
  }


}
</style>
  
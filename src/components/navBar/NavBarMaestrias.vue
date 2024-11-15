<template>
  <div class="navbar">
    <div class="logo-container">
      <img
        :src="logo"
        alt="Logo UCE"
        class="logo"
        @click.prevent="goToInicio"
      />
      <div class="logo-with-tooltip">
        <a @click.prevent="goToInicio">
          <div class="texto-facu">
            <p>Facultad de Ingeniería y</p>
            <p>Ciencias Aplicadas</p>
          </div>
          <div class="texto-cp">
            <strong><p>Consejo de Posgrado</p></strong>
          </div>
        </a>
        <div class="tooltip">Centro de Educación Continua UCE</div>
      </div>
      <img
        :src="logocp"
        alt="Logo UCE"
        class="logocp"
        @click.prevent="goToInicio"
      />
    </div>

    <div class="menu-container">
      <Menubar class="custom-menubar" :model="items" />
    </div>
  </div>
</template>

<script>
import Menubar from "primevue/menubar";
import logo from "@/assets/logo_uce.png";
import logocp from "@/assets/logo-posgrado.png";
import newLogo from "@/assets/text_fica.png";
import "primeicons/primeicons.css";

export default {
  components: {
    Menubar,
  },
  data() {
    return {
      logo: logo,
      newLogo: newLogo,
      logocp: logocp,
      items: [
        {
          label: "Inicio",
          icon: "pi pi-home",
          command: () => {
            this.$router.push("/maestrias");
          },
        },
        {
          label: "Oferta",
          icon: "pi pi-star",
          items: [
            {
              label: "Maestrías",
              icon: "pi pi-search",
              command: () => {
                this.$router.push("/maestrias-todos");
              },
            },
            {
              label: "Formas de pago",
              icon: "pi pi-credit-card",
              command: () => {
                this.$router.push("/maestrias/formas-pago");
              },
            },
          ],
        },
        {
          label: "¿Quiénes somos?",
          icon: "pi pi-id-card",
          items: [
            {
              label: "Historia",
              icon: "pi pi-bookmark",
              command: () => {
                this.$router.push("/maestrias/historia");
              },
            },
            {
              label: "Noticias",
              icon: "pi pi-globe",
              command: () => {
                this.$router.push("/maestrias/noticias");
              },
            },
            {
              label: "Preguntas ",
              icon: "pi pi-question",
              command: () => {
                this.$router.push("/maestrias/preguntas");
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    goToInicio() {
      this.$router.push("/maestrias");
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Gravity";
  src: url("@/assets/fonts/Gravity-Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff88;
  padding: 10px 20px 10px 40px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

.logo {
  width: 80px;
  height: 80px;
}
.logocp {
  width: 78px;
  height: 78px;
}

.new-logo {
  width: 200px;
  cursor: pointer;
}

.logo-with-tooltip {
  cursor: pointer;
  position: relative;
  font-size: 14pt;
  font-family: "Gravity", sans-serif;
}

.tooltip {
  visibility: hidden;
  width: 200px;
  background-color: rgb(96, 96, 96);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: -20px;
  left: 30%;
  margin-left: 10px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
  font-family: "Gravity", sans-serif;
}

.logo-with-tooltip:hover .tooltip {
  visibility: visible;
  opacity: 1;
}

.menu-container {
  display: flex;
  justify-content: flex-end;
  flex-grow: 0;
}

.custom-menubar {
  width: auto;
  min-width: 200px;
}

.p-menubar {
  background-color: transparent;
  border: none;
  box-shadow: none;
  font-family: "Gravity", sans-serif;
  font-size: 16px;
}

.p-menubar .p-menuitem-link {
  transition: color 0.3s, background-color 0.3s;
}

.p-menubar .p-menuitem-link:hover {
  color: #007bff;
  background-color: rgba(0, 123, 255, 0.1);
}

.p-menubar .p-menuitem-link:focus {
  outline: none;
}

@media (max-width: 960px) {
  .navbar {
    flex-direction: column;
    align-items: center;
  }

  .menu-container {
    width: 100%;
    justify-content: left;
    margin-top: 10px;
  }

  .logo-container {
    justify-content: center;
    width: 100%;
  }
  .custom-menubar {
    width: 200px;
  }
}

.logo-with-tooltip p {
  margin-top: 0%;
  margin-bottom: 1%;
}
.texto-facu {
  color: #0076bd;
}
.texto-cp {
  color: #084771;
}
</style>

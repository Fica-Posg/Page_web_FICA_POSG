<template>
  <div 
    class="slider-container" 
    :style="containerStyle" 
    @mouseenter="pauseSliding" 
    @mouseleave="resumeSliding"
  >
    <div class="background" :style="{ backgroundColor: dominantColor }"></div>
    <div class="slides-container">
      <div class="slides-wrapper" :style="wrapperStyle" >
        <div class="slide" v-for="(image, index) in images" :key="index" @click="moreInfo">
            <img class="img" :src="image" :alt="'Slide ' + (index + 1)" />   
            <img class="info" :src="info[index]" :alt="'Info ' + (index + 1)" />
        </div>
      </div>
    </div>


    <button class="nav-button prev" @click="prevSlide">❮</button>
    <button class="nav-button next" @click="nextSlide">❯</button>

    <div class="indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        :class="['indicator', { active: currentIndex === index }]"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      images: [
        require('@/assets/deslizableIMG/maestrias/img-m-puentes.png'),
        require('@/assets/deslizableIMG/maestrias/img-m-sistemas.png'),
        
      ],
      info: [
        require('@/assets/deslizableIMG/maestrias/info-m-puentes.png'),
        require('@/assets/deslizableIMG/maestrias/info-m-sistemas.png'),
        
      ],
      routes: [
        "/maestria-transporte", 
        "/maestria-sistemas",  
      ],
      currentIndex: 0,
      interval: null,
      isPaused: false,
      dominantColor: '#000', 
    };
  },
  computed: {
    wrapperStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
    containerStyle() {
      return {
        position: 'relative',
      };
    },
  },
  mounted() {
    this.startSliding();
    this.getDominantColor(); 
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    moreInfo() {
      this.$router.push(this.routes[this.currentIndex]);
    },
    startSliding() {
      this.interval = setInterval(() => {
        if (!this.isPaused) {
          this.nextSlide();
        }
      }, 3500);
    },
    pauseSliding() {
      this.isPaused = true;
    },
    resumeSliding() {
      this.isPaused = false;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      this.getDominantColor();
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.getDominantColor();
    },
    goToSlide(index) {
      this.currentIndex = index;
      this.getDominantColor();
    },
    getDominantColor() {
      const img = new Image();
      img.src = this.images[this.currentIndex];
      img.crossOrigin = "Anonymous"; 
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        let r = 0, g = 0, b = 0;
        const pixelCount = data.length / 4;

        // Sumar los valores de RGB
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
        }

        // Calcular el color promedio
        r = Math.floor(r / pixelCount);
        g = Math.floor(g / pixelCount);
        b = Math.floor(b / pixelCount);

        this.dominantColor = `rgb(${r},${g},${b})`;
      };
      
      img.onerror = () => {
        console.error("Error al cargar la imagen:", img.src);
      };
    },
  },
};
</script>

<style scoped>

.slider-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: background-color 1s ease; 
  z-index: 1;
}

.slides-container {
  overflow: hidden;
  width: 100%;
  position: relative;
  z-index: 2;
}

.slides-wrapper {
  display: flex;
  transition: transform 1s ease-in-out;
}

.info{
  margin-left: 20px;
}

.slide {
  min-width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide img {
  max-width: 100%;
  max-height: 400px;
  object-fit: contain; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}


.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  font-size: 32px;
  line-height: 1;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
}

.slider-container:hover .nav-button {
  opacity: 1;
  visibility: visible;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;
}

.indicator {
  width: 10px;
  height: 10px;
  background-color: #bbb;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.indicator.active {
  background-color: #0076bd;
}

@media (min-width: 720px) and (max-width: 948px) {
  .slide img {
    height: 300px; 
  }

}
@media (max-width: 720px) {
  .slides-container {
    width: 100%;
    height: 100%;
  }
  .slide {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .slide img {
    width: 100%;
    height: auto;
    object-fit: contain; 
  }
  .info {
    margin-top: 10px;
    width: 100%; 
  }
}


</style>

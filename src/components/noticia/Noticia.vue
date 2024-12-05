<template>
  <div class="container">
    <div class="noticia" v-if="singleNews">
      <div class="noticia-content">
        <h1 class="noticia-title">{{ singleNews.title }}</h1>
        <div class="noticia-content" v-html="singleNews.content"></div>
        <span class="noticia-date">{{ singleNews.date }}</span>
      </div>
      <div class="noticia-video" v-if="singleNews.videoUrl">
        <SocialVideo :videoUrl="singleNews.videoUrl" />
      </div>
      <img v-else :src="singleNews.image" class="noticia-image" />
    </div>
    <div v-else class="noticia">
      <p>No se encontró la noticia</p>
    </div>
  </div>
</template>

<script>
import { news } from '@/data/noticias.js';
import SocialVideo from '@/components/noticia/Video.vue';

export default {
  components: {
    SocialVideo,
  },
  props: {
    newsId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      singleNews: null,
    };
  },
  mounted() {
    this.getSingleNews();
  },
  watch: {
    newsId() {
      this.getSingleNews();
    },
  },
  methods: {
    getSingleNews() {
      if (news && Array.isArray(news)) {
        this.singleNews = news.find((item) => item.id === this.newsId);
      } else {
        console.error('news array is not defined or is not an array');
      }
    },
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
* {
  font-family: 'Gravity', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.noticia {
  display: flex;
  max-width: 860px;
  border-radius: 5px;
  margin: 10px 0;
  padding: 15px;
  background-color: #f9f9f9;
  transition: transform 0.3s;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}

.noticia:hover {
  transform: scale(1.02);
}

.noticia-content {
  height: auto;
  flex: 1;
  margin-right: 20px;
  font-size: 1em;
  color: #555;
  margin-top: 5px;
}

.noticia-title {
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
}

.noticia-image {
  max-width: 50%;
  max-height: max-content;
  object-fit: cover;
}

.noticia-video {
  width: 50%;
  max-width: 70%;
  height: auto;
  display: flex;
  justify-content: center;
}

.noticia-date {
  font-size: 0.9em;
  color: #888;
  margin-top: 10px;
}

@media (max-width: 730px) {
  .noticia {
    flex-direction: column;
    align-items: center;
  }

  .noticia-content {
    margin-right: 0;
    margin-top: 10px;
    text-align: center;
  }

  .noticia-image {
    max-width: 100%;
    height: auto;
  }

  .noticia-video iframe {
    width: 100%;
  }
}
</style>
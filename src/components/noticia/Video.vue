<template>
  <div :class="videoClass">
    <iframe
      v-if="isFacebook"
      class="facebook-video"
      :src="getFacebookEmbedUrl(videoUrl)"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <iframe
      v-if="isInstagram"
      class="instagram-video"
      :src="getInstagramEmbedUrl(videoUrl)"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <iframe
      v-if="isTikTok"
      class="tiktok-video"
      :src="getTikTokEmbedUrl(videoUrl)"
      frameborder="0"
      allowfullscreen
    ></iframe>
    <div v-if="isX" class="x-video">
      <div v-html="xEmbedCode"></div>
    </div>
    <div v-if="!isFacebook && !isInstagram && !isTikTok && !isX">
      <p>No se puede mostrar el video. Formato no soportado.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      xEmbedCode: "",
    };
  },
  mounted() {
    this.getXEmbedUrl(this.videoUrl); // Llamamos al método getXEmbedUrl al montar el componente
  },
  computed: {
    isFacebook() {
      return /^(https?:\/\/)?(www\.)?(facebook\.com)\/.*(videos|watch)/.test(
        this.videoUrl
      );
    },
    isInstagram() {
      return /^(https?:\/\/)?(www\.)?(instagram\.com)\/(reel|p|tv)\/[^\/]+/.test(
        this.videoUrl
      );
    },
    isTikTok() {
      return /^(https?:\/\/)?(www\.)?(tiktok\.com)\/.+$/.test(this.videoUrl);
    },
    isX() {
      return /^(https?:\/\/)?(www\.)?(x\.com|twitter\.com)\/.*\/status\/\d+/.test(
        this.videoUrl
      );
    },
  },
  methods: {
    getFacebookEmbedUrl(url) {
      return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
        url
      )}`;
    },
    getInstagramEmbedUrl(url) {
      const postId = url.split("/").filter(Boolean).pop();
      return `https://www.instagram.com/p/${postId}/embed`;
    },
    getTikTokEmbedUrl(url) {
      const videoId = url.split("/").pop();
      return `https://www.tiktok.com/embed/${videoId}`;
    },
    getXEmbedUrl(url) {
      this.xEmbedCode = `
        <blockquote class="twitter-tweet" data-media-max-width="50%">
          <a href="${url}"></a>
        </blockquote>
      `;
      this.$nextTick(() => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load();
        } else {
          // Cargar el script de Twitter manualmente si no está presente
          const twitterScript = document.createElement("script");
          twitterScript.setAttribute("async", "");
          twitterScript.setAttribute(
            "src",
            "https://platform.twitter.com/widgets.js"
          );
          twitterScript.setAttribute("charset", "utf-8");
          document.head.appendChild(twitterScript);
        }
      });
    },
  },
};
</script>

<style scoped>
/* Estilos para videos de Facebook */
.facebook-video {
  width: 100%;
  max-width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
}

/* Estilos para videos de TikTok */
.tiktok-video {
  width: 400px;
  height: 580px;
  display: flex;
  justify-content: center;
}
/* Estilos para videos de Instagram */
.instagram-video {
  height: 460px;
}

.x-video {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.x-video blockquote {
  width: 100%; /* El bloque de Twitter ocupa todo el ancho */
  height: auto; /* Deja que el video crezca automáticamente */
}
</style>

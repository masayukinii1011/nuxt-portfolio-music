<template>
  <div>
    <section class="section post-detail-wrapper">
      <div class="container">
        <section class="section">
          <div class="container has-text-centered">
            <h2 class="has-text-weight-bold title">{{$nuxt.$route.name.toUpperCase()}}</h2>
          </div>
        </section>
        <div class="image-wrapper">
          <img
            :src="about[0].fields.image.fields.file.url"
            :alt="about[0].fields.image.fields.title"
          />
        </div>
        <div class="button-wrap" :class="{'about' : $route.name === 'about'}">
          <a :href="about[0].fields.links.facebook" target="_blank" class="button">Facebook</a>
          <a :href="about[0].fields.links.soundcloud" target="_blank" class="button">Soundcloud</a>
        </div>
        <div class="text-body" v-html="$md.render(about[0].fields.body)"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["about"])
  }
};
</script>

<style lang="scss" scoped>
.post-detail-wrapper {
  .image-wrapper {
    max-width: 640px;
    margin: 0 auto 16px;

    img {
      border: 1px solid #eee;
    }
  }

  .button-wrap {
    display: flex;
    justify-content: space-between;
    width: 240px;
    margin: 0 auto 16px;

    &.about {
      margin: 0 auto -16px 0;

      .button {
        width: 46%;
      }
    }

    .button {
      width: 46%;
      font-weight: 600;

      img {
        transform: scale(1.3);
      }
    }
  }

  .text-body {
    word-break: break-all;

    h3 {
      color: #363636;
      font-size: 1.5rem;
      font-weight: 600;
      line-height: 1.125;
      margin-top: 48px;
      margin-bottom: 16px;
    }

    h4 {
      color: #363636;
      font-size: 1.2rem;
      font-weight: 600;
      line-height: 1.125;
      margin-top: 16px;
      margin-bottom: 16px;
    }

    p {
      color: #363636;
      line-height: 1.25;
      font-size: 0.9rem;
      margin-bottom: 16px;
    }

    ul {
      list-style: initial;
    }

    ol,
    ul {
      margin-left: 20px;
    }

    code {
      color: #363636;
      background-color: #eee;
    }
  }
}
</style>

<template>
  <div>
    <section class="section">
      <div class="container">
        <section class="section">
          <div class="container has-text-centered">
            <h2 class="has-text-weight-bold title">{{$nuxt.$route.name.toUpperCase()}}</h2>
          </div>
        </section>
        <div v-if="releases.length" class="columns is-multiline is-variable is-4">
          <div v-for="release in releases" :key="release.fields.id" class="column is-half">
            <div class="card">
              <div>{{release.fields.publishDate}}</div>
              <div>{{release.fields.link}}</div>
              <div>{{release.fields.label}}</div>
              <div>{{release.fields.body}}</div>
              <div v-for="(track,i) in release.fields.tracks" :key="i">{{track}}</div>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img
                    v-if="release.fields.image"
                    :src="release.fields.image.fields.file.url"
                    :alt="release.fields.image.fields.title"
                  />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-size-4 has-text-centered">{{release.fields.title}}</p>
              </div>
            </div>
          </div>
        </div>
        <p class="is-size-4" v-else>There is no post.</p>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["releases"])
  }
};
</script>

<style lang="scss" scoped>
.card-content {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
}
</style>

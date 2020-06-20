<template>
  <div>
    <section class="section">
      <div class="container">
        <section class="section">
          <div class="container has-text-centered">
            <h2 class="has-text-weight-bold title">{{$nuxt.$route.name.toUpperCase()}}</h2>
          </div>
        </section>
        <div v-if="works.length" class="columns is-multiline is-variable is-4">
          <div v-for="work in works" :key="work.fields.id" class="column is-half">
            <div class="card">
              <div>{{work.fields.publishDate}}</div>
              <div>{{work.fields.link}}</div>
              <div>{{work.fields.body}}</div>
              <div class="card-image">
                <figure class="image is-2by1">
                  <img
                    v-if="work.fields.image"
                    :src="work.fields.image.fields.file.url"
                    :alt="work.fields.image.fields.title"
                  />
                </figure>
              </div>
              <div class="card-content">
                <p class="title is-size-4 has-text-centered">{{work.fields.title}}</p>
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
    ...mapState(["works"])
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

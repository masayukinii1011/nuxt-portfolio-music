import client from '~/plugins/contentful'

export const state = () => ({
  about: '',
  works: '',
  releases: '',
})

//データをstateにセット
export const mutations = {
  setAbout(state, payload) {
    state.about = payload
  },
  setWorks(state, payload) {
    state.works = payload
  },
  setReleases(state, payload) {
    state.releases = payload
  },
}

//Contentful APIを取得
export const actions = {
  async getAbout({ commit }) {
    await client.getEntries({
      content_type: process.env.CTF_ABOUT
    }).then(entries => {
      commit('setAbout', entries.items)
    }).catch(console.error)
  },
  async getWorks({ commit }) {
    await client.getEntries({
      content_type: process.env.CTF_WORKS,
      order: 'fields.id'
    }).then(entries => {
      commit('setWorks', entries.items)
    }).catch(console.error)
  },
  async getReleases({ commit }) {
    await client.getEntries({
      content_type: process.env.CTF_RELEASES,
      order: 'fields.id'
    }).then(entries => {
      commit('setReleases', entries.items)
    }).catch(console.error)
  },
}

export default async ({ store }) => {
  if (!store.state.about) await store.dispatch('getAbout')
  if (!store.state.works.length) await store.dispatch('getWorks')
  if (!store.state.releases.length) await store.dispatch('getReleases')
  if (!store.state.categories.length) await store.dispatch('getCategories')
}

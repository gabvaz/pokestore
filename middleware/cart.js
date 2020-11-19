export default function ({store}) {
    store.dispatch('req/GETCART')
    store.dispatch('req/UPDATECREDIT')
  }
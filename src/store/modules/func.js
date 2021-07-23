import { getToken} from '@/utils/jsCookie'
const func = {
  state: {
    info:getToken('lang') || 'zh_cn'
  },
  mutations: {
    infoMutation (state, newData) {
      state.info = newData
    }
  },
  actions: {
    infoAction ({ commit, state }, data) {
      commit('infoMutation', data)
    }
  }
}

export default func
import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  html: null as string | null,
  css: null as string | null,
  js: null as string | null,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  html: (state) => state.html,
  css: (state) => state.css,
  js: (state) => state.js,
}

export const mutations: MutationTree<RootState> = {
  SET_HTML: (state, html: string) => (state.html = html),
  SET_CSS: (state, css: string) => (state.css = css),
  SET_JS: (state, js: string) => (state.js = js),
}

export const actions: ActionTree<RootState, RootState> = {
  async compileSass({ commit }, sass: string) {
    const response: Response = await fetch(
      `${process.env.baseUrl}/compile/sass`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sass }),
      }
    )

    return await response.json()
  },

  async compile({ commit }, data) {
    const response: Response = await fetch(`${process.env.baseUrl}/compile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return await response.json()
  },
}

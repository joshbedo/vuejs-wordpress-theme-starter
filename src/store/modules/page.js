import api from '../../api'
import * as types from '../mutation-types'
import { isNumber } from 'util';

// initial state
const state = {
  all: [],
  loaded: false,
  page: null,
  headerMenu: null,
}

// getters
const getters = {
  allPages: state => state.all,
  allPagesLoaded: state => state.loaded,
  page: state => (id) => {
    let field = typeof id === 'number' ? 'id' : 'slug';
    let page = state.all.filter(page => page[field] === id)
    return !_.isNull(_.first(page)) ? _.first(page) : false
  },
  pageContent: state => (id) => {
    let field = typeof id === 'number' ? 'id' : 'slug';
    let page = state.all.filter(page => page[field] === id)
    return !_.isNull(_.first(page).content.rendered) ? _.first(page).content.rendered : false
  },
  somePages: state => (limit) => {
    if (state.all.length < 1) { return false }
    let all = [...state.all]
    return all.splice(0, Math.min(limit, state.all.length))
  },
  headerMenu: state => () => {
    return state.headerMenu.items;
  }
}

// actions
const actions = {
  getAllPages({ commit }) {
    api.getPages(pages => {
      commit(types.STORE_FETCHED_PAGES, { pages });
      commit(types.PAGES_LOADED, true);
      commit(types.INCREMENT_LOADING_PROGRESS);
    });
  },

  getHeaderMenu({ commit }) {
    api.getHeaderMenu(items => {
      commit(types.STORE_HEADER_MENU, { items });
    });
  }
};

// mutations
const mutations = {
  [types.STORE_FETCHED_PAGES] (state, { pages }) {
    state.all = pages
  },

  [types.PAGES_LOADED] (state, val) {
    state.loaded = val
  },

  [types.STORE_HEADER_MENU] (state, { items }) {
    state.headerMenu = items;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

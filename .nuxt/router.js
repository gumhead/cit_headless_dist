import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d18499c6 = () => interopDefault(import('../pages/authors/index.vue' /* webpackChunkName: "pages/authors/index" */))
const _09563786 = () => interopDefault(import('../pages/index1.vue' /* webpackChunkName: "pages/index1" */))
const _04b78e45 = () => interopDefault(import('../pages/topics/index.vue' /* webpackChunkName: "pages/topics/index" */))
const _d640c796 = () => interopDefault(import('../pages/authors/_author.vue' /* webpackChunkName: "pages/authors/_author" */))
const _4251d2b5 = () => interopDefault(import('../pages/pages/_page.vue' /* webpackChunkName: "pages/pages/_page" */))
const _26b95a4d = () => interopDefault(import('../pages/topics/_topic.vue' /* webpackChunkName: "pages/topics/_topic" */))
const _31da1bb8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _50a8d0d5 = () => interopDefault(import('../pages/_article.vue' /* webpackChunkName: "pages/_article" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/authors",
    component: _d18499c6,
    name: "authors"
  }, {
    path: "/index1",
    component: _09563786,
    name: "index1"
  }, {
    path: "/topics",
    component: _04b78e45,
    name: "topics"
  }, {
    path: "/authors/:author",
    component: _d640c796,
    name: "authors-author"
  }, {
    path: "/pages/:page?",
    component: _4251d2b5,
    name: "pages-page"
  }, {
    path: "/topics/:topic",
    component: _26b95a4d,
    name: "topics-topic"
  }, {
    path: "/",
    component: _31da1bb8,
    name: "index"
  }, {
    path: "/:article",
    component: _50a8d0d5,
    name: "article"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

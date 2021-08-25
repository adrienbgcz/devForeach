
// 1. Définissez les composants de route.
const Home = { template : '<div>home</div>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const User = { template: '<div>Utilisateur {{ $route.params.id }} </div>' }
const Book = { template: '<div>Livre {{ $route.params.bookId }} de l\' utilisateur {{ $route.params.userId }} </div>' }
const NotFoundComponent = { template : '<div>not found</div>'}

// 2. Définissez des routes.
const routes = [
    { path: '/', component: Home },
    { path: '/foo', component: Foo },
    { path: '/bar', component: Bar },
    { path: '/users/:id', component: User },
    { path: '/users/:userId/books/:bookId', component: Book },
    { path: '/:catchAll(.*)', component: NotFoundComponent }
]

// 3. Créez l'instance du routeur et passez l'option `routes`.
const router = new VueRouter({
    mode : 'history', // active le mode histoire
    routes // raccourci pour `routes: routes`
})

// 4. Créez et montez l'instance de Vue.
const app = new Vue({
  router
}).$mount('#app')

// L'application est maintenant en marche !
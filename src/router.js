import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Principal from './components/Principal.vue'
import Calificaciones from './components/Calificaciones.vue'
import Datos from './components/Datos.vue'
import Materias from './components/Materias.vue'

Vue.use(Router)

let router= new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/principal',
      name: 'Principal',
      component: Principal,
      children:[
        {
          path: "calificaciones",
          component: Calificaciones
        },
        {
          path:"datos",
          component:Datos
        },
        {
          path:"materias",
          component:Materias
        }
      ]
    }
  ]
})
export default router

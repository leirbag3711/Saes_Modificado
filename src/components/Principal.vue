<template>
<div>
    <md-menu md-direction="bottom-start">
      <md-button md-raised md-primary><a href=""><router-link to="/principal/datos">Mis Datos</router-link></a></md-button>
    </md-menu>

    <md-menu md-direction="bottom-end">
      <md-button md-raised md-primary><router-link to="/principal/calificaciones">Mis Calificaciones</router-link></md-button>
    </md-menu>

    <md-menu md-direction="top-start">
      <md-button md-raised md-primary><router-link to="/principal/materias">Informacion de Materias</router-link></md-button>

    </md-menu>

    <md-menu md-direction="top-end">
      <md-button md-raised md-primary @click="salir()">Salir</md-button>
    </md-menu>
        <div>
            <h1 v-show="show">Bienvenido {{nombre}}</h1>
            <router-view></router-view>
    </div>

  </div>
</template>
<script>
import {
  EventBus
} from '../event-bus.js';
import { functions } from 'firebase';
import { db } from '../main'
var boleta = [];
EventBus.$on('enviado', dato => {
localStorage.setItem("matricula",dato)
});
export default {
     data() {
    return {
      boleta: localStorage.getItem("matricula"),
      nombre:"",
      show:true
    }
  },
  methods:{
      salir:function(){
          this.$router.replace("/")
      }
  },
  mounted(){
      db.collection("Students").doc(this.boleta).get()
      .then(snap=>{
        this.nombre=snap.data().Name+' '+ snap.data().LastN
      }
      )
      
  },
  watch:{
    $route (to, from){
        this.show = false;
    }
} 
}
</script>
<style>
.md-menu{
    margin-left: 2em;
}
a{
    text-decoration: none;
    color: black
  }
  .md-button{
    color: blue
  }
</style>

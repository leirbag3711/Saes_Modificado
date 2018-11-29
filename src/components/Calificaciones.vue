<template>
<div>    
<div>
    <md-table>
      <md-table-row>
        <md-table-head>Codigo Materia</md-table-head>
        <md-table-head>Materia</md-table-head>
        <md-table-head>Calificacion</md-table-head>
        <md-table-head>Status</md-table-head>
      </md-table-row>
      <md-table-row v-for="calif in calificaciones">
        <md-table-cell><p>{{calif.Code.id}}</p></md-table-cell>
        <md-table-cell>{{calif.Name}}</md-table-cell>
        <md-table-cell>{{calif.Note}}</md-table-cell>
        <md-table-cell>{{calif.Status}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
  </div>
</template>
<script>
import { db } from '../main'

export default {
     data() {
    return {
      boleta: localStorage.getItem("matricula"),
      calificaciones:[],
    }
  },
  firestore(){
return{
    calificaciones:db.collection("Students").doc(this.boleta).collection("Materias").orderBy('Status').limit(5)
}
  },
  
  mounted(){
      console.log(this.calificaciones)

  }
}
</script>
<style>
.md-menu{
    margin: 2em;
}
.md-table-head{
    text-align: center;
}
.md-table-cell{
    border-style:inset;
    padding:0;
    text-align: left;
}
.md-table{
  width: 80%;
  margin: auto
}
</style>

<template>
    <div>
    <div class="LSG">
    <label class="LS">Primer Semestre</label>   
    </div>
   <md-field>
      <label>Buscar materia por Nombre</label>
      <md-input v-model="materia_nombre"></md-input>
    </md-field>
     
    <md-table>
      <md-table-row>
        <md-table-head>Codigo Materia</md-table-head>
        <md-table-head>Materia</md-table-head>
        <md-table-head>Profesor</md-table-head>
        <md-table-head>Area</md-table-head>
      </md-table-row>
      <md-table-row v-for="materia in materias_filtrados">
        <md-table-cell><p>{{materia.id}}</p></md-table-cell>
        <md-table-cell>{{materia.Name}}</md-table-cell>
        <md-table-cell>{{materia.Sem1.Teacher.Name}} {{materia.Sem1.Teacher.LastN}}</md-table-cell>
        <md-table-cell>{{materia.Area}}</md-table-cell>
      </md-table-row>
    </md-table>
     
  <div class="LSG">
    <label class="LS">Segundo Semestre</label>   
    </div>
   <md-field>
      <label>Buscar materia por Nombre</label>
      <md-input v-model="materia_nombren2"></md-input>
    </md-field>
     
    <md-table>
      <md-table-row>
        <md-table-head>Codigo Materia</md-table-head>
        <md-table-head>Materia</md-table-head>
        <md-table-head>Profesor</md-table-head>
        <md-table-head>Area</md-table-head>
      </md-table-row>
      <md-table-row v-for="materian2 in materias_filtradosn2">
        <md-table-cell><p>{{materian2.id}}</p></md-table-cell>
        <md-table-cell>{{materian2.Name}}</md-table-cell>
        <md-table-cell>{{materian2.Sem1.Teacher.Name}} {{materian2.Sem1.Teacher.LastN}}</md-table-cell>
        <md-table-cell>{{materian2.Area}}</md-table-cell>
      </md-table-row>
    </md-table>

    <div class="LSG">
    <label class="LS">Tercer Semestre</label>   
    </div>
   <md-field>
      <label>Buscar materia por Nombre</label>
      <md-input v-model="materia_nombren3"></md-input>
    </md-field>
     
    <md-table>
      <md-table-row>
        <md-table-head>Codigo Materia</md-table-head>
        <md-table-head>Materia</md-table-head>
        <md-table-head>Profesor</md-table-head>
        <md-table-head>Area</md-table-head>
      </md-table-row>
      <md-table-row v-for="materian3 in materias_filtradosn3">
        <md-table-cell><p>{{materian3.id}}</p></md-table-cell>
        <md-table-cell>{{materian3.Name}}</md-table-cell>
        <md-table-cell>{{materian3.Sem1.Teacher.Name}} {{materian3.Sem1.Teacher.LastN}}</md-table-cell>
        <md-table-cell>{{materian3.Area}}</md-table-cell>
      </md-table-row>
    </md-table>

    <div class="LSG">
    <label class="LS">Cuarto Semestre</label>   
    </div>
   <md-field>
      <label>Buscar materia por Nombre</label>
      <md-input v-model="materia_nombren4"></md-input>
    </md-field>
     
    <md-table>
      <md-table-row>
        <md-table-head>Codigo Materia</md-table-head>
        <md-table-head>Materia</md-table-head>
        <md-table-head>Profesor</md-table-head>
        <md-table-head>Area</md-table-head>
      </md-table-row>
      <md-table-row v-for="materian4 in materias_filtradosn4">
        <md-table-cell><p>{{materian4.id}}</p></md-table-cell>
        <md-table-cell>{{materian4.Name}}</md-table-cell>
        <md-table-cell>{{materian4.Sem1.Teacher.Name}} {{materian4.Sem1.Teacher.LastN}}</md-table-cell>
        <md-table-cell>{{materian4.Area}}</md-table-cell>
      </md-table-row>
    </md-table>
      

  </div>
</template>
<script>
import { db } from '../main'

export default {
     data() {
       
    return {
      clase:{
         background:"red"
       },
       initial:"",
      materias:[
         
      ],    
      materia_nombre:'',
      materiasn2:[],materia_nombren2:'',
      materiasn3:[],materia_nombren3:'',
      materiasn4:[],materia_nombren4:''
      }
  },
  firestore(){
      return{
      materias:db.collection("Subjects").where("Nivel","==",1),
      materiasn2:db.collection("Subjects").where("Nivel","==",2),  
      materiasn3:db.collection("Subjects").where("Nivel","==",3),
      materiasn4:db.collection("Subjects").where("Nivel","==",4)
  }
  },
  mounted(){
  },

computed: {

    materias_filtrados() {
      var upperbus = this.materia_nombre

      return this.materias.filter(subject => {
          return subject.Name.includes(upperbus)||subject.id.includes(upperbus)||subject.Sem1.Teacher.Name.includes(upperbus)
        }

      )
    },

    materias_filtradosn2() {
      var upperbusn2 = this.materia_nombren2

      return this.materiasn2.filter(subjectn2 => {
          return subjectn2.Name.includes(upperbusn2)||subjectn2.id.includes(upperbusn2)||subjectn2.Sem1.Teacher.Name.includes(upperbusn2)
        }

      )
    },

    materias_filtradosn3() {
      var upperbusn3 = this.materia_nombren3

      return this.materiasn3.filter(subjectn3 => {
          return subjectn3.Name.includes(upperbusn3)||subjectn3.id.includes(upperbusn3)||subjectn3.Sem1.Teacher.Name.includes(upperbusn3)
        }

      )
    },

    materias_filtradosn4() {
      var upperbusn4 = this.materia_nombren4

      return this.materiasn4.filter(subjectn4 => {
          return subjectn4.Name.includes(upperbusn4)||subjectn4.id.includes(upperbusn4)||subjectn4.Sem1.Teacher.Name.includes(upperbusn4)
        }

      )
    }



  }

}
</script>
<style>


 .md-card {
        width: 50%;
        margin: auto
    }

    .availableClassName {
        background-color: blue;
    }
  .LS{
    font: bold;
    font-size: 100%;
    font-style: Arial;
    color: white;
  }
  .LSG{
    background-color: #8b0000;
  }
</style>

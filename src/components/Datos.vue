<template>
    <div>
        <md-card md-with-hover>
            <md-ripple>
                <md-card-header>
                    <div class="md-title">Datos Personales</div>
                    <div class="md-subhead">UPIITA</div>
                </md-card-header>

                <md-card-content>
                    <h4>Nombre : {{nombre}}</h4>
                    <h4>Apellidos : {{apellido}}</h4>
                    <h4>Promedio : {{promedio}}</h4>
                    <h4>Status : {{status}}</h4>
                </md-card-content>
                <md-button class="md-accent" v-bind:style="color" @click="mostrarCampos">Cambiar Datos</md-button>

            </md-ripple>
        </md-card>
        <md-card md-with-hover v-show="showForm">
            <md-ripple>
                <md-card-header>
                    <div class="md-title"> Actualizar Datos Personales</div>
                    <div class="md-subhead">UPIITA</div>
                </md-card-header>

                <md-card-content>
                    <md-field>
                        <label>Nombre</label>
                        <md-input v-model="nombre"></md-input>
                    </md-field>
                      <md-field>
                        <label>Apellidos</label>
                        <md-input v-model="apellido"></md-input>
                    </md-field>
                </md-card-content>
                <md-button class="md-accent" v-bind:style="color" @click="actualizarDatos">Actualizar</md-button>

            </md-ripple>
        </md-card>
    </div>
</template>
<script>
    import {
        db
    } from '../main'
    export default {
        data() {
            return {
                boleta: localStorage.getItem("matricula"),
                nombre: "",
                apellido: "",
                status: "",
                color: {
                    background: 'blue',
                    color: 'white'
                },
                prom: 0,
                showForm: false
            }
        },
        firestore() {

            db.collection("Students").doc(this.boleta).get()
                .then(snap => {
                    this.nombre = snap.data().Name;
                    this.apellido = snap.data().LastN;
                })

        },
        methods:{
            mostrarCampos(){
                this.showForm=true
            },
            actualizarDatos(){
                db.collection("Students").doc(this.boleta).update({
                    Name:this.nombre,
                    LastN:this.apellido
                })
                this.showForm=false
            }
                
        },
        computed: {
            promedio: function () {
                db.collection("Students").doc(this.boleta).collection("Materias").get()
                    .then(query => {
                        let califs = []
                        query.forEach(shot => {
                            califs.push(shot.data().Note)
                        })
                        let sum = califs.reduce(function (a, b) {
                            return (a + b)
                        }, 0)
                        this.prom = sum / califs.length
                    })
                db.collection("Students").where("Name", "==", this.nombre)
                    .where("LastN", "==", this.apellido).get()
                    .then(snap => {
                        snap.forEach(query => {
                            this.status = query.data().Status
                        })
                    })
                return this.prom
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
</style>
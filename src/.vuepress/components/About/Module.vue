<template>
  <div>     
      <ul>
        <li v-for="(item, index) in arrayModule" :key="index"> 
          <b>{{item.nombre}}</b>: {{item.descripcion}}
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
       arrayModule:[
         {
           nombre: "Módulo I", 
           descripcion: "hace una pequeña introducción sobre Java como es su historia, características más relevantes y el por qué aprenderlo. También, brinda un breve concepto sobre el IDE a utilizar, como es su funcionamiento y cómo instalarlo; de igual forma el gestor de base de datos."
         },
         {
           nombre: "Módulo 2", 
           descripcion: "es el más importante del resto, debido a que se explican todos los conceptos necesarios para poder entender la estructura básica de un programa de java y poder comenzar a tipear código."
         },
         {
           nombre: "Módulo 3", 
           descripcion: "enseña la estructura para poder asignar los nombres a variables y métodos, clases, y constantes. Tal vez, no sea lo más importante y tampoco una estructuración obligatoria, sin embargo, es una buena práctica de programación."
         },
         {
           nombre: "Módulo 4", 
           descripcion: "indica los tipos de datos con los que trabaja Java y los literales que debemos respetar, estos explican cómo se deben asignar los valores a los tipos de datos para que no existan errores de asignación."
         },
         {
           nombre: "Módulo 5", 
           descripcion: "veremos la mínima expresión de un programa en Java y cómo está formado, a parte se mostrarán dos sencillos ejemplos para entender la estructura de un programa en Java."
         }
       ]
      }
    }
  }
</script>

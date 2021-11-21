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
         },
         {
           nombre: "Módulo 6", 
           descripcion: "veremos los modificadores de accesos que son más que otras palabras el cómo acceder a un atributo o variable de una clase y con esto el encapsulamiento."
         },
         {
           nombre: "Módulo 7", 
           descripcion: "veremos los operadores aritméticos y lógicos que son los símbolos de las operaciones matemáticas básicas para poder realizar operaciones."
         },
         {
           nombre: "Módulo 8", 
           descripcion: "veremos los operadores a nivel de bits, parecido al módulo 7, con la diferencia que se opera a nivel de bits."
         },
         {
           nombre: "Módulo 9", 
           descripcion: "comentar el código es fundamental para poder darle mantenimiento a un futuro y en este módulo veremos como comentar."
         },
         {
           nombre: "Módulo 10", 
           descripcion: "todo programa es basado con datos tanto de bajo nivel como de alto nivel, es por esto que en este módulo veremos conversiones ascendentes y descendentes."
         },
         {
           nombre: "Módulo 11", 
           descripcion: "de que sirve tener un programa si no podemos interactuar con el usuario, en este módulo veremos como solicitar datos y guardarlos en variables."
         },
         {
           nombre: "Módulo 12", 
           descripcion: "comprobación de avance, es decir, ejercicios que pondrán a prueba lo aprendido."
         },
         {
           nombre: "Módulo 13", 
           descripcion: "todo programa está condicionado a dos estado: verdad o falso; en dos clases de bucle: finito e infinito; y romper bucles; esto se lo realiza con las estructuras de control, repetición y salto"
         },
         {
           nombre: "Módulo 14", 
           descripcion: "en este módulo veremos como acumular y contar."
         },
         {
           nombre: "Módulo 15", 
           descripcion: "comprobación de avance, es decir, ejercicios que pondrán a prueba lo aprendido."
         }
       ]
      }
    }
  }
</script>

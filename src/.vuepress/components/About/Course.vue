<template>
  <div>
      <h3>What we'll learn:</h3>      
      <ul>
        <li v-for="(item, index) in arrayCourses" :key="index">                   
          <a v-bind:href="item.url" target="_blank"><b>{{item.nombre}}:</b></a> {{item.descripcion}}
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
       arrayCourses:[
         {
          nombre: "Java",
          descripcion: "Java para principiantes desde cero en NetBeans", 
          url: "https://www.youtube.com/watch?v=bNKCKVVx3So&list=PLRoF0hqfyCW-lfoIQ3PD8NbRZyBfzKBXZ"
        },
        {
          nombre: "Redes",
          descripcion: "Subnetting", 
          url: "https://www.youtube.com/watch?v=EsEVrjVxjX4&list=PLRoF0hqfyCW-Pyg01UJ3woDojSRWgKiRK"
        },
        {
          nombre: "Algoritmos",
          descripcion: "Planificación de la CPU", 
          url: "https://www.youtube.com/watch?v=hooMs4Qnn84&list=PLRoF0hqfyCW9-VzxOWKO36qW5SQBE8dnJ"
        }
       ]
      }
    }
  }
</script>
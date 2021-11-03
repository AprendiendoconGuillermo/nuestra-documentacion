<template>
  <div>
      <h3>What we'll learn:</h3>
      <ul>
        <li v-for="(item, index) in arrayCourses" :key="index"> 
          <b>{{item.nombre}}:</b> {{item.descripcion}}
        </li>
      </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
       arrayCourses:[
         {nombre: "Java", descripcion: "Java para principiantes desde cero en NetBeans"}
       ]
      }
    }
  }
</script>

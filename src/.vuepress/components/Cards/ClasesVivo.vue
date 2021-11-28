<template>
<div>
    <div style="width: 600px; display:block; margin:0 auto;">
    <carousel :per-page="1" :center-mode="true" :autoplay="true" :navigationEnabled="true">
        <li v-for="(item, index) in arrayCourses" :key="index">                   
          <a v-bind:href="item.url" target="_blank"><b>{{item.nombre}}:</b></a> {{item.descripcion}}
        </li>
      <slide v-for="(item, index) in arrayJava" :key="index">
          <a v-bind:href="item.url" target="_blank">
         <img :src="$withBase('/img/java-vivo/'+item.img)" alt="Figura 2. Eclipse">
         <div style="text-align: center;">
             <p>{{item.desc}}</p>
         </div>
         </a>
      </slide>
    </carousel>
  </div>
</div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  components: {
    Carousel,
    Slide
  },
    data () {
        return {
            arrayJava:[
                {
                    url : "https://www.youtube.com/watch?v=YPYfnrBVEQk&list=PLRoF0hqfyCW8gjD5lWCxBSD1-mkLl4uHm&index=1&t=1505s",
                    img : "Clase01.png",
                    desc : "Java.- Clase 01 - en vivo para Principiantes 🤓| Aprendiendo"

                },
                {
                    url : "https://www.youtube.com/watch?v=1o3onQRjzj4&list=PLRoF0hqfyCW8gjD5lWCxBSD1-mkLl4uHm&index=2",
                    img : "Clase02.png",
                    desc : "Java.- Clase 02 - en vivo para Principiantes 🤓| Aprendiendo"
                }
            ]
        }
    }
}
</script>
<template>
<div>
    <button class="btn btn-primary"  v-on:click="di()">Dame Click</button> 
    <ion-icon name="caret-forward-circle-outline"></ion-icon>
    <br/>
    <br/>
    <div id="curso" class="row"  v-on:click="di()">
    </div>
</div>    
</template>


<script> 
export default{    
    methods: {
        di : function tarjetas() {
        const arrayCursos=[
            {
                cabecera: "Java",
                nombre: "Java para principantes 🤓", 
                descripcion: "Aprende las bases de manera sencilla, didacta y sin estres",
                url: "https://www.youtube.com/watch?v=bNKCKVVx3So&list=PLRoF0hqfyCW-lfoIQ3PD8NbRZyBfzKBXZ",
                doc: "/nuestra-documentacion/java-principiantes"
            },
            {
                cabecera: "Redes",
                nombre: "Subnetting 🔌", 
                descripcion: "Aprende como subnetear",
                url: "https://www.youtube.com/watch?v=EsEVrjVxjX4&list=PLRoF0hqfyCW-Pyg01UJ3woDojSRWgKiRK"
            },
            {
                cabecera: "SOD",
                nombre: "Planificación de la CPU 💻", 
                descripcion: "Aprende cuales son los algoritmos que hacen de los procesos rápidos o lentos en tu cpu",
                url: "https://www.youtube.com/watch?v=hooMs4Qnn84&list=PLRoF0hqfyCW9-VzxOWKO36qW5SQBE8dnJ"
            },
        ]   
        
        const cu = document.getElementById("curso");   
        cu.innerHTML = "";
        const fragment = document.createDocumentFragment();
        arrayCursos.map(item =>{
            const contenedor = document.createElement("div");
            contenedor.className = "col-sm-6";

            const card = document.createElement("div");
            card.className = "card text-center";
            
            const header = document.createElement("header");
            header.className = "card-header";
            header.textContent = item.cabecera;

            const body = document.createElement("div");
            body.className = "card-body";

            const h5 = document.createElement("h5");
            h5.className = "card-title";
            h5.textContent = item.nombre;
            
            const p = document.createElement("p");
            p.className = "card-text";
            p.textContent = item.descripcion;

            const a = document.createElement("a");
            a.className = "btn btn-primary";
            a.setAttribute("href", item.url);
            a.setAttribute("target", "_blank");
            a.textContent = "Ver Curso 📺";

            const footer = document.createElement("div");
            footer.className = "card-footer";

            const a2 = document.createElement("a");
            a2.className = "btn btn-success";
            a2.setAttribute("href", item.doc??item.url);
            a2.setAttribute("target", "_blank");
            a2.textContent = "Ver documentacion 📗";
                    
            const br = document.createElement("br");
            
            footer.appendChild(a2);
            body.appendChild(h5);
            body.appendChild(p);
            body.appendChild(a);            
            card.appendChild(header);
            card.appendChild(body);            
            card.appendChild(footer);            
            contenedor.appendChild(card);
            contenedor.appendChild(br);

            fragment.appendChild(contenedor);
        });

        cu.appendChild(fragment);
        }
    }   
}
</script>
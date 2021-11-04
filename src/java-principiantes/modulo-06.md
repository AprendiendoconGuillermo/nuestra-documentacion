# 6. Módulo VI. Modificadores de Acceso

<div style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/WZ79gKx-afA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

Ayudan a restringir el acceso a los datos que conforman un objeto, es decir, que permiten dar un nivel de seguridad para que otros objetos no puedan acceder a los datos otro objeto, en otras palabras, los modificadores de acceso abrazan el concepto de encapsulamiento.  

Los modificadores de acceso se dividen en:

## 6.1. Public

Los atributos, métodos y clases declarados con este modificador de acceso, están al alcance de todo el programa sin restricción alguna

## 6.2. Protected

Los atributos, métodos y clases declarados con este modificador de acceso pueden ser accedidos por la misma clase, mismo paquete y clases que heredadas.

## 6.3.Default

Se produce cuando los atributos, métodos y clases son declarados si ningún modificador de acceso, su comportamiento es igual al public, sin embargo, sólo pueden ser accedido dentro del mismo paquete.

## 6.4. Private

Es todo lo contrario al modificador public, sus atributos, métodos y clases sólo pueden ser accedido por la misma clase. 

## 6.5. Static

>Román (n,d) indica lo siguiente:  
> * Sólo existe una vez por clase y es independiente del número de instancias de la clase que se hayan creado.
> * El método o el atributo se comportan siempre de la misma manera.
> * Se puede acceder a los miembros estáticos utilizando el nombre de clase.
> * Un método estático no puede acceder a miembros no estáticos directamente debido que se debe crear primero un objeto

## 6.6. Práctica

La siguiente práctica utiliza los modificadores de acceso explicados en este módulo.  

<div style="text-align: center;">
<img :src="$withBase('/img/ejemplo-3.png')" alt="Figura 19. Ejemplo Modificadores de acceso">
<p>Figura 19. Ejemplo Modificadores de acceso</p>
</div>

## 6.7. Comprobación de avance

La comprobación se llevará a cabo en una plantilla online donde deberá responder todas las preguntas y después de enviar se mostrará su puntuación. Solo hay una oportunidad.

[Comprueba lo aprendido 🤓](https://forms.gle/92Dt359kzVqha56n6)
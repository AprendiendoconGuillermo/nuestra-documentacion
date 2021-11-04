# 5. Módulo V. Estructura básica de un programa en Java

>Sánchez Allende, J. (2009) indica que “Un programa describe cómo el ordenador debe entender las órdenes que se le quieren dar para que éste las ejecute y hagas las cosas tal y como están escritas” (p. 9).  

>Blasco, F. (2019) plantea la siguiente pregunta “¿cuál es la mínima expresión de código en este nuevo lenguaje que me permita lanzar mi primera ejecución?” (p. 15).

<div style="text-align: center;">
<img :src="$withBase('/img/main.png')" alt="Figura 16. Estructura básica de un programa en Java">
<p>Figura 16. Estructura básica de un programa en Java</p>
</div>

Se puede observar que de la línea 1 hasta la 5, el IDE nos pone un texto indicando cómo cambiar la licencia y el modelo del archivo, para este curso dejaremos todo tal cual nos da el IDE.  

En la línea 6 vemos el paquete del proyecto, este se crea automáticamente al crear un programa, por lo general tiene el mismo nombre del proyecto y se recomienda no modificar para evitar problemas de referencia.  

En la línea 11, vemos la creación de la clase con nombre *HolaMundo*, si son observadores verán que es un nombre compuesto y cada una comienza en mayúscula tal como se indicó en el [Módulo III. Identificadores](/java-principiantes/modulo-03). Luego del nombre verán una llave de apertura y la de cierre en la línea 18. Todo el código comprendido dentro de las llaves define el bloque de la clase.  

En la línea 15 vemos la definición del método main con su modificador de acceso *`public`* que indica que podrá ser accedido fuera de su clase, la palabra reservada *`static`* que permite que el método sea llamado por el intérprete de Java antes de que se cree un objeto de la clase, la palabra clave *`void`* que indica al compilador que el método no devolverá ningún valor, y unos paréntesis, dentro de ellos va parámetro *`String args[]`* que indica una matriz de objetos del tipo String y args recibe cualquier argumento que sea enviado mediante línea de código al momento de ejecutar el programa. Luego de los paréntesis se escriben unas llaves de igual forma que la clase, una de apertura y otra de cierre. Y dentro de este método será todo lo que el programa realizará.  

Entre la *clase* y el método *main*, se declararán todos los argumentos que pueda tener nuestro programa y serán argumentos de la clase, sin embargo, dentro del método main también se puede declarar argumentos pero estos serán únicamente del método main. Por otro lado, el método main puede usar los argumentos de la clase.

## 5.1. Ejemplo 1. Mostrar mensaje

El siguiente ejemplo muestra un mensaje sin argumento.

<div style="text-align: center;">
<img :src="$withBase('/img/ejemplo-1.png')" alt="Figura 17. Ejemplo de mostrando un mensaje">
<p>Figura 17. Ejemplo de mostrando un mensaje</p>
</div>

## 5.2. Ejemplo 2. Mostrar mensaje con un argumento de la clase

El siguiente ejemplo muestra un mensaje con argumento.

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-2.png')" alt=" Figura 18. Ejemplo de mostrando un mensaje con un argumento de la clase">
<p> Figura 18. Ejemplo de mostrando un mensaje con un argumento de la clase</p>
</div>

## 5.3. Comprobación de avance

La comprobación se llevará a cabo en una plantilla online donde deberá responder todas las preguntas y después de enviar se mostrará su puntuación. Solo hay una oportunidad.  
[Comprueba lo aprendido 🤓](https://forms.gle/vRRd6AyyHM7bV5U76)
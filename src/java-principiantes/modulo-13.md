# 13. Módulo XIII. Estructuras de Control

Controlan el flujo de ejecución de un programa ejecutándose ya sea de manera secuencial, es decir, una línea tras otra; repitiendo bloques de código o saltándose bloques de código dependiendo si cumple o no la condición. Y estas estructuras de control se pueden clasificar en:

| - |  -
| -- | :--
| **Condicionales** | entran a un bloque de código si se cumple la condición 
| **Repetitivas**   | permiten repetir un bloque de código muchas veces
| **Salto**         | salta bloques de código
| **Excepciones**   | gestionan errores o situaciones que pueden ocurrir al ejecutarse

Estas estructuras pueden anidarse siempre que sea el caso y no hay limitación en cuanto al número de estructuras que se pueden apilar. Y todas las condiciones van entre paréntesis.

## 13.1. Estructuras Condicionales

> Prieto Saez, N. y Casanova Faus, A. (2016) indica que: “Las instrucciones condicionales permiten construir programas que tomen decisiones acerca de los cálculos a efectuar en función de las características del problema” (p. 160).

### 13.1.1. Estructuras de Selección

#### 13.1.1.1. Estructura if

La estructura `if` valida y ejecuta una única sentencia según se cumpla o no la condición.

La estructura if es la siguiente:

```java
if(/*Condición*/){
   //bloque de instrucciones 
}
```
La condición es una expresión que evalúa un valor de tipo boolean, a continuación un ejemplo:

```java
if(5>2){
    int suma;
    suma = 5 + 2;
}
```

La condición `(5>2)` tiene un valor booleano ***true*** por lo cual entra al bloque de instrucciones y realiza la suma caso contrario continua con la ejecución.

En la Figura 41. Observamos el diagrama de flujo en la que ejecuta un único bloque de instrucciones si la condición se cumple, caso contrario continúa con la ejecución del programa.

<div  style="text-align:center;">
<img :src="$withBase('/img/diagrama-1.png')" alt="Figura 41. Estructura de Selección if"/>
<p>Figura 41. Estructura de Selección if</p>
</div>

#### 13.1.1.2. Estructura if-else

La estructura `if-else` valida y ejecuta una dos sentencia ya sea que se cumpla o no la condición.

La estructura if-else es la siguiente:

```java
if(/*Condición*/){
   //bloque de instrucciones 
}else{
   //bloque de instrucciones 
}
```

La condición es una expresión que evalúa un valor de tipo boolean, a continuación un ejemplo:

```java
if(5<2){
  int suma;
  suma = 5 + 2;
}else{
  int resta;
  resta= 5 - 2;
}
```

La condición `(5>2)` tiene un valor booleano ***false*** por lo cual entra al bloque de instrucción donde la operación a realizar es una ***resta***, si condición hubiera sido ***true*** la operación a realizar sería la suma.

En la Figura 42. Observamos el diagrama de flujo en la que ejecuta dos bloques de instrucciones, un bloque si la condición se cumple, y otro bloque si la condición no se cumple.

<div  style="text-align:center;">
<img :src="$withBase('/img/diagrama-2.png')" alt="Figura 42. Estructura de Selección if-else"/>
<p>Figura 42. Estructura de Selección if-else</p>
</div>

#### 13.1.1.3. Operador Condicional o Ternario

Este operador resume la estructura if-else. Este operador requiere de tres operandos:
* El primero corresponde a la condición,
* El segundo corresponde al valor que tomará si la condición se cumple, y
* El tercero corresponde al valor que tomará si la condición no se cumple.

La estructura de este operador es la siguiente:

```
resultado = condición ? valor1 : valor2
```

El operador `?` evalúa la condición y si esta se cumple se asigna el `valor1` caso contrario se asigna el `valor2`, a continuación un ejemplo:

```java
int resultado = 5 > 2 ? 5+2 : 5-2;
```


#### 13.1.1.4. Estructura if-else anidadas

Las estructuras anidadas se utilizan cuando se deben evaluar bloques de instrucciones dentro de bloques de instrucciones independientemente si se cumple o no la condición y puede se puede utilizar cualquier estructura vista. 
> Prieto Saez, N. y Casanova Faus, A. (2016) indica que estas estructuras “se las considera como una sola estructura con varias posibilidades de ejecución” (p.164)

La estructura `if-else anidadas`  es la siguiente:

```java
if(/*Condición*/){
  //bloque de instrucciones 
  if(/*Condición*/){
     //bloque de instrucciones 
  }
}else{
  //bloque de instrucciones 
  resultado = condición ? valor1 : valor2
}
```

A continuación un ejemplo:

```java
int a=10, b=2;
if(a<b){
  int suma = a+b;
  if(suma>=7){
    System.out.println("La suma es mayor a 7");
  }else{
    System.out.println("La suma es menor a 7");
  }
}else{
  int resta = a-b;
  String cadena = resta <= 3 ? "La resta es menor  a 3" : "La resta es mayor a 3";
  System.out.println(cadena);
}
```

Si se cumpliera la primera condición se realizaría una suma y luego se valida si la suma es mayor o igual a 7 para mostrar un mensaje, caso contrario muestra otro mensaje.

Si no se cumpliera la condición se realizaría una resta y luego se valida si la res es menor o igual a 3 para asignar una cadena respectiva y luego mostrar un mensaje.

En la Figura 43. Observamos el diagrama de flujo en la que ejecuta dos bloques de instrucciones, un bloque si la condición se cumple, y otro bloque si la condición no se cumple. Podemos observar que en lugar de instrucciones, no es obligatorio que exista condiciones cuando se cumple o no la condición, sólo cuando el problema lo amerita.

<div  style="text-align:center;">
<img :src="$withBase('/img/diagrama-3.png')" alt="Figura 43. Estructura de Selección if-else anidadas"/>
<p>Figura 43. Estructura de Selección if-else anidadas</p>
</div>

### 13.1.2. Estructura switch

Es muy utilizada en la elaboración de menús debido a que permite seleccionar un caso entre múltiples casos. Se parece un poco a la estructura anidada if-else, sin embargo, es más eficiente y ahorra línea de código.

La estructura `switch` es la siguiente:

```java
switch(/*valor de expresión*/){
    case 1:
    //bloque de instrucciones
    break;
    case 2:
    //bloque de instrucciones
    break;
    .
    .
    .
    default:
    //bloque de instrucciones              
    break;
}   
```

El valor de expresión tiene que ser evaluado como un entero o un carácter.

A continuación un ejemplo:

```java
String s = "Lunes";
switch (s) {
  case "Lunes":
System.out.println("Es Lunes");
      break;
  case "Martes":
      System.out.println("Es Martes");
      break;
  default:
System.out.println("No es un día de la semana");
      break;
}
```

La expresión del `switch` se comprueba con el valor de cada `case` y si coincide con alguno este se ejecuta a partir de los `:` y termina con el `break`, de no coincidir la expresión con ningún `case` se ejecuta la parte `default`.

:::danger
**Advertencia:** en una estructura `switch` es obligatorio que los valores de los distintos `case` sean todos distintos.
:::

En la Figura 44. Observamos el diagrama de flujo en la cual dependiendo del valor de expresión será el caso a ejecutar su bloque de instrucciones.

<div  style="text-align:center;">
<img :src="$withBase('/img/diagrama-4.png')" alt="Figura 44. Estructura Switch"/>
<p>Figura 44. Estructura Switch</p>
</div>

## 13.2. Estructuras Repetitivas

Estas estructuras también son llamadas como bucles, ciclos, iteraciones, y permiten repetir un número determinado de veces un bloque de código y tenemos la siguientes estructuras repetitivas:

|  -    | -
| -- | :-
| **while**        | se ejecuta siempre que la condición se cumpla
| **do - while**   | se ejecuta más que sea una vez y luego evalúa la condición
| **for**          | se ejecuta un número determinado de veces

### 13.2.1. Estructura while

Esta estructura ejecuta un bloque de instrucciones siempre que la condición `aritmética-lógica` cumpla el valor booleano establecido `(true o false)`, caso contrario no entra al `bucle` y sigue con el flujo normal del programa.

Luego de ejecutar el bloque de instrucciones se vuelve a evaluar la condición y si esta se sigue cumpliendo volverá a iterar y seguirá así hasta que la condición cambie su estado de verdad, como lo indica la Figura 45.

La estructura while es la siguiente:

```java
while (/*condición*/) {
  //bloque de instrucciones
}
A continuación un ejemplo:
int x = 0;
while (x < 5) {
  System.out.println("Iteración: "+x);
  x++;
}
System.out.println("Flujo normal");
```

La ejecución del ejemplo lo indica la Tabla 4.:

| Variables | Condición | Valor de verdad | Instrucciones        |   Salida         |
| :-------: | :-------: |  :-------:      |   :-------:          |   :----:         |
|   x=0     |    x<5    |      -          |      -               |       -          |
|   0       |    0<5    |     true        | S:Iteración 0; x=0+1 |       -          |  
|   1       |    1<5    |     true        | S:Iteración 1; x=1+1 |       -          |
|   2       |    2<5    |     true        | S:Iteración 2; x=2+1 |       -          | 
|   3       |    3<5    |     true        | S:Iteración 3; x=3+1 |       -          |
|   4       |    4<5    |     true        | S:Iteración 4; x=4+1 |       -          |
|   5       |    5<5    |     false       |        -             | S: Flujo normal; |
Tabla 4. Ejecución Ejemplo Estructura Repetitiva while

<div  style="text-align:center;">
<img :src="$withBase('/img/diagrama-5.png')" alt="Figura 45. Estructura Repetitiva while"/>
<p>Figura 45. Estructura Repetitiva while</p>
</div>

### 13.2.2. Estructura do-while

Esta estructura ejecuta primero el bloque de instrucciones y luego evalúa la condición y si se cumple vuelve a iterar, es por esto que se dice que esta estructura itera como mínimo una vez y en la Figura 46 lo podemos ver.

Esta estructura es muy utilizada en la elaboración de un menú debido a que se necesita que este se repita hasta que el usuario elija la opción salir.

La estructura `do-while` es la siguiente:

```java
do {
  //bloque de instrucciones
} while (/*condición*/);
```

A continuación un ejemplo:

```java
int x = 0;
do {
  System.out.println("Iteración: "+ x);
  x++;
} while (x < 5);
System.out.println("Flujo normal");
```

La ejecución del ejemplo lo indica la Tabla 5.:

| Variables |     Instrucciones    |  Variable  | Condición | Valor de verdad |     Salida       |
| :-------: |      :-------:       |  :-------: | :-------: |     :---:       |       -          |
|   x=0     |          -           |     -      |    x<5    |      -          |       -          |
|           | S:Iteración 0; x=0+1 |      1     |    1<5    |     true        |       -          |
|           | S:Iteración 1; x=1+1 |      2     |    2<5    |     true        |       -          |
|           | S:Iteración 2; x=2+1 |      3     |    3<5    |     true        |       -          |
|           | S:Iteración 3; x=3+1 |      4     |    4<5    |     true        |       -          |
|           | S:Iteración 4; x=4+1 |      5     |    5<5    |     false       |  S: Flujo normal |
Tabla 5. Ejecución Ejemplo Estructura Repetitiva do-while

<div  style="text-align:center;">
<img :src="$withBase('/img/diagrama-6.png')" alt="Figura 46. Estructura Repetitiva do-while"/>
<p>Figura 46. Estructura Repetitiva do-while</p>
</div>

### 13.2.3. Estructura for

Esta estructura tiene un parecido con la estructura `while` debido que se ejecuta siempre que la condición se cumpla, sin embargo, la diferencia está en la cantidad de interacciones. La estructura `while` itera infinitamente hasta que la condición cambie su estado verdad, no obstante, la estructura `for` itera un número determinado, es decir, sus ciclos son finitos. Se puede entender mejor viendo la Figura. 47.

La estructura `for` consta de 3 partes:

* **Inicialización**, indica el inicio del bucle y se ejecuta en la primera iteración.
* **Condición**, se ejecuta antes de entrar al bucle y luego se verifica hasta terminar los ciclos establecidos.
* **Incrementador**, se da después de cada ciclo y se actualiza antes de la siguiente verificación de la condición para determinar si vuelve a iterar. 

La estructura `for` es la siguiente:

```java
for(/*inicialización*/;/*condición*/;/*incrementa*/){
  //bloque de instrucciones
}
```
A continuación un ejemplo:

```java
for (int i = 0; i < 5; i++) {
  System.out.println("Iteración: " + i);
}
System.out.println("Flujo normal");
```

La ejecución del ejemplo lo indica la Tabla 6.

| Variables | Condición | Valor de Verdad | Instrucciones | Incrementador |     Salida     |
|    :--:   |   :--:    |      :--:       |     :--:      |     :--:      |      :--:      |
|   i = 0   |    i<5    |       -         |      -        |       -       |        -       |
|     0     |    0<5    |      true       | S:Iteración 0 |     i=0+1     |        -       |
|     1     |    1<5    |      true       | S:Iteración 1 |     i=1+1     |        -       |
|     2     |    2<5    |      true       | S:Iteración 2 |     i=2+1     |        -       |
|     3     |    3<5    |      true       | S:Iteración 3 |     i=3+1     |        -       |
|     4     |    4<5    |      true       | S:Iteración 4 |     i=4+1     |        -       |
|     5     |    5<5    |      false      |        -      |       -       | S:Flujo normal |
Tabla 6. Ejecución Ejemplo Estructura Repetitiva for

<div  style="text-align:center;">
<img :src="$withBase('/img/diagrama-7.png')" alt="Figura 47. Estructura Repetitiva for"/>
<p>Figura 47. Estructura Repetitiva for</p>
</div>

## 13.3. Estructuras de salto

<div  style="text-align:center;">
<h1>Trabajando 👷‍♂️...</h1>
<img :src="$withBase('/img/working.gif')" width="500" height="500"/>
</div>
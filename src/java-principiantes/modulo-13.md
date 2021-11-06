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


<div  style="text-align:center;">
<h1>Trabajando 👷‍♂️...</h1>
<img :src="$withBase('/img/working.gif')" width="500" height="500"/>
</div>
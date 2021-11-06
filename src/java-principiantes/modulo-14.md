# 14. Módulo XIV. Contador y Acumulador

Estos conceptos son sencillos pero muy utilizados en cualquier programa que se desarrolle, debido a que son utilizados por ejemplo verificar que la cantidad de filas extraídas de una base de datos para ponerlas en tabla, o ir sumando un valor así mismo para luego determinar un total, etc.

El contador como su nombre lo indica sirve para contar, no hay mucho que decir como concepto ni de práctica ya que sólo cuenta y su estructura es la siguiente y tiene similitud con lo visto en [Módulo VII. Operadores Aritméticos y Lógicos](/java-principiantes/modulo-07) en la parte de incremento y decremento.

```java
// cuenta cuantas veces se iteró el bucle
int contador=0;
for (int i = 0; i < 10; i++) {
    contador++;
}
System.out.println("El número de vueltas es: " + contador);
```

El acumulador como su nombre lo indica sirve para acumular un valor así mismo y este puede ser una suma, resta, multiplicación, división, etc. Hay dos formas de escribirlo, la primera es la extensa que consiste en escribir de nuevo su nombre y la segunda en la se abrevia con lo siguiente `+=`.

```java
// Primera forma
// realiza la suma de los 10 primeros números
int acumulador=0;
for (int i = 1; i <= 10; i++) {
    acumulador+= i;
}
System.out.println("La suma de los 10 primeros número es: " + acumulador);
```

```java
// Segunda forma
// realiza la suma de los 10 primeros números
int acumulador=0;
for (int i = 1; i <= 10; i++) {
    acumulador = acumulador + i;
}
System.out.println("La suma de los 10 primeros número es: " + acumulador);
```
# 10. Módulo X. Conversiones Ascendentes y Descendentes

<div style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ZVpyjrve5Cw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

> Sánchez Allende, J. (2009) indica que: “Las conversiones nos sirven para realizar algunas conversiones de tipos de forma que el resultado sea el esperado” (p. 23). Algunas conversiones se realizan de manera implícita, es decir, automáticamente; y otras de manera explícita, es decir, se debe especificar el valor a convertir.

## 10.1. Conversión Ascendente

Se llevan a cabo para convertir valores de menor tamaño a valores de mayor tamaño por ejemplo un valor int convertirlo a double. Estas conversiones siempre son automáticas.

```java
int a = 52;
double b;
b = a;     //b ahora tiene el valor de a pero con un valor decimal → 52.0
```

## 10.2. Conversión Descendente

Es todo lo contrario al descente, convierte valores de gran tamaño a menor tamaño por ejemplo double convertirlo a int, para este caso se debe hacer un parser o casting.

```java
double b = 256.12385;
int a;
// esto es un casting
a = (int) b;     //a ahora tiene el valor de b pero sin el valor decimal → 52
```

:::warning
**Cuidado:** las conversiones tanto ascendentes como descendentes, suelen perderse o aumentarse valores.  
Por ejemplo un **`double a = 52.2536`** convertirlo a **`int b = 52`** ← se pierden los decimales.  
Al revés, **`int a = 52`** convertirlo a **`double b = 52.0`** ← aumenta un decimal.
:::
# 4. Módulo IV. Tipos de Datos

<div style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/CajD_yD2bds" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## 4.1. Primitivos

Representan un dato único y no se consideran objetos; y Java soporta 8 tipos de datos primitivos y son los que se indican en la Tabla 1.

<div style="text-align: center;">
<img :src="$withBase('/img/tipos-primitivos.png')" alt="  Tabla 1. Sánchez Allende, J. Tipos primitivos Java">
<p>Tabla 1. Sánchez Allende, J. Tipos primitivos Java</p>
</div>

Los tipos primitivos se pueden clasificar en:

* **Números enteros** ← permiten representar número enteros positivos y negativos con distintos rangos de valores.
* **Números reales** ← se dividen en long y float, dependiendo la cantidad de decimales que puedan abarcar.
* **Caracteres** ← representa cualquier carácter individual.
* **Booleano** ← guarda un valor lógico que puede ser verdadero (true) y falso (false).

### 4.1.1. Literales

En el punto anterior vimos los tipos primitivos, ahora toca ver cómo asignar los valores.

#### 4.1.1.1. Números enteros

```java
byte variableByte = 23;
short variableShort = 23;
int variableInt = 23;
long variableLong = 23; 
```

:::tip
**Permitido:** se pueden usar los siguientes formatos:  
* **En decimal:** 23
* **En octal:** 023 ← siempre empieza por 0, seguido de dígitos octales (del 0 a 7)
* **En hexadecimal:** 0x15 ← siempre empieza por 0x seguido de dígitos hexadecimales del 0 a 9 y de la ‘a’ a la ‘f’ o de la ‘A’ a la ‘F’.
:::

#### 4.1.1.2. Números reales

```java
float variableFloat = 23.3;
double variableDouble = 23.3;
```

:::tip
**Permitido:**  
* Si queremos especificar que es un tipo float podemos colocar al final del valor una ele minúscula o mayúscula.
    ```java
	float variableFloat = 23.3L;
	float variableFloat = 23.3l:
    ```
* Si queremos especificar que es un tipo double podemos colocar al final del valor una de minúscula o mayúscula.  
    ```java
    double variableDouble = 23.3D; 
    double variableDouble = 23.3d;
    ```
:::

:::warning
**Cuidado:** los números reales deben llevar siempre un punto decimal o, de no tenerlo se debe indicar un exponente representado por la letra en minúscula o mayúscula.  
**`1e3`** que es lo mismo que **`1 x 10^3`**  
**`3.4E-5`** que es lo mismo **`3.4 x 10^-5`**
:::

#### 4.1.1.3. Booleanos

Sólo pueden tener dos valores: **`true y false`**, y se escriben siempre en minúscula.

```java
boolean flag = true;
boolean flag2 = flag;
```

#### 4.1.1.3. Caracteres y Cadenas

```java
char variableChar = ‘a’;
String variableString = “Aprendiendo con Guillermo”;
```

:::tip
**Permitido:** los caracteres pueden ser expresados por su table Unicode, en octal o en hexadecimal.  
**`‘\u00A3’`** ← en hexadecimal  
**`‘\102’`** ← en octal

:::

:::warning
**Cuidado:** los caracteres van siempre en comillas simples **`‘’`** ,mientras que las cadenas van siempre con comillas doble **`“”`**.
:::

Debemos tener cuidado al momento de asignar un carácter ya que existen caracteres especiales y se los puede ver en la Tabla 2.

<div style="text-align:center;">
<img :src="$withBase('/img/caracteres-especiales.png')" alt="Tabla 2. Sánchez Allende, J. Caracteres especiales en Java">
<p>Tabla 2. Sánchez Allende, J. Caracteres especiales en Java</p>
</div>


## 4.2. Compuestos y agregados  
  
<div style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/1iNHcBiZgmg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

### 4.2.1. Compuestos

Son los que se pueden dividir en subcampos que tengan significado. Zohonero Martínez, I., & Joyanes Aguilar, L. (2008.) nos da un ejemplo: Teléfono celular 51199110101; está compuesto por el código del país (51, Perú), el código del área (1, Lima) y el número celular. 

### 4.2.2. Agregados

Son tipos de datos cuyos valores constan de colecciones de elementos de datos, es decir, se componen de datos previamente definidos y existen tres tipos básicos: *arrays (arreglos), secuencias y registros.*

#### 4.2.2.1. Arrays

Son una colección de datos de tamaño o longitud fija y todos sus elementos deben ser del mismo tipo.  
`array de enteros: [4 , 6 , 8]`

#### 4.2.2.2. Secuencias

Son arrays cuyo tamaño puede variar en tiempo de ejecución.  
`Cadena = “Aprendiendo Java con Guillermo”`

#### 4.2.2.3. Registros

Puede contener elementos de datos agregados y primitivos; se puede considerar como un tipo o colección de datos tamaño fijo. Para acceder a sus campos se hace mediante identificadores.  
`Registro { Dato1, Dato2, Dato3, ...}`

## 4.3. Comprobación de avance

La comprobación se llevará a cabo en una plantilla online donde deberá responder todas las preguntas y después de enviar se mostrará su puntuación. Solo hay una oportunidad.

[Comprueba lo aprendido 🤓](https://forms.gle/MrRNmhWw2MLyBsWN8)
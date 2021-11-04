# 7. Módulo VII. Operadores Aritméticos y Lógicos

<div style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/7Z4HUMEwugo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

Son símbolos matemáticos utilizados para llevar a cabo operaciones entre valores, y   

> Sánchez Allende, J. (2009) indica las operaciones que se pueden llevar a cabo:

## 7.1. Números enteros y reales

Los números enteros y reales pueden llevar a cabo las mismas operaciones, sin embargo, los resultados son diferentes, para los números enteros son enteros y para los reales son reales.

### 7.1.1. Unarias

Poner delante de un número un signo + o -.

<div  style="text-align:center;">
<img :src="$withBase('/img/ejemplo-4.png')" alt="Figura 20. Ejemplo Operadores Unarias">
<p>Figura 20. Ejemplo Operadores Unarias</p>
</div>

## 7.1.2. Multiplicativas

Tenemos los operadores: **por (*), división (/), residuo o resto (%)**

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-5.png')" alt="Figura 21. Ejemplo Multiplicativas Por">
<p>Figura 21. Ejemplo Multiplicativas Por</p>
</div>

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-6.png')" alt="Figura 22. Ejemplo Multiplicativas División">
<p>Figura 22. Ejemplo Multiplicativas División</p>
</div>

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-7.png')" alt="Figura 23. Ejemplo Multiplicativas Resto o Residuo">
<p>Figura 23. Ejemplo Multiplicativas Resto o Residuo</p>
</div>

## 7.1.3. Aditivas

Es la suma y resta de operandos.

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-8.png')" alt="Figura 24. Ejemplo Aditivas Suma">
<p>Figura 24. Ejemplo Aditivas Suma</p>
</div>

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-9.png')" alt="Figura 25. Ejemplo Aditivas Resta">
<p>Figura 25. Ejemplo Aditivas Resta</p>
</div>

## 7.1.4. Incremento y decremento

Incrementa ++ o decrementa -- el valor de una variable en una unidad y se lo puede colocar antes o después del operando.

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-10.png')" alt="Figura 26. Ejemplo Incremento ++">
<p>Figura 26. Ejemplo Incremento ++</p>
</div>

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-11.png')" alt="Figura 27. Ejemplo Incremento --">
<p>Figura 27. Ejemplo Incremento --</p>
</div>

## 7.1.5. Relación

Estos operadores son utilizados para comparar operandos y son:
* Mayor que → **>**
* Menor que → **<**
* Mayor igual que → **>=**
* Menor igual que → **<=**

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-12.png')" alt="Figura 28. Ejemplo Relación <, >, >=, <=">
<p>Figura 28. Ejemplo Relación <, >, >=, <=</p>
</div>

## 7.1.6. Operadores de igualdad

Similar al de relación con la diferencia que determina si los operandos son iguales `**==**` o no `**!=**`.

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-13.png')" alt="Figura 29. Ejemplo Relación ==, !=">
<p>Figura 29. Ejemplo Relación ==, !=</p>
</div>

## 7.2. Booleanos

### 7.2.1. Negación

Cambia el valor de verdad del operando `**!.**`

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-14.png')" alt="Figura 30. Ejemplo Negación !">
<p>Figura 30. Ejemplo Negación !</p>
</div>

### 7.2.2. Lógico

#### 7.2.2.1. Y ( && ) ← AND

Valor lógico que compara que ambos sean *`true`* devolver *`true`*, en caso contrario devuelve *`false`*.

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-15.png')" alt="Figura 31. Ejemplo Lógico &&">
<p>Figura 31. Ejemplo Lógico &&</p>
</div>

#### 7.2.2.2. O ( | | ) ← OR

Valor lógico que compara que ambos sean false para devolver false, en caso contrario devuelve true.

<div style="text-align:center;">
<img :src="$withBase('/img/ejemplo-16.png')" alt="Figura 32. Ejemplo Lógico | |">
<p>Figura 32. Ejemplo Lógico | |</p>
</div>

## 7.3. Orden de prioridad de los operadores

1. Unarios
2. Multiplicativos, de izquierda a derecha
3. Aditivos, de izquierda a derecha
4. Relación
5. Asignación

Para los operadores booleanos la prioridad es la siguiente:

1. Negación
2. Y ( && ) ← AND
3. O ( | | ) ← OR
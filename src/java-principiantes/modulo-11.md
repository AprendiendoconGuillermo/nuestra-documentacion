# 11. Módulo XI. Solicitar Datos al Usuario

<div style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/xWp55tLwoo0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

La base de todo programa en cualquier lenguaje de programación son los datos que el usuario ingresa. Y para esto debemos invocar métodos de los tipos a usar sino habrá problemas. Revisar [Módulo III. Identificadores](/java-principiantes/modulo-03).

Estos métodos los encontramos dentro de la clase ***Scanner*** ubicada en el paquete de ***java.util.Scanner***, vale decir que esta clase permite obtener la entrada de los datos primitivos y los métodos a utilizar son:


| Tipo          | Método           
| :-----------: |:-------------:
| byte          | scanner.nextByte();
| short         | scanner.nextShort();
| int           | scanner.nextInt();
| long          | scanner.nextLong();
| float         | scanner.nextFloat();
| double        | scanner.nextDouble();
| boolean       | scanner.nextBoolean();
| char          | scanner.nextLine().charAt(índice);
| String        | scanner.nextLine();

 Tabla 3. Método para Solicitar Datos al Usuario

<div  style="text-align:center;">
<img :src="$withBase('/img/ejemplo-24.png')" alt="Figura 40. Método para Solicitar Datos al Usuario"/>
<p>Figura 40. Método para Solicitar Datos al Usuario</p>
</div>
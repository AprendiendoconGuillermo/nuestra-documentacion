# 2. Módulo II. Constructor, Métodos y Procedimientos

Como se explicó en el módulo anterior, los métodos definen el comportamiento de nuestros objetos, hoy veremos los métodos que nos permitirán:
* Inicializar objetos
* Acceder a los atributos de una clase
* Métodos con retorno
* Métodos vacíos
* Sobrecarga
* Sobreescritura

## 2.1. Constructores

Se dijo que, los constructores le dan vida a un objeto y que estos pueden o no estar codificados, veamos un ejemplo de cada uno.

`Codificado`
```java
public class Persona{
    
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
```

El ejemplo de arriba, es de un constructor que claramente está codificado y recibe por parámetros el nombre y edad que inicializaran los atributos de nuestra clase `Persona`, sin embargo, una clase puede tener varios constructores recibiendo distintos parámetros, a este concepto se le llama `Sobrecarga` y lo veremos en el siguiente punto.

Ahora veremos el otro ejemplo del constructor

`Por defecto`
```java
public class Persona{

    private String nombre;
    private int edad;        

}
```

En el ejemplo de arriba, no se aprecia un constructor debido que este es por defecto y se crea en compilación.
**¿qué constructor debo tener?**, la respuesta es simple, dependiendo tu necesidad 🤣.

## 2.2. Sobrecarga

La sobrecarga no solo se puede aplicar a un `constructor`, si no también a un método vacío o con retorno, y eso lo veremos en el siguiente punto, poooooooorque ahora veremos una pequeña práctica, mucha atención 🤪.

```java
public class Persona{

    private String nombre;
    private int edad;        

    // Constructor
    public Persona(){
       System.out.println("Constructor por defecto...");
    }

    // Sobrecarga
    public Persona(String nombre){
        this.nombre = nombre;        
    }

    public Persona(String nombre, int edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
```

Excelente, tenemos tres constructores con diferente firmas 😁, ahora creemos dos objetos

```java
public class Persona{

    private String nombre;
    private int edad;        

    // Constructor
    public Persona(){
       System.out.println("Constructor por defecto...");
    }

    // Sobrecarga
    public Persona(String nombre){
        this.nombre = nombre;        
    }

    public Persona(String nombre, int edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    public static void main(String[] args) {
        // Por defecto
         Persona defecto = new Persona();

        // Objeto con nombre
        Persona guillermo = new Persona("Guillermo");

        // Objeto con nombre y apellido
        Persona roko = new Persona("Roko", 11);
    }
}
```

:::tip Curiosidad
¿Qué se mostrará por consola si ejecutamos el programa? 🤔
:::


## 2.3. Encapsulamiento

¿Recuerdan a la mama gallina que se explicó en la clase en vivo, para que un pollito pueda salir a jugar con otros pollitos?🤔  
No recuerdan? 🤨  
Vayan y vean la [clase](https://www.youtube.com/watch?v=YPYfnrBVEQk&list=PLRoF0hqfyCW8gjD5lWCxBSD1-mkLl4uHm&index=1&t=1505s)


El encapsulamiento es muy conocido por los `Getter` y `Setter`, estos métodos tienen acceso a los atributos de una clase ya sea para solicitar su información o modificarla, veamos como se declaran tomando el mismo ejemplo del tema de arriba, así que no volveré a tipear todo.

```java

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

```

Los `get` devuelven la información solicitada, mienstras que los `set` asignan valor a los atributos.

Ahora hagamos uso des estos métodos.

```java
    public static void main(String[] args) {        
        Persona persona = new Persona();
        persona.setNombre("Guillermo");
        System.out.println(persona.getNombre());
    }
```

Se creó un objeto con el constructor por defecto y se le está asignando el nombre mediante un `set` y luego se está mostrando dicho nombre con un `get`.

Y, si te fijas bien, para poder acceder a dicho método debemos usar el `.` de la siguiente forma: `objeto.método`.

## 2.4. Métodos y Procedimientos

Si bien los encapsulamientos son métodos, estos solo son usados para ***asignar valor y recuperar valor***, sin embargo, si queremos realizar operaciones como sumar dos números, calcular la edad, guardar información en una base, debemos crear nuestro métodos que nos cumplan dicho requerimiento y ya vimos las [partes que conforman un método](/nuestra-documentacion/java-poo/modulo-01).

Sin embargo, el nombre método es erróneamente utilizado para referirnos a cualquier bloque de código que cumple un objetivo.

**Un método**, es una función que devuelve un valor sea este un `int`, `String`, etc., y estos pueden o no recibir parámetros.

Veamos el siguiente ejemplo.

`Con parámetro`
```java
    public int sumar(int num1, int num2){
        return num1 + num2;
    }
```

`Sin parámetro`
```java
    public int sumar(){
        return this.num1 + this.num2;
    }
```

**Un procedimiento**, es lo mismo que un método con la **diferencia** que este **no devuelve valor**

`Con parámetro`
```java
    public void sumar(int num1, int num2){
        int suma = num1 + num2;
        System.out.println(suma);
    }
```

`Sin parámetro`
```java
    public void sumar(){
        int suma = this.num1 + this.num2;
        System.out.println(suma);
    }
```

:::tip this
Sirve para indicar que pertenece a la región donde se está invocando.
:::

**¿Un método puede llamarse dentro de otro método o procedimiento y viceversa?** Claro que sí, y Sánchez Allende, J., no indica que existen tres mecanismos distintos para llamarlos:

1. Fuera de la clase  
Con `objeto.función`.

2. De la clase
Estos usan `static` y para acceder se usa `Clase.función`.

3. Misma clase
Basta con escribir el nombre y enviar los parámetros correspondientes de ser necesario.

## 2.5. Sobreescritura

La sobreescritar es modificar una función heredada, y lo veremos con más detalle a futuro, pero por el momento veamos un ejemplo muy usado que es `To String`.

Y, para sobreecribir debemos colocar la siguiente anotación `@Override`

```java
    @Override
    public String toString() {
        return "nombre=" + this.nombre + ", edad=" + this.edad ;
    }
```
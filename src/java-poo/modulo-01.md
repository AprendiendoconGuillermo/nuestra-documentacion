# 1. Módulo I. ¿Qué es la programación orientada a objetos?

El término `POO` no es nuevo ni actual, remonta desde los 70, década dónde tuvo sus inicios con la idea de plasmar la realidad debido que todo a nuestro al rededor es un objeto, tú que estas leyendo, eres un objeto 🤣 que puedes ser fácilmente manipulado, **¿cómo?**, por ejemplo cortandote el cabello o pintándotelo, esas dos acciones han cambiado tu persona. 

Esto quiere decir que todo programa es una colección de objetos con acciones que permiten la interacción entre ellos, **¿y estos objetos pueden desaparecer?**, pues si nos ponemos un poco cruel, cuando una persona deja el mundo de los vivos, esta desaparece y queda su legado, esto quiere decir, que un objeto puede dejar de existir cuando este cumpla su objetivo.

Una de las principales ventajas de `POO` según Prieto et al., son:

* Reusabilidad
* Ocultación
* Abstracción

En conclusión, `POO es la abstracción de la realidad`

## 1.1. ¿Qué es una Clase?

Una clase, tiene muchos significados dependiendo los autores, una de estas son:

>  Sánchez Allende, J.  
> * Una clase es una descripción de un tipo de objetos.  
> * Modelo o descripción.

Con esto se puede intuir que una clase es un molde, una masa, un plano, una base, etc., de la cuál se puede crear distintos tipos de objetos con características propias, por ejemplo, imaginemos una panadería.

En una panadería se vende toda clase de panes, redondos, planos, con cachitos, etc., peeeeero, todos esos panes salieron de una misma masa, preparada con los mismos ingredientes y estos ingredientes son `atributos`, término que se tratará más adelante. No obstante, cada pan puede tener distintas decoraciones.

:::warning
Una clase no limita la apariencia o comportamiento de un objeto
:::

En conlusión, `Una clase es la base de algo grande`.

Cómo se vería esto en la práctica.
```java
/**
 * Palabra reservada: class
 * Nombre de la clase: Panes
 * Cuerpo: {}
 */
class Panes{
    // atributos
    // encapsulamiento
    // métodos
}
```

### 1.1.1. ¿En qué consiste una clase?

Sánchez Allende, J. indica que una clase dispone de dos tipos de componentes:

1. **Guardar información**  
Los objetos que se crean apartir de una clase, necesitan de alguna forma o manera almacenar la información, por ejemplo: nombre, edad, teléfono, etc., y esto se logra gracias a unos `campos` o `atributos` que se declaran poniendo el tipo de valor del mismo seguido del nombre que se le quiere dar.

2. **Definir comportamiento**  
Los objetos que se crean, deben de alguna forma o manera interactuar entre sí, y este comportamiento se define mediante `métodos`.

:::warning
Antes de nombrear a los atributos y métodos recuerda los [identificadores](/nuestra-documentacion/java-principiantes/modulo-03)
::: 

### 1.1.2. Tipos de clases

Prieto et al., distingue tres tipos básicos y son:

* **Clase Tipo de Dato**: define los elementos que componen. 
* **Clase Programa**: inicia la ejecución del código.
* **Clase de Utilidades**: repositorio de operaciones.


### 1.1.3. ¿Cómo se grafica una clase?

Las clases se grafican mediante un rectángulo de forma vertical el cual tiene `3 secciones`:

1. Nombre
2. Atributos
3. Métodos

<div style="text-align:center;">
<img :src="$withBase('/img/poo/1.png')" alt="Figura 1">
</div>

:::tip
* Una clase puede como no puede llevar atributos y métodos.
* Una clase puede contener definiciones de otras clases denominadas internas.
:::

:::tip Criterio para definir una clase

* Cuando aparezca un nuevo concepto.
* Se requiera delegar código.
:::

## 1.2. ¿Qué son los atributos?

> Sánchez Allende, J.  
Describe cómo se almacena información en los objetos mediante unos campos o atributos.

> Prieto et al.  
Los atributos de una clase Java representan las componentes dintintivas que tiene cualquier objeto de dicha clase. 

Que nos quieren decir estos dos autores, que un atributo es una característica que distingue los objetos, por ejemplo, tú eres hombre y tienes una hermana, o viceversa, ambos tiene un atributo o caracterísitca que es `género`, sin embargo, tú tienes `género: hombre`  y tu hermana `género: mujer`.

Otro ejemplo sería el color de ojos, tú tienes ojos verdes y la chica que te gusta tiene ojos azules, el atributo sería `colorOjos: verdes` o `colorOjos: azul`

Estos atributos tienen valores, por lo tanto estos valores deben obligatoriamente tener un tipo de dato, debido que `java` es `fuertemente tipado`. A su vez, estos atributos pueden o no tener [modificadores de acceso](/nuestra-documentacion/java-principiantes/modulo-06), sin embargo, por buenas prácticas se los declara como `private`.

Cómo se vería esto en la práctica.

```java
/**
 * Palabra reservada: class
 * Nombre de la clase: Persona
 * Cuerpo: {}
 */
class Persona{
    private String nombre;
    private String colorOjos;
    int edad;
    // encapsulamiento
    // métodos
}
```

:::tip Existen dos tipos de atributos:
1. **De clase**  
Pertenecen únicamente a la clase independiente si se ha creado o no el objeto.  
Se los identifican por el modificador de acceso `static`.
2. **De instancia**  
Pertecen al objeto
:::

## 1.2. ¿Qué son los métodos?  

Esta sección la veremos más detallada y con más ejemplos en el siguiente capítulo, por lo tanto:

> Prieto et al.,  
Los métodos de una clase Java definen las operaciones que se pueden aplicar a cualqueira de sus objetos. Se delcaran, habitualmente, como `public`.

Los métodos constan de tres partes que se pueden interpretar en dos:

1. **Cabecera o perfil**  
Detalla el nombre del método, tipo de dato a devolver y parámetros a necesitar.

2. **Cuerpo**  
Detalla el código a ejecutar para obtener el resultado deseado.

Los métodos de una clase pueden ser:

* **Constructores**, le dan vida al objeto
* **Modificadores**, modifican los atributos o estados del objeto
* **Consultores**, acceden a los atributos
* **Método main**, da inicio al programa

Cómo se vería esto en la práctica.

```java
/**
 * Palabra reservada: class
 * Nombre de la clase: Persona
 * Cuerpo: {}
 */
class Persona{
    private String nombre;
    private String colorOjos;
    int edad;
    
    // encapsulamiento
    
    public void asignarNombre(String nombre){
        this.nombre = nombre;
    }

    public String obtenerNombre(){
        return this.nombre
    }
}
```

:::tip
El lenguaje de Java permite la sobrecarga de métodos
:::

## 1.3. ¿Qué es una instancia?

Una instancia es el término utilizado para la creación de objetos.

**Entonces, ¿es un término que me indica que se ha creado un objeto? 🤔**

## 1.4. ¿Qué es un Objeto?

> Prieto et al.,   
Un objeto se puede definir como una agrupación o colección de datos y operaciones que poseen determinada estructura y mediante los cuales se modelan aspectos relevantes de un problema.

Observemos el siguiente ejemplo:
```java
/**
 * Clase -> Persona
 * Variable -> persona
 * instancia -> new Persona()
 */

Persona persona = new Persona();

// Ahora esa variable se ha convertido en objeto y tiene acceso a todos las características de la clase
persona.getNombre();
persona.pintarCabello("Amarillo");
```

## 1.5. ¿Para qué sirve el operador `new`?

Java es un lenguaje basado en Objetos y esto es posible con el operador new ya que sin el operador sólo se están declarando variables.
> Prieto Saez, N. y Casanova Faus, A (2016) indica que:  
“Cuando se desea utilizar un objeto de cierto tipo es necesario crearlo explícitamente utilizando el operador new” (p. 64). 

Observemos el siguiente ejemplo:

```java
// Indica la declaración de una variable de tipo Carro
Carro carro;
// Ahora al utilizar el operador new, hace una referencia y se crea un objeto de // tipo Carro
Carro carro = new Carro();
```

Prieto Saez, N. y Casanova Faus, A (2016) indica que cuando se crea un objeto, el sistema asigna dos partes de memorias diferentes y son:

1. Una parte se asocia al objeto manteniendo toda su información y el lugar de memoria se crea durante la ejecución y se denomina montículo o heap. Su asignación es dinámica, lo que indica que al destruirse el objeto la memoria se libera.
2. Otra parte se asocia a la variable con la que se nombra al objeto


<div style="text-align:center;">
<img :src="$withBase('/img/poo/2.png')" alt="Figura 2">
<p>Asignación de Memoria al Crear un Objeto</p>
</div>

## 1.6. ¿Qué es Garbage Collector?

Cuando programamos solemos dejar variables, objetos, etc., sin referencia alguna y es ahí cuando el recolector de basura se pone a trabajar liberando toda esa memoria para que pueda ser reutilizada.
En la siguienta figura se muestra cuando un objeto está desreferenciado.


<div style="text-align:center;">
<img :src="$withBase('/img/poo/3.png')" alt="Figura 3">
<p>Objeto Desrefenciado</p>
</div>
## ✍🏻 Práctica en equipo: Uso de Etiquetas Semánticas en HTML

En esta práctica en equipo, ampliaremos la práctica anterior para incluir el uso de etiquetas de estructura semántica en HTML. El objetivo principal es mejorar la semántica y accesibilidad del documento, utilizando etiquetas como `<header>`, `<nav>`, `<section>`, `<main>` y `<footer>`. Además, se agregarán enlaces hacia las secciones de cada integrante del equipo, resaltando la importancia de la semántica y la facilidad de navegación.

### 📌 Instrucciones:
Sigue los pasos a continuación para completar la práctica:

1. Abre el archivo `index.html` que creaste en la práctica anterior en tu editor de código.
3. Dentro del elemento `<body>`, agrega una etiqueta `<header>` para el encabezado principal del documento.
4. A continuación, agrega una etiqueta `<nav>` para crear una barra de navegación. Dentro de esta etiqueta, crea enlaces `<a>` que apunten a las secciones de cada integrante del equipo. Asigna a cada enlace un id que corresponda a la sección respectiva.
5. Utiliza la etiqueta `<main>` para envolver el contenido principal del documento. Dentro de `<main>`, agrega etiquetas `<section>` para cada integrante del equipo. Cada sección debe tener un id correspondiente al enlace en la barra de navegación.
6. Finalmente, Agrega una etiqueta `<footer>` para el pie de página del documento. Dentro de `<footer>`, añade información relevante, como el nombre del equipo o cualquier otra información adicional que desees incluir.
7. Asegúrate de cerrar correctamente todas las etiquetas.
8. Utiliza el validador de HTML del W3C para verificar la validez de tu código. Abre el [validador de HTML](https://validator.w3.org/#validate_by_upload) en tu navegador.
9. Corrige cualquier error o advertencia que se muestre en los resultados de validación.

La estructura básica del archivo HTML debe ser la siguiente:
    
```html
...
    <header>
        <h1>Introducción a HTML - Práctica en equipo</h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="#integrante1">Integrante 1</a></li>
            <li><a href="#integrante2">Integrante 2</a></li>
            ...
        </ul>
    </nav>

    <main>
        <section id="integrante1">
            <h2>Integrante 1</h2>
            <p>Descripción del integrante 1.</p>
        </section>

        <section id="integrante2">
            <h2>Integrante 2</h2>
            <p>Descripción del integrante 2.</p>
        </section>

        ...
    </main>

    <footer>
        <p>© 2023 Equipo HTML</p>
    </footer>
...
```

Recuerda que el uso de etiquetas de estructura semántica como `<header>`, `<nav>`, `<section>`, `<main>` y `<footer>` mejora la semántica y accesibilidad del documento HTML. Además, los enlaces hacia las secciones de cada integrante permiten una navegación fácil y rápida dentro del documento.

¡Diviértete practicando HTML en equipo y aprovecha al máximo las etiquetas semánticas para crear una estructura clara y accesible!

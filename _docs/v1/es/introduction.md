---
title: Introducción
description: Bienvenido a la Biblioteca Mágica
---

# Introducción: La Biblioteca Mágica

Bienvenido al **Sitio de Documentación Multi-Idioma**. Este proyecto no es solo un sitio web estático; es una "Biblioteca Mágica" construida con arquitectura web moderna.

## ¿Cómo Funciona?

### 1. Next.js (El Bibliotecario)

Next.js es la bibliotecaria inteligente. Cuando alguien visita tu sitio web, pide una página (como "Introducción"). La bibliotecaria corre a buscarla y se la muestra.

- **React**: Estos son los **bloques de Lego** que usa la bibliotecaria para construir la página. Un bloque es un botón, otro es la barra lateral.

### 2. Docker (La Lonchera Mágica)

Normalmente, si cocinas una comida en casa, puede que no sepa igual en casa de un amigo.
**Docker** es como una **lonchera mágica**. Pones toda tu cocina (código) dentro. Ahora, no importa dónde abras esta lonchera (tu computadora, mi computadora o internet), el sitio web se ve exactamente igual.

### 3. ISR (La Magia de "Actualización")

Esto significa **Regeneración Estática Incremental**, o la **"Fotocopiadora"**.

- **Sin ISR**: La bibliotecaria tiene que escribir la página a mano cada vez que alguien la pide. ¡Lento!
- **Con ISR**: La bibliotecaria hace una **fotocopia** de la página y se la da a todos. ¡Es súper rápido!
- **Giro**: Cada 60 segundos, si cambias el texto, la bibliotecaria hace una _nueva_ fotocopia.

## Ejemplos del Mundo Real

### Centro de Ayuda de Netflix

Cuando Netflix agrega una nueva función, actualizan la página de ayuda. No quieren reconstruir todo su sitio web (millones de páginas) solo por un error tipográfico. Usan **ISR** para arreglar solo esa página al instante.

### Documentación de Stripe

Estas empresas tienen documentación en más de 30 idiomas. Usan **i18n** para que `stripe.com/docs` muestre inglés, pero `stripe.com/es/docs` muestre español automáticamente.

## Características Clave

- **Internacionalización**: Contenido disponible en inglés, español, francés, alemán.
- **Búsqueda de Texto Completo**: Impulsado por Fuse.js.
- **Referencia de API**: Integración de Swagger UI.

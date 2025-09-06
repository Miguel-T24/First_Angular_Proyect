# Guia para mis proyectos Angular
Este es mi documento para tener mis apuntes con Angular

## 1. [Mis Comandos en Angular](docs/comandos.md) 
- 1.1 [Instalación de CLI Local Temporalmente + Creacion del Proyecto de Angular](docs/comandos.md#Instalacion-de-CLI-Local-Temporalmente-+-Creacion-del-Proyecto-de-Angular)
``` Bash
npx @angular/cli new <nombre del proyecto>
```
- 1.2 [Ejecutar un proyecto de Angular](docs/comandos.md#2-ejecutar-el-proyeto-de-angular)
``` Bash
npx ng serve
```
- 1.3 [Instalar Taildwind](docs/comandos.md#3-instalar-taildwindcss)
``` bash
npm install tailwindcss @tailwindcss/postcss postcss
```
  - 1.3.1 Crear un archivo llamado `.postcssrc.json` en la raiz del proyecto y colocarle lo siguiente
    ``` json
    {
      "plugins": {
        "@tailwindcss/postcss": {}
      }
    }
    ```
  - 1.3.2 Agregar la siguiente importacion en el archivo /src/styles.css
    ``` css
    @import "tailwindcss";
    ```
- 1.4 [Creacion de un Componente](docs/comandos.md#4-creacion-de-un-componente)
``` bash
ng g c <nombre-componente>
```

> [!NOTE]
> Estos son comandos para que se instalen localmente las dependencias.
>
> Por buenas prácticas no trabajaré con instalaciones globales, solo locales para que sea mas fácil manejar varios proyectos con diferentes dependencias.

## 2. [Ejemplos de Conceptos Basicos](docs/examples-basics.md)
- 2.1 [Interpolacion](docs/examples-basics.md#1-interpolacion)
- 2.2 [Property Binding](docs/examples-basics.md#2-property-binding)
- 2.3 [Como usar el for](docs/examples-basics.md#3-como-usar-el-for)
- 2.4 [Event Binding](docs/examples-basics.md#4-event-binding)
- 2.5 [Two Way Binding](docs/examples-basics.md#5-two-way-binding)
- 2.6 [@Input y Output](docs/examples-basics.md#6-input-y-output)
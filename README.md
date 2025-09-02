# Comandos Basicos para instalar un proyecto de Angular

## 1. Instalacion de CLI Local Temporalmente +  Creacion del Proyecto de Angular
``` Bash
npx @angular/cli new <nombre del proyecto>
```
## 2. Ejecutar el proyeto de Angular
``` Bash
npx ng serve
```
> [!NOTE]
> Estos son comandos para que se instalen localmente las dependencias.
>
> Por buenas prácticas no trabajaré con instalaciones globales, solo locales para que sea mas facil manejar varios proyectos con diferentes dependencias.

## 3. Instalar Taildwindcss
* Ejecutar el comando en la raiz del proyecto
``` bash
npm install tailwindcss @tailwindcss/postcss postcss
```
* Crear un archivo llamado `.postcssrc.json` en la raiz del proyecto y colocarle lo siguiente
``` json
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

* Agregar la siguiente importacion en el archivo /src/styles.css
```
@import "tailwindcss";
```

## 4. Crear un componente en angular
``` bash
ng g c <nombre-componente>
```
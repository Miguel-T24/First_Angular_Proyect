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

# 5. Interpolacion
- En el archivo `.ts`
``` typescript
  name = "Miguel";
  lastName = "Tamayo";
  age = 29;
  isActive = false ? "Activo" : "Inactivo"
```

- En el archivo template `.html`
``` html
<h2>Mi nombre es {{name}} y mi apellido es {{apellido}} y tengo {{age}} años</h2>
<h2>En 5 años tendré {{age + 5 }} años</h2>
<h2>Esta activo o no? = {{isActive}}</h2>
```

# 6. Property Binding
- En el Archivo `.ts`
``` typescript
  name = "Miguel";
  imageURL = "https://images7.alphacoders.com/133/1338182.png";
  
  isDisable = false;
  onClick(){
  console.log("Boton Click");
  };

  isRed = true;


```

- En el Template `.html`
``` html
<input [value]="name">
<img [src]="imageURL" alt="logo of my life" width="500">

<button 
[disabled]="isDisable"
class=""
(click)="onClick()"
>Haz Click</button>

<p [style.color]="isRed ? 'red' : 'blue'">Color del Texto</p>
```

# 7. Como usar el for, en este caso para mostrar varias imagenes
- En el archivo `.ts`

``` typescript
  images = [
    "https://m.media-amazon.com/images/M/MV5BMjA5NzU2MDYzMF5BMl5BanBnXkFtZTcwODIzNDc3Mw@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTk0NjcxOTE1MF5BMl5BanBnXkFtZTYwMjc0NTg3._V1_.jpg"
  ];
```

- En el template `.html`
``` html
<div>
    @for (img of images; track $index){
        <img [src]="img" alt="Imagen {{$index}}" width="500">
    }
</div>
```

# 8. Event Binding
## En este caso haremos que cuando se haga click en un boton se muestre un texto en pantalla

- En el archivo `.ts`
``` typescript
message = "";
  showMessage(){
    this.message = "Hola Angular";
  }
```

- En el template `.html`
``` html
<p>{{message}}</p>
<button 
class=""
(click)="showMessage()"
>Haz Click</button>
```

## En este caso vamos a escuchar un evento en tiempo real
- En el archivo `.ts`
``` typescript
  inputValue = "";
  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
```

- En el template `.html`
``` html
<p>{{ inputValue }}</p>
<input (input)="onInput($event)" placeholder="Escribe algo...">
```

## En este caso haremosm un contador aplicando todo lo que hemos aprenddiod hasta ahora sobre los event binding
- En el archivo `.ts`
``` typescript
  counter = 0;
  increment(){
    this.counter++
  }
  decrement(){
    this.counter > 0 && this.counter--
  }
```

- En el template `.html`
``` html
<h2 class = "">{{counter}}</h2>
<button
 class="" 
(click)="increment()"
>Incrementar</button>

<button
 class="" 
(click)="decrement()"
>Decrementar</button>
```

## Mini To do App
- En el archivo `.ts`
``` typescript
  addTask(task: string) {
    if (task.trim() !== "") {
      this.tasks.push(task);
    }
  }
```

- En el template `.html`
``` html
<!--  Mini To do App -->
<h2 class="text-xl font-bold">Mini ToDo App</h2>

<!-- Input + Botón -->
<input #taskInput type="text" placeholder="Escribe una tarea"
  class="border rounded px-2 py-1">
<button 
  (click)="addTask(taskInput.value)" 
  class="ml-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
>
  Agregar
</button>

<!-- Lista de tareas -->
<ul class="mt-4 list-disc list-inside">
  @for (task of tasks; track $index) {
    <li>{{ task }}</li>
  }
</ul>
```

# 9. Two Way binding
- En el archivo `.ts`
``` typescript
  name_twb = "Juan";
  age_twb = 20;
  isActive_twb = true;
  color_twb = 'rojo';
  colors_twb = ['rojo', 'verde', 'azul']
```

- En el template `.html`
``` html
<!-- 1) Texto -->
<label>Nombre en el two way binding: </label>
<input type="text" [(ngModel)]="name_twb">
<p>Hola, {{ name_twb }} 👋</p>

<!-- 2) Número + botones -->
<label>Edad:</label>
<input type="number" [(ngModel)]="age_twb">
<button (click)="age_twb = age_twb + 1">+</button>
<button (click)="age_twb = age_twb - 1">-</button>
<p>Edad actual: {{ age_twb }}</p>

<!-- 3) Checkbox -->
<label>
  <input type="checkbox" [(ngModel)]="isActive_twb">
  ¿Activo?
</label>
<p>Estado: {{ isActive_twb ? 'Activo ✅' : 'Inactivo ❌' }}</p>

<!-- 4) Select -->
<label>Color favorito:</label>
<select [(ngModel)]="color_twb">
  @for (c of colors_twb; track c) {
    <option [value]="c">{{ c }}</option>
  } @empty {
    <option disabled selected>No hay colores</option>
  }
</select>
<p>Elegiste: {{ color_twb }}</p>
```

# 10. @Input y @Output
Los `@Input` son para enviar mensajes desde el componente padre al hijo
Los `@Output` son para enviar desde el componente hijo al padre

- Archivo `.ts` del *HIJO*
```typescript
  @Input() title:String = 'El titulo desde el Hijo';
  @Input() content:string = "Esto es el contendo desde el hijo"
  @Output() mensaje = new EventEmitter<string>();

  clickMostrarMensaje(){
    this.mensaje.emit("Mandando el mensaje desde el hijo");
  }
```
- Archivo Template `.html` del *HIJO* 
```html
<h1>{{title}}</h1>
<p>{{content}}</p>
<button class = ""
(click)="clickMostrarMensaje()"
>
Click aqui
</button>
```


- Archivo `.ts` del *PADRE*
``` Typescript
  // @Input()
  childMessage = '';
  handleChildEvent(msg: string) {
    this.childMessage = msg;
  }

  // Input del segundo ejemplo
  mensajedeltitle = '';
  eventoDelHijo(msg: string){
    this.mensajedeltitle = msg
  }
```

- Archivo Template `.html` del *PADRE*
``` html
<app-title-component 
[title]="'Titulo desde el Padre'" 
[content] = "'Contenido desde el Padre'"
(mensaje)="eventoDelHijo($event)"
>
</app-title-component>
<p>{{mensajedeltitle}}</p>
``` 
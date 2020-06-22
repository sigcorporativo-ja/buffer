# M.plugin.Buffer

Plugin que genera un buffer o un área de influencia sobre un punto, linea o polígono que se dibuje sobre el mapa y con una equidistancia determinada.

![Imagen1](./img/buffer_1.png)

## Dependencias

- buffer.ol.min.js
- buffer.ol.min.css


```html
 <link href="../../plugins/buffer/buffer.ol.min.css" rel="stylesheet" />
 <script type="text/javascript" src="../../plugins/buffer/buffer.ol.min.js"></script>
```

## Parámetros

- El constructor se inicializa con un JSON de _options_ con los siguientes atributos:

- **position**. Indica la posición donde se mostrará el plugin
    - 'TL':top left
    - 'TR':top right (default)
    - 'BL':bottom left
    - 'BR':bottom right

## Eventos


## Otros métodos


## Ejemplos de uso

### Ejemplo 1
```javascript
   const map = M.map({
     container: 'map'
   });

   const mp = new M.plugin.Buffer({
        position: 'TL',
      });

   map.addPlugin(mp);
```
### Ejemplo 2
```javascript
const mp = new M.plugin.Buffer({
  position: 'BR',
  classname: 'm-class-name',
  collapsible: false
});

map.addPlugin(mp);
```
### Ejemplo 3
```javascript
const mp = new M.plugin.Buffer({});

map.addPlugin(mp);
```

# ecommerce-pini-araceli

Para este proyecto de React dictado por CoderHouse, voy a crear una app de carrito de compras
usando React JS
En la misma, se podrá simular la compra de productos online de indumentaria de una marca propia

El proyecto incluye hasta el momento:

-NavBar con links de accesos para facilitar la navegación
-Cards de productos y su contenedor (CardContainer)
-CartButton
-ItemDetail y su contenedor (ItemDetailContainer)
-ItemCount (contador para añadir productos al carrito)

En cuanto a la navegabilidad, usaré los efectos vistos en clase para evitar desmontar componentes y re-cargar al cambiar de categoría o itemId y lograr navegaciones sin reload
El catálogo se puede mostrar completo, o filtrado por categorías usando el useParams()
Cada card de producto, muestra: título, precio, itemCount (para añadir al carrito), imagen, stock, y button "Ver detalle"
En el itemDetail, se puede observar el producto en detalle, donde se incluyó también el itemCount para poder añadir el producto al carrito sin necesidad de volver a la Home
Añadí un banner en la Home


Todas las dependencias por npm son las sugeridas en clase, entre ellas Material ui para el uso de
determinados componentes.


#!/bin/bash

# Crear directorio de imágenes si no existe
mkdir -p public/images

# Descargar imágenes de productos
curl -o public/images/camisa-casual.jpg "https://images.unsplash.com/photo-1603252109303-2751441dd157"
curl -o public/images/jeans-slim.jpg "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
curl -o public/images/zapatillas-deportivas.jpg "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
curl -o public/images/reloj-elegante.jpg "https://images.unsplash.com/photo-1524805444758-089113d48a6d"
curl -o public/images/chaqueta-cuero.jpg "https://images.unsplash.com/photo-1551028719-00167b16eac5"
curl -o public/images/bolso-cuero.jpg "https://images.unsplash.com/photo-1584917865442-de89df76afd3"

# Descargar imágenes de categorías
curl -o public/images/category-ropa.jpg "https://images.unsplash.com/photo-1445205170230-053b83016050"
curl -o public/images/category-accesorios.jpg "https://images.unsplash.com/photo-1584917865442-de89df76afd3"
curl -o public/images/category-calzado.jpg "https://images.unsplash.com/photo-1543163521-1bf539c55dd2"

# Descargar imagen de fondo del hero
curl -o public/images/hero-bg.jpg "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04" 
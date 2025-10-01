// Gestión de atributos de elementos
const elemento = document.getElementById('miElemento');

// Obtener atributo
const valor = elemento.getAttribute('data-info');

// Establecer atributo
elemento.setAttribute('class', 'activo');

// Verificar si existe atributo
if (elemento.hasAttribute('disabled')) {
    console.log('El elemento está deshabilitado');
}

// Eliminar atributo
elemento.removeAttribute('hidden');

// Trabajar con atributos de datos
elemento.dataset.usuario = 'admin';
console.log(elemento.dataset.usuario);

// Gestión de estilos CSS
// Modificar estilos individuales
elemento.style.color = 'blue';
elemento.style.backgroundColor = '#f0f0f0';
elemento.style.fontSize = '16px';
elemento.style.display = 'block';

// Obtener estilos computados
const estilos = window.getComputedStyle(elemento);
console.log(estilos.color);
console.log(estilos.fontSize);

// Agregar/quitar clases CSS
elemento.classList.add('nueva-clase');
elemento.classList.remove('clase-antigua');
elemento.classList.toggle('activo');
elemento.classList.contains('activo'); // devuelve true/false

// Modificar múltiples estilos con cssText
elemento.style.cssText = 'color: red; background: yellow; padding: 10px;';

// Restablecer estilos
elemento.style.removeProperty('color');
elemento.removeAttribute('style');
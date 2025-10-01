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
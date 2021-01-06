//Variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const maximo = document.querySelector('#max');
const minimo = document.querySelector('#min');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color')

//contenedor de los resultados
const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10; 


const datosBusqueda = {
    marca: '',
    min: '',
    max:'',
    year: '',
    puertas:'',
    transmision: '',
    color: '',
    
}



//Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);


    //Llenar select años

    llenarSelect();

});


//Eventos para los selects de busqueda

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
filtrarAuto();

});

year.addEventListener('change', e => {
    datosBusqueda.year = e.target.value;
    filtrarAuto();
});


maximo.addEventListener('change', e => {
    datosBusqueda.max = e.target.value;
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.min = e.target.value;
    filtrarAuto();

});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
filtrarAuto();
   
});     

//Funciones
function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto;
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
        Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - Puertas: ${puertas} - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}`;

        resultado.appendChild(autoHTML);
    });
}

//limpiar Html

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);

    }
}


//genera los años del select

function llenarSelect() {

    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarAño).filter(
    filterminimo).filter(filtermaximo).filter(filterpuertas).filter(
    filtertransmision).filter(filtrarColor);


    if (resultado.length) {
        mostrarAutos(resultado);
    }else {
        noResultado();
    }
}

function noResultado (){

    limpiarHTML();

    const noResultado = document.createElement('p');
    noResultado.textContent = 'No hay resultados para su busqueda';
    resultado.appendChild(noResultado);
};

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    } return auto;
}

function filtrarAño(auto) {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === parseInt(year);
    } return auto;
}

function filterminimo (auto) {
    const { min } = datosBusqueda;
    if (min) { 
        return auto.precio >= min;
    }
     return auto;
}

function filtermaximo (auto) {
    const { max } = datosBusqueda;
    if (max) { 
        return auto.precio <= max;
    }
     return auto;
}

function filterpuertas(auto) {
    const {puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === parseInt(puertas);
    } return auto;
}

function filtertransmision(auto) {
    const {transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    } return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    } return auto;
}


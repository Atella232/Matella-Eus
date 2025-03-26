// Estado global de la aplicación
const state = {
    ikuspegia: 'formak', // 'formak' o 'teoremak'
    formaAukeratua: 'triangelua',
    teoremaAukeratua: 'pitagoras',
    
    // Propiedades para cada forma
    triangeluarenPropietateak: {
        aldeA: 100,
        aldeB: 100,
        aldeC: 100,
        angeluA: 60,
        angeluB: 60,
        angeluC: 60,
        kontrolatzekoBidea: 'aldeak' // 'aldeak' o 'angeluak'
    },
    
    laukizuzenarenPropietateak: {
        zabalera: 150,
        altuera: 100,
    },
    
    zirkuluarenPropietateak: {
        erradioa: 80,
    },
    
    erronboaKropietateak: {
        aldea: 100,
        diagonalNagusia: 150,
        diagonalTxikia: 100,
    },
    
    // Propiedades para teoremas
    pitagorasenPropietateak: {
        katetoA: 60,
        katetoB: 80,
        hipotenusa: 100 // Calculado
    }
};

// Elementos del DOM
const elements = {
    // Botones de modo
    btnFormak: document.getElementById('btn-formak'),
    btnTeoremak: document.getElementById('btn-teoremak'),
    
    // Selectores
    formakSelector: document.getElementById('formak-selector'),
    teoremakSelector: document.getElementById('teoremak-selector'),
    
    // Botones de formas
    btnTriangelua: document.getElementById('btn-triangelua'),
    btnLaukizuzena: document.getElementById('btn-laukizuzena'),
    btnZirkulua: document.getElementById('btn-zirkulua'),
    btnErronboa: document.getElementById('btn-erronboa'),
    
    // Botones de teoremas
    btnPitagoras: document.getElementById('btn-pitagoras'),
    
    // Contenedores
    visualizationTitle: document.getElementById('visualization-title'),
    visualizationContainer: document.getElementById('visualization-container'),
    propertiesContainer: document.getElementById('properties-container'),
    controlsContainer: document.getElementById('controls-container'),
    classificationContainer: document.getElementById('classification-container'),
    detailsContainer: document.getElementById('details-container')
};

// Cálculo de la hipotenusa para el teorema de Pitágoras
function calcularHipotenusa() {
    const { katetoA, katetoB } = state.pitagorasenPropietateak;
    const hipotenusa = Math.sqrt(Math.pow(katetoA, 2) + Math.pow(katetoB, 2));
    state.pitagorasenPropietateak.hipotenusa = Math.round(hipotenusa);
}

// Calcular la longitud del lado del rombo a partir de sus diagonales
function calcularLadoRombo() {
    const { diagonalNagusia, diagonalTxikia } = state.erronboaKropietateak;
    
    // Fórmula para calcular el lado del rombo
    const aldea = Math.sqrt(
        (Math.pow(diagonalNagusia, 2) + Math.pow(diagonalTxikia, 2)) / 4
    );
    
    // Validar que las diagonales sean coherentes
    if (diagonalNagusia > 0 && diagonalTxikia > 0 && 
        diagonalNagusia >= diagonalTxikia) {
        state.erronboaKropietateak.aldea = Math.round(aldea);
        return true;
    }
    
    return false;
}

// Calcular la diagonal menor del rombo
function calcularDiagonalTxikia() {
    const { aldea, diagonalNagusia } = state.erronboaKropietateak;
    const diagonalTxikia = Math.sqrt(4 * Math.pow(aldea, 2) - Math.pow(diagonalNagusia, 2));
    if (!isNaN(diagonalTxikia)) {
        state.erronboaKropietateak.diagonalTxikia = Math.round(diagonalTxikia);
    }
}

// Calcular ángulos del triángulo basados en los lados
function calcularAngulosTriangulo() {
    if (state.triangeluarenPropietateak.kontrolatzekoBidea === 'aldeak') {
        const { aldeA, aldeB, aldeC } = state.triangeluarenPropietateak;
        
        // Verificar si los lados pueden formar un triángulo
        const triangeluEgokia = 
            aldeA + aldeB > aldeC && 
            aldeA + aldeC > aldeB && 
            aldeB + aldeC > aldeA;
        
        if (triangeluEgokia) {
            // Ley de cosenos para calcular los ángulos
            const angeluA = Math.acos(
                (Math.pow(aldeB, 2) + Math.pow(aldeC, 2) - Math.pow(aldeA, 2)) / 
                (2 * aldeB * aldeC)
            ) * (180 / Math.PI);
            
            const angeluB = Math.acos(
                (Math.pow(aldeA, 2) + Math.pow(aldeC, 2) - Math.pow(aldeB, 2)) / 
                (2 * aldeA * aldeC)
            ) * (180 / Math.PI);
            
            const angeluC = 180 - angeluA - angeluB;
            
            state.triangeluarenPropietateak.angeluA = Math.round(angeluA);
            state.triangeluarenPropietateak.angeluB = Math.round(angeluB);
            state.triangeluarenPropietateak.angeluC = Math.round(angeluC);
        }
    }
}

// Calcular lados del triángulo basados en un lado y ángulos
function calcularLadosTriangulo() {
    if (state.triangeluarenPropietateak.kontrolatzekoBidea === 'angeluak') {
        const { aldeA, angeluA, angeluB, angeluC } = state.triangeluarenPropietateak;
        
        // Verificar si los ángulos suman 180 grados
        const angeluenBatura = angeluA + angeluB + angeluC;
        if (Math.abs(angeluenBatura - 180) < 1) {
            // Convertir ángulos a radianes
            const angeluARad = angeluA * (Math.PI / 180);
            const angeluBRad = angeluB * (Math.PI / 180);
            const angeluCRad = angeluC * (Math.PI / 180);
            
            // Ley de senos para calcular los lados
            const aldeB = Math.round(aldeA * Math.sin(angeluBRad) / Math.sin(angeluARad));
            const aldeC = Math.round(aldeA * Math.sin(angeluCRad) / Math.sin(angeluARad));
            
            state.triangeluarenPropietateak.aldeB = aldeB;
            state.triangeluarenPropietateak.aldeC = aldeC;
        }
    }
}

// Calcular alturas del triángulo
function calcularAlturasTriangulo() {
    const { aldeA, aldeB, aldeC } = state.triangeluarenPropietateak;
    
    // Semiperímetro para fórmula de Herón
    const s = (aldeA + aldeB + aldeC) / 2;
    
    // Área usando la fórmula de Herón
    const area = Math.sqrt(s * (s - aldeA) * (s - aldeB) * (s - aldeC));
    
    // Alturas
    const altueraA = (2 * area) / aldeA;
    const altueraB = (2 * area) / aldeB;
    const altueraC = (2 * area) / aldeC;
    
    return {
        altueraA: altueraA.toFixed(2),
        altueraB: altueraB.toFixed(2),
        altueraC: altueraC.toFixed(2),
        area: area.toFixed(2)
    };
}

// Clasificación del triángulo
function clasificarTriangulo() {
    const { aldeA, aldeB, aldeC, angeluA, angeluB, angeluC } = state.triangeluarenPropietateak;
    
    // Por lados
    let aldeenAraberaMota = '';
    if (aldeA === aldeB && aldeB === aldeC) {
        aldeenAraberaMota = 'Ekilateroa';
    } else if (aldeA === aldeB || aldeB === aldeC || aldeA === aldeC) {
        aldeenAraberaMota = 'Isoszelea';
    } else {
        aldeenAraberaMota = 'Eskalenoa';
    }
    
    // Por ángulos
    let angeluenAraberaMota = '';
    if (angeluA === 90 || angeluB === 90 || angeluC === 90) {
        angeluenAraberaMota = 'Zuzena';
    } else if (angeluA > 90 || angeluB > 90 || angeluC > 90) {
        angeluenAraberaMota = 'Kamutsa';
    } else {
        angeluenAraberaMota = 'Zorrotza';
    }
    
    return { aldeenAraberaMota, angeluenAraberaMota };
}

// Calcular propiedades de las formas
function calcularPropiedades() {
    switch (state.formaAukeratua) {
        case 'triangelua': {
            const { aldeA, aldeB, aldeC } = state.triangeluarenPropietateak;
            const perimetroa = aldeA + aldeB + aldeC;
            const alturas = calcularAlturasTriangulo();
            return {
                perimetroa,
                azalera: alturas.area,
                alturas,
                formula: "A = (b × h)/2"
            };
        }
        
        case 'laukizuzena': {
            const { zabalera, altuera } = state.laukizuzenarenPropietateak;
            return {
                perimetroa: 2 * (zabalera + altuera),
                azalera: zabalera * altuera,
                formula: "A = b × h"
            };
        }
        
        case 'zirkulua': {
            const { erradioa } = state.zirkuluarenPropietateak;
            return {
                perimetroa: (2 * Math.PI * erradioa).toFixed(2),
                azalera: (Math.PI * erradioa * erradioa).toFixed(2),
                formula: "A = π × r²"
            };
        }
        
        case 'erronboa': {
            const { aldea, diagonalNagusia, diagonalTxikia } = state.erronboaKropietateak;
            return {
                perimetroa: 4 * aldea,
                azalera: (diagonalNagusia * diagonalTxikia / 2).toFixed(2),
                formula: "A = (D × d)/2"
            };
        }
        
        default:
            return { perimetroa: 0, azalera: 0, formula: "" };
    }
}

// Función para cambiar de modo (formas o teoremas)
function cambiarModo(modo) {
    state.ikuspegia = modo;
    
    // Actualizar UI
    if (modo === 'formak') {
        elements.btnFormak.classList.add('btn-selected');
        elements.btnTeoremak.classList.remove('btn-selected');
        elements.formakSelector.style.display = 'flex';
        elements.teoremakSelector.style.display = 'none';
        elements.visualizationTitle.textContent = 'Forma';
    } else {
        elements.btnFormak.classList.remove('btn-selected');
        elements.btnTeoremak.classList.add('btn-selected');
        elements.formakSelector.style.display = 'none';
        elements.teoremakSelector.style.display = 'flex';
        elements.visualizationTitle.textContent = 'Teorema';
    }
    
    // Renderizar la interfaz
    renderizar();
}

// Función para seleccionar forma
function seleccionarForma(forma) {
    state.formaAukeratua = forma;
    
    // Actualizar UI
    elements.btnTriangelua.classList.toggle('btn-selected', forma === 'triangelua');
    elements.btnLaukizuzena.classList.toggle('btn-selected', forma === 'laukizuzena');
    elements.btnZirkulua.classList.toggle('btn-selected', forma === 'zirkulua');
    elements.btnErronboa.classList.toggle('btn-selected', forma === 'erronboa');
    
    // Renderizar la interfaz
    renderizar();
}

// Función para seleccionar teorema
function seleccionarTeorema(teorema) {
    state.teoremaAukeratua = teorema;
    
    // Actualizar UI
    elements.btnPitagoras.classList.toggle('btn-selected', teorema === 'pitagoras');
    
    // Renderizar la interfaz
    renderizar();
}

// Función principal para renderizar la interfaz según el estado actual
function renderizar() {
    if (state.ikuspegia === 'formak') {
        renderizarForma();
        renderizarControlesForma();
        renderizarPropiedadesForma();
        renderizarDetallesForma();
    } else {
        renderizarTeorema();
        renderizarControlesTeorema();
        elements.propertiesContainer.innerHTML = ''; // No hay propiedades para teoremas
        renderizarDetallesTeorema();
    }
}

// Eventos de los botones
document.addEventListener('DOMContentLoaded', () => {
    // Eventos de modo
    elements.btnFormak.addEventListener('click', () => cambiarModo('formak'));
    elements.btnTeoremak.addEventListener('click', () => cambiarModo('teoremak'));
    
    // Eventos de formas
    elements.btnTriangelua.addEventListener('click', () => seleccionarForma('triangelua'));
    elements.btnLaukizuzena.addEventListener('click', () => seleccionarForma('laukizuzena'));
    elements.btnZirkulua.addEventListener('click', () => seleccionarForma('zirkulua'));
    elements.btnErronboa.addEventListener('click', () => seleccionarForma('erronboa'));
    
    // Eventos de teoremas
    elements.btnPitagoras.addEventListener('click', () => seleccionarTeorema('pitagoras'));
    
    // Renderizar inicial
    renderizar();
});

// Funciones de renderizado (implementar según el tipo de forma seleccionada)
function renderizarForma() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '300');
    svg.setAttribute('height', '200');
    svg.classList.add('svg-canvas');
    
    switch (state.formaAukeratua) {
        case 'triangelua': {
            const { aldeA, aldeB, aldeC } = state.triangeluarenPropietateak;
            
            // Puntos del triángulo
            const puntuak = [
                { x: 50, y: 150 },
                { x: 50 + aldeA, y: 150 },
                { 
                    x: 50 + aldeB * Math.cos(Math.PI/3), 
                    y: 150 - aldeB * Math.sin(Math.PI/3) 
                }
            ];
            
            const poligonoa = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            poligonoa.setAttribute('points', puntuak.map(p => `${p.x},${p.y}`).join(' '));
            poligonoa.setAttribute('fill', 'none');
            poligonoa.setAttribute('stroke', 'blue');
            
            svg.appendChild(poligonoa);
            break;
        }
        case 'laukizuzena': {
            const { zabalera, altuera } = state.laukizuzenarenPropietateak;
            
            const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rect.setAttribute('x', '50');
            rect.setAttribute('y', '50');
            rect.setAttribute('width', zabalera);
            rect.setAttribute('height', altuera);
            rect.setAttribute('fill', 'none');
            rect.setAttribute('stroke', 'green');
            
            svg.appendChild(rect);
            break;
        }
        case 'zirkulua': {
            const { erradioa } = state.zirkuluarenPropietateak;
            
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute('cx', '150');
            circle.setAttribute('cy', '100');
            circle.setAttribute('r', erradioa);
            circle.setAttribute('fill', 'none');
            circle.setAttribute('stroke', 'red');
            
            svg.appendChild(circle);
            break;
        }
        case 'erronboa': {
            const { diagonalNagusia, diagonalTxikia } = state.erronboaKropietateak;
            
            // Calcular puntos del rombo basados en las diagonales
            const puntuak = [
                { x: 150, y: 50 }, // Punto superior
                { x: 150 + diagonalNagusia/2, y: 100 }, // Punto derecho
                { x: 150, y: 150 }, // Punto inferior
                { x: 150 - diagonalNagusia/2, y: 100 } // Punto izquierdo
            ];
            
            const poligonoa = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            poligonoa.setAttribute('points', puntuak.map(p => `${p.x},${p.y}`).join(' '));
            poligonoa.setAttribute('fill', 'none');
            poligonoa.setAttribute('stroke', 'purple');
            
            svg.appendChild(poligonoa);
            break;
        }
    }
    
    // Limpiar contenedor anterior y añadir nuevo SVG
    elements.visualizationContainer.innerHTML = '';
    elements.visualizationContainer.appendChild(svg);
}

function renderizarTeorema() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('width', '300');
    svg.setAttribute('height', '200');
    svg.classList.add('svg-canvas');
    
    switch (state.teoremaAukeratua) {
        case 'pitagoras': {
            const { katetoA, katetoB, hipotenusa } = state.pitagorasenPropietateak;
            
            // Triángulo rectángulo
            const puntuak = [
                { x: 50, y: 150 },
                { x: 50 + katetoA, y: 150 },
                { x: 50, y: 150 - katetoB }
            ];
            
            const poligonoa = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
            poligonoa.setAttribute('points', puntuak.map(p => `${p.x},${p.y}`).join(' '));
            poligonoa.setAttribute('fill', 'none');
            poligonoa.setAttribute('stroke', 'blue');
            
            svg.appendChild(poligonoa);
            break;
        }
    }
    
    // Limpiar contenedor anterior y añadir nuevo SVG
    elements.visualizationContainer.innerHTML = '';
    elements.visualizationContainer.appendChild(svg);
}

function renderizarControlesForma() {
    let controles = '';
    switch (state.formaAukeratua) {
        case 'triangelua':
            controles = `
                <h3>Triangeluaren kontrolak</h3>
                <div>
                    <label>A alde: <input type="number" id="lado-a" value="${state.triangeluarenPropietateak.aldeA}" min="1" max="200"></label>
                    <label>B alde: <input type="number" id="lado-b" value="${state.triangeluarenPropietateak.aldeB}" min="1" max="200"></label>
                    <label>C alde: <input type="number" id="lado-c" value="${state.triangeluarenPropietateak.aldeC}" min="1" max="200"></label>
                    <button onclick="actualizarTriangulo()">Eguneratu</button>
                </div>
            `;
            break;
        case 'laukizuzena':
            controles = `
                <h3>Laukizuzenaren kontrolak</h3>
                <div>
                    <label>Zabalera: <input type="number" id="ancho" value="${state.laukizuzenarenPropietateak.zabalera}" min="1" max="200"></label>
                    <label>Altuera: <input type="number" id="alto" value="${state.laukizuzenarenPropietateak.altuera}" min="1" max="200"></label>
                    <button onclick="actualizarRectangulo()">Eguneratu</button>
                </div>
            `;
            break;
        case 'zirkulua':
            controles = `
                <h3>Zirkuluaren kontrolak</h3>
                <div>
                    <label>Erradioa: <input type="number" id="radio" value="${state.zirkuluarenPropietateak.erradioa}" min="1" max="100"></label>
                    <button onclick="actualizarCirculo()">Eguneratu</button>
                </div>
            `;
            break;
        case 'erronboa':
            controles = `
                <h3>Erronboaren kontrolak</h3>
                <div>
                    <label>Diagonal nagusia: <input type="number" id="diagonal-nagusia" value="${state.erronboaKropietateak.diagonalNagusia}" min="1"></label>
                    <label>Diagonal txikia: <input type="number" id="diagonal-txikia" value="${state.erronboaKropietateak.diagonalTxikia}" min="1"></label>
                    <p>Kalkulatutako aldea: ${state.erronboaKropietateak.aldea}</p>
                    <p id="rombo-error" style="color: red;"></p>
                    <button onclick="actualizarRombo()">Eguneratu</button>
                </div>
            `;
            break;
    }
    elements.controlsContainer.innerHTML = controles;
}

function renderizarControlesTeorema() {
    let controles = '';
    switch (state.teoremaAukeratua) {
        case 'pitagoras':
            controles = `
                <h3>Pitagorasen kontrolak</h3>
                <div>
                    <label>A katetoa: <input type="number" id="cateto-a" value="${state.pitagorasenPropietateak.katetoA}" min="1" max="200"></label>
                    <label>B katetoa: <input type="number" id="cateto-b" value="${state.pitagorasenPropietateak.katetoB}" min="1" max="200"></label>
                    <p>Hipotenusa: ${state.pitagorasenPropietateak.hipotenusa}</p>
                    <button onclick="actualizarPitagoras()">Kalkulatu</button>
                </div>
            `;
            break;
    }
    elements.controlsContainer.innerHTML = controles;
}

// Funciones de actualización para los controles
function actualizarTriangulo() {
    const ladoA = parseInt(document.getElementById('lado-a').value);
    const ladoB = parseInt(document.getElementById('lado-b').value);
    const ladoC = parseInt(document.getElementById('lado-c').value);
    
    state.triangeluarenPropietateak.aldeA = ladoA;
    state.triangeluarenPropietateak.aldeB = ladoB;
    state.triangeluarenPropietateak.aldeC = ladoC;
    
    renderizar();
}

function actualizarRectangulo() {
    const ancho = parseInt(document.getElementById('ancho').value);
    const alto = parseInt(document.getElementById('alto').value);
    
    state.laukizuzenarenPropietateak.zabalera = ancho;
    state.laukizuzenarenPropietateak.altuera = alto;
    
    renderizar();
}

function actualizarCirculo() {
    const radio = parseInt(document.getElementById('radio').value);
    
    state.zirkuluarenPropietateak.erradioa = radio;
    
    renderizar();
}

function actualizarRombo() {
    const diagonalNagusia = parseInt(document.getElementById('diagonal-nagusia').value);
    const diagonalTxikia = parseInt(document.getElementById('diagonal-txikia').value);
    
    // Validaciones más flexibles
    const errorContainer = document.getElementById('rombo-error');
    errorContainer.textContent = '';
    
    // Permitir valores más amplios
    if (diagonalNagusia > 0 && diagonalTxikia > 0) {
        // Actualizar las diagonales en el estado
        state.erronboaKropietateak.diagonalNagusia = diagonalNagusia;
        state.erronboaKropietateak.diagonalTxikia = diagonalTxikia;
        
        // Intentar calcular el lado del rombo
        if (!calcularLadoRombo()) {
            errorContainer.textContent = 'Las diagonales deben ser positivas y la diagonal mayor debe ser mayor o igual a la menor.';
            return;
        }
        
        // Renderizar de nuevo
        renderizar();
    } else {
        errorContainer.textContent = 'Por favor, introduce valores positivos para las diagonales.';
    }
}

function actualizarPitagoras() {
    const katetoA = parseInt(document.getElementById('cateto-a').value);
    const katetoB = parseInt(document.getElementById('cateto-b').value);
    
    state.pitagorasenPropietateak.katetoA = katetoA;
    state.pitagorasenPropietateak.katetoB = katetoB;
    
    calcularHipotenusa();
    renderizar();
}

function renderizarPropiedadesForma() {
    const propiedades = calcularPropiedades();
    elements.propertiesContainer.innerHTML = `
        <h3>Propietateak</h3>
        <p>Perimetroa: ${propiedades.perimetroa}</p>
        <p>Azalera: ${propiedades.azalera}</p>
        <p>Formula: ${propiedades.formula}</p>
    `;
}

function renderizarDetallesForma() {
    let detalles = '';
    switch (state.formaAukeratua) {
        case 'triangelua':
            const clasificacion = clasificarTriangulo();
            detalles = `
                <h3>Triangeluen sailkapena</h3>
                <p>Aldeen arabera: ${clasificacion.aldeenAraberaMota}</p>
                <p>Angeluen arabera: ${clasificacion.angeluenAraberaMota}</p>
            `;
            break;
        case 'laukizuzena':
            detalles = '<p>Laukizuzena: Lau angeluak zuzenak</p>';
            break;
        case 'zirkulua':
            detalles = '<p>Zirkulua: Puntu guztiak zentruarekiko distantzia berdinaera</p>';
            break;
        case 'erronboa':
            detalles = '<p>Rombo: Lau aldeak berdinak</p>';
            break;
    }
    elements.detailsContainer.innerHTML = detalles;
}

function renderizarDetallesTeorema() {
    let detalles = '';
    switch (state.teoremaAukeratua) {
        case 'pitagoras':
            detalles = `
                <h3>Pitagorasen teorema</h3>
                <p>Triangelu zuzen batean, hipotenusaren karratua katetoen karratuen baturaren berdina da.</p>
                <p>a² + b² = c²</p>
            `;
            break;
    }
    elements.detailsContainer.innerHTML = detalles;
}

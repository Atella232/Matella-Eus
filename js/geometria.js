// Funciones para Herramientas Interactivas de Geometría
function calcularGeometria() {
    const figura = document.getElementById('figura').value;
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const resultadoElemento = document.getElementById('resultado');

    if (isNaN(lado1)) {
        resultadoElemento.textContent = 'Por favor, ingresa un valor válido';
        return;
    }

    let resultado;
    switch (figura) {
        case 'triangulo':
            if (isNaN(lado2)) {
                resultadoElemento.textContent = 'Por favor, ingresa la altura';
                return;
            }
            resultado = (lado1 * lado2) / 2;
            resultadoElemento.textContent = `Área del Triángulo: ${resultado.toFixed(2)} u²`;
            break;
        case 'cuadrado':
            resultado = lado1 * lado1;
            resultadoElemento.textContent = `Área del Cuadrado: ${resultado.toFixed(2)} u²`;
            break;
        case 'rectangulo':
            if (isNaN(lado2)) {
                resultadoElemento.textContent = 'Por favor, ingresa la altura';
                return;
            }
            resultado = lado1 * lado2;
            resultadoElemento.textContent = `Área del Rectángulo: ${resultado.toFixed(2)} u²`;
            break;
        case 'circulo':
            resultado = Math.PI * lado1 * lado1;
            resultadoElemento.textContent = `Área del Círculo: ${resultado.toFixed(2)} u²`;
            break;
        default:
            resultadoElemento.textContent = 'Figura no reconocida';
    }
}

const preguntasQuiz = [
    {
        pregunta: '¿Cuántos grados tiene un ángulo recto?',
        respuestaCorrecta: 90,
        opciones: [90, 45, 180]
    },
    {
        pregunta: '¿Cuántos ángulos tiene un triángulo?',
        respuestaCorrecta: 3,
        opciones: [3, 4, 5]
    },
    {
        pregunta: '¿Cuál es la suma de los ángulos internos de un triángulo?',
        respuestaCorrecta: 180,
        opciones: [90, 180, 360]
    },
    {
        pregunta: '¿Cuántos lados tiene un cuadrilátero?',
        respuestaCorrecta: 4,
        opciones: [3, 4, 5]
    },
    {
        pregunta: '¿Qué es un ángulo agudo?',
        respuestaCorrecta: 'Menor de 90°',
        opciones: ['Menor de 90°', 'Mayor de 90°', 'Igual a 90°']
    },
    {
        pregunta: '¿Cuántos ejes de simetría tiene un cuadrado?',
        respuestaCorrecta: 4,
        opciones: [2, 4, 0]
    },
    {
        pregunta: '¿Qué figura geométrica tiene todos sus lados iguales?',
        respuestaCorrecta: 'Cuadrado',
        opciones: ['Triángulo', 'Cuadrado', 'Rectángulo']
    },
    {
        pregunta: '¿Qué es un polígono regular?',
        respuestaCorrecta: 'Todos los lados y ángulos iguales',
        opciones: ['Todos los lados y ángulos iguales', 'Lados diferentes', 'Ángulos diferentes']
    },
    {
        pregunta: '¿Cuál es la fórmula del área de un triángulo?',
        respuestaCorrecta: '(base × altura) ÷ 2',
        opciones: ['base × altura', '(base × altura) ÷ 2', 'base + altura']
    },
    {
        pregunta: '¿Qué es un ángulo obtuso?',
        respuestaCorrecta: 'Mayor de 90°',
        opciones: ['Menor de 90°', 'Mayor de 90°', 'Igual a 90°']
    },
    {
        pregunta: '¿Cuántos grados tiene un ángulo llano?',
        respuestaCorrecta: 180,
        opciones: [90, 180, 360]
    },
    {
        pregunta: '¿Qué es un polígono?',
        respuestaCorrecta: 'Figura cerrada de líneas rectas',
        opciones: ['Figura con curvas', 'Figura cerrada de líneas rectas', 'Figura sin lados']
    },
    {
        pregunta: '¿Cuál es el área de un romboide con base 6 y altura 4?',
        respuestaCorrecta: 24,
        opciones: [24, 12, 48]
    },
    {
        pregunta: '¿Qué es el apótema en un polígono regular?',
        respuestaCorrecta: 'Distancia del centro al punto medio de un lado',
        opciones: ['Distancia del centro al punto medio de un lado', 'Altura del polígono', 'Diagonal del polígono']
    },
    {
        pregunta: '¿Cuál es el área de un trapecio con bases 5 y 8, y altura 3?',
        respuestaCorrecta: 19.5,
        opciones: [19.5, 13, 26]
    },
    {
        pregunta: '¿Qué tipo de cuadrilátero tiene solo un par de lados paralelos?',
        respuestaCorrecta: 'Trapecio',
        opciones: ['Cuadrado', 'Trapecio', 'Rombo']
    },
    {
        pregunta: '¿Cuál es la fórmula del teorema de Pitágoras?',
        respuestaCorrecta: 'a² + b² = c²',
        opciones: ['a + b = c', 'a² + b² = c²', 'a × b = c']
    },
    {
        pregunta: '¿Cuánto mide la hipotenusa de un triángulo con catetos 3 y 4?',
        respuestaCorrecta: 5,
        opciones: [5, 6, 7]
    },
    {
        pregunta: '¿Qué es un cuadrilátero con lados opuestos paralelos?',
        respuestaCorrecta: 'Paralelogramo',
        opciones: ['Trapecio', 'Paralelogramo', 'Trapezoide']
    },
    {
        pregunta: '¿Cuál es el área de un rectángulo de 5 m de largo y 3 m de ancho?',
        respuestaCorrecta: 15,
        opciones: [15, 8, 12]
    },
    {
        pregunta: '¿Qué caracteriza a un romboide?',
        respuestaCorrecta: 'Lados opuestos iguales sin ángulos rectos',
        opciones: ['Lados opuestos iguales sin ángulos rectos', 'Todos los lados iguales', 'Ángulos rectos']
    },
    {
        pregunta: '¿Cuántos grados tiene un ángulo en un triángulo equilátero?',
        respuestaCorrecta: 60,
        opciones: [45, 60, 90]
    },
    {
        pregunta: '¿Qué es un trapecio isósceles?',
        respuestaCorrecta: 'Lados no paralelos iguales',
        opciones: ['Todos los lados paralelos', 'Lados no paralelos iguales', 'Bases diferentes']
    },
    {
        pregunta: '¿Cuál es el perímetro de un cuadrado de lado 4?',
        respuestaCorrecta: 16,
        opciones: [16, 8, 32]
    },
    {
        pregunta: '¿Qué es un trapezoide?',
        respuestaCorrecta: 'Ningún lado paralelo',
        opciones: ['Todos los lados paralelos', 'Dos lados paralelos', 'Ningún lado paralelo']
    },
    {
        pregunta: '¿Cuántos vértices tiene un octógono?',
        respuestaCorrecta: 8,
        opciones: [6, 7, 8]
    },
    {
        pregunta: '¿Cuál es el área de un triángulo con base 6 y altura 4?',
        respuestaCorrecta: 12,
        opciones: [12, 10, 15]
    },
    {
        pregunta: '¿Qué caracteriza a un rectángulo?',
        respuestaCorrecta: 'Cuatro ángulos rectos',
        opciones: ['Cuatro lados iguales', 'Cuatro ángulos rectos', 'Lados opuestos paralelos']
    },
    {
        pregunta: '¿Cuál es la suma de los ángulos internos de un cuadrilátero?',
        respuestaCorrecta: 360,
        opciones: [180, 270, 360]
    },
    {
        pregunta: '¿Qué es un polígono cóncavo?',
        respuestaCorrecta: 'Tiene al menos un ángulo interior mayor de 180°',
        opciones: ['Todos los lados iguales', 'Tiene al menos un ángulo interior mayor de 180°', 'Tiene todos los ángulos menores de 90°']
    },
    {
        pregunta: '¿Cuál es el área de un círculo con radio 3?',
        respuestaCorrecta: 28.27,
        opciones: [28.27, 18.85, 37.70]
    },
    {
        pregunta: '¿Qué es un rombo?',
        respuestaCorrecta: 'Cuatro lados iguales con ángulos desiguales',
        opciones: ['Cuatro lados iguales con ángulos rectos', 'Cuatro lados iguales con ángulos desiguales', 'Lados opuestos paralelos']
    }
];

let preguntaActualIndex = 0;
let aciertos = 0;
let errores = 0;

function actualizarMarcador() {
    const marcadorQuiz = document.getElementById('marcador-quiz');
    if (marcadorQuiz) {
        marcadorQuiz.innerHTML = `✅ Aciertos: ${aciertos} | ❌ Errores: ${errores}`;
    }
}

function cargarPregunta() {
    const preguntaQuiz = document.getElementById('pregunta-quiz');
    const opcionesQuiz = document.querySelector('.opciones-quiz');
    const resultadoQuiz = document.getElementById('resultado-quiz');

    const preguntaActual = preguntasQuiz[preguntaActualIndex];
    preguntaQuiz.textContent = preguntaActual.pregunta;
    
    // Limpiar opciones anteriores
    opcionesQuiz.innerHTML = '';
    
    // Generar botones de opciones aleatorias
    const opcionesAleatorias = [...preguntaActual.opciones].sort(() => Math.random() - 0.5);
    opcionesAleatorias.forEach(opcion => {
        const boton = document.createElement('button');
        boton.textContent = opcion;
        boton.onclick = () => verificarRespuesta(opcion);
        opcionesQuiz.appendChild(boton);
    });

    resultadoQuiz.textContent = '';
}

function verificarRespuesta(respuestaSeleccionada) {
    const resultadoQuiz = document.getElementById('resultado-quiz');
    const preguntaActual = preguntasQuiz[preguntaActualIndex];

    if (respuestaSeleccionada === preguntaActual.respuestaCorrecta) {
        resultadoQuiz.textContent = '¡Respuesta correcta! ✅';
        resultadoQuiz.style.color = 'green';
        aciertos++;
    } else {
        resultadoQuiz.textContent = `Respuesta incorrecta. La respuesta correcta es ${preguntaActual.respuestaCorrecta}. ❌`;
        resultadoQuiz.style.color = 'red';
        errores++;
    }

    // Actualizar marcador
    actualizarMarcador();

    // Avanzar a la siguiente pregunta
    preguntaActualIndex = (preguntaActualIndex + 1) % preguntasQuiz.length;

    // Cargar la siguiente pregunta después de un breve retraso
    setTimeout(cargarPregunta, 2000);
}

// Cargar la primera pregunta cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    // Añadir marcador de quiz al HTML
    const quizContainer = document.querySelector('.quiz');
    if (quizContainer) {
        const marcadorQuiz = document.createElement('div');
        marcadorQuiz.id = 'marcador-quiz';
        marcadorQuiz.style.marginTop = '10px';
        marcadorQuiz.style.fontWeight = 'bold';
        quizContainer.appendChild(marcadorQuiz);

        // Inicializar marcador
        actualizarMarcador();

        // Cargar primera pregunta
        cargarPregunta();
    }
});
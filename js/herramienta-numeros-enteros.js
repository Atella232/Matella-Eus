document.addEventListener('DOMContentLoaded', () => {
    // Elementos del DOM
    const operacionSelect = document.getElementById('operacion');
    const dificultadSelect = document.getElementById('dificultad');
    const generarEjercicioBtn = document.getElementById('generar-ejercicio');
    const problemaMatematico = document.getElementById('problema-matematico');
    const comprobarRespuestaBtn = document.getElementById('comprobar-respuesta');
    const mostrarSolucionBtn = document.getElementById('mostrar-solucion');
    const mensajeResultado = document.getElementById('mensaje-resultado');
    const explicacionSolucion = document.getElementById('explicacion-solucion');
    
    // Variables para almacenar el ejercicio actual
    let ejercicioActual = {
        num1: 0,
        num2: 0,
        num3: null,
        op1: '+',
        op2: null,
        resultadoCorrecto: 0,
        tieneParentesis: false
    };

    // Generación de números según dificultad
    function generarNumero(dificultad) {
        switch(dificultad) {
            case 'facil':
                return Math.floor(Math.random() * 11) * (Math.random() < 0.5 ? 1 : -1);
            case 'medio':
                return Math.floor(Math.random() * 51) * (Math.random() < 0.5 ? 1 : -1);
            case 'dificil':
                return Math.floor(Math.random() * 101) * (Math.random() < 0.5 ? 1 : -1);
        }
    }

    // Función para formatear números (añadir paréntesis a negativos)
    function formatNumber(num) {
        // Si el número es negativo, lo envuelve en paréntesis
        return num < 0 ? `(${num})` : `${num}`;
    }

    // Generar ejercicio
    function generarEjercicio() {
        const operacion = operacionSelect.value;
        const dificultad = dificultadSelect.value;
        
        // Limpiar contenido anterior
        problemaMatematico.innerHTML = '';
        
        // Crear elementos base
        const numero1 = document.createElement('span');
        numero1.id = 'numero1';
        const operador1 = document.createElement('span');
        operador1.id = 'operador1';
        const numero2 = document.createElement('span');
        numero2.id = 'numero2';
        const igual = document.createElement('span');
        igual.textContent = '=';
        const respuesta = document.createElement('input');
        respuesta.type = 'text';
        respuesta.id = 'respuesta-usuario';
        respuesta.placeholder = 'Tu respuesta';
        respuesta.classList.add('form-control');

        // Limpiar resultados anteriores
        mensajeResultado.textContent = '';
        explicacionSolucion.textContent = '';

        // Generar ejercicio según la operación
        let num1, num2, resultadoCorrecto;
        
        switch(operacion) {
            case 'suma':
                // Para suma, cualquier número entero + entero = entero
                num1 = generarNumero(dificultad);
                num2 = generarNumero(dificultad);
                resultadoCorrecto = num1 + num2;
                operador1.textContent = '+';
                break;
            case 'resta':
                // Para resta, cualquier número entero - entero = entero
                num1 = generarNumero(dificultad);
                num2 = generarNumero(dificultad);
                resultadoCorrecto = num1 - num2;
                operador1.textContent = '−';
                break;
            case 'multiplicacion':
                // Para multiplicación, cualquier número entero * entero = entero
                num1 = generarNumero(dificultad);
                num2 = generarNumero(dificultad);
                resultadoCorrecto = num1 * num2;
                operador1.textContent = '×';
                break;
            case 'division':
                // Para división, necesitamos asegurarnos que el resultado sea entero
                // Generamos primero el divisor (distinto de cero)
                do {
                    num2 = generarNumero(dificultad);
                } while (num2 === 0);
                
                // Generamos un cociente entero
                let cociente = generarNumero(dificultad);
                if (cociente === 0) cociente = 1; // Evitamos cociente cero
                
                // Calculamos el dividendo para que la división sea exacta
                num1 = num2 * cociente;
                resultadoCorrecto = cociente;
                operador1.textContent = '÷';
                break;
            case 'operaciones-combinadas':
                // Generamos operaciones combinadas con resultados enteros
                ejercicioActual.tieneParentesis = Math.random() < 0.5;
                
                // Generamos operadores aleatorios (evitamos división para simplificar)
                const operadores = ['+', '−', '×'];
                ejercicioActual.op1 = operadores[Math.floor(Math.random() * operadores.length)];
                ejercicioActual.op2 = operadores[Math.floor(Math.random() * operadores.length)];
                
                // Generamos números aleatorios
                num1 = generarNumero(dificultad);
                num2 = generarNumero(dificultad);
                const num3 = generarNumero(dificultad);
                
                // Calculamos resultado intermedio y final asegurando que sean enteros
                let resultadoIntermedio;
                
                switch(ejercicioActual.op1) {
                    case '+': resultadoIntermedio = num1 + num2; break;
                    case '−': resultadoIntermedio = num1 - num2; break;
                    case '×': resultadoIntermedio = num1 * num2; break;
                }
                
                switch(ejercicioActual.op2) {
                    case '+': resultadoCorrecto = resultadoIntermedio + num3; break;
                    case '−': resultadoCorrecto = resultadoIntermedio - num3; break;
                    case '×': resultadoCorrecto = resultadoIntermedio * num3; break;
                }
                
                // Crear ejercicio con operaciones combinadas
                numero1.textContent = formatNumber(num1);
                operador1.textContent = ejercicioActual.op1;
                numero2.textContent = formatNumber(num2);
                
                const operador2 = document.createElement('span');
                operador2.id = 'operador2';
                operador2.textContent = ejercicioActual.op2;
                
                const numero3 = document.createElement('span');
                numero3.id = 'numero3';
                numero3.textContent = formatNumber(num3);
                
                if (ejercicioActual.tieneParentesis) {
                    // Agregar paréntesis
                    const parentesisIzq = document.createElement('span');
                    parentesisIzq.textContent = '(';
                    const parentesisDer = document.createElement('span');
                    parentesisDer.textContent = ')';
                    
                    problemaMatematico.append(
                        parentesisIzq, numero1, operador1, numero2, parentesisDer, 
                        operador2, numero3, igual, respuesta
                    );
                } else {
                    problemaMatematico.append(
                        numero1, operador1, numero2, operador2, numero3, igual, respuesta
                    );
                }
                
                // Guardar datos del ejercicio
                ejercicioActual.num1 = num1;
                ejercicioActual.num2 = num2;
                ejercicioActual.num3 = num3;
                ejercicioActual.resultadoCorrecto = resultadoCorrecto;
                
                // Añadir evento de escucha para Enter
                respuesta.addEventListener('keypress', function(event) {
                    if (event.key === 'Enter') {
                        comprobarRespuesta();
                    }
                });
                
                // Enfocar el input de respuesta
                respuesta.focus();
                
                return; // Salimos porque ya hemos construido todo el ejercicio
        }
        
        // Para operaciones simples (no combinadas)
        numero1.textContent = formatNumber(num1);
        numero2.textContent = formatNumber(num2);
        
        problemaMatematico.append(numero1, operador1, numero2, igual, respuesta);
        
        // Guardar datos del ejercicio
        ejercicioActual.num1 = num1;
        ejercicioActual.num2 = num2;
        ejercicioActual.op1 = operador1.textContent;
        ejercicioActual.resultadoCorrecto = resultadoCorrecto;
        
        // Añadir evento de escucha para Enter
        respuesta.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                comprobarRespuesta();
            }
        });
        
        // Enfocar el input de respuesta
        respuesta.focus();
    }

    // Comprobar respuesta
    function comprobarRespuesta() {
        // Obtener el input de respuesta actual
        const respuestaInput = document.getElementById('respuesta-usuario');
        
        // Verificar si hay una respuesta ingresada
        const valorRespuesta = respuestaInput.value.trim();
        if (!valorRespuesta) {
            mensajeResultado.textContent = 'Por favor, ingresa una respuesta';
            mensajeResultado.style.color = 'red';
            respuestaInput.focus();
            return;
        }

        // Comparar respuestas
        const respuestaUsuario = parseInt(valorRespuesta);
        
        if (respuestaUsuario === ejercicioActual.resultadoCorrecto) {
            mensajeResultado.textContent = '¡Correcto!';
            mensajeResultado.style.color = 'green';
        } else {
            mensajeResultado.textContent = '¡Incorrecto! Inténtalo de nuevo';
            mensajeResultado.style.color = 'red';
        }
        
        // Mostrar explicación
        const operacion = operacionSelect.value;
        let explicacion;
        
        if (operacion === 'operaciones-combinadas') {
            // Construir explicación considerando paréntesis
            if (ejercicioActual.tieneParentesis) {
                explicacion = `(${formatNumber(ejercicioActual.num1)} ${ejercicioActual.op1} ${formatNumber(ejercicioActual.num2)}) ${ejercicioActual.op2} ${formatNumber(ejercicioActual.num3)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
            } else {
                explicacion = `${formatNumber(ejercicioActual.num1)} ${ejercicioActual.op1} ${formatNumber(ejercicioActual.num2)} ${ejercicioActual.op2} ${formatNumber(ejercicioActual.num3)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
            }
        } else {
            switch(operacion) {
                case 'suma':
                    explicacion = `${formatNumber(ejercicioActual.num1)} + ${formatNumber(ejercicioActual.num2)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
                    break;
                case 'resta':
                    explicacion = `${formatNumber(ejercicioActual.num1)} − ${formatNumber(ejercicioActual.num2)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
                    break;
                case 'multiplicacion':
                    explicacion = `${formatNumber(ejercicioActual.num1)} × ${formatNumber(ejercicioActual.num2)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
                    break;
                case 'division':
                    explicacion = `${formatNumber(ejercicioActual.num1)} ÷ ${formatNumber(ejercicioActual.num2)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
                    break;
            }
        }
        
        explicacionSolucion.textContent = explicacion;
    }

    // Mostrar solución
    function mostrarSolucion() {
        const respuestaInput = document.getElementById('respuesta-usuario');
        respuestaInput.value = ejercicioActual.resultadoCorrecto;
        
        mensajeResultado.textContent = 'Solución mostrada';
        mensajeResultado.style.color = 'blue';
        
        // Mostrar explicación
        const operacion = operacionSelect.value;
        let explicacion;
        
        if (operacion === 'operaciones-combinadas') {
            // Construir explicación considerando paréntesis
            if (ejercicioActual.tieneParentesis) {
                explicacion = `(${formatNumber(ejercicioActual.num1)} ${ejercicioActual.op1} ${formatNumber(ejercicioActual.num2)}) ${ejercicioActual.op2} ${formatNumber(ejercicioActual.num3)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
            } else {
                explicacion = `${formatNumber(ejercicioActual.num1)} ${ejercicioActual.op1} ${formatNumber(ejercicioActual.num2)} ${ejercicioActual.op2} ${formatNumber(ejercicioActual.num3)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
            }
        } else {
            switch(operacion) {
                case 'suma':
                    explicacion = `${formatNumber(ejercicioActual.num1)} + ${formatNumber(ejercicioActual.num2)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
                    break;
                case 'resta':
                    explicacion = `${formatNumber(ejercicioActual.num1)} − ${formatNumber(ejercicioActual.num2)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
                    break;
                case 'multiplicacion':
                    explicacion = `${formatNumber(ejercicioActual.num1)} × ${formatNumber(ejercicioActual.num2)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
                    break;
                case 'division':
                    explicacion = `${formatNumber(ejercicioActual.num1)} ÷ ${formatNumber(ejercicioActual.num2)} = ${formatNumber(ejercicioActual.resultadoCorrecto)}`;
                    break;
            }
        }
        
        explicacionSolucion.textContent = explicacion;
    }

    // Modificar el HTML para incluir la opción de operaciones combinadas
    const opcionOperacionesCombinadas = document.createElement('option');
    opcionOperacionesCombinadas.value = 'operaciones-combinadas';
    opcionOperacionesCombinadas.textContent = 'Operaciones Combinadas';
    operacionSelect.appendChild(opcionOperacionesCombinadas);

    // Event Listeners
    generarEjercicioBtn.addEventListener('click', generarEjercicio);
    comprobarRespuestaBtn.addEventListener('click', comprobarRespuesta);
    mostrarSolucionBtn.addEventListener('click', mostrarSolucion);

    // Generar primer ejercicio al cargar
    generarEjercicio();
});
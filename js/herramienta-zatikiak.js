// Herramienta de Zatikiak - JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('Herramienta de Zatikiak cargada');
    
    // ******** FUNCIONES UTILITARIAS ********
    
    // Calcular el Máximo Común Divisor (MCD) usando el algoritmo de Euclides
    function calcularMCD(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        
        return a;
    }
    
    // Calcular el Mínimo Común Múltiplo (MCM)
    function calcularMCM(a, b) {
        return Math.abs(a * b) / calcularMCD(a, b);
    }
    
    // Simplificar una fracción
    function simplificarFraccion(numerador, denominador) {
        if (denominador === 0) {
            return { numerador: 0, denominador: 0, error: 'Ez da zatigarria zero zenbakiarekin' };
        }
        
        // Manejar números negativos
        let signo = 1;
        if (numerador < 0 && denominador < 0) {
            numerador = Math.abs(numerador);
            denominador = Math.abs(denominador);
        } else if (denominador < 0) {
            denominador = Math.abs(denominador);
            signo = -1;
        } else if (numerador < 0) {
            numerador = Math.abs(numerador);
            signo = -1;
        }
        
        // Si el numerador es 0, el resultado es 0/1
        if (numerador === 0) {
            return { numerador: 0, denominador: 1, error: null };
        }
        
        const mcd = calcularMCD(numerador, denominador);
        return {
            numerador: (numerador / mcd) * signo,
            denominador: denominador / mcd,
            error: null
        };
    }
    
    // Convertir fracción a decimal
    function fraccionADecimal(numerador, denominador) {
        if (denominador === 0) {
            return 'Ez da zatigarria';
        }
        return numerador / denominador;
    }
    
    // Verificar si el input es válido
    function validarInput(value) {
        return value !== null && value !== undefined && value !== '' && !isNaN(value) && isFinite(value);
    }
    
    // Formatear una fracción para mostrarla
    function formatearFraccion(numerador, denominador) {
        if (denominador === 1) {
            return numerador.toString();
        } else {
            return `${numerador}/${denominador}`;
        }
    }
    
    // ******** OPERACIONES CON FRACCIONES ********
    
    // Sumar fracciones
    function sumarFracciones(num1, den1, num2, den2) {
        if (den1 === 0 || den2 === 0) {
            return { error: 'Ez da zatigarria zero zenbakiarekin' };
        }
        
        let resultado = {};
        
        if (den1 === den2) {
            // Si los denominadores son iguales, sumamos directamente los numeradores
            resultado.numerador = num1 + num2;
            resultado.denominador = den1;
            resultado.pasos = [
                `Bi zatikiek izendatzaile berdina dute (${den1}), beraz, zenbakitzaileak zuzenean batu ditzakegu.`,
                `${num1}/${den1} + ${num2}/${den1} = (${num1} + ${num2})/${den1} = ${num1 + num2}/${den1}`
            ];
        } else {
            // Si los denominadores son diferentes, necesitamos encontrar el MCM
            const mcm = calcularMCM(den1, den2);
            const factor1 = mcm / den1;
            const factor2 = mcm / den2;
            
            const nuevoNum1 = num1 * factor1;
            const nuevoNum2 = num2 * factor2;
            
            resultado.numerador = nuevoNum1 + nuevoNum2;
            resultado.denominador = mcm;
            
            resultado.pasos = [
                `Zatikiek izendatzaile desberdinak dituzte, beraz, izendatzaile komuna aurkitu behar dugu.`,
                `${den1} eta ${den2} zenbakien MCM = ${mcm}`,
                `Lehenengo zatikia bihurtzen dugu: ${num1}/${den1} × ${factor1}/${factor1} = ${nuevoNum1}/${mcm}`,
                `Bigarren zatikia bihurtzen dugu: ${num2}/${den2} × ${factor2}/${factor2} = ${nuevoNum2}/${mcm}`,
                `Orain izendatzaile berdinarekin: ${nuevoNum1}/${mcm} + ${nuevoNum2}/${mcm} = (${nuevoNum1} + ${nuevoNum2})/${mcm} = ${resultado.numerador}/${mcm}`
            ];
        }
        
        // Simplificar el resultado
        const resultadoSimplificado = simplificarFraccion(resultado.numerador, resultado.denominador);
        
        if (resultadoSimplificado.error) {
            return { error: resultadoSimplificado.error };
        }
        
        resultado.numeradorSimplificado = resultadoSimplificado.numerador;
        resultado.denominadorSimplificado = resultadoSimplificado.denominador;
        
        if (resultado.numerador !== resultado.numeradorSimplificado || resultado.denominador !== resultado.denominadorSimplificado) {
            resultado.pasos.push(`Emaitza sinplifikatzen dugu: ${resultado.numerador}/${resultado.denominador} = ${resultado.numeradorSimplificado}/${resultado.denominadorSimplificado}`);
        }
        
        return resultado;
    }
    
    // Restar fracciones
    function restarFracciones(num1, den1, num2, den2) {
        if (den1 === 0 || den2 === 0) {
            return { error: 'Ez da zatigarria zero zenbakiarekin' };
        }
        
        let resultado = {};
        
        if (den1 === den2) {
            // Si los denominadores son iguales, restamos directamente los numeradores
            resultado.numerador = num1 - num2;
            resultado.denominador = den1;
            resultado.pasos = [
                `Bi zatikiek izendatzaile berdina dute (${den1}), beraz, zenbakitzaileak zuzenean kendu ditzakegu.`,
                `${num1}/${den1} - ${num2}/${den1} = (${num1} - ${num2})/${den1} = ${num1 - num2}/${den1}`
            ];
        } else {
            // Si los denominadores son diferentes, necesitamos encontrar el MCM
            const mcm = calcularMCM(den1, den2);
            const factor1 = mcm / den1;
            const factor2 = mcm / den2;
            
            const nuevoNum1 = num1 * factor1;
            const nuevoNum2 = num2 * factor2;
            
            resultado.numerador = nuevoNum1 - nuevoNum2;
            resultado.denominador = mcm;
            
            resultado.pasos = [
                `Zatikiek izendatzaile desberdinak dituzte, beraz, izendatzaile komuna aurkitu behar dugu.`,
                `${den1} eta ${den2} zenbakien MCM = ${mcm}`,
                `Lehenengo zatikia bihurtzen dugu: ${num1}/${den1} × ${factor1}/${factor1} = ${nuevoNum1}/${mcm}`,
                `Bigarren zatikia bihurtzen dugu: ${num2}/${den2} × ${factor2}/${factor2} = ${nuevoNum2}/${mcm}`,
                `Orain izendatzaile berdinarekin: ${nuevoNum1}/${mcm} - ${nuevoNum2}/${mcm} = (${nuevoNum1} - ${nuevoNum2})/${mcm} = ${resultado.numerador}/${mcm}`
            ];
        }
        
        // Simplificar el resultado
        const resultadoSimplificado = simplificarFraccion(resultado.numerador, resultado.denominador);
        
        if (resultadoSimplificado.error) {
            return { error: resultadoSimplificado.error };
        }
        
        resultado.numeradorSimplificado = resultadoSimplificado.numerador;
        resultado.denominadorSimplificado = resultadoSimplificado.denominador;
        
        if (resultado.numerador !== resultado.numeradorSimplificado || resultado.denominador !== resultado.denominadorSimplificado) {
            resultado.pasos.push(`Emaitza sinplifikatzen dugu: ${resultado.numerador}/${resultado.denominador} = ${resultado.numeradorSimplificado}/${resultado.denominadorSimplificado}`);
        }
        
        return resultado;
    }
    
    // Multiplicar fracciones
    function multiplicarFracciones(num1, den1, num2, den2) {
        if (den1 === 0 || den2 === 0) {
            return { error: 'Ez da zatigarria zero zenbakiarekin' };
        }
        
        let resultado = {};
        
        resultado.numerador = num1 * num2;
        resultado.denominador = den1 * den2;
        
        resultado.pasos = [
            `Zatikien biderketan, zenbakitzaileak biderkatzen dira eta izendatzaileak biderkatzen dira.`,
            `${num1}/${den1} × ${num2}/${den2} = (${num1} × ${num2})/(${den1} × ${den2}) = ${resultado.numerador}/${resultado.denominador}`
        ];
        
        // Simplificar el resultado
        const resultadoSimplificado = simplificarFraccion(resultado.numerador, resultado.denominador);
        
        if (resultadoSimplificado.error) {
            return { error: resultadoSimplificado.error };
        }
        
        resultado.numeradorSimplificado = resultadoSimplificado.numerador;
        resultado.denominadorSimplificado = resultadoSimplificado.denominador;
        
        if (resultado.numerador !== resultado.numeradorSimplificado || resultado.denominador !== resultado.denominadorSimplificado) {
            resultado.pasos.push(`Emaitza sinplifikatzen dugu: ${resultado.numerador}/${resultado.denominador} = ${resultado.numeradorSimplificado}/${resultado.denominadorSimplificado}`);
        }
        
        return resultado;
    }
    
    // Dividir fracciones
    function dividirFracciones(num1, den1, num2, den2) {
        if (den1 === 0 || den2 === 0 || num2 === 0) {
            return { error: 'Ez da zatigarria zero zenbakiarekin' };
        }
        
        let resultado = {};
        
        resultado.numerador = num1 * den2;
        resultado.denominador = den1 * num2;
        
        resultado.pasos = [
            `Zatikien zatiketan, bigarren zatikia alderantzikatu behar dugu eta gero bidertu.`,
            `${num1}/${den1} ÷ ${num2}/${den2} = ${num1}/${den1} × ${den2}/${num2} = (${num1} × ${den2})/(${den1} × ${num2}) = ${resultado.numerador}/${resultado.denominador}`
        ];
        
        // Simplificar el resultado
        const resultadoSimplificado = simplificarFraccion(resultado.numerador, resultado.denominador);
        
        if (resultadoSimplificado.error) {
            return { error: resultadoSimplificado.error };
        }
        
        resultado.numeradorSimplificado = resultadoSimplificado.numerador;
        resultado.denominadorSimplificado = resultadoSimplificado.denominador;
        
        if (resultado.numerador !== resultado.numeradorSimplificado || resultado.denominador !== resultado.denominadorSimplificado) {
            resultado.pasos.push(`Emaitza sinplifikatzen dugu: ${resultado.numerador}/${resultado.denominador} = ${resultado.numeradorSimplificado}/${resultado.denominadorSimplificado}`);
        }
        
        return resultado;
    }
    
    // ******** SIMPLIFICACIÓN DE FRACCIONES ********
    
    function generarPasosSimplificacion(numerador, denominador) {
        if (numerador === 0) {
            return [`Zenbakitzailea 0 denez, zatikia 0/1 da.`];
        }
        
        const pasos = [];
        let num = Math.abs(numerador);
        let den = Math.abs(denominador);
        let signoTexto = '';
        
        if ((numerador < 0 && denominador > 0) || (numerador > 0 && denominador < 0)) {
            signoTexto = 'Zatikia negatiboa da. ';
        }
        
        // Si ya está simplificada
        if (calcularMCD(num, den) === 1) {
            pasos.push(`${signoTexto}Zatikia dagoeneko sinplifikatuta dago, ${numerador}/${denominador} ezin da gehiago sinplifikatu.`);
            return pasos;
        }
        
        pasos.push(`${signoTexto}Zatikia sinplifikatzeko, zenbakitzailearen eta izendatzailearen MKD (Zatitzaile Komun Handien) aurkitu behar dugu.`);
        
        let numActual = num;
        let denActual = den;
        let mcd = calcularMCD(num, den);
        
        pasos.push(`${numActual} eta ${denActual} zenbakien MKD = ${mcd}`);
        
        pasos.push(`Zatikia sinplifikatzeko, zenbakitzailea eta izendatzailea MKD-rekin zatitzen ditugu:`);
        pasos.push(`${numActual}/${denActual} = ${numActual}÷${mcd}/${denActual}÷${mcd} = ${numActual/mcd}/${denActual/mcd}`);
        
        return pasos;
    }
    
    // ******** COMPARACIÓN DE FRACCIONES ********
    
    function compararFracciones(num1, den1, num2, den2) {
        if (den1 === 0 || den2 === 0) {
            return { error: 'Ez da zatigarria zero zenbakiarekin' };
        }
        
        let resultado = {};
        let simbolo = '';
        let explicacion = '';
        
        // Si los denominadores son iguales, comparamos numeradores
        if (den1 === den2) {
            if (num1 > num2) {
                simbolo = '>';
                explicacion = `Zatikiek izendatzaile berdina dute (${den1}). Beraz, zenbakitzaile handiena duen zatikia handiagoa da.`;
            } else if (num1 < num2) {
                simbolo = '<';
                explicacion = `Zatikiek izendatzaile berdina dute (${den1}). Beraz, zenbakitzaile txikiena duen zatikia txikiagoa da.`;
            } else {
                simbolo = '=';
                explicacion = `Zatikiek zenbakitzaile eta izendatzaile berdinak dituzte, beraz, berdinak dira.`;
            }
        } else {
            // Si los denominadores son diferentes, convertimos a denominador común
            const mcm = calcularMCM(den1, den2);
            const factor1 = mcm / den1;
            const factor2 = mcm / den2;
            
            const nuevoNum1 = num1 * factor1;
            const nuevoNum2 = num2 * factor2;
            
            explicacion = `Zatikiek izendatzaile desberdinak dituzte, beraz, izendatzaile komuna aurkitu behar dugu konparatzeko.\n` +
                          `${den1} eta ${den2} zenbakien MCM = ${mcm}\n` +
                          `Lehenengo zatikia bihurtzen dugu: ${num1}/${den1} = ${num1}×${factor1}/${den1}×${factor1} = ${nuevoNum1}/${mcm}\n` +
                          `Bigarren zatikia bihurtzen dugu: ${num2}/${den2} = ${num2}×${factor2}/${den2}×${factor2} = ${nuevoNum2}/${mcm}\n`;
            
            if (nuevoNum1 > nuevoNum2) {
                simbolo = '>';
                explicacion += `Izendatzaile berdinarekin, ${nuevoNum1} > ${nuevoNum2} denez, ${num1}/${den1} > ${num2}/${den2}`;
            } else if (nuevoNum1 < nuevoNum2) {
                simbolo = '<';
                explicacion += `Izendatzaile berdinarekin, ${nuevoNum1} < ${nuevoNum2} denez, ${num1}/${den1} < ${num2}/${den2}`;
            } else {
                simbolo = '=';
                explicacion += `Izendatzaile berdinarekin, ${nuevoNum1} = ${nuevoNum2} denez, zatikiak berdinak dira`;
            }
        }
        
        resultado.simbolo = simbolo;
        resultado.explicacion = explicacion;
        
        return resultado;
    }
    
    // ******** FRACCIONES EQUIVALENTES ********
    
    function generarEquivalente(numerador, denominador, factor) {
        if (denominador === 0) {
            return { error: 'Ez da zatigarria zero zenbakiarekin' };
        }
        
        if (factor === 0) {
            return { error: 'Faktore bezala 0 ezin da erabili' };
        }
        
        const nuevoNumerador = numerador * factor;
        const nuevoDenominador = denominador * factor;
        
        const explicacion = `Zatiki baliokidea lortzeko, zenbakitzailea eta izendatzailea ${factor} zenbakiarekin biderkatzen ditugu.\n` +
                          `${numerador}/${denominador} × ${factor}/${factor} = ${nuevoNumerador}/${nuevoDenominador}\n` +
                          `Honek zatikiaren balioa mantentzen du: ${numerador}/${denominador} = ${nuevoNumerador}/${nuevoDenominador} = ${(numerador/denominador).toFixed(4)}`;
        
        return {
            numerador: nuevoNumerador,
            denominador: nuevoDenominador,
            explicacion: explicacion
        };
    }
    
    // ******** VISUALIZACIÓN DE FRACCIONES ********
    
    function crearVisualizacionCirculo(numerador, denominador, contenedor) {
        contenedor.innerHTML = '';
        
        // Crear un SVG para la representación circular
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 200 200");
        svg.setAttribute("width", "200");
        svg.setAttribute("height", "200");
        
        // Círculo base (completo)
        const circuloBase = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circuloBase.setAttribute("cx", "100");
        circuloBase.setAttribute("cy", "100");
        circuloBase.setAttribute("r", "90");
        circuloBase.setAttribute("fill", "none");
        circuloBase.setAttribute("stroke", "#333");
        circuloBase.setAttribute("stroke-width", "2");
        svg.appendChild(circuloBase);
        
        // Si el numerador es 0, no pintamos ninguna parte
        if (numerador === 0) {
            contenedor.appendChild(svg);
            return;
        }
        
        // Dividir el círculo en partes iguales
        const totalAngle = 360;
        const anglePerSection = totalAngle / denominador;
        
        // Pintar las secciones que representan el numerador
        for (let i = 0; i < Math.min(numerador, denominador); i++) {
            const startAngle = i * anglePerSection;
            const endAngle = (i + 1) * anglePerSection;
            
            // Calcular puntos en el círculo
            const startX = 100 + 90 * Math.cos((startAngle - 90) * Math.PI / 180);
            const startY = 100 + 90 * Math.sin((startAngle - 90) * Math.PI / 180);
            const endX = 100 + 90 * Math.cos((endAngle - 90) * Math.PI / 180);
            const endY = 100 + 90 * Math.sin((endAngle - 90) * Math.PI / 180);
            
            // Crear path para el segmento
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            
            // Flag para determinar si el arco es mayor a 180 grados
            const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
            
            // Construir el path
            const d = [
                `M 100 100`,
                `L ${startX} ${startY}`,
                `A 90 90 0 ${largeArcFlag} 1 ${endX} ${endY}`,
                `Z`
            ].join(' ');
            
            path.setAttribute("d", d);
            path.setAttribute("fill", "#4a90e2");
            path.setAttribute("stroke", "#333");
            path.setAttribute("stroke-width", "1");
            svg.appendChild(path);
        }
        
        // Agregar líneas divisorias
        for (let i = 0; i < denominador; i++) {
            const angle = i * anglePerSection;
            const lineX = 100 + 90 * Math.cos((angle - 90) * Math.PI / 180);
            const lineY = 100 + 90 * Math.sin((angle - 90) * Math.PI / 180);
            
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", "100");
            line.setAttribute("y1", "100");
            line.setAttribute("x2", lineX);
            line.setAttribute("y2", lineY);
            line.setAttribute("stroke", "#333");
            line.setAttribute("stroke-width", "1");
            svg.appendChild(line);
        }
        
        contenedor.appendChild(svg);
    }
    
    function crearVisualizacionRectangulo(numerador, denominador, contenedor) {
        contenedor.innerHTML = '';
        
        // Crear un SVG para la representación rectangular
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 300 100");
        svg.setAttribute("width", "300");
        svg.setAttribute("height", "100");
        
        // Rectángulo base
        const rectBase = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rectBase.setAttribute("x", "10");
        rectBase.setAttribute("y", "10");
        rectBase.setAttribute("width", "280");
        rectBase.setAttribute("height", "60");
        rectBase.setAttribute("fill", "none");
        rectBase.setAttribute("stroke", "#333");
        rectBase.setAttribute("stroke-width", "2");
        svg.appendChild(rectBase);
        
        // Dividir el rectángulo en partes iguales
        const widthPerSection = 280 / denominador;
        
        // Pintar las secciones que representan el numerador
        for (let i = 0; i < Math.min(numerador, denominador); i++) {
            const rectPart = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            rectPart.setAttribute("x", 10 + i * widthPerSection);
            rectPart.setAttribute("y", "10");
            rectPart.setAttribute("width", widthPerSection);
            rectPart.setAttribute("height", "60");
            rectPart.setAttribute("fill", "#4a90e2");
            rectPart.setAttribute("stroke", "#333");
            rectPart.setAttribute("stroke-width", "1");
            svg.appendChild(rectPart);
        }
        
        // Agregar líneas divisorias
        for (let i = 1; i < denominador; i++) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", 10 + i * widthPerSection);
            line.setAttribute("y1", "10");
            line.setAttribute("x2", 10 + i * widthPerSection);
            line.setAttribute("y2", "70");
            line.setAttribute("stroke", "#333");
            line.setAttribute("stroke-width", "1");
            svg.appendChild(line);
        }
        
        contenedor.appendChild(svg);
    }
    
    // ******** MANEJADORES DE EVENTOS DE UI ********

    // Configuración de pestañas
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Eliminar clase activa de todas las pestañas y contenidos
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Agregar clase activa a la pestaña seleccionada
            tab.classList.add('active');
            
            // Activar el contenido correspondiente
            const tabName = tab.getAttribute('data-tab');
            document.getElementById(`${tabName}-tab`).classList.add('active');
        });
    });

    // *** OPERACIONES CON FRACCIONES ***
    const calcularOperacionBtn = document.getElementById('calcular-operacion');
    calcularOperacionBtn.addEventListener('click', () => {
        const num1 = parseInt(document.getElementById('num1').value);
        const den1 = parseInt(document.getElementById('den1').value);
        const num2 = parseInt(document.getElementById('num2').value);
        const den2 = parseInt(document.getElementById('den2').value);
        const operacion = document.getElementById('operacion').value;
        
        const resultadoContainer = document.getElementById('resultado-operacion');
        const resultadoValor = document.getElementById('resultado-valor');
        const pasosOperacion = document.getElementById('pasos-operacion');
        const explicacionOperacion = document.getElementById('explicacion-operacion');
        
        // Verificar que los inputs sean válidos
        if (!validarInput(num1) || !validarInput(den1) || !validarInput(num2) || !validarInput(den2)) {
            resultadoContainer.style.display = 'block';
            resultadoValor.innerHTML = '<div class="error-mensaje">Mesedez, sartu zenbaki baliagarriak</div>';
            pasosOperacion.innerHTML = '';
            explicacionOperacion.innerHTML = '';
            return;
        }
        
        let resultado;
        let explicacion = '';
        
        switch (operacion) {
            case 'suma':
                resultado = sumarFracciones(num1, den1, num2, den2);
                explicacion = 'Bi zatiki batzen direnean, izendatzaile komuna aurkitu behar dugu eta gero zenbakitzaileak batzen ditugu.';
                break;
            case 'resta':
                resultado = restarFracciones(num1, den1, num2, den2);
                explicacion = 'Bi zatiki kentzen direnean, izendatzaile komuna aurkitu behar dugu eta gero zenbakitzaileak kentzen ditugu.';
                break;
            case 'multiplicacion':
                resultado = multiplicarFracciones(num1, den1, num2, den2);
                explicacion = 'Bi zatiki biderkatzen direnean, zenbakitzaileak elkarrekin biderkatzen dira eta izendatzaileak elkarrekin biderkatzen dira.';
                break;
            case 'division':
                resultado = dividirFracciones(num1, den1, num2, den2);
                explicacion = 'Bi zatiki zatitzen direnean, lehenengo zatikia bigarren zatikiaren alderantzizkoaz biderkatzen dugu.';
                break;
        }
        
        resultadoContainer.style.display = 'block';
        
        if (resultado.error) {
            resultadoValor.innerHTML = `<div class="error-mensaje">${resultado.error}</div>`;
            pasosOperacion.innerHTML = '';
            explicacionOperacion.innerHTML = '';
        } else {
            const formatoResultadoSimplificado = formatearFraccion(resultado.numeradorSimplificado, resultado.denominadorSimplificado);
            
            resultadoValor.innerHTML = `<span class="fraccion-simplificada">${formatoResultadoSimplificado}</span>`;
            
            // Mostrar pasos
            pasosOperacion.innerHTML = '';
            resultado.pasos.forEach(paso => {
                const pasoElement = document.createElement('div');
                pasoElement.className = 'paso';
                pasoElement.textContent = paso;
                pasosOperacion.appendChild(pasoElement);
            });
            
            explicacionOperacion.innerHTML = explicacion;
        }
    });

    // *** SIMPLIFICACIÓN DE FRACCIONES ***
    const calcularSimplificacionBtn = document.getElementById('calcular-simplificacion');
    calcularSimplificacionBtn.addEventListener('click', () => {
        const num = parseInt(document.getElementById('num-simplificar').value);
        const den = parseInt(document.getElementById('den-simplificar').value);
        
        const resultadoContainer = document.getElementById('resultado-simplificacion');
        const resultadoSimplificado = document.getElementById('resultado-simplificado');
        const pasosSimplificacion = document.getElementById('pasos-simplificacion');
        
        // Verificar que los inputs sean válidos
        if (!validarInput(num) || !validarInput(den)) {
            resultadoContainer.style.display = 'block';
            resultadoSimplificado.innerHTML = '<div class="error-mensaje">Mesedez, sartu zenbaki baliagarriak</div>';
            pasosSimplificacion.innerHTML = '';
            return;
        }
        
        if (den === 0) {
            resultadoContainer.style.display = 'block';
            resultadoSimplificado.innerHTML = '<div class="error-mensaje">Ez da zatigarria zero zenbakiarekin</div>';
            pasosSimplificacion.innerHTML = '';
            return;
        }
        
        const resultado = simplificarFraccion(num, den);
        const pasos = generarPasosSimplificacion(num, den);
        
        resultadoContainer.style.display = 'block';
        
        resultadoSimplificado.innerHTML = `<span class="fraccion-simplificada">${formatearFraccion(resultado.numerador, resultado.denominador)}</span>`;
        
        // Mostrar pasos
        pasosSimplificacion.innerHTML = '';
        pasos.forEach(paso => {
            const pasoElement = document.createElement('div');
            pasoElement.className = 'paso';
            pasoElement.textContent = paso;
            pasosSimplificacion.appendChild(pasoElement);
        });
    });

    // *** COMPARACIÓN DE FRACCIONES ***
    const calcularComparacionBtn = document.getElementById('calcular-comparacion');
    calcularComparacionBtn.addEventListener('click', () => {
        const num1 = parseInt(document.getElementById('num-comp1').value);
        const den1 = parseInt(document.getElementById('den-comp1').value);
        const num2 = parseInt(document.getElementById('num-comp2').value);
        const den2 = parseInt(document.getElementById('den-comp2').value);
        
        const resultadoContainer = document.getElementById('resultado-comparacion');
        const fraccionComp1 = document.getElementById('fraccion-comp1');
        const simboloComparacion = document.getElementById('simbolo-comparacion');
        const fraccionComp2 = document.getElementById('fraccion-comp2');
        const explicacionComparacion = document.getElementById('explicacion-comparacion');
        
        // Verificar que los inputs sean válidos
        if (!validarInput(num1) || !validarInput(den1) || !validarInput(num2) || !validarInput(den2)) {
            resultadoContainer.style.display = 'block';
            simboloComparacion.innerHTML = '<div class="error-mensaje">Mesedez, sartu zenbaki baliagarriak</div>';
            fraccionComp1.textContent = '';
            fraccionComp2.textContent = '';
            explicacionComparacion.innerHTML = '';
            return;
        }
        
        if (den1 === 0 || den2 === 0) {
            resultadoContainer.style.display = 'block';
            simboloComparacion.innerHTML = '<div class="error-mensaje">Ez da zatigarria zero zenbakiarekin</div>';
            fraccionComp1.textContent = '';
            fraccionComp2.textContent = '';
            explicacionComparacion.innerHTML = '';
            return;
        }
        
        const resultado = compararFracciones(num1, den1, num2, den2);
        
        resultadoContainer.style.display = 'block';
        
        fraccionComp1.textContent = formatearFraccion(num1, den1);
        simboloComparacion.textContent = resultado.simbolo;
        fraccionComp2.textContent = formatearFraccion(num2, den2);
        explicacionComparacion.innerHTML = resultado.explicacion.replace(/\n/g, '<br>');
    });

    // *** FRACCIONES EQUIVALENTES ***
    const calcularEquivalenciaBtn = document.getElementById('calcular-equivalencia');
    calcularEquivalenciaBtn.addEventListener('click', () => {
        const num = parseInt(document.getElementById('num-equiv').value);
        const den = parseInt(document.getElementById('den-equiv').value);
        const factor = parseInt(document.getElementById('factor-equiv').value);
        
        const resultadoContainer = document.getElementById('resultado-equivalencia');
        const resultadoEquiv = document.getElementById('resultado-equiv');
        const explicacionEquiv = document.getElementById('explicacion-equiv');
        
        // Verificar que los inputs sean válidos
        if (!validarInput(num) || !validarInput(den) || !validarInput(factor)) {
            resultadoContainer.style.display = 'block';
            resultadoEquiv.innerHTML = '<div class="error-mensaje">Mesedez, sartu zenbaki baliagarriak</div>';
            explicacionEquiv.innerHTML = '';
            return;
        }
        
        const resultado = generarEquivalente(num, den, factor);
        
        resultadoContainer.style.display = 'block';
        
        if (resultado.error) {
            resultadoEquiv.innerHTML = `<div class="error-mensaje">${resultado.error}</div>`;
            explicacionEquiv.innerHTML = '';
        } else {
            resultadoEquiv.innerHTML = `${formatearFraccion(resultado.numerador, resultado.denominador)}`;
            explicacionEquiv.innerHTML = resultado.explicacion.replace(/\n/g, '<br>');
        }
    });

    // *** VISUALIZACIÓN DE FRACCIONES ***
    const mostrarVisualBtn = document.getElementById('mostrar-visual');
    mostrarVisualBtn.addEventListener('click', () => {
        const num = parseInt(document.getElementById('num-visual').value);
        const den = parseInt(document.getElementById('den-visual').value);
        const tipoVisual = document.getElementById('tipo-visual').value;
        
        const resultadoContainer = document.getElementById('resultado-visual');
        const fraccionRepresentacion = document.getElementById('fraccion-representacion');
        const fraccionTextoVisual = document.getElementById('fraccion-texto-visual');
        const explicacionVisual = document.getElementById('explicacion-visual');
        
        // Verificar que los inputs sean válidos
        if (!validarInput(num) || !validarInput(den)) {
            resultadoContainer.style.display = 'block';
            explicacionVisual.innerHTML = '<div class="error-mensaje">Mesedez, sartu zenbaki baliagarriak</div>';
            fraccionRepresentacion.innerHTML = '';
            fraccionTextoVisual.textContent = '';
            return;
        }
        
        if (den <= 0) {
            resultadoContainer.style.display = 'block';
            explicacionVisual.innerHTML = '<div class="error-mensaje">Izendatzaileak positiboa izan behar du</div>';
            fraccionRepresentacion.innerHTML = '';
            fraccionTextoVisual.textContent = '';
            return;
        }
        
        if (num > den * 2) {
            resultadoContainer.style.display = 'block';
            explicacionVisual.innerHTML = '<div class="error-mensaje">Zenbakitzailea handiegia da bisualizatzeko. Saiatu zenbakitzaile txikiagoarekin edo izendatzaile handiagoarekin.</div>';
            fraccionRepresentacion.innerHTML = '';
            fraccionTextoVisual.textContent = '';
            return;
        }
        
        resultadoContainer.style.display = 'block';
        
        if (tipoVisual === 'circulo') {
            crearVisualizacionCirculo(num, den, fraccionRepresentacion);
            explicacionVisual.innerHTML = `Zirkulua ${den} zati berdinetan banatuta dago, eta horietatik ${num} zati markatuta daude.`;
        } else {
            crearVisualizacionRectangulo(num, den, fraccionRepresentacion);
            explicacionVisual.innerHTML = `Laukizuzena ${den} zati berdinetan banatuta dago, eta horietatik ${num} zati markatuta daude.`;
        }
        
        fraccionTextoVisual.textContent = formatearFraccion(num, den);
    });
});

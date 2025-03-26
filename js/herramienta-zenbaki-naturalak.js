document.addEventListener('DOMContentLoaded', () => {
    // DOM elementuak
    const operacionSelect = document.getElementById('operacion');
    const dificultadSelect = document.getElementById('dificultad');
    const generarEjercicioBtn = document.getElementById('generar-ejercicio');
    const problemaMatematico = document.getElementById('problema-matematico');
    const comprobarRespuestaBtn = document.getElementById('comprobar-respuesta');
    const mostrarSolucionBtn = document.getElementById('mostrar-solucion');
    const mensajeResultado = document.getElementById('mensaje-resultado');
    const explicacionSolucion = document.getElementById('explicacion-solucion');
    
    // Uneko ariketa gordetzeko aldagaiak
    let ejercicioActual = {
        num1: 0,
        num2: 0,
        num3: null,
        op1: '+',
        op2: null,
        resultadoCorrecto: 0,
        tieneParentesis: false
    };

    // Zailtasunaren arabera zenbakiak sortzeko
    function generarNumero(dificultad) {
        switch(dificultad) {
            case 'erraza':
                return Math.floor(Math.random() * 11); // 0-10 arteko zenbakiak
            case 'ertaina':
                return Math.floor(Math.random() * 51); // 0-50 arteko zenbakiak
            case 'zaila':
                return Math.floor(Math.random() * 101); // 0-100 arteko zenbakiak
        }
    }

    // Ariketa sortu
    function generarEjercicio() {
        const operacion = operacionSelect.value;
        const dificultad = dificultadSelect.value;
        
        // Aurreko edukia garbitu
        problemaMatematico.innerHTML = '';
        
        // Oinarrizko elementuak sortu
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
        respuesta.placeholder = 'Zure erantzuna';
        respuesta.classList.add('form-control');

        // Aurreko emaitzak garbitu
        mensajeResultado.textContent = '';
        explicacionSolucion.textContent = '';

        // Eragiketaren arabera ariketa sortu
        let num1, num2, resultadoCorrecto;
        
        switch(operacion) {
            case 'batuketa':
                // Batuketa: edozein zenbaki natural + natural = natural
                num1 = generarNumero(dificultad);
                num2 = generarNumero(dificultad);
                resultadoCorrecto = num1 + num2;
                operador1.textContent = '+';
                break;
            case 'kenketa':
                // Kenketa: zenbaki handiagoa - txikiagoa = natural
                num1 = generarNumero(dificultad);
                // Num2 txikiagoa izan behar da num1 baino, emaitza naturala izateko
                num2 = Math.min(num1, generarNumero(dificultad));
                resultadoCorrecto = num1 - num2;
                operador1.textContent = '−';
                break;
            case 'biderketa':
                // Biderketa: edozein zenbaki natural * natural = natural
                num1 = generarNumero(dificultad);
                num2 = generarNumero(dificultad);
                resultadoCorrecto = num1 * num2;
                operador1.textContent = '×';
                break;
            case 'zatiketa':
                // Zatiketa: emaitza osoa izan behar da
                // Lehenengo zatitzailea sortu (zero ez dena)
                do {
                    num2 = generarNumero(dificultad);
                } while (num2 === 0);
                
                // Zatidura osoa sortu
                let zatidura = generarNumero(dificultad);
                if (zatidura === 0) zatidura = 1; // Zatidura zero ez izateko
                
                // Zatikizuna kalkulatu zatiketa zehatza izateko
                num1 = num2 * zatidura;
                resultadoCorrecto = zatidura;
                operador1.textContent = '÷';
                break;
            case 'eragiketa-konbinatuak':
                // Eragiketa konbinatuak sortu
                ejercicioActual.tieneParentesis = Math.random() < 0.5;
                
                // Ausazko operadoreak sortu (zatiketa saihestu, sinplifikatzeko)
                const operadoreak = ['+', '−', '×'];
                ejercicioActual.op1 = operadoreak[Math.floor(Math.random() * operadoreak.length)];
                ejercicioActual.op2 = operadoreak[Math.floor(Math.random() * operadoreak.length)];
                
                // Ausazko zenbakiak sortu
                num1 = generarNumero(dificultad);
                num2 = generarNumero(dificultad);
                const num3 = generarNumero(dificultad);
                
                // Bitarteko emaitza eta azken emaitza kalkulatu
                let resultadoIntermedio;
                
                // Lehen eragiketa kalkulatu
                switch(ejercicioActual.op1) {
                    case '+': resultadoIntermedio = num1 + num2; break;
                    case '−': 
                        // Kenketa denean, num1 >= num2 izan behar da
                        if (num1 < num2) {
                            let temp = num1;
                            num1 = num2;
                            num2 = temp;
                        }
                        resultadoIntermedio = num1 - num2; 
                        break;
                    case '×': resultadoIntermedio = num1 * num2; break;
                }
                
                // Bigarren eragiketa kalkulatu
                switch(ejercicioActual.op2) {
                    case '+': resultadoCorrecto = resultadoIntermedio + num3; break;
                    case '−': 
                        // Kenketa denean, resultadoIntermedio >= num3 izan behar da
                        if (resultadoIntermedio < num3) {
                            // Num3 txikiago bat aukeratu
                            num3 = Math.floor(resultadoIntermedio * Math.random());
                        }
                        resultadoCorrecto = resultadoIntermedio - num3; 
                        break;
                    case '×': resultadoCorrecto = resultadoIntermedio * num3; break;
                }
                
                // Eragiketa konbinatuekin ariketa sortu
                numero1.textContent = num1;
                operador1.textContent = ejercicioActual.op1;
                numero2.textContent = num2;
                
                const operador2 = document.createElement('span');
                operador2.id = 'operador2';
                operador2.textContent = ejercicioActual.op2;
                
                const numero3 = document.createElement('span');
                numero3.id = 'numero3';
                numero3.textContent = num3;
                
                if (ejercicioActual.tieneParentesis) {
                    // Parentesiak gehitu
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
                
                // Ariketaren datuak gorde
                ejercicioActual.num1 = num1;
                ejercicioActual.num2 = num2;
                ejercicioActual.num3 = num3;
                ejercicioActual.resultadoCorrecto = resultadoCorrecto;
                
                // Enter tekla entzuteko
                respuesta.addEventListener('keypress', function(event) {
                    if (event.key === 'Enter') {
                        comprobarRespuesta();
                    }
                });
                
                // Erantzun inputa fokusatu
                respuesta.focus();
                
                return; // Irten ariketa osoa eraiki dugulako
        }
        
        // Eragiketa sinpleentzat (ez konbinatuak)
        numero1.textContent = num1;
        numero2.textContent = num2;
        
        problemaMatematico.append(numero1, operador1, numero2, igual, respuesta);
        
        // Ariketaren datuak gorde
        ejercicioActual.num1 = num1;
        ejercicioActual.num2 = num2;
        ejercicioActual.op1 = operador1.textContent;
        ejercicioActual.resultadoCorrecto = resultadoCorrecto;
        
        // Enter tekla entzuteko
        respuesta.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                comprobarRespuesta();
            }
        });
        
        // Erantzun inputa fokusatu
        respuesta.focus();
    }

    // Erantzuna egiaztatu
    function comprobarRespuesta() {
        // Uneko erantzun inputa lortu
        const respuestaInput = document.getElementById('respuesta-usuario');
        
        // Erantzuna sartu den egiaztatu
        const valorRespuesta = respuestaInput.value.trim();
        if (!valorRespuesta) {
            mensajeResultado.textContent = 'Mesedez, sartu erantzun bat';
            mensajeResultado.style.color = 'red';
            respuestaInput.focus();
            return;
        }

        // Erantzunak alderatu
        const respuestaUsuario = parseInt(valorRespuesta);
        
        if (respuestaUsuario === ejercicioActual.resultadoCorrecto) {
            mensajeResultado.textContent = '¡Erantzun ZUZENA!';
            mensajeResultado.style.color = 'green';
        } else {
            mensajeResultado.textContent = 'EZ DA ZUZENA! Saiatu berriro';
            mensajeResultado.style.color = 'red';
        }
        
        // Azalpena erakutsi
        const operacion = operacionSelect.value;
        let explicacion;
        
        if (operacion === 'eragiketa-konbinatuak') {
            // Azalpena eraiki parentesiak kontuan hartuz
            if (ejercicioActual.tieneParentesis) {
                explicacion = `(${ejercicioActual.num1} ${ejercicioActual.op1} ${ejercicioActual.num2}) ${ejercicioActual.op2} ${ejercicioActual.num3} = ${ejercicioActual.resultadoCorrecto}`;
            } else {
                explicacion = `${ejercicioActual.num1} ${ejercicioActual.op1} ${ejercicioActual.num2} ${ejercicioActual.op2} ${ejercicioActual.num3} = ${ejercicioActual.resultadoCorrecto}`;
            }
        } else {
            switch(operacion) {
                case 'batuketa':
                    explicacion = `${ejercicioActual.num1} + ${ejercicioActual.num2} = ${ejercicioActual.resultadoCorrecto}`;
                    break;
                case 'kenketa':
                    explicacion = `${ejercicioActual.num1} − ${ejercicioActual.num2} = ${ejercicioActual.resultadoCorrecto}`;
                    break;
                case 'biderketa':
                    explicacion = `${ejercicioActual.num1} × ${ejercicioActual.num2} = ${ejercicioActual.resultadoCorrecto}`;
                    break;
                case 'zatiketa':
                    explicacion = `${ejercicioActual.num1} ÷ ${ejercicioActual.num2} = ${ejercicioActual.resultadoCorrecto}`;
                    break;
            }
        }
        
        explicacionSolucion.textContent = explicacion;
    }

    // Soluzioa erakutsi
    function mostrarSolucion() {
        const respuestaInput = document.getElementById('respuesta-usuario');
        respuestaInput.value = ejercicioActual.resultadoCorrecto;
        
        mensajeResultado.textContent = 'Soluzioa erakutsita';
        mensajeResultado.style.color = 'blue';
        
        // Azalpena erakutsi
        const operacion = operacionSelect.value;
        let explicacion;
        
        if (operacion === 'eragiketa-konbinatuak') {
            // Azalpena eraiki parentesiak kontuan hartuz
            if (ejercicioActual.tieneParentesis) {
                explicacion = `(${ejercicioActual.num1} ${ejercicioActual.op1} ${ejercicioActual.num2}) ${ejercicioActual.op2} ${ejercicioActual.num3} = ${ejercicioActual.resultadoCorrecto}`;
            } else {
                explicacion = `${ejercicioActual.num1} ${ejercicioActual.op1} ${ejercicioActual.num2} ${ejercicioActual.op2} ${ejercicioActual.num3} = ${ejercicioActual.resultadoCorrecto}`;
            }
        } else {
            switch(operacion) {
                case 'batuketa':
                    explicacion = `${ejercicioActual.num1} + ${ejercicioActual.num2} = ${ejercicioActual.resultadoCorrecto}`;
                    break;
                case 'kenketa':
                    explicacion = `${ejercicioActual.num1} − ${ejercicioActual.num2} = ${ejercicioActual.resultadoCorrecto}`;
                    break;
                case 'biderketa':
                    explicacion = `${ejercicioActual.num1} × ${ejercicioActual.num2} = ${ejercicioActual.resultadoCorrecto}`;
                    break;
                case 'zatiketa':
                    explicacion = `${ejercicioActual.num1} ÷ ${ejercicioActual.num2} = ${ejercicioActual.resultadoCorrecto}`;
                    break;
            }
        }
        
        explicacionSolucion.textContent = explicacion;
    }

    // Eragiketa konbinatuak gehitzeko aukera
    const opcionEragiketaKonbinatuak = document.createElement('option');
    opcionEragiketaKonbinatuak.value = 'eragiketa-konbinatuak';
    opcionEragiketaKonbinatuak.textContent = 'Eragiketa Konbinatuak';
    operacionSelect.appendChild(opcionEragiketaKonbinatuak);

    // Event Listeners
    generarEjercicioBtn.addEventListener('click', generarEjercicio);
    comprobarRespuestaBtn.addEventListener('click', comprobarRespuesta);
    mostrarSolucionBtn.addEventListener('click', mostrarSolucion);

    // Lehenengo ariketa sortu kargatzean
    generarEjercicio();
});

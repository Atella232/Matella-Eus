document.addEventListener('DOMContentLoaded', () => {
    // PLANO CARTESIANO INTERACTIVO
    // ===========================
    
    // Elementos del DOM para el plano cartesiano
    const tipoEjercicioSelect = document.getElementById('tipo-ejercicio');
    const dificultadSelect = document.getElementById('dificultad');
    const generarEjercicioBtn = document.getElementById('generar-ejercicio');
    const descripcionEjercicio = document.getElementById('descripcion-ejercicio');
    const planoCartesiano = document.getElementById('plano-cartesiano');
    const respuestaContenedor = document.getElementById('respuesta-contenedor');
    const respuestaInput = document.getElementById('respuesta-usuario');
    const comprobarRespuestaBtn = document.getElementById('comprobar-respuesta');
    const mostrarSolucionBtn = document.getElementById('mostrar-solucion');
    const mensajeResultado = document.getElementById('mensaje-resultado');
    const explicacionSolucion = document.getElementById('explicacion-solucion');
    
    // Variables para el ejercicio actual
    let ejercicioActual = {
        tipo: '',
        puntos: [],
        respuestaCorrecta: '',
        coordenadasUsuario: []
    };
    
    // Constantes para el plano cartesiano
    const PLANO_WIDTH = 400;
    const PLANO_HEIGHT = 400;
    const MARGIN = 40; // Margen para los ejes
    const GRID_SIZE = 40; // Tamaño de la cuadrícula
    const ORIGIN_X = PLANO_WIDTH / 2;
    const ORIGIN_Y = PLANO_HEIGHT / 2;
    
    // Función para dibujar el plano cartesiano
    function dibujarPlanoCartesiano() {
        // Limpiar el plano
        planoCartesiano.innerHTML = '';
        
        // Crear el SVG
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', PLANO_WIDTH);
        svg.setAttribute('height', PLANO_HEIGHT);
        svg.style.border = '1px solid #ccc';
        svg.style.backgroundColor = '#f9f9f9';
        
        // Dibujar la cuadrícula
        for (let x = GRID_SIZE; x < PLANO_WIDTH; x += GRID_SIZE) {
            // Líneas verticales
            const lineaVertical = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            lineaVertical.setAttribute('x1', x);
            lineaVertical.setAttribute('y1', 0);
            lineaVertical.setAttribute('x2', x);
            lineaVertical.setAttribute('y2', PLANO_HEIGHT);
            lineaVertical.setAttribute('stroke', '#ddd');
            lineaVertical.setAttribute('stroke-width', '1');
            svg.appendChild(lineaVertical);
            
            // Líneas horizontales
            const lineaHorizontal = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            lineaHorizontal.setAttribute('x1', 0);
            lineaHorizontal.setAttribute('y1', x);
            lineaHorizontal.setAttribute('x2', PLANO_WIDTH);
            lineaHorizontal.setAttribute('y2', x);
            lineaHorizontal.setAttribute('stroke', '#ddd');
            lineaHorizontal.setAttribute('stroke-width', '1');
            svg.appendChild(lineaHorizontal);
        }
        
        // Dibujar ejes
        // Eje X
        const ejeX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ejeX.setAttribute('x1', 0);
        ejeX.setAttribute('y1', ORIGIN_Y);
        ejeX.setAttribute('x2', PLANO_WIDTH);
        ejeX.setAttribute('y2', ORIGIN_Y);
        ejeX.setAttribute('stroke', '#000');
        ejeX.setAttribute('stroke-width', '2');
        svg.appendChild(ejeX);
        
        // Eje Y
        const ejeY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ejeY.setAttribute('x1', ORIGIN_X);
        ejeY.setAttribute('y1', 0);
        ejeY.setAttribute('x2', ORIGIN_X);
        ejeY.setAttribute('y2', PLANO_HEIGHT);
        ejeY.setAttribute('stroke', '#000');
        ejeY.setAttribute('stroke-width', '2');
        svg.appendChild(ejeY);
        
        // Añadir números a los ejes
        const MAX_NUM = 4; // Número máximo mostrado en cada eje (positivo y negativo)
        
        // Números en eje X
        for (let i = -MAX_NUM; i <= MAX_NUM; i++) {
            if (i === 0) continue; // Saltar el origen
            
            const x = ORIGIN_X + i * GRID_SIZE;
            
            // Marca en el eje
            const tickX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            tickX.setAttribute('x1', x);
            tickX.setAttribute('y1', ORIGIN_Y - 5);
            tickX.setAttribute('x2', x);
            tickX.setAttribute('y2', ORIGIN_Y + 5);
            tickX.setAttribute('stroke', '#000');
            tickX.setAttribute('stroke-width', '2');
            svg.appendChild(tickX);
            
            // Número
            const textX = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textX.setAttribute('x', x);
            textX.setAttribute('y', ORIGIN_Y + 20);
            textX.setAttribute('text-anchor', 'middle');
            textX.setAttribute('font-size', '12px');
            textX.textContent = i.toString();
            svg.appendChild(textX);
        }
        
        // Números en eje Y
        for (let i = -MAX_NUM; i <= MAX_NUM; i++) {
            if (i === 0) continue; // Saltar el origen
            
            const y = ORIGIN_Y - i * GRID_SIZE;
            
            // Marca en el eje
            const tickY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            tickY.setAttribute('x1', ORIGIN_X - 5);
            tickY.setAttribute('y1', y);
            tickY.setAttribute('x2', ORIGIN_X + 5);
            tickY.setAttribute('y2', y);
            tickY.setAttribute('stroke', '#000');
            tickY.setAttribute('stroke-width', '2');
            svg.appendChild(tickY);
            
            // Número
            const textY = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textY.setAttribute('x', ORIGIN_X - 20);
            textY.setAttribute('y', y + 5);
            textY.setAttribute('text-anchor', 'middle');
            textY.setAttribute('font-size', '12px');
            textY.textContent = i.toString();
            svg.appendChild(textY);
        }
        
        // Añadir origen (0,0)
        const textoOrigen = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        textoOrigen.setAttribute('x', ORIGIN_X + 10);
        textoOrigen.setAttribute('y', ORIGIN_Y + 20);
        textoOrigen.setAttribute('font-size', '12px');
        textoOrigen.textContent = '0';
        svg.appendChild(textoOrigen);
        
        // Añadir etiquetas para los ejes
        const labelX = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        labelX.setAttribute('x', PLANO_WIDTH - 15);
        labelX.setAttribute('y', ORIGIN_Y - 10);
        labelX.setAttribute('font-size', '16px');
        labelX.setAttribute('font-weight', 'bold');
        labelX.textContent = 'X';
        svg.appendChild(labelX);
        
        const labelY = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        labelY.setAttribute('x', ORIGIN_X + 10);
        labelY.setAttribute('y', 15);
        labelY.setAttribute('font-size', '16px');
        labelY.setAttribute('font-weight', 'bold');
        labelY.textContent = 'Y';
        svg.appendChild(labelY);
        
        // Añadir el SVG al plano
        planoCartesiano.appendChild(svg);
        
        return svg;
    }
    
    // Función para convertir coordenadas del plano cartesiano a coordenadas del SVG
    function coordsToSVG(x, y) {
        return {
            x: ORIGIN_X + x * GRID_SIZE,
            y: ORIGIN_Y - y * GRID_SIZE
        };
    }
    
    // Función para convertir coordenadas del SVG a coordenadas del plano cartesiano
    function SVGToCoords(x, y) {
        return {
            x: Math.round((x - ORIGIN_X) / GRID_SIZE),
            y: Math.round((ORIGIN_Y - y) / GRID_SIZE)
        };
    }
    
    // Función para generar un número aleatorio en un rango
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Función para generar un punto aleatorio según la dificultad
    function generarPuntoAleatorio(dificultad) {
        let rangoX, rangoY;
        
        switch(dificultad) {
            case 'facil':
                rangoX = 3; // -3 a 3
                rangoY = 3; // -3 a 3
                break;
            case 'medio':
                rangoX = 4; // -4 a 4
                rangoY = 4; // -4 a 4
                break;
            case 'dificil':
                rangoX = 5; // -5 a 5
                rangoY = 5; // -5 a 5
                break;
            default:
                rangoX = 3;
                rangoY = 3;
        }
        
        return {
            x: randomInt(-rangoX, rangoX),
            y: randomInt(-rangoY, rangoY)
        };
    }
    
    // Función para dibujar un punto en el plano
    function dibujarPunto(svg, x, y, color = 'red', radio = 5, id = null) {
        const coords = coordsToSVG(x, y);
        
        const punto = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        punto.setAttribute('cx', coords.x);
        punto.setAttribute('cy', coords.y);
        punto.setAttribute('r', radio);
        punto.setAttribute('fill', color);
        if (id) {
            punto.setAttribute('id', id);
        }
        
        svg.appendChild(punto);
        
        return punto;
    }
    
    // Función para añadir una etiqueta a un punto
    function etiquetarPunto(svg, x, y, etiqueta, offsetX = 10, offsetY = -10) {
        const coords = coordsToSVG(x, y);
        
        const texto = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        texto.setAttribute('x', coords.x + offsetX);
        texto.setAttribute('y', coords.y + offsetY);
        texto.setAttribute('font-size', '14px');
        texto.setAttribute('font-weight', 'bold');
        texto.textContent = etiqueta;
        
        svg.appendChild(texto);
        
        return texto;
    }
    
    // Función para generar un ejercicio de ubicar puntos
    function generarEjercicioUbicarPuntos(dificultad) {
        // Limpiar contenido anterior
        descripcionEjercicio.textContent = '';
        mensajeResultado.textContent = '';
        explicacionSolucion.textContent = '';
        
        // Dibujar el plano cartesiano
        const svg = dibujarPlanoCartesiano();
        
        // Generar un punto aleatorio
        const punto = generarPuntoAleatorio(dificultad);
        
        // Guardar el punto en el ejercicio actual
        ejercicioActual.tipo = 'ubicar-puntos';
        ejercicioActual.puntos = [punto];
        ejercicioActual.respuestaCorrecta = `(${punto.x}, ${punto.y})`;
        
        // Mostrar descripción del ejercicio
        descripcionEjercicio.textContent = `Kokatu P(${punto.x}, ${punto.y}) puntua plano kartesiarrean, posizio zuzenean klik eginez.`;
        
        // Preparar el contenedor de respuesta
        respuestaContenedor.style.display = 'none';
        
        // Añadir evento de clic al SVG
        svg.addEventListener('click', (e) => {
            // Obtener posición del clic
            const rect = svg.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Convertir a coordenadas del plano
            const coords = SVGToCoords(x, y);
            
            // Eliminar punto anterior si existe
            const puntoAnterior = svg.querySelector('#punto-usuario');
            if (puntoAnterior) {
                svg.removeChild(puntoAnterior);
            }
            
            // Dibujar nuevo punto
            dibujarPunto(svg, coords.x, coords.y, 'blue', 5, 'punto-usuario');
            
            // Guardar coordenadas
            ejercicioActual.coordenadasUsuario = coords;
        });
    }
    
    // Función para generar un ejercicio de dar coordenadas
    function generarEjercicioDarCoordenadas(dificultad) {
        // Limpiar contenido anterior
        descripcionEjercicio.textContent = '';
        mensajeResultado.textContent = '';
        explicacionSolucion.textContent = '';
        respuestaInput.value = '';
        
        // Dibujar el plano cartesiano
        const svg = dibujarPlanoCartesiano();
        
        // Generar un punto aleatorio
        const punto = generarPuntoAleatorio(dificultad);
        
        // Dibujar el punto sin etiqueta
        dibujarPunto(svg, punto.x, punto.y, 'red', 5, 'punto-ejercicio');
        
        // Guardar el punto en el ejercicio actual
        ejercicioActual.tipo = 'dar-coordenadas';
        ejercicioActual.puntos = [punto];
        ejercicioActual.respuestaCorrecta = `(${punto.x}, ${punto.y})`;
        
        // Mostrar descripción del ejercicio
        descripcionEjercicio.textContent = `Adierazi planoan markatutako puntu gorriaren koordenatuak.`;
        
        // Preparar el contenedor de respuesta
        respuestaContenedor.style.display = 'block';
        respuestaInput.placeholder = "Adibidez: (2, 3)";
        
        // Añadir evento de tecla 'Enter' para comprobar la respuesta
        respuestaInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                comprobarRespuesta();
            }
        });
    }
    
    // Función para generar ejercicio
    function generarEjercicio() {
        const tipoEjercicio = tipoEjercicioSelect.value;
        const dificultad = dificultadSelect.value;
        
        switch(tipoEjercicio) {
            case 'ubicar-puntos':
                generarEjercicioUbicarPuntos(dificultad);
                break;
            case 'dar-coordenadas':
                generarEjercicioDarCoordenadas(dificultad);
                break;
            default:
                console.error('Tipo de ejercicio no reconocido');
        }
    }
    
    // Función para comprobar respuesta
    function comprobarRespuesta() {
        let respuestaCorrecta = false;
        let mensaje = '';
        
        switch(ejercicioActual.tipo) {
            case 'ubicar-puntos':
                if (!ejercicioActual.coordenadasUsuario) {
                    mensaje = 'Mesedez, egin klik planoan puntua kokatzeko.';
                    mensajeResultado.textContent = mensaje;
                    mensajeResultado.style.color = 'red';
                    return;
                }
                
                const puntoReal = ejercicioActual.puntos[0];
                const puntoUsuario = ejercicioActual.coordenadasUsuario;
                
                // Comprobar si el punto está en la posición correcta (o muy cerca)
                if (puntoUsuario.x === puntoReal.x && puntoUsuario.y === puntoReal.y) {
                    respuestaCorrecta = true;
                    mensaje = 'Zuzen! Puntua zehazki kokatu duzu.';
                } else {
                    mensaje = 'Oker. P puntua (' + puntoReal.x + ', ' + puntoReal.y + ') posizioan egon behar da.';
                }
                break;
                
            case 'dar-coordenadas':
                const valorRespuesta = respuestaInput.value.trim();
                if (!valorRespuesta) {
                    mensaje = 'Mesedez, sartu puntuaren koordenatuak.';
                    mensajeResultado.textContent = mensaje;
                    mensajeResultado.style.color = 'red';
                    return;
                }
                
                // Extraer las coordenadas de la respuesta
                // Aceptar formatos como "(2, 3)" o "2, 3" o incluso "2,3"
                const coordPattern = /\(?(-?\d+)\s*,\s*(-?\d+)\)?/;
                const match = valorRespuesta.match(coordPattern);
                
                if (match) {
                    const xUsuario = parseInt(match[1]);
                    const yUsuario = parseInt(match[2]);
                    const xReal = ejercicioActual.puntos[0].x;
                    const yReal = ejercicioActual.puntos[0].y;
                    
                    if (xUsuario === xReal && yUsuario === yReal) {
                        respuestaCorrecta = true;
                        mensaje = 'Zuzen! Koordenatuak hauek dira (' + xReal + ', ' + yReal + ').';
                    } else {
                        mensaje = 'Oker. Koordenatu zuzenak hauek dira (' + xReal + ', ' + yReal + ').';
                    }
                } else {
                    mensaje = 'Formatu okerra. Mesedez, sartu koordenatuak (x, y) bezala.';
                }
                break;
        }
        
        // Mostrar resultado
        mensajeResultado.textContent = mensaje;
        mensajeResultado.style.color = respuestaCorrecta ? 'green' : 'red';
        
        // Mostrar explicación si es correcta
        if (respuestaCorrecta) {
            switch(ejercicioActual.tipo) {
                case 'ubicar-puntos':
                    explicacionSolucion.textContent = 'P puntua (' + ejercicioActual.puntos[0].x + ', ' + ejercicioActual.puntos[0].y + ') koordenatuetan.';
                    break;
                case 'dar-coordenadas':
                    explicacionSolucion.textContent = 'Puntuak koordenatu hauek ditu (' + ejercicioActual.puntos[0].x + ', ' + ejercicioActual.puntos[0].y + ').';
                    break;
            }
        } else {
            explicacionSolucion.textContent = '';
        }
    }
    
    // Función para mostrar solución
    function mostrarSolucion() {
        switch(ejercicioActual.tipo) {
            case 'ubicar-puntos':
                // Mostrar el punto correcto
                const svg = planoCartesiano.querySelector('svg');
                if (svg) {
                    // Eliminar punto del usuario si existe
                    const puntoUsuario = svg.querySelector('#punto-usuario');
                    if (puntoUsuario) {
                        svg.removeChild(puntoUsuario);
                    }
                    
                    // Dibujar punto correcto
                    const punto = ejercicioActual.puntos[0];
                    dibujarPunto(svg, punto.x, punto.y, 'green', 5, 'punto-solucion');
                    etiquetarPunto(svg, punto.x, punto.y, 'P');
                }
                break;
                
            case 'dar-coordenadas':
                // Mostrar las coordenadas correctas
                respuestaInput.value = ejercicioActual.respuestaCorrecta;
                break;
        }
        
        // Mostrar explicación
        mensajeResultado.textContent = 'Erantzuna erakutsita.';
        mensajeResultado.style.color = 'blue';
        
        switch(ejercicioActual.tipo) {
            case 'ubicar-puntos':
                explicacionSolucion.textContent = 'P puntua (' + ejercicioActual.puntos[0].x + ', ' + ejercicioActual.puntos[0].y + ') koordenatu hauetan kokatu behar da.';
                break;
            case 'dar-coordenadas':
                explicacionSolucion.textContent = 'Puntuak koordenatu hauek ditu (' + ejercicioActual.puntos[0].x + ', ' + ejercicioActual.puntos[0].y + ').';
                break;
        }
    }
    
    // Event Listeners para el plano cartesiano
    generarEjercicioBtn.addEventListener('click', generarEjercicio);
    comprobarRespuestaBtn.addEventListener('click', comprobarRespuesta);
    mostrarSolucionBtn.addEventListener('click', mostrarSolucion);
    
    
    // CREADOR DE GRÁFICOS ESTADÍSTICOS
    // ================================
    
    // Elementos del DOM para el creador de gráficos
    const tipoGraficoSelect = document.getElementById('tipo-grafico');
    const añadirDatoBtn = document.getElementById('añadir-dato');
    const borrarDatosBtn = document.getElementById('borrar-datos');
    const tablaDatos = document.getElementById('tabla-datos');
    const cuerpoTablaDatos = document.getElementById('cuerpo-tabla-datos');
    const generarGraficoBtn = document.getElementById('generar-grafico');
    const contenedorGrafico = document.getElementById('contenedor-grafico');
    const estadisticas = document.getElementById('estadisticas');
    
    // Función para añadir una fila de datos
    function añadirFilaDatos(categoria = '', valor = '') {
        const fila = document.createElement('tr');
        
        const celdaCategoria = document.createElement('td');
        const inputCategoria = document.createElement('input');
        inputCategoria.type = 'text';
        inputCategoria.value = categoria;
        inputCategoria.placeholder = 'Kategoria';
        inputCategoria.className = 'input-categoria';
        celdaCategoria.appendChild(inputCategoria);
        
        const celdaValor = document.createElement('td');
        const inputValor = document.createElement('input');
        inputValor.type = 'number';
        inputValor.value = valor;
        inputValor.placeholder = 'Balioa';
        inputValor.className = 'input-valor';
        celdaValor.appendChild(inputValor);
        
        const celdaAccion = document.createElement('td');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'X';
        botonEliminar.className = 'btn btn-eliminar';
        botonEliminar.addEventListener('click', () => {
            fila.remove();
        });
        celdaAccion.appendChild(botonEliminar);
        
        fila.appendChild(celdaCategoria);
        fila.appendChild(celdaValor);
        fila.appendChild(celdaAccion);
        
        cuerpoTablaDatos.appendChild(fila);
    }
    
    // Función para borrar todos los datos
    function borrarDatos() {
        cuerpoTablaDatos.innerHTML = '';
        contenedorGrafico.innerHTML = '';
        estadisticas.innerHTML = '';
    }
    
    // Función para recoger los datos de la tabla
    function recogerDatos() {
        const datos = [];
        const filas = cuerpoTablaDatos.querySelectorAll('tr');
        
        filas.forEach(fila => {
            const inputCategoria = fila.querySelector('.input-categoria');
            const inputValor = fila.querySelector('.input-valor');
            
            if (inputCategoria && inputValor && inputCategoria.value && inputValor.value) {
                datos.push({
                    categoria: inputCategoria.value,
                    valor: parseFloat(inputValor.value)
                });
            }
        });
        
        return datos;
    }
    
    // Función para calcular estadísticas
    function calcularEstadisticas(datos) {
        if (datos.length === 0) return null;
        
        // Extraer solo los valores
        const valores = datos.map(d => d.valor);
        
        // Calcular suma total
        const suma = valores.reduce((acc, val) => acc + val, 0);
        
        // Calcular media
        const media = suma / valores.length;
        
        // Ordenar valores para calcular mediana
        const valoresOrdenados = [...valores].sort((a, b) => a - b);
        
        // Calcular mediana
        let mediana;
        const mitad = Math.floor(valoresOrdenados.length / 2);
        if (valoresOrdenados.length % 2 === 0) {
            mediana = (valoresOrdenados[mitad - 1] + valoresOrdenados[mitad]) / 2;
        } else {
            mediana = valoresOrdenados[mitad];
        }
        
        // Calcular moda
        const frecuencias = {};
        valores.forEach(valor => {
            frecuencias[valor] = (frecuencias[valor] || 0) + 1;
        });
        
        let moda = null;
        let maxFrecuencia = 0;
        
        for (const valor in frecuencias) {
            if (frecuencias[valor] > maxFrecuencia) {
                maxFrecuencia = frecuencias[valor];
                moda = parseFloat(valor);
            }
        }
        
        // Calcular valor mínimo y máximo
        const minimo = Math.min(...valores);
        const maximo = Math.max(...valores);
        
        return {
            suma,
            media,
            mediana,
            moda,
            minimo,
            maximo
        };
    }
    
    // Función para mostrar estadísticas
    function mostrarEstadisticas(stats) {
        estadisticas.innerHTML = '';
        
        if (!stats) {
            estadisticas.textContent = 'Ez dago datu nahikorik estatistikak kalkulatzeko.';
            return;
        }
        
        const tabla = document.createElement('table');
        tabla.className = 'tabla-estadisticas';
        
        // Añadir filas a la tabla
        const filas = [
            {nombre: 'Guztizko batura', valor: stats.suma.toFixed(2)},
            {nombre: 'Batezbestekoa', valor: stats.media.toFixed(2)},
            {nombre: 'Mediana', valor: stats.mediana.toFixed(2)},
            {nombre: 'Moda', valor: stats.moda !== null ? stats.moda.toFixed(2) : 'Ez dago modarik'},
            {nombre: 'Balio minimoa', valor: stats.minimo.toFixed(2)},
            {nombre: 'Balio maximoa', valor: stats.maximo.toFixed(2)}
        ];
        
        filas.forEach(fila => {
            const tr = document.createElement('tr');
            
            const tdNombre = document.createElement('td');
            tdNombre.textContent = fila.nombre;
            
            const tdValor = document.createElement('td');
            tdValor.textContent = fila.valor;
            
            tr.appendChild(tdNombre);
            tr.appendChild(tdValor);
            tabla.appendChild(tr);
        });
        
        estadisticas.appendChild(tabla);
    }
    
    // Función para generar colores aleatorios
    function generarColoresAleatorios(n) {
        const colores = [];
        for (let i = 0; i < n; i++) {
            // Generar color aleatorio en formato HSL para asegurar variedad
            const hue = i * (360 / n);
            colores.push(`hsl(${hue}, 70%, 60%)`);
        }
        return colores;
    }
    
    // Función para dibujar diagrama de barras
    function dibujarDiagramaBarras(datos) {
        const width = 500;
        const height = 300;
        const margins = {top: 30, right: 20, bottom: 60, left: 40};
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.style.border = '1px solid #ccc';
        svg.style.backgroundColor = '#f9f9f9';
        
        // Calcular dimensiones del área de gráfico
        const graphWidth = width - margins.left - margins.right;
        const graphHeight = height - margins.top - margins.bottom;
        
        // Encontrar el valor máximo para escalar
        const maxValor = Math.max(...datos.map(d => d.valor));
        
        // Calcular escalas
        const escalaY = graphHeight / maxValor;
        const anchoBarras = graphWidth / datos.length;
        
        // Generar colores aleatorios
        const colores = generarColoresAleatorios(datos.length);
        
        // Dibujar cada barra
        datos.forEach((dato, index) => {
            const x = margins.left + index * anchoBarras;
            const barraHeight = dato.valor * escalaY;
            const y = height - margins.bottom - barraHeight;
            
            // Barra
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x + 2); // Pequeño margen entre barras
            rect.setAttribute('y', y);
            rect.setAttribute('width', anchoBarras - 4);
            rect.setAttribute('height', barraHeight);
            rect.setAttribute('fill', colores[index]);
            
            // Etiqueta valor
            const textValor = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textValor.setAttribute('x', x + anchoBarras / 2);
            textValor.setAttribute('y', y - 5);
            textValor.setAttribute('text-anchor', 'middle');
            textValor.setAttribute('font-size', '12px');
            textValor.textContent = dato.valor;
            
            // Etiqueta categoría
            const textCategoria = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textCategoria.setAttribute('x', x + anchoBarras / 2);
            textCategoria.setAttribute('y', height - margins.bottom + 20);
            textCategoria.setAttribute('text-anchor', 'middle');
            textCategoria.setAttribute('font-size', '12px');
            textCategoria.textContent = dato.categoria;
            
            svg.appendChild(rect);
            svg.appendChild(textValor);
            svg.appendChild(textCategoria);
        });
        
        // Añadir eje Y
        const ejeY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ejeY.setAttribute('x1', margins.left);
        ejeY.setAttribute('y1', margins.top);
        ejeY.setAttribute('x2', margins.left);
        ejeY.setAttribute('y2', height - margins.bottom);
        ejeY.setAttribute('stroke', '#000');
        ejeY.setAttribute('stroke-width', '1');
        svg.appendChild(ejeY);
        
        // Añadir eje X
        const ejeX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ejeX.setAttribute('x1', margins.left);
        ejeX.setAttribute('y1', height - margins.bottom);
        ejeX.setAttribute('x2', width - margins.right);
        ejeX.setAttribute('y2', height - margins.bottom);
        ejeX.setAttribute('stroke', '#000');
        ejeX.setAttribute('stroke-width', '1');
        svg.appendChild(ejeX);
        
        // Título del gráfico
        const titulo = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        titulo.setAttribute('x', width / 2);
        titulo.setAttribute('y', margins.top / 2);
        titulo.setAttribute('text-anchor', 'middle');
        titulo.setAttribute('font-size', '16px');
        titulo.setAttribute('font-weight', 'bold');
        titulo.textContent = 'Barra-diagrama';
        svg.appendChild(titulo);
        
        return svg;
    }
    
    // Función para dibujar diagrama de sectores
    function dibujarDiagramaSectores(datos) {
        const width = 500;
        const height = 400;
        const radius = Math.min(width, height) / 2 * 0.7;
        const centerX = width / 2;
        const centerY = height / 2;
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.style.border = '1px solid #ccc';
        svg.style.backgroundColor = '#f9f9f9';
        
        // Calcular suma total para porcentajes
        const sumaTotal = datos.reduce((sum, d) => sum + d.valor, 0);
        
        // Generar colores aleatorios
        const colores = generarColoresAleatorios(datos.length);
        
        // Convertir datos a ángulos
        let anguloInicial = 0;
        
        // Dibujar sectores
        datos.forEach((dato, index) => {
            const porcentaje = dato.valor / sumaTotal;
            const angulo = porcentaje * 360;
            const anguloFinal = anguloInicial + angulo;
            
            // Convertir ángulos a radianes
            const inicialRad = anguloInicial * Math.PI / 180;
            const finalRad = anguloFinal * Math.PI / 180;
            
            // Calcular coordenadas
            const x1 = centerX + radius * Math.cos(inicialRad);
            const y1 = centerY + radius * Math.sin(inicialRad);
            const x2 = centerX + radius * Math.cos(finalRad);
            const y2 = centerY + radius * Math.sin(finalRad);
            
            // Determinar si el arco es mayor o menor (flag de arco grande)
            const largeArcFlag = angulo > 180 ? 1 : 0;
            
            // Crear path para el sector
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            const d = [
                `M ${centerX} ${centerY}`,
                `L ${x1} ${y1}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
                'Z'
            ].join(' ');
            
            path.setAttribute('d', d);
            path.setAttribute('fill', colores[index]);
            svg.appendChild(path);
            
            // Añadir etiqueta con porcentaje
            // Punto medio del arco para colocar la etiqueta
            const medioRad = (inicialRad + finalRad) / 2;
            const labelRadius = radius * 0.7; // Un poco más adentro para las etiquetas
            const labelX = centerX + labelRadius * Math.cos(medioRad);
            const labelY = centerY + labelRadius * Math.sin(medioRad);
            
            const textLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textLabel.setAttribute('x', labelX);
            textLabel.setAttribute('y', labelY);
            textLabel.setAttribute('text-anchor', 'middle');
            textLabel.setAttribute('dominant-baseline', 'middle');
            textLabel.setAttribute('fill', 'white');
            textLabel.setAttribute('font-weight', 'bold');
            textLabel.setAttribute('font-size', '12px');
            textLabel.textContent = `${Math.round(porcentaje * 100)}%`;
            svg.appendChild(textLabel);
            
            anguloInicial = anguloFinal;
        });
        
        // Añadir leyenda
        const legendaX = width - 140;
        const legendaY = 30;
        const rectSize = 15;
        const espaciado = 25;
        
        datos.forEach((dato, index) => {
            // Rectángulo de color
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', legendaX);
            rect.setAttribute('y', legendaY + index * espaciado);
            rect.setAttribute('width', rectSize);
            rect.setAttribute('height', rectSize);
            rect.setAttribute('fill', colores[index]);
            svg.appendChild(rect);
            
            // Texto de la categoría
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', legendaX + rectSize + 5);
            text.setAttribute('y', legendaY + index * espaciado + rectSize / 2 + 5);
            text.setAttribute('font-size', '12px');
            text.textContent = dato.categoria;
            svg.appendChild(text);
        });
        
        // Título del gráfico
        const titulo = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        titulo.setAttribute('x', width / 2);
        titulo.setAttribute('y', 20);
        titulo.setAttribute('text-anchor', 'middle');
        titulo.setAttribute('font-size', '16px');
        titulo.setAttribute('font-weight', 'bold');
        titulo.textContent = 'Sektore-diagrama';
        svg.appendChild(titulo);
        
        return svg;
    }
    
    // Función para dibujar polígono de frecuencias
    function dibujarPoligonoFrecuencias(datos) {
        const width = 500;
        const height = 300;
        const margins = {top: 30, right: 20, bottom: 60, left: 40};
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', width);
        svg.setAttribute('height', height);
        svg.style.border = '1px solid #ccc';
        svg.style.backgroundColor = '#f9f9f9';
        
        // Calcular dimensiones del área de gráfico
        const graphWidth = width - margins.left - margins.right;
        const graphHeight = height - margins.top - margins.bottom;
        
        // Encontrar el valor máximo para escalar
        const maxValor = Math.max(...datos.map(d => d.valor));
        
        // Calcular escalas
        const escalaY = graphHeight / maxValor;
        const anchoUnidad = graphWidth / (datos.length - 1 || 1);
        
        // Dibujar polígono
        let pathData = '';
        
        datos.forEach((dato, index) => {
            const x = margins.left + index * anchoUnidad;
            const y = height - margins.bottom - dato.valor * escalaY;
            
            if (index === 0) {
                pathData += `M ${x} ${y}`;
            } else {
                pathData += ` L ${x} ${y}`;
            }
            
            // Dibujar círculo en cada punto
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', x);
            circle.setAttribute('cy', y);
            circle.setAttribute('r', 4);
            circle.setAttribute('fill', 'red');
            svg.appendChild(circle);
            
            // Etiqueta valor
            const textValor = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textValor.setAttribute('x', x);
            textValor.setAttribute('y', y - 10);
            textValor.setAttribute('text-anchor', 'middle');
            textValor.setAttribute('font-size', '12px');
            textValor.textContent = dato.valor;
            svg.appendChild(textValor);
            
            // Etiqueta categoría
            const textCategoria = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            textCategoria.setAttribute('x', x);
            textCategoria.setAttribute('y', height - margins.bottom + 20);
            textCategoria.setAttribute('text-anchor', 'middle');
            textCategoria.setAttribute('font-size', '12px');
            textCategoria.textContent = dato.categoria;
            svg.appendChild(textCategoria);
        });
        
        // Dibujar línea del polígono
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', pathData);
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke', 'blue');
        path.setAttribute('stroke-width', '2');
        svg.appendChild(path);
        
        // Añadir eje Y
        const ejeY = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ejeY.setAttribute('x1', margins.left);
        ejeY.setAttribute('y1', margins.top);
        ejeY.setAttribute('x2', margins.left);
        ejeY.setAttribute('y2', height - margins.bottom);
        ejeY.setAttribute('stroke', '#000');
        ejeY.setAttribute('stroke-width', '1');
        svg.appendChild(ejeY);
        
        // Añadir eje X
        const ejeX = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        ejeX.setAttribute('x1', margins.left);
        ejeX.setAttribute('y1', height - margins.bottom);
        ejeX.setAttribute('x2', width - margins.right);
        ejeX.setAttribute('y2', height - margins.bottom);
        ejeX.setAttribute('stroke', '#000');
        ejeX.setAttribute('stroke-width', '1');
        svg.appendChild(ejeX);
        
        // Título del gráfico
        const titulo = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        titulo.setAttribute('x', width / 2);
        titulo.setAttribute('y', margins.top / 2);
        titulo.setAttribute('text-anchor', 'middle');
        titulo.setAttribute('font-size', '16px');
        titulo.setAttribute('font-weight', 'bold');
        titulo.textContent = 'Maiztasun-poligonoa';
        svg.appendChild(titulo);
        
        return svg;
    }
    
    // Función para generar gráfico según el tipo seleccionado
    function generarGrafico() {
        // Limpiar gráficos anteriores
        contenedorGrafico.innerHTML = '';
        
        // Recoger datos
        const datos = recogerDatos();
        
        if (datos.length < 2) {
            contenedorGrafico.textContent = 'Grafikoa sortzeko gutxienez bi datu-puntu behar dira.';
            return;
        }
        
        // Generar gráfico según tipo seleccionado
        const tipoGrafico = tipoGraficoSelect.value;
        let grafico;
        
        switch(tipoGrafico) {
            case 'barras':
                grafico = dibujarDiagramaBarras(datos);
                break;
            case 'sectores':
                grafico = dibujarDiagramaSectores(datos);
                break;
            case 'poligono':
                grafico = dibujarPoligonoFrecuencias(datos);
                break;
            default:
                contenedorGrafico.textContent = 'Grafiko mota ez da onartzen.';
                return;
        }
        
        // Añadir gráfico al contenedor
        contenedorGrafico.appendChild(grafico);
        
        // Calcular y mostrar estadísticas
        const stats = calcularEstadisticas(datos);
        mostrarEstadisticas(stats);
    }
    
    // Event Listeners para el creador de gráficos
    añadirDatoBtn.addEventListener('click', () => añadirFilaDatos());
    borrarDatosBtn.addEventListener('click', borrarDatos);
    generarGraficoBtn.addEventListener('click', generarGrafico);
    
    // Inicialización
    // Añadir algunas filas de ejemplo para el creador de gráficos
    const datosEjemplo = [
        {categoria: 'Matematika', valor: 28},
        {categoria: 'Hizkuntza', valor: 22},
        {categoria: 'Zientziak', valor: 18},
        {categoria: 'Historia', valor: 15},
        {categoria: 'Artea', valor: 12}
    ];
    
    datosEjemplo.forEach(dato => {
        añadirFilaDatos(dato.categoria, dato.valor);
    });
    
    // Generar ejercicio inicial para el plano cartesiano
    generarEjercicio();
});
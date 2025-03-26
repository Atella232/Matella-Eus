// Configuración de modales para Álgebra
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

    // Scroll to the top of the page, ensuring header and navigation are visible
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });

    // Scroll to the top section for a calm, focused experience
    const topSection = document.getElementById('teoria-numeros');
    const herramientasSection = document.getElementById('herramientas-interactivas');
    
    if (topSection) {
        // Hide the interactive tools section by default
        if (herramientasSection) {
            herramientasSection.style.display = 'none';
        }
    }

    // Contenido de los modales con elementos visuales añadidos
    const contenidosModales = {
        'letras-numeros': `
            <div class="modal-header">
                <h2>🧩 Zenbakien ordez letrak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Ezezagunak eta Aldagaiak</h3>
                <p>Egoera askotan ez dakigu zenbateko zehatz bat, baina letra batekin adierazi dezakegu. Letra hori ezezaguna edo aldagaia deitzen da.</p>
                
                <!-- Visualización de variables -->
                <div class="visual-example">
                    <svg width="300" height="120" viewBox="0 0 300 120">
                        <!-- Flecha de transformación -->
                        <path d="M140,60 L160,60" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-dasharray="5,5" />
                        <polygon points="160,60 155,55 155,65" fill="#333" />
                        
                        <!-- Círculo de números -->
                        <circle cx="80" cy="60" r="30" fill="#e6f7ff" stroke="#1890ff" stroke-width="2" />
                        <text x="80" y="65" font-size="14" text-anchor="middle">5, 8, 12, ...</text>
                        
                        <!-- Círculo de letras -->
                        <circle cx="220" cy="60" r="30" fill="#f6ffed" stroke="#52c41a" stroke-width="2" />
                        <text x="220" y="65" font-size="18" text-anchor="middle">x</text>
                        
                        <text x="80" y="20" font-size="12" text-anchor="middle" fill="#666">Zenbaki zehatza</text>
                        <text x="220" y="20" font-size="12" text-anchor="middle" fill="#666">Ezezaguna</text>
                    </svg>
                </div>

                <h3>Zertarako balio du?</h3>
                <ul>
                    <li>Arauak orokortzeko.</li>
                    <li>Datu ezezagunak dituzten problemak ebazteko.</li>
                    <li>Ekuazioak formulatzeko.</li>
                </ul>

                <h3>Adibideak</h3>
                <p>Juanen oraingo adina "x" bada:</p>
                <ul>
                    <li>15 urte barru izango du: x + 15</li>
                    <li>Duela urtebete zuen: x - 1</li>
                    <li>Duela urtebete zuen adinaren bikoitza: 2(x - 1)</li>
                </ul>

                <!-- Línea de tiempo para visualizar la edad -->
                <div class="visual-example">
                    <svg width="400" height="100" viewBox="0 0 400 100">
                        <!-- Línea principal -->
                        <line x1="40" y1="50" x2="360" y2="50" stroke="#333" stroke-width="2" />
                        
                        <!-- Marcas de tiempo -->
                        <line x1="120" y1="45" x2="120" y2="55" stroke="#333" stroke-width="2" />
                        <line x1="200" y1="45" x2="200" y2="55" stroke="#333" stroke-width="2" />
                        <line x1="280" y1="45" x2="280" y2="55" stroke="#333" stroke-width="2" />
                        
                        <!-- Etiquetas -->
                        <text x="120" y="35" font-size="12" text-anchor="middle">Duela urtebete</text>
                        <text x="120" y="75" font-size="12" text-anchor="middle" fill="#d4380d">x - 1</text>
                        
                        <text x="200" y="35" font-size="12" text-anchor="middle">Orain</text>
                        <text x="200" y="75" font-size="12" text-anchor="middle" fill="#d4380d">x</text>
                        
                        <text x="280" y="35" font-size="12" text-anchor="middle">15 urte barru</text>
                        <text x="280" y="75" font-size="12" text-anchor="middle" fill="#d4380d">x + 15</text>
                    </svg>
                </div>

                <h3>Liburuko problema ebatzia</h3>
                <p>"15 urte barru, Juanen adina iaz zuenaren bikoitza izango da."</p>
                <p>Planteatzen dugu: x + 15 = 2(x - 1)</p>
                <p>Ebazpena:</p>
                <pre>
x + 15 = 2x - 2
15 + 2 = 2x - x
x = 17
                </pre>
                <p>✅ Juanek 17 urte ditu.</p>
            </div>
        `,
        'expresiones-algebraicas': `
            <div class="modal-header">
                <h2>🔤 Adierazpen aljebraikoak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Zer da adierazpen aljebraiko bat?</h3>
                <p>Adierazpen aljebraiko bat zenbakien, letren (aldagaien) eta eragiketen konbinazio bat da.</p>
                
                <!-- Visualización de componentes de expresiones algebraicas -->
                <div class="visual-example">
                    <svg width="400" height="150" viewBox="0 0 400 150">
                        <!-- Expresión algebraica 3x² - 5y + 7 -->
                        <rect x="50" y="40" width="300" height="70" rx="10" ry="10" fill="#f0f5ff" stroke="#597ef7" stroke-width="2" />
                        
                        <!-- Elementos de la expresión -->
                        <text x="120" y="80" font-size="24" fill="#333">3x² - 5y + 7</text>
                        
                        <!-- Líneas de conexión a etiquetas -->
                        <line x1="120" y1="90" x2="120" y2="130" stroke="#597ef7" stroke-width="1" stroke-dasharray="3,3" />
                        <line x1="160" y1="90" x2="160" y2="130" stroke="#597ef7" stroke-width="1" stroke-dasharray="3,3" />
                        <line x1="200" y1="90" x2="200" y2="130" stroke="#597ef7" stroke-width="1" stroke-dasharray="3,3" />
                        <line x1="240" y1="90" x2="240" y2="130" stroke="#597ef7" stroke-width="1" stroke-dasharray="3,3" />
                        <line x1="280" y1="90" x2="280" y2="130" stroke="#597ef7" stroke-width="1" stroke-dasharray="3,3" />
                        
                        <!-- Etiquetas -->
                        <text x="120" y="145" font-size="12" text-anchor="middle" fill="#597ef7">Koefizientea</text>
                        <text x="160" y="145" font-size="12" text-anchor="middle" fill="#597ef7">Aldagaia</text>
                        <text x="200" y="145" font-size="12" text-anchor="middle" fill="#597ef7">Eragiketa</text>
                        <text x="240" y="145" font-size="12" text-anchor="middle" fill="#597ef7">Bestelako aldagaia</text>
                        <text x="280" y="145" font-size="12" text-anchor="middle" fill="#597ef7">Konstante</text>
                    </svg>
                </div>
                
                <h3>Zer dauka?</h3>
                <ul>
                    <li>Letrak → balio ezezagunak adierazten dituzte.</li>
                    <li>Zenbakiak → ezagunak (koefizienteak).</li>
                    <li>Eragiketak → batuketa, kenketa, biderketa, etab.</li>
                </ul>

                <h3>Adibideak</h3>
                <ul>
                    <li>3x - 5 → zenbaki baten hirukoitza baino bost gutxiago.</li>
                    <li>x² + 1 → zenbaki baten karratua gehi bat.</li>
                    <li>(a + 1)b → "a gehi bat" "b"-rekin biderkatuta.</li>
                </ul>
            </div>
        `,
        'suma-resta-monomios': `
            <div class="modal-header">
                <h2>➕ Monomioen batuketa eta kenketa</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Oinarrizko arauak</h3>
                <p>Antzekoak diren monomioak soilik batu edo kendu daitezke, hau da, letrazko zati berdina dutenak (letra berdinak eta esponentzial berdinak).</p>
                
                <!-- Visualización de términos semejantes -->
                <div class="visual-example">
                    <svg width="400" height="180" viewBox="0 0 400 180">
                        <!-- Términos semejantes -->
                        <rect x="50" y="20" width="300" height="70" rx="10" ry="10" fill="#f6ffed" stroke="#52c41a" stroke-width="2" />
                        <text x="200" y="40" font-size="16" text-anchor="middle" fill="#333">Antzeko monomioak</text>
                        <text x="200" y="65" font-size="20" text-anchor="middle" fill="#52c41a">4x + 2x = 6x</text>
                        
                        <!-- Términos no semejantes -->
                        <rect x="50" y="100" width="300" height="70" rx="10" ry="10" fill="#fff2e8" stroke="#fa541c" stroke-width="2" />
                        <text x="200" y="120" font-size="16" text-anchor="middle" fill="#333">Antzekoak EZ diren monomioak</text>
                        <text x="200" y="145" font-size="20" text-anchor="middle" fill="#fa541c">3a + 2b = 3a + 2b</text>
                        <text x="200" y="170" font-size="12" text-anchor="middle" fill="#666">(Ezin dira batu)</text>
                    </svg>
                </div>
                
                <h3>Antzeko monomioak</h3>
                <ul>
                    <li>4x eta 2x → batzen dira → 4x + 2x = 6x</li>
                    <li>a² eta 3a² → batzen dira → a² + 3a² = 4a²</li>
                </ul>

                <h3>Antzekoak EZ diren monomioak</h3>
                <ul>
                    <li>3a + 2b → horrela uzten da, ezin dira batu</li>
                    <li>x² + x → ez dira batzen esponentzial desberdina dutelako</li>
                </ul>

                <h3>Adibideak</h3>
                <ul>
                    <li>a + a + a = 3a</li>
                    <li>5x – 3x = 2x</li>
                    <li>a² + a² = 2a²</li>
                    <li>7x – (2x + x) = 7x – 3x = 4x</li>
                    <li>5a – (a – 4a) = 5a – (–3a) = 8a</li>
                </ul>
            </div>
        `,
        'multiplicacion-monomios': `
            <div class="modal-header">
                <h2>✖️ Monomioen biderketa</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Propietateak</h3>
                <p>Bi monomio biderkatzeak beti beste monomio bat ematen du.</p>
                
                <h3>Arau garrantzitsua</h3>
                <p>Oinarri berdineko potentziak biderkatzean, esponentzialak batzen dira.</p>

                <!-- Visualización de multiplicación de monomios -->
                <div class="visual-example">
                    <svg width="400" height="180" viewBox="0 0 400 180">
                        <!-- Ejemplo visual de la multiplicación -->
                        <rect x="30" y="20" width="340" height="150" rx="10" ry="10" fill="#f9f0ff" stroke="#722ed1" stroke-width="2" />
                        
                        <!-- Ejemplo 3x² · 2x³ = 6x⁵ -->
                        <text x="200" y="50" font-size="24" text-anchor="middle" fill="#333">3x² · 2x³ = 6x⁵</text>
                        
                        <!-- Explicación de componentes -->
                        <line x1="80" y1="70" x2="80" y2="120" stroke="#722ed1" stroke-width="1" stroke-dasharray="3,3" />
                        <text x="80" y="135" font-size="12" text-anchor="middle" fill="#722ed1">3 · 2 = 6</text>
                        <text x="80" y="150" font-size="12" text-anchor="middle" fill="#722ed1">Koefizienteak</text>
                        
                        <line x1="200" y1="70" x2="200" y2="120" stroke="#722ed1" stroke-width="1" stroke-dasharray="3,3" />
                        <text x="200" y="135" font-size="12" text-anchor="middle" fill="#722ed1">x² · x³ = x²⁺³ = x⁵</text>
                        <text x="200" y="150" font-size="12" text-anchor="middle" fill="#722ed1">Aldagaiak</text>
                        
                        <line x1="320" y1="70" x2="320" y2="120" stroke="#722ed1" stroke-width="1" stroke-dasharray="3,3" />
                        <text x="320" y="135" font-size="12" text-anchor="middle" fill="#722ed1">Emaitza</text>
                    </svg>
                </div>

                <h3>Adibideak</h3>
                <ul>
                    <li>2x · 4x = 8x²</li>
                    <li>–2a · 5a = –10a²</li>
                    <li>3x² · 2x³ = 6x⁵</li>
                    <li>2m² · 2m⁴ = 4m⁶</li>
                </ul>
            </div>
        `,
        'multiplicacion-monomio-suma': `
            <div class="modal-header">
                <h2>🔢 Monomioaren biderketa baturarekin</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Propietate banatzailea</h3>
                <p>Propietate banatzailea aplikatzen da: a(b+c) = ab + ac</p>
                
                <!-- Visualización de la propiedad distributiva -->
                <div class="visual-example">
                    <svg width="400" height="180" viewBox="0 0 400 180">
                        <!-- Marco principal -->
                        <rect x="30" y="20" width="340" height="150" rx="10" ry="10" fill="#fff1f0" stroke="#f5222d" stroke-width="2" />
                        
                        <!-- Ejemplo de distribución -->
                        <text x="200" y="50" font-size="20" text-anchor="middle" fill="#333">2x(x² + 2y) = 2x³ + 4xy</text>
                        
                        <!-- Visualización del proceso -->
                        <path d="M100,70 L300,70 L300,130 L100,130 Z" fill="none" stroke="#f5222d" stroke-width="1" stroke-dasharray="3,3" />
                        <line x1="200" y1="70" x2="200" y2="130" stroke="#f5222d" stroke-width="1" stroke-dasharray="3,3" />
                        
                        <text x="150" y="100" font-size="16" text-anchor="middle" fill="#f5222d">2x · x² = 2x³</text>
                        <text x="250" y="100" font-size="16" text-anchor="middle" fill="#f5222d">2x · 2y = 4xy</text>
                        
                        <!-- Flechas de distribución -->
                        <path d="M70,60 C50,80 50,120 70,140" fill="none" stroke="#f5222d" stroke-width="2" stroke-linecap="round" />
                        <polygon points="70,140 75,135 65,135" fill="#f5222d" />
                    </svg>
                </div>
                
                <h3>Adibideak</h3>
                <ul>
                    <li>5(2a + 3a + 3ab) = 10a + 15a + 15ab</li>
                    <li>2x(x² + 2y) = 2x³ + 4xy</li>
                </ul>
            </div>
        `,
        'division-monomios': `
            <div class="modal-header">
                <h2>➗ Monomioen zatiketa</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <p>Monomioen zatiketa esponentzialen eta zeinuen arau zehatzei jarraituz egiten da.</p>
                
                <!-- Visualización del proceso de división -->
                <div class="visual-example">
                    <svg width="400" height="200" viewBox="0 0 400 200">
                        <!-- Marco principal -->
                        <rect x="30" y="20" width="340" height="170" rx="10" ry="10" fill="#e6fffb" stroke="#13c2c2" stroke-width="2" />
                        
                        <!-- Ejemplo 1: 6x³/2x = 3x² -->
                        <path d="M100,60 L300,60 L300,100 L100,100 Z" fill="none" stroke="#13c2c2" stroke-width="1" />
                        <line x1="100" y1="80" x2="300" y2="80" stroke="#13c2c2" stroke-width="1" />
                        <text x="200" y="50" font-size="14" text-anchor="middle" fill="#333">Adibidea 1</text>
                        <text x="200" y="75" font-size="16" text-anchor="middle" fill="#13c2c2">6x³</text>
                        <text x="200" y="95" font-size="16" text-anchor="middle" fill="#13c2c2">2x</text>
                        <text x="320" y="80" font-size="16" text-anchor="middle" fill="#13c2c2">= 3x²</text>
                        
                        <!-- Ejemplo 2: 15a²/-3a = -5a -->
                        <path d="M100,120 L300,120 L300,160 L100,160 Z" fill="none" stroke="#13c2c2" stroke-width="1" />
                        <line x1="100" y1="140" x2="300" y2="140" stroke="#13c2c2" stroke-width="1" />
                        <text x="200" y="115" font-size="14" text-anchor="middle" fill="#333">Adibidea 2</text>
                        <text x="200" y="135" font-size="16" text-anchor="middle" fill="#13c2c2">15a²</text>
                        <text x="200" y="155" font-size="16" text-anchor="middle" fill="#13c2c2">-3a</text>
                        <text x="320" y="140" font-size="16" text-anchor="middle" fill="#13c2c2">= -5a</text>
                        
                        <!-- Explicación -->
                        <text x="200" y="180" font-size="12" text-anchor="middle" fill="#333">Koefizienteak zatitu eta aldagaien esponentzialak kendu</text>
                    </svg>
                </div>

                <div class="math-examples">
                    <div class="math-row">
                        <div class="math-expression">
                            <span class="fraction">
                                <span class="numerator">6x³</span>
                                <span class="denominator">2x</span>
                            </span>
                            <span class="math-equals">=</span>
                            <span class="result">3x²</span>
                        </div>
                    </div>
                    <div class="math-row">
                        <div class="math-expression">
                            <span class="fraction">
                                <span class="numerator">15a²</span>
                                <span class="denominator">-3a</span>
                            </span>
                            <span class="math-equals">=</span>
                            <span class="result">-5a</span>
                        </div>
                    </div>
                </div>

                <p>Monomioak zatitzeko pausoak:</p>
                <ol>
                    <li>Koefizienteak zatitu</li>
                    <li>Aldagaien esponentzialak kendu</li>
                    <li>Emaitzaren zeinua koefizienteen zatiketatik dator</li>
                </ol>
            </div>
        `,
        'ecuaciones': `
            <div class="modal-header">
                <h2>🟰 Ekuazioak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Zer da ekuazio bat?</h3>
                <p>Ekuazio bat ezezagun bat edo gehiago dituzten bi adierazpen aljebraikoen arteko berdintasuna da.</p>
                
                <!-- Visualización de una ecuación como balanza -->
                <div class="visual-example">
                    <svg width="400" height="180" viewBox="0 0 400 180">
                        <!-- Balanza -->
                        <line x1="200" y1="60" x2="200" y2="100" stroke="#333" stroke-width="4" />
                        <line x1="140" y1="100" x2="260" y2="100" stroke="#333" stroke-width="4" />
                        <line x1="100" y1="120" x2="300" y2="120" stroke="#333" stroke-width="2" />
                        
                        <!-- Platillos de la balanza -->
                        <rect x="80" y="120" width="80" height="5" fill="#ffd666" stroke="#ad8b00" stroke-width="1" />
                        <rect x="240" y="120" width="80" height="5" fill="#ffd666" stroke="#ad8b00" stroke-width="1" />
                        
                        <!-- Elementos en la balanza -->
                        <text x="120" y="110" font-size="18" text-anchor="middle" fill="#ad8b00">2x + 5</text>
                        <text x="280" y="110" font-size="18" text-anchor="middle" fill="#ad8b00">15</text>
                        
                        <!-- Signo igual -->
                        <text x="200" y="160" font-size="24" text-anchor="middle" fill="#333">=</text>
                        
                        <!-- Ecuación completa -->
                        <text x="200" y="180" font-size="18" text-anchor="middle" fill="#333">2x + 5 = 15</text>
                    </svg>
                </div>
                
                <h3>Helburua</h3>
                <p>Berdintasuna egiazkoa egiten duen ezezagunaren balioa aurkitzea.</p>

                <h3>Adibidea</h3>
                <p>2x + 5 = 15</p>
                <p>Jakin nahi dugu zein x balio egiten duen ezkerrekoa eskuinekoaren berdina.</p>
            </div>
        `,
        'tecnicas-ecuaciones': `
            <div class="modal-header">
                <h2>🔍 Ekuazioak ebazteko teknikak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Lehen graduko ekuazioak ebazteko metodoa</h3>
                <p>Lehen mailko ekuazioak ebazteko pausoak hurrengokoak dira:</p>
                
                <!-- Visualización de los pasos para resolver ecuaciones -->
                <div class="visual-example">
                    <svg width="400" height="250" viewBox="0 0 400 250">
                        <!-- Fondo de los pasos -->
                        <rect x="50" y="20" width="300" height="220" rx="10" ry="10" fill="#f0f5ff" stroke="#597ef7" stroke-width="2" />
                        
                        <!-- Ejemplo de ecuación -->
                        <text x="200" y="45" font-size="18" text-anchor="middle" fill="#333">4 + 2x = x + 10</text>
                        
                        <!-- Pasos numerados -->
                        <circle cx="70" cy="80" r="15" fill="#597ef7" />
                        <text x="70" y="85" font-size="14" text-anchor="middle" fill="white">1</text>
                        <text x="200" y="85" font-size="16" text-anchor="middle" fill="#333">Parentesiak kendu (ez daude)</text>
                        
                        <circle cx="70" cy="120" r="15" fill="#597ef7" />
                        <text x="70" y="125" font-size="14" text-anchor="middle" fill="white">2</text>
                        <text x="200" y="125" font-size="16" text-anchor="middle" fill="#333">Antzeko terminoak murriztu</text>
                        
                        <circle cx="70" cy="160" r="15" fill="#597ef7" />
                        <text x="70" y="165" font-size="14" text-anchor="middle" fill="white">3</text>
                        <text x="240" y="165" font-size="16" text-anchor="middle" fill="#333">2x - x = 10 - 4</text>
                        
                        <circle cx="70" cy="200" r="15" fill="#597ef7" />
                        <text x="70" y="205" font-size="14" text-anchor="middle" fill="white">4</text>
                        <text x="200" y="205" font-size="16" text-anchor="middle" fill="#333">x = 6</text>
                        
                        <!-- Solución -->
                        <text x="200" y="230" font-size="16" text-anchor="middle" fill="#597ef7">Soluzioa: x = 6</text>
                    </svg>
                </div>
                
                <h3>Pausoak</h3>
                <ol>
                    <li>Parentesiak kendu (baldin badaude).</li>
                    <li>Antzeko terminoak murriztu alde bakoitzean.</li>
                    <li>Ezezagunak alde batera eta zenbakiak bestera pasatu.</li>
                    <li>Ezezaguna askatu.</li>
                </ol>

                <h3>Adibidea</h3>
                <pre>
4 + 2x = x + 10
→ 2x - x = 10 - 4
→ x = 6
                </pre>
                <p>✅ Soluzioa: x = 6</p>
            </div>
        `,
        'ecuaciones-primer-grado': `
            <div class="modal-header">
                <h2>📐 Lehen mailako ekuazioak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Ezaugarriak</h3>
                <p>Ezezagun bakarreko lehen mailako ekuazio bat honako hau da:</p>
                <ul>
                    <li>Letra bakarra du (normalean x).</li>
                    <li>Letra hori ez dago potentzia handiagoetan jasota (ez karratuan, ez erroan...).</li>
                    <li>Forma orokorra du: ax + b = cx + d</li>
                </ul>
                
                <!-- Visualización de ecuación de primer grado en una recta -->
                <div class="visual-example">
                    <svg width="400" height="180" viewBox="0 0 400 180">
                        <!-- Sistema de coordenadas -->
                        <line x1="50" y1="90" x2="350" y2="90" stroke="#333" stroke-width="2" />
                        <line x1="200" y1="30" x2="200" y2="150" stroke="#333" stroke-width="2" />
                        
                        <!-- Etiquetas de ejes -->
                        <text x="340" y="80" font-size="14" fill="#333">x</text>
                        <text x="210" y="40" font-size="14" fill="#333">y</text>
                        
                        <!-- Línea de la ecuación -->
                        <line x1="80" y1="130" x2="320" y2="50" stroke="#1890ff" stroke-width="2" />
                        
                        <!-- Punto de intersección -->
                        <circle cx="260" cy="90" r="5" fill="#f5222d" />
                        
                        <!-- Etiqueta del punto -->
                        <text x="260" y="110" font-size="14" text-anchor="middle" fill="#f5222d">x = 5</text>
                        
                        <!-- Ecuación -->
                        <text x="200" y="170" font-size="16" text-anchor="middle" fill="#333">3x - 4 = 2x + 1</text>
                    </svg>
                </div>
                
                <h3>Adibidea</h3>
                <pre>
3x - 4 = 2x + 1
→ 3x - 2x = 1 + 4
→ x = 5
                </pre>
            </div>
        `,
        'problemas-ecuaciones': `
            <div class="modal-header">
                <h2>💡 Ekuazioekin problemak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Hizkuntza aljebraikora itzulpena</h3>
                <p>Hau da zatirik interesgarriena: benetako problemak hizkuntza aljebraikora itzultzea.</p>
                
                <!-- Visualización del problema de las monedas -->
                <div class="visual-example">
                    <svg width="400" height="200" viewBox="0 0 400 200">
                        <!-- Marco del problema -->
                        <rect x="50" y="20" width="300" height="170" rx="10" ry="10" fill="#fcffe6" stroke="#a0d911" stroke-width="2" />
                        
                        <!-- Representación de la pila de monedas -->
                        <circle cx="130" cy="70" r="20" fill="#fffb8f" stroke="#d4b106" stroke-width="1" />
                        <circle cx="140" cy="80" r="20" fill="#fffb8f" stroke="#d4b106" stroke-width="1" />
                        <circle cx="120" cy="80" r="20" fill="#fffb8f" stroke="#d4b106" stroke-width="1" />
                        <circle cx="130" cy="90" r="20" fill="#fffb8f" stroke="#d4b106" stroke-width="1" />
                        <text x="130" y="85" font-size="14" text-anchor="middle" fill="#d4b106">€</text>
                        
                        <!-- Séptima parte -->
                        <circle cx="270" cy="80" r="20" fill="#fffb8f" stroke="#d4b106" stroke-width="1" />
                        <text x="270" y="85" font-size="14" text-anchor="middle" fill="#d4b106">€</text>
                        <text x="270" y="110" font-size="12" text-anchor="middle" fill="#333">1/7 zatia</text>
                        
                        <!-- Ecuación del problema -->
                        <text x="200" y="150" font-size="16" text-anchor="middle" fill="#333">x + (1/7)x = 24</text>
                        <text x="200" y="180" font-size="16" text-anchor="middle" fill="#a0d911">x = 21</text>
                    </svg>
                </div>
                
                <h3>Liburuko adibidea</h3>
                <p>"Txanpon pilo bat eta piloaren zazpigarren bat 24 euro balio dute."</p>
                <p>Piloaren balioari x deitzen diogu:</p>
                <pre>
x + (1/7)x = 24
                </pre>
                <p>Murrizten dugu:</p>
                <pre>
(8/7)x = 24
x = 24 × 7 / 8 = 21
                </pre>
                <p>✅ Piloak 21 euro balio ditu.</p>
            </div>
        `
    };

    // Añadir estilos CSS para los elementos visuales
    const estilosVisuales = document.createElement('style');
    estilosVisuales.textContent = `
        .visual-example {
            margin: 20px 0;
            display: flex;
            justify-content: center;
            background-color: #fafafa;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        .math-examples {
            margin: 20px 0;
            background-color: #fafafa;
            padding: 15px;
            border-radius: 8px;
        }
        
        .math-row {
            margin: 10px 0;
            display: flex;
            justify-content: center;
        }
        
        .math-expression {
            display: flex;
            align-items: center;
            font-size: 18px;
        }
        
        .fraction {
            display: inline-block;
            vertical-align: middle;
            margin: 0 5px;
            text-align: center;
        }
        
        .numerator, .denominator {
            display: block;
        }
        
        .numerator {
            border-bottom: 1px solid black;
            padding: 0 3px;
        }
        
        .denominator {
            padding: 0 3px;
        }
        
        .math-equals {
            margin: 0 10px;
        }
        
        .result {
            margin-left: 5px;
        }
        
        /* Mejorar estilos de los modales */
        .modal-overlay {
            background-color: rgba(0,0,0,0.6);
            backdrop-filter: blur(3px);
        }
        
        .modal-contenido {
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            background-color: white;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .modal-header {
            background-color: #f0f5ff;
            padding: 15px 20px;
            border-bottom: 1px solid #e8e8e8;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h2 {
            margin: 0;
            color: #1890ff;
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .btn-cerrar-modal {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: #666;
        }
        
        .btn-cerrar-modal:hover {
            color: #f5222d;
        }
        
        /* Estilos para las tarjetas */
        .tarjeta {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .tarjeta:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }
    `;
    document.head.appendChild(estilosVisuales);

    // Función para abrir modales
    function abrirModal(idModal) {
        console.log('Intentando abrir modal:', idModal);
        const modal = document.getElementById(idModal);
        
        if (!modal) {
            console.error('Modal no encontrado:', idModal);
            // Listar todos los modales disponibles
            const modales = document.querySelectorAll('.modal-overlay');
            console.log('Modales disponibles:', 
                Array.from(modales).map(m => m.id)
            );
            return;
        }

        const contenidoModal = modal.querySelector('.modal-contenido');
        
        if (!contenidoModal) {
            console.error('Contenido de modal no encontrado');
            return;
        }

        // Verificar si el contenido existe
        const contenidoModalKey = idModal.replace('modal-', '');
        console.log('Clave del modal:', contenidoModalKey);
        console.log('Claves disponibles:', Object.keys(contenidosModales));

        if (!contenidosModales[contenidoModalKey]) {
            console.error('Contenido no encontrado para:', contenidoModalKey);
            return;
        }

        // Insertar contenido del modal
        contenidoModal.innerHTML = contenidosModales[contenidoModalKey];
        
        // Mostrar modal con display flex y añadir clase mostrar
        modal.style.display = 'flex';
        modal.classList.add('mostrar');
        console.log('Modal abierto:', idModal);
        console.log('Contenido insertado:', contenidosModales[contenidoModalKey]);

        // Close modal button
        const closeButton = contenidoModal.querySelector('.btn-cerrar-modal');
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Añadir event listeners a todos los botones de "Más información"
    const botonesModal = document.querySelectorAll('.abrir-modal');
    console.log('Número de botones de modal encontrados:', botonesModal.length);

    botonesModal.forEach(boton => {
        boton.addEventListener('click', (e) => {
            e.preventDefault();
            const tarjeta = boton.closest('.tarjeta');
            if (!tarjeta) {
                console.error('Tarjeta padre no encontrada');
                return;
            }
            
            const modalId = tarjeta.dataset.modal;
            console.log('Botón clickeado, modal ID:', modalId);
            
            if (!modalId) {
                console.error('data-modal no encontrado en la tarjeta');
                return;
            }
            
            abrirModal(`modal-${modalId}`);
        });
    });

    // Verificar la existencia de los modales al inicio
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    console.log('Número de modal overlays encontrados:', modalOverlays.length);
    modalOverlays.forEach(modal => {
        console.log('Modal ID:', modal.id);
    });

    // Añadir event listeners para cerrar modales al hacer clic fuera
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', (e) => {
            // Cerrar el modal solo si se hace clic directamente en el overlay
            if (e.target === modal) {
                modal.style.display = 'none';
                modal.classList.remove('mostrar');
            }
        });
    });

    // Optional: Add a button to show/hide interactive tools
    const toggleToolsBtn = document.createElement('button');
    toggleToolsBtn.textContent = 'Tresna Interaktiboak Erakutsi';
    toggleToolsBtn.classList.add('btn', 'btn-verde');  
    toggleToolsBtn.style.marginTop = '20px';
    toggleToolsBtn.style.display = 'inline-block';
    toggleToolsBtn.style.width = 'auto';
    toggleToolsBtn.style.padding = '10px 15px';  
    toggleToolsBtn.style.fontSize = '16px';  
    toggleToolsBtn.style.boxSizing = 'border-box';

    toggleToolsBtn.addEventListener('click', () => {
        if (herramientasSection.style.display === 'none') {
            herramientasSection.style.display = 'block';
            toggleToolsBtn.textContent = 'Tresna Interaktiboak Ezkutatu';
            herramientasSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            herramientasSection.style.display = 'none';
            toggleToolsBtn.textContent = 'Tresna Interaktiboak Erakutsi';
            topSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });

    // Add the toggle button after the top section
    if (topSection) {
        topSection.appendChild(toggleToolsBtn);
    }

    // Función para resolver ecuaciones (para la herramienta interactiva)
    window.resolverEcuacion = function() {
        const ecuacionInput = document.getElementById('ecuacion');
        const resultadoElement = document.getElementById('resultado');
        
        if (!ecuacionInput || !resultadoElement) {
            console.error('Elementos de la calculadora no encontrados');
            return;
        }
        
        const ecuacion = ecuacionInput.value.trim();
        
        if (!ecuacion) {
            resultadoElement.textContent = 'Emaitza: Mesedez, sartu ekuazio bat';
            return;
        }
        
        try {
            // Implementación simple para ecuaciones de primer grado del tipo ax + b = c
            if (ecuacion.includes('=')) {
                const partes = ecuacion.split('=');
                if (partes.length !== 2) {
                    throw new Error('Formato incorrecto. Usa el formato: ax + b = c');
                }
                
                // Esta es una implementación muy básica y limitada
                // En una aplicación real, se necesitaría un parser más complejo
                resultadoElement.textContent = 'Emaitza: Ekuazioa prozesatuta. Ekuazio konplexuetarako, kontsultatu teorian dauden adibideak.';
                
                // Añadir visualización para la ecuación introducida
                const visualizacionDiv = document.createElement('div');
                visualizacionDiv.className = 'visual-example';
                visualizacionDiv.innerHTML = `
                    <svg width="350" height="100" viewBox="0 0 350 100">
                        <rect x="10" y="10" width="330" height="80" rx="10" ry="10" fill="#e6f7ff" stroke="#1890ff" stroke-width="2" />
                        <text x="175" y="35" font-size="18" text-anchor="middle" fill="#333">Ekuazioa:</text>
                        <text x="175" y="65" font-size="24" text-anchor="middle" fill="#1890ff">${ecuacion}</text>
                    </svg>
                `;
                
                // Insertar la visualización antes del resultado
                resultadoElement.parentNode.insertBefore(visualizacionDiv, resultadoElement);
                
            } else {
                throw new Error('Ez da aurkitu berdintasun ikurra (=)');
            }
        } catch (error) {
            resultadoElement.textContent = `Emaitza: Errorea - ${error.message}`;
        }
    };

    // Función para verificar respuestas del quiz con visualización
    window.verificarRespuesta = function(respuesta) {
        const resultadoQuiz = document.getElementById('resultado-quiz');
        const quizContainer = document.querySelector('.quiz-container') || document.createElement('div');
        
        if (!resultadoQuiz) {
            console.error('Elemento de resultado del quiz no encontrado');
            return;
        }
        
        // Eliminar visualización anterior si existe
        const visualAnterior = quizContainer.querySelector('.visual-example');
        if (visualAnterior) {
            visualAnterior.remove();
        }
        
        // La respuesta correcta para "3x - 4 = 8" es x = 4
        const esCorrecta = respuesta === 4;
        
        // Crear visualización
        const visualizacionDiv = document.createElement('div');
        visualizacionDiv.className = 'visual-example';
        
        if (esCorrecta) {
            visualizacionDiv.innerHTML = `
                <svg width="350" height="180" viewBox="0 0 350 180">
                    <rect x="25" y="10" width="300" height="160" rx="10" ry="10" fill="#f6ffed" stroke="#52c41a" stroke-width="2" />
                    <text x="175" y="40" font-size="18" text-anchor="middle" fill="#333">3x - 4 = 8</text>
                    <line x1="50" y1="60" x2="300" y2="60" stroke="#52c41a" stroke-width="1" stroke-dasharray="3,3" />
                    <text x="175" y="80" font-size="16" text-anchor="middle" fill="#333">3x = 12</text>
                    <line x1="50" y1="100" x2="300" y2="100" stroke="#52c41a" stroke-width="1" stroke-dasharray="3,3" />
                    <text x="175" y="120" font-size="16" text-anchor="middle" fill="#333">x = 4</text>
                    <circle cx="175" cy="150" r="15" fill="#52c41a" />
                    <path d="M165,150 L175,160 L185,140" stroke="white" stroke-width="3" fill="none" />
                </svg>
            `;
            resultadoQuiz.textContent = 'Zuzen! x = 4 da soluzioa.';
            resultadoQuiz.style.color = 'green';
        } else {
            visualizacionDiv.innerHTML = `
                <svg width="350" height="180" viewBox="0 0 350 180">
                    <rect x="25" y="10" width="300" height="160" rx="10" ry="10" fill="#fff2e8" stroke="#fa541c" stroke-width="2" />
                    <text x="175" y="40" font-size="18" text-anchor="middle" fill="#333">3x - 4 = 8</text>
                    <line x1="50" y1="60" x2="300" y2="60" stroke="#fa541c" stroke-width="1" stroke-dasharray="3,3" />
                    <text x="175" y="80" font-size="16" text-anchor="middle" fill="#333">3x = 12</text>
                    <line x1="50" y1="100" x2="300" y2="100" stroke="#fa541c" stroke-width="1" stroke-dasharray="3,3" />
                    <text x="175" y="120" font-size="16" text-anchor="middle" fill="#333">x = 4</text>
                    <text x="175" y="150" font-size="16" text-anchor="middle" fill="#fa541c">Saiatu berriro</text>
                </svg>
            `;
            resultadoQuiz.textContent = 'Oker. Saiatu berriro.';
            resultadoQuiz.style.color = 'red';
        }
        
        // Insertar la visualización antes del resultado
        quizContainer.insertBefore(visualizacionDiv, resultadoQuiz);
    };

    // Añadir animaciones para mejorar la experiencia de usuario
    const animacionesCSS = document.createElement('style');
    animacionesCSS.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { transform: translateY(20px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        .modal-overlay.mostrar {
            animation: fadeIn 0.3s ease-out forwards;
        }
        
        .modal-contenido {
            animation: slideIn 0.4s ease-out forwards;
        }
        
        .visual-example {
            animation: fadeIn 0.5s ease-out forwards;
        }
    `;
    document.head.appendChild(animacionesCSS);
});
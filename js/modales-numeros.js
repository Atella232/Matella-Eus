// Contenido de modales para Números Naturales
const modalContents = {
    'introduccion': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Zenbaki naturalak zenbatzeko ikasten ditugun lehen zenbakiak dira: 1, 2, 3, 4...</p>
                
                <!-- Representación visual de la recta numérica -->
                <div class="visual-element" style="text-align: center; margin: 20px 0;">
                    <svg width="400" height="80" viewBox="0 0 400 80">
                        <!-- Línea principal -->
                        <line x1="40" y1="40" x2="360" y2="40" stroke="black" stroke-width="2"></line>
                        <!-- Marcas y números -->
                        <line x1="80" y1="35" x2="80" y2="45" stroke="black" stroke-width="2"></line>
                        <text x="80" y="65" text-anchor="middle" font-size="16">1</text>
                        <line x1="120" y1="35" x2="120" y2="45" stroke="black" stroke-width="2"></line>
                        <text x="120" y="65" text-anchor="middle" font-size="16">2</text>
                        <line x1="160" y1="35" x2="160" y2="45" stroke="black" stroke-width="2"></line>
                        <text x="160" y="65" text-anchor="middle" font-size="16">3</text>
                        <line x1="200" y1="35" x2="200" y2="45" stroke="black" stroke-width="2"></line>
                        <text x="200" y="65" text-anchor="middle" font-size="16">4</text>
                        <line x1="240" y1="35" x2="240" y2="45" stroke="black" stroke-width="2"></line>
                        <text x="240" y="65" text-anchor="middle" font-size="16">5</text>
                        <line x1="280" y1="35" x2="280" y2="45" stroke="black" stroke-width="2"></line>
                        <text x="280" y="65" text-anchor="middle" font-size="16">6</text>
                        <line x1="320" y1="35" x2="320" y2="45" stroke="black" stroke-width="2"></line>
                        <text x="320" y="65" text-anchor="middle" font-size="16">7</text>
                        <!-- Flechas -->
                        <polygon points="360,40 350,35 350,45" fill="black"></polygon>
                    </svg>
                    <p style="font-style: italic; margin-top: 5px;">Zenbaki naturalen zuzenaren irudikapena</p>
                </div>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Mota</th>
                                <th>Deskribapena</th>
                                <th>Adibidea</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Zenbaki Naturalak</td>
                                <td>Objektu diskretuak zenbatzeko zenbakiak</td>
                                <td>1, 2, 3, 4, 5...</td>
                            </tr>
                            <tr>
                                <td>Zenbaki Osoak</td>
                                <td>Positiboak, negatiboak eta zero barne hartzen dituzte</td>
                                <td>...-2, -1, 0, 1, 2...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h4>Garrantzia</h4>
                <p>Zenbaki naturalekin lan egiten badakizu ere, garrantzitsua da oinarrizko kontzeptu eta propietateak berrikustea, ulermena eta kalkuluetan arintasuna indartzeko.</p>
            </div>
        </div>
    `,
    'suma': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Batuketa kantitateak elkartzea, batzea edo gehitzea da.</p>
                
                <!-- Representación visual de suma -->
                <div class="visual-element" style="text-align: center; margin: 20px 0;">
                    <svg width="400" height="120" viewBox="0 0 400 120">
                        <!-- Primer conjunto -->
                        <circle cx="60" cy="40" r="15" fill="#6ab7ff"></circle>
                        <circle cx="100" cy="40" r="15" fill="#6ab7ff"></circle>
                        <circle cx="140" cy="40" r="15" fill="#6ab7ff"></circle>
                        <!-- Símbolo + -->
                        <text x="180" y="45" text-anchor="middle" font-size="24" font-weight="bold">+</text>
                        <!-- Segundo conjunto -->
                        <circle cx="220" cy="40" r="15" fill="#ff9e6a"></circle>
                        <circle cx="260" cy="40" r="15" fill="#ff9e6a"></circle>
                        <!-- Símbolo = -->
                        <text x="300" y="45" text-anchor="middle" font-size="24" font-weight="bold">=</text>
                        <!-- Resultado -->
                        <circle cx="330" cy="40" r="15" fill="#6ab7ff"></circle>
                        <circle cx="370" cy="40" r="15" fill="#6ab7ff"></circle>
                        <circle cx="330" cy="80" r="15" fill="#ff9e6a"></circle>
                        <circle cx="370" cy="80" r="15" fill="#ff9e6a"></circle>
                        <circle cx="350" cy="40" r="15" fill="#6ab7ff"></circle>
                    </svg>
                    <p style="font-style: italic; margin-top: 5px;">3 + 2 = 5</p>
                </div>
                
                <h4>Testuinguruko adibidea</h4>
                <p>Txirrindulari ekipoak honako prezioa du:</p>
                <p>583 + 162 + 45 + 38 = 828 euro</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Propietatea</th>
                                <th>Deskribapena</th>
                                <th>Adibidea</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Trukagarria</td>
                                <td>Ordenak ez du emaitza aldatzen</td>
                                <td>8 + 6 = 6 + 8 = 14</td>
                            </tr>
                            <tr>
                                <td>Elkarkorra</td>
                                <td>Taldekatzeak ez du emaitza aldatzen</td>
                                <td>(3 + 2) + 6 = 3 + (2 + 6) = 11</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'resta': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Kenketa kantitateak kentzea, ezabatzea edo bi kantitateen arteko diferentzia aurkitzea da.</p>
                
                <!-- Representación visual de resta -->
                <div class="visual-element" style="text-align: center; margin: 20px 0;">
                    <svg width="400" height="100" viewBox="0 0 400 100">
                        <!-- Conjunto inicial -->
                        <circle cx="50" cy="40" r="15" fill="#6ab7ff"></circle>
                        <circle cx="90" cy="40" r="15" fill="#6ab7ff"></circle>
                        <circle cx="130" cy="40" r="15" fill="#6ab7ff"></circle>
                        <circle cx="170" cy="40" r="15" fill="#6ab7ff"></circle>
                        <circle cx="210" cy="40" r="15" fill="#6ab7ff"></circle>
                        <!-- Símbolo - -->
                        <text x="240" y="45" text-anchor="middle" font-size="24" font-weight="bold">-</text>
                        <!-- Conjunto a restar -->
                        <circle cx="270" cy="40" r="15" fill="#ff9e6a"></circle>
                        <circle cx="310" cy="40" r="15" fill="#ff9e6a"></circle>
                        <!-- Símbolo = -->
                        <text x="340" y="45" text-anchor="middle" font-size="24" font-weight="bold">=</text>
                        <!-- Resultado -->
                        <circle cx="370" cy="40" r="15" fill="#6ab7ff"></circle>
                        <circle cx="370" cy="80" r="15" fill="#6ab7ff"></circle>
                        <circle cx="330" cy="80" r="15" fill="#6ab7ff"></circle>
                        <!-- Tachaduras en los restados -->
                        <line x1="50" y1="25" x2="50" y2="55" stroke="red" stroke-width="2" opacity="0.5" display="none"></line>
                        <line x1="90" y1="25" x2="90" y2="55" stroke="red" stroke-width="2" opacity="0.5" display="none"></line>
                    </svg>
                    <p style="font-style: italic; margin-top: 5px;">5 - 2 = 3</p>
                </div>
                
                <h4>Testuinguruko adibidea</h4>
                <p>693 € badituzu eta 828 € behar badituzu, honako kopurua falta zaizu:</p>
                <p>828 – 693 = 135 €</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Mota</th>
                                <th>Deskribapena</th>
                                <th>Adibidea</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kenketa</td>
                                <td>Kantitate bat bestetik kentzea</td>
                                <td>10 - 4 = 6</td>
                            </tr>
                            <tr>
                                <td>Diferentzia</td>
                                <td>Bi zenbakiren arteko distantzia</td>
                                <td>8 - 3 = 5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'multiplicacion': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Biderketa zenbaki bera hainbat aldiz batzearen modu laburra da.</p>
                
                <!-- Representación visual de multiplicación como área -->
                <div class="visual-element" style="text-align: center; margin: 20px 0;">
                    <svg width="300" height="200" viewBox="0 0 300 200">
                        <!-- Grid de 3x4 -->
                        <g transform="translate(50, 30)">
                            <!-- Filas y columnas -->
                            <rect x="0" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <rect x="40" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <rect x="80" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <rect x="120" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            
                            <rect x="0" y="40" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <rect x="40" y="40" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <rect x="80" y="40" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <rect x="120" y="40" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            
                            <rect x="0" y="80" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <rect x="40" y="80" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <rect x="80" y="80" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <rect x="120" y="80" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            
                            <!-- Etiquetas -->
                            <text x="-15" y="25" font-size="16" text-anchor="middle">1</text>
                            <text x="-15" y="65" font-size="16" text-anchor="middle">2</text>
                            <text x="-15" y="105" font-size="16" text-anchor="middle">3</text>
                            
                            <text x="20" y="-10" font-size="16" text-anchor="middle">1</text>
                            <text x="60" y="-10" font-size="16" text-anchor="middle">2</text>
                            <text x="100" y="-10" font-size="16" text-anchor="middle">3</text>
                            <text x="140" y="-10" font-size="16" text-anchor="middle">4</text>
                            
                            <!-- Fórmula -->
                            <text x="80" y="145" font-size="18" text-anchor="middle">3 × 4 = 12</text>
                        </g>
                    </svg>
                    <p style="font-style: italic; margin-top: 5px;">Biderketa matrize gisa: 3 × 4 = 12 lauki</p>
                </div>
                
                <h4>Testuinguruko adibidea</h4>
                <p>Sarrera batek 38 € balio du, bost sarrerek honako prezioa dute:</p>
                <p>38 + 38 + 38 + 38 + 38 = 38 · 5 = 190 €</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Propietatea</th>
                                <th>Deskribapena</th>
                                <th>Adibidea</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Trukagarria</td>
                                <td>Ordenak ez du emaitza aldatzen</td>
                                <td>3 × 5 = 5 × 3 = 15</td>
                            </tr>
                            <tr>
                                <td>Banakorra</td>
                                <td>Batuketa/kenketaren gaineko banaketa</td>
                                <td>3 × (4 + 2) = (3 × 4) + (3 × 2)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'division': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Zatiketa zati berdinetan banatzea da.</p>
                
                <!-- Representación visual de división -->
                <div class="visual-element" style="text-align: center; margin: 20px 0;">
                    <svg width="400" height="180" viewBox="0 0 400 180">
                        <!-- Título -->
                        <text x="200" y="20" text-anchor="middle" font-size="16" font-weight="bold">12 ÷ 3 = 4</text>
                        
                        <!-- Contenedores -->
                        <rect x="40" y="40" width="80" height="100" rx="5" fill="none" stroke="#0097a7" stroke-width="2"></rect>
                        <rect x="160" y="40" width="80" height="100" rx="5" fill="none" stroke="#0097a7" stroke-width="2"></rect>
                        <rect x="280" y="40" width="80" height="100" rx="5" fill="none" stroke="#0097a7" stroke-width="2"></rect>
                        
                        <!-- Elementos en cada contenedor -->
                        <circle cx="60" cy="60" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        <circle cx="100" cy="60" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        <circle cx="60" cy="90" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        <circle cx="100" cy="90" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        
                        <circle cx="180" cy="60" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        <circle cx="220" cy="60" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        <circle cx="180" cy="90" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        <circle cx="220" cy="90" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        
                        <circle cx="300" cy="60" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        <circle cx="340" cy="60" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        <circle cx="300" cy="90" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        <circle cx="340" cy="90" r="10" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></circle>
                        
                        <!-- Etiquetas -->
                        <text x="80" y="130" font-size="14" text-anchor="middle">1. Taldea</text>
                        <text x="200" y="130" font-size="14" text-anchor="middle">2. Taldea</text>
                        <text x="320" y="130" font-size="14" text-anchor="middle">3. Taldea</text>
                    </svg>
                    <p style="font-style: italic; margin-top: 5px;">12 objektu 3 taldetan banatuta = 4 objektu talde bakoitzeko</p>
                </div>
                
                <h4>Adibidea: 150 goxoki 6 kutxatan</h4>
                <p>150 ÷ 6 = 25 goxoki kutxa bakoitzeko</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Mota</th>
                                <th>Deskribapena</th>
                                <th>Adibidea</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Zatiketa zehatza</td>
                                <td>Hondarrik gabe</td>
                                <td>12 ÷ 3 = 4</td>
                            </tr>
                            <tr>
                                <td>Hondarrarekin zatiketa</td>
                                <td>Hondar balioa geratzen da</td>
                                <td>14 ÷ 3 = 4 eta 2 hondar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'parentesis': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Parentesiak eragiketak taldekatzeko eta kalkuluen ordena naturala aldatzeko erabiltzen dira.</p>
                
                <!-- Representación visual de uso de paréntesis -->
                <div class="visual-element" style="text-align: center; margin: 20px 0;">
                    <svg width="400" height="300" viewBox="0 0 400 300">
                        <!-- Ejemplo 1: 9 - 1 + 3 -->
                        <text x="200" y="30" font-size="16" font-weight="bold" text-anchor="middle">Parentesirik gabe: 9 - 1 + 3</text>
                        <g transform="translate(30, 50)">
                            <rect x="0" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <text x="20" y="25" font-size="16" text-anchor="middle">9</text>
                            
                            <text x="55" y="25" font-size="16" text-anchor="middle">-</text>
                            
                            <rect x="70" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <text x="90" y="25" font-size="16" text-anchor="middle">1</text>
                            
                            <text x="125" y="25" font-size="16" text-anchor="middle">=</text>
                            
                            <rect x="140" y="0" width="40" height="40" fill="#fff9c4" stroke="#fbc02d" stroke-width="1"></rect>
                            <text x="160" y="25" font-size="16" text-anchor="middle">8</text>
                            
                            <text x="195" y="25" font-size="16" text-anchor="middle">+</text>
                            
                            <rect x="210" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <text x="230" y="25" font-size="16" text-anchor="middle">3</text>
                            
                            <text x="265" y="25" font-size="16" text-anchor="middle">=</text>
                            
                            <rect x="280" y="0" width="40" height="40" fill="#fff9c4" stroke="#fbc02d" stroke-width="1"></rect>
                            <text x="300" y="25" font-size="16" text-anchor="middle">11</text>
                        </g>
                        
                        <!-- Ejemplo 2: 9 - (1 + 3) en dos pasos claros -->
                        <text x="200" y="120" font-size="16" font-weight="bold" text-anchor="middle">Parentesiekin: 9 - (1 + 3)</text>
                        
                        <!-- Paso 1: Resolver el paréntesis primero -->
                        <g transform="translate(80, 150)">
                            <text x="0" y="25" font-size="14" font-weight="bold" text-anchor="start" fill="#d81b60">1. Pausua: Parentesia ebatzi</text>
                            
                            <rect x="200" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <text x="220" y="25" font-size="16" text-anchor="middle">1</text>
                            
                            <text x="250" y="25" font-size="16" text-anchor="middle">+</text>
                            
                            <rect x="270" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <text x="290" y="25" font-size="16" text-anchor="middle">3</text>
                            
                            <!-- Paréntesis -->
                            <rect x="190" y="-10" width="130" height="60" fill="none" stroke="#ff6e40" stroke-width="2" rx="10" stroke-dasharray="5,2"></rect>
                            
                            <text x="310" y="25" font-size="16" text-anchor="middle">=</text>
                            
                            <rect x="330" y="0" width="40" height="40" fill="#fff9c4" stroke="#fbc02d" stroke-width="2"></rect>
                            <text x="350" y="25" font-size="16" text-anchor="middle">4</text>
                            
                            <!-- Flecha que muestra el resultado -->
                            <path d="M 380,20 L 400,20 L 390,30 Z" fill="#d81b60"></path>
                        </g>
                        
                        <!-- Paso 2: Realizar la operación final -->
                        <g transform="translate(80, 210)">
                            <text x="0" y="25" font-size="14" font-weight="bold" text-anchor="start" fill="#d81b60">2. Pausua: Azken eragiketa egin</text>
                            
                            <rect x="200" y="0" width="40" height="40" fill="#e0f7fa" stroke="#0097a7" stroke-width="1"></rect>
                            <text x="220" y="25" font-size="16" text-anchor="middle">9</text>
                            
                            <text x="250" y="25" font-size="16" text-anchor="middle">-</text>
                            
                            <rect x="270" y="0" width="40" height="40" fill="#fff9c4" stroke="#fbc02d" stroke-width="2"></rect>
                            <text x="290" y="25" font-size="16" text-anchor="middle">4</text>
                            
                            <text x="320" y="25" font-size="16" text-anchor="middle">=</text>
                            
                            <rect x="340" y="0" width="40" height="40" fill="#fff9c4" stroke="#fbc02d" stroke-width="2"></rect>
                            <text x="360" y="25" font-size="16" text-anchor="middle">5</text>
                        </g>
                        
                        <!-- Línea conectora entre pasos -->
                        <line x1="410" y1="170" x2="320" y2="210" stroke="#d81b60" stroke-width="2" stroke-dasharray="5,2"></line>
                    </svg>
                    <p style="font-style: italic; margin-top: 5px;">Parentesiekin, lehenengo parentesi barruko eragiketa ebazten da, ondoren gainerako eragiketak</p>
                </div>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Mota</th>
                                <th>Eragiketa</th>
                                <th>Emaitza</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Parentesirik gabe</td>
                                <td>9 – 1 + 3</td>
                                <td>11</td>
                            </tr>
                            <tr>
                                <td>Parentesiekin</td>
                                <td>9 – (1 + 3)</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'orden-operaciones': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Arauak</h4>
                <p>Adierazpen batek hainbat eragiketa dituenean, ordena hau jarraitzen da:</p>
                <ol>
                    <li>Parentesiak</li>
                    <li>Biderketak eta zatiketak</li>
                    <li>Batuketak eta kenketak</li>
                </ol>
                
                <!-- Representación visual del orden de operaciones -->
                <div class="visual-element" style="text-align: center; margin: 20px 0;">
                    <svg width="500" height="200" viewBox="0 0 500 200">
                        <!-- Título -->
                        <text x="250" y="30" font-size="16" font-weight="bold" text-anchor="middle">6 + 2 × 4 = ?</text>
                        
                        <!-- Diagrama de árbol -->
                        <g transform="translate(50, 60)">
                            <!-- Nodos de operaciones (a la misma altura) -->
                            <circle cx="150" cy="30" r="25" fill="#fff9c4" stroke="#fbc02d" stroke-width="2"></circle>
                            <text x="150" y="35" font-size="16" text-anchor="middle">+</text>
                            
                            <circle cx="270" cy="30" r="25" fill="#fff9c4" stroke="#fbc02d" stroke-width="2"></circle>
                            <text x="270" y="35" font-size="16" text-anchor="middle">×</text>
                            
                            <!-- Nodos de números (todos a la misma altura) -->
                            <circle cx="90" cy="110" r="25" fill="#e0f7fa" stroke="#0097a7" stroke-width="2"></circle>
                            <text x="90" y="115" font-size="16" text-anchor="middle">6</text>
                            
                            <circle cx="210" cy="110" r="25" fill="#e0f7fa" stroke="#0097a7" stroke-width="2"></circle>
                            <text x="210" y="115" font-size="16" text-anchor="middle">2</text>
                            
                            <circle cx="330" cy="110" r="25" fill="#e0f7fa" stroke="#0097a7" stroke-width="2"></circle>
                            <text x="330" y="115" font-size="16" text-anchor="middle">4</text>
                            
                            <!-- Conectores -->
                            <line x1="135" y1="45" x2="105" y2="90" stroke="black" stroke-width="2"></line>
                            <line x1="165" y1="45" x2="195" y2="90" stroke="black" stroke-width="2"></line>
                            <line x1="255" y1="45" x2="225" y2="90" stroke="black" stroke-width="2"></line>
                            <line x1="285" y1="45" x2="315" y2="90" stroke="black" stroke-width="2"></line>
                            
                            <!-- Etiquetas de pasos (reposicionadas) -->
                            <text x="270" y="0" font-size="14" text-anchor="middle" fill="#d81b60">1. Lehenengo</text>
                            <text x="390" y="70" font-size="14" text-anchor="middle" fill="#d81b60">2 × 4 = 8</text>
                            
                            <text x="150" y="0" font-size="14" text-anchor="middle" fill="#d81b60">2. Bigarren</text>
                            <text x="40" y="70" font-size="14" text-anchor="middle" fill="#d81b60">6 + 8 = 14</text>
                        </g>
                    </svg>
                    <p style="font-style: italic; margin-top: 0px;">Eragiketen ordenaren zuhaitza: lehenengo biderketa, gero batuketa</p>
                </div>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Adierazpena</th>
                                <th>Pausuz Pausu</th>
                                <th>Emaitza</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>6 + 2 · 4</td>
                                <td>Lehenengo 2 · 4, ondoren batu</td>
                                <td>14</td>
                            </tr>
                            <tr>
                                <td>(6 + 2) · 4</td>
                                <td>Lehenengo parentesiak, gero biderkatu</td>
                                <td>32</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `,
    'calculo-mental': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Buruzko kalkulua kalkulagailurik gabe eragiketak azkar egiteko teknikak dira.</p>
                
                <!-- Representación visual de técnicas de cálculo mental -->
                <div class="visual-element" style="text-align: center; margin: 20px 0;">
                    <svg width="400" height="220" viewBox="0 0 400 220">
                        <!-- Ejemplo 1: Redondeo y ajuste -->
                        <rect x="20" y="20" width="360" height="80" rx="10" fill="#f3e5f5" stroke="#9c27b0" stroke-width="2"></rect>
                        <text x="200" y="40" font-size="16" font-weight="bold" text-anchor="middle">Biribiltzea eta doitzea</text>
                        <text x="200" y="65" font-size="14" text-anchor="middle">38 + 45 ≈ 40 + 45 = 85 - 2 = 83</text>
                        <line x1="90" y1="75" x2="120" y2="75" stroke="#9c27b0" stroke-width="2"></line>
                        <text x="105" y="90" font-size="12" text-anchor="middle">Biribildu</text>
                        <line x1="235" y1="75" x2="265" y2="75" stroke="#9c27b0" stroke-width="2"></line>
                        <text x="250" y="90" font-size="12" text-anchor="middle">Doitu</text>
                        
                        <!-- Ejemplo 2: Descomposición -->
                        <rect x="20" y="120" width="360" height="80" rx="10" fill="#e8f5e9" stroke="#4caf50" stroke-width="2"></rect>
                        <text x="200" y="140" font-size="16" font-weight="bold" text-anchor="middle">Deskonposizioa</text>
                        <text x="200" y="165" font-size="14" text-anchor="middle">128 ÷ 4 = (120 ÷ 4) + (8 ÷ 4) = 30 + 2 = 32</text>
                        <line x1="105" y1="175" x2="145" y2="175" stroke="#4caf50" stroke-width="2"></line>
                        <text x="125" y="190" font-size="12" text-anchor="middle">Banatu</text>
                        <line x1="255" y1="175" x2="295" y2="175" stroke="#4caf50" stroke-width="2"></line>
                        <text x="275" y="190" font-size="12" text-anchor="middle">Kalkulatu eta batu</text>
                    </svg>
                    <p style="font-style: italic; margin-top: 5px;">Buruzko kalkulurako estrategia erabilienak</p>
                </div>
                
                <h4>Estrategiak</h4>
                <p>Zenbaki borobil eta erreferentziazko kopuruekin lan egitea komeni da:</p>
                <ul>
                    <li>Hamarreko hurbilarekin kalkulatu eta doitu: 38 + 45 ≈ 40 + 45 = 85 - 2 = 83</li>
                    <li>Ehunekoak banatu: 25% = 1/4, beraz, 25% × 80 = 80 ÷ 4 = 20</li>
                    <li>Batuketa errazera aldatu: 397 + 599 = 397 + 600 - 1 = 997 - 1 = 996</li>
                </ul>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Buruzko ariketa</th>
                                <th>Estrategia</th>
                                <th>Emaitza</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>99 × 5</td>
                                <td>100 × 5 - 5 = 500 - 5</td>
                                <td>495</td>
                            </tr>
                            <tr>
                                <td>128 ÷ 4</td>
                                <td>120 ÷ 4 + 8 ÷ 4 = 30 + 2</td>
                                <td>32</td>
                            </tr>
                            <tr>
                                <td>47 + 36</td>
                                <td>47 + 30 + 6 = 77 + 6</td>
                                <td>83</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h4>Praktikatu</h4>
                <p>Eguneroko bizitzan erabili: erosketetan, sukaldaritzan, bidaietan...</p>
                
                <!-- Aplicación práctica -->
                <div class="practice-example" style="background-color: #fafafa; padding: 15px; border-radius: 5px; margin-top: 15px;">
                    <h5 style="margin-top: 0;">Adibide praktikoa: Erosketa</h5>
                    <p>Produktuak: 12,95€ + 7,50€ + 22,30€</p>
                    <p>Estrategia: Biribildu eta doitu</p>
                    <p>13€ + 7,50€ + 22,50€ = 43€</p>
                    <p>Doitzea: 43€ - 0,05€ - 0,20€ = 42,75€</p>
                </div>
            </div>
        </div>
    `
};

// Función para abrir modales
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, inicializando modales');
    const modalButtons = document.querySelectorAll('.abrir-modal');
    const modals = document.querySelectorAll('.modal-overlay');
    
    console.log(`Botones de modal encontrados: ${modalButtons.length}`);
    console.log(`Modales encontrados: ${modals.length}`);

    modalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Botón de modal clickeado');

            const modalKey = button.closest('.tarjeta').dataset.modal;
            const modalOverlay = document.getElementById(`modal-${modalKey}`);
            const modalContent = modalOverlay.querySelector('.modal-contenido');
            
            console.log(`Modal key: ${modalKey}`);
            console.log(`Modal overlay: ${modalOverlay}`);

            const modalText = modalContents[modalKey];
            console.log(`Contenido del modal: ${modalText ? 'Encontrado' : 'No encontrado'}`);

            if (modalText) {
                modalContent.innerHTML = `
                    <div class="modal-header">
                        <h2>${button.closest('.tarjeta').querySelector('h3').textContent}</h2>
                        <button class="btn-cerrar-modal">&times;</button>
                    </div>
                    <div class="modal-body">
                        ${modalText}
                    </div>
                `;
                
                modalOverlay.classList.add('mostrar');
                
                // Añadir evento de cierre
                const closeBtn = modalContent.querySelector('.btn-cerrar-modal');
                closeBtn.addEventListener('click', () => {
                    modalOverlay.classList.remove('mostrar');
                });
            } else {
                console.error(`No se encontró contenido para el modal: ${modalKey}`);
            }
        });
    });

    // Cerrar modal si se hace clic fuera de él
    window.addEventListener('click', (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
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
        const herramientasSection = document.getElementById('herramientas-interactivas');
        const topSection = document.getElementById('teoria-numeros');
        
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
    if (document.getElementById('teoria-numeros')) {
        document.getElementById('teoria-numeros').appendChild(toggleToolsBtn);
    }
});
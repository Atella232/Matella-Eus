document.addEventListener('DOMContentLoaded', () => {
    // Scroll to the top of the page, ensuring header and navigation are visible
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });

    // Scroll to the top section for a calm, focused experience
    const topSection = document.getElementById('teoria-fracciones');
    const herramientasSection = document.getElementById('herramientas-interactivas');
    
    if (topSection) {
        // Hide the interactive tools section by default
        if (herramientasSection) {
            herramientasSection.style.display = 'none';
        }
    }

    // Modal content for each section
    const contenidosModales = {
        'significado-fraccion': `
            <div class="modal-header">
                <h2>🔢 Zatiaren Esanahia</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Definizioa</h3>
                <p>Zati batek osotasun baten parte bat adierazten du, zati berdinetan banatuta:</p>
                
                <div class="visual-container">
                    <svg width="200" height="100" viewBox="0 0 200 100">
                        <rect x="10" y="20" width="180" height="60" fill="none" stroke="#333" stroke-width="2"/>
                        <line x1="55" y1="20" x2="55" y2="80" stroke="#333" stroke-width="2"/>
                        <line x1="100" y1="20" x2="100" y2="80" stroke="#333" stroke-width="2"/>
                        <line x1="145" y1="20" x2="145" y2="80" stroke="#333" stroke-width="2"/>
                        <rect x="10" y="20" width="45" height="60" fill="#ffb5b5"/>
                        <rect x="55" y="20" width="45" height="60" fill="#ffb5b5"/>
                        <text x="25" y="55" font-size="20" text-anchor="middle">1</text>
                        <text x="78" y="55" font-size="20" text-anchor="middle">2</text>
                        <text x="123" y="55" font-size="20" text-anchor="middle">3</text>
                        <text x="168" y="55" font-size="20" text-anchor="middle">4</text>
                        <text x="60" y="100" font-size="16" text-anchor="middle">2/4 = 1/2</text>
                    </svg>
                </div>
                
                <ul>
                    <li><strong>Zenbakitzailea (a):</strong> Hartzen diren zatiak</li>
                    <li><strong>Izendatzailea (b):</strong> Unitatea banatzen den zati kopurua</li>
                </ul>
                
                <h3>Interpretazioak</h3>
                <ol>
                    <li><strong>Unitate baten zatia:</strong> 
                        Tarta baten 3/4 = 4 zati berdinetatik 3</li>
                    <li><strong>Operadore gisa:</strong> 
                        20ren 2/5 = (2 × 20) ÷ 5 = 8</li>
                    <li><strong>Zatiketa gisa:</strong> 
                        7/2 = 7 ÷ 2 = 3.5</li>
                </ol>
            </div>
        `,
        'fracciones-equivalentes': `
            <div class="modal-header">
                <h2>🔄 Zati Baliokideak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Zer dira?</h3>
                <p>Kantitate bera adierazten duten zatiak.</p>
                
                <div class="visual-container">
                    <svg width="300" height="120" viewBox="0 0 300 120">
                        <!-- First fraction -->
                        <circle cx="70" cy="60" r="40" fill="none" stroke="#333" stroke-width="2"/>
                        <path d="M 70 20 L 70 60 L 110 60 Z" fill="#80b0ff"/>
                        <text x="75" y="45" font-size="16" fill="#000">1/4</text>
                        
                        <!-- Equals sign -->
                        <text x="150" y="65" font-size="30" text-anchor="middle">=</text>
                        
                        <!-- Second fraction -->
                        <circle cx="230" cy="60" r="40" fill="none" stroke="#333" stroke-width="2"/>
                        <line x1="230" y1="20" x2="230" y2="100" stroke="#333" stroke-width="2"/>
                        <line x1="190" y1="60" x2="270" y2="60" stroke="#333" stroke-width="2"/>
                        <path d="M 230 20 L 230 60 L 270 60 Z" fill="#80b0ff"/>
                        <text x="245" y="45" font-size="16" fill="#000">2/8</text>
                    </svg>
                </div>
                
                <h3>Lortzeko metodoak</h3>
                <ol>
                    <li><strong>Biderketa:</strong>
                        1/2 = (1 × 3) / (2 × 3) = 3/6</li>
                    <li><strong>Zatiketa:</strong>
                        12/16 ÷ 4 = 3/4</li>
                </ol>
                
                <h3>Adibidea</h3>
                <p>2/4 = 1/2, biek erdia adierazten dute</p>
            </div>
        `,
        'comparacion-fracciones': `
            <div class="modal-header">
                <h2>⚖️ Zatien Konparaketa</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Kasu Arruntak</h3>
                
                <div class="visual-container">
                    <svg width="300" height="120" viewBox="0 0 300 120">
                        <!-- First fraction 3/8 -->
                        <rect x="10" y="20" width="120" height="30" fill="none" stroke="#333" stroke-width="2"/>
                        <rect x="10" y="20" width="45" height="30" fill="#ffb5b5"/>
                        <line x1="25" y1="20" x2="25" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="40" y1="20" x2="40" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="55" y1="20" x2="55" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="70" y1="20" x2="70" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="85" y1="20" x2="85" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="100" y1="20" x2="100" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="115" y1="20" x2="115" y2="50" stroke="#333" stroke-width="1"/>
                        <text x="70" y="65" font-size="14" text-anchor="middle">3/8</text>
                        
                        <!-- Comparison sign -->
                        <text x="150" y="40" font-size="24" text-anchor="middle">&lt;</text>
                        
                        <!-- Second fraction 5/8 -->
                        <rect x="170" y="20" width="120" height="30" fill="none" stroke="#333" stroke-width="2"/>
                        <rect x="170" y="20" width="75" height="30" fill="#ffb5b5"/>
                        <line x1="185" y1="20" x2="185" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="200" y1="20" x2="200" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="215" y1="20" x2="215" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="230" y1="20" x2="230" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="245" y1="20" x2="245" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="260" y1="20" x2="260" y2="50" stroke="#333" stroke-width="1"/>
                        <line x1="275" y1="20" x2="275" y2="50" stroke="#333" stroke-width="1"/>
                        <text x="230" y="65" font-size="14" text-anchor="middle">5/8</text>
                    </svg>
                </div>
                
                <ul>
                    <li><strong>Izendatzaile berdina:</strong> 
                        Zenbakitzaileak konparatu
                        3/8 < 5/8</li>
                    <li><strong>Zenbakitzaile berdina:</strong> 
                        Izendatzaileak konparatu
                        3/7 > 3/9</li>
                </ul>
                
                <h3>Unitatearekiko Erlazioa</h3>
                <ul>
                    <li>5/3 > 1 (unitatea baino handiagoa)</li>
                    <li>3/5 < 1 (unitatea baino txikiagoa)</li>
                </ul>
            </div>
        `,
        'comun-denominador': `
            <div class="modal-header">
                <h2>➗ Izendatzaile Komunera Murriztea</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Zergatik da beharrezkoa?</h3>
                <p>Izendatzaile desberdineko zatiak batu edo kentzeko</p>
                
                <div class="visual-container">
                    <svg width="400" height="150" viewBox="0 0 400 150">
                        <!-- First fraction 2/3 -->
                        <rect x="20" y="20" width="60" height="60" fill="none" stroke="#333" stroke-width="2"/>
                        <line x1="40" y1="20" x2="40" y2="80" stroke="#333" stroke-width="2"/>
                        <line x1="60" y1="20" x2="60" y2="80" stroke="#333" stroke-width="2"/>
                        <rect x="20" y="20" width="40" height="60" fill="#b3e0ff"/>
                        <text x="50" y="100" font-size="16" text-anchor="middle">2/3</text>
                        
                        <!-- Plus sign -->
                        <text x="100" y="50" font-size="24" text-anchor="middle">+</text>
                        
                        <!-- Second fraction 1/4 -->
                        <rect x="120" y="20" width="80" height="60" fill="none" stroke="#333" stroke-width="2"/>
                        <line x1="140" y1="20" x2="140" y2="80" stroke="#333" stroke-width="2"/>
                        <line x1="160" y1="20" x2="160" y2="80" stroke="#333" stroke-width="2"/>
                        <line x1="180" y1="20" x2="180" y2="80" stroke="#333" stroke-width="2"/>
                        <rect x="120" y="20" width="20" height="60" fill="#ffcc99"/>
                        <text x="160" y="100" font-size="16" text-anchor="middle">1/4</text>
                        
                        <!-- Equals sign -->
                        <text x="220" y="50" font-size="24" text-anchor="middle">=</text>
                        
                        <!-- Common denominator 8/12 + 3/12 -->
                        <rect x="260" y="20" width="120" height="60" fill="none" stroke="#333" stroke-width="2"/>
                        <line x1="270" y1="20" x2="270" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="280" y1="20" x2="280" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="290" y1="20" x2="290" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="300" y1="20" x2="300" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="310" y1="20" x2="310" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="320" y1="20" x2="320" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="330" y1="20" x2="330" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="340" y1="20" x2="340" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="350" y1="20" x2="350" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="360" y1="20" x2="360" y2="80" stroke="#333" stroke-width="1"/>
                        <line x1="370" y1="20" x2="370" y2="80" stroke="#333" stroke-width="1"/>
                        <rect x="260" y="20" width="80" height="60" fill="#b3e0ff" fill-opacity="0.5"/>
                        <rect x="260" y="20" width="30" height="60" fill="#ffcc99" fill-opacity="0.5"/>
                        <text x="320" y="100" font-size="16" text-anchor="middle">8/12 + 3/12 = 11/12</text>
                    </svg>
                </div>
                
                <h3>Metodoa</h3>
                <p>Multiplo Komun Txikiena erabiltzea (M.K.T.)</p>
                
                <h3>Adibidea</h3>
                <p>2/3 + 1/4 = 8/12 + 3/12 = 11/12</p>
            </div>
        `,
        'operaciones-fracciones': `
            <div class="modal-header">
                <h2>🧮 Zatien Eragiketak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Batuketa eta Kenketa</h3>
                
                <div class="visual-container">
                    <svg width="300" height="80" viewBox="0 0 300 80">
                        <!-- First fraction -->
                        <text x="30" y="40" font-size="24" text-anchor="middle">2/7</text>
                        <!-- Plus sign -->
                        <text x="60" y="40" font-size="24" text-anchor="middle">+</text>
                        <!-- Second fraction -->
                        <text x="90" y="40" font-size="24" text-anchor="middle">3/7</text>
                        <!-- Equals sign -->
                        <text x="130" y="40" font-size="24" text-anchor="middle">=</text>
                        <!-- Result -->
                        <text x="165" y="30" font-size="24" text-anchor="middle">2 + 3</text>
                        <line x1="150" y1="45" x2="180" y2="45" stroke="#000" stroke-width="2"/>
                        <text x="165" y="65" font-size="24" text-anchor="middle">7</text>
                        <!-- Final -->
                        <text x="210" y="40" font-size="24" text-anchor="middle">=</text>
                        <text x="240" y="40" font-size="24" text-anchor="middle">5/7</text>
                    </svg>
                </div>
                
                <ul>
                    <li>Izendatzaile berdinarekin: 2/7 + 3/7 = 5/7</li>
                    <li>Izendatzaile desberdinekin: Izendatzaile komunera murriztu</li>
                </ul>
                
                <h3>Biderketa</h3>
                
                <div class="visual-container">
                    <svg width="350" height="80" viewBox="0 0 350 80">
                        <!-- First fraction -->
                        <text x="30" y="40" font-size="24" text-anchor="middle">2/3</text>
                        <!-- Times sign -->
                        <text x="60" y="40" font-size="24" text-anchor="middle">×</text>
                        <!-- Second fraction -->
                        <text x="90" y="40" font-size="24" text-anchor="middle">5/7</text>
                        <!-- Equals sign -->
                        <text x="130" y="40" font-size="24" text-anchor="middle">=</text>
                        <!-- Result -->
                        <text x="170" y="30" font-size="24" text-anchor="middle">2 × 5</text>
                        <line x1="145" y1="45" x2="195" y2="45" stroke="#000" stroke-width="2"/>
                        <text x="170" y="65" font-size="24" text-anchor="middle">3 × 7</text>
                        <!-- Final -->
                        <text x="235" y="40" font-size="24" text-anchor="middle">=</text>
                        <text x="280" y="30" font-size="24" text-anchor="middle">10</text>
                        <line x1="265" y1="45" x2="295" y2="45" stroke="#000" stroke-width="2"/>
                        <text x="280" y="65" font-size="24" text-anchor="middle">21</text>
                    </svg>
                </div>
                
                <ul>
                    <li>Zatia × Zatia: 2/3 × 5/7 = 10/21</li>
                    <li>Osoa × Zatia: 4 × 3/5 = 12/5</li>
                </ul>
                
                <h3>Zatiketa</h3>
                
                <div class="visual-container">
                    <svg width="400" height="80" viewBox="0 0 400 80">
                        <!-- First fraction -->
                        <text x="30" y="40" font-size="24" text-anchor="middle">3/4</text>
                        <!-- Division sign -->
                        <text x="60" y="40" font-size="24" text-anchor="middle">÷</text>
                        <!-- Second fraction -->
                        <text x="90" y="40" font-size="24" text-anchor="middle">2/5</text>
                        <!-- Equals sign -->
                        <text x="130" y="40" font-size="24" text-anchor="middle">=</text>
                        <!-- Multiply by reciprocal -->
                        <text x="170" y="40" font-size="24" text-anchor="middle">3/4</text>
                        <!-- Times sign -->
                        <text x="205" y="40" font-size="24" text-anchor="middle">×</text>
                        <!-- Reciprocal -->
                        <text x="240" y="40" font-size="24" text-anchor="middle">5/2</text>
                        <!-- Equals sign -->
                        <text x="280" y="40" font-size="24" text-anchor="middle">=</text>
                        <!-- Result -->
                        <text x="320" y="30" font-size="24" text-anchor="middle">15</text>
                        <line x1="310" y1="45" x2="330" y2="45" stroke="#000" stroke-width="2"/>
                        <text x="320" y="65" font-size="24" text-anchor="middle">8</text>
                    </svg>
                </div>
                
                <p>Alderantzizkoaz biderkatu: 3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8</p>
            </div>
        `,
        'problemas-fracciones': `
            <div class="modal-header">
                <h2>📝 Problemen Ebazpena</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>1. Kantitate baten zatia</h3>
                
                <div class="ejemplo-problema">
                    <div class="problema">
                        <p><strong>Problema:</strong> 20 euroko liburua erosten baduzu eta prezioaren 3/4 ordaintzen baduzu, zenbat ordaindu duzu?</p>
                    </div>
                    
                    <div class="solucion">
                        <p><strong>Ebazpena:</strong></p>
                        <div class="pasos">
                            <p><strong>1. Pausoa:</strong> Kantitate osoa identifikatu: 20 €</p>
                            <p><strong>2. Pausoa:</strong> Zatia adierazi: 3/4</p>
                            <p><strong>3. Pausoa:</strong> Kalkulatu: 20 € × 3/4 = (20 ÷ 4) × 3 = 5 × 3 = 15 €</p>
                        </div>
                        
                        <div class="visual-container">
                            <svg width="300" height="100" viewBox="0 0 300 100">
                                <!-- Money representation -->
                                <rect x="20" y="20" width="260" height="40" fill="none" stroke="#333" stroke-width="2"/>
                                <line x1="85" y1="20" x2="85" y2="60" stroke="#333" stroke-width="1"/>
                                <line x1="150" y1="20" x2="150" y2="60" stroke="#333" stroke-width="1"/>
                                <line x1="215" y1="20" x2="215" y2="60" stroke="#333" stroke-width="1"/>
                                <rect x="20" y="20" width="195" height="40" fill="#a3d977" fill-opacity="0.7"/>
                                <text x="150" y="90" font-size="16" text-anchor="middle">3/4 de 20€ = 15€</text>
                                <text x="52.5" y="45" font-size="16" text-anchor="middle">5€</text>
                                <text x="117.5" y="45" font-size="16" text-anchor="middle">5€</text>
                                <text x="182.5" y="45" font-size="16" text-anchor="middle">5€</text>
                                <text x="247.5" y="45" font-size="16" text-anchor="middle">5€</text>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <h3>2. Zati baten zatia</h3>
                
                <div class="ejemplo-problema">
                    <div class="problema">
                        <p><strong>Problema:</strong> Opari batetik 2/5 jaso dituzu. Ondoren, jasotakoaren 1/2 lagun bati oparitu diozu. Zein zati oparitu diozu lagunari hasierako oparitik?</p>
                    </div>
                    
                    <div class="solucion">
                        <p><strong>Ebazpena:</strong></p>
                        <div class="pasos">
                            <p><strong>1. Pausoa:</strong> Jasotako zatia: 2/5</p>
                            <p><strong>2. Pausoa:</strong> Oparitutako zatia (jasotakoaren zatia): 1/2</p>
                            <p><strong>3. Pausoa:</strong> Kalkulatu (zati baten zatia = biderketa): 
                            2/5 × 1/2 = 2/10 = 1/5</p>
                        </div>
                        
                        <div class="visual-container">
                            <svg width="320" height="200" viewBox="0 0 320 200">
                                <!-- Original gift - divided into 5 parts -->
                                <rect x="20" y="20" width="250" height="50" fill="none" stroke="#333" stroke-width="2"/>
                                <line x1="70" y1="20" x2="70" y2="70" stroke="#333" stroke-width="1"/>
                                <line x1="120" y1="20" x2="120" y2="70" stroke="#333" stroke-width="1"/>
                                <line x1="170" y1="20" x2="170" y2="70" stroke="#333" stroke-width="1"/>
                                <line x1="220" y1="20" x2="220" y2="70" stroke="#333" stroke-width="1"/>
                                <rect x="20" y="20" width="100" height="50" fill="#f7a4a4" fill-opacity="0.7"/>
                                <text x="145" y="90" font-size="14" text-anchor="middle">Hasierako oparia (2/5 jaso dituzu)</text>
                                
                                <!-- Your part - 2/5 -->
                                <rect x="45" y="110" width="100" height="30" fill="#f7a4a4" fill-opacity="0.7" stroke="#333" stroke-width="2"/>
                                <line x1="95" y1="110" x2="95" y2="140" stroke="#333" stroke-width="1"/>
                                <text x="95" y="155" font-size="14" text-anchor="middle">Jasotako zatia (2/5)</text>
                                
                                <!-- Friend's part - 1/5 of original -->
                                <rect x="45" y="110" width="50" height="30" fill="#a3d977" fill-opacity="0.7" stroke="#333" stroke-width="1"/>
                                <text x="70" y="180" font-size="14" text-anchor="middle">Lagunari emandakoa (1/5)</text>
                                <path d="M 70 180 L 70 145" stroke="#333" stroke-width="1" stroke-dasharray="5,2" fill="none"/>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <h3>3. Konparaketa-arazoak</h3>
                
                <div class="ejemplo-problema">
                    <div class="problema">
                        <p><strong>Problema:</strong> 60 minutuko klasean 3/5 ikasten da teoria, eta 45 minutuko klasean 2/3 ikasten da teoria. Zein klasetan ikasten da teoria gehiago minututan?</p>
                    </div>
                    
                    <div class="solucion">
                        <p><strong>Ebazpena:</strong></p>
                        <div class="pasos">
                            <p><strong>1. Pausoa:</strong> Kalkulatu lehenengo denbora:
                                3/5 × 60 min = 36 min</p>
                            <p><strong>2. Pausoa:</strong> Kalkulatu bigarren denbora:
                                2/3 × 45 min = 30 min</p>
                            <p><strong>3. Pausoa:</strong> Konparatu:
                                36 min > 30 min</p>
                            <p><strong>Ondorioa:</strong> 60 minutuko klasean teoria gehiago ikasten da (36 min vs 30 min).</p>
                        </div>
                        
                        <div class="visual-container">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 250">
    <!-- First class -->
    <rect x="20" y="20" width="240" height="40" fill="none" stroke="#333" stroke-width="2"/>
    <rect x="20" y="20" width="144" height="40" fill="#b3d9ff" fill-opacity="0.7"/>
    <text x="140" y="75" font-size="16" text-anchor="middle">60 minutuko klasea: 3/5 = 36 min</text>
    
    <!-- Second class -->
    <rect x="340" y="20" width="180" height="40" fill="none" stroke="#333" stroke-width="2"/>
    <rect x="340" y="20" width="120" height="40" fill="#d9b3ff" fill-opacity="0.7"/>
    <text x="430" y="75" font-size="16" text-anchor="middle">45 minutuko klasea: 2/3 = 30 min</text>
    
    <!-- Comparison -->
    <rect x="100" y="120" width="144" height="30" fill="#b3d9ff" fill-opacity="0.7" stroke="#333" stroke-width="1"/>
    <text x="172" y="140" font-size="16" text-anchor="middle">36 min</text>
    
    <rect x="100" y="170" width="120" height="30" fill="#d9b3ff" fill-opacity="0.7" stroke="#333" stroke-width="1"/>
    <text x="160" y="190" font-size="16" text-anchor="middle">30 min</text>
    
    <text x="350" y="150" font-size="18" font-weight="bold" text-anchor="middle">Ondorioa: 36 min > 30 min</text>
    <text x="300" y="220" font-size="18" font-weight="bold" text-anchor="middle">60 minutuko klasean teoria gehiago ikasten da</text>
</svg>
                        </div>
                    </div>
                </div>
                
                <h3>Praktikatzeko problemak</h3>
                <ol>
                    <li>Erosketarako 50€ baduzu eta 2/5 gastatu badituzu, zenbat diru geratzen zaizu?</li>
                    <li>Pizza bat 8 zati berdinetan banatu da. 3 zati jan dira. Zatien zenbakizko zenbat zati geratzen dira?</li>
                    <li>Bidaia baten 1/3 autoz egin duzu, 1/4 autobusez eta gainontzekoa trenez. Zer zati egin duzu trenez?</li>
                </ol>
            </div>
        `
    };

    // Add click event to modal triggers
    const modalTriggers = document.querySelectorAll('.abrir-modal');
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = trigger.closest('.tarjeta').dataset.modal;
            const modalOverlay = document.getElementById(`modal-${modalId}`);
            const modalContent = modalOverlay.querySelector('.modal-contenido');
            
            // Set modal content
            modalContent.innerHTML = contenidosModales[modalId];
            
            // Show modal
            modalOverlay.style.display = 'flex';
            
            // Close modal button
            const closeButton = modalContent.querySelector('.btn-cerrar-modal');
            closeButton.addEventListener('click', () => {
                modalOverlay.style.display = 'none';
            });
        });
    });

    // Add event listeners to close modals when clicking outside
    document.querySelectorAll('.modal-overlay').forEach(modalOverlay => {
        modalOverlay.addEventListener('click', (event) => {
            // Close modal only if clicking directly on the overlay
            if (event.target === modalOverlay) {
                modalOverlay.style.display = 'none';
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
});

/* Estilos adicionales para los elementos visuales */
const estilos = `
.visual-container {
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.ejemplo-problema {
    background-color: #f5f5f5;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.problema {
    border-left: 4px solid #4a90e2;
    padding-left: 10px;
    margin-bottom: 15px;
}

.solucion {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 5px;
}

.pasos {
    margin-left: 10px;
    border-left: 3px solid #8bc34a;
    padding-left: 15px;
}

/* Añadir estos estilos a tu hoja de estilos CSS */
`;

// Crear el elemento de estilo
const styleElement = document.createElement('style');
styleElement.textContent = estilos;
document.head.appendChild(styleElement);
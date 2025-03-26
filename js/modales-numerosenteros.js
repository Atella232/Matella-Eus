// Configuración de modales para Números Enteros
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

    // Contenido de los modales
    const contenidosModales = {
        'positivos-negativos': `
            <div class="modal-header">
                <h2>🔹 Zenbaki Positiboak eta Negatiboak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Zenbaki Berrien Beharra</h3>
                <p>Zenbaki naturalak ez dira nahikoak hauek adierazteko:</p>
                <ul>
                    <li>Zorrak</li>
                    <li>Zero azpiko tenperaturak</li>
                    <li>Lurrazpiko mailak</li>
                </ul>

                <h3>Zeinu Hitzarmenak</h3>
                <p>Zeinurik gabeko zenbaki bat positibotzat hartzen da: 3 = +3</p>
                <p>Eragiketetan, negatiboak normalean parentesi artean joaten dira: 5 + (–2)</p>

                <h3>Eguneroko Egoerak</h3>
                <div class="visual-examples" style="display: flex; justify-content: space-around; margin: 15px 0;">
                    <div class="example-card" style="text-align: center; padding: 10px; border: 1px solid #ddd; border-radius: 5px; width: 30%;">
                        <div style="font-size: 24px;">🌡️</div>
                        <p>Tenperatura:<br>+8 ºC / –5 ºC</p>
                    </div>
                    <div class="example-card" style="text-align: center; padding: 10px; border: 1px solid #ddd; border-radius: 5px; width: 30%;">
                        <div style="font-size: 24px;">💰</div>
                        <p>Kontu saldoa:<br>+150 € / –85 €</p>
                    </div>
                    <div class="example-card" style="text-align: center; padding: 10px; border: 1px solid #ddd; border-radius: 5px; width: 30%;">
                        <div style="font-size: 24px;">🏢</div>
                        <p>Eraikineko mailak:<br>0 = beheko solairua<br>–1 = lehen sotoa</p>
                    </div>
                </div>

                <h3>Zenbakizko Zuzenean Irudikapena</h3>
                <div style="text-align: center; margin: 15px 0;">
                    <svg width="100%" height="80" viewBox="0 0 500 80" style="max-width: 500px;">
                        <!-- Línea de la recta numérica -->
                        <line x1="20" y1="40" x2="480" y2="40" stroke="black" stroke-width="2" />
                        
                        <!-- Marcas para cada número -->
                        <line x1="70" y1="35" x2="70" y2="45" stroke="black" stroke-width="2" />
                        <line x1="130" y1="35" x2="130" y2="45" stroke="black" stroke-width="2" />
                        <line x1="190" y1="35" x2="190" y2="45" stroke="black" stroke-width="2" />
                        <line x1="250" y1="30" x2="250" y2="50" stroke="black" stroke-width="2" />
                        <line x1="310" y1="35" x2="310" y2="45" stroke="black" stroke-width="2" />
                        <line x1="370" y1="35" x2="370" y2="45" stroke="black" stroke-width="2" />
                        <line x1="430" y1="35" x2="430" y2="45" stroke="black" stroke-width="2" />
                        
                        <!-- Números -->
                        <text x="67" y="65" text-anchor="middle" font-size="14">-3</text>
                        <text x="127" y="65" text-anchor="middle" font-size="14">-2</text>
                        <text x="187" y="65" text-anchor="middle" font-size="14">-1</text>
                        <text x="250" y="65" text-anchor="middle" font-size="16" font-weight="bold">0</text>
                        <text x="310" y="65" text-anchor="middle" font-size="14">1</text>
                        <text x="370" y="65" text-anchor="middle" font-size="14">2</text>
                        <text x="430" y="65" text-anchor="middle" font-size="14">3</text>
                        
                        <!-- Flechas indicativas -->
                        <text x="40" y="25" text-anchor="middle" font-size="12" fill="#d32f2f">Negatiboak</text>
                        <text x="460" y="25" text-anchor="middle" font-size="12" fill="#388e3c">Positiboak</text>
                        <path d="M70,20 L190,20" stroke="#d32f2f" stroke-width="2" fill="none" />
                        <path d="M310,20 L430,20" stroke="#388e3c" stroke-width="2" fill="none" />
                        <polygon points="60,20 75,15 75,25" fill="#d32f2f" />
                        <polygon points="440,20 425,15 425,25" fill="#388e3c" />
                    </svg>
                </div>
            </div>
        `,
        'conjunto-enteros': `
            <div class="modal-header">
                <h2>🔢 Zenbaki Osoen Multzoa (ℤ)</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>ℤ Multzoaren Elementuak</h3>
                <div style="display: flex; justify-content: center; margin: 15px 0;">
                    <div style="border: 2px solid #3f51b5; border-radius: 10px; padding: 15px; text-align: center; width: 80%;">
                        <div style="font-weight: bold; font-size: 16px; margin-bottom: 10px;">ℤ = {..., -3, -2, -1, 0, 1, 2, 3, ...}</div>
                        <div style="display: flex; justify-content: space-around; margin-top: 10px;">
                            <div style="background-color: #ffcdd2; padding: 5px 15px; border-radius: 5px;">
                                Negatiboak<br>
                                {..., -3, -2, -1}
                            </div>
                            <div style="background-color: #e3f2fd; padding: 5px 15px; border-radius: 5px;">
                                {0}
                            </div>
                            <div style="background-color: #c8e6c9; padding: 5px 15px; border-radius: 5px;">
                                Positiboak<br>
                                {1, 2, 3, ...}
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Ordena Zenbakizko Zuzenean</h3>
                <p>a < b ↔ a b-ren ezkerraldean dago</p>
                <p>Adibidez: –4 < –1 < 0 < +3</p>
                <div style="text-align: center; margin: 15px 0;">
                    <svg width="100%" height="60" viewBox="0 0 500 60" style="max-width: 500px;">
                        <line x1="50" y1="30" x2="450" y2="30" stroke="black" stroke-width="2" />
                        <circle cx="100" cy="30" r="6" fill="#d32f2f" />
                        <circle cx="200" cy="30" r="6" fill="#ff9800" />
                        <circle cx="250" cy="30" r="6" fill="#2196f3" />
                        <circle cx="350" cy="30" r="6" fill="#4caf50" />
                        <text x="100" y="50" text-anchor="middle" font-size="14">-4</text>
                        <text x="200" y="50" text-anchor="middle" font-size="14">-1</text>
                        <text x="250" y="50" text-anchor="middle" font-size="14">0</text>
                        <text x="350" y="50" text-anchor="middle" font-size="14">+3</text>
                        <text x="153" y="20" text-anchor="middle" font-size="14" font-weight="bold">&#60;</text>
                        <text x="225" y="20" text-anchor="middle" font-size="14" font-weight="bold">&#60;</text>
                        <text x="300" y="20" text-anchor="middle" font-size="14" font-weight="bold">&#60;</text>
                    </svg>
                </div>

                <h3>Balio Absolutua</h3>
                <p>Zuzenean zerotik distantzia:</p>
                <div style="display: flex; justify-content: center; margin: 15px 0;">
                    <svg width="100%" height="100" viewBox="0 0 500 100" style="max-width: 450px;">
                        <line x1="50" y1="50" x2="450" y2="50" stroke="black" stroke-width="2" />
                        <line x1="250" y1="40" x2="250" y2="60" stroke="black" stroke-width="2" />
                        <circle cx="150" cy="50" r="6" fill="#e91e63" />
                        <circle cx="250" cy="50" r="6" fill="black" />
                        <circle cx="350" cy="50" r="6" fill="#4caf50" />
                        <text x="150" y="75" text-anchor="middle" font-size="14">-7</text>
                        <text x="250" y="75" text-anchor="middle" font-size="14">0</text>
                        <text x="350" y="75" text-anchor="middle" font-size="14">+4</text>
                        
                        <!-- Flechas de valor absoluto -->
                        <line x1="250" y1="25" x2="150" y2="25" stroke="#e91e63" stroke-width="2" />
                        <polygon points="155,25 160,20 160,30" fill="#e91e63" />
                        <text x="200" y="20" text-anchor="middle" font-size="14" fill="#e91e63">|–7| = 7</text>
                        
                        <line x1="250" y1="15" x2="350" y2="15" stroke="#4caf50" stroke-width="2" />
                        <polygon points="345,15 340,10 340,20" fill="#4caf50" />
                        <text x="300" y="10" text-anchor="middle" font-size="14" fill="#4caf50">|+4| = 4</text>
                    </svg>
                </div>

                <h3>Konparazioa</h3>
                <ul>
                    <li>Positiboen artean: handiena balio absolutu handiena duena da</li>
                    <li>Edozein positibo > 0 > edozein negatibo</li>
                    <li>Negatiboen artean: handiena balio absolutu txikiena duena da</li>
                </ul>
            </div>
        `,
        'sumas-restas': `
            <div class="modal-header">
                <h2>➕➖ Zenbaki Osoen Baturak eta Kenketak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Zeinu Bera</h3>
                <div style="display: flex; margin: 15px 0; justify-content: center;">
                    <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; width: 80%; background-color: #f5f5f5;">
                        <div style="text-align: center; margin-bottom: 15px;">
                            <span style="font-size: 18px; font-weight: bold;">–3 – 8 = –11</span>
                        </div>
                        <div style="display: flex; justify-content: center; margin-bottom: 10px; align-items: center;">
                            <svg width="360" height="80" viewBox="0 0 360 80">
                                <!-- Flecha para el primer número -->
                                <line x1="180" y1="40" x2="150" y2="40" stroke="#e91e63" stroke-width="2" />
                                <polygon points="155,40 160,35 160,45" fill="#e91e63" />
                                <text x="165" y="30" text-anchor="middle" font-size="14" fill="#e91e63">-3</text>
                                
                                <!-- Flecha para el segundo número -->
                                <line x1="150" y1="40" x2="70" y2="40" stroke="#9c27b0" stroke-width="2" />
                                <polygon points="75,40 80,35 80,45" fill="#9c27b0" />
                                <text x="110" y="30" text-anchor="middle" font-size="14" fill="#9c27b0">-8</text>
                                
                                <!-- Flecha para el resultado -->
                                <line x1="180" y1="60" x2="70" y2="60" stroke="#673ab7" stroke-width="3" />
                                <polygon points="75,60 80,55 80,65" fill="#673ab7" />
                                <text x="125" y="75" text-anchor="middle" font-size="16" font-weight="bold" fill="#673ab7">-11</text>
                                
                                <!-- Escala numérica -->
                                <line x1="30" y1="40" x2="330" y2="40" stroke="black" stroke-width="1" />
                                <text x="180" y="55" text-anchor="middle" font-size="12">0</text>
                                <line x1="180" y1="35" x2="180" y2="45" stroke="black" stroke-width="1" />
                                <text x="240" y="55" text-anchor="middle" font-size="12">+6</text>
                                <line x1="240" y1="35" x2="240" y2="45" stroke="black" stroke-width="1" />
                                <text x="300" y="55" text-anchor="middle" font-size="12">+12</text>
                                <line x1="300" y1="35" x2="300" y2="45" stroke="black" stroke-width="1" />
                                <text x="120" y="55" text-anchor="middle" font-size="12">-6</text>
                                <line x1="120" y1="35" x2="120" y2="45" stroke="black" stroke-width="1" />
                                <text x="60" y="55" text-anchor="middle" font-size="12">-12</text>
                                <line x1="60" y1="35" x2="60" y2="45" stroke="black" stroke-width="1" />
                            </svg>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>Balio absolutuak batzen dira</li>
                    <li>Zeinua mantentzen da</li>
                </ul>

                <h3>Zeinu Desberdina</h3>
                <div style="display: flex; margin: 15px 0; justify-content: center;">
                    <div style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; width: 80%; background-color: #f5f5f5;">
                        <div style="text-align: center; margin-bottom: 15px;">
                            <span style="font-size: 18px; font-weight: bold;">+4 – 9 = –5</span>
                        </div>
                        <div style="display: flex; justify-content: center; margin-bottom: 10px; align-items: center;">
                            <svg width="360" height="80" viewBox="0 0 360 80">
                                <!-- Flecha para el primer número -->
                                <line x1="180" y1="40" x2="220" y2="40" stroke="#4caf50" stroke-width="2" />
                                <polygon points="215,40 210,35 210,45" fill="#4caf50" />
                                <text x="200" y="30" text-anchor="middle" font-size="14" fill="#4caf50">+4</text>
                                
                                <!-- Flecha para el segundo número -->
                                <line x1="180" y1="40" x2="90" y2="40" stroke="#f44336" stroke-width="2" />
                                <polygon points="95,40 100,35 100,45" fill="#f44336" />
                                <text x="135" y="30" text-anchor="middle" font-size="14" fill="#f44336">-9</text>
                                
                                <!-- Flecha para el resultado -->
                                <line x1="180" y1="60" x2="130" y2="60" stroke="#673ab7" stroke-width="3" />
                                <polygon points="135,60 140,55 140,65" fill="#673ab7" />
                                <text x="155" y="75" text-anchor="middle" font-size="16" font-weight="bold" fill="#673ab7">-5</text>
                                
                                <!-- Escala numérica -->
                                <line x1="30" y1="40" x2="330" y2="40" stroke="black" stroke-width="1" />
                                <text x="180" y="55" text-anchor="middle" font-size="12">0</text>
                                <line x1="180" y1="35" x2="180" y2="45" stroke="black" stroke-width="1" />
                                <text x="220" y="55" text-anchor="middle" font-size="12">+4</text>
                                <line x1="220" y1="35" x2="220" y2="45" stroke="black" stroke-width="1" />
                                <text x="260" y="55" text-anchor="middle" font-size="12">+8</text>
                                <line x1="260" y1="35" x2="260" y2="45" stroke="black" stroke-width="1" />
                                <text x="140" y="55" text-anchor="middle" font-size="12">-4</text>
                                <line x1="140" y1="35" x2="140" y2="45" stroke="black" stroke-width="1" />
                                <text x="100" y="55" text-anchor="middle" font-size="12">-8</text>
                                <line x1="100" y1="35" x2="100" y2="45" stroke="black" stroke-width="1" />
                            </svg>
                        </div>
                    </div>
                </div>
                <ul>
                    <li>Balio absolutuak kentzen dira</li>
                    <li>Zeinua balio absolutu handiena duen zenbakiarena da</li>
                </ul>

                <h3>Bi Zenbaki Baino Gehiago</h3>
                <p>Edozein modutan taldeka daitezke zeinuak errespetatuz</p>
                <div style="background-color: #e8f5e9; border-radius: 8px; padding: 15px; margin: 15px 0; border-left: 4px solid #4caf50;">
                    <p style="font-weight: bold;">Adibidez: 3 – 8 + 6 – 4</p>
                    <p>= –5 + 6 – 4 <span style="color: #4caf50;">(lehenengo 3 – 8 = –5)</span></p>
                    <p>= 1 – 4 <span style="color: #4caf50;">(gero –5 + 6 = 1)</span></p>
                    <p>= –3 <span style="color: #4caf50;">(azkenik 1 – 4 = –3)</span></p>
                </div>
            </div>
        `,
        'parentesis': `
            <div class="modal-header">
                <h2>🔄 Baturak eta Kenketak Parentesiekin</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Parentesiak Kentzea</h3>
                
                <div style="background-color: #e3f2fd; border-radius: 8px; padding: 15px; margin: 15px 0; border-left: 4px solid #2196f3;">
                    <p style="font-weight: bold;">Aurrean "+" badago, zeinuak ez dira aldatzen</p>
                    <div style="display: flex; justify-content: center; margin: 10px 0;">
                        <svg width="400" height="60" viewBox="0 0 400 60">
                            <rect x="70" y="10" width="140" height="40" rx="5" ry="5" fill="#bbdefb" stroke="#2196f3" />
                            <text x="140" y="35" text-anchor="middle" font-size="16">(+3 – 6 + 5)</text>
                            <text x="50" y="35" text-anchor="middle" font-size="20" fill="#2196f3">+</text>
                            <text x="250" y="35" text-anchor="middle" font-size="20">=</text>
                            <text x="330" y="35" text-anchor="middle" font-size="16">+3 – 6 + 5</text>
                        </svg>
                    </div>
                </div>
                
                <div style="background-color: #fce4ec; border-radius: 8px; padding: 15px; margin: 15px 0; border-left: 4px solid #e91e63;">
                    <p style="font-weight: bold;">Aurrean "–" badago, zeinu guztiak aldatzen dira</p>
                    <div style="display: flex; justify-content: center; margin: 10px 0;">
                        <svg width="400" height="60" viewBox="0 0 400 60">
                            <rect x="70" y="10" width="140" height="40" rx="5" ry="5" fill="#f8bbd0" stroke="#e91e63" />
                            <text x="140" y="35" text-anchor="middle" font-size="16">(+8 – 6 – 5)</text>
                            <text x="50" y="35" text-anchor="middle" font-size="20" fill="#e91e63">–</text>
                            <text x="250" y="35" text-anchor="middle" font-size="20">=</text>
                            <text x="330" y="35" text-anchor="middle" font-size="16">–8 + 6 + 5</text>
                        </svg>
                    </div>
                </div>

                <h3>Oinarrizko Arauak</h3>
                <div style="display: flex; flex-wrap: wrap; justify-content: space-around; margin: 15px 0;">
                    <div style="width: 45%; background-color: #f5f5f5; border-radius: 5px; padding: 10px; margin: 5px; text-align: center;">
                        <div style="font-size: 16px; font-weight: bold;">(+a) = +a</div>
                    </div>
                    <div style="width: 45%; background-color: #f5f5f5; border-radius: 5px; padding: 10px; margin: 5px; text-align: center;">
                        <div style="font-size: 16px; font-weight: bold;">(–a) = –a</div>
                    </div>
                    <div style="width: 45%; background-color: #f5f5f5; border-radius: 5px; padding: 10px; margin: 5px; text-align: center;">
                        <div style="font-size: 16px; font-weight: bold;">– (+a) = –a</div>
                    </div>
                    <div style="width: 45%; background-color: #f5f5f5; border-radius: 5px; padding: 10px; margin: 5px; text-align: center;">
                        <div style="font-size: 16px; font-weight: bold;">– (–a) = +a</div>
                    </div>
                </div>
            </div>
        `,
        'multiplicacion-division': `
    <div class="modal-header">
        <h2>✖️➗ Biderketa eta Zatiketa</h2>
        <button class="btn-cerrar-modal">&times;</button>
    </div>
    <div class="modal-body">
        <h3>Zeinuen Araua</h3>
        <div style="display: flex; justify-content: center; margin: 15px 0;">
            <table style="border-collapse: collapse; width: 80%; text-align: center; border: 2px solid #3f51b5;">
                <tr style="background-color: #c5cae9;">
                    <th style="padding: 12px; border: 1px solid #3f51b5;">Eragiketa</th>
                    <th style="padding: 12px; border: 1px solid #3f51b5;">Emaitza</th>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #3f51b5; font-weight: bold;">(+) × (+)</td>
                    <td style="padding: 10px; border: 1px solid #3f51b5; color: #4caf50; font-size: 18px; font-weight: bold;">+</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #3f51b5; font-weight: bold;">(–) × (–)</td>
                    <td style="padding: 10px; border: 1px solid #3f51b5; color: #4caf50; font-size: 18px; font-weight: bold;">+</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #3f51b5; font-weight: bold;">(+) × (–)</td>
                    <td style="padding: 10px; border: 1px solid #3f51b5; color: #f44336; font-size: 18px; font-weight: bold;">–</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #3f51b5; font-weight: bold;">(–) × (+)</td>
                    <td style="padding: 10px; border: 1px solid #3f51b5; color: #f44336; font-size: 18px; font-weight: bold;">–</td>
                </tr>
            </table>
        </div>
        
        <div style="display: flex; justify-content: center; margin: 20px 0;">
            <svg width="450" height="150" viewBox="0 0 450 150">
                <!-- Cuadro verde - Berdinak -->
                <rect x="20" y="20" width="180" height="110" rx="10" ry="10" fill="#e8f5e9" stroke="#4caf50" stroke-width="2"/>
                <text x="110" y="50" text-anchor="middle" font-size="18" font-weight="bold">Berdinak: (+)</text>
                <text x="110" y="85" text-anchor="middle" font-size="16">+ × + = +</text>
                <text x="110" y="115" text-anchor="middle" font-size="16">– × – = +</text>
                
                <!-- Cuadro rojo - Desberdinak -->
                <rect x="250" y="20" width="180" height="110" rx="10" ry="10" fill="#ffebee" stroke="#f44336" stroke-width="2"/>
                <text x="340" y="50" text-anchor="middle" font-size="18" font-weight="bold">Desberdinak: (–)</text>
                <text x="340" y="85" text-anchor="middle" font-size="16">+ × – = –</text>
                <text x="340" y="115" text-anchor="middle" font-size="16">– × + = –</text>
            </svg>
        </div>

        <h3>Propietate Asoziatiboa</h3>
        <div style="background-color: #ede7f6; border-radius: 8px; padding: 15px; margin: 15px 0; border-left: 4px solid #673ab7;">
            <p style="font-weight: bold;">Adibidez: (–2) × (–3) × (–5)</p>
            <p>= (+6) × (–5) <span style="color: #673ab7;">(lehenengo (–2) × (–3) = +6)</span></p>
            <p>= –30 <span style="color: #673ab7;">(gero (+6) × (–5) = –30)</span></p>
        </div>

        <h3>Zatiketa</h3>
        <p>Berdin zeinuen arau bera biderketarako bezala</p>
        <div style="display: flex; flex-wrap: wrap; justify-content: space-around; margin: 15px 0;">
            <div style="width: 30%; background-color: #ffebee; border-radius: 8px; padding: 12px; margin: 5px; text-align: center;">
                <div style="font-size: 16px; font-weight: bold;">(–12) ÷ (+4) = –3</div>
                <div style="color: #f44336; margin-top: 5px;">Desberdina: (–)</div>
            </div>
            <div style="width: 30%; background-color: #ffebee; border-radius: 8px; padding: 12px; margin: 5px; text-align: center;">
                <div style="font-size: 16px; font-weight: bold;">(+30) ÷ (–5) = –6</div>
                <div style="color: #f44336; margin-top: 5px;">Desberdina: (–)</div>
            </div>
            <div style="width: 30%; background-color: #e8f5e9; border-radius: 8px; padding: 12px; margin: 5px; text-align: center;">
                <div style="font-size: 16px; font-weight: bold;">(–15) ÷ (–3) = +5</div>
                <div style="color: #4caf50; margin-top: 5px;">Berdina: (+)</div>
            </div>
        </div>
    </div>
`,
        'operaciones-combinadas': `
            <div class="modal-header">
                <h2>🧮 Eragiketa Konbinatuak</h2>
                <button class="btn-cerrar-modal">&times;</button>
            </div>
            <div class="modal-body">
                <h3>Lehentasun Ordena</h3>
                <div style="display: flex; justify-content: center; margin: 15px 0;">
                    <div style="width: 80%;">
                        <div style="background-color: #ffd54f; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; margin: 0 auto;">
                            <span style="font-weight: bold; font-size: 20px;">1</span>
                        </div>
                        <div style="background-color: #ffecb3; text-align: center; padding: 10px; border-radius: 0 0 8px 8px; font-weight: bold;">
                            Parentesiak
                        </div>
                        
                        <div style="margin-top: 15px; background-color: #81c784; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; margin: 0 auto;">
                            <span style="font-weight: bold; font-size: 20px;">2</span>
                        </div>
                        <div style="background-color: #c8e6c9; text-align: center; padding: 10px; border-radius: 0 0 8px 8px; font-weight: bold;">
                            Biderketak eta zatiketak
                        </div>
                        
                        <div style="margin-top: 15px; background-color: #64b5f6; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; margin: 0 auto;">
                            <span style="font-weight: bold; font-size: 20px;">3</span>
                        </div>
                        <div style="background-color: #bbdefb; text-align: center; padding: 10px; border-radius: 0 0 8px 8px; font-weight: bold;">
                            Baturak eta kenketak
                        </div>
                    </div>
                </div>

                <h3>1. Adibidea</h3>
                <div style="background-color: #f5f5f5; border-radius: 8px; padding: 15px; margin: 15px 0; border-left: 4px solid #9e9e9e;">
                    <div style="font-weight: bold; font-size: 16px; margin-bottom: 10px; text-align: center;">
                        15 – 3 · [6 – (–12) ÷ (+4)]
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="background-color: #ffd54f; border-radius: 50%; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
                                <span style="font-weight: bold;">1</span>
                            </div>
                            <div>
                                Barruko parentesian eragin: (–12) ÷ (+4) = –3
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="background-color: #81c784; border-radius: 50%; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
                                <span style="font-weight: bold;">2</span>
                            </div>
                            <div>
                                Ordeztu: 15 – 3 · [6 – (–3)] = 15 – 3 · [6 + 3] = 15 – 3 · 9
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="background-color: #64b5f6; border-radius: 50%; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
                                <span style="font-weight: bold;">3</span>
                            </div>
                            <div>
                                Azken emaitza: 15 – 27 = –12
                            </div>
                        </div>
                    </div>
                </div>

                <h3>2. Adibidea</h3>
                <div style="background-color: #f5f5f5; border-radius: 8px; padding: 15px; margin: 15px 0; border-left: 4px solid #9e9e9e;">
                    <div style="font-weight: bold; font-size: 16px; margin-bottom: 10px; text-align: center;">
                        [(+2) + (–12)] – [(3 – 7) – (7 – 2)]
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <div style="display: flex; align-items: flex-start; gap: 10px;">
                            <div style="background-color: #ffd54f; border-radius: 50%; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center; margin-top: 5px; flex-shrink: 0;">
                                <span style="font-weight: bold;">1</span>
                            </div>
                            <div>
                                <p>Kortxete bakoitzaren barruan ebatzi:</p>
                                <ul style="margin-top: 5px; padding-left: 20px;">
                                    <li>(+2) + (–12) = –10</li>
                                    <li>(3 – 7) = –4</li>
                                    <li>(7 – 2) = 5</li>
                                    <li>[(–4) – (+5)] = –4 – 5 = –9</li>
                                </ul>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="background-color: #64b5f6; border-radius: 50%; width: 25px; height: 25px; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
                                <span style="font-weight: bold;">2</span>
                            </div>
                            <div>
                                Kortxeteen arteko kenketa: –10 – (–9) = –10 + 9 = –1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    };

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
});
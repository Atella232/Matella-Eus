// Contenido de modales para Divisibilidad
const modalContents = {
    'relacion-divisibilidad': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Zenbaki bat beste zenbaki batez zatigarria da baldin eta lehenengoa bigarrenaz zatitzean, hondarra zero bada.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Adibidea</th>
                                <th>Zatigarritasuna</th>
                                <th>Azalpena</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>24 ÷ 6</td>
                                <td>Zatigarria</td>
                                <td>24 ÷ 6 = 4 (hondarrik gabe)</td>
                            </tr>
                            <tr>
                                <td>25 ÷ 7</td>
                                <td>Ez zatigarria</td>
                                <td>25 ÷ 7 = 3 eta 4 hondar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h4>Kontzeptu Garrantzitsuak</h4>
                <ul>
                    <li>b a-ren zatitzailea bada, orduan a b-ren multiploa da</li>
                    <li>Zatigarritasunak zatiketa zehatza esan nahi du</li>
                </ul>
                
                <div class="visual-aid">
                    <svg width="400" height="220" xmlns="http://www.w3.org/2000/svg">
                        <!-- Zenbakien adierazpena -->
                        <circle cx="100" cy="60" r="40" fill="#4682B4" />
                        <text x="100" y="65" text-anchor="middle" fill="white" font-size="18">24</text>
                        <circle cx="300" cy="60" r="40" fill="#4682B4" />
                        <text x="300" y="65" text-anchor="middle" fill="white" font-size="18">6</text>
                        
                        <!-- Zatigarritasunaren adierazpena -->
                        <line x1="140" y1="60" x2="260" y2="60" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
                        <text x="200" y="45" text-anchor="middle" fill="#333" font-size="14">Zatigarria da</text>
                        
                        <!-- Zatiketa -->
                        <rect x="120" y="120" width="160" height="80" fill="#f0f0f0" stroke="#333" />
                        <text x="200" y="145" text-anchor="middle" font-size="16">24 ÷ 6 = 4</text>
                        <text x="200" y="175" text-anchor="middle" font-size="14">Hondarra = 0</text>
                        <text x="200" y="195" text-anchor="middle" font-size="12">24 = 6 × 4 + 0</text>
                        
                        <!-- Definizioa -->
                        <defs>
                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                <path d="M0,0 L0,6 L9,3 z" fill="#333" />
                            </marker>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    `,
    'multiplos': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Multiploak zenbaki bat zenbaki naturalez biderkatzean lortzen diren emaitzak dira.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Zenbakia</th>
                                <th>Multiploak</th>
                                <th>Patroia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>4</td>
                                <td>0, 4, 8, 12, 16, 20...</td>
                                <td>4 × (0, 1, 2, 3, 4, 5...)</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>0, 5, 10, 15, 20, 25...</td>
                                <td>5 × (0, 1, 2, 3, 4, 5...)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="visual-aid">
                    <svg width="400" height="180" xmlns="http://www.w3.org/2000/svg">
                        <!-- 4ren multiploen zenbaki-lerroa -->
                        <line x1="20" y1="50" x2="380" y2="50" stroke="#333" stroke-width="2" />
                        
                        <!-- Eskalaren markak -->
                        <line x1="20" y1="45" x2="20" y2="55" stroke="#333" stroke-width="2" />
                        <text x="20" y="70" text-anchor="middle" font-size="14">0</text>
                        
                        <line x1="80" y1="45" x2="80" y2="55" stroke="#333" stroke-width="2" />
                        <text x="80" y="70" text-anchor="middle" font-size="14">4</text>
                        <circle cx="80" cy="50" r="8" fill="#4682B4" />
                        
                        <line x1="140" y1="45" x2="140" y2="55" stroke="#333" stroke-width="2" />
                        <text x="140" y="70" text-anchor="middle" font-size="14">8</text>
                        <circle cx="140" cy="50" r="8" fill="#4682B4" />
                        
                        <line x1="200" y1="45" x2="200" y2="55" stroke="#333" stroke-width="2" />
                        <text x="200" y="70" text-anchor="middle" font-size="14">12</text>
                        <circle cx="200" cy="50" r="8" fill="#4682B4" />
                        
                        <line x1="260" y1="45" x2="260" y2="55" stroke="#333" stroke-width="2" />
                        <text x="260" y="70" text-anchor="middle" font-size="14">16</text>
                        <circle cx="260" cy="50" r="8" fill="#4682B4" />
                        
                        <line x1="320" y1="45" x2="320" y2="55" stroke="#333" stroke-width="2" />
                        <text x="320" y="70" text-anchor="middle" font-size="14">20</text>
                        <circle cx="320" cy="50" r="8" fill="#4682B4" />
                        
                        <line x1="380" y1="45" x2="380" y2="55" stroke="#333" stroke-width="2" />
                        <text x="380" y="70" text-anchor="middle" font-size="14">24</text>
                        
                        <!-- Izenburua -->
                        <text x="200" y="30" text-anchor="middle" font-weight="bold" font-size="16">4ren Multiploak</text>
                        
                        <!-- Formula -->
                        <text x="200" y="110" text-anchor="middle" font-size="14">4 × 0 = 0</text>
                        <text x="200" y="130" text-anchor="middle" font-size="14">4 × 1 = 4</text>
                        <text x="200" y="150" text-anchor="middle" font-size="14">4 × 2 = 8 ...</text>
                    </svg>
                </div>
            </div>
        </div>
    `,
    'divisores': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Zatitzaileak zenbaki bat hondarrik utzi gabe zatitzen duten zenbakiak dira.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Zenbakia</th>
                                <th>Zatitzaileak</th>
                                <th>Kopurua</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12</td>
                                <td>1, 2, 3, 4, 6, 12</td>
                                <td>6 zatitzaile</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>1, 3, 5, 15</td>
                                <td>4 zatitzaile</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="visual-aid">
                    <svg width="400" height="240" xmlns="http://www.w3.org/2000/svg">
                        <!-- Zenbakia erdian -->
                        <circle cx="200" cy="120" r="40" fill="#6A5ACD" />
                        <text x="200" y="125" text-anchor="middle" fill="white" font-size="18">12</text>
                        
                        <!-- Zatitzaileak inguruan -->
                        <circle cx="100" cy="70" r="25" fill="#4682B4" />
                        <text x="100" y="75" text-anchor="middle" fill="white" font-size="16">1</text>
                        <line x1="130" y1="85" x2="170" y2="100" stroke="#333" stroke-width="2" />
                        
                        <circle cx="300" cy="70" r="25" fill="#4682B4" />
                        <text x="300" y="75" text-anchor="middle" fill="white" font-size="16">2</text>
                        <line x1="270" y1="85" x2="230" y2="100" stroke="#333" stroke-width="2" />
                        
                        <circle cx="100" cy="170" r="25" fill="#4682B4" />
                        <text x="100" y="175" text-anchor="middle" fill="white" font-size="16">3</text>
                        <line x1="130" y1="155" x2="170" y2="140" stroke="#333" stroke-width="2" />
                        
                        <circle cx="300" cy="170" r="25" fill="#4682B4" />
                        <text x="300" y="175" text-anchor="middle" fill="white" font-size="16">4</text>
                        <line x1="270" y1="155" x2="230" y2="140" stroke="#333" stroke-width="2" />
                        
                        <circle cx="200" cy="210" r="25" fill="#4682B4" />
                        <text x="200" y="215" text-anchor="middle" fill="white" font-size="16">6</text>
                        <line x1="200" y1="180" x2="200" y2="160" stroke="#333" stroke-width="2" />
                        
                        <circle cx="200" cy="30" r="25" fill="#4682B4" />
                        <text x="200" y="35" text-anchor="middle" fill="white" font-size="16">12</text>
                        <line x1="200" y1="60" x2="200" y2="80" stroke="#333" stroke-width="2" />
                    </svg>
                </div>
            </div>
        </div>
    `,
    'criterios-divisibilidad': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Zatigarritasun Irizpide Azkarrak</h4>
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Zenbakia</th>
                                <th>Zatigarritasun Irizpidea</th>
                                <th>Adibideak</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2</td>
                                <td>Zifra bikoitiz amaitzen da (0, 2, 4, 6, 8)</td>
                                <td>24, 36, 50, 128</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Zifren batura 3ren multiploa da</td>
                                <td>123 (1+2+3=6), 222, 333</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Azken bi zifrek osatzen duten zenbakia 4z zatigarria da</td>
                                <td>124 (24 4z zatigarria da), 2048</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>0 edo 5ez amaitzen da</td>
                                <td>25, 50, 100, 125</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Zifren batura 9ren multiploa da</td>
                                <td>18 (1+8=9), 27, 36, 45</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>0z amaitzen da</td>
                                <td>10, 20, 30, 100, 1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <h4>Aholku Praktikoak</h4>
                <ul>
                    <li>Irizpide hauek zatigarritasuna azkar egiaztatzea ahalbidetzen dute</li>
                    <li>Ez dute zatiketa osoa ordezkatzen, egiaztatzeko tresnak dira</li>
                    <li>Irizpide hauek praktikatzeak ulermen matematikoa hobetzen du</li>
                </ul>
                
                <div class="visual-aid">
                    <svg width="400" height="350" xmlns="http://www.w3.org/2000/svg">
                        <text x="200" y="30" text-anchor="middle" font-weight="bold" font-size="16">Zatigarritasun Irizpide Azkarrak</text>
                        
                        <!-- 2ren zatigarritasuna -->
                        <rect x="30" y="50" width="160" height="90" rx="5" fill="#f0f8ff" stroke="#333" />
                        <text x="110" y="70" text-anchor="middle" font-weight="bold" font-size="14">2z zatigarriak</text>
                        <text x="110" y="95" text-anchor="middle" font-size="12">Azken zifra bikoitia</text>
                        
                        <circle cx="70" cy="120" r="15" fill="#4682B4" />
                        <text x="70" y="125" text-anchor="middle" fill="white" font-size="14">24</text>
                        
                        <circle cx="110" cy="120" r="15" fill="#4682B4" />
                        <text x="110" y="125" text-anchor="middle" fill="white" font-size="14">36</text>
                        
                        <circle cx="150" cy="120" r="15" fill="#4682B4" />
                        <text x="150" y="125" text-anchor="middle" fill="white" font-size="14">48</text>
                        
                        <!-- 3ren zatigarritasuna -->
                        <rect x="210" y="50" width="160" height="90" rx="5" fill="#f0f8ff" stroke="#333" />
                        <text x="290" y="70" text-anchor="middle" font-weight="bold" font-size="14">3z zatigarriak</text>
                        <text x="290" y="95" text-anchor="middle" font-size="12">Zifren batura 3ren multiploa</text>
                        
                        <circle cx="250" cy="120" r="15" fill="#4682B4" />
                        <text x="250" y="125" text-anchor="middle" fill="white" font-size="14">123</text>
                        
                        <text x="290" y="125" text-anchor="middle" font-size="12">1+2+3=6</text>
                        
                        <circle cx="330" cy="120" r="15" fill="#4682B4" />
                        <text x="330" y="125" text-anchor="middle" fill="white" font-size="14">333</text>
                        
                        <!-- 5ren zatigarritasuna -->
                        <rect x="30" y="160" width="160" height="90" rx="5" fill="#f0f8ff" stroke="#333" />
                        <text x="110" y="180" text-anchor="middle" font-weight="bold" font-size="14">5ez zatigarriak</text>
                        <text x="110" y="205" text-anchor="middle" font-size="12">0 edo 5ez amaitzen da</text>
                        
                        <circle cx="70" cy="230" r="15" fill="#4682B4" />
                        <text x="70" y="235" text-anchor="middle" fill="white" font-size="14">25</text>
                        
                        <circle cx="110" cy="230" r="15" fill="#4682B4" />
                        <text x="110" y="235" text-anchor="middle" fill="white" font-size="14">50</text>
                        
                        <circle cx="150" cy="230" r="15" fill="#4682B4" />
                        <text x="150" y="235" text-anchor="middle" fill="white" font-size="14">75</text>
                        
                        <!-- 10ren zatigarritasuna -->
                        <rect x="210" y="160" width="160" height="90" rx="5" fill="#f0f8ff" stroke="#333" />
                        <text x="290" y="180" text-anchor="middle" font-weight="bold" font-size="14">10ez zatigarriak</text>
                        <text x="290" y="205" text-anchor="middle" font-size="12">0z amaitzen da</text>
                        
                        <circle cx="250" cy="230" r="15" fill="#4682B4" />
                        <text x="250" y="235" text-anchor="middle" fill="white" font-size="14">10</text>
                        
                        <circle cx="290" cy="230" r="15" fill="#4682B4" />
                        <text x="290" y="235" text-anchor="middle" fill="white" font-size="14">20</text>
                        
                        <circle cx="330" cy="230" r="15" fill="#4682B4" />
                        <text x="330" y="235" text-anchor="middle" fill="white" font-size="14">100</text>
                        
                        <!-- Erlazioen irudikapena -->
                        <text x="200" y="275" text-anchor="middle" font-size="12">Zenbaki baten zatigarritasuna azkar egiaztatzeko irizpideak</text>
                        <path d="M120,300 Q200,320 280,300" stroke="#333" stroke-width="2" fill="none" />
                        <text x="200" y="330" text-anchor="middle" font-size="12">Zenbaki handiak lantzea errazten dute</text>
                    </svg>
                </div>
            </div>
        </div>
    `,
    'primos-compuestos': `
        <div class="modal-content">
            <div class="modal-section">
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Mota</th>
                                <th>Definizioa</th>
                                <th>Adibideak</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Zenbaki Lehenak</td>
                                <td>1ez eta beraiek eurez soilik zatikorrak</td>
                                <td>2, 3, 5, 7, 11</td>
                            </tr>
                            <tr>
                                <td>Zenbaki Konposatuak</td>
                                <td>Bi zatitzaile baino gehiago dituztenak</td>
                                <td>4, 6, 8, 9, 10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="visual-aid">
                    <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
                        <text x="200" y="30" text-anchor="middle" font-weight="bold" font-size="16">Zenbaki Lehen eta Konposatuak</text>
                        
                        <!-- Zenbaki lehenak -->
                        <rect x="20" y="50" width="170" height="230" rx="5" fill="#f5f5f5" stroke="#333" />
                        <text x="105" y="75" text-anchor="middle" font-weight="bold" font-size="16">Zenbaki Lehenak</text>
                        
                        <circle cx="60" cy="110" r="20" fill="#FF6347" />
                        <text x="60" y="115" text-anchor="middle" fill="white" font-size="16">2</text>
                        
                        <circle cx="120" cy="110" r="20" fill="#FF6347" />
                        <text x="120" y="115" text-anchor="middle" fill="white" font-size="16">3</text>
                        
                        <circle cx="60" cy="160" r="20" fill="#FF6347" />
                        <text x="60" y="165" text-anchor="middle" fill="white" font-size="16">5</text>
                        
                        <circle cx="120" cy="160" r="20" fill="#FF6347" />
                        <text x="120" y="165" text-anchor="middle" fill="white" font-size="16">7</text>
                        
                        <circle cx="60" cy="210" r="20" fill="#FF6347" />
                        <text x="60" y="215" text-anchor="middle" fill="white" font-size="16">11</text>
                        
                        <circle cx="120" cy="210" r="20" fill="#FF6347" />
                        <text x="120" y="215" text-anchor="middle" fill="white" font-size="16">13</text>
                        
                        <text x="105" y="250" text-anchor="middle" font-size="12">Bi zatitzaile: 1 eta bera</text>
                        
                        <!-- Zenbaki konposatuak -->
                        <rect x="210" y="50" width="170" height="230" rx="5" fill="#f5f5f5" stroke="#333" />
                        <text x="295" y="75" text-anchor="middle" font-weight="bold" font-size="16">Zenbaki Konposatuak</text>
                        
                        <circle cx="250" cy="110" r="20" fill="#4682B4" />
                        <text x="250" y="115" text-anchor="middle" fill="white" font-size="16">4</text>
                        <text x="250" y="135" text-anchor="middle" font-size="10">1,2,4</text>
                        
                        <circle cx="310" cy="110" r="20" fill="#4682B4" />
                        <text x="310" y="115" text-anchor="middle" fill="white" font-size="16">6</text>
                        <text x="310" y="135" text-anchor="middle" font-size="10">1,2,3,6</text>
                        
                        <circle cx="250" cy="160" r="20" fill="#4682B4" />
                        <text x="250" y="165" text-anchor="middle" fill="white" font-size="16">8</text>
                        <text x="250" y="185" text-anchor="middle" font-size="10">1,2,4,8</text>
                        
                        <circle cx="310" cy="160" r="20" fill="#4682B4" />
                        <text x="310" y="165" text-anchor="middle" fill="white" font-size="16">9</text>
                        <text x="310" y="185" text-anchor="middle" font-size="10">1,3,9</text>
                        
                        <text x="295" y="250" text-anchor="middle" font-size="12">Bi baino zatitzaile gehiago</text>
                    </svg>
                </div>
            </div>
        </div>
    `,
    'mcm': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Multiplo Komun Txikiena (zero ez dena) bi zenbaki edo gehiagoren artean.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Zenbakiak</th>
                                <th>Deskonposaketa</th>
                                <th>M.K.T.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12, 18</td>
                                <td>12 = 2² · 3, 18 = 2 · 3²</td>
                                <td>2² · 3² = 36</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="visual-aid">
                    <svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
                        <text x="200" y="30" text-anchor="middle" font-weight="bold" font-size="16">Gutxieneko Multiplo Komuna (g.m.k.)</text>
                        
                        <!-- 12 eta 18ren multiploak -->
                        <rect x="20" y="50" width="170" height="40" rx="5" fill="#e6f7ff" stroke="#333" />
                        <text x="105" y="75" text-anchor="middle" font-size="14">12ren multiploak</text>
                        
                        <circle cx="50" cy="110" r="15" fill="#4682B4" />
                        <text x="50" y="115" text-anchor="middle" fill="white" font-size="12">12</text>
                        
                        <circle cx="90" cy="110" r="15" fill="#4682B4" />
                        <text x="90" y="115" text-anchor="middle" fill="white" font-size="12">24</text>
                        
                        <circle cx="130" cy="110" r="15" fill="#4682B4" />
                        <text x="130" y="115" text-anchor="middle" fill="white" font-size="12">36</text>
                        
                        <circle cx="170" cy="110" r="15" fill="#4682B4" />
                        <text x="170" y="115" text-anchor="middle" fill="white" font-size="12">48</text>
                        
                        <rect x="210" y="50" width="170" height="40" rx="5" fill="#e6f7ff" stroke="#333" />
                        <text x="295" y="75" text-anchor="middle" font-size="14">18ren multiploak</text>
                        
                        <circle cx="230" cy="110" r="15" fill="#4682B4" />
                        <text x="230" y="115" text-anchor="middle" fill="white" font-size="12">18</text>
                        
                        <circle cx="270" cy="110" r="15" fill="#4682B4" />
                        <text x="270" y="115" text-anchor="middle" fill="white" font-size="12">36</text>
                        
                        <circle cx="310" cy="110" r="15" fill="#4682B4" />
                        <text x="310" y="115" text-anchor="middle" fill="white" font-size="12">54</text>
                        
                        <circle cx="350" cy="110" r="15" fill="#4682B4" />
                        <text x="350" y="115" text-anchor="middle" fill="white" font-size="12">72</text>
                        
                        <!-- Multiplo komuna -->
                        <rect x="150" y="160" width="100" height="40" rx="5" fill="#ffecb3" stroke="#333" />
                        <text x="200" y="185" text-anchor="middle" font-size="14">Multiplo komunak</text>
                        
                        <circle cx="130" cy="220" r="20" fill="#4682B4" opacity="0.3" />
                        <circle cx="130" cy="220" r="20" stroke="#333" stroke-width="1" fill="none" />
                        <text x="130" y="225" text-anchor="middle" font-size="12">36</text>
                        
                        <circle cx="200" cy="220" r="20" fill="#4682B4" opacity="0.3" />
                        <circle cx="200" cy="220" r="20" stroke="#333" stroke-width="1" fill="none" />
                        <text x="200" y="225" text-anchor="middle" font-size="12">72</text>
                        
                        <circle cx="270" cy="220" r="20" fill="#4682B4" opacity="0.3" />
                        <circle cx="270" cy="220" r="20" stroke="#333" stroke-width="1" fill="none" />
                        <text x="270" y="225" text-anchor="middle" font-size="12">108</text>
                        
                        <!-- GMK seinalea -->
                        <circle cx="130" cy="220" r="25" stroke="#FF6347" stroke-width="2" fill="none" />
                        <text x="80" y="220" text-anchor="end" fill="#FF6347" font-weight="bold" font-size="14">g.m.k.(12,18) = 36</text>
                    </svg>
                </div>
            </div>
        </div>
    `,
    'mcd': `
        <div class="modal-content">
            <div class="modal-section">
                <h4>Definizioa</h4>
                <p>Bi zenbaki edo gehiago zatitzen dituen zenbakirik handiena.</p>
                
                <div class="modal-table-container">
                    <table class="modal-table">
                        <thead>
                            <tr>
                                <th>Zenbakiak</th>
                                <th>Deskonposaketa</th>
                                <th>z.k.h.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>12, 18</td>
                                <td>12 = 2² · 3, 18 = 2 · 3²</td>
                                <td>2¹ · 3¹ = 6</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="visual-aid">
                    <svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
                        <text x="200" y="30" text-anchor="middle" font-weight="bold" font-size="16">Zatitzaile Komun Handiena (z.k.h.)</text>
                        
                        <!-- 12 eta 18ren zatitzaileak -->
                        <rect x="20" y="50" width="170" height="40" rx="5" fill="#e6f7ff" stroke="#333" />
                        <text x="105" y="75" text-anchor="middle" font-size="14">12ren zatitzaileak</text>
                        
                        <circle cx="40" cy="110" r="15" fill="#4682B4" />
                        <text x="40" y="115" text-anchor="middle" fill="white" font-size="12">1</text>
                        
                        <circle cx="80" cy="110" r="15" fill="#4682B4" />
                        <text x="80" y="115" text-anchor="middle" fill="white" font-size="12">2</text>
                        
                        <circle cx="120" cy="110" r="15" fill="#4682B4" />
                        <text x="120" y="115" text-anchor="middle" fill="white" font-size="12">3</text>
                        
                        <circle cx="160" cy="110" r="15" fill="#4682B4" />
                        <text x="160" y="115" text-anchor="middle" fill="white" font-size="12">4</text>
                        
                        <circle cx="40" cy="150" r="15" fill="#4682B4" />
                        <text x="40" y="155" text-anchor="middle" fill="white" font-size="12">6</text>
                        
                        <circle cx="80" cy="150" r="15" fill="#4682B4" />
                        <text x="80" y="155" text-anchor="middle" fill="white" font-size="12">12</text>
                        
                        <rect x="210" y="50" width="170" height="40" rx="5" fill="#e6f7ff" stroke="#333" />
                        <text x="295" y="75" text-anchor="middle" font-size="14">18ren zatitzaileak</text>
                        
                        <circle cx="230" cy="110" r="15" fill="#4682B4" />
                        <text x="230" y="115" text-anchor="middle" fill="white" font-size="12">1</text>
                        
                        <circle cx="270" cy="110" r="15" fill="#4682B4" />
                        <text x="270" y="115" text-anchor="middle" fill="white" font-size="12">2</text>
                        
                        <circle cx="310" cy="110" r="15" fill="#4682B4" />
                        <text x="310" y="115" text-anchor="middle" fill="white" font-size="12">3</text>
                        
                        <circle cx="350" cy="110" r="15" fill="#4682B4" />
                        <text x="350" y="115" text-anchor="middle" fill="white" font-size="12">6</text>
                        
                        <circle cx="270" cy="150" r="15" fill="#4682B4" />
                        <text x="270" y="155" text-anchor="middle" fill="white" font-size="12">9</text>
                        
                        <circle cx="310" cy="150" r="15" fill="#4682B4" />
                        <text x="310" y="155" text-anchor="middle" fill="white" font-size="12">18</text>
                        
                        <!-- Zatitzaile komunak -->
                        <rect x="150" y="180" width="100" height="30" rx="5" fill="#ffecb3" stroke="#333" />
                        <text x="200" y="200" text-anchor="middle" font-size="14">Zatitzaile komunak</text>
                        
                        <circle cx="130" cy="230" r="15" fill="#4682B4" opacity="0.3" />
                        <circle cx="130" cy="230" r="15" stroke="#333" stroke-width="1" fill="none" />
                        <text x="130" y="235" text-anchor="middle" font-size="12">1</text>
                        
                        <circle cx="170" cy="230" r="15" fill="#4682B4" opacity="0.3" />
                        <circle cx="170" cy="230" r="15" stroke="#333" stroke-width="1" fill="none" />
                        <text x="170" y="235" text-anchor="middle" font-size="12">2</text>
                        
                        <circle cx="210" cy="230" r="15" fill="#4682B4" opacity="0.3" />
                        <circle cx="210" cy="230" r="15" stroke="#333" stroke-width="1" fill="none" />
                        <text x="210" y="235" text-anchor="middle" font-size="12">3</text>
                        
                        <circle cx="250" cy="230" r="15" fill="#4682B4" opacity="0.3" />
                        <circle cx="250" cy="230" r="15" stroke="#333" stroke-width="1" fill="none" />
                        <text x="250" y="235" text-anchor="middle" font-size="12">6</text>
                        
                        <!-- ZKH seinalea -->
                        <circle cx="250" cy="230" r="20" stroke="#FF6347" stroke-width="2" fill="none" />
                        <text x="320" y="235" text-anchor="start" fill="#FF6347" font-weight="bold" font-size="14">z.k.h.(12,18) = 6</text>
                    </svg>
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
    
    // Scroll to the top of the page, ensuring header and navigation are visible
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });

    // Scroll to the top section for a calm, focused experience
    const topSection = document.getElementById('teoria-divisibilidad');
    const herramientasSection = document.getElementById('herramientas-interactivas');
    
    if (topSection) {
        // Hide the interactive tools section by default
        if (herramientasSection) {
            herramientasSection.style.display = 'none';
        }
    }

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
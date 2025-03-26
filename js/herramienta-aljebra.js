/**
 * Herramienta Aljebra - Tresna interaktiboak aljebraren kontzeptuak praktikatzeko
 * Matematika 1. DBH
 */

// Ekuazioen ebazlea
function ebatziEkuazioa() {
    const ekuazioaInput = document.getElementById('ekuazioa-input');
    const emaitzaContainer = document.getElementById('ekuazioa-emaitza');
    const azalpenaContainer = document.getElementById('ekuazioa-azalpena');
    const pausoakContainer = document.getElementById('ekuazioa-pausoak');
    
    // Garbitu aurreko emaitzak
    emaitzaContainer.innerHTML = '';
    azalpenaContainer.innerHTML = '';
    pausoakContainer.innerHTML = '';
    
    // Lortu ekuazioaren testua
    const ekuazioaTestua = ekuazioaInput.value.trim();
    
    if (!ekuazioaTestua) {
        azalpenaContainer.innerHTML = '<div class="error">Mesedez, sartu ekuazio bat.</div>';
        return;
    }
    
    try {
        // Prozesatu ekuazioa
        const emaitza = prozesatuEkuazioa(ekuazioaTestua);
        
        if (emaitza.errorea) {
            azalpenaContainer.innerHTML = `<div class="error">${emaitza.mezua}</div>`;
            return;
        }
        
        // Erakutsi emaitza
        emaitzaContainer.innerHTML = `<div class="success">x = ${emaitza.balioa}</div>`;
        
        // Erakutsi pausoak
        pausoakContainer.innerHTML = `
            <h4>Ebazpen pausoak:</h4>
            <ol>
                ${emaitza.pausoak.map(pausoa => `<li>${pausoa}</li>`).join('')}
            </ol>
        `;
        
        // Erakutsi azalpena
        azalpenaContainer.innerHTML = `
            <h4>Problemaren planteamendua:</h4>
            <p>${emaitza.planteamendua}</p>
            <h4>Problemaren azalpena:</h4>
            <p>${emaitza.problema}</p>
            <div class="ekuazio-bisualizazioa">
                ${sortuEkuazioBisualizazioa(ekuazioaTestua, emaitza.balioa)}
            </div>
        `;
    } catch (error) {
        azalpenaContainer.innerHTML = `<div class="error">Errorea ekuazioa prozesatzean: ${error.message}</div>`;
    }
}

// Ekuazioa prozesatzeko funtzioa
function prozesatuEkuazioa(ekuazioaTestua) {
    // Egiaztatu = ikurra duen
    if (!ekuazioaTestua.includes('=')) {
        return {
            errorea: true,
            mezua: 'Ekuazioak = ikurra izan behar du.'
        };
    }
    
    // Banatu ekuazioa bi aldetan
    const aldeak = ekuazioaTestua.split('=');
    if (aldeak.length !== 2) {
        return {
            errorea: true,
            mezua: 'Ekuazio formatua ez da zuzena. Erabili: ax + b = cx + d formatua.'
        };
    }
    
    // Garbitu eta normalizatu aldeak
    let ezkerAlde = aldeak[0].trim();
    let eskuinAlde = aldeak[1].trim();
    
    // Pausoak sortu
    const pausoak = [
        `Hasierako ekuazioa: ${ekuazioaTestua}`,
        `Ezker aldea: ${ezkerAlde}`,
        `Eskuin aldea: ${eskuinAlde}`
    ];
    
    try {
        // Garatutako ebaluaziorako, normalizatu aldeak
        // Alderantzizko zeinuarekin pasatu eskuinaldeko terminoak ezkerraldera
        const eskuinAldeTerminoak = parseatuTerminoak(eskuinAlde);
        
        // Alderantzizko zeinuarekin pasatu eskuinaldeko terminoak ezkerraldera
        const ezkerAldeTerminoak = parseatuTerminoak(ezkerAlde);
        let terminoGuztiak = [];
        
        ezkerAldeTerminoak.forEach(termino => {
            terminoGuztiak.push(termino);
        });
        
        eskuinAldeTerminoak.forEach(termino => {
            // Terminoaren zeinua aldatu
            const alderantzizkoTerminoa = {
                koefizientea: -termino.koefizientea,
                aldagaia: termino.aldagaia,
                potentzia: termino.potentzia
            };
            terminoGuztiak.push(alderantzizkoTerminoa);
        });
        
        pausoak.push(`Termino guztiak ezker aldera pasatu: ${terminoakTestura(terminoGuztiak)}`);
        
        // Antzeko terminoak batu
        const antzekoBatuak = batuAntzekoak(terminoGuztiak);
        pausoak.push(`Antzeko terminoak batu: ${terminoakTestura(antzekoBatuak)}`);
        
        // x-ren koefizientea eta konstante terminoa banatu
        let xrenKoefizientea = 0;
        let konstantea = 0;
        
        antzekoBatuak.forEach(termino => {
            if (termino.aldagaia === 'x' && termino.potentzia === 1) {
                xrenKoefizientea += termino.koefizientea;
            } else if (!termino.aldagaia) {
                konstantea += termino.koefizientea;
            } else {
                throw new Error("Ekuazioak ez-espero zen termino bat dauka: " + terminoaTestura([termino]));
            }
        });
        
        // Konstantea beste aldera pasatu
        const konstanteaBesteAldera = -konstantea;
        pausoak.push(`Konstanteak pasatu: ${xrenKoefizientea}x = ${konstanteaBesteAldera}`);
        
        // x isolatu
        if (xrenKoefizientea === 0) {
            if (konstantea === 0) {
                return {
                    errorea: false,
                    balioa: "Edozein balio",
                    pausoak: pausoak,
                    planteamendua: "Ekuazio hau beti betetzen da x-ren edozein baliorako (beti berdintza egiazkoa da).",
                    problema: "Ekuazioa ez da ebatziko, x-ren balioa edozein izan baitaiteke."
                };
            } else {
                return {
                    errorea: true,
                    mezua: "Ekuazioa ezin da ebatzi. Ez du soluziorik (kontraesana)."
                };
            }
        }
        
        const xrenBalioa = konstanteaBesteAldera / xrenKoefizientea;
        pausoak.push(`x isolatu: x = ${konstanteaBesteAldera} / ${xrenKoefizientea}`);
        pausoak.push(`x = ${xrenBalioa}`);
        
        // Azalpena sortu
        let azalpena = "Ekuazioa ebatzi dugu termino guztiak ezker aldera pasatuz, antzeko terminoak batuz eta x isolatuz.";
        if (xrenKoefizientea !== 1) {
            azalpena += ` Azkenean, x-ren koefizientea (${xrenKoefizientea}) zatitu behar izan dugu x bakandu ahal izateko.`;
        }
        
        return {
            errorea: false,
            balioa: Number.isInteger(xrenBalioa) ? xrenBalioa : xrenBalioa.toFixed(2),
            pausoak: pausoak,
            planteamendua: "Ekuazioa ebatzi dugu termino guztiak ezker aldera pasatuz, antzeko terminoak batuz eta x isolatuz.",
            problema: azalpena
        };
        
    } catch (error) {
        return {
            errorea: true,
            mezua: `Errorea ekuazioa ebazten: ${error.message}`
        };
    }
}

// Terminoak parseatzeko funtzioa
function parseatuTerminoak(adierazpena) {
    // Terminoen zerrenda hasieratu
    const terminoak = [];
    
    // '+' edo '-' karaktereak aurretik geratzen direla banatu
    const terminoTextuak = adierazpena.replace(/-/g, "+-").split('+').filter(t => t.trim());
    
    terminoTextuak.forEach(terminoTextua => {
        terminoTextua = terminoTextua.trim();
        if (!terminoTextua) return;
        
        // Terminoa parseatu
        let koefizientea = 1;
        let aldagaia = '';
        let potentzia = 0;
        
        // Zeinua kudeatu
        if (terminoTextua.startsWith('-')) {
            koefizientea = -1;
            terminoTextua = terminoTextua.substring(1);
        }
        
        // x-ren koefizientea kudeatu
        if (terminoTextua.includes('x')) {
            const zatiak = terminoTextua.split('x');
            
            // Koefizientea lortu
            if (zatiak[0] === '') {
                // Koefizientea 1 da inplizituki (x = 1x)
            } else if (zatiak[0] === '-') {
                // Koefizientea -1 da inplizituki (-x = -1x)
                koefizientea = -1;
            } else {
                koefizientea *= parseFloat(zatiak[0]);
            }
            
            // Potentzia aurkitu
            aldagaia = 'x';
            potentzia = 1; // oinarrizko potentzia
            
            if (zatiak.length > 1 && zatiak[1].startsWith('^')) {
                potentzia = parseInt(zatiak[1].substring(1));
            }
        } else {
            // Konstante hutsak
            koefizientea *= parseFloat(terminoTextua);
        }
        
        terminoak.push({
            koefizientea: koefizientea,
            aldagaia: aldagaia,
            potentzia: potentzia
        });
    });
    
    return terminoak;
}

// Antzeko terminoak batzeko funtzioa
function batuAntzekoak(terminoak) {
    const emaitzak = {};
    
    terminoak.forEach(termino => {
        const gakoa = termino.aldagaia ? `${termino.aldagaia}^${termino.potentzia}` : 'konstante';
        
        if (!emaitzak[gakoa]) {
            emaitzak[gakoa] = {
                koefizientea: 0,
                aldagaia: termino.aldagaia,
                potentzia: termino.potentzia
            };
        }
        
        emaitzak[gakoa].koefizientea += termino.koefizientea;
    });
    
    return Object.values(emaitzak).filter(t => t.koefizientea !== 0);
}

// Terminoak testu moduan adierazteko funtzioa
function terminoakTestura(terminoak) {
    if (terminoak.length === 0) return "0";
    
    return terminoak.map((termino, index) => {
        let testua = '';
        
        // Egin zeinu kudeaketa, lehen terminoa ez bada
        if (index > 0) {
            testua += termino.koefizientea >= 0 ? ' + ' : ' - ';
        } else if (termino.koefizientea < 0) {
            testua += '-';
        }
        
        // Koefizientea gehitu, 1 ez bada (edo -1 lehen terminoan)
        const koefAbs = Math.abs(termino.koefizientea);
        if (!termino.aldagaia || koefAbs !== 1) {
            testua += koefAbs;
        }
        
        // Aldagaia eta potentzia gehitu
        if (termino.aldagaia) {
            testua += termino.aldagaia;
            if (termino.potentzia > 1) {
                testua += `^${termino.potentzia}`;
            }
        }
        
        return testua;
    }).join('');
}

// Ekuazioaren bisualizazioa sortzeko funtzioa
function sortuEkuazioBisualizazioa(ekuazioa, emaitza) {
    return `
        <div class="ekuazio-bisuala">
            <div class="ekuazio-jatorria">${ekuazioa}</div>
            <div class="ekuazio-gezia">↓</div>
            <div class="ekuazio-emaitza">x = ${emaitza}</div>
        </div>
    `;
}

// Adierazpen aljebraikoen kalkulagailua
function kalkulatuAdierazpena() {
    const adierazpenaInput = document.getElementById('adierazpena-input');
    const xBalioaInput = document.getElementById('x-balioa-input');
    const emaitzaContainer = document.getElementById('adierazpena-emaitza');
    const azalpenaContainer = document.getElementById('adierazpena-azalpena');
    
    // Garbitu aurreko emaitzak
    emaitzaContainer.innerHTML = '';
    azalpenaContainer.innerHTML = '';
    
    // Lortu sarrerak
    const adierazpena = adierazpenaInput.value.trim();
    const xBalioa = parseFloat(xBalioaInput.value);
    
    if (!adierazpena) {
        azalpenaContainer.innerHTML = '<div class="error">Mesedez, sartu adierazpen aljebraiko bat.</div>';
        return;
    }
    
    if (isNaN(xBalioa)) {
        azalpenaContainer.innerHTML = '<div class="error">Mesedez, sartu x-ren balio numeriko bat.</div>';
        return;
    }
    
    try {
        // Adierazpena ebaluatu
        const emaitza = ebaluatuAdierazpena(adierazpena, xBalioa);
        
        // Erakutsi emaitza
        emaitzaContainer.innerHTML = `<div class="success">Emaitza: ${emaitza.balioa}</div>`;
        
        // Erakutsi azalpena
        azalpenaContainer.innerHTML = `
            <h4>Ordezkapena:</h4>
            <p>${adierazpena} non x = ${xBalioa}</p>
            <div class="pausoak-container">
                ${emaitza.pausoak.map(pausoa => `<div class="pausoa">${pausoa}</div>`).join('')}
            </div>
        `;
    } catch (error) {
        azalpenaContainer.innerHTML = `<div class="error">Errorea adierazpena ebaluatzean: ${error.message}</div>`;
    }
}

// Adierazpen aljebraikoa ebaluatzeko funtzioa
function ebaluatuAdierazpena(adierazpena, xBalioa) {
    let pausoak = [];
    
    // Jatorrizko adierazpena erregistratu
    pausoak.push(`Jatorrizko adierazpena: ${adierazpena}`);
    
    // x ordezkatu adierazpenean
    let adierazpenOrdezkatua = adierazpena;
    
    // Ordezkatu x aldagaia
    if (adierazpena.includes('x')) {
        pausoak.push(`x = ${xBalioa} ordezkatzen dugu`);
        
        // Ordezkatu x adierazpenean, baina ziurtatu operadore artean egiten dela
        // x-en aurretik gerta daiteken karaktereak: +, -, *, /, (, hasiera
        // x-en ondoren gerta daiteken karaktereak: +, -, *, /, ), amaiera, ^
        
        // Hau da adierazpen erregularra x-ren erabilera guztiak aurkitzeko
        adierazpenOrdezkatua = adierazpena.replace(/([+\-*/(\s]|^)x([+\-*/)\s]|$|\^)/g, `$1${xBalioa}$2`);
        
        // Ordezkatu x^n kasuak: x^2, x^3, etab.
        adierazpenOrdezkatua = adierazpenOrdezkatua.replace(/x\^(\d+)/g, (match, potentzia) => {
            return Math.pow(xBalioa, parseInt(potentzia));
        });
        
        pausoak.push(`Adierazpena ordezkatu ondoren: ${adierazpenOrdezkatua}`);
    } else {
        pausoak.push(`Adierazpenak ez du x aldagaia: ${adierazpena}`);
    }
    
    // Parentesiak eta eragiketak ebaluatu, babestuta
    let emaitza;
    
    try {
        // Eragiketak segurtasunez ebaluatu
        emaitza = kalkulatuBalioaSegurua(adierazpenOrdezkatua);
        pausoak.push(`Eragiketak egin: ${emaitza}`);
    } catch (error) {
        throw new Error(`Ezin izan da adierazpena ebaluatu: ${error.message}`);
    }
    
    return {
        balioa: Number.isInteger(emaitza) ? emaitza : parseFloat(emaitza.toFixed(2)),
        pausoak: pausoak
    };
}

// Funtzio segurua adierazpen numerikoak ebaluatzeko
function kalkulatuBalioaSegurua(adierazpen) {
    // Garbi dezakegu adierazpena kalkulatu aurretik
    adierazpen = adierazpen.replace(/\s/g, '');
    
    // Ziurtatu adierazpenak bakarrik eragiketa sinpleak dituela
    if (!/^[0-9+\-*/(). ]*$/.test(adierazpen)) {
        throw new Error("Adierazpenak baimendu gabeko karaktereak ditu.");
    }
    
    // eval erabiltzea arriskutsua da, baina ziurtatu dugu adierazpena segurua dela
    return Function('"use strict"; return (' + adierazpen + ')')();
}

// Monomioen eragiketak
function kalkulatuMonomioak() {
    const monomio1Input = document.getElementById('monomio1-input');
    const monomio2Input = document.getElementById('monomio2-input');
    const eragiketaSelect = document.getElementById('eragiketa-select');
    const emaitzaContainer = document.getElementById('monomioak-emaitza');
    const azalpenaContainer = document.getElementById('monomioak-azalpena');
    
    // Garbitu aurreko emaitzak
    emaitzaContainer.innerHTML = '';
    azalpenaContainer.innerHTML = '';
    
    // Lortu sarrerak
    const monomio1 = monomio1Input.value.trim();
    const monomio2 = monomio2Input.value.trim();
    const eragiketa = eragiketaSelect.value;
    
    if (!monomio1 || !monomio2) {
        azalpenaContainer.innerHTML = '<div class="error">Mesedez, bete bi monomioen eremuak.</div>';
        return;
    }
    
    try {
        // Monomioen eragiketa kalkulatu
        const emaitza = kalkulatuMonomioEragiketa(monomio1, monomio2, eragiketa);
        
        // Erakutsi emaitza
        emaitzaContainer.innerHTML = `<div class="success">Emaitza: ${emaitza.balioa}</div>`;
        
        // Erakutsi azalpena
        azalpenaContainer.innerHTML = `
            <h4>Azalpena:</h4>
            <p>${emaitza.azalpena}</p>
            <div class="pausoak-container">
                <h4>Pausoak:</h4>
                ${emaitza.pausoak.map(pausoa => `<div class="pausoa">${pausoa}</div>`).join('')}
            </div>
        `;
    } catch (error) {
        azalpenaContainer.innerHTML = `<div class="error">Errorea monomioak prozesatzean: ${error.message}</div>`;
    }
}

// Monomioen eragiketak kalkulatzeko funtzioa
function kalkulatuMonomioEragiketa(monomio1, monomio2, eragiketa) {
    let azalpena = '';
    let pausoak = [];
    
    try {
        // Parseatu monomioak
        const parseatuaMonomio1 = parseatuMonomio(monomio1);
        const parseatuaMonomio2 = parseatuMonomio(monomio2);
        
        pausoak.push(`Monomioak: ${monomio1} ${eragiketa === 'batu' ? '+' : eragiketa === 'kendu' ? '-' : eragiketa === 'biderkatu' ? '×' : '÷'} ${monomio2}`);
        pausoak.push(`1. monomioa: ${monomioTestura(parseatuaMonomio1)}`);
        pausoak.push(`2. monomioa: ${monomioTestura(parseatuaMonomio2)}`);
        
        let emaitzaMonomio;
        
        // Eragiketa motaren arabera prozesatu
        switch (eragiketa) {
            case 'batu':
                // Egiaztatu ea antzeko monomioak diren (aldagai eta potentzia berdinak)
                if (parseatuaMonomio1.aldagaia === parseatuaMonomio2.aldagaia && 
                    parseatuaMonomio1.potentzia === parseatuaMonomio2.potentzia) {
                    
                    pausoak.push(`Antzeko monomioak dira, koefizienteak batu ditzakegu`);
                    const koefizienteBerria = parseatuaMonomio1.koefizientea + parseatuaMonomio2.koefizientea;
                    pausoak.push(`${parseatuaMonomio1.koefizientea} + ${parseatuaMonomio2.koefizientea} = ${koefizienteBerria}`);
                    
                    emaitzaMonomio = {
                        koefizientea: koefizienteBerria,
                        aldagaia: parseatuaMonomio1.aldagaia,
                        potentzia: parseatuaMonomio1.potentzia
                    };
                    
                    azalpena = 'Antzeko monomioak batu ditugu, hau da, aldagai eta esponentzia berdinak dituztenak. Kasu honetan, koefizienteak soilik batzen dira.';
                } else {
                    pausoak.push(`Ez dira antzeko monomioak, ezin dira batu`);
                    return {
                        balioa: `${monomio1} + ${monomio2} (ezin da sinplifikatu)`,
                        azalpena: 'Monomioak ezin dira batu ez direlako antzekoak. Antzeko monomioak izateko, aldagai eta esponentzia berdinak izan behar dituzte.',
                        pausoak: pausoak
                    };
                }
                break;
                
            case 'kendu':
                // Egiaztatu ea antzeko monomioak diren (aldagai eta potentzia berdinak)
                if (parseatuaMonomio1.aldagaia === parseatuaMonomio2.aldagaia && 
                    parseatuaMonomio1.potentzia === parseatuaMonomio2.potentzia) {
                    
                    pausoak.push(`Antzeko monomioak dira, koefizienteak kendu ditzakegu`);
                    const koefizienteBerria = parseatuaMonomio1.koefizientea - parseatuaMonomio2.koefizientea;
                    pausoak.push(`${parseatuaMonomio1.koefizientea} - ${parseatuaMonomio2.koefizientea} = ${koefizienteBerria}`);
                    
                    emaitzaMonomio = {
                        koefizientea: koefizienteBerria,
                        aldagaia: parseatuaMonomio1.aldagaia,
                        potentzia: parseatuaMonomio1.potentzia
                    };
                    
                    azalpena = 'Antzeko monomioak kendu ditugu, hau da, aldagai eta esponentzia berdinak dituztenak. Kasu honetan, koefizienteak soilik kentzen dira.';
                } else {
                    pausoak.push(`Ez dira antzeko monomioak, ezin dira kendu`);
                    return {
                        balioa: `${monomio1} - ${monomio2} (ezin da sinplifikatu)`,
                        azalpena: 'Monomioak ezin dira kendu ez direlako antzekoak. Antzeko monomioak izateko, aldagai eta esponentzia berdinak izan behar dituzte.',
                        pausoak: pausoak
                    };
                }
                break;
                
            case 'biderkatu':
                // Monomioak biderkatzeko, koefizienteak biderkatu eta potentziak batu
                const koefizienteBiderketa = parseatuaMonomio1.koefizientea * parseatuaMonomio2.koefizientea;
                pausoak.push(`Koefizienteak biderkatu: ${parseatuaMonomio1.koefizientea} × ${parseatuaMonomio2.koefizientea} = ${koefizienteBiderketa}`);
                
                // Egiaztatu aldagaiak
                let aldagaiBerria = '';
                let potentziaBerria = 0;
                
                if (parseatuaMonomio1.aldagaia === parseatuaMonomio2.aldagaia) {
                    // Aldagai berdinak, potentziak batu
                    aldagaiBerria = parseatuaMonomio1.aldagaia;
                    potentziaBerria = parseatuaMonomio1.potentzia + parseatuaMonomio2.potentzia;
                    pausoak.push(`Aldagaiak berdinak dira, potentziak batu: ${parseatuaMonomio1.aldagaia}^${parseatuaMonomio1.potentzia} × ${parseatuaMonomio2.aldagaia}^${parseatuaMonomio2.potentzia} = ${aldagaiBerria}^${potentziaBerria}`);
                } else if (!parseatuaMonomio1.aldagaia) {
                    // Lehen monomioa konstantea da
                    aldagaiBerria = parseatuaMonomio2.aldagaia;
                    potentziaBerria = parseatuaMonomio2.potentzia;
                    pausoak.push(`Lehen monomioa konstantea da, bigarren monomioren aldagaia eta potentzia mantentzen dira`);
                } else if (!parseatuaMonomio2.aldagaia) {
                    // Bigarren monomioa konstantea da
                    aldagaiBerria = parseatuaMonomio1.aldagaia;
                    potentziaBerria = parseatuaMonomio1.potentzia;
                    pausoak.push(`Bigarren monomioa konstantea da, lehen monomioren aldagaia eta potentzia mantentzen dira`);
                } else {
                    // Aldagai ezberdinak, ezin dira biderkatu
                    pausoak.push(`Aldagai ezberdinak dituzte, ezin dira biderkatu monomio berri bat lortzeko`);
                    return {
                        balioa: `${monomio1} × ${monomio2} (ezin da sinplifikatu)`,
                        azalpena: 'Monomioek aldagai ezberdinak dituztenez, emaitza ez da monomio bat, baizik eta binomio bat (edo polinomio bat).',
                        pausoak: pausoak
                    };
                }
                
                emaitzaMonomio = {
                    koefizientea: koefizienteBiderketa,
                    aldagaia: aldagaiBerria,
                    potentzia: potentziaBerria
                };
                
                azalpena = 'Monomioak biderkatzeko, koefizienteak biderkatu eta aldagaien esponentziak batu behar dira.';
                break;
                
            case 'zatitu':
                // Monomioak zatitzeko, koefizienteak zatitu eta potentziak kendu
                // Egiaztatu aldagaiak berdinak diren
                if (parseatuaMonomio1.aldagaia !== parseatuaMonomio2.aldagaia && 
                    parseatuaMonomio1.aldagaia !== '' && parseatuaMonomio2.aldagaia !== '') {
                    pausoak.push(`Aldagai ezberdinak dituzte, ezin dira zatitu`);
                    return {
                        balioa: `${monomio1} ÷ ${monomio2} (ezin da sinplifikatu)`,
                        azalpena: 'Monomioek aldagai ezberdinak dituztenez, ezin da zatiketa egin monomio berri bat lortzeko.',
                        pausoak: pausoak
                    };
                }
                
                // Egiaztatu bigarren monomioren koefizientea zero ez dela
                if (parseatuaMonomio2.koefizientea === 0) {
                    pausoak.push(`Errorea: Ezin da zero zenbakiarekin zatitu`);
                    return {
                        balioa: 'Ez definitua',
                        azalpena: 'Ezin da zero zenbakiarekin zatitu.',
                        pausoak: pausoak
                    };
                }
                
                const koefizienteZatiketa = parseatuaMonomio1.koefizientea / parseatuaMonomio2.koefizientea;
                pausoak.push(`Koefizienteak zatitu: ${parseatuaMonomio1.koefizientea} ÷ ${parseatuaMonomio2.koefizientea} = ${koefizienteZatiketa}`);
                
                let aldagaiaEmaitza = '';
                let potentziaEmaitza = 0;
                
                // Aldagaiak kudeatu
                if (parseatuaMonomio1.aldagaia === parseatuaMonomio2.aldagaia) {
                    aldagaiaEmaitza = parseatuaMonomio1.aldagaia;
                    potentziaEmaitza = parseatuaMonomio1.potentzia - parseatuaMonomio2.potentzia;
                    pausoak.push(`Aldagaien potentziak kendu: ${parseatuaMonomio1.aldagaia}^${parseatuaMonomio1.potentzia} ÷ ${parseatuaMonomio2.aldagaia}^${parseatuaMonomio2.potentzia} = ${aldagaiaEmaitza}^${potentziaEmaitza}`);
                    
                    // Potentzia negatiboa bada
                    if (potentziaEmaitza < 0) {
                        pausoak.push(`Kontuz: Potentzia negatiboa lortu dugu: ${potentziaEmaitza}`);
                    }
                } else if (!parseatuaMonomio1.aldagaia) {
                    // Lehen monomioa konstantea eta bigarrena ez
                    aldagaiaEmaitza = parseatuaMonomio2.aldagaia;
                    potentziaEmaitza = -parseatuaMonomio2.potentzia; // Alderantziz
                    pausoak.push(`Lehen monomioa konstantea da, bigarren monomioren aldagaia hartu eta potentzia alderantzizko zeinuarekin: ${aldagaiaEmaitza}^${potentziaEmaitza}`);
                } else if (!parseatuaMonomio2.aldagaia) {
                    // Bigarren monomioa konstantea da
                    aldagaiaEmaitza = parseatuaMonomio1.aldagaia;
                    potentziaEmaitza = parseatuaMonomio1.potentzia;
                    pausoak.push(`Bigarren monomioa konstantea da, lehen monomioren aldagaia eta potentzia mantentzen dira`);
                }
                
                emaitzaMonomio = {
                    koefizientea: koefizienteZatiketa,
                    aldagaia: aldagaiaEmaitza,
                    potentzia: potentziaEmaitza
                };
                
                azalpena = 'Monomioak zatitzeko, koefizienteak zatitu eta aldagaien esponentziak kendu behar dira.';
                break;
                
            default:
                throw new Error('Eragiketa ez da baliozkoa');
        }
        
        // Emaitza eratu testu formatuan
        const emaitzaTestua = monomioTestura(emaitzaMonomio);
        pausoak.push(`Emaitza: ${emaitzaTestua}`);
        
        return {
            balioa: emaitzaTestua,
            azalpena: azalpena,
            pausoak: pausoak
        };
    } catch (error) {
        return {
            balioa: 'Errorea',
            azalpena: `Errorea gertatu da: ${error.message}`,
            pausoak: pausoak
        };
    }
}

// Monomio bat parseatzeko funtzioa
function parseatuMonomio(monomioTestua) {
    monomioTestua = monomioTestua.trim();
    
    // Monomio hutsa bada
    if (!monomioTestua) {
        throw new Error('Monomio hutsa');
    }
    
    // Hasieratu aldagaiak
    let koefizientea = 1;
    let aldagaia = '';
    let potentzia = 0;
    
    // Zeinua kudeatu
    if (monomioTestua.startsWith('-')) {
        koefizientea = -1;
        monomioTestua = monomioTestua.substring(1);
    }
    
    // Zenbakiak soilik badira
    if (/^[0-9.]+$/.test(monomioTestua)) {
        koefizientea *= parseFloat(monomioTestua);
        return { koefizientea, aldagaia, potentzia };
    }
    
    // Aldagaia eta potentzia aurkitu
    // Adibidez: 2x, 3y^2, x, y^3, 5z, etab.
    const alfabetoa = 'abcdefghijklmnopqrstuvwxyz';
    
    // Bilatu lehen aldagaia
    let aldagaiPos = -1;
    for (let i = 0; i < monomioTestua.length; i++) {
        if (alfabetoa.includes(monomioTestua[i].toLowerCase())) {
            aldagaiPos = i;
            break;
        }
    }
    
    // Aldagairik ez bada aurkitu
    if (aldagaiPos === -1) {
        // Zenbaki soila da
        koefizientea *= parseFloat(monomioTestua);
        return { koefizientea, aldagaia, potentzia };
    }
    
    // Koefizientea lortu
    if (aldagaiPos > 0) {
        const koefTestua = monomioTestua.substring(0, aldagaiPos);
        koefizientea *= koefTestua === '' ? 1 : parseFloat(koefTestua);
    }
    
    // Aldagaia lortu
    aldagaia = monomioTestua[aldagaiPos];
    
    // Potentzia bilatu
    const potentziaPos = monomioTestua.indexOf('^', aldagaiPos);
    
    if (potentziaPos !== -1) {
        const potentziaTestua = monomioTestua.substring(potentziaPos + 1);
        potentzia = parseInt(potentziaTestua);
    } else {
        // ^ ez bada aurkitzen, potentzia 1 da
        potentzia = 1;
    }
    
    return { koefizientea, aldagaia, potentzia };
}

// Monomio objektua testu moduan aurkezteko funtzioa
function monomioTestura(monomio) {
    if (monomio.koefizientea === 0) return '0';
    
    let testua = '';
    
    // Koefizientea zero ez bada
    if (monomio.koefizientea !== 0) {
        // Koefizientea 1 edo -1 bada eta aldagaia badu
        if (Math.abs(monomio.koefizientea) === 1 && monomio.aldagaia) {
            testua += monomio.koefizientea < 0 ? '-' : '';
        } else {
            testua += monomio.koefizientea;
        }
    }
    
    // Aldagaia eta potentzia gehitu
    if (monomio.aldagaia) {
        testua += monomio.aldagaia;
        
        // Potentzia 1 ez bada, erakutsi
        if (monomio.potentzia !== 1) {
            testua += `^${monomio.potentzia}`;
        }
    }
    
    return testua;
}

// Ekuazioen problemak ebazteko tresna
function ebatziProblema() {
    const problemaSelect = document.getElementById('problema-select');
    const emaitzaContainer = document.getElementById('problema-emaitza');
    const azalpenaContainer = document.getElementById('problema-azalpena');
    const pausoakContainer = document.getElementById('problema-pausoak');
    
    // Garbitu aurreko emaitzak
    emaitzaContainer.innerHTML = '';
    azalpenaContainer.innerHTML = '';
    pausoakContainer.innerHTML = '';
    
    // Lortu aukeratutako problema
    const problemaId = problemaSelect.value;
    
    if (!problemaId) {
        azalpenaContainer.innerHTML = '<div class="error">Mesedez, aukeratu problema bat.</div>';
        return;
    }
    
    // Problema ebatzi
    const emaitza = ebatziProblemaMota(problemaId);
    
    // Erakutsi emaitza
    emaitzaContainer.innerHTML = `<div class="success">${emaitza.emaitza}</div>`;
    
    // Erakutsi azalpena
    azalpenaContainer.innerHTML = `
        <h4>Problemaren planteamendua:</h4>
        <p>${emaitza.planteamendua}</p>
        <h4>Problemaren azalpena:</h4>
        <p>${emaitza.problema}</p>
        <div class="ekuazio-bisualizazioa">
            ${emaitza.bisualizazioa}
        </div>
    `;
    
    // Erakutsi pausoak
    pausoakContainer.innerHTML = `
        <h4>Ebazpen pausoak:</h4>
        <ol>
            ${emaitza.pausoak.map(pausoa => `<li>${pausoa}</li>`).join('')}
        </ol>
    `;
}

// Problema motak ebazteko funtzioa
function ebatziProblemaMota(problemaId) {
    // Problema motak eta haien ebazpenak
    const problemak = {
        'adina': {
            problema: 'Juanek eta Mirenek 30 urte dituzte guztira. Juan Miren baino 4 urte zaharragoa da. Zenbat urte ditu bakoitzak?',
            planteamendua: 'Problema hau ebazterako orduan, bi ezezagun izango ditugu:\n- x: Mirenen adina\n- x + 4: Juanen adina\nBi adinak batuta 30 urte osatzen dituzte.',
            ebazpena: ebatziAdinProblema
        },
        'dirua': {
            problema: 'Anek 50€ ditu eta Jonek 30€. Zenbat diru eman behar dio Anek Joni biek diru kopuru berdina izateko?',
            planteamendua: 'Problema hau ebazterako orduan, x izango da Anek Joni emango dion dirua:\n- Ane: 50€ - x\n- Jon: 30€ + x\nBiek azkenean diru kopuru berdina eduki behar dute.',
            ebazpena: ebatziDiruProblema
        },
        'abiadura': {
            problema: 'Auto batek 60 km/h-ko abiaduran bidaiatzen du. Zenbat denbora beharko du 180 km egiteko?',
            planteamendua: 'Problema hau ebazterako orduan, abiadura eta distantzia ezagunak dira:\n- Abiadura: 60 km/h\n- Distantzia: 180 km\nDenbora kalkulatzeko, formula hau erabiliko dugu: denbora = distantzia / abiadura',
            ebazpena: ebatziAbiaduraProblema
        },
        'zenbakiak': {
            problema: 'Zenbaki bat pentsatu dut. Zenbaki horri 5 gehitzen badiogu eta emaitza 3z biderkatzen badugu, 36 lortzen dugu. Zein da zenbakia?',
            planteamendua: 'Problema hau ebazterako orduan, x izango da pentsatutako zenbakia:\n- x: Hasierako zenbakia\n- x + 5: Zenbakiari 5 gehituta\n- (x + 5) × 3: Emaitza 3z biderkatuta\nAzken emaitza 36 dela jakinda, ekuazioa osatuko dugu.',
            ebazpena: ebatziZenbakiProblema
        }
    };
    
    // Problema existitzen den begiratu
    if (!problemak[problemaId]) {
        return {
            errorea: true,
            mezua: 'Problema ez da aurkitu'
        };
    }
    
    // Problema ebatzi funtzioa deitu
    const problema = problemak[problemaId];
    const emaitza = problema.ebazpena();
    
    return {
        problema: problema.problema,
        planteamendua: problema.planteamendua,
        emaitza: emaitza.emaitza,
        pausoak: emaitza.pausoak,
        bisualizazioa: emaitza.bisualizazioa
    };
}

// Adina problema ebazpena
function ebatziAdinProblema() {
    // Definizioak
    const totalAdinak = 30;
    const diferentzia = 4;
    
    // Ebazpena
    let pausoak = [];
    
    pausoak.push('Ezezagunak definitu: x = Mirenen adina');
    pausoak.push('Juanen adina = x + 4 (Mirenen adina baino 4 urte gehiago)');
    pausoak.push(`Ekuazioa planteatu: x + (x + 4) = ${totalAdinak}`);
    pausoak.push('Ekuazioa sinplifikatu: 2x + 4 = 30');
    pausoak.push('Termino konstanteak pasatu: 2x = 26');
    pausoak.push('x isolatu: x = 13');
    
    const mirenAdina = 13;
    const juanAdina = mirenAdina + diferentzia;
    
    pausoak.push(`Juanen adina kalkulatu: x + 4 = ${mirenAdina} + 4 = ${juanAdina}`);
    
    // Bisualizazioa sortu
    const bisualizazioa = `
        <div class="problema-bisuala">
            <div class="pertsona">
                <div class="pertsona-izena">Miren</div>
                <div class="pertsona-balioa">${mirenAdina} urte</div>
            </div>
            <div class="pertsona">
                <div class="pertsona-izena">Juan</div>
                <div class="pertsona-balioa">${juanAdina} urte</div>
            </div>
            <div class="pertsona-erlazio">Guztira: ${totalAdinak} urte</div>
        </div>
    `;
    
    return {
        emaitza: `Mirenek ${mirenAdina} urte ditu eta Juanek ${juanAdina} urte ditu.`,
        pausoak: pausoak,
        bisualizazioa: bisualizazioa
    };
}

// Diru problema ebazpena
function ebatziDiruProblema() {
    // Definizioak
    const aneHasiera = 50;
    const jonHasiera = 30;
    
    // Ebazpena
    let pausoak = [];
    
    pausoak.push('Ezezaguna definitu: x = Anek Joni ematen dion dirua');
    pausoak.push(`Ane ematen duenean: ${aneHasiera} - x`);
    pausoak.push(`Jon jasotzen duenean: ${jonHasiera} + x`);
    pausoak.push(`Ekuazioa planteatu: ${aneHasiera} - x = ${jonHasiera} + x`);
    pausoak.push(`Termino guztiak antolatu: ${aneHasiera} - ${jonHasiera} = x + x`);
    
    const ezkerAldea = aneHasiera - jonHasiera;
    pausoak.push(`Sinplifikatu: ${ezkerAldea} = 2x`);
    
    const emaitza = ezkerAldea / 2;
    pausoak.push(`x isolatu: x = ${emaitza}`);
    
    const aneAmaiera = aneHasiera - emaitza;
    const jonAmaiera = jonHasiera + emaitza;
    
    // Egiaztatu emaitza zuzena dela
    if (aneAmaiera !== jonAmaiera) {
        return {
            errorea: true,
            mezua: 'Errorea kalkuluetan'
        };
    }
    
    // Bisualizazioa sortu
    const bisualizazioa = `
        <div class="problema-bisuala">
            <div class="pertsona">
                <div class="pertsona-izena">Ane hasieran</div>
                <div class="pertsona-balioa">${aneHasiera}€</div>
            </div>
            <div class="pertsona">
                <div class="pertsona-izena">Jon hasieran</div>
                <div class="pertsona-balioa">${jonHasiera}€</div>
            </div>
            <div class="pertsona-gezia">↓ ${emaitza}€ ↓</div>
            <div class="pertsona">
                <div class="pertsona-izena">Ane amaieran</div>
                <div class="pertsona-balioa">${aneAmaiera}€</div>
            </div>
            <div class="pertsona">
                <div class="pertsona-izena">Jon amaieran</div>
                <div class="pertsona-balioa">${jonAmaiera}€</div>
            </div>
        </div>
    `;
    
    return {
        emaitza: `Anek ${emaitza}€ eman behar dizkio Joni biek diru kopuru berdina izateko (${aneAmaiera}€ bakoitzak).`,
        pausoak: pausoak,
        bisualizazioa: bisualizazioa
    };
}

// Abiadura problema ebazpena
function ebatziAbiaduraProblema() {
    // Definizioak
    const abiadura = 60; // km/h
    const distantzia = 180; // km
    
    // Ebazpena
    let pausoak = [];
    
    pausoak.push('Ezezaguna definitu: x = beharrezko denbora (orduetan)');
    pausoak.push('Abiadura formula erabili: denbora = distantzia / abiadura');
    pausoak.push(`Datuak ordeztu: x = ${distantzia} km / ${abiadura} km/h`);
    
    const denbora = distantzia / abiadura;
    pausoak.push(`Eragiketak egin: x = ${denbora} ordu`);
    
    // Bisualizazioa sortu
    const bisualizazioa = `
        <div class="problema-bisuala">
            <div class="auto-irudia">🚗</div>
            <div class="auto-datuak">
                <div>Abiadura: ${abiadura} km/h</div>
                <div>Distantzia: ${distantzia} km</div>
                <div>Denbora: ${denbora} ordu</div>
            </div>
            <div class="formula">
                Denbora = Distantzia / Abiadura = ${distantzia} km / ${abiadura} km/h = ${denbora} ordu
            </div>
        </div>
    `;
    
    return {
        emaitza: `Autoak ${denbora} ordu beharko ditu ${distantzia} km egiteko.`,
        pausoak: pausoak,
        bisualizazioa: bisualizazioa
    };
}

// Zenbaki problema ebazpena
function ebatziZenbakiProblema() {
    // Definizioak
    const konstanteaBatu = 5;
    const konstanteBiderkatu = 3;
    const emaitzaFinala = 36;
    
    // Ebazpena
    let pausoak = [];
    
    pausoak.push('Ezezaguna definitu: x = pentsatutako zenbakia');
    pausoak.push(`Ekuazioa planteatu: (x + ${konstanteaBatu}) × ${konstanteBiderkatu} = ${emaitzaFinala}`);
    pausoak.push(`Parentesia zabaldu: ${konstanteBiderkatu}x + ${konstanteaBatu * konstanteBiderkatu} = ${emaitzaFinala}`);
    pausoak.push(`Konstantea beste aldera pasatu: ${konstanteBiderkatu}x = ${emaitzaFinala} - ${konstanteaBatu * konstanteBiderkatu}`);
    
    const eskuinAldea = emaitzaFinala - (konstanteaBatu * konstanteBiderkatu);
    pausoak.push(`Sinplifikatu: ${konstanteBiderkatu}x = ${eskuinAldea}`);
    
    const zenbakia = eskuinAldea / konstanteBiderkatu;
    pausoak.push(`x isolatu: x = ${eskuinAldea} / ${konstanteBiderkatu} = ${zenbakia}`);
    
    // Egiaztatu emaitza
    const egiaztatu = (zenbakia + konstanteaBatu) * konstanteBiderkatu;
    pausoak.push(`Egiaztatu: (${zenbakia} + ${konstanteaBatu}) × ${konstanteBiderkatu} = ${egiaztatu}`);
    
    // Bisualizazioa sortu
    const bisualizazioa = `
        <div class="problema-bisuala">
            <div class="zenbaki-kalkulua">
                <div class="hasierako-zenbakia">${zenbakia}</div>
                <div class="eragiketa-gezia">+${konstanteaBatu} →</div>
                <div class="tarteko-zenbakia">${zenbakia + konstanteaBatu}</div>
                <div class="eragiketa-gezia">×${konstanteBiderkatu} →</div>
                <div class="azken-zenbakia">${egiaztatu}</div>
            </div>
        </div>
    `;
    
    return {
        emaitza: `Pentsatutako zenbakia ${zenbakia} da.`,
        pausoak: pausoak,
        bisualizazioa: bisualizazioa
    };
}

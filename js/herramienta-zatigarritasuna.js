document.addEventListener('DOMContentLoaded', () => {
    // DOM elementuak
    const zatigarritasunaContainer = document.getElementById('zatigarritasuna-tresna');
    const zenbakiInput = document.getElementById('zenbakia-input');
    const zatitzaileaInput = document.getElementById('zatitzailea-input');
    const egiaztatuBtn = document.getElementById('egiaztatu-btn');
    const emaitzaDiv = document.getElementById('zatigarritasuna-emaitza');
    const azalpenaDiv = document.getElementById('zatigarritasuna-azalpena');
    
    // MKT eta ZKH tresna
    const mktZkhContainer = document.getElementById('mkt-zkh-tresna');
    const zenbaki1Input = document.getElementById('zenbaki1-input');
    const zenbaki2Input = document.getElementById('zenbaki2-input');
    const eragiketaSelect = document.getElementById('eragiketa-select');
    const kalkulatuBtn = document.getElementById('kalkulatu-btn');
    const emaitzaMktZkhDiv = document.getElementById('mkt-zkh-emaitza');
    const azalpenaMktZkhDiv = document.getElementById('mkt-zkh-azalpena');
    const pausoakDiv = document.getElementById('mkt-zkh-pausoak');
    
    // Zatigarritasun irizpideen tresna
    const irizpideakContainer = document.getElementById('irizpideak-tresna');
    const irizpideZenbakiInput = document.getElementById('irizpide-zenbakia-input');
    const irizpideEgiaztatuBtn = document.getElementById('irizpide-egiaztatu-btn');
    const irizpideEmaitzaDiv = document.getElementById('irizpideak-emaitza');
    
    // Zatigarritasuna egiaztatu
    function zatigarritasunaEgiaztatu() {
        const zenbakia = parseInt(zenbakiInput.value);
        const zatitzailea = parseInt(zatitzaileaInput.value);
        
        if (isNaN(zenbakia) || isNaN(zatitzailea)) {
            emaitzaDiv.innerHTML = '<p class="error">Mesedez, sartu zenbaki baliodun bat.</p>';
            azalpenaDiv.innerHTML = '';
            return;
        }
        
        if (zatitzailea === 0) {
            emaitzaDiv.innerHTML = '<p class="error">Ezin da zeroz zatitu.</p>';
            azalpenaDiv.innerHTML = '';
            return;
        }
        
        const hondarra = zenbakia % zatitzailea;
        const zatigarriaDa = hondarra === 0;
        
        // Emaitza erakutsi
        if (zatigarriaDa) {
            emaitzaDiv.innerHTML = `
                <p class="success"><strong>${zenbakia}</strong> zatigarria da <strong>${zatitzailea}</strong>-(e)z.</p>
            `;
        } else {
            emaitzaDiv.innerHTML = `
                <p class="error"><strong>${zenbakia}</strong> ez da zatigarria <strong>${zatitzailea}</strong>-(e)z.</p>
            `;
        }
        
        // Azalpena erakutsi
        azalpenaDiv.innerHTML = `
            <div class="azalpena-zatiketa">
                <div class="zatiketa-prozesua">
                    <div class="zatiketa-goikoa">${zenbakia}</div>
                    <div class="zatiketa-behekoa">${zatitzailea}</div>
                    <div class="zatiketa-emaitza">${Math.floor(zenbakia / zatitzailea)}</div>
                    <div class="zatiketa-hondarra">Hondarra: ${hondarra}</div>
                </div>
                <p>${zenbakia} = ${zatitzailea} × ${Math.floor(zenbakia / zatitzailea)} + ${hondarra}</p>
                <p class="ondorioa">
                    ${zatigarriaDa 
                        ? 'Hondarra 0 denez, zatigarria da.' 
                        : 'Hondarra 0 ez denez, ez da zatigarria.'}
                </p>
            </div>
        `;
    }
    
    // MKT eta ZKH kalkulatu
    function mktZkhKalkulatu() {
        const zenbaki1 = parseInt(zenbaki1Input.value);
        const zenbaki2 = parseInt(zenbaki2Input.value);
        const eragiketa = eragiketaSelect.value;
        
        if (isNaN(zenbaki1) || isNaN(zenbaki2) || zenbaki1 <= 0 || zenbaki2 <= 0) {
            emaitzaMktZkhDiv.innerHTML = '<p class="error">Mesedez, sartu zenbaki positibo baliodun bat.</p>';
            azalpenaMktZkhDiv.innerHTML = '';
            pausoakDiv.innerHTML = '';
            return;
        }
        
        // Zatitzaile komunak kalkulatu
        const zatitzaileak1 = kalkulatuZatitzaileak(zenbaki1);
        const zatitzaileak2 = kalkulatuZatitzaileak(zenbaki2);
        const zatitzaileKomunak = zatitzaileak1.filter(z => zatitzaileak2.includes(z));
        
        // Multiplo komunak kalkulatu (lehenengo 10)
        const multiploak1 = Array.from({length: 10}, (_, i) => zenbaki1 * (i + 1));
        const multiploak2 = Array.from({length: 10}, (_, i) => zenbaki2 * (i + 1));
        const multiploKomunak = multiploak1.filter(m => multiploak2.some(n => n === m));
        
        let emaitza, azalpena, pausoak;
        
        if (eragiketa === 'mkt') {
            // MKT kalkulatu Euklides-en algoritmoaren bidez
            const mkt = (zenbaki1 * zenbaki2) / zkh(zenbaki1, zenbaki2);
            emaitza = `<p class="success">MKT(${zenbaki1}, ${zenbaki2}) = <strong>${mkt}</strong></p>`;
            
            azalpena = `
                <h4>Multiplo Komun Txikiena (MKT)</h4>
                <p>Bi zenbakiren multiplo komun txikiena (MKT) bi zenbakien multiplo komunetan txikiena da.</p>
                <p>Formula: MKT(a, b) = (a × b) / ZKH(a, b)</p>
            `;
            
            pausoak = `
                <div class="pausoak">
                    <h4>Kalkuluaren pausoak:</h4>
                    <ol>
                        <li>${zenbaki1} eta ${zenbaki2} zenbakien ZKH kalkulatu: ${zkh(zenbaki1, zenbaki2)}</li>
                        <li>MKT formula aplikatu: (${zenbaki1} × ${zenbaki2}) / ${zkh(zenbaki1, zenbaki2)}</li>
                        <li>Kalkulatu: (${zenbaki1 * zenbaki2}) / ${zkh(zenbaki1, zenbaki2)} = ${mkt}</li>
                    </ol>
                    <div class="multiploak-zerrenda">
                        <p><strong>${zenbaki1}</strong>-ren multiploak: ${multiploak1.join(', ')}...</p>
                        <p><strong>${zenbaki2}</strong>-ren multiploak: ${multiploak2.join(', ')}...</p>
                        <p>Multiplo komunak: ${multiploKomunak.length > 0 ? multiploKomunak.join(', ') : 'Ez dago multiplo komunik lehenengo 10 multiploetan'}...</p>
                        <p>Multiplo komun txikiena: <strong>${mkt}</strong></p>
                    </div>
                </div>
            `;
        } else {
            // ZKH kalkulatu Euklides-en algoritmoaren bidez
            const zkhEmaitza = zkh(zenbaki1, zenbaki2);
            const zkhPausoak = euklidesAlgoritmoaPausoak(zenbaki1, zenbaki2);
            
            emaitza = `<p class="success">ZKH(${zenbaki1}, ${zenbaki2}) = <strong>${zkhEmaitza}</strong></p>`;
            
            azalpena = `
                <h4>Zatitzaile Komun Handiena (ZKH)</h4>
                <p>Bi zenbakiren zatitzaile komun handiena (ZKH) bi zenbakiak zatitzen dituen zenbakirik handiena da.</p>
                <p>Euklides-en algoritmoa erabiltzen da kalkulatzeko.</p>
            `;
            
            pausoak = `
                <div class="pausoak">
                    <h4>Euklides-en algoritmoaren pausoak:</h4>
                    <div class="euklides-pausoak">
                        ${zkhPausoak}
                    </div>
                    <div class="zatitzaileak-zerrenda">
                        <p><strong>${zenbaki1}</strong>-ren zatitzaileak: ${zatitzaileak1.join(', ')}</p>
                        <p><strong>${zenbaki2}</strong>-ren zatitzaileak: ${zatitzaileak2.join(', ')}</p>
                        <p>Zatitzaile komunak: ${zatitzaileKomunak.join(', ')}</p>
                        <p>Zatitzaile komun handiena: <strong>${zkhEmaitza}</strong></p>
                    </div>
                </div>
            `;
        }
        
        emaitzaMktZkhDiv.innerHTML = emaitza;
        azalpenaMktZkhDiv.innerHTML = azalpena;
        pausoakDiv.innerHTML = pausoak;
    }
    
    // Zatigarritasun irizpideak egiaztatu
    function irizpideakEgiaztatu() {
        const zenbakia = irizpideZenbakiInput.value.trim();
        
        if (!zenbakia || isNaN(parseInt(zenbakia))) {
            irizpideEmaitzaDiv.innerHTML = '<p class="error">Mesedez, sartu zenbaki baliodun bat.</p>';
            return;
        }
        
        const zenbakiInt = parseInt(zenbakia);
        let emaitza = '<div class="irizpide-emaitzak">';
        
        // 2ren irizpidea
        const zatigarria2 = zenbakiInt % 2 === 0;
        emaitza += `
            <div class="irizpide-emaitza ${zatigarria2 ? 'success' : 'error'}">
                <h4>2ren irizpidea</h4>
                <p>${zatigarria2 ? 'Bai' : 'Ez'}, ${zenbakiInt} ${zatigarria2 ? 'zatigarria' : 'ez da zatigarria'} 2z.</p>
                <p class="azalpena">Zenbaki bat 2z zatigarria da azken digitua bikoitia bada (0, 2, 4, 6, 8).</p>
                <p>Azken digitua: ${zenbakia.charAt(zenbakia.length - 1)}</p>
            </div>
        `;
        
        // 3ren irizpidea
        const digituen_batura = zenbakia.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        const zatigarria3 = digituen_batura % 3 === 0;
        emaitza += `
            <div class="irizpide-emaitza ${zatigarria3 ? 'success' : 'error'}">
                <h4>3ren irizpidea</h4>
                <p>${zatigarria3 ? 'Bai' : 'Ez'}, ${zenbakiInt} ${zatigarria3 ? 'zatigarria' : 'ez da zatigarria'} 3z.</p>
                <p class="azalpena">Zenbaki bat 3z zatigarria da digituen batura 3z zatigarria bada.</p>
                <p>Digituen batura: ${zenbakia.split('').join(' + ')} = ${digituen_batura}</p>
                <p>${digituen_batura} ${zatigarria3 ? 'zatigarria da' : 'ez da zatigarria'} 3z.</p>
            </div>
        `;
        
        // 5ren irizpidea
        const zatigarria5 = zenbakia.charAt(zenbakia.length - 1) === '0' || zenbakia.charAt(zenbakia.length - 1) === '5';
        emaitza += `
            <div class="irizpide-emaitza ${zatigarria5 ? 'success' : 'error'}">
                <h4>5en irizpidea</h4>
                <p>${zatigarria5 ? 'Bai' : 'Ez'}, ${zenbakiInt} ${zatigarria5 ? 'zatigarria' : 'ez da zatigarria'} 5ez.</p>
                <p class="azalpena">Zenbaki bat 5ez zatigarria da azken digitua 0 edo 5 bada.</p>
                <p>Azken digitua: ${zenbakia.charAt(zenbakia.length - 1)}</p>
            </div>
        `;
        
        // 10ren irizpidea
        const zatigarria10 = zenbakia.charAt(zenbakia.length - 1) === '0';
        emaitza += `
            <div class="irizpide-emaitza ${zatigarria10 ? 'success' : 'error'}">
                <h4>10en irizpidea</h4>
                <p>${zatigarria10 ? 'Bai' : 'Ez'}, ${zenbakiInt} ${zatigarria10 ? 'zatigarria' : 'ez da zatigarria'} 10ez.</p>
                <p class="azalpena">Zenbaki bat 10ez zatigarria da azken digitua 0 bada.</p>
                <p>Azken digitua: ${zenbakia.charAt(zenbakia.length - 1)}</p>
            </div>
        `;
        
        emaitza += '</div>';
        irizpideEmaitzaDiv.innerHTML = emaitza;
    }
    
    // Laguntzaile-funtzioak
    function kalkulatuZatitzaileak(zenbakia) {
        const zatitzaileak = [];
        for (let i = 1; i <= zenbakia; i++) {
            if (zenbakia % i === 0) {
                zatitzaileak.push(i);
            }
        }
        return zatitzaileak;
    }
    
    function zkh(a, b) {
        // Euklides-en algoritmoa
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    function euklidesAlgoritmoaPausoak(a, b) {
        let pausoak = '<ol>';
        let pauso = 1;
        
        while (b !== 0) {
            pausoak += `<li>Zatitu ${a} / ${b} = ${Math.floor(a / b)} eta hondarra ${a % b}</li>`;
            const temp = b;
            b = a % b;
            a = temp;
            pauso++;
        }
        
        pausoak += `<li>Hondarra 0 denez, ZKH = ${a}</li>`;
        pausoak += '</ol>';
        
        return pausoak;
    }
    
    // Event listeners
    if (egiaztatuBtn) {
        egiaztatuBtn.addEventListener('click', zatigarritasunaEgiaztatu);
    }
    
    if (kalkulatuBtn) {
        kalkulatuBtn.addEventListener('click', mktZkhKalkulatu);
    }
    
    if (irizpideEgiaztatuBtn) {
        irizpideEgiaztatuBtn.addEventListener('click', irizpideakEgiaztatu);
    }
    
    // Enter tekla entzuteko
    if (zenbakiInput && zatitzaileaInput) {
        [zenbakiInput, zatitzaileaInput].forEach(input => {
            input.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    zatigarritasunaEgiaztatu();
                }
            });
        });
    }
    
    if (zenbaki1Input && zenbaki2Input) {
        [zenbaki1Input, zenbaki2Input].forEach(input => {
            input.addEventListener('keypress', (event) => {
                if (event.key === 'Enter') {
                    mktZkhKalkulatu();
                }
            });
        });
    }
    
    if (irizpideZenbakiInput) {
        irizpideZenbakiInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                irizpideakEgiaztatu();
            }
        });
    }
});

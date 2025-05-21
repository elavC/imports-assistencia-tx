// CONDICIONAL PARA SELECIONAR A BANDEIRA DO CARTÃO

const bandeira = document.getElementById('bandeiras');
const main = document.getElementById('main');
const other = document.getElementById('other');
const visaMasterBtn = document.getElementById('visa-master');
const outrasBandeiras = document.getElementById('outras-bandeiras');

function visaMaster () {
    bandeira.style.display = "none"
    main.style.display = "flex"
    console.log("clicou")
}

function otherBandeira () {
    bandeira.style.display = "none"
    other.style.display = "flex"
    console.log("clicou")
}

visaMasterBtn.addEventListener('click', visaMaster);
outrasBandeiras.addEventListener('click', otherBandeira);

// CONDICIONAL PARA SELECIONAR A BANDEIRA DO CARTÃO


// CALCULO PARA TAXAS DE OUTRAS BANDEIRAS

let receberOther = document.getElementById('receberOther');
const sendBtnOther = document.getElementById('sendBtnOther');

const OtherN0 = document.getElementById('other-n0');
const OtherN1 = document.getElementById('other-n1');
const OtherN2 = document.getElementById('other-n2')
const OtherN3 = document.getElementById('other-n3')
const OtherN4 = document.getElementById('other-n4')
const OtherN5 = document.getElementById('other-n5')
const OtherN6 = document.getElementById('other-n6')
const OtherN7 = document.getElementById('other-n7')
const OtherN8 = document.getElementById('other-n8')
const OtherN9 = document.getElementById('other-n9')
const OtherN10 = document.getElementById('other-n10')
const OtherN11 = document.getElementById('other-n11')
const OtherN12 = document.getElementById('other-n12')

const OtherP0 = document.getElementById('other-p0');
const OtherP1 = document.getElementById('other-p1');
const OtherP2 = document.getElementById('other-p2')
const OtherP3 = document.getElementById('other-p3')
const OtherP4 = document.getElementById('other-p4')
const OtherP5 = document.getElementById('other-p5')
const OtherP6 = document.getElementById('other-p6')
const OtherP7 = document.getElementById('other-p7')
const OtherP8 = document.getElementById('other-p8')
const OtherP9 = document.getElementById('other-p9')
const OtherP10 = document.getElementById('other-p10')
const OtherP11 = document.getElementById('other-p11')
const OtherP12 = document.getElementById('other-p12')


function calcularOther () {
    let receberValorOther = parseFloat(receberOther.value);

    let Othervalue0 = receberValorOther * 100 / 98.57
    let Othervalue1 = receberValorOther * 100 / 96.00
    let Othervalue2 = receberValorOther * 100 / 94.34
    let Othervalue3 = receberValorOther * 100 / 93.70
    let Othervalue4 = receberValorOther * 100 / 93.02
    let Othervalue5 = receberValorOther * 100 / 92.29
    let Othervalue6 = receberValorOther * 100 / 91.60
    let Othervalue7 = receberValorOther * 100 / 90.58
    let Othervalue8 = receberValorOther * 100 / 89.64
    let Othervalue9 = receberValorOther * 100 / 88.59
    let Othervalue10 = receberValorOther * 100 / 88.10
    let Othervalue11 = receberValorOther * 100 / 87.03
    let Othervalue12 = receberValorOther * 100 / 85.80

    let Otherparcela0 = Othervalue0 / 1;
    let Otherparcela1 = Othervalue1 / 1;
    let Otherparcela2 = Othervalue2 / 2;
    let Otherparcela3 = Othervalue3 / 3;
    let Otherparcela4 = Othervalue4 / 4;
    let Otherparcela5 = Othervalue5 / 5;
    let Otherparcela6 = Othervalue6 / 6;
    let Otherparcela7 = Othervalue7 / 7;
    let Otherparcela8 = Othervalue8 / 8;
    let Otherparcela9 = Othervalue9 / 9;
    let Otherparcela10 = Othervalue10 / 10;
    let Otherparcela11 = Othervalue11 / 11;
    let Otherparcela12 = Othervalue12 / 12;


    OtherN0.innerHTML = Othervalue0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN1.innerHTML = Othervalue1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN2.innerHTML = Othervalue2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN3.innerHTML = Othervalue3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN4.innerHTML = Othervalue4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN5.innerHTML = Othervalue5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN6.innerHTML = Othervalue6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN7.innerHTML = Othervalue7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN8.innerHTML = Othervalue8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN9.innerHTML = Othervalue9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN10.innerHTML = Othervalue10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherN11.innerHTML = Othervalue11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    OtherP0.innerHTML = Otherparcela0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP1.innerHTML = Otherparcela1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP2.innerHTML = Otherparcela2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP3.innerHTML = Otherparcela3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP4.innerHTML = Otherparcela4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP5.innerHTML = Otherparcela5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP6.innerHTML = Otherparcela6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP7.innerHTML = Otherparcela7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP8.innerHTML = Otherparcela8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP9.innerHTML = Otherparcela9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP10.innerHTML = Otherparcela10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP11.innerHTML = Otherparcela11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    OtherP12.innerHTML = Otherparcela12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

sendBtnOther.addEventListener('click', calcularOther)

// CALCULO PARA TAXAS DE OUTRAS BANDEIRAS



// CALCULO PARA TAXAS DE VISA E MASTER

let receber = document.getElementById('receber');
const sendBtn = document.getElementById('sendBtn');


const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const n3 = document.getElementById('n3');
const n4 = document.getElementById('n4');
const n5 = document.getElementById('n5');
const n6 = document.getElementById('n6');
const n7 = document.getElementById('n7');
const n8 = document.getElementById('n8');
const n9 = document.getElementById('n9');
const n10 = document.getElementById('n10');
const n11 = document.getElementById('n11');
const n12 = document.getElementById('n12');

const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');
const p6 = document.getElementById('p6');
const p7 = document.getElementById('p7');
const p8 = document.getElementById('p8');
const p9 = document.getElementById('p9');
const p10 = document.getElementById('p10');
const p11 = document.getElementById('p11');
const p12 = document.getElementById('p12');


function calcular () {
    let receberValor = parseFloat(receber.value);

    let value0 = receberValor * 100 / 99.00
    let value1 = receberValor * 100 / 96.50
    let value2 = receberValor * 100 / 94.94
    let value3 = receberValor * 100 / 94.30
    let value4 = receberValor * 100 / 93.62
    let value5 = receberValor * 100 / 92.89
    let value6 = receberValor * 100 / 92.20
    let value7 = receberValor * 100 / 91.18
    let value8 = receberValor * 100 / 90.24
    let value9 = receberValor * 100 / 89.19
    let value10 = receberValor * 100 / 88.70
    let value11 = receberValor * 100 / 87.63
    let value12 = receberValor * 100 / 86.40

    let parcela0 = value0 / 1;
    let parcela1 = value1 / 1;
    let parcela2 = value2 / 2;
    let parcela3 = value3 / 3;
    let parcela4 = value4 / 4;
    let parcela5 = value5 / 5;
    let parcela6 = value6 / 6;
    let parcela7 = value7 / 7;
    let parcela8 = value8 / 8;
    let parcela9 = value9 / 9;
    let parcela10 = value10 / 10;
    let parcela11 = value11 / 11;
    let parcela12 = value12 / 12;


    n0.innerHTML = value0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n1.innerHTML = value1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n2.innerHTML = value2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n3.innerHTML = value3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n4.innerHTML = value4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n5.innerHTML = value5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n6.innerHTML = value6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n7.innerHTML = value7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n8.innerHTML = value8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n9.innerHTML = value9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n10.innerHTML = value10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n11.innerHTML = value11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    n12.innerHTML = value12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });


    p0.innerHTML = parcela0.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p1.innerHTML = parcela1.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p2.innerHTML = parcela2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p3.innerHTML = parcela3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p4.innerHTML = parcela4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p5.innerHTML = parcela5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p6.innerHTML = parcela6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p7.innerHTML = parcela7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p8.innerHTML = parcela8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p9.innerHTML = parcela9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p10.innerHTML = parcela10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p11.innerHTML = parcela11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    p12.innerHTML = parcela12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

sendBtn.addEventListener('click', calcular)

// CALCULO PARA TAXAS DE VISA E MASTER


// VALIDANDO OS DADOS DO FORM

const form = document.getElementById("form");
const cadastro = document.getElementById("inputCadastro");
const interessado = document.getElementById("inputInteressado");
const profissional = document.getElementById("inputProfissional");
const radioTxHabitese = document.getElementsByName("radioTxHabitese");
//const assEng = document.getElementsByName("radioAssinatura");


const txHabitese80 = 111.88;
let txHabiteseSelected = 0;


let assEngSelected = 0;

//Verificando qual dos radio do campo de Tx de Habite-se está selecionado e atribuindo seu respectivo valor
function selectTxHabitese() {
    for (let i = 0; i < radioTxHabitese.length; i++) {
        console.log('\nEntrou no for - '+i);
        if (radioTxHabitese[i].checked) {
            console.log('\nEntrou no radio checked')
            if (radioTxHabitese[i].value === '1') {
                txHabiteseSelected = txHabitese80;
                console.log('Habite-se de até 80 m² radio ('+radioTxHabitese[i].value + ')');
            }else{
                console.log('\nErro no value')
            }
        }
    }
    console.log('Valor do ' + txhabiteseSelected + txHabiteseSelected);
}

function selectTxHabitese2() {
    for (let i = 0; i < radioTxHabitese.length; i++) {
        if (radioTxHabitese[i].checked) {
            switch (radioTxHabitese[i].value) {
                case '1':
                    txHabiteseSelected = 111.88;
                    console.log('value do radioTxHabitese: '+radioTxHabitese+'|| txhabiteseSelected: '+txHabiteseSelected);
                    break;            
                case '2':
                    radioTxHabitese[i].checked = true;
                    txHabiteseSelected = 167.87;
                    break;            
                case '3':
                    radioTxHabitese[i].checked = true;
                    txHabiteseSelected = 251.78;
                    break;            
                case '4':
                    radioTxHabitese[i].checked = true;
                    txHabiteseSelected = 378.41;
                    break;
                default:
                console.log("erro na validação do radio tx Habite-se");
            }
            console.log('value do radioTxHabitese: '+radioTxHabitese+'|| txhabiteseSelected: '+txHabiteseSelected);
        }

    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Evento submit chamado! \n'+radioTxHabitese.length+'\n'+radioTxHabitese[0].value)
 
    // Verifica se o campo cadastro está vazio
    if (cadastro.value === "") {
        console.log("cadastro vazio");
        //return;
    }
    
    // Verifica se o campo interessasdo está vazio
    if (interessado.value === ""){
        console.log("interessado vazio");
       // return;
    }
    
    // Verifica se o campo profissional está vazio
    if (profissional.value === ""){
        console.log("profissional vazio");
        //return;
    }
    selectTxHabitese();
    
    /*
        function txHabiteseSelected() {
        }
    }
    */
   
   // Se a validação passar, envie o formulário
   form.submit();
});


/*
@ -1,36 +0,0 @@
// DOM 
const form = document.getElementById('myForm');
const cadastro = document.getElementById('input-cadastro');
const radioTxHabitese = document.getElementsByName('radio-tx-habitese');
const radioAssinatura = document.getElementsByName('radio-assinatura');

let entradaHabitese = 0;

// Variáveis das taxas fixas
const txHabitese80 = 147.45;

form.addEventListener("submit", (event) => {
    event.preventDefault();
    retornaValorRadioHabitese();
})

function retornaValorRadioHabitese() {
    for (let i = 0; i < radioTxHabitese.length; i++) {
        if (radioTxHabitese[i].checked) {
            if (radioTxHabitese[i].value == '1'){
                entradaHabitese = txHabitese80;
                console.log("funcionou");
            }
            
            alert(
                "radio (" + radioTxHabitese[i].value + ") checked" +
                "\n" +
                "Valor retornado: " +
                valorRetornado +
                "\n valor de a: "+ a
                );
            
            }
        }
    }
    

*/
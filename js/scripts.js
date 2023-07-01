
// VALIDANDO OS DADOS DO FORM

const form = document.getElementById("form");
const cadastro = document.getElementById("inputCadastro");
const interessado = document.getElementById("inputInteressado");
const profissional = document.getElementById("inputProfissional");
const radioTxHabitese = document.getElementsByName("radioTxHabitese");
const radioAssinatura = document.getElementsByName("radioAssinatura");



// declarando as variáveis para iteragir com o DOM da taxa do HAbite-se
const txHabitese80 = 111.88;
const txHabitese100 = 167.87;
const txHabitese200 = 251.78;
const txHabitese20001 = 378.41;
let txHabiteseSelected = 0;

//Verificando qual dos radio do campo de Tx de Habite-se está selecionado e atribuindo seu respectivo valor
function selectTxHabitese() {
    for (let i = 0; i < radioTxHabitese.length; i++) {
        if (radioTxHabitese[i].checked) {
            if (radioTxHabitese[i].value === '1') {
                txHabiteseSelected = txHabitese80;
            }else{
                if (radioTxHabitese[i].value === '2') {
                    txHabiteseSelected = txHabitese100;
                }else{
                    if (radioTxHabitese[i].value === '3') {
                        txHabiteseSelected = txHabitese200;
                    }else{
                        if (radioTxHabitese[i].value === '4') {
                            txHabiteseSelected = txHabitese20001;
                        }else{
                        }
                    }
                }
            }
        }
    }
    console.log('Valor do habite-se: R$ ' + txHabiteseSelected);
}
//declarando variáveis para iteragir com DOM assinatura
const assEng60 = 65.90;
const assEng6001 = 131.88;
let txAssEngSelected = 0;

// Função para identificar e estimar a assinatura do engenheiro
function selectAssEng(){
    for (var i = 0; i < radioAssinatura.length; i++){
        if (radioAssinatura[i].checked){
            if (radioAssinatura[i].value === '1'){
                txAssEngSelected = assEng60;
                console.log('\nAssinatura selecionada de até 60m² ('+radioAssinatura[i].value + ')');
            }else{
                if (radioAssinatura[i].value === '2'){
                    txAssEngSelected = assEng6001;
                    console.log('\nAssinatura selecionada acima de 60m² ('+radioAssinatura[i].value + ')');
                }
            }
        }
    }
    console.log('Valor da assinatura do engenherio: R$ ' + txAssEngSelected);
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
    selectAssEng();
   
   // Se a validação passar, envie o formulário
   form.submit();
});
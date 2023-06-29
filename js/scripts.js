
// VALIDANDO OS DADOS DO FORM

const form = document.getElementById("form");
const cadastro = document.getElementById("inputCadastro");
const interessado = document.getElementById("inputInteressado");
const profissional = document.getElementById("inputProfissional");
const radioTxHabitese = document.getElementsByName("radioTxHabitese");
//const assEng = document.getElementsByName("radioAssinatura");


const txHabitese80 = 111.88;
const txHabitese100 = 150.88;
const txHabitese200 = 200.88;
const txHabitese20001 = 250.88;
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
                return txHabiteseSelected;
            }else{
                console.log('\nErro no value do habite-se 80')
            }
            if (radioTxHabitese[i].value === '2') {
                txHabiteseSelected = txHabitese100;
                console.log('Habite-se de 80,01m² - 100m² radio ('+radioTxHabitese[i].value + ')');
            }else{
                console.log('\nErro no value do habite-se 80,01m² - 100m²')
            }
            if (radioTxHabitese[i].value === '3') {
                txHabiteseSelected = txHabitese200;
                console.log('Habite-se de 100,01m² - 200m² radio ('+radioTxHabitese[i].value + ')');
            }else{
                console.log('\nErro no value do habite-se 100,01m² - 200m²')
            }
            if (radioTxHabitese[i].value === '4') {
                txHabiteseSelected = txHabitese20001;
                console.log('Habite-se > 200m² radio ('+radioTxHabitese[i].value + ')');
            }else{
                console.log('\nErro no value do Habite-se > 200m²')
            }
        }
    }
    console.log('Valor do ' + txhabiteseSelected);
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
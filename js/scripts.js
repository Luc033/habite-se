
// VALIDANDO OS DADOS DO FORM

const form = document.getElementById("form");
const cadastro = document.getElementById("inputCadastro");
const interessado = document.getElementById("inputInteressado");
const profissional = document.getElementById("inputProfissional");
let radioTxHabitese = document.getElementsByName("radioTxHabitese");
//const assEng = document.getElementsByName("radioAssinatura");

let txHabiteseSelected = 0;
let assEngSelected = 0;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Evento submit chamado! \n'+radioTxHabitese.length+'\n'+radioTxHabitese[0].value)
 
    // Verifica se o campo cadastro está vazio
    if (cadastro.value === "") {
        return;
    }
    
    // Verifica se o campo interessasdo está vazio
    if (interessado.value === ""){
        return;
    }

    // Verifica se o campo profissional está vazio
    if (profissional.value === ""){
        return;
    }

    //Verificando qual dos radio do campo de Tx de Habite-se está selecionado e atribuindo seu respectivo valor
    function selectTxHabitese() {
        for (let i = 0; i < radioTxHabitese.length; i++) {
            console.log('\nEntrou no for');
            if (radioTxHabitese[i].checked) {
                console.log('\nEntrou no radio checked')
                if (radioTxHabitese[i].value === '1') {
                    console.log('\nAtribuiu o valor da tx selecionada e validou como trua a radio index '+radioTxHabitese[i])
                    radioTxHabitese[i].checked = true;
                    txHabiteseSelected = 111.88;
                }else{
                    console.log('\nErro no value')
                }
            }
        }
        console.log('value do radioTxHabitese: ' + radioTxHabitese +'|| txhabiteseSelected: ' + txHabiteseSelected);
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

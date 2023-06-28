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
            /*
            alert(
                "radio (" + radioTxHabitese[i].value + ") checked" +
                "\n" +
                "Valor retornado: " +
                valorRetornado +
                "\n valor de a: "+ a
                );
            */
        }
    }
}


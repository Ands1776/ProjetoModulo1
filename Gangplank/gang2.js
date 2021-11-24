var mensagem;

        function gang2() {
        while(mensagem != 1 || mensagem != 2) {
            mensagem = prompt("\n 1 - 2021 \n 2 - 2009 ");
        if (mensagem == 1) 
        {
            location.replace ('gangGameOver2.html');
            break;
        }
        else if (mensagem == 2)
        {
            location.replace('gang3.html');
            break;
        }
        else 
        {
            alert('Escolha entre 1 ou 2');
            break;
        }
    }
}
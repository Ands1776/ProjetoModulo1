var mensagem;

        function gang1() {
        while(mensagem != 1 || mensagem != 2) {
            mensagem = prompt("\n 1 - Usar alfanje! \n 2 - Usar pistola. ");
        if (mensagem == 1) 
        {
            location.replace ('gang2.html');
            break;
        }
        else if (mensagem == 2)
        {
            location.replace('gangGameOver1.html');
            break;
        }
        else 
        {
            alert('Escolha entre 1 ou 2');
            break;
        }
    }
}
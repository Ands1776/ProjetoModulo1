var mensagem;

        function gang3() {
        while(mensagem != 1 || mensagem != 2) {
            mensagem = prompt("\n 1 - Usar Barragem de Canhão! \n 2 - Usar armas Noxianas! ");
        if (mensagem == 1) 
        {
            location.replace ('gangFinal.html');
            break;
        }
        else if (mensagem == 2)
        {
            location.replace('gangGameOver3.html');
            break;
        }
        else 
        {
            alert('Escolha entre 1 ou 2');
            break;
        }
    }
}
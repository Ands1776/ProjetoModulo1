var mensagem;

        function miss4() {
        while(mensagem != 1 || mensagem != 2) {
            mensagem = prompt("\n 1 - Atirar! \n 2 - Pular imediatamente. ");
        if (mensagem == 1) 
        {
            location.replace ('missFinal.html');
            break;
        }
        else if (mensagem == 2)
        {
            location.replace('missGameOver3.html');
            break;
        }
        else 
        {
            alert('Escolha entre 1 ou 2');
            break;
        }
    }
}
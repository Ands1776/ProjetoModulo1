var mensagem;

        function miss2() {
        while(mensagem != 1 || mensagem != 2) {
            mensagem = prompt("\n 1 - Pela minha familia! (Atirar) \n 2 - Apesar de tudo, esse vagabundo pode me ajudar. (Não atirar)");
        if (mensagem == 1) 
        {
            location.replace ('missGameOver1.html');
            break;
        }
        else if (mensagem == 2)
        {
            location.replace('miss3.html');
            break;
        }
        else 
        {
            alert('Escolha entre 1 ou 2');
            break;
        }
    }
}
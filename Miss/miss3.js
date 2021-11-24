var mensagem;

        function miss3() {
        while(mensagem != 1 || mensagem != 2) {
            mensagem = prompt("\n 1 - Usar Chuva de Disparos \n 2 - Usar Metendo Bala ");
        if (mensagem == 1) 
        {
            location.replace ('missGameOver2.html');
            break;
        }
        else if (mensagem == 2)
        {
            location.replace('miss4.html');
            break;
        }
        else 
        {
            alert('Escolha entre 1 ou 2');
            break;
        }
    }
}
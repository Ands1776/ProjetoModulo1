var mensagem;

        function pyke3() {
        while(mensagem != 1 || mensagem != 2) {
            mensagem = prompt("\n 1 - Pyke joga sua adaga presa em uma corda, puxa Taylor e o finaliza. \n 2 - Pyke chega com sua ultimate seguido de um ataque com sua adaga no pescoço. ");
        if (mensagem == 1) 
        {
            location.replace ('pykeFinal.html');
            break;
        }
        else if (mensagem == 2)
        {
            location.replace('pykeGameOver3.html');
            break;
        }
        else 
        {
            alert('Escolha entre 1 ou 2');
            break;
        }
    }
}
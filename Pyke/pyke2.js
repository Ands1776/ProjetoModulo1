var mensagem;

        function pyke2() {
        while(mensagem != 1 || mensagem != 2) {
            mensagem = prompt("\n 1 - Pyke chega com sua ultimate seguido de um ataque com sua adaga no pescoço. \n 2 - Pyke o atravessa com seu avanço e enfia sua adaga nas costas de Jhack. ");
        if (mensagem == 1) 
        {
            location.replace ('pyke3.html');
            break;
        }
        else if (mensagem == 2)
        {
            location.replace('pykeGameOver2.html');
            break;
        }
        else 
        {
            alert('Escolha entre 1 ou 2');
            break;
        }
    }
}
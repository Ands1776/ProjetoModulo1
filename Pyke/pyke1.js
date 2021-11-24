var mensagem;

        function pyke1() {
        while(mensagem != 1 || mensagem != 2) {
            mensagem = prompt("\n 1 - Pyke chega invisível e ultiliza sua adaga por trás de Pow. \n 2 - Pyke avança rapidamente e utiliza sua ultimate. ");
        if (mensagem == 1) 
        {
            location.replace ('pyke2.html');
            break;
        }
        else if (mensagem == 2)
        {
            location.replace('pykeGameOver1.html');
            break;
        }
        else 
        {
            alert('Escolha entre 1 ou 2');
            break;
        }
    }
}
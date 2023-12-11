function acordar() {
    let escolha = prompt("Você acordou. O que deseja fazer?\n1 - Continuar deitado\n2 - Ver as mensagens no celular\n3 - Levantar");
  
    switch (escolha) {
      case '1':
        continuarDeitado();
        break;
      case '2':
        verMensagens();
        break;
      case '3':
        levantar();
        break;
      default:
        alert("Escolha inválida!");
    }
  }
  
  function continuarDeitado() {
    let escolha = prompt("Deseja dormir mais um pouco ou planejar o dia na mente?\n1 - Dormir mais um pouco\n2 - Planejar o dia na mente");
  
    switch (escolha) {
      case '1':
        alert("Vish. Você queria dormir mais 10 minutos e acabou dormindo a tarde inteira. Perdeu seu dia");
        break;
      case '2':
        alert("Você começou a planejar o dia na mente.");
        break;
      default:
        alert("Escolha inválida!");
    }
  }
  
  function verMensagens() {
    let escolha = prompt("O que deseja fazer após ver as mensagens?\n1 - Responder mensagens importantes\n2 - Checar e-mails\n3 - Verificar notícias");
  
    switch (escolha) {
      case '1':
        alert("Você está respondendo mensagens importantes.");
        break;
      case '2':
        alert("Você está checando seus e-mails e viu que tem uma oportunidade de entrevista de emprego.");
        break;
      case '3':
        alert("Você está verificando as redes sociais.");
        break;
      default:
        alert("Escolha inválida!");
    }
  }
  
  function levantar() {
    let escolha = prompt("Ao levantar, o que deseja fazer?\n1 - Tomar banho\n2 - Escovar os dentes\n3 - Fazer café da manhã");
  
    switch (escolha) {
      case '1':
        alert("Você foi tomar banho.");
        break;
      case '2':
        alert("Você está escovando os dentes.");
        break;
      case '3':
        alert("Você está preparando o café da manhã.");
        break;
      default:
        alert("Escolha inválida!");
    }
  }
  
  acordar();
  
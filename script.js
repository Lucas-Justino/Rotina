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
    let escolha = prompt("O que deseja fazer após ver as mensagens?\n1 - Responder mensagens importantes\n2 - Checar e-mails\n3 - Verificar redes sociais");
  
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

  function cafeDaManha() {
    let escolha = prompt("O que deseja comer no café da manhã?\n1 - Pão com queijo\n2 - Frutas\n3 - Cereal com leite");
  
    switch (escolha) {
      case '1':
        alert("Você está comendo pão com queijo no café da manhã.");
        break;
      case '2':
        alert("Você está comendo frutas no café da manhã.");
        break;
      case '3':
        alert("Você está comendo cereal com leite no café da manhã.");
        break;
      default:
        alert("Escolha inválida!");
    }
  }
  
  function estudar() {
    let escolha = prompt("Oque você estudar?\n1 - JavaScript\n2 - TypeScript\n3 - React");
  
    switch (escolha) {
      case '1':
        alert("Você está estudando JavaScript.");
        break;
      case '2':
        alert("Você está estudando TypeScript.");
        break;
      case '3':
        alert("Você está estudando React.");
        break;
      default:
        alert("Escolha inválida!");
    }
  }
  
  function trabalhar() {
    let escolha = prompt("O que deseja fazer durante o trabalho?\n1 - Resolver projetos pendentes\n2 - Participar de uma reunião\n3 - Iniciar um novo projeto");
  
    switch (escolha) {
      case '1':
        alert("Você está resolvendo projetos pendentes no trabalho.");
        break;
      case '2':
        alert("Você está participando de uma reunião no trabalho.");
        break;
      case '3':
        alert("Você está iniciando um novo projeto no trabalho.");
        break;
      default:
        alert("Escolha inválida!");
    }
  }
  
  acordar();
  continuarDeitado();
  verMensagens();
  levantar();
  cafeDaManha();
  estudar();
  trabalhar();
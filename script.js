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
        acordar();
    }
  }
  
  function continuarDeitado() {
    let escolha = prompt("Deseja dormir mais um pouco ou planejar o dia na mente?\n1 - Dormir mais um pouco\n2 - Planejar o dia na mente");
  
    switch (escolha) {
      case '1':
        alert("Vish. Você queria dormir mais 10 minutos e acabou dormindo a tarde inteira. Perdeu seu dia");
        break;
      case '2':
        alert("Você começou a planejar o dia na mente. Depois de fazer seus planos, você levantou!");
        levantar();
        break;
      default:
        alert("Escolha inválida!");
        continuarDeitado();
    }
  }
  
  function verMensagens() {
    let escolha = prompt("O que deseja fazer após ver as mensagens?\n1 - Responder mensagens importantes\n2 - Checar e-mails\n3 - Verificar redes sociais");
  
    switch (escolha) {
      case '1':
        alert("Você respondeu as mensagens importantes.");
        levantar();
        break;
      case '2':
        alert("Você está checando seus e-mails e viu que tem uma oportunidade de entrevista de emprego.");
        levantar();
        break;
      case '3':
        alert("Você verificou as redes sociais e agora está atrasado!");
        arrumar()
        break;
      default:
        alert("Escolha inválida!");
        verMensagens();
    }
  }
  
  function levantar() {
    let escolha = prompt("Ao levantar, o que deseja fazer?\n1 - Tomar banho\n2 - Escovar os dentes\n3 - Fazer café da manhã");
  
    switch (escolha) {
      case '1':
        alert("Você tomou banho.");
        arrumar();
        break;
      case '2':
        alert("Você está escovando os dentes.");
        arrumar();
        break;
      case '3':
        alert("Você vai preparar o café da manhã.");
        cafeDaManha()
        break;
      default:
        alert("Escolha inválida!");
        levantar();
    }
  }

  function arrumar(){
    let escolha = prompt("Você acabou de se arrumar e está pronto para o seu dia. Deseja tomar café?\n1 - Sim, adoraria tomar café\n2 - Não, estou atrasado.")
    switch(escolha){
      case "1":
        cafeDaManha();
        break;
      case "2":
        alert("Você decide por tomar café no caminho!");
        decidir();
        break;
      default:
        alert("Escolha inválida!");
        arrumar();
    }
  }

  function decidir(){
    let escolha = prompt("Você quer trabalhar ou estudar?\n1 - Trabalhar\n2 - Estudar");
    switch(escolha){
      case "1":
        alert("Está cheio de coisas para fazer no trabalho e está indo mais cedo!");
        trabalhar()
        break;
      case "2":
        estudar();
        break;
      default:
        alert("Escolha inválida!");
        decidir();
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
        cafeDaManha();
    }
    decidir();
  }
  
  function estudar() {
    let escolha = prompt("O que você quer estudar?\n1 - JavaScript\n2 - TypeScript\n3 - React");
  
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
        estudar();
    }
    almocar();
  }

  function almocar() {
    let escolha = prompt("O que você quer para o almoço? \n1 - Comprar ingredientes e fazer algo do zero? \n2 - Comer o que sobrou de ontem? \n3 - Pedir um Ifood?");
  
    switch (escolha) {
      case '1':
        alert("Você comprou ingredientes para fazer algo do zero.");
        break;
      case '2':
        alert("Você comeu o que sobrou de ontem.");
        break;
      case '3':
        alert("Você pediu comida pelo Ifood.");
        break;
      default:
        alert("Escolha inválida!");
        almocar();
    }
    alert("Terminou seu almoço. Está pronto para ir para o trabalho!")
    trabalhar();
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
        trabalhar();
    }
    voltarParaCasa();
  }

  function voltarParaCasa() {
    let escolha = prompt("Acabou o seu trabalho! O que deseja fazer na volta para casa?\n1 - Passar no mercado? \n2 - Comprar um hamburguer para jantar?\n3 - Ir direto para casa?");
  
    switch (escolha) {
      case '1':
        alert("Você está indo passar no mercado no caminho para casa. Encontrou um antigo amigo e tiveram uma conversa animada!");
        break;
      case '2':
          alert("Ao comprar o hambúrguer, você achou um bilhete premiado na embalagem!");
          break;
      case '3':
        alert("Você está indo direto para casa, mas no caminho presenciou um lindo pôr do sol!");
        break;
      default:
        alert("Escolha inválida!");
        voltarParaCasa();
    }
    momentoDeLazer();
  }

  function momentoDeLazer() {
    let escolha = prompt("Agora é hora de aproveitar o seu momento, o que deseja fazer?\n1 - Praticar algum exercício físico \n2 - Ler um livro\n3 - Descansar com a família");
  
    switch (escolha) {
      case '1':
        alert("Você está liberando endorfina, força!!");
        break;
      case '2':
          alert("Silêncio! Você está se concentrando e expandindo seus conhecimentos.");
          break;
      case '3':
        alert("Você está botando o papo em dia e contando tudo que você fez hoje, não esqueça de contar o que aconteceu na volta pra casa!");
        break;
      default:
        alert("Escolha inválida!");
        momentoDeLazer();
    }
  }
  
  acordar();
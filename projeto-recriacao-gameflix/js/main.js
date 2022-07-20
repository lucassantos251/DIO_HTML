function trocar_titulo(opcao)
{
    var titulo = document.getElementById("titulo");
    var descricao = document.getElementById("descricao");
    var divGamePrincipal = document.getElementById("game-principal");
    var botaoPlay = document.getElementById("botao1");
    var botaoInfo = document.getElementById("botao2");
    var urls =
    [
        "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('./img/fundo-thewitcher3.jpeg')",
        "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('./img/fundo-devilmaycry5.jpeg')",
        "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('./img/fundo-hollowknight.jpeg')",
        "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('./img/fundo-sonicmania.jpeg')",
        "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('./img/fundo-cuphead.jpeg')",
        "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('./img/fundo-residentevil2.jpeg')",
        "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('./img/fundo-minecraft.jpeg')",
        "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('./img/fundo-ffxiv.jpeg')",
    ]
    switch(opcao)
    {
        case 0: 
        titulo.innerHTML = "THE WITCHER 3";
        descricao.innerHTML = "Torne-se um bruxo, um dos últimos mercenários caçadores de monstros. Aventure-se por reinos em guerra para encontrar a criança da profecia, uma arma senciente capaz de destruição imensa.";
        divGamePrincipal.style.backgroundImage = urls[opcao];
        botaoPlay.setAttribute("value", opcao);
        botaoInfo.setAttribute("value", opcao);
        break;

        case 1: 
        titulo.innerHTML = "DEVIL MAY CRY 5";
        descricao.innerHTML = "O melhor caçador de demônios está de volta com estilo, no jogo que os fãs de ação estavam esperando.<br>Um novo episódio na lendária série de ação, Devil May Cry 5 traz junto sua clássica mistura de ação turbinada com personagens originais de outro mundo e a mais nova tecnologia de jogos Capcom para trazer uma obra de arte de ação e aventura visualmente inovadora."        
        divGamePrincipal.style.backgroundImage = urls[opcao];
        botaoPlay.setAttribute("value", opcao);
        botaoInfo.setAttribute("value", opcao);
        break;

        case 2:
        titulo.innerHTML = "HOLLOW KNIGHT";
        descricao.innerHTML = "Desça no mundo de Hollow Knight! O premiado jogo ação/aventura de insetos e heróis. Explore cavernas serpenteantes, cidades antigas e ermos mortais. Lute contra criaturas malignas, alie-se a insetos bizarros. Descubra a história antiga e solucione mistérios enterrados no coração do reino.";
        divGamePrincipal.style.backgroundImage = urls[opcao];
        botaoPlay.setAttribute("value", opcao); 
        botaoInfo.setAttribute("value", opcao);       
        break;

        case 3:
        titulo.innerHTML = "SONIC MANIA";
        descricao.innerHTML = "Vive a celebração definitiva do passado e do futuro no Sonic Mania, uma nova aventura Sonic em 2D que corre a uns fantásticos 60 fps com um grafismo HD espantoso de estilo rétro. As várias personagens jogáveis dão-te a capacidade para correr de forma explosivamente rápida com Sonic, voar pelos ares com Tails ou acelerar através dos obstáculos com a força bruta de Knuckles. Podes recordar o Sonic do passado com novas e emocionantes versões das zonas clássicas enquanto combates contra novos bosses e o exército de robôs malvados do Dr. Eggman.";
        divGamePrincipal.style.backgroundImage = urls[opcao];
        botaoPlay.setAttribute("value", opcao);
        botaoInfo.setAttribute("value", opcao);
        break;

        case 4:
        titulo.innerHTML = "CUPHEAD"; 
        descricao.innerHTML = "Cuphead é um jogo de ação e tiros clássico, com enorme ênfase nas batalhas de chefes. Inspirado nas animações infantis da década de 1930, os visuais e efeitos sonoros foram minuciosamente recriados com as mesmíssimas técnicas dessa era, com destaque para desenhos feitos à mão, fundos em aquarela e gravações originais de jazz.";
        divGamePrincipal.style.backgroundImage = urls[opcao];
        botaoPlay.setAttribute("value", opcao);
        botaoInfo.setAttribute("value", opcao);
        break;

        case 5:
        titulo.innerHTML = "RESIDENT EVIL 2";
        descricao.innerHTML = "Um vírus maligno toma conta dos residentes de Raccoon City em setembro de 1998, afundando a cidade no caos enquanto zumbis comedores de carne humana vagam pelas ruas em busca de sobreviventes.<br>Um surto de adrenalina sem comparação, uma história instigante e horrores inimagináveis o aguardam.<br>Presencie o retorno de Resident Evil 2.";
        divGamePrincipal.style.backgroundImage = urls[opcao];
        botaoPlay.setAttribute("value", opcao);
        botaoInfo.setAttribute("value", opcao);
        break;

        case 6:
        titulo.innerHTML = "MINECRAFT";
        descricao.innerHTML = "Explore mundos gerados aleatoriamente e construa coisas incríveis, desde casas mais simples até grandiosos castelos. Jogue no modo criativo com recursos ilimitados ou minere as profundezas do mundo no modo sobrevivência, criando armas e armaduras para afastar criaturas perigosas. Escale montanhas íngremes, encontre cavernas complexas e extraia grandes veios de minério. Descubra biomas de cavernas verdejantes e com espeleotemas. Ilumine seu mundo com velas para mostrar que você sabe tudo sobre espeleologia e alpinismo!";
        divGamePrincipal.style.backgroundImage = urls[opcao];
        botaoPlay.setAttribute("value", opcao);
        botaoInfo.setAttribute("value", opcao);
        break;

        case 7:
        titulo.innerHTML = "FINAL FANTASY XIV";
        descricao.innerHTML = "Participa no próximo capítulo do aclamado FINAL FANTASY® XIV Online com o mais recente pack de expansão: ENDWALKER! <br> Descobre o clímax da história de Hydaelyn e Zodiark e desvenda uma calamidade nunca antes vista enquanto viajas até aos confins de Hydaelyn e até à lua.<br>Viaja até às estrelas e junta-te a 25 milhões de jogadores em todo o mundo!";
        divGamePrincipal.style.backgroundImage = urls[opcao];
        botaoPlay.setAttribute("value", opcao);
        botaoInfo.setAttribute("value", opcao);
        break;
    }
}

function redirect_play(elemento)
{
    var opcao = parseInt(elemento.value);
    switch(opcao)
    {
        case 0:
            window.location.href = "./video("+opcao+").html";
        break;
        
        case 1:
            window.location.href = "./video("+opcao+").html";
        break;

        case 2:
            window.location.href = "./video("+opcao+").html";
        break;

        case 3:
            window.location.href = "./video("+opcao+").html";
        break;

        case 4:
            window.location.href = "./video("+opcao+").html";
        break;

        case 5:
            window.location.href = "./video("+opcao+").html";
        break; 

        case 6:
            window.location.href = "./video("+opcao+").html";
        break;

        case 7:
            window.location.href = "./video("+opcao+").html";
        break;
    }
}

function redirect_info(elemento)
{
    var opcao = parseInt(elemento.value);
    var urls =
    [
        "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
        "https://store.steampowered.com/app/601150/Devil_May_Cry_5/",
        "https://store.steampowered.com/app/367520/Hollow_Knight/",
        "https://store.steampowered.com/app/584400/Sonic_Mania/",
        "https://store.steampowered.com/app/268910/Cuphead/",
        "https://store.steampowered.com/app/883710/Resident_Evil_2/",
        "https://www.xbox.com/pt-BR/games/store/minecraft-for-windows/9nblggh2jhxj",
        "https://store.steampowered.com/app/1592500/FINAL_FANTASY_XIV_Endwalker/"
    ]
    switch(opcao)
    {
        case 0:
            window.location.href = urls[opcao];
        break;

        case 1:
            window.location.href = urls[opcao];
        break;

        case 2:
            window.location.href = urls[opcao];
        break;

        case 3:
            window.location.href = urls[opcao];
        break;

        case 4:
            window.location.href = urls[opcao];
        break;

        case 5:
            window.location.href = urls[opcao];
        break;

        case 6:
            window.location.href = urls[opcao];
        break;

        case 7:
            window.location.href = urls[opcao];
        break;


    }
}

function back_redirect()
{
    window.location.href  = "./index.html";
}
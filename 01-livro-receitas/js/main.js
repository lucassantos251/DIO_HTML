/* VARIÁVEIS, ALERTAS E CONSOLE
var nome = "Lucas Cirilo"
var frase = "Sei lá quando não sei"
var idade = 25;
var n1 = 2;
var n2 = 5;
alert("Bem vindo " + nome + " de " + idade + " anos.");
console.log(nome);
console.log(idade);
console.log(n2 * n5);
console.log(frase.replace("não" , nome));
console.log(nome.toLowerCase());
*/

/* ARRAYS, LISTAS
var lista = ["maçã", "pera", "laranja"];

lista.pop();
lista.push("uva");
console.log(lista);
console.log(lista.length);
console.log(lista.toString());
console.log(lista.join(" - "));
*/

/*MATRIZ
var frutas = [{nome: "maçã" , cor: "vermelha"}, {nome:"uva", cor:"roxa"}]

console.log(frutas);
console.log(frutas[1].nome);
console.log(frutas[0].cor);
*/

/*
var fruta = {nome: "maçã" , cor: "vermelha"}

console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
*/

/* IF ELSE
//var idade = 18;
var idade = prompt("Qual sua idade?");

if(idade >= 18)
{
    alert("maior de idade");
}
else
{
    alert("menor de idade");
}
*/

/* FOR
var count;
for(count = 0; count < 5; count++)
{
    alert(count);
}
*/

/* WHILE
var count = 0;
while(count < 5)
{
    console.log(count);
    count++;
}
*/

/*DATAS
var d = new Date();

console.log(d);

console.log(d.getTime());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());
*/

/* FUNCTION
function soma(n1,n2)
{
    return n1 + n2;
}

function setReplace(frase,nome, novo_nome)
{
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade)
{
    var validar;

    if(idade >= 18)
    {
        validar = true;
    }
    else
    {
        validar = false;
    }
    return validar;
}

alert(soma(5,10));
alert(setReplace("vai japão", "japão", "brasil"));

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));
*/

function clicar()
{
    //alert("Obrigado por clicar.")
    document.getElementById("agradecimento").innerHTML ="<b>Obrigado por Clicar</b>";
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar()
{
    //window.open("https://www.google.com.br")
    window.location.href = "https://youtube.com.br";
}

function trocar(elemento)
{
    //document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse."
}

function voltar(elemento)
{
    //document.getElementById("mouseover").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui."
}

function load()
{
    alert("Pagina carregada.")
}

function mudar(elemento)
{
    console.log(elemento.value);
}

/*var valor1 = 6;
var valor2 = 145;
var valor3 = 15;

var total = 0.00;
total = parseFloat(valor2*valor3).toFixed(2);
alert("NUMBER = " + valor1 + "\nSALARY = U$ " + total);*/
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];

snake[0] =
{
    x: 8 * box,
    y: 8 * box
}

let comida = 
{
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

let direction = "right";

function criarBG()
{
    context.fillStyle = "rgb(199,199,199)";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha()
{
    for(i=0; i < snake.length; i++)
    {
        context.fillStyle  = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function desenharComida()
{
    context.fillStyle = "red";
    context.fillRect(comida.x, comida.y, box, box);
}

document.addEventListener('keydown', updateControls);

function updateControls(event)
{
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo()
{
    if(snake[0].x > 15 * box) snake[0].x = 0;    
    if(snake[0].x < 0) snake[0].x = 16 * box;

    if(snake[0].y > 15 * box) snake[0].y = 0;
    if(snake[0].y < 0) snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++)
    {
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y)
        {
            alert('Game over\nRecarregue a Página');
            clearInterval(jogo);
        }
    }

    criarBG();
    criarCobrinha();
    desenharComida();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    switch(direction)
    {
        case "right":
            snakeX += box;
            break;

        case "left":
            snakeX -= box;
            break;

        case "up":
            snakeY -= box;
            break;

        case "down":
            snakeY += box;
            break;
    }

    if(snakeX != comida.x || snakeY != comida.y)
    {
        snake.pop();
    }
    else
    {
        comida.x = Math.floor(Math.random() * 15 + 1) * box,
        comida.y = Math.floor(Math.random() * 15 + 1) * box
    }

    let newHead = 
    {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
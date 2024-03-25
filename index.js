
    // Ouvinte de eventos de pressionamento de tecla
document.addEventListener('keydown', function(event) {
    // Verifica se a tecla pressionada tem um atributo data-key associado
    const keyPressed = event.key;
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const keyElement = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    
    // Se houver um elemento de áudio correspondente e uma tecla associada, reproduza o som
    if (audio && keyElement) {
        audio.currentTime = 0; // Reinicia o áudio para ser reproduzido várias vezes seguidas
        audio.play();
        keyElement.classList.add('pressed');
    }
});

// Adiciona um ouvinte de eventos de liberação de tecla ao documento
document.addEventListener('keyup', function(event) {
    const keyElement = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    // Remove a classe de animação ou destaque visual da tecla pressionada
    if (keyElement) {
        keyElement.classList.remove('pressed');
    }
});

//VAR ÁREA
        var area1 = window.document.getElementById('area1');
        var area2 = window.document.getElementById('area2');
        var area3 = window.document.getElementById('area3');
        var area4 = window.document.getElementById('area4');
        var area5 = window.document.getElementById('area5');
        var area6 = window.document.getElementById('area6');
        var area7 = window.document.getElementById('area7');
        var area8 = window.document.getElementById('area8');
        var area9 = window.document.getElementById('area9');


      // Função para lidar com o evento de pressionamento de tecla
function handleKeyPress(event) { //A função handleKeyPress é responsável por alterar a cor de fundo das áreas correspondentes quando uma tecla é pressionada. 
    // Verifica se a tecla pressionada é a tecla desejada e altera a cor de fundo da div correspondente
    if (event.key === 'q') {
        area1.style.background = 'blue';
    } else if (event.key === 'w') {
        area2.style.background = 'blue';
    } else if (event.key === 'e') {
        area3.style.background = 'blue';
    }
    //
    if (event.key === 'a') {
        area4.style.background = 'blue';
    } else if (event.key === 's') {
        area5.style.background = 'blue';
    } else if (event.key === 'd') {
        area6.style.background = 'blue';
    }
    //
    if (event.key === 'z') {
        area7.style.background = 'blue';
    } else if (event.key === 'x') {
        area8.style.background = 'blue';
    } else if (event.key === 'c') {
        area9.style.background = 'blue';
    }
}
        

//MUDANÇA DE COR APENAS QUANDO PASSA COM O MOUSE POR CIMA

//ÁREA 1 -
        area1.addEventListener('mouseenter', function() {
            area1.style.background = 'red';
        });

        area1.addEventListener('mouseout', function() {
            area1.style.background = 'black';
        });
// ÁREA 2 - 
        area2.addEventListener('mouseenter', function() {
            area2.style.background = 'violet';
        });

        area2.addEventListener('mouseout', function() {
            area2.style.background = 'black';
        });
//ÁREA 3 - 
        area3.addEventListener('mouseenter', function() {
            area3.style.background = 'pink'; 
        });

        area3.addEventListener('mouseout', function() {
            area3.style.background = 'black'; 
        });

//ÁREA 4 - 
        area4.addEventListener('mouseenter', function() {
            area4.style.background = 'orange';
        });

        area4.addEventListener('mouseout', function() {
            area4.style.background = 'black';
        });
// ÁREA 5 - 
        area5.addEventListener('mouseenter', function() {
            area5.style.background = 'grey';
        });

        area5.addEventListener('mouseout', function() {
            area5.style.background = 'black';
        });
//ÁREA 6 - 
        area6.addEventListener('mouseenter', function() {
            area6.style.background = 'blue'; 
        });

        area6.addEventListener('mouseout', function() {
            area6.style.background = 'black'; 
        });

//ÁREA 7 - 
        area7.addEventListener('mouseenter', function() {
            area7.style.background = 'yellow';
        });

        area7.addEventListener('mouseout', function() {
            area7.style.background = 'black';
        });
// ÁREA 8 - 
        area8.addEventListener('mouseenter', function() {
            area8.style.background = 'green';
        });

        area8.addEventListener('mouseout', function() {
            area8.style.background = 'black';
        });
//ÁREA 9 - 
        area9.addEventListener('mouseenter', function() {
            area9.style.background = 'red'; 
        });

        area9.addEventListener('mouseout', function() {
            area9.style.background = 'black'; 
        });


        // Adiciona um ouvinte de eventos de pressionamento de tecla ao documento
document.addEventListener('keypress', handleKeyPress);
    // Função para lidar com o evento de liberação de tecla
function handleKeyRelease(event) {
    // Restaura as áreas ao estado original
    area1.style.background = 'black';
    area2.style.background = 'black';
    area3.style.background = 'black';
    area4.style.background = 'black';
    area5.style.background = 'black';
    area6.style.background = 'black';
    area7.style.background = 'black';
    area8.style.background = 'black';
    area9.style.background = 'black';
}

// Adiciona ouvintes de eventos de pressionamento e liberação de tecla ao documento
document.addEventListener('keypress', handleKeyPress);
document.addEventListener('keyup', handleKeyRelease);

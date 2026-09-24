import { Game } from './game.js';
const board = document.querySelector('#game-board');
let game;
let interval;

const createBoard = () => {
    for (let x = 0; x < 20; x++){
        for (let y = 0; y < 20; y++){
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            board.appendChild(cell);
        }
    }
}

const Render = () => {
    const cells = board.children; // Get all cells in the board

    // Clear

    for (const cell of cells) {

        cell.classList.remove(
            "snake",
            "head",
            "food"
        );

    }

    // Snake

    game.snake
        .getBody()
        .forEach(
            (segment, index) => {

                const cell = board.querySelector(
                    `[data-x="${segment.x}"][data-y="${segment.y}"]`
                );

                if (!cell) return;

                cell.classList.add(
                    "snake"
                );

                if (index === 0) {

                    cell.classList.add(
                        "head"
                    );

                }

            }
        );
}


const startGame = () => {
    clearInterval(interval);

    game = new Game();
    createBoard();
    Render();

    // setInterval: is a built-in js funtion that calls a funtion at 
    // specified intervals (in ms). It returns an interval ID that can be used to 
    // clear the interval Later using clearInterval.
    interval = setInterval(() => {
            game.update();
            Render();

            if (!game.running) {

                clearInterval(interval);

            }

        },

        game.speed
    );
}

startGame();
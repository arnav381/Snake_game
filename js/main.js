import { Game } from './game.js';
const board = document.querySelector('#game-board');
let game;

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
    game = new Game();
    createBoard();
    Render();
}

startGame();
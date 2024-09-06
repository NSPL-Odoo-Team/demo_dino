/** @odoo-module **/
import { Component, mount, useState } from "@odoo/owl";

// Define the DinoGame component
class DinoGame extends Component {
    setup() {
        this.state = useState({
            isJumping: false,
            score: 0,
            isGameOver: false,
        });
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.startGame();  // Start the game when the component is initialized
    }

    startGame() {
        document.addEventListener("keydown", this.handleKeyPress);
        this.gameLoop = setInterval(() => {
            if (!this.state.isGameOver) {
                this.state.score += 1;
                this.render(); // Ensure score updates
            }
        }, 100);
    }

    handleKeyPress(event) {
        if (event.code === "Space" && !this.state.isJumping) {
            this.jump();
        }
    }

    jump() {
        this.state.isJumping = true;
        setTimeout(() => {
            this.state.isJumping = false;
        }, 500);
    }

    stopGame() {
        this.state.isGameOver = true;
        clearInterval(this.gameLoop);
    }

    // Simplified rendering of the game
    static template = `
        <div class="dino-game">
            <div class="score">Score: <t t-esc="state.score" /></div>
            <t t-if="state.isGameOver">
                <div class="game-over">Game Over!</div>
            </t>
            <t t-if="!state.isJumping">
                <div class="dino">🦖</div>
            </t>
            <t t-if="state.isJumping">
                <div class="dino jump">🦖</div>
            </t>
            <div class="obstacle">🌵</div>
        </div>
    `;
}

// Mount the DinoGame component when the DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
    const dinoGame = new DinoGame();
    await mount(dinoGame, document.getElementById('dino_game_root'));
});

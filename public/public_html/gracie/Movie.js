export default class Movie {
    constructor(audio, images, text) {
        this.currentSlide = 0;
        this.img = images;
        this.audio = audio.slice(-7);
        this.text = text;
        this.init();
    }

    init() {
        this.img.forEach((item, index) => {
            document.querySelector('#hero-images').innerHTML += `
                <div id="img-${item}" style="background-image: url('img/${item}.jpg')">
                    <audio id="audio-${item}" src="audio/${this.audio[index]}.mp3"></audio>
                </div>
            `;
        });
    }

    action() {
        return new Promise((res, rej) => {
            const audioElement = document.querySelector(`#audio-${this.img[this.currentSlide]}`);

            if (this.currentSlide === null) {
                res(0);
            }

            const ended = () => {
                document.querySelector(`#img-${this.img[this.currentSlide]}`).remove();
                this.currentSlide === this.img.length - 1 ? this.currentSlide = null : this.currentSlide += 1;
                res(1);
            };

            audioElement.addEventListener('ended', ended);

            audioElement.play()
                .then(() => {
                    this.insertText(this.currentSlide)
                        .then(() => 1)
                        .catch(error => error);
                })
                .catch(error => {
                    console.error('Error starting audio playback:', error);
                    rej(error);
                });
        });
    }

    insertText(id) {
        const text = this.text[id].text.split(" ");
        const timing = this.text[id].timing;
        const fonts = this.text[id].fonts;
        const position = this.text[id].position;

        const displayText = (text, timing, font, position) => {
            return new Promise((resolve) => {
                const textElement = document.createElement('p');
                textElement.textContent = text;
                textElement.style.position = 'absolute';
                textElement.style.fontFamily = font.family;
                textElement.style.fontSize = font.size;
                textElement.style.top = position.top + 'px';
                textElement.style.left = position.left + 'px';
                document.querySelector(`#img-${this.img[id]}`).appendChild(textElement);
                setTimeout(() => {
                    resolve();
                }, timing);
            });
        };

        const displayTextsInSequence = async () => {
            for (let i = 0; i < text.length; i++) {
                await displayText(text[i], timing[i], fonts[i], position[i]);
            }
        };

        return displayTextsInSequence();
    }
}
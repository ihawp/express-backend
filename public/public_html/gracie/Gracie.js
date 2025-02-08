import Movie from "./Movie.js";

export default class Gracie {
    constructor() {
        this.init();
        this.audio = undefined;
        this.audios = [
            'baconpan',
            'iloveyougoop',
            'iloveyounoopgoop',
            'sexylady',
            'youreacutie',
            'youresexybaby',
            'iloveyou',
            'lightofmylife',
            'sexygirl',
            'greatestnurse',
            'cutie',
            'ilymerrychristmas',
            'website',
        ];
        this.img = [
            'brightsun',
            'clouds',
            'britsun',
            'linesun',
            'oceansun',
            'stunningsun',
            'lighthouse'
        ];
        this.text = {
            0: {
                text: 'Dear Gracie, I love you',
                timing: {
                    0: 400,
                    1: 1200,
                    2: 600,
                    3: 400,
                    4: 300,
                },
                fonts: {
                    0: {
                        family: 'BebasNue',
                        size: '5em',
                    },
                    1: {
                        family: 'Poppins',
                        size: '4em',
                    },
                    2: {
                        family: 'Caveat',
                        size: '2em',
                    },
                    3: {
                        family: 'Marck',
                        size: '3em',
                    },
                    4: {
                        family: 'Playfair',
                        size: '4em',
                    },

                },
                position: {
                    0: {
                        top: 25,
                        left: 25,
                    },
                    1: {
                        top: 200,
                        left: 200,
                    },
                    2: {
                        top: 400,
                        left: 75,
                    },
                    3: {
                        top: 375,
                        left: 250,
                    },
                    4: {
                        top: 410,
                        left: 400,
                    },
                }
            },
            1: {
                text: 'You are the light of my life',
                timing: {
                    0: 300,
                    1: 300,
                    2: 200,
                    3: 300,
                    4: 200,
                    5: 200,
                    6: 200,
                },
                fonts: {
                    0: {
                        family: 'Poppins',
                        size: '5em',
                    },
                    1: {
                        family: 'Playfair',
                        size: '4em',
                    },
                    2: {
                        family: 'BebasNue',
                        size: '2em',
                    },
                    3: {
                        family: 'Marck',
                        size: '3em',
                    },
                    4: {
                        family: 'Playfair',
                        size: '4em',
                    },
                    5: {
                        family: 'Poppins',
                        size: '5em',
                    },
                    6: {
                        family: 'Marck',
                        size: '2em',
                    },
                },
                position: {
                    0: {
                        top: 45,
                        left: 325,
                    },
                    1: {
                        top: 55,
                        left: 600,
                    },
                    2: {
                        top: 180,
                        left: 200,
                    },
                    3: {
                        top: 185,
                        left: 500,
                    },
                    4: {
                        top: 170,
                        left: 800,
                    },
                    5: {
                        top: 320,
                        left: 300,
                    },
                    6: {
                        top: 350,
                        left: 700,
                    },
                }
            },
            2: {
                text: 'You are a sexy girl',
                timing: {
                    0: 300,
                    1: 300,
                    2: 100,
                    3: 400,
                    4: 300,
                },
                fonts: {
                    0: {
                        family: 'BebasNue',
                        size: '5em',
                    },
                    1: {
                        family: 'Poppins',
                        size: '4em',
                    },
                    2: {
                        family: 'Caveat',
                        size: '2em',
                    },
                    3: {
                        family: 'Marck',
                        size: '3em',
                    },
                    4: {
                        family: 'Playfair',
                        size: '4em',
                    },

                },
                position: {
                    0: {
                        top: 25,
                        left: 25,
                    },
                    1: {
                        top: 200,
                        left: 200,
                    },
                    2: {
                        top: 185,
                        left: 350,
                    },
                    3: {
                        top: 375,
                        left: 250,
                    },
                    4: {
                        top: 410,
                        left: 400,
                    },
                },
            },
            3: {
                text: 'And YOU are going to be the greatest nurse the entire world has ever seen',
                timing: {
                    0: 200,
                    1: 200,
                    2: 200,
                    3: 200,
                    4: 200,
                    5: 200,
                    6: 200,
                    7: 400,
                    8: 100,
                    9: 200,
                    10: 200,
                    11: 200,
                    12: 200,
                    13: 200,
                    14: 200,
                },
                fonts: {
                    0: {
                        family: 'BebasNue',
                        size: '5em',
                    },
                    1: {
                        family: 'Poppins',
                        size: '4em',
                    },
                    2: {
                        family: 'Caveat',
                        size: '2em',
                    },
                    3: {
                        family: 'Marck',
                        size: '3em',
                    },
                    4: {
                        family: 'Playfair',
                        size: '4em',
                    },
                    5: {
                        family: 'Marck',
                        size: '4em',
                    },
                    6: {
                        family: 'Caveat',
                        size: '4em',
                    },
                    7: {
                        family: 'Playfair',
                        size: '4em',
                    },
                    8: {
                        family: 'Marck',
                        size: '4em',
                    },
                    9: {
                        family: 'BebasNue',
                        size: '4em',
                    },
                    10: {
                        family: 'Caveat',
                        size: '4em',
                    },
                    11: {
                        family: 'BebasNue',
                        size: '4em',
                    },
                    12: {
                        family: 'Playfair',
                        size: '4em',
                    },
                    13: {
                        family: 'Marck',
                        size: '4em',
                    },
                    14: {
                        family: 'Poppins',
                        size: '4em',
                    },

                },
                position: {
                    0: {
                        top: 140,
                        left: 25,
                    },
                    1: {
                        top: 155,
                        left: 200,
                    },
                    2: {
                        top: 150,
                        left: 400,
                    },
                    3: {
                        top: 145,
                        left: 600,
                    },
                    4: {
                        top: 160,
                        left: 800,
                    },
                    5: {
                        top: 145,
                        left: 900,
                    },
                    6: {
                        top: 155,
                        left: 1000,
                    },
                    7: {
                        top: 320,
                        left: 35,
                    },
                    8: {
                        top: 330,
                        left: 320,
                    },
                    9: {
                        top: 325,
                        left: 520,
                    },
                    10: {
                        top: 340,
                        left: 645,
                    },
                    11: {
                        top: 330,
                        left: 850,
                    },
                    12: {
                        top: 325,
                        left: 1050,
                    },
                    13: {
                        top: 470,
                        left: 15,
                    },
                    14: {
                        top: 490,
                        left: 210,
                    },
                    15: {
                        top: 485,
                        left: 415,
                    },
                    16: {
                        top: 475,
                        left: 640,
                    },
                },
            },
            4: {
                text: "You're a cutie",
                timing: {
                    0: 500,
                    1: 100,
                    2: 500,
                },
                fonts: {
                    0: {
                        family: 'BebasNue',
                        size: '5em',
                    },
                    1: {
                        family: 'Poppins',
                        size: '4em',
                    },
                    2: {
                        family: 'Caveat',
                        size: '2em',
                    },
                },
                position: {
                    0: {
                        top: 25,
                        left: 25,
                    },
                    1: {
                        top: 200,
                        left: 200,
                    },
                    2: {
                        top: 400,
                        left: 75,
                    },
                }
            },
            5: {
                text: "I love you, merry christmas honey",
                timing: {
                    0: 100,
                    1: 400,
                    2: 1200,
                    3: 500,
                    4: 500,
                    5: 500,
                },
                fonts: {
                    0: {
                        family: 'BebasNue',
                        size: '5em',
                    },
                    1: {
                        family: 'Poppins',
                        size: '4em',
                    },
                    2: {
                        family: 'Caveat',
                        size: '2em',
                    },
                    3: {
                        family: 'Marck',
                        size: '3em',
                    },
                    4: {
                        family: 'Playfair',
                        size: '4em',
                    },
                    5: {
                        family: 'Poppins',
                        size: '4em',
                    },
                },
                position: {
                    0: {
                        top: 45,
                        left: 325,
                    },
                    1: {
                        top: 55,
                        left: 600,
                    },
                    2: {
                        top: 180,
                        left: 200,
                    },
                    3: {
                        top: 185,
                        left: 500,
                    },
                    4: {
                        top: 170,
                        left: 800,
                    },
                    5: {
                        top: 320,
                        left: 300,
                    },
                }
            },
            6: {
                text: 'Hey look at my website',
                timing: {
                    0: 400,
                    1: 600,
                    2: 100,
                    3: 400,
                    4: 300,
                },
                fonts: {
                    0: {
                        family: 'BebasNue',
                        size: '5em',
                    },
                    1: {
                        family: 'Poppins',
                        size: '4em',
                    },
                    2: {
                        family: 'Caveat',
                        size: '2em',
                    },
                    3: {
                        family: 'Marck',
                        size: '3em',
                    },
                    4: {
                        family: 'Playfair',
                        size: '4em',
                    },

                },
                position: {
                    0: {
                        top: 25,
                        left: 25,
                    },
                    1: {
                        top: 200,
                        left: 200,
                    },
                    2: {
                        top: 55,
                        left: 250,
                    },
                    3: {
                        top: 125,
                        left: 400,
                    },
                    4: {
                        top: 250,
                        left: 380,
                    },
                }
            },
        };
        this.movie = new Movie(this.audios, this.img, this.text);
    }

    init() {
        document.getElementById('restartConfetti').onclick = () => this.confetti();
        document.getElementById('stopConfetti').onclick = () => {
            this.endConfetti();
            this.makeMovie();
        }
    }

    confetti() {
        this.dbb('purple');
        this.remove('#restartConfetti');
        return setTimeout(() => {
            this.reveal('#stopConfetti');
            document.querySelector('#stopConfetti').style.animation = 'fade 1s';
        }, 2500);
    }
    endConfetti() {
        this.remove('#stopConfetti');
        this.remove('#hero-buttons');
        return this.reveal('#hero-images');
    }

    dbb(colour) {
        return document.body.style.backgroundColor = colour;
    }
    reveal(query) {
        return document.querySelector(query).style.display = 'inline';
    }
    remove(query) {
        return document.querySelector(query).remove();
    }
    hide(query) {
        return document.querySelector(query).style.display = 'none';
    }

    makeMovie() {
        this.movie.action()
            .then(response => response === 1 ? this.makeMovie() : this.soundboard())
            .catch(error => console.error('Error:', error));
    }

    addSoundboard() {
        const soundboard= `<ul id="soundboard"></ul>`;
        document.querySelector('#hero').insertAdjacentHTML("beforeend", soundboard);
    }
    mapAudio() {
        return this.audios.map((item) => {
            document.querySelector('#soundboard').insertAdjacentHTML("beforeend", `
                
                <li class="li-sb-audio" id="li-sb-audio-${item}">
                
                    <img src="img/27223.png" draggable="false" />
                    
                    <h2>${item}</h2>
                    
                    <audio id="sb-audio-${item}" src="audio/${item}.mp3"></audio>
                
                </li>
                
            `);

            const sbAudio = document.querySelector("#sb-audio-" + item);
            const control = () => {
                this.audio?.pause();
                sbAudio.currentTime = 0;
                sbAudio.play();
                this.audio = sbAudio;
            }
            document.querySelector("#li-sb-audio-" + item).addEventListener("click", control);
        })
    }
    soundboard() {
        this.addSoundboard();
        this.mapAudio();
        return this.dbb('blue');
    }

}
class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {

        //main menu
        this.load.image("background", 'assets/background.png');
        this.load.image("brdm", 'assets/b_random.png');
        this.load.spritesheet('bfs', 'assets/b_fullscreen.png', {
            frameWidth: 100,
            frameHeight: 100,
        });

        this.load.image("cardflip", 'assets/base_card.png');

        this.load.image("cat_1", 'assets/mochi.png');
        this.load.image("cat_2", 'assets/oreo.png');
        this.load.image("cat_3", 'assets/momo.png');
        this.load.image("cat_4", 'assets/lucky.png');
        //this.load.image("cat_5", 'assets/shadow.png');
        this.load.image("cat_5", 'assets/felix.png');

        this.load.image("cat_6", 'assets/neko.png');
        this.load.image("cat_7", 'assets/bella.png');
        this.load.image("cat_8", 'assets/toby.png');
        //this.load.image("cat_10", 'assets/charlie.png');
        this.load.image("cat_9", 'assets/rocky.png');
        this.load.image("cat_10", 'assets/theo.png');

        this.load.image("cat_11", 'assets/luna.png');
        this.load.image("cat_12", 'assets/kitty.png');
        this.load.image("cat_13", 'assets/snowy.png');
        this.load.image("cat_14", 'assets/mimi.png');
        //this.load.image("cat_17", 'assets/salem.png');
        this.load.image("cat_15", 'assets/snowy.png');

        this.load.image("cat_16", 'assets/milo.png');
        this.load.image("cat_17", 'assets/coco.png');
        this.load.image("cat_18", 'assets/ginger.png');
        this.load.image("cat_19", 'assets/mini.png');
        //this.load.image("cat_23", 'assets/hazel.png');
        this.load.image("cat_20", 'assets/nala.png');

        this.load.image("cat_21", 'assets/simba.png');
        this.load.image("cat_22", 'assets/leo.png');
        this.load.image("cat_23", 'assets/max.png');
        this.load.image("cat_24", 'assets/pepper.png');
        //this.load.image("cat_29", 'assets/cleo.png');
        //this.load.image("cat_30", 'assets/tiger.png');

        //audio
        // this.load.audio('masukkanmainan', 'assets/audio/masukkanmainan.wav');
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("menuGame");
    }
}
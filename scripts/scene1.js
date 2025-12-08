class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        if (this.sys.game.device.os.desktop) {
            this.isMobile = false;
        } else {
            this.isMobile = true;
        }

        console.log("Mobile?", this.isMobile);

        if (this.isMobile) {
            //svg
            this.load.svg("cat_1", 'assets/mochi.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_2", 'assets/oreo.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_3", 'assets/momo.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_4", 'assets/lucky.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_5", 'assets/felix.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_6", 'assets/neko.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_7", 'assets/bella.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_8", 'assets/toby.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_9", 'assets/rocky.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_10", 'assets/theo.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_11", 'assets/luna.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_12", 'assets/kitty.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_13", 'assets/snowy.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_14", 'assets/mimi.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_15", 'assets/misty.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_16", 'assets/milo.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_17", 'assets/coco.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_18", 'assets/ginger.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_19", 'assets/mini.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_20", 'assets/nala.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_21", 'assets/simba.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_22", 'assets/leo.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_23", 'assets/max.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cat_24", 'assets/pepper.svg', { width: 146.2, height: 224.6 });
            this.load.svg("cardflip", 'assets/base_card.svg', { width: 146.2, height: 224.6 });

        } else {
            //svg
            this.load.svg("cat_1", 'assets/mochi.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_2", 'assets/oreo.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_3", 'assets/momo.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_4", 'assets/lucky.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_5", 'assets/felix.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_6", 'assets/neko.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_7", 'assets/bella.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_8", 'assets/toby.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_9", 'assets/rocky.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_10", 'assets/theo.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_11", 'assets/luna.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_12", 'assets/kitty.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_13", 'assets/snowy.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_14", 'assets/mimi.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_15", 'assets/misty.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_16", 'assets/milo.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_17", 'assets/coco.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_18", 'assets/ginger.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_19", 'assets/mini.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_20", 'assets/nala.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_21", 'assets/simba.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_22", 'assets/leo.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_23", 'assets/max.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cat_24", 'assets/pepper.svg', { width: 346.2, height: 424.6 });
            this.load.svg("cardflip", 'assets/base_card.svg', { width: 346.2, height: 424.6 });
        }

        //main menu
        this.load.image("background", 'assets/background.png');
        this.load.image("brdm", 'assets/b_random.png');
        this.load.spritesheet('bfs', 'assets/b_fullscreen.png', {
            frameWidth: 100,
            frameHeight: 100,
        });

        //svg
        this.load.svg("cat_1", 'assets/mochi.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_2", 'assets/oreo.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_3", 'assets/momo.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_4", 'assets/lucky.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_5", 'assets/felix.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_6", 'assets/neko.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_7", 'assets/bella.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_8", 'assets/toby.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_9", 'assets/rocky.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_10", 'assets/theo.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_11", 'assets/luna.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_12", 'assets/kitty.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_13", 'assets/snowy.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_14", 'assets/mimi.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_15", 'assets/misty.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_16", 'assets/milo.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_17", 'assets/coco.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_18", 'assets/ginger.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_19", 'assets/mini.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_20", 'assets/nala.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_21", 'assets/simba.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_22", 'assets/leo.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_23", 'assets/max.svg', { width: 346.2, height: 424.6 });
        this.load.svg("cat_24", 'assets/pepper.svg', { width: 346.2, height: 424.6 });

        /*png
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
        this.load.image("cat_15", 'assets/misty.png');

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
        */
        //audio
        // this.load.audio('masukkanmainan', 'assets/audio/masukkanmainan.wav');
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("menuGame");
    }
}
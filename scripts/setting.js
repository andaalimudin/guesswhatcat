window.onload = function () {

    var config = {

        type: Phaser.AUTO,
        scale: {
            mode: Phaser.Scale.RESIZE,
            autoCenter: Phaser.Scale.CENTER_BOTH,
        },

        scene: [Scene1, Scene2]
    }

    /*window.gameProgress = {
        puzzleDone: false,
        memoryDone: false
    };*/
    var game = new Phaser.Game(config);
}

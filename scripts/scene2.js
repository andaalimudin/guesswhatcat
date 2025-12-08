class Scene2 extends Phaser.Scene {
    constructor() {
        super("menuGame");
    }

    create() {

        this.bg = this.add.image(0, 0, 'background').setOrigin(0);
        this.brandom = this.add.sprite(0, 0, 'brdm').setInteractive();
        this.bfullscreen = this.add.sprite(0, 0, 'bfs').setInteractive();
        this.bigCat = this.add.image(0, 0, 'cat_1').setInteractive();
        this.catScaleDiv = 0;

        if (this.sys.game.device.os.desktop) {
            this.isMobile = false;
        } else {
            this.isMobile = true;
        }

        // === LIST KUCING ===
        this.cats = [];
        for (let i = 1; i <= 24; i++) {
            let cat = this.add.image(0, 0, 'cat_' + i).setInteractive();
            cat.frontTexture = 'cat_' + i;   // sisi depan
            cat.backTexture = 'cardflip';    // sisi belakang
            cat.isFlipped = false;           // awalnya belum terbalik

            cat.originalTexture = 'cat_' + i;      // simpan nama texture asli
            this.cats.push(cat);

            // === event flip per cat ===
            cat.on('pointerdown', () => this.flipCard(cat));
        }

        // === ACak posisi saat awal ===
        this.applyRandomOrder();
        this.setRandomBigCat();

        // tombol random
        this.brandom.on("pointerdown", () => {
            this.resetCards();
            this.applyRandomOrder();
            this.setRandomBigCat();
            this.resize({ width: this.scale.width, height: this.scale.height });
        });

        // tombol fullscreen
        this.bfullscreen.on('pointerdown', () => {
            if (this.scale.isFullscreen) {
                this.scale.stopFullscreen();
                this.bfullscreen.setFrame(0);
            } else {
                this.scale.startFullscreen();
                this.bfullscreen.setFrame(1);
            }
        });

        // aktifkan resize
        this.resize({ width: this.scale.width, height: this.scale.height });
        this.scale.on('resize', this.resize, this);
    }

    // =========================================
    // ========== RANDOM ORDER FUNCTION =========
    // =========================================
    resetCards() {
        this.cats.forEach(cat => {
            cat.setTexture(cat.frontTexture); // kembalikan ke texture asli
            cat.isFlipped = false;            // tandai sebagai tidak flipped
        });
    }

    applyRandomOrder() {
        this.randomOrder = [...this.cats];
        this.shuffleArray(this.randomOrder);
    }

    shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // =========================================
    // ========== AMBIL KUCING ACAK ============
    // =========================================
    getRandomCatTexture() {
        // filter hanya tile yang sedang menampilkan sisi depan
        let visibleCats = this.cats.filter(cat => !cat.isFlipped);

        if (visibleCats.length === 0) {
            // fallback jika semua sedang flipped
            visibleCats = this.cats;
        }

        const randomCat = Phaser.Utils.Array.GetRandom(visibleCats);
        return randomCat.frontTexture;   // pastikan ambil tekstur depan
    }

    setRandomBigCat() {
        if (!this.bigCat) return;

        const randomTexture = this.getRandomCatTexture();
        this.bigCat.setTexture(randomTexture);
    }



    // =========================================
    // ========== CARD FLIP ANIMATION ===========
    // =========================================
    flipCard(cat) {
        // simpan scale asli jika belum ada
        if (!cat.baseScale) cat.baseScale = cat.scale;

        const isFront = !cat.isFlipped;

        // 1) animasi mengecil ke tengah
        this.tweens.add({
            targets: cat,
            scaleX: 0,
            duration: 120,
            ease: "Linear",
            onComplete: () => {

                // 2) Ganti tekstur setelah scale 0
                if (isFront) {
                    cat.setTexture(cat.backTexture || "cardflip");
                } else {
                    cat.setTexture(cat.frontTexture);
                }

                // 3) Animasi membesar kembali
                this.tweens.add({
                    targets: cat,
                    scaleX: cat.baseScale,
                    duration: 120,
                    ease: "Linear",
                });

                // toggle status
                cat.isFlipped = !cat.isFlipped;
            }
        });
    }

    // =========================================
    // ========== RESIZE LAYOUT GRID ===========
    // =========================================
    resize(gameSize) {
        const width = gameSize.width;
        const height = gameSize.height;

        this.bg.setDisplaySize(width, height);

        // === Random Button ===
        const baserandom = Math.min(width, height);
        this.brandom.setScale(baserandom * 0.0009);
        const marginrandom = baserandom * 0.05;
        this.brandom.setPosition(width - marginrandom * 2, height - marginrandom).setOrigin(2, 1);

        // === Fullscreen Button ===
        const basefullscreen = Math.min(width, height);
        this.bfullscreen.setScale(basefullscreen * 0.0009);
        const margin = basefullscreen * 0.05;
        this.bfullscreen.setPosition(width - margin, height - margin).setOrigin(1, 1);

        // === MODE PORTRAIT / LANDSCAPE ===
        const isPortrait = height > width;

        let cols, rows, gridWidth, gridHeight, paddingX, paddingY;

        if (isPortrait) {
            cols = 4;
            rows = 6;
            gridWidth = width * 0.8;
            gridHeight = height * 0.8;
            paddingX = width * 0.1;
            paddingY = height * 0.02;
        } else {
            cols = 6;
            rows = 4;
            gridWidth = width * 0.6;
            gridHeight = height * 0.95;
            paddingX = width * 0.02;
            paddingY = height * 0.03;
        }

        if (this.isMobile) {
            this.add.text(1600, 150, "mode mobile");
            console.log("Mobile");
            this.catScaleDiv = 160;
        } else {
            this.add.text(1600, 150, "mode pc");
            console.log("PC");
            this.catScaleDiv = 380;
        }

        const cellW = gridWidth / cols;
        const cellH = gridHeight / rows;
        const baseCat = Math.min(cellW, cellH);
        const catScale = baseCat / this.catScaleDiv;

        // === POSISI KUCING BERDASARKAN RANDOM ORDER ===
        this.randomOrder.forEach((cat, index) => {
            const col = index % cols;
            const row = Math.floor(index / cols);

            const x = paddingX + col * cellW + cellW / 2;
            const y = paddingY + row * cellH + cellH / 2;

            cat.setPosition(x, y);
            cat.setScale(catScale);
            cat.setOrigin(0.5);
        });

        // ==== OBJEK BIGCAT ====

        this.bigCat.setScale(catScale * 1.4);

        if (isPortrait) {
            this.bigCat.setPosition(width * 0.5, paddingY + gridHeight + height * 0.08);
        } else {
            this.bigCat.setPosition(width * 0.8, height * 0.5);
        }

        this.bigCat.setOrigin(0.5);
    }
}

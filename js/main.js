// 2.1 スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2.2 アコーディオンメニュー
document.addEventListener('DOMContentLoaded', function () {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            // アコーディオンの開閉をトグルする
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});

//映画ランキングのボタン
document.addEventListener('DOMContentLoaded', function () {
    const toggleTop5Button = document.getElementById('toggleTop5');
    const toggleAllButton = document.getElementById('toggleAll');
    const movieListItems = document.querySelectorAll('#movieList li');

    function showOnlyTop5() {
        movieListItems.forEach(item => {
            if (item.classList.contains('top5')) {
                item.style.display = 'list-item';
            } else {
                item.style.display = 'none';
            }
        });
    }

    function showAllMovies() {
        movieListItems.forEach(item => {
            item.style.display = 'list-item';
        });
    }

    toggleTop5Button.addEventListener('click', showOnlyTop5);
    toggleAllButton.addEventListener('click', showAllMovies);

    // 初期表示はTOP5のみ
    showOnlyTop5();
});

function likemovie(language) {
    // 条件分岐を使って言語ごとに挨拶を表示する
    let message;
    if (language === 0) {
        message = "『名探偵コナン　時計仕掛けの摩天楼』<br>『名探偵コナン　14番目の標的(ターゲット)』<br>『名探偵コナン　世紀末の魔術師』<br>『名探偵コナン　瞳の中の暗殺者』<br>『名探偵コナン　天国へのカウントダウン』"; //日本語

    } else if (language === 1) {

        message = " 『名探偵コナン　ベイカー街(ストリート)の亡霊』<br>『名探偵コナン　迷宮の十字路(クロスロード)』<br>『名探偵コナン　銀翼の奇術師(マジシャン)』<br>『名探偵コナン　水平線上の陰謀(ストラテジー)』<br>『名探偵コナン　探偵たちの鎮魂歌(レクイエム)』";


    }

    else if (language === 2) {
        message = "『名探偵コナン　紺碧の棺(ジョリー・ロジャー)』<br>『名探偵コナン　旋律の楽譜(フルスコア)』<br>『名探偵コナン　漆黒の追跡者(チェイサー)』<br>『名探偵コナン　天空の難破船(ロストシップ)』<br>『名探偵コナン　沈黙の15分(クォーター)』";

    }
    else if (language === 3) {
        message = "『名探偵コナン　11人目のストライカー』<br> 『名探偵コナン　絶海の探偵(プライベート・アイ)』<br>『名探偵コナン　異次元の狙撃手(スナイパー)』<br>『名探偵コナン　業火の向日葵(ごうかのひまわり)』<br>『名探偵コナン 純黒の悪夢(ナイトメア)』";  //スペイン語
    }
    else if (language === 4) {
        message = "『名探偵コナンから紅の恋歌(ラブレター)』<br>『名探偵コナン　ゼロの執行人(しっこうにん)』<br> 『名探偵コナン　紺青の拳(こんじょうのフィスト)』<br>『名探偵コナン　緋色の弾丸』<br>『名探偵コナン　ハロウィンの花嫁』";

    }
    else if (language === 5) {
        message = "『名探偵コナン　黒鉄の魚影(くろがねのサブマリン)』<br>『名探偵コナン　100万ドルの五稜星(みちしるべ)』<br> 『名探偵コナン　隻眼の残像(フラッシュバック)』"
    }
    else {
        message = "上のボタンを押しましたか？"
    }

    console.log(message);

    const p_likemovie = document.querySelector("#likemovie");
    // 取得した要素の文字列を更新
    p_likemovie.innerHTML = message;
}




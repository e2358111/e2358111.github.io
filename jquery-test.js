console.log("jquery-test.jsを読み込みました")

// セレクタ
// IDの時は#のあとにID名
let test_p_1 = $("#test-p-1").text(); 
console.log(test_p_1);

let test_p_2 = $("#test-p-2").text(); 
console.log(test_p_2);

// HTMLの中のpタグすべてをとる
let p_123 = $("p").text();
console.log(p_123);

// ページ読み込み後に消しておく
// $("#test-p-1").hide();

// メソッド
// toggle　表示・非表示
function toggle() {
    // 非表示
    // $("#test-p-1").hide();

    // 表示
    // $("#test-p-1").show();

    // 表示・非表示
    $("#test-p-1").toggle();
}

function slide() {
    // スライドダウン
    // $("#test-p-1").slideDown();

    // スライドアップ
    // $("#test-p-1").slideUp();

    // スライドアップ＆ダウン
    $("#test-p-1").slideToggle();

}
function fade() {
    // フェードイン
    // $("#test-p-1").fadeIn();

    // フェードアウト
    // $("#test-p-1").fadeOut();

    // フェードイン＆アウト
    $("#test-p-1").fadeToggle();

}
function color() {
    $("#test-p-1").css("color", "red");

}
function customAnimate() {

}
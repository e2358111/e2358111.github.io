console.log("chart-test.jsを読み込みました");



// chart-test.js の内容を以下のように変更
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('movieChart');

    // ctx が null でないことを確認する（canvas要素が見つからなかった場合のエラー回避）
    if (ctx) {
        new Chart(ctx, {
            // 棒グラフ
            type: 'bar',
            data: {
                labels: ['瞳の中の暗殺者(2000年)', 'ベイカー街の亡霊(2002年)', '純黒の悪夢(2016年)', '天国へのカウントダウン(2001年)', '沈黙の15分(2011年)'],
                datasets: [{
                    label: '興行収入ランキング(億)',
                    data: [25, 34, 63, 29, 32],
                    backgroundColor: 'rgba(5, 7, 7, 0.6)', // 見やすい色を追加
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: '興行収入 (円)' // Y軸のタイトル
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: '映画タイトル (公開年)' // X軸のタイトル
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true // 凡例の表示
                    },
                    title: {
                        display: true,
                        text: 'お気に入り映画の興行収入' // グラフのタイトル
                    }
                }
            }
        });
    } 
    else {
        console.error("IDが 'movieChart' のcanvas要素が見つかりません。");
    }
});




function test() {
    var table = document.getElementById('foo-table');  //表のオブジェクトを取得

    for (j = 1; j < jsonObj.length; j++) {
        var row = table.insertRow(-1);  //行末に行(tr要素)を追加
        var cell = row.insertCell(0);  //セル(td要素)の追加
        for (q = 1; q < 25; q++) {
            eval('var cell' + q + ' = row.insertCell(' + q + ');')
        }

        cell.innerHTML = "<img class='book_img' src='" + jsonObj[j][17] + "'>"
        cell1.innerHTML = "<div class='book_view'><div class='book_title'>" + jsonObj[j][1] + "</div><div class='book_name'>" + jsonObj[j][7] + "</div><div class='book_cp'> " + jsonObj[j][9] + "</div><div class='book_data'>" + jsonObj[1][10].substr(0, 10) + "</div></div>"
        for (i = 2; i < 25; i++) {
            eval('cell' + i + '.innerHTML= "<div class=table"+' + i + ' +">" + jsonObj[' + j + '][' + (i - 2) + ']+" </div>"')
        }
    }


    table.deleteRow(1);

    jQuery(function ($) {
        // デフォルトの設定を変更
        $.extend($.fn.dataTable.defaults, {
            language: {
                url: "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Japanese.json"
            },
            columnDefs: [
                // 1列目を消す(visibleをfalseにすると消えます)
                { targets: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24], visible: false },
            ]
        });
        $("#foo-table").DataTable();
    });
}

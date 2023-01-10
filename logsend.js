let jsonObj
function send(mode, key1, key2, key3, key4, key5, key6, key7, key8, key9, key10, key11, key12, key13, key14, key15, key16, key17, key18, key19) {
        xhr = new XMLHttpRequest()
        xhr.open('POST', 'https://script.google.com/macros/s/AKfycbyOBgvJG2v2xqtAHXU_wmFixyYxRHEPsyykDd5disH6zVmxMY4SUE6QcwGn9fOkGA1e/exec', true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        var request = "mode=" + mode + "&key1=" + key1 + "&key2=" + key2 + "&key3=" + key3 + "&key4=" + key4 + "&key5=" + key5 + "&key6=" + key6 + "&key7=" + key7 + "&key8=" + key8 + "&key9=" + key9 + "&key10=" + key10 + "&key11=" + key11 + "&key12=" + key12 + "&key13=" + key13 + "&key14=" + key14 + "&key15=" + key15 + "&key16=" + key16 + "&key17=" + key17 + "&key18=" + key18 + "&key19=" + key19
        xhr.send(request);


        xhr.onreadystatechange = function () {
                // readyState XMLHttpRequest の状態 4: リクエストが終了して準備が完了
                // status httpステータス
                if (xhr.readyState == 4 && xhr.status == 200) {
                        // jsonをオブジェクトに変更
                        jsonObj = JSON.parse(xhr.responseText);
                        console.log(jsonObj)

                        test()

                }
        }


}


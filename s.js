with(document) {
    ld = getElementById('ld')
    coCho = getElementById('coCho')
    coMeo = getElementById('coMeo')
    tenCho = getElementById('tenCho')
    tenMeo = getElementById('tenMeo');
    mauChos = getElementsByName('mauCho')
    mauMeos = getElementsByName('mauMeo')
    longCho = getElementById('longCho')
    longMeo = getElementById('longMeo')
}
khiHuy = () => {
    alert('Bạn phải hủy việc gửi bản điều tra')
    ld.focus()
}
khiGui = () => {
    if (!coCho.checked && !coMeo.checked) {
        alert('Bạn phải chọn ít nhất 1 con vật trong ô lựa chọn CÓ tương ứng')
        return
    }
    if (coCho.checked) {
        if (!tenCho.value) {
            alert('Bạn phải nhập tên cho thú cưng')
            tenCho.focus();
            return
        }
        if (!mauChos[0].checked && !mauChos[1].checked && !mauChos[2].checked) {
            alert('Bạn phải chọn màu cho thú cưng');
            // longCho.style.border = '1.5px solid black'
            return
        }
    }
    if (coMeo.checked) {
        if (!tenMeo.value) {
            alert('Bạn phải nhập tên cho thú cưng')
            tenMeo.focus();
            return
        }
        if (!mauMeos[0].checked && !mauMeos[1].checked && !mauMeos[2].checked) {
            alert('Bạn phải chọn màu cho thú cưng');
            // longMeo.style.border = '1.5px solid black'
            return
        }
    }
    location = 'http://www.animalsites.com'
}
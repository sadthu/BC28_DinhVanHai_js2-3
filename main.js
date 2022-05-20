// Bài Tập 1:
/*
    mô hình 3 khối:
        - input:
            + lương 1 ngày (number)
            + số ngày làm (number)
        - progress:
            + tạo 3 biến : luong1Ngay, SoNgayLam và tongLuong
            + gán : luong1Ngay = 100000
                    SoNgayLam : người dùng nhập
                    tongLuong = luong1Ngay * SoNgayLam
        - output:
            + tổng lương được nhận (tongLuong)
*/

tinhLuong.onclick = function () {
    var luong1Ngay = document.getElementById('tienLuong1Ngay').value;
    var SoNgayLam = document.getElementById('soNgayLam').value;
    var tongLuong = 0;
    tongLuong = Number(luong1Ngay) * Number(SoNgayLam);
    let tienViet = Intl.NumberFormat('en-Us');
    document.getElementById('tongLuongs').innerHTML = tienViet.format(tongLuong) + ' VND';
}

// Bài Tập 2:
/*
    mô hình 3 khối:
        - input:
            + 5 số thực
        - progress:
            + tạo 6 biến: number1 , number2 , number3 , number4 , number5 , trungBinhSo
            + nhập: 5 giá trị cho 5 number
            + gán: trungBinhSo = (number1 + number2 + number3 + number4 + number5) / 5
        - output: 
            + trung bình 5 số (trungBinhSo)  
*/
trungBinh.onclick = function () {
    var numBer1 = document.getElementById('number1').value;
    var numBer2 = document.getElementById('number2').value;
    var numBer3 = document.getElementById('number3').value;
    var numBer4 = document.getElementById('number4').value;
    var numBer5 = document.getElementById('number5').value;
    var trungBinhSo = 0;
    trungBinhSo = (Number(numBer1) + Number(numBer2) + Number(numBer3) + Number(numBer4) + Number(numBer5)) / 5;
    document.getElementById('trungBinh5So').innerHTML = trungBinhSo.toFixed(3);
}

// Bài tập 3:
/*
    mô hình 3 khối :
        - input: giá USD và số USD
        - progress: 
            + tạo 3 biến : giaUSD , soUSD , tongTien
            + người dùng nhập số USD
            + gán : giaUSD = 23500
                    tongTien = giaUSD * soUSD
        - output: tổng tiền việt (tongTien)
*/
doiVND.onclick = function () {
    var giaUSD = document.getElementById('gia1USD').value;
    var soUSD = document.getElementById('tongUSD').value;
    var tongTien = giaUSD * soUSD;
    let tienVND = Intl.NumberFormat('en-Us');
    document.getElementById('tongVND').innerHTML = tienVND.format(tongTien) + ' VND';
}

// Bài tập 4:
/*
    - input: chiều dài và chiều rộng của hình chữ nhật
    - progress: 
        + tạo 4 biến : chieuDai , chieuRong , chuVi , dienTich
        + gán : dienTich = chieuDai * chieuRong
                chuVi = (chieuDai + chieuRong ) * 2
    - output :  chu vi (chuVi)
                diện tích (dienTich)
*/
tinhHCN.onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var dienTich = 0;
    var chuVi = 0;
    dienTich = Number(chieuDai) * Number(chieuRong);
    chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    document.getElementById('spHCN').innerHTML = 'diện tích là: ' + dienTich + '<br>' + 'chu vi là: ' + chuVi;
}

// Bài tập 5:
/*
    - input: số có 2 chữ số
    - progress:
        + tạo 4 biến: soN , hangChuc, hangDonVi , tongCacSo
        + gán: hangChuc = Math.floor(soN / 10)
               hangDonVi = soN % 10
               tongCacSo = hangChuc + hangDonVi
        + output : tổng (tongCacSo)
*/
tinhTong.onclick = function () {
    var soN = document.getElementById('so2ChuSo').value;
    var hangChuc = 0;
    var hangDonVi = 0;
    var tongCacSo = 0;
    hangChuc = Math.floor(Number(soN) / 10);
    hangDonVi = Number(soN) % 10;
    tongCacSo = hangChuc + hangDonVi;
    document.getElementById('ketQua').innerHTML = 'tổng các số là: ' + tongCacSo;
}

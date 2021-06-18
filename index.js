// BÀI 1: Tìm số nguyên dương nhỏ nhất sao cho:
// 1 + 2 + … + n > 10000
document.getElementById('btnsoDuong').onclick = function(){
    var num = 0;
    var sum = 0;
    var content = '';
    while(sum < 10000){
        num ++;
        sum = sum + num;
    };
    document.getElementById('noti').style.display = 'block';
    document.getElementById('noti').innerHTML = "<div>Số nguyên dương nhỏ nhất là: " + num++ + "</div>";
}
// END BÀI 1
// ------------------------------------------
// // BÀI 2: Viết chương trình nhập vào 2 số x, n tính tổng: S(n) = x + x^2
// + x^3 + … + x^n (Sử dụng vòng lặp và hàm)
// Validate
var getEle = function(id){
    return document.getElementById(id);
}
var kiemTraNhap = function(idField, idthongBao, mess) {
    var ketQua = false;
    var value = getEle(idField).value;
    var thongBao = getEle(idthongBao);
    if(value === ''){
        thongBao.style.display = 'block';
        thongBao.innerHTML = mess;
        ketQua = false;
    }else{
        thongBao.style.display = 'none';
        ketQua = true;
    }
    return ketQua;
}
var kiemTraNhapN = function(idField, idthongBao, mess) {
    var ketQua = false;
    var value = getEle(idField).value;
    var thongBao = getEle(idthongBao);
    if(value >= 1){
        thongBao.style.display = 'none';
        ketQua = true;
    }else{
        thongBao.style.display = 'block';
        thongBao.innerHTML = mess;
        ketQua = false;
    }
    return ketQua;
}
var kiemTraHopLe = function() {
    var ketQua = kiemTraNhap('soX', 'thongBaoX', '(*) Số X không được rỗng');
    var ketQua = kiemTraNhap('soN', 'thongBaoN', '(*) Số N không được rỗng');
    if(ketQua){
        ketQua = kiemTraNhapN('soN', 'thongBaoN', '(*) Số N phải lớn hơn hoặc bằng 1')
    };
    return ketQua;
}
getEle('btntinhTong').addEventListener('click', function(){
    var soX = document.getElementById('soX').value;
    // console.log(soX);
    soX = parseFloat(soX);
    var soN = document.getElementById('soN').value;
    // console.log(soN);
    var KTHopLe = kiemTraHopLe();
    if(KTHopLe){
        var Tong = 0;
        var Tich = 1;
        for(var i = 1; i <= soN; i++){
            Tich = soX * Tich;
            Tong = Tong + Tich;
        }
        document.getElementById('notice').style.display = 'block';
        document.getElementById('notice').innerHTML = "<div>Tổng của biểu thức là: " + Tong + "</div>";
    }
})
// END BÀI 2
// -------------------------------------------
// BÀI 3: Nhập vào n. Tính giai thừa 1*2*...n
var kiemTraSoHopLe = function() {
    var ketQua = kiemTraNhap('nhapSoN','thongBaoNhapSoN', '(*) Số N không được rỗng');
    if(ketQua){
        ketQua= kiemTraNhapN('nhapSoN','thongBaoNhapSoN', '(*) Số N phải lớn hơn hoặc bằng 1')
    }
    return ketQua;
}
document.getElementById('btngiaiThua').onclick = function(){
   var nhapSoN = document.getElementById('nhapSoN').value;
   var kiemTraHopLe = kiemTraSoHopLe();
   if(kiemTraHopLe){
   var giaiThua = 1;
   for(var i = 1; i <= nhapSoN; i++){
            giaiThua = giaiThua * i;
    };
    document.getElementById('note').style.display = 'block';
    document.getElementById('note').innerHTML = "<div>Gia thừa của biểu thức là: " + giaiThua + "</div>";
    }
}
// END BÀI 3
// ---------------------------------------------
// BÀI 4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div.
// Nếu div nào vị trí chẵn thì background màu đỏ và lẻ thì background màu xanh.
document.getElementById('btntheDiv').onclick= function(){
    // var content = '';
    var listTagName = document.getElementsByTagName('ul');
    console.log(listTagName[0]);
    var listLi = document.getElementsByTagName('li');
    // console.log(listLi[0].textContent);
    var listItem = document.getElementsByClassName('item');
    for(var i=1; i <= 10; i ++){
        if(i % 2 !== 0){
            listLi[i - 1].textContent += "Div" + ' lẻ ' + i ;
            listItem[i - 1].style.backgroundColor = '#64b5f6';
        }else{
            listLi[i - 1].textContent += "Div" + ' chẵn ' + i ;
            listItem[i - 1].style.backgroundColor = '#ef5350';
        }
    }
    document.getElementById('theDiv').innerHTML = listLi[i].textContent;
}
// END BÀI 4


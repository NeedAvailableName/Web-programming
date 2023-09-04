
//Set data to local storage
if(!sessionStorage.getItem("ttsv")) {
    let ttsv = {
        ten:"Phạm Hải Đăng",
        gioiTinh:"Nam",
        namVao:"2019",
        bacDaoTao:"KSCLC-TN-TT-VN-ICT",
        chuongTrinh:"Công nghệ thông tin Global ICT 2019",
        khoaVien:"Trường Công nghệ Thông tin và Truyền thông",
        tinhTrang:"Học",
        lop:"ICT 02-K64",
        khoaHoc:"64",
        email:"dang.ph194736@sis.hust.edu.vn"
    }
    ttsv = JSON.stringify(ttsv);
    sessionStorage.setItem("ttsv", ttsv);
}

//Init right value of student
if(!sessionStorage.getItem("remainTtsv")) {
    sessionStorage.setItem("remainTtsv", sessionStorage.getItem("ttsv"));
}

if(!sessionStorage.getItem("remainImg")) {
    sessionStorage.setItem("remainImg", "./assets/img/student.png");
}

if(!sessionStorage.getItem("img")) {
    sessionStorage.setItem("img", "./assets/img/student.png");
}

//Bind value from local storage
let ttsv = JSON.parse(sessionStorage.getItem("ttsv"));
document.getElementById("img").src = sessionStorage.getItem("img");
document.getElementById("ten").innerHTML = ttsv.ten;
document.getElementById("gioi-tinh").innerHTML = ttsv.gioiTinh;
document.getElementById("tinh-trang").innerHTML = ttsv.tinhTrang;
document.getElementById("nam-vao").innerHTML = ttsv.namVao;
document.getElementById("bac-dao-tao").innerHTML = ttsv.bacDaoTao;
document.getElementById("chuong-trinh").innerHTML = ttsv.chuongTrinh;
document.getElementById("khoa-vien").innerHTML = ttsv.khoaVien;
document.getElementById("lop").innerHTML = ttsv.lop;
document.getElementById("khoa-hoc").innerHTML = ttsv.khoaHoc;
document.getElementById("email").innerHTML = ttsv.email;
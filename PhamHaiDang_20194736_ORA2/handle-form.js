//Get obj from local storage
let ttsv = JSON.parse(sessionStorage.getItem("ttsv"));
let img = sessionStorage.getItem("img");
let changeImg = img;
const genderArr = document.getElementsByName("gender");
const statusArr = document.getElementsByName("status");

let inputImgDom = document.getElementById("newImage");
let imgDom = document.getElementById("img");

//Listen on change input img to preview image
inputImgDom.addEventListener("change", (event) => {
    changeImg = URL.createObjectURL(event.target.files[0])
    document.getElementById("img").src = changeImg;
});

//Bind value 
document.getElementById("img").src = img;
genderArr.forEach(element => {
    if(element.value === ttsv.gioiTinh) element.checked = true;
});
statusArr.forEach(element => {
    if(element.value === ttsv.tinhTrang) element.checked = true;
});
document.getElementById("ten").value = ttsv.ten;
document.getElementById("nam-vao").value = ttsv.namVao;
document.getElementById("bac-dao-tao").value = ttsv.bacDaoTao;
document.getElementById("chuong-trinh").value = ttsv.chuongTrinh;
document.getElementById("khoa-vien").value = ttsv.khoaVien;
document.getElementById("lop").value = ttsv.lop;
document.getElementById("khoa-hoc").value = ttsv.khoaHoc;
document.getElementById("email").value = ttsv.email;

//Xu li nhan OK submit form
document.getElementById("ok").addEventListener("click", (e) => {
    e.preventDefault();
    genderArr.forEach(ele => {
        if(ele.checked) {
            ttsv.gioiTinh = ele.value; 
        }
    });
    statusArr.forEach(ele => {
        if(ele.checked) {
            ttsv.tinhTrang = ele.value; 
        }
    });
    ttsv.ten = document.getElementById("ten").value;
    ttsv.namVao = document.getElementById("nam-vao").value ;
    ttsv.bacDaoTao = document.getElementById("bac-dao-tao").value;
    ttsv.chuongTrinh = document.getElementById("chuong-trinh").value;
    ttsv.khoaVien = document.getElementById("khoa-vien").value;
    ttsv.lop = document.getElementById("lop").value;
    ttsv.khoaHoc = document.getElementById("khoa-hoc").value;
    ttsv.email = document.getElementById("email").value;
    hideBtn();
    disableForm();
    //Image handler
    //update local storage
    sessionStorage.removeItem("ttsv");
    sessionStorage.removeItem("img");
    //Update obj
    sessionStorage.setItem("ttsv", JSON.stringify(ttsv));
    //Update img
    sessionStorage.setItem("img", changeImg);
    console.log(ttsv);
});

document.getElementById("cancle").addEventListener("click", (e) => {
    e.preventDefault();
    genderArr.forEach(ele => {
        if(ele.value === ttsv.gioiTinh) {
            ele.checked = true;
        }
    });
    statusArr.forEach(ele => {
        if(ele.value === ttsv.tinhTrang) {
            ele.checked = true;
        }
    });
    document.getElementById("ten").value = ttsv.ten;
    document.getElementById("nam-vao").value = ttsv.namVao;
    document.getElementById("bac-dao-tao").value = ttsv.bacDaoTao;
    document.getElementById("chuong-trinh").value = ttsv.chuongTrinh;
    document.getElementById("khoa-vien").value = ttsv.khoaVien;
    document.getElementById("lop").value = ttsv.lop;
    document.getElementById("khoa-hoc").value = ttsv.khoaHoc;
    document.getElementById("email").value = ttsv.email;
    document.getElementById("img").src = img;
    hideBtn();
    disableForm();
    console.log(ttsv);
});

document.getElementById("reset").addEventListener("click", (e) => {
    e.preventDefault();
    let remainTtsv = JSON.parse(sessionStorage.getItem("remainTtsv"));
    genderArr.forEach(ele => {
        if(ele.value === remainTtsv.gioiTinh) {
            ele.checked = true;
        }
    });
    statusArr.forEach(ele => {
        if(ele.value === remainTtsv.tinhTrang) {
            ele.checked = true;
        }
    });
    document.getElementById("ten").value = remainTtsv.ten;
    document.getElementById("nam-vao").value = remainTtsv.namVao;
    document.getElementById("bac-dao-tao").value = remainTtsv.bacDaoTao;
    document.getElementById("chuong-trinh").value = remainTtsv.chuongTrinh;
    document.getElementById("khoa-vien").value = remainTtsv.khoaVien;
    document.getElementById("lop").value = remainTtsv.lop;
    document.getElementById("khoa-hoc").value = remainTtsv.khoaHoc;
    document.getElementById("email").value = remainTtsv.email;
    imgDom.src = sessionStorage.getItem("remainImg");
    changeImg = imgDom.src;
    console.log(remainTtsv);
});


function disableForm () {
    document.getElementById("form-status").setAttribute("disabled", "disabled");
}

// Function
function hideBtn() {
    document.getElementById("ok").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("cancle").style.display = "none";
}




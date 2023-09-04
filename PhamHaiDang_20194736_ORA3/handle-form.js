//Get obj from local storage
let ttsv = JSON.parse(sessionStorage.getItem("ttsv"));
let img = sessionStorage.getItem("img");
let changeImg = img;
const genderArr = document.getElementsByName("gender");
const statusArr = document.getElementsByName("status");
let prompt = document.getElementById("delete-group-promt");

let inputImgDom = document.getElementById("newImage");
let imgDom = document.getElementById("img");
let deleteDom = null;

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


//delete group
function openPromtDelete(event) {
    event.preventDefault();
    let domNode = event.target;
    //Show up dialog confirm
    prompt.style.display = "flex";
    //Parent to the fieldset
    while(true) {
        domNode = domNode.parentNode;
        if(domNode.className === "form_status") {
            deleteDom = domNode;
            break;
        }
    }
}

//delete item
function openPromtItemDelete(event) {
    event.preventDefault();
    let domNode = event.target;
    //Show up dialog confirm
    prompt.style.display = "flex";
    //Parent to the fieldset
    while(true) {
        domNode = domNode.parentNode;
        if(domNode.className === "input_item") {
            deleteDom = domNode;
            break;
        }
    }
}

function clickDeleteItemItem(event) {
    event.preventDefault();
    let deleteDom = event.target;
    while(true) {
        deleteDom = deleteDom.parentNode;
        if(deleteDom.className === "input_item") {
            deleteDom.remove();
            break;
        }
    }
}

function deleteGroup(e) {
    e.preventDefault();
    //delete element
    deleteDom.style.display = "none";
    deleteDom = null;
    //close promt delete
    prompt.style.display = "none";
}

function notDeleteGroup(e) {
    e.preventDefault();
    deleteDom = null;
    //close prompt
    prompt.style.display = "none";
}


const itemBox = document.getElementById("item-type");
let curAddItemDom = null;
//Add item info
function openSelectAddItemBox(event) {
    event.preventDefault();
    let pos = event.target.getBoundingClientRect();
    itemBox.style.top = `${pos.top}px`;
    itemBox.style.left = `${pos.left + pos.width}px`;
    itemBox.style.display = "block";
    //set Group wich will be add item
    curAddItemDom = event.target.parentNode.parentNode;
}

// Func create input text
function createInputText() {
    return `<div ondblclick="dbClickChangeItemName(event)" class="item_title" style="margin-right:15px;">
                Item Info Name:
            </div>
            <input onkeypress="pressEnterChangeItem(event)" style="display: none; margin-right: 5px"/>
            <input />
            <button onclick="openPromtItemDelete(event)" style="margin-left: 5px; background-color: red">Delete Item</button>`;
}

// Func create input number
function createInputNumber() {
    return `<div ondblclick="dbClickChangeItemName(event)" class="item_title" style="margin-right:15px;">
                Item Info Name:
            </div>
            <input onkeypress="pressEnterChangeItem(event)" style="display: none; margin-right: 5px"/>
            <input type="number"/>
            <button onclick="openPromtItemDelete(event)" style="margin-left: 5px; background-color: red">Delete Item</button>`;
}

// Func create input Email
function createInputEmail() {
    return   `<div ondblclick="dbClickChangeItemName(event)" class="item_title" style="margin-right:15px;">
                Item Info Name:
            </div>
            <input onkeypress="pressEnterChangeItem(event)" style="display: none; margin-right: 5px"/>
            <input type="email"/>
            <button onclick="openPromtItemDelete(event)" style="margin-left: 5px; background-color: red">Delete Item</button>`;
}

// Func create input Radio
function clearRadioForm() {
    let inputList = document.querySelectorAll("#radio-dialog-container input");
    inputList.forEach(element => {
        element.value = "";
    });
    document.getElementById("radio-alert").style.display = "none";
}

function createRadio(event) {
    event.preventDefault();
    let radioName = document.querySelector("#radio-name input").value;
    if(radioName != "" && radioName != null) {
        let inputList = document.querySelectorAll("#radio-dialog-list input");
        let addDiv = curAddItemDom.querySelector('.append_item');
        let divInput = document.createElement("div");
        let delBtn = document.createElement("div");
        delBtn.innerHTML = `<button onclick="openPromtItemDelete(event)" style="margin-left: 5px; background-color: red">Delete Item</button>`;
        divInput.classList.add("input_item");
        //add title
        divInput.innerHTML = `<div ondblclick="dbClickChangeItemName(event)" class="item_title" style="margin-right:15px;">
                                Item Info Name:
                            </div>
                            <input onkeypress="pressEnterChangeItem(event)" style="display: none; margin-right: 5px"/>`
        //Create radio
        inputList.forEach(e => {
            if(window.getComputedStyle(e).getPropertyValue("display") != "inline-block" && e.value != "") {
                let input = document.createElement("input");
                input.setAttribute("type","radio");
                input.setAttribute("id",`${e.value}`);
                input.setAttribute("name",`${radioName}`);
                input.setAttribute("value",`${e.value}`);
                let label = document.createElement("label");
                label.setAttribute("for",`${e.value}`);
                label.style.marginRight = "10px";
                label.innerHTML = e.value;
                divInput.appendChild(input);
                divInput.appendChild(label);
            }
        });
        divInput.appendChild(delBtn);
        addDiv.appendChild(divInput);
        clearRadioForm();
        document.getElementById("radio-dialog-container").style.display = 'none';
    }
    //show alert
    document.getElementById("radio-alert").style.display = "block";
}

function cancleRadio(event) {
    event.preventDefault();
    clearRadioForm();
    document.getElementById("radio-dialog-container").style.display = 'none';
}

function deleteRadioItem(event) {
    event.target.parentNode.remove();
}

function addItemRadio(event) {
    event.preventDefault();
    let divRadioItem = document.getElementById("radio-dialog-list");
    let newItemDiv = document.createElement("div");
    newItemDiv.classList.add("radio-dialog-list_item");
    newItemDiv.innerHTML = `
    <input type="text"/>
    <button onclick="deleteRadioItem(event)" style="background-color: red;">Delete</button>`;
    divRadioItem.appendChild(newItemDiv);
}
//End of Func create input Radio

// Func create input list
function clearListForm() {
    let inputList = document.querySelectorAll("#list-dialog-container input");
    inputList.forEach(element => {
        element.value = "";
    });
}

//Func create list
function createList(event) {
    event.preventDefault();
    let inputList = document.querySelectorAll("#list-dialog-list input");
    let addDiv = curAddItemDom.querySelector('.append_item');
    let divInput = document.createElement("div");
    let delBtn = document.createElement("div");
    let select = document.createElement("select");
    delBtn.innerHTML = `<button onclick="openPromtItemDelete(event)" style="margin-left: 5px; background-color: red">Delete Item</button>`;
    divInput.classList.add("input_item");
    //add title
    divInput.innerHTML = `<div ondblclick="dbClickChangeItemName(event)" class="item_title" style="margin-right:15px;">
                            Item Info Name:
                        </div>
                        <input onkeypress="pressEnterChangeItem(event)" style="display: none; margin-right: 5px"/>`
    //Create list
    inputList.forEach(e => {
        if(window.getComputedStyle(e).getPropertyValue("display") != "inline-block" && e.value != "") {
            let option = document.createElement("option");
            option.setAttribute("value",`${e.value}`);
            option.innerText = e.value;
            select.appendChild(option);
        }
    });
    divInput.appendChild(select);
    divInput.appendChild(delBtn);
    addDiv.appendChild(divInput);
    clearListForm();
    document.getElementById("list-dialog-container").style.display = 'none';
}

//Func cancle list
function cancleList(event) {
    event.preventDefault();
    clearListForm();
    document.getElementById("list-dialog-container").style.display = 'none';
}

//Func del list item
function deleteListItem(event) {
    event.target.parentNode.remove();
}

function addItemList(event) {
    event.preventDefault();
    let divListItem = document.getElementById("list-dialog-list");
    let newItemDiv = document.createElement("div");
    newItemDiv.classList.add("list-dialog-list_item");
    newItemDiv.innerHTML = `
    <input type="text"/>
    <button onclick="deleteListItem(event)" style="background-color: red;">Delete</button>`;
    divListItem.appendChild(newItemDiv);
}
// End of Func create input Radio

function handleClickItem(event) {
    event.preventDefault();
    let type = event.target.innerText;
    let addDiv = curAddItemDom.querySelector('.append_item');
    //Create input
    let divInput = document.createElement("div");
    divInput.classList.add("input_item");
    switch (type) {
        case "Text":
            divInput.innerHTML =  createInputText();
            addDiv.appendChild(divInput);
            break;
        case "Number":
            divInput.innerHTML = createInputNumber();
            addDiv.appendChild(divInput);
            break;
        case "Email":
            divInput.innerHTML = createInputEmail();
            addDiv.appendChild(divInput);
            break;
        // case "Checkbox":
        //     //Show dialog item
        //     console.log("Checkbox");
        //     break;
        case "RadioButton":
            //Show dialog item
            document.getElementById("radio-dialog-container").style.display = 'flex';
            break;
        case "DropdownList":
            //show dialog item
            document.getElementById("list-dialog-container").style.display = 'flex';
            break;
    }
    //close itembox
    itemBox.style.display = "none";
}

//change group name
function dbClickChangeGroupName(event) {
    event.preventDefault();
    let title = event.target;
    let input = event.target.nextElementSibling;
    //Show inputvalue
    input.value = title.innerText.substring(0, title.innerText.length - 9);
    //Display the input
    input.style.display = "block";
    //hide title
    title.style.display = "none";
}

function dbClickChangeItemName(event) {
    event.preventDefault();
    let title = event.target;
    let input = event.target.nextElementSibling;
    //Show inputvalue
    input.value = title.innerText.substring(0, title.innerText.length - 1);
    //Display the input
    input.style.display = "block";
    //hide title
    title.style.display = "none";
}

function pressEnterChangeItem(event) {
    const input = event.target;
    const title = event.target.previousSibling.previousSibling;
    if(event.key === 'Enter') {
        event.preventDefault();
        //Change value of item
        if(input.value != "" && input.value != null) {
            title.innerText = input.value + ":";
        } 
        //Display title
        title.style.display = "block";
        input.style.display = "none";
    }
}

//Event pressenter
function pressEnterChange(event) {
    const input = event.target;
    const title = event.target.previousSibling.previousSibling;
    if(event.key === 'Enter') {
        event.preventDefault();
        //Change value of title
        if(input.value != "" && input.value != null) {
            title.innerText = input.value + "_20194736";
        } 
        //Display title
        // console.log(event.target.previousSibling);
        title.style.display = "block";
        input.style.display = "none";
    }
}

//Add group of info
function handleAddGroup(event) {
    event.preventDefault();
    //Apend group to form
    const form = document.getElementById("form");
    //create fieldset
    const fieldset = document.createElement("fieldset");
    fieldset.classList.add("form_status");
    fieldset.innerHTML = `<div class="title_container">
                            <div class="hust_title" ondblclick="dbClickChangeGroupName(event)">GROUP_NAME_<span>20194736</span></div>
                            <input type="text" style="display: none;" onkeypress="pressEnterChange(event)"/>
                            <button class="delele_group" style="background-color:red;" onclick="openPromtDelete(event)">Delete Group</button>
                            <button class="add_group" onclick="handleAddGroup(event)">Add Group Item</button>
                            <button class="add_item" onclick="openSelectAddItemBox(event)">Add Info Item ></button>
                          </div>
                          <div class="append_item" name="append"></div>`;
    form.appendChild(fieldset);
}

// Export PDF
$("body").on("click", "#export-pdf", function () {
    console.log("export");
    html2canvas($('#content')[0], {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 500
                }]
            };
            pdfMake.createPdf(docDefinition).download("TTSV.pdf");
        }
    });
});



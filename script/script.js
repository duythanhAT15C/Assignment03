"use strict";

const main = document.querySelectorAll(".main");
const viewMore = document.querySelectorAll(".view-more");
const viewLess = document.querySelectorAll(".view-less");
const contentJob = document.querySelectorAll(".content-job");
const submit = document.querySelector(".submit");
const email = document.querySelector("#input-email");
const formEmail = document.querySelector(".email");
const info = document.querySelector(".info");
const thongBao = document.querySelector(".thong-bao");
const emailSV = document.querySelector(".email-sv");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let clickCount = 0; // Biến đếm số lần nhấp vào nút "View more"
let mang = new Array();
main.forEach((element, index) => {
  const currentViewMore = viewMore[index];
  const currentViewLess = viewLess[index];
  let isButtonClicked = false; // Biến để kiểm tra trạng thái ấn nút
  element.addEventListener("mouseover", function () {
    if (!isButtonClicked) {
      // nếu nút không được ấn
      viewMore[index].classList.remove("hide");
      element.classList.add("hover-effect"); // Thêm lớp khi di chuột vào
    }
  });

  element.addEventListener("mouseout", function () {
    if (!isButtonClicked) {
      // nếu nút không được ấn
      viewMore[index].classList.add("hide");
      element.classList.remove("hover-effect"); // Xóa lớp khi di chuột ra khỏi
    }
  });

  currentViewMore.addEventListener("click", function () {
    clickCount++;
    isButtonClicked = true; // nút được ấn
    viewMore[index].classList.add("hide"); // ẩn nút view more đi
    contentJob[index].classList.remove("hide"); // hiển thị nội dung bên dưới
    // Áp dụng lớp CSS cho các đối tượng còn lại
    main.forEach((mainElement, mainIndex) => {
      if (mainIndex !== index) {
        // khi phần tử không phải phần tử được chọn thì sẽ add class length với thuộc tính là align-self: baseline
        mainElement.classList.add("length");
      }
    });
    if (clickCount >= 2) {
      console.log("ok");
    }
  });
  currentViewLess.addEventListener("click", function () {
    isButtonClicked = false; // chuyển trạng thái về nút khi không được ấn
    viewMore[index].classList.add("hide"); // ẩn nút view more đi
    contentJob[index].classList.add("hide"); // ẩn nội dung bên dưới
  });
});
submit.addEventListener("click", function () {
  if (email.value.length === 0) {
    thongBao.innerHTML = "Vui lòng nhập thông tin trước khi submit";
    thongBao.style.color = "red";
  } else if (!regex.test(email.value) || emailSV.textContent !== email.value) {
    thongBao.innerHTML = "Email không đúng. Vui lòng nhập lại";
    thongBao.style.color = "red";
  } else {
    thongBao.innerHTML = "";
    formEmail.classList.add("hide");
    info.classList.remove("hide");
  }
});

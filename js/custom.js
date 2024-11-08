$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $("body").toggleClass("menu-show");
  });

  // $(".nav-item .nav-link").click(function () {
  //   $(".nav-item .nav-link").removeClass("active");
  //   // $(".tab").addClass("active"); // instead of this do the below
  //   $(this).addClass("active");
  // });
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

let menuList = document.querySelectorAll(".sidebar-menu-list-item");
menuList.forEach((list) => {
  list.addEventListener("click", function () {
    menuList.forEach((item) => item.classList.remove("active"));
    list.classList.add("active");
  });
});


// radioBtn toast
const toastTrigger = document.querySelectorAll('[name="tableRadio"]');
const toastLiveExample = document.getElementById("radioToast");
// console.log(toastTrigger, toastLiveExample)
toastTrigger.forEach((radioTrigger) => {
  radioTrigger.addEventListener("click", function () {
    if (radioTrigger) {
      const toast = new bootstrap.Toast(toastLiveExample);
      toast.show();
    }
  });
});



// custom select dropdown
function initializeCustomSelect(customSelect) {
  // console.log(customSelect)
  const customSelectTrigger = customSelect.querySelector('.custom-select-trigger');
  const customOptions = customSelect.querySelector('.custom-options');
  const selectedTxt = customSelect.querySelector('.selectedTxt');
  const optionOne = customOptions.querySelector('.custom-option')


  if (optionOne) {
      customSelectTrigger.querySelector('span').innerHTML = optionOne.innerHTML;
  }
  // Toggle dropdown on click
  customSelectTrigger.addEventListener('click', () => {
      customSelect.classList.toggle('show');
      selectedTxt.classList.toggle('rotate')
  });

  // Close dropdown when clicking outside
  window.addEventListener('click', (event) => {
      if (!event.target.closest('.custom-select')) {
          customSelect.classList.remove('show');
      }
  });

  // Handle option selection
  const options = customSelect.querySelectorAll('.custom-option');

  options.forEach(option => {
      option.addEventListener('click', () => {
          options.forEach(opt => opt.classList.remove('active'));
          option.classList.add('active');
          const selectedValue = option.getAttribute('data-value');
          const selectedText = option.innerHTML;
          customSelectTrigger.querySelector('span').innerHTML = selectedText; // Update selected text
          customSelect.classList.remove('show'); // Close dropdown
      });
  });
}

// Initialize all custom selects
document.querySelectorAll('.custom-select').forEach(initializeCustomSelect);

// password show hide text
document.querySelectorAll(".passwordInput").forEach(Input => {
  let passwordImgs = Input.querySelectorAll("img");
  let inputPass = Input.querySelector("input");            
  
  passwordImgs.forEach(Img => {
      Img.addEventListener("click", function () {
          if (inputPass.type === "password") {
              inputPass.type = "text";
              passwordImgs[0].style.display = "none";
              passwordImgs[1].style.display = "block";
              // console.log(inputPass.type === "text", "cc")
          }
          else if(inputPass.type === "text") {
              inputPass.type = "password";
              passwordImgs[0].style.display = "block";
              passwordImgs[1].style.display = "none";
              // console.log(inputPass.type === "password", "ddd")
          }
      })
  })
});


if(typeof currentYear !== "undefined") {
  let currentYear = document.getElementById("currentYear")
  let date = new Date().getFullYear();
  currentYear.innerHTML = date;
  // console.log(date)  
}

let password = "";
let cpassword = "";

function handleChange1() {
  const input = document.getElementById("pswd").value;
  password = input;
}

function handleChange2() {
  const input = document.getElementById("cpswd");
  cpassword = input.value;
  if (password != cpassword) {
    input.style.borderColor = "#ff0000";
  }else{
    input.style.borderColor = "violet";
  }
}

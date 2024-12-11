const users = [];
function register (){
  const username = document.getElementById('register-username').value;
  const email = document.getElementById('register-email').value;
  const phonenumber = document.getElementById('register-phonenumber').value;
  const password = document.getElementById('register-password').value;
  if(username && email && password){
    const user = {
      username : username,
      email : email,
      password : password
    }
    users.push(user);
    alert('Đăng ký thành công!');
    window.location = "login.html";
  }else{
    alert('Vui lòng điền đầy đủ thông tin')
  }
}
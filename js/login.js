const users = [];

function login (){
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const user = users.find(user => user.email === email && user.password === password);
    if(user){
        alert('Chào mừng, ${user.username}! Bạn đã đăng nhập thành công.');
        window.location = "homecarrent.html"

    }else{
        alert('Email hoặc mật khẩu không đúng')
    }
}


document.getElementById('btn-submit').addEventListener('click',function(){
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    console.log(email)
    const passwordFild = document.getElementById('user-password');
    const password = passwordFild.value;
    console.log(password);
    if(email == 'mdfuadamir@gmail.com' && password == 'Fuad123'){
        window.location.href = 'bank.html';
    }
    else{
        alert('tui password vila gasos!!! Toka ami tajjo sontan ghoshona korlam');
    }
    
})
const user = document.getElementById('user');
const password = document.getElementById('password');

user.addEventListener('keyup', function (){
    let u_times = document.querySelector('.u_times');
    let u_check = document.querySelector('.u_check');

    if(user.value.length == 0 || user.value.length < 6){
        user.style.border = '1px solid red';
        u_times.style.display = 'block'
        u_check.style.display = 'none'
        return false
    }
    else{
        user.style.border = '1px solid black';
        u_check.style.display = 'block'
        u_times.style.display = 'none'

    }
})

password.addEventListener('keyup', function (){
    let p_times = document.querySelector('.p_times');
    let p_check = document.querySelector('.p_check');

    if(password.value.length == 0 || password.value.length < 6){
        password.style.border = '1px solid red';
        p_times.style.display = 'block'
        p_check.style.display = 'none'
        return false
    }
    else{
        password.style.border = '1px solid black';
        p_check.style.display = 'block'
        p_times.style.display = 'none'

    }
})

function validate(){
    if(user.value.length == 0 || user.value.length < 6){
        document.getElementById("error").innerHTML = 'Please fill the required fields!'
        return false
    }else if(password.value.length == 0 || password.value.length < 6){
        document.getElementById("error").innerHTML = 'Please fill the required fields!'
        return false;
    }else{
        alert('Successfully Logged in')
    } 
}
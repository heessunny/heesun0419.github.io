const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')


login.addEventListener('click', () => {
    if (id.value == 'helloworld') {
        if (password.value == '0000') {
            alert('로그인 되었습니다!')
            location.href="../p1/p1.html"
        }
        else {
            alert('비밀번호를 다시 한 번 확인해주세요!')
            
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }

   
    
})
const A = document.getElementById('A')
const pass = document.getElementById('pass')
let errStack = 0;

pass.addEventListener('click', () => {
    if (A.value == '부귀영화') {
            alert('정답입니다!')
            location.href="../p9/p9.html"
      
    }
    else {
        alert('오답입니다.')
        errStack ++;
    }

    if (errStack >=2&&errStack<5&&A.value!='부귀영화') {
        alert('Hint! 정답은 4글자 ')
    }
    else if (errStack >= 5&&A.value!='부귀영화') {
        alert('Hint! 온앤온')
    }
    
})
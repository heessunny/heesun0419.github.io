const A = document.getElementById('A')
const pass = document.getElementById('pass')
let errStack = 0;

pass.addEventListener('click', () => {
    if (A.value == '존') {
            alert('정답입니다!')
            location.href="../p10/p10.html"
      
    }
    else {
        alert('오답입니다.')
        errStack ++;
    }

    if (errStack >=2&&errStack<5) {
        alert('Hint! 정답은 1글자 ')
    }
    else if (errStack >= 5&&A.value!='존') {
        alert('Hint! 아마...')
    }
    
})
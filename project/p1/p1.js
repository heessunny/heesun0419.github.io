const A = document.getElementById('A')
const pass = document.getElementById('pass')
let errStack = 0;

pass.addEventListener('click', () => {
    if (A.value == '태양') {
            alert('정답입니다!')
            location.href="../p2/p2.html"
      
    }
    else {
        alert('오답입니다.')
        errStack ++;
    }

    if (errStack >=2&&errStack<5&&A.value!='태양') {
        alert('Hint! 정답은 2글자 ')
    }
    else if (errStack >= 5&&A.value!='태양') {
        alert('Hint! 太')
    }
    
    
})

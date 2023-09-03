const A = document.getElementById('A')
const pass = document.getElementById('pass')
let errStack = 0;

pass.addEventListener('click', () => {
    if (A.value == '아미고') {
            alert('정답입니다!')
            location.href="../p8/p8.html"
      
    }
    else {
        alert('오답입니다.')
        errStack ++;
    }

    if (errStack >=2&&errStack<5&&A.value!='아미고') {
        alert('Hint! 정답은 3글자 ')
    }
    else if (errStack >= 5&&A.value!='아미고') {
        alert('Hint! 방탄소년단')
    }
    
})
const A = document.getElementById('A')
const pass = document.getElementById('pass')
let errStack = 0;

pass.addEventListener('click', () => {
    if (A.value == '머리가좀비어서') {
            alert('정답입니다!')
            location.href="../p7/p7.html"
      
    }
    else {
        alert('오답입니다.')
        errStack ++;
    }

    if (errStack >=2&&errStack<5) {
        alert('Hint! 정답은 7글자 ')
    }
    else if (errStack >= 5&&A.value!='머리가좀비어서') {
        alert('Hint! 머리가XXXX')
    }
    
})
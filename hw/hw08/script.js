id=prompt('아이디 입력');
if(id=='std01'){
    password=prompt('비밀번호 입력');
    if(password==='1111'){
        location.href="hw08.01.html"
    }
    else{
        location.href="hw08.02.html"
    }
}
else if(id=='std02'){
    password=prompt('비밀번호 입력');
    if(password==='2222'){
        location.href="hw08.01.html"
    }
    else{
        location.href="hw08.02.html"
    }
}
else if(id=='std03'){
    password=prompt('비밀번호 입력');
    if(password==='3333'){
        location.href="hw08.01.html"
    }
    else{
        location.href="hw08.02.html"
    }
}
else{
    location.href="hw08.02.html"
}
let host = prompt('Enter Username');

if (host === 'Admin') {
    let password = prompt('Enter Password');

    if (password === 'TheMaster') {
        alert('Welcome');
    }
    else if (password === '' || password === null){
        alert('Canceled');
    }
    else {
        alert('Wrong password');
    }
}
else if (host === '' || host === null) {
    alert('Canceled');
}
else {
    alert("I don't know");
}

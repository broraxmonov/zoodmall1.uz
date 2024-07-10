function tekshir(){
    fetch('https://reqres.in/api/users?page=2')
    .then(response => response.json())
    .then(json => {
        var inp1 = document.getElementById('inp1');
        var inp2 = document.getElementById('inp2');
        var error = document.getElementById('error');

        console.log(json.data[0].email);
        console.log(json.data[0].first_name);

       if(inp1.value == json.data[0].email && inp2.value == json.data[0].first_name){
          window.open('profile.html', '_self')
       }
       else{
        error.innerText = "Email yoki parol xato!";
        error.style.fontSize = "14pt";
        error.style.color = "crimson";
       }

    })
}
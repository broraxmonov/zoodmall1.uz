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


fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(json => {
          for(var i=0; i < 4; i++)
          {
            var div_product = document.getElementById('div_product');

            var div = document.createElement('div');
            var div1 = document.createElement('div');
            var img = document.createElement('img');
            var p = document.createElement('p');
            p.innerText = json[i].title;
            img.setAttribute('src', json[i].url);
            img.style.width = "100%";
            div.style.width = "23%"
            div.style.height = "70vh"
            div.style.backgroundColor = "green";

            div1.style.width = "100%"
            div1.style.height = "35vh"
            div1.style.backgroundColor = "red";
          
            div1.appendChild(img);
            div.appendChild(div1);
            div.appendChild(p);
            div_product.appendChild(div);

          }
    });
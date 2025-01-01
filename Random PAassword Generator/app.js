const inputBox=document.getElementById("inputBox");

function generatePassword(){
    let password="";
    let length=10;

    let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase="abcdefghijklmnopqrstuvwxyz";
    let symbols="!@#$%^&*()_+";
    let numbers="1234567890";
    let remaining=uppercase+lowercase+symbols+numbers;

    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];

    while(length>password.length){
       password+=remaining[Math.floor(Math.random()*remaining.length)];
    }

    inputBox.value=password;
    const audio=new Audio;
    audio.src="bruitage-bouton-v1-274125.mp3"
    audio.play();
 
}

  function copy(){
      inputBox.select();
      document.execCommand("copy");
     
  }

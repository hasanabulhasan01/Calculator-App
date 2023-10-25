// function kkk(){
//     document.getElementById("def").innerHTML = "Lorem, ipsum dolor sit amet consectetur";
//     document.getElementById("ttt").style.display = "none";
// }

function press(a){
  document.getElementById("inp").value += a;  
}

function equal(){
    var a = document.getElementById("inp");
    a.value = eval(a.value);
}

function allClear(){
    document.getElementById("inp").value = ' ';
}

function delCharacter(){
    var b = document.getElementById("inp").value;
    document.getElementById("inp").value =b.slice(0, -1);
}
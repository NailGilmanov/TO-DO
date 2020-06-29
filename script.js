let but = document.getElementById('but'),
    res = document.getElementById('result');

let todoListOut = [];
but.onclick = function(){
    if(document.getElementById('in').value == ''){
        alert('Впишите текст заметки!');
        todoListOut.pop(todoListOut[0]);
        return;
    }
            
    let input = document.getElementById('in').value;
    todoListOut.push(input);
    out();
}
        
function out(){
    for(let i = 0; i < todoListOut.length; i++){
        document.getElementById('result').innerHTML += '<div><button id="DELETE" onclick="deleteEl(this.parentNode)"><i class="fas fa-ban"></i></button>' + todoListOut[i] + '<div class="time">' + t + '</div>' + '<hr></div>'; 
        document.getElementById('DELETE').classList.add(i);
        todoListOut.pop(todoListOut[i]);
        document.getElementById('in').value = '';
    }
}

function deleteEl(el){
    el.remove();
}

let d = new Date();
let t = ''; //d.getHours() + ':' + d.getMinutes();
if(d.getMinutes() < 10){
    t = d.getHours() + ':0' + d.getMinutes();
} else {
    t = d.getHours() + ':' + d.getMinutes();
}


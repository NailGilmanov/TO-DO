let but = document.getElementById('but'),
            res = document.getElementById('result');

        let todoListOut = [];
        let todoListDel = [];
        but.onclick = function(){
            if(document.getElementById('in').value == ''){
                alert('Впишите текст заметки!');
                todoListOut.pop(todoListOut[0]);
                return;
            }
            
            let input = document.getElementById('in').value;
            todoListOut.push(input);
            todoListDel.push(input);
            out();
        }
        
        function out(){
            for(let i = 0; i < todoListOut.length; i++){
                document.getElementById('result').innerHTML += '<button id="DELETE"><i class="fas fa-ban"></i></button>' + todoListOut[i] + '<div class="time">' + t + '</div>' + '<hr>'; 
                document.getElementById('DELETE').classList.add(i);
                todoListOut.pop(todoListOut[i]);
                document.getElementById('in').value = '';
                console.log(todoListDel);
            }
        }
        
        let d = new Date();
        let t = ''; //d.getHours() + ':' + d.getMinutes();
        if(d.getMinutes() < 10){
            t = d.getHours() + ':0' + d.getMinutes();
        } else {
            t = d.getHours() + ':' + d.getMinutes();
        }

const  button = document.getElementById('but');
const containerResult  = document.getElementById('result');
const input  = document.getElementById('in');
const state = {
    todoList: []
}
const inputReset = () =>{
    input.value = ''
}
const getCurrentDate = () =>{
    const date = new Date();
    let str = '';
    if(date.getMinutes() < 10){
        str = `${date.getHours()}:0${date.getMinutes()}`
    } else {
        str = `${date.getHours()}:${date.getMinutes()}`
    }
    return str
}

const render = () => {
    const itemList = state.todoList.reverse()
        .map((task) => `<div><button><i class="fas fa-ban"></i></button> ${task.text}<div class="time">${task.date}</div><hr></div>`).join(' ')

    containerResult.innerHTML = itemList;
}
const addTaskTnList = () => {
    if(input.value === '') {
        return
    }
    state.todoList.push({
        id: state.todoList.length,
        text:input.value,
        date: getCurrentDate()
    })
    inputReset()
    render()
}


button.addEventListener('click',addTaskTnList)



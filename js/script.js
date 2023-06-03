let button = document.querySelector('.btn');
let exercises_list = document.querySelector('.exercises_list');
let id = 0;
let arrData = [];

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    arrData.push(JSON.parse(localStorage.getItem(key)));
    let li = document.createElement('li');
    li.className = 'exercise_item';
    li.innerText = arrData[i].value;
    li.id = arrData[i].id;
    exercises_list.append(li);

    let deleteBtn = document.createElement('input');
    deleteBtn.className = 'deleteBtn';
    deleteBtn.type = 'button';
    deleteBtn.value = "\u2716";
    li.append(deleteBtn);
    
    deleteBtn.addEventListener('click', function () {
        deleteBtn.remove();
        li.remove();
        localStorage.removeItem(key);
    })

    let input = document.createElement('input');
    input.className = 'exercise_input';
    input.type = 'text';
    input.placeholder = 'Название упражнения';

    let labelInput = document.createElement('label');
    labelInput.className = 'labelInput';
    labelInput.innerText = '';

    let changeBtn = document.createElement('input');
    changeBtn.className = 'changeBtn';
    changeBtn.type = 'button';
    changeBtn.value = '\u270E';
    li.append(changeBtn);
    changeBtn.addEventListener('click', function () {
        deleteBtn.remove();
        changeBtn.remove();
        button.style.visibility = 'hidden';
        input.value = li.innerText;
        li.replaceWith(input);
        input.focus();

        let changeBtnAdd = document.createElement('input');
        changeBtnAdd.type = 'button';
        changeBtnAdd.className = 'changeBtnAdd';
        changeBtnAdd.value = '\u2714';

        input.addEventListener("input", function() {
            for(let i = 0; i < exercises_list.childElementCount; i++) {
                if(input.value === exercises_list.children[i].innerText) {
                    input.className = 'exercise_input_error';
                    labelInput.innerText = 'Введите другое название';
                    changeBtnAdd.after(labelInput);
                    changeBtnAdd.disabled = true;
                    return;
                }
                else if(input.value === '') {
                    input.className = 'exercise_input_error';
                    labelInput.innerText = 'Поле не должно быть пустым';
                    changeBtnAdd.after(labelInput);
                    changeBtnAdd.disabled = true;
                    return;
                }
                else {
                    input.className = 'exercise_input';
                    labelInput.remove();
                    changeBtnAdd.disabled = false;
                }
            }
        })

        input.after(changeBtnAdd);
        changeBtnAdd.addEventListener('click', function () {
            let changeInput = input.value;
            input.replaceWith(li);
            li.innerText = changeInput;
            changeBtnAdd.remove();
            li.append(deleteBtn);
            li.append(changeBtn);
            button.style.visibility = 'visible';
            let obj = {id:key, value:li.innerText};
            localStorage.setItem(key, JSON.stringify(obj));
        })
    })
}

const addExercise = () => {
    let input = document.createElement('input');
    let li = document.createElement('li');
    let deleteBtn = document.createElement('input');
    let changeBtn = document.createElement('input');
    let btnAdd = document.createElement('input');

    let checkInput = () => {
        for(let i = 0; i < exercises_list.childElementCount; i++) {
            if(input.value === exercises_list.children[i].innerText) {
                input.className = 'exercise_input_error';
                labelInput.innerText = 'Введите другое название';
                btnAdd.after(labelInput);
                btnAdd.disabled = true;
                return;
            }
            else if(input.value === '') {
                input.className = 'exercise_input_error';
                labelInput.innerText = 'Поле не должно быть пустым';
                btnAdd.after(labelInput);
                btnAdd.disabled = true;
                return;
            }
            else {
                input.className = 'exercise_input';
                labelInput.remove();
                btnAdd.disabled = false;
            }
        }
    }

    button.style.visibility = 'hidden';

    input.className = 'exercise_input';
    input.type = 'text';
    input.placeholder = 'Название упражнения';
    exercises_list.append(input);
    input.focus();

    let labelInput = document.createElement('label');
    labelInput.className = 'labelInput';
    labelInput.innerText = '';
    input.addEventListener("input", checkInput);

    btnAdd.type = 'button';
    btnAdd.className = 'btnAdd';
    btnAdd.value = '\u2714';
    exercises_list.append(btnAdd);

    btnAdd.addEventListener('click', function(){

        if(input.value === '') {
            input.className = 'exercise_input_error';
            labelInput.innerText = 'Поле не должно быть пустым';
            btnAdd.after(labelInput);
            btnAdd.disabled = true;
            return;
        }

        let inputInner = input.value;
        input.blur();
        input.remove();
        btnAdd.remove();
        li.className = 'exercise_item';

        li.innerHTML = inputInner;
        exercises_list.append(li);
        
        deleteBtn.className = 'deleteBtn';
        deleteBtn.type = 'button';
        deleteBtn.value = "\u2716";
        li.append(deleteBtn);

        changeBtn.className = 'changeBtn';
        changeBtn.type = 'button';
        changeBtn.value = '\u270E';
        li.append(changeBtn);

        button.style.visibility = 'visible';
        id = Math.floor(Math.random() * Math.pow(10, 9));
        let obj = {id:id, value:li.innerText};
        localStorage.setItem(id, JSON.stringify(obj));
    });

    deleteBtn.addEventListener('click', function () {
        deleteBtn.remove();
        li.remove();
    })

    changeBtn.addEventListener('click', function () {
        deleteBtn.remove();
        changeBtn.remove();
        button.style.visibility = 'hidden';
        li.replaceWith(input);
        input.focus();

        let changeBtnAdd = document.createElement('input');
        changeBtnAdd.type = 'button';
        changeBtnAdd.className = 'changeBtnAdd';
        changeBtnAdd.value = '\u2714';

        input.addEventListener("input", function() {
            for(let i = 0; i < exercises_list.childElementCount; i++) {
                if(input.value === exercises_list.children[i].innerText) {
                    input.className = 'exercise_input_error';
                    labelInput.innerText = 'Введите другое название';
                    changeBtnAdd.after(labelInput);
                    changeBtnAdd.disabled = true;
                    return;
                }
                else if(input.value === '') {
                    input.className = 'exercise_input_error';
                    labelInput.innerText = 'Поле не должно быть пустым';
                    changeBtnAdd.after(labelInput);
                    changeBtnAdd.disabled = true;
                    return;
                }
                else {
                    input.className = 'exercise_input';
                    labelInput.remove();
                    changeBtnAdd.disabled = false;
                }
            }
        })

        input.after(changeBtnAdd);
        changeBtnAdd.addEventListener('click', function () {
            let changeInput = input.value;
            input.replaceWith(li);
            li.innerText = changeInput;
            changeBtnAdd.remove();
            li.append(deleteBtn);
            li.append(changeBtn);
            button.style.visibility = 'visible';
        })
    })
}

button.addEventListener('click', addExercise);
const wrapper = document.querySelector('.wrapper');
wrapper.innerHTML = `
                <h2>To Do List</h2>
                <form class="js-form"><input type="text" placeholder="Input your toDoList" class="js-input"/></form>
                <h3>UnComplete List</h3>
                <ul class="unComplete js-unComplete"></ul>
                <h3>Complete List</h3>
                <ul class="Complete js-Complete"></ul>
                `;

const jsForm = document.querySelector('.js-form'),
    jsInput = document.querySelector('.js-input'),
    jsUnList = document.querySelector('.js-unComplete');


const addUnCompleteList = TodoText => {
    ////변수설정
    const jsUnListChildren = document.createElement('li'),
        jsUnListText = document.createElement('label');

    ////CheckBox
    const jsCheckBox = document.createElement('input');
    jsCheckBox.type = "checkbox";
    jsCheckBox.classList.add('js-checkbox');
    jsUnListChildren.prepend(jsCheckBox);

    ////deleteBtn
    const jsDeleteBtn = document.createElement('button');
    jsDeleteBtn.classList.add('js-delete');
    jsUnListChildren.appendChild(jsDeleteBtn);



    /// li inner label add
    jsUnListText.innerHTML = TodoText;
    jsUnListChildren.appendChild(jsUnListText);

    /// li add
    jsUnList.appendChild(jsUnListChildren);

};

const handleSubmitForm = event => {
    event.preventDefault();
    const TodoText = jsInput.value;
    addUnCompleteList(TodoText);
    jsInput.value = "";
};

jsForm.addEventListener("submit", handleSubmitForm);
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
    jsUnList = document.querySelector('.js-unComplete'),
    jsList = document.querySelector('.js-Complete');

const toDoDelete = event => {
    const eventTarget = event.target;
    const eventParent = eventTarget.parentElement;
    jsUnList.removeChild(eventParent);
};

const toDoEdit = event => {
    const eventTarget = event.target;
    const eventParent = eventTarget.parentElement;
    const jsEditInput = eventParent.querySelector('.js-editInput');
    const toDoText = eventParent.querySelector('label');


    const containClass = eventParent.classList.contains("js-active");
    //contains js-active가 포함되어 있는 지 없는 지 boolean

    if(containClass){
        toDoText.innerHTML = jsEditInput.value;
    }else{
        jsEditInput.value = toDoText.innerHTML;
    }

    eventParent.classList.toggle("js-active");
    ////추가 됐다가 안됐다가
};

const isCheckedList = event => {
    const eventTarget = event.target;
    const eventParent = eventTarget.parentElement;
    ////add
    const parentList = eventParent.parentElement;

    parentList.removeChild(eventParent);
    jsList.prepend(eventParent);

    addEvent(eventParent, isNotCheckedList);
};

const isNotCheckedList = event => {
    const eventTarget = event.target;
    const eventParent = eventTarget.parentElement;
    const parentList = eventParent.parentElement;

    parentList.removeChild(eventParent);
    jsUnList.prepend(eventParent);

    addEvent(eventParent, isCheckedList);
};


const addEvent = (jsUnListChildren, isCheckedList) => {
    const jsDeleteBtn = jsUnListChildren.querySelector('.js-delete'),
        jsEditBtn = jsUnListChildren.querySelector('.js-edit'),
        jsCheckBox = jsUnListChildren.querySelector('.js-checkbox');

    jsDeleteBtn.addEventListener("click", toDoDelete);
    jsEditBtn.addEventListener("click", toDoEdit);
    jsCheckBox.addEventListener("click", isCheckedList);
};


const addUnCompleteList = TodoText => {
    ////변수설정
    const jsUnListChildren = document.createElement('li'),
        jsUnListText = document.createElement('label');

    ////CheckBox
    const jsCheckBox = document.createElement('input');
    jsCheckBox.type = "checkbox";
    jsCheckBox.classList.add('js-checkbox');
    jsUnListChildren.prepend(jsCheckBox);

    ////editBtn
    const jsEditBtn = document.createElement('button'),
        jsEditInput = document.createElement('input');

    /// li inner label add
    jsUnListText.innerHTML = TodoText;
    jsUnListChildren.appendChild(jsUnListText);

    jsUnListChildren.appendChild(jsEditInput);

    ////deleteBtn
    const jsDeleteBtn = document.createElement('button');
    jsDeleteBtn.innerHTML = "deleteBtn";
    jsDeleteBtn.classList.add('js-delete');
    jsUnListChildren.appendChild(jsDeleteBtn);

    ////editBtn
    jsEditInput.type = "text";
    jsEditBtn.innerHTML = "editBtn";
    jsEditBtn.classList.add("js-edit");
    jsUnListChildren.appendChild(jsEditBtn);
    jsEditInput.classList.add("js-editInput");


    /// li add
    jsUnList.appendChild(jsUnListChildren);;

    addEvent(jsUnListChildren, isCheckedList);
    ////Delete와 Edit와 checkbox에 이벤트를 추가할 것인데, 이 셋을 통일 시키는 것은 누구? jsUnListChildren
};

const handleSubmitForm = event => {
    event.preventDefault();
    const TodoText = jsInput.value;
    addUnCompleteList(TodoText);
    jsInput.value = "";
};

jsForm.addEventListener("submit", handleSubmitForm);


////1. className.contains
////2. className.toggle
////3. check => 인자로 받기 but, how working ??
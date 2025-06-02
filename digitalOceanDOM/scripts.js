let button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
    document.body.style.backgroundColor = 'fuchsia';
});

const paragraph = document.createElement('p');
paragraph.textContent = "I'm a brand new paragraph.";

const text = document.createTextNode("I'm a new text node.")

const toDoList = document.querySelector('ul');

const newToDo = document.createElement('li');
newToDo.textContent = 'Do homework';
toDoList.appendChild(newToDo);

const anotherToDo = document.createElement('li');
anotherToDo.textContent = 'Pay bills';
toDoList.insertBefore(anotherToDo, toDoList.firstElementChild);

const modifiedToDo = document.createElement('li');
modifiedToDo.textContent = 'Feed the dog';
toDoList.replaceChild(modifiedToDo, toDoList.children[2]);

toDoList.removeChild(toDoList.lastElementChild);
toDoList.children[1].remove();
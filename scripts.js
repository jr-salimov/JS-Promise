let submit = document.querySelector('.add');
let newTitle = document.querySelector('#new-title');
let newBody = document.querySelector('#new-body');
let news = 100;
for(let i = 0; i < 100; i++) {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
const stylus = document.createElement("div");
stylus.className = "stylus";
document.body.appendChild(stylus);

const titleDiv = document.createElement('div');
titleDiv.innerText = json[i].title;
titleDiv.className = 'title';
stylus.appendChild(titleDiv);

const bodyDiv = document.createElement('div');
bodyDiv.innerText = json[i].body;
bodyDiv.className = 'body';
stylus.appendChild(bodyDiv);
      });
}

submit.addEventListener('click', (sendData) => {
    news++;
    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    id: news,
    title: newTitle.value,
    body: newBody.value,
    userId: 11,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
const stylus = document.createElement("div");
stylus.className = "stylus";
document.body.appendChild(stylus);

const titleDiv = document.createElement('div');
titleDiv.innerText = newTitle.value;
titleDiv.className = 'title';
stylus.appendChild(titleDiv);

const bodyDiv = document.createElement('div');
bodyDiv.innerText = newBody.value;
bodyDiv.className = 'body';
stylus.appendChild(bodyDiv);
  });
});
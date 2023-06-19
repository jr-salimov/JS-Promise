let submit = document.querySelector('.add'); // Add/Publish Button
let newTitle = document.querySelector('#new-title'); // New title for new post
let newBody = document.querySelector('#new-body'); // New text for new post
let news = 0; // id of posts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        for(let i = 0; i < 100; i++) {
const stylus = document.createElement('div');
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

const deleteIt = document.createElement('button');
deleteIt.innerText = 'DELETE';
deleteIt.className = 'del';
stylus.appendChild(deleteIt);

const editItem = document.createElement('button');
editItem.innerText = 'EDIT';
editItem.className = 'del';
stylus.appendChild(editItem);

const saveChanges = document.createElement('button');
saveChanges.innerText = 'SAVE';
saveChanges.className = 'del';
stylus.appendChild(saveChanges);

// Deleting a post
deleteIt.addEventListener('click', (delData) => {
  location.href = '#darken2';
  
  const deleteItem = document.querySelector('.yes');
  const refuse = document.querySelector('.no');

  // Yes
deleteItem.addEventListener('click', (deleteData) => {
  news--;
  fetch('https://jsonplaceholder.typicode.com/posts/i', {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(json => {
    stylus.remove();
   deleteIt.remove();
  })
  location.href = '/index.html#';
});

// No
refuse.addEventListener('click', (refuseIt) => {
  location.href = '/index.html#';
});

});

editItem.addEventListener('click', (changeData) => {
  titleDiv.contentEditable = true;
  bodyDiv.contentEditable = true;
});

saveChanges.addEventListener('click', (saveData) => {
  titleDiv.contentEditable = false;
  bodyDiv.contentEditable = false;
  fetch('https://jsonplaceholder.typicode.com/posts/i', {
    method: 'PATCH',
    body: JSON.stringify({
      title: titleDiv,
      body: bodyDiv,
      id: i
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
});

news++;
  }
});

// Create Post Button
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
const stylus = document.createElement('div');
stylus.className = "stylus";
document.body.appendChild(stylus);

const titleDiv = document.createElement('div');
titleDiv.innerText = json.title;
titleDiv.className = 'title';
stylus.appendChild(titleDiv);

const bodyDiv = document.createElement('div');
bodyDiv.innerText = json.body;
bodyDiv.className = 'body';
stylus.appendChild(bodyDiv);

const deleteIt = document.createElement('button');
deleteIt.innerText = 'DELETE';
deleteIt.className = 'del';
stylus.appendChild(deleteIt);

const editItem = document.createElement('button');
editItem.innerText = 'EDIT';
editItem.className = 'del';
stylus.appendChild(editItem);

const saveChanges = document.createElement('button');
saveChanges.innerText = 'SAVE';
saveChanges.className = 'del';
stylus.appendChild(saveChanges);

// Deleting a post
deleteIt.addEventListener('click', (delData) => {
  location.href = '#darken2';
  
  const deleteItem = document.querySelector('.yes');
  const refuse = document.querySelector('.no');

  // Yes
deleteItem.addEventListener('click', (deleteData) => {
  news--;
  fetch('https://jsonplaceholder.typicode.com/posts/i', {
  method: 'DELETE',
})
  .then(response => response.json())
  .then(json => {
    stylus.remove();
   deleteIt.remove();
  })
  location.href = '/index.html#';
});

// No
refuse.addEventListener('click', (refuseIt) => {
  location.href = '/index.html#';
});

});

editItem.addEventListener('click', (changeData) => {
  titleDiv.contentEditable = true;
  bodyDiv.contentEditable = true;
});

saveChanges.addEventListener('click', (saveData) => {
  titleDiv.contentEditable = false;
  bodyDiv.contentEditable = false;
  fetch('https://jsonplaceholder.typicode.com/posts/i', {
    method: 'PATCH',
    body: JSON.stringify({
      title: titleDiv,
      body: bodyDiv,
      id: i
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
});

news++;
  })
});
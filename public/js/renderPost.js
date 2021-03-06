// const postContainer = document.querySelector('.post-container');
const posts = document.querySelector('.posts');
const postForm = document.querySelector('#post-form');
const postInput = document.querySelector('.post-input');
const imgInput = document.querySelector('.img-input');

const username = document.querySelector('.username');
const render = (data) => {
  data.forEach((i) => {
    const postContainer = document.createElement('div');
    postContainer.setAttribute('class', 'post-container');
    const card = document.createElement('div');
    card.setAttribute('class', 'cardForPost');
    const votes = document.createElement('div');
    votes.setAttribute('class', 'votes');
    const voteUp = document.createElement('button');
    const voteDown = document.createElement('button');
    voteUp.innerHTML = '<i class="fa-solid fa-angle-up"></i>';
    const voteCounter = document.createElement('span');
    voteCounter.setAttribute('class', 'vote-count');
    voteCounter.textContent = '1';
    voteDown.innerHTML = '<i class="fa-solid fa-angle-down"></i>';
    votes.append(voteUp, voteCounter, voteDown);
    card.appendChild(votes);
    postContainer.appendChild(card);
    /// //post
    const post = document.createElement('div');
    post.setAttribute('class', 'post');
    const title = document.createElement('div');
    title.setAttribute('class', 'title');
    const img = document.createElement('img');
    img.setAttribute('class', 'user-img');
    img.src = './assets/Reddit-Logo.png';
    const userName = document.createElement('span');
    userName.setAttribute('class', 'username');
    userName.textContent = i.name;
    const date = document.createElement('span');
    date.setAttribute('class', 'date');
    date.textContent = i.posttime;
    title.appendChild(img);
    title.appendChild(userName);
    title.appendChild(date);
    post.appendChild(title);
    card.appendChild(post);
    const postContent = document.createElement('div');
    postContent.setAttribute('class', 'post-content');
    const content = document.createElement('p');
    content.setAttribute('class', 'content');
    content.textContent = i.post;
    const contentImg = document.createElement('img');
    contentImg.setAttribute('class', 'content');
    contentImg.src = i.postimg;
    postContent.appendChild(content);
    postContent.appendChild(contentImg);
    post.appendChild(postContent);
    posts.appendChild(postContainer);
  });
};
/ /;/// /////////////////////////////////////////////////////////////////

fetch(
  '/allPost',
  {
    method: 'get',
    headers: { 'Content-Type': 'application/json' },
  },
).then((res) => res.json()).then((data) => render(data));

postForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (postInput.value.trim() === '') return;
  const data = {
    post: postInput.value,
    postTime: new Date(),
    postImg: imgInput.value,
  };
  fetch('/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(window.location.reload());
});

fetch('/displayUserName').then((res) => res.json()).then((data) => {
  username.textContent = `Hello ${data.name}`;
});


// fetch(
//   '/allPost',
//   {
//     method: 'get',
//     headers: { 'Content-Type': 'application/json' },
//   },
// ).then((res) => res.json()).then((data) => render(data));

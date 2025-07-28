document.addEventListener('DOMContentLoaded', () => {
  const fetchBtn = document.getElementById('fetch-posts');
  const postsContainer = document.getElementById('posts');

  fetchBtn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((posts) => {
        postsContainer.innerHTML = ''; // Clear previous posts
        posts.forEach((post) => {
          const postElement = document.createElement('div');
          postElement.className = 'post';

          const title = document.createElement('h3');
          title.textContent = post.title;

          const body = document.createElement('p');
          body.textContent = post.body;

          postElement.appendChild(title);
          postElement.appendChild(body);

          postsContainer.appendChild(postElement);
        });
      })
      .catch((error) => {
        postsContainer.innerHTML = `<p class="error">Failed to load posts: ${error}</p>`;
      });
  });
});

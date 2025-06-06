// const blogForm = document.getElementById('blogForm');
// const postsContainer = document.getElementById('postsContainer');

// blogForm.addEventListener('submit', async (e) => {
//   e.preventDefault();

//   const title = document.getElementById('title').value.trim();
//   const content = document.getElementById('content').value.trim();

//   if (title && content) {
//     const post = document.createElement('article');
//     post.classList.add('post');

//     const postTitle = document.createElement('h3');
//     postTitle.textContent = title;

//     const postBody = document.createElement('p');
//     postBody.textContent = content;

//     post.appendChild(postTitle);
//     post.appendChild(postBody);

//     postsContainer.appendChild(post);

//     // Backend ko data bhejne ke liye fetch request
//     try {
//       const response = await fetch('/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ title, content }) // Data ko JSON format me bhejna
//       });

//       if (response.ok) {
//         console.log('Review saved successfully!');
//       } else {
//         console.log('Error saving review');
//       }
//     } catch (err) {
//       console.error('Error:', err);
//     }

//     // Form ko reset karna
//     blogForm.reset();
//   }
// });


const projectForm = document.getElementById('projectForm');
const projectsContainer = document.getElementById('projectsContainer');

projectForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();

  if (name && title && description) {
    // Create frontend project card
    const post = document.createElement('article');
    post.classList.add('post');

    const projectHeader = document.createElement('h3');
    projectHeader.textContent = `${title} by ${name}`;

    const projectDesc = document.createElement('p');
    projectDesc.textContent = description;

    post.appendChild(projectHeader);
    post.appendChild(projectDesc);

    projectsContainer.appendChild(post);

    // Optional: Send to backend
    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, title, description })
      });

      if (response.ok) {
        console.log('Project saved successfully!');
      } else {
        console.log('Error saving project');
      }
    } catch (err) {
      console.error('Error:', err);
    }

    // Reset form
    projectForm.reset();
  }
});

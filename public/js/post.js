const postFormHandler = async (event) => {
    event.preventDefault();
  
    const postTitle = document.querySelector('input[name="title"]').value.trim();
    const postContents = document.querySelector('textarea[name="content"]').value.trim();
  
    if (postTitle && postContents) {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ postTitle, postContents }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('An error occured.');
      }
    }
  };

  document.querySelector('#submit-post').addEventListener('click', postFormHandler);
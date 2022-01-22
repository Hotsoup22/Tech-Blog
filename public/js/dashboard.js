
const newFormHandler = async (event) => {
    event.preventDefault();
    console.log("newform handler")
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    console.log(title, content)
    if ( title && content ) {
		const response = await fetch( '/api/blogposts', {
			method: 'POST',
			body: JSON.stringify( {
				title,
				content
			} ),
			headers: { 'Content-Type': 'application/json' },
		} );

		if ( response.ok ) {
			document.location.replace( '/dashboard' );
		} else {
			alert( 'Please add title and content to blogpost before submitting' );
		}
	}
};

const delButtonHandler = async (event) => {
	if (event.target.hasAttribute('data-id')) {
	  const id = event.target.getAttribute('data-id');
  
	  const response = await fetch(`/api/blogposts/${id}`, {
		method: 'DELETE',
	  });
  
	  if (response.ok) {
		document.location.replace('/dashboard');
	  } else {
		alert('Failed to delete project');
	  }
	}
  };
  
document
    .querySelector('.new-blog-post-form')
    .addEventListener('submit', newFormHandler);
document
  .querySelector('.blog-post-list')
  .addEventListener('click', delButtonHandler);


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

  
  document
    .querySelector('.new-blog-post-form')
    .addEventListener('submit', newFormHandler);
  

// // Required modules
// const router = require( 'express' ).Router();
// // Required files
// const { BlogPost, User } = require( '../../models' );
// const withAuth = require( '../../utils/auth' );

// const blogpostFormSubmit = async ( event ) => {
// 	event.preventDefault();

// 	const title = document.querySelector( '#title-new' ).value.trim();
// 	const content = document.querySelector( '#content-new' ).value.trim();

// 	if ( title && content ) {
// 		const response = await fetch( '/api/blogposts/', {
// 			method: 'POST',
// 			body: JSON.stringify( {
// 				title,
// 				content
// 			} ),
// 			headers: { 'Content-Type': 'application/json' },
// 		} );

// 		if ( response.ok ) {
// 			document.location.replace( '/dashboard' );
// 		} else {
// 			alert( 'Please add title and content to blogpost before submitting' );
// 		}
// 	}
// };

// // Listen for the blogpost form submission
// document
// 	.querySelector( '.post-form' )
// 	.addEventListener( 'submit', blogpostFormSubmit );





const newFormHandler = async (event) => {
    event.preventDefault();
    console.log("newform handler")
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    console.log(title, content)
    if ( title && content ) {
		const response = await fetch( '/api/blogposts/', {
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

//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/blogpost/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/dashboard');
  //     } else {
  //        alert('Failed to delete project');
  //      }
  //   //  }
  // };
  
  document
    .querySelector('.new-blog-post-form')
    .addEventListener('submit', newFormHandler);
  
  // document
  //   .querySelector('.blog-post-list')
  //   .addEventListener('click', delButtonHandler);
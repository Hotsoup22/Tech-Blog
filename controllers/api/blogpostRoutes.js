const router = require('express').Router();
const { BlogPost, User, Comment } = require( '../../models' );
const withAuth = require( '../../utils/auth' );
// GET All Blogpost data with comments and users testing
router.get( '/', async ( req, res ) => {
	try {
		const blogpostData = await BlogPost.findAll( {
			include: [
				{ model: User,
					attributes: ['name'] },
				{ model: Comment,
					include: [
						{ model: User,
							attributes: ['name'] }
					] }
			]
		} );

		res.json( blogpostData );

	} catch ( err ) {
		res.status( 500 ).json( err );
	}
} );
// Create new blogpost
router.post( '/', withAuth, async ( req, res ) => {
	try {
		const blogpostData = await BlogPost.create( {
			...req.body,
			userId: req.session.user_id
		} );

		res.status( 200 ).json( blogpostData );

	} catch ( err ) {
		res.status( 400 ).json( err );
	}
} );
// Display single blogpost with comments
router.get( '/:id', async ( req, res ) => {

	try {

		const blogpostData = await BlogPost.findByPk( req.params.id, {
			include: [
				{ model: User,
					attributes: ['name']},
				{ model: Comment,
					include: [
						{ model: User,
							attributes: ['name'] }
					]}
			]
		});

		const blogpost = blogpostData.get( { plain: true } );
		res.render( 'singleBlogpost', {
			blogpost,
			logged_in: req.session.logged_in
		} );
	} catch ( err ) {
		res.status( 500 ).json( err );
	}
});
// delete blogpost
router.delete('/:id', withAuth, async ( req, res ) => {
	try {
		const blogpostData = await BlogPost.destroy( {
		where:{
			id: req.params.id,
		}
	});
	if (!blogpostData) {
		res.status(404).json({ message: 'No blogpostData found with this id!' });
		return;
	}
		res.status(200).json(blogpostData);
	} catch (err) {
		res.status(500).json(err);
	}
});
// Export
module.exports = router;
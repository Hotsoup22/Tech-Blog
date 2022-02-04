const router = require('express').Router();
const { BlogPost, User, Comment } = require( '../../models' );
const withAuth = require( '../../utils/auth' );

// Create new blogpost
router.post( '/', withAuth, async ( req, res ) => {
	try {
		const blogpostData = await BlogPost.create( {
			...req.body,
			userId: req.session.user_id,
			// date_created: req.session.date_created
		} );

		res.status( 200 ).json( blogpostData );

	} catch ( err ) {
		res.status( 400 ).json( err );
	}
} );

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
const router = require('express').Router();
const { BlogPost, User } = require('../models');
const withAuth = require('../utils/auth')

router.get('/', async (req, res) => {
  try {

    const blogPostData = await BlogPost.findAll({
      include: [
        { model: User},
      ],
     
			
    });

    // Serialize data so the template can read it
     const blogs = blogPostData.map((blogPost) => blogPost.get({ plain: true }));
    // const blogposts = blogPostData.map( serialize );
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// Signup route
router.get( '/signup', async ( req, res ) => {
	if ( req.session.logged_in ) {
		res.redirect( '/' );
		return;
	}

	res.render( 'signup' );
} );




router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: BlogPost }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;

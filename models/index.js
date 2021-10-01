const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');


User.hasMany(BlogPost);
BlogPost.belongsTo(User)

User.hasMany(Comment);
Comment.belongsTo(User);

BlogPost.hasMany(Comment);
Comment.belongsTo(User);

module.exports={User, BlogPost,Comment}

// Required models
// const User = require( './User' );
// const BlogPost = require( './BlogPost' );
// const Comment = require( './Comment' );

// // Associations
// User.hasMany( BlogPost, {
// 	foreignKey: 'userId',
// 	onDelete: 'CASCADE'
// } );
// BlogPost.belongsTo( User, {
// 	foreignKey: 'userId'
// } );
// // -----------------------
// User.hasMany( Comment, {
// 	foreignKey: 'userId',
// 	onDelete: 'CASCADE'
// } );
// Comment.belongsTo( User, {
// 	foreignKey: 'userId'
// } );
// // -----------------------
// BlogPost.hasMany( Comment, {
// 	foreignKey: 'blogpostId',
// 	onDelete: 'CASCADE'
// } );
// Comment.belongsTo( Blogpost, {
// 	foreignKey: 'blogpostId'
// } );

// // Export
// module.exports = { User,
// 	Blogpost,
// 	Comment };
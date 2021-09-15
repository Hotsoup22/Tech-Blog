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
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');


User.hasMany(BlogPost,{
    // foreignKey: 'user_id',
	onDelete: 'CASCADE'
} );

BlogPost.belongsTo(User,{
    // foreignKey: 'user_id',
} );

User.hasMany( Comment,{
//     foreignKey: 'userId',
//     onDelete: 'CASCADE'
 });
Comment.belongsTo(User,{
    // foreignKey:'userId'
});

BlogPost.hasMany(Comment,{
//    foreignKey:'blogpostId',
//    onDelete: 'CASCADE' 
});
Comment.belongsTo(User,{
    // foreignKey:'blogpostId'
});

module.exports={User, BlogPost,Comment}


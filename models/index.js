const BlogPost = require('./BlogPost');
const Comment = require('./Comment');
const User = require('./User');


User.hasMany(BlogPost,{
    foreignKey: 'userId',
	onDelete: 'CASCADE'
} );

BlogPost.belongsTo(User,{
//     foreignKey: 'userId',
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


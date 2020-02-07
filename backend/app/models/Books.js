'use strict';
module.exports = (sequelize, DataTypes) => {
    const Books = sequelize.define('Books', {
      book_name: DataTypes.STRING,
      book_author: DataTypes.STRING
    }, {
        hooks:{
            beforeValidate: function() {
                console.log('hello')
            },
            
            afterValidate: function() {},

            beforeCreate: function() {},

            afterCreate: function() {}
        }
    });
    // Books.associate = function(models) {
    //    // associations can be defined here
    //    Books.belongsTo( models.User );
    // };
    return Books;
  };
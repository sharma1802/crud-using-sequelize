'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Use', {
    name: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    hooks:{
        beforeValidate: function() {
            console.log('beforeValidate')
        },
        
        afterValidate: function() {
          console.log('afterValidate')
        },

        beforeCreate: function() {
          console.log('beforeCreate')
        },

        afterCreate: function() {
          console.log('afterCreate')
        },

        beforeDestroy: function(){
          console.log('beforeDestroy')
        },

        afterDestroy: function(){
          console.log('afterDestroy');
        }
    }
});

  User.associate = function(models) {
    // associations can  definbeed here
    User.hasOne(models.Books, {
      foreignKey: 'userid',
      as: 'userBooks'
    });

    User.hasOne(models.booking, {
      foreignKey: 'userId',
      as: 'userBooking'
    });
  };
  return User;
};


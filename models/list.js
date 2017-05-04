'use strict';
module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define('List', {
    time: DataTypes.STRING,
    event: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        List.hasMany(models.to_do,{
          foreignKey: 'listId',
          as: 'to_do'
        })
      }
    }
  });
  return List;
};

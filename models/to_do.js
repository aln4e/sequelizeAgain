'use strict';
module.exports = function(sequelize, DataTypes) {
  var to_do = sequelize.define('to_do', {
    list_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        to_do.belongsTo(models.List,{
          foreignKey: 'listId',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return to_do;
};

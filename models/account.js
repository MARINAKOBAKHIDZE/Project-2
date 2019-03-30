module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define("Account", {
    type: {type:DataTypes.STRING, allowNull:false},
    balance: {type:DataTypes.DECIMAL(10,2), allowNull:false},
    isOpen: {type:DataTypes.BOOLEAN, allowNull:false},
    acctNumber: {type:DataTypes.INTEGER}

  });

  Account.associate = function(models) {
    Account.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Account;
};

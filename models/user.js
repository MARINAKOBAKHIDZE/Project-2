module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        firstName: {type:DataTypes.STRING, allowNull:false},
        lastName: {type:DataTypes.STRING, allowNull:false},
        addressLine1: {type:DataTypes.STRING, allowNull:false},
        addressLine2: DataTypes.STRING,
        city: {type:DataTypes.STRING, allowNull:false},
        State: {type:DataTypes.STRING, allowNull:false},
        zip: {type:DataTypes.INTEGER, allowNull:false},
        SSN:{type:DataTypes.INTEGER, unique:true},
        DOB: {type:DataTypes.STRING, allowNull:false},
        email: {type:DataTypes.STRING, allowNull:false},
        username: {type:DataTypes.STRING, allowNull:false},
        acctNoCHK: {type:DataTypes.INTEGER, unique:true},
        acctNoSAV: {type:DataTypes.INTEGER, unique:true}
    });

    User.associate = function (models) {
        User.hasMany(models.Account, {
            onDelete: "cascade"
        });
    };

    return User;
};

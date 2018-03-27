module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    JobURL: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Online Application"
    },
    staffing: {
      type: DataTypes.STRING,
      defaultValue: "No"
    },
    agency: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1]
      }
    }
  });
  return Post;
};

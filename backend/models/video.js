const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('video', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    videoUrl: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'video',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "video_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};

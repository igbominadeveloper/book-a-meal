module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.addConstraint('meals', ['name'], {
      type: 'unique',
    })
  ),
  down: (queryInterface, Sequelize) => null,
};

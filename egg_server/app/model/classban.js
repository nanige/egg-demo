module.exports = app => {
    const {STRING} = app.Sequelize;
    const Classban = app.model.define('classban', {
        name: STRING
    })
    return Classban
}
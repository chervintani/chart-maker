let models = require("./schema");

module.exports = function(student, res) {
    models.Visitors.findOne({ name: student}, (err, visitors) => {
        if (err) return res.send(err)
        return res.send(visitors)
    }).catch(err => {
        if (err) {
            console.log(err);
            return res.status(503).json({
                message: "Service unavailable"
            });
        }
    });
};
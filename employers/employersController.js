const employers = require("./employers.js");

exports.save = (req, res) => {
  const newemployer = new employers({
    id: req.body.id,
    name: req.body.name
  });
  newemployer.save().then(res.send(newemployer));
};

exports.employerById = id => {
  return employers.find({id: id}).name;
};

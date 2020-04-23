const employers = require("./employers.js");

exports.save = (req, res) => {
  const newemployer = new employers({
    id: req.body.employeeID,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email
  });
  newemployer.save().then(res.send(newemployer));
};

exports.employerById = id => {
  return employers.find({id: id}).id;
};

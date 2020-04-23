const express = require("express");
const employees = require("./employees");
const bodyParser = require("body-parser");

exports.getAll = (req, res) => {
  employees.find({}, (err, employees) => {
    if (err) {
      res.status(404).json({ msg: "Didn't find any" });
    } else {
      res.render("employeesList", {
        employees: employees
      });
    }
  });
};

exports.deleteById = (req, res) => {
  employees.deleteOne({ _id: req.params.id }).then(res.redirect("/employees"));
};

exports.addemployee = (req, res) => {
  // console.log(req.body);
  const newemployee = new employees({
    employeeID: req.body.employeeID,
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Email: req.body.Email
  });

  newemployee.save().then(res.redirect("/employees"));
};

exports.employeeById = (req, res) => {
  return employees.find({ employeeID: req.params.id }, (err, employee) => {
    if (err) {
      res.status(404).send({ msg: "404 not found" });
    } else {
      res.render("updateemployee", {
        employee: employee[0]
      });
    }
  });
};

exports.updateemployee = (req, res) => {

  employees.updateOne(
    { _id: req.params.id },
    {
      $set: {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email
      }
    }
  ).then(res.redirect("/employees"));
};

function checkemployee(employee) {
  if (
    employee.firstName.replace(" ", "") == null ||
    employee.firstName.replace(" ", "") == "" ||
    employee.lastName.replace(" ", "") == null ||
    employee.lastName.replace(" ", "") == ""
  )
    return false;

  return true;
}

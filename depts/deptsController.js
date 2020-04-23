const express = require("express");
const depts = require("./depts.js");

exports.save = (req, res) => {
  const newdept = new depts({
    code: req.body.code,
    name: req.body.name,
    grade: req.body.grade,
    employees: req.body.employees,
    employerid: req.body.employerid
  });
  
  newdept.save().then(res.send(newdept));
};

exports.getAll = (req, res) => {
  depts.find({}, (err, depts) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.render("deptsList", {
        depts: depts
      });
    }
  });
};

exports.deptByName = (req,res) => {
  depts.findOne({_id: req.body.value}, (err,dept) => {
    depts.find({}, (err, depts) => {
    if (err) {
      res.status(401).send(err);
    } else {
      console.log(depts, dept);
      res.render("deptsList", {
        depts: depts,
        dept: dept
      });
    }
  });
  });
  
};

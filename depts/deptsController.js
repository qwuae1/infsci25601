const express = require("express");
const depts = require("./depts.js");
const employers = require("../employers/employers.js");



// const employees = require("../employees.js");
// const employers = require("../employers.js");
exports.save = (req, res) => {
  const newdept = new depts({
    id: req.body.id,
    name: req.body.name,
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

exports.employeeById = (req, res) => {
  
  
  
  depts.find({ id: req.params.id }, (err, dept) => {
    if (err) {
      res.status(404).send({msg: "404 not found"});
    } else {
      // console.log(dept[0]["employerid"]);

       console.log(dept['employerid']);
      return employers.findOne({ id: req.params.id }, (err, employer) => {
    if (err) {
      res.status(404).send({ msg: "404 not found" });
    } else {
      console.log(employer)
      res.json(employer
      );
    }
  });
      
    }
    ;
  })
  
  
}

    exports.deptByName = (req,res) => {
      depts.findOne({_name: req.body.value}, (err,dept) => {
        depts.find({}, (err, depts) => {
          if (err) {
            res.status(401).send(err);
          } else {
            console.log(depts,dept);
            res.json(dept)

            // res.render("deptsList", {
            //   depts: depts.employees,
            // });
          }
        });
      });

    };
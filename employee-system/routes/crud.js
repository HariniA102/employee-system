const express = require("express");
const router = express.Router();

let employees = [ 
  { id: 1, name: "Rani", email: "rani@gmail.com", ph_number: "9876543210", salary: "25,000", district: "Chennai" },
  { id: 2, name: "Jhon", email: "jhon@gmail.com", ph_number: "9123456780", salary: "30,000", district: "Kanchipuram" }
];
router.get("/", (req, res) => {
  res.json(employees);
});
router.post("/", (req, res) => {
  const newemployees = req.body;
  if (Array.isArray(newemployees)) {
    employees.push(...newemployees);
  }
  else{
    employees.push(newemployees);
  }
  res.status(201).json({
    message: "employees added successfully",
    employees
  });
});
router.put("/", (req, res) => {
  const updates = req.body;
  updates.forEach(update => {
    employees = employees.map(employee =>
      employee.id === update.id
      ? {...employee, district: update.district}
      : employee
    );
  });

  res.json({
    message: "Students updated successfully",
    employees
    });
  });
router.delete("/", (req, res) => {
  const idsToDelete = req.body;
  employees = employees.filter(employee => !idsToDelete.includes(employee.id)
);

  res.json({ 
    message: "Employee deleted successfully",
  employees 
});
});

   module.exports = router;

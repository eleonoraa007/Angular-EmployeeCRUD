var express = require('express')
var router = express.Router();

const employees = [
  {
    id: 1,
    name: 'Jovan Jovic',
    salary: 60000,
    leaves: 5,
    experience: 'Java, CSS, HTML'
  },
  {
    id: 2,
    name: 'Dunja Savic',
    salary: 70000,
    leaves: 8,
    experience: 'Angular, JavaScript'
  },
  {
    id: 3,
    name: 'Mara Maric',
    salary: 65000,
    leaves: 4,
    experience: 'Java'
  }
];

router.get('/', (req, res) => {
  return res.status(200).json(employees);
});

router.post('/', (req, res) => {
  let employee = req.body;
  console.log(employee);
  if (employee.id) {
    return res.status(400)
        .json({msg: 'Employee seems to already have an id assigned'});
  }
  employee.id = employees.length + 1;
  employee.quantity = 0;
  employees.push(employee);
  console.log(employees);
  return res.status(200).json(employee);
});

router.delete('/:id', (req, res) => {
  console.log("Delete")
  let employeeId = req.params.id;
  const foundEmployee = employees.find((employee) => employee.id == employeeId);
  if (foundEmployee) {
    //employees.pop(foundEmployee);
    console.log(employees);
    console.log(foundEmployee.id);
    employees.splice(employees.indexOf(foundEmployee), 1);
    console.log(employees);
    return res.status(200).json({msg: 'Successfully updated cart'});
  }
  return res.status(400).json({msg: 'Employee with id ' + employeeId + ' not found.'});
});

router.patch('/:id', (req, res) => {
  console.log("PATCH");
  let employeeId = req.params.id;
  const foundEmployee = employees.find((employee) => employee.id == employeeId);
  if (foundEmployee) {
    let changeInQuantity = req.body.changeInQuantity;
    foundEmployee.leaves += changeInQuantity;
    console.log(employees);
    return res.status(200).json({msg: 'Successfully updated cart'});
  }
  return res.status(400).json({msg: 'Employee with id ' + employeeId + ' not found.'});
});


module.exports = router;
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    //... More employee records can be added here
    { id: 4, name: 'Candy Smith', age: 30, department: 'IT', salary: 50000 },
    { id: 5, name: 'Ashley Jones', age: 27, department: 'Finance', salary: 60000 },
    { id: 6, name: 'Bob Mark', age: 35, department: 'HR', salary: 45000 },
    { id: 7, name: 'Candice Markhams', age: 30, department: 'IT', salary: 50000 },
  ];

// Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = totalEmployees;

// calculates Salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
  }

// displays hr employees only
  function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

//Displays it employees only
function itEmployees(){
  const ItEmployees = employees.filter(employee => employee.department === 'IT');
  const itemployeesDisplay = ItEmployees.map((employee,index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
document.getElementById('employeesDetails').innerHTML = itemployeesDisplay;

}

// find employee id button
function findEmployeeById(employeeId){
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
    }
}


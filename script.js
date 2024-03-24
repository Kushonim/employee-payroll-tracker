// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Creating an array to store the employee data
// let employeeData = [];

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  // Creating an array to store the employee data
  let employeeData = [];

  while (true) {
    // Prompts the user to input employee data
    const firstName = prompt("Enter first name: ");
    const lastName = prompt("Enter last name: ");
    const salary = prompt("Enter salary: ");
    
    // Check to see if they'd like to add more employees or quit program
    if (firstName === null || lastName === null || isNaN(salary)) {
      console.log("Sorry, one of your inputs aren't valid. Please try again.", '\n', 'TIP: Make sure NOT to include "$" in your salary input')
      break;
    }

    // Initializes the employee object
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };

    // Adds the employee's data to the end of the array
    employeeData.push(employee);

    // Checks if the user wants to add more employees or not
    const askForMore = confirm("Do you want to add another employee? ");
    console.log("quit", askForMore);
    if (!askForMore) {
      break;
    }
  }

  return employeeData;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  // Initialize summation of salaries
  let salarySum = 0;

  // A loop that goes through the employees array and obtains the salary data
  for (let i = 0; i < employeesArray.length; i++) {
    salarySum += parseFloat(employeesArray[i].salary);
  }

  // Variable that stores the average salary by dividing the summation by however many employees inputted
  let avgSalary = salarySum / employeesArray.length;

  return console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${avgSalary}`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // Using the built-in Math. functions, finds a random indice in the employee array
  let randIndex = Math.floor(Math.random() * employeesArray.length);

  // Gets the random employee's data at the selected index
  let getEmployeeFirstName = employeesArray[randIndex].firstName;
  let getEmployeeLastName = employeesArray[randIndex].lastName;

  return console.log(`Congratulations to ${getEmployeeFirstName} ${getEmployeeLastName}, our random winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

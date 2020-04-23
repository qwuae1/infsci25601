# Models

### employees

{Stduent Id, First Name, Last Name, Email, CreatedAt}

### depts

{id, code, name, grade, stduents, employersid}

### employers

{id, name}

# RESTFUL API

### Get PROCESS.env.URL/employees

- Get all employees and render into employeesList page.
- Response: 200 [{id,name,email, createdAt}...]

### Get PROCESS.env.URL/employee/:id/delete

- Glitch doesn't suport app.delete so I have to change as get. Delete employee by id.
- Response: 200
- False: 403 {"msg": "employee cannot find"}

### Post PROCESS.env.URL/employee

- Add a new employee into array.
- Response: 200
- False: 404 {"msg": "Input is not valid"}

### Post PROCESS.env.URL/employee/:id

- Glitch doesn't support app.put so I have to change as post.
- Response: 200
- False: 403 {"msg": "employee cannot find"}

### Get PROCESS.env.URL/depts

- Get all depts and render into deptSearch page.
- Response: 200 [{id, code, name, grade, employee, employer}...]

### Post PROCESS.env.URL/depts/selectedValue

- Get dept id from selecter and render into deptsList page.
- Response: 200 [{depts, dept, employeeName, employer}...]

# Pages

1. index.jsp Home Page
2. employeesList.jsp Show employees in a list
3. deptSearch.jsp Select all depts in Pitt
4. deptsList.jsp Show select results
5. updateemployee.jsp A sepearte page for updating

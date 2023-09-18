
export const updateProperties = (employeeData) => ({
  type: "employees/updateProperties",
  payload: employeeData,
});


export const addEmployee = (employeeData) => ({
  type: "employees/addEmployee",
  payload: employeeData,
});

export const removeEmployee = (employeeId) => ({
  type: "employees/removeEmployee", 
  payload: employeeId,
});



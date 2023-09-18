import React from "react";
import { useDispatch } from "react-redux";
import Form from "components/form/Form.js";
import logo from "assets/logo_sans_fond.png";
import { addEmployee } from "redux/actions.js";

const AddEmployee = () => {
  const dispatch = useDispatch();

  const handleNewEmployee = (employeeData) => {
    dispatch(addEmployee(employeeData));
  };

  return (
    <>
      <section className="create">
        <div className="create__wrapperForm">
          <h1 className="create__name">HRNet</h1>
          <img
            className="create__logo"
            src={logo}
            alt="logo Hr-net"
            width={150}
            height={88}
          />
          <h2 className="create__title">Create Employee</h2>
        </div>
        <Form handleNewEmployee={handleNewEmployee} />
      </section>
    </>
  );
};

export default AddEmployee;

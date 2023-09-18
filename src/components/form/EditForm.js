import React, { useState, useEffect } from "react";
import { Modal } from "banby-modal-customize-react";

const EditForm = ({ employeeData, onSave, onCancel }) => {
  useEffect(() => {
    console.log("Initial Employee Data:", employeeData);
    // Le reste de votre code d'effet
  }, [employeeData]);

  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [formData, setFormData] = useState({
    street: employeeData.street || "",
    city: employeeData.city || "",
    zipCode: employeeData.zipCode || "",
  });

  const handleChangeEmpl = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmitEmpl = (e) => {
    e.preventDefault();
    const updatedEmployee = { ...formData, id: employeeData.id };
    console.log("Form Data After Save:", updatedEmployee);
    onSave(updatedEmployee);
    closeModalEdit();
  };

  const handleCancelEdit = () => {
    console.log("Cancel button clicked");
    setFormData({
      street: employeeData.street || "",
      city: employeeData.city || "",
      zipCode: employeeData.zipCode || "",
    });
    onCancel();
  };

  const closeModalEdit = () => {
    setIsModalOpenEdit(false);
  };

  return (
    <>
      <section className="editForm">
        <h2 className="editForm__title">modification de l'employé</h2>
        <p className="editForm__subtitle">
          <strong>4 champs vous sont proposés pour les modifications</strong>
        </p>

        <form className="editForm__input" onSubmit={handleSubmitEmpl}>
          <div className="form-group">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChangeEmpl}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChangeEmpl}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChangeEmpl}
            />
          </div>
          <div className="editForm__buttons">
          <button type="submit" className="edit_save">Save</button>
          <button type="button" onClick={onCancel} className="edit_cancel">Cancel</button>
          </div>
        </form>
        <Modal
          isOpen={isModalOpenEdit}
          onClose={closeModalEdit}
          onCancel={handleCancelEdit}
          onSave={onSave}
        />
      </section>
    </>
  );
};

export default EditForm;

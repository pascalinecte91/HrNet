import React, { useState, useEffect } from "react";
import logo from "assets/logo_sans_fond.png";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "data/column.js";
// Components
import Pagination from "components/pagination/Pagination.js";
import EmployeeSearch from "components/search/EmployeeSearch.js";
import { customStyles } from "components/customDataTable/dataTableStyles.js";
import DataTable from "react-data-table-component";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import mockEmployed from "data/mockEmployed.js";
import { removeEmployee } from "redux/actions.js";
import { Modal } from "banby-modal-customize-react";
import { updateProperties } from "redux/actions.js";
import EditForm from "components/form/EditForm.js";

/**
 * @Composant pour afficher la liste des employés.
 * @returns {JSX.Element} Liste des employés.
 */
const ListEmployees = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [searchValue, setSearchValue] = useState("");

  const employees = useSelector((state) => state.employees.employees);
  // console.log("Liste des employés dans le state Redux :", employees);

  const [modalOpen, setModalOpen] = useState(false);

  const [modalTitle, setModalTitle] = useState("");
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  /**
   * Gère la recherche d'employés en fonction de la valeur de recherche.
   * @param {string} value - La valeur de recherche.
   */
  const handleSearch = (value) => {
    setSearchValue(value);
    setCurrentPage(0);
  };

  // Combiner à la fois les employés existants et les nouveaux employés
  const allEmployees = [...employees, ...mockEmployed].map((employee) => ({
    ...employee,
    showDeleteMessage: false,
  }));

  /**
   * Filtre les employés en fonction de la valeur de recherche.
   * @type {Array} Liste des employés filtrés.
   */
  const filteredItems = allEmployees.filter((employee) => {
    const lastNameLowercase = employee.lastName.toLowerCase();
    const searchValueLowercase = searchValue.toLowerCase();
    return lastNameLowercase.startsWith(searchValueLowercase);
  });

  const displayedCurrentItems = filteredItems.slice(startIndex, endIndex);

  // Réinitialise la page actuelle à 0 chaque fois que la valeur de recherche change.
  useEffect(() => {
    setCurrentPage(0);
  }, [searchValue]);

  // Gère le changement du nombre d'éléments par page.
  const handleItemsPerPageChange = (event) => {
    const { value } = event.target;
    setItemsPerPage(parseInt(value, 10));
    setCurrentPage(0);
  };

  const handleDeleteEmployee = (employee) => {
    console.log("Suppression de l'employé :", employee);
    // Obtenez l'ID de l'employé à supprimer
    const employeeId = employee.id;
    console.log("ID de l'employé à supprimer :", employeeId);

    if (employees.some((emp) => emp.id === employeeId)) {
      dispatch(removeEmployee(employeeId));
      setModalTitle("L'employé a été supprimé");
      setModalOpen(true);
    } else {
      setModalTitle("Suppression interdite ! Employé mockEmployed.");
      setModalOpen(true);
    }
  };
  const handleSaveEmployee = (updatedEmployee) => {
    // console.log("Save button clicked");
    dispatch(updateProperties(updatedEmployee));

    setIsEditing(false);
    setEditingEmployee(updatedEmployee);

  };

  const handleCancelEdit = () => {
    console.log("Save button clicked");
    setIsEditing(false);
  };

  const handleEditEmployee = (employee) => {
    console.log("Editing Employee Data:", employee);
    // Obtenez l'ID de l'employé à modifier
    const employeeId = employee.id;
    console.log("ID de l'employé à modifier :", employeeId);
  
    if (employees.some((emp) => emp.id === employeeId)) {
      setEditingEmployee(employee);
      setIsEditing(true);
    } else {
      setModalTitle("Modification interdite ! Employé mockEmployed.");
      setModalOpen(true);
    }
  };
  
  const employeTableCol = [
    ...columns,
    {
      name: "Actions",
      cell: (row) => (
        <div className="action-cell">
          <button
            onClick={() => handleDeleteEmployee(row)}
            aria-label="Delete"
            style={{
              border: "none",
              paddingRight: "5px",
              backgroundColor: "white",
            }}
          >
            <FaTrashAlt size={15} color="red" />
          </button>
          <button
            onClick={() => handleEditEmployee(row)} aria-label="Edit"
            style={{ border: "none", paddingLeft: "5px", backgroundColor: "white",}}>
            <FaPencilAlt size={15} color="blue" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="list">
        <h2 className="list__name">HRNet</h2>
        <img
          className="list__logo"
          src={logo}
          alt="logo appli"
          width={200}
          height={170}
        />
        <div className="list__change">
          <h2 className="list__title">List Employee</h2>
        </div>
      </section>
      {!isEditing && (
      <section className="pagination-search">
        <div className="pagination-search__toggle">
          <span>Nbre par page : </span>
          <select
            className="page"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="pagination-search__lot">
          <Pagination
            pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
          <EmployeeSearch onSearch={handleSearch} />
          <div className="pagination-search__number">
            {Math.min(filteredItems.length, endIndex)} / {filteredItems.length}{" "}
            salariés
          </div>
        </div>
      </section>
      )}
      {isEditing ? (
        <EditForm
          employeeData={editingEmployee}
          onSave={handleSaveEmployee}
          onCancel={handleCancelEdit}
          isEditing={isEditing}
          
        />
      ) : (
        <DataTable
          columns={employeTableCol}
          data={displayedCurrentItems}
          customStyles={customStyles}
        />
      )}

      {modalOpen && (
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          modalTitle={modalTitle}
          modalClassName="modal-title"
          modalStyle={{
            width: "700px",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "5px",
            fontSize: "13px",
          }}
        ></Modal>
        
      )}
    </>
  );
};

export default ListEmployees;

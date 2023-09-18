
export const columns = [
  /**
   * Colonne du prénom.  (Les commentaires pour les autres colonnes suivent le même modèle)
   * @type {object}
   * @property {string} name - Le nom de la colonne ("First Name").
   * @property {function} selector - Fonction pour extraire la valeur de la colonne à partir de la ligne.
   * @property {boolean} sortable - Indique si la colonne est triable.
   * @property {function} sortFunction - Fonction de tri personnalisée pour trier les valeurs de la colonne.
   * @property {function} cell - Fonction pour afficher le contenu de la cellule de la colonne.
   */
  {
    name: "First Name",
    selector: (row) => row.firstName,
    sortable: true,
    sortFunction: (a, b) => a.firstName.localeCompare(b.firstName),
    cell: (row) => (
      <span>
        {row.firstName.charAt(0).toUpperCase() + row.firstName.slice(1)}
      </span>
    ),
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
    sortable: true,
    sortFunction: (a, b) => a.lastName.localeCompare(b.lastName),
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
    sortFunction: (a, b) => {
      //La méthode join est  utilisée pour transformer le tableau en une chaîne de caractères
      //au format compatible Date de JavaScript, qui permet de créer un objet Date
      const dateA = a.startDate.split("/").reverse().join("-");
      const dateB = b.startDate.split("/").reverse().join("-");
      return new Date(dateA) - new Date(dateB);
    },
  },
  {
    name: "Department",
    selector: (row) => row.department,
    sortable: true,
    sortFunction: (a, b) => a.department.localeCompare(b.department),
  },
  {
    name: "Date of Birth",
    selector: (row) => row.dateOfBirth,
    sortable: true,
    sortFunction: (a, b) => {
      const dateA = a.dateOfBirth.split("/").reverse().join("-");
      const dateB = b.dateOfBirth.split("/").reverse().join("-");
      return new Date(dateA) - new Date(dateB);
    },
  },
  {
    name: "Street",
    selector: (row) => row.street,
    sortable: true,
    sortFunction: (a, b) => a.street.localeCompare(b.street),
  },
  {
    name: "City",
    selector: (row) => row.city,
    sortable: true,

    sortFunction: (a, b) => a.city.localeCompare(b.city),
  },
  {
    name: "State",
    selector: (row) => row.state,
    sortable: true,
    sortFunction: (a, b) => a.state.localeCompare(b.state),
  },
  {
    name: "Zip Code",
    selector: (row) => row.zipCode,
    sortable: true,
    sortFunction: (a, b) => a.zipCode.localeCompare(b.zipCode),
  },
];

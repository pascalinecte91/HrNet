import React, { useState, useRef, useEffect } from "react"; 
import { FaCalendarAlt as CalendarIcon } from "react-icons/fa"; 
// external components
import Calendar from "react-calendar"; 
import "react-calendar/dist/Calendar.css"; 


/**
 * @Composant fonctionnel React qui affiche un champ de saisie de date avec un calendrier.
 * @param {Object} props - Les propriétés passées au composant DatePicker.
 * @param {string} props.id - L'identifiant du champ de saisie.
 * @param {string} props.content - Le contenu du label.
 * @param {string} props.name - Le nom du champ de saisie.
 * @param {string} props.date - La date sélectionnée.
 * @param {Function} props.handleChange - La fonction à exécuter lors du changement de la date.
 * @param {Function} props.handleDateChange - La fonction à exécuter lors de la sélection d'une date dans le calendrier.
 */
const DatePicker = ({
  id,
  content,
  name,
  date,
  handleChange,
  handleDateChange,
  placeholder,
}) => {
  //  gérer la valeur du calendrier
  const [value, setValue] = useState(new Date());

  // État : si le calendrier est visible ou non
  const [visible, setVisible] = useState(false);

  // Référence à l'élément du calendrier pour le clic en dehors du composant
  const calendarDate = useRef(null);

  // affiche le calendrier
  const showCalendar = () => {
    setVisible(true);
  };

  // pour fermer le calendrier et mettre à jour la date sélectionnée
  const closeCalendar = (value) => {
    setValue(value);
    setVisible(false);
    handleDateChange(name, formatDate(value));
  };

  // formater la date en "JJ/MM/AAAA" qui n'est pas dans le component externe
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // pour le changement de l'input de la date
  const handleInputChange = (e) => {
    handleChange(e);
  };

  // la fermeture du calendrier en dehors du composant quad on clic
  useEffect(() => {
    // handleClickOutside va détecter les clics en dehors du calendrier.
    // handleClickOutside  détecte si on a cliqué en dehors du calendrier (calendarDate.current).
    // Si oui, le calendrier est caché  la valeur à false.
    //ferme le calendrier auclique en dehors.

    const handleClickOutside = (e) => {
      if (calendarDate.current && !calendarDate.current.contains(e.target)) {
        setVisible(false); // calendrier false visible ou pas
        // calendarDate.current.contains(e.target)va si l'élément qu on  a cliqué (e.target)
        // est à l'intérieur  du calendrier (calendarDate.current).
      }
    };
    // j'ajoute un ecouteur d'evenment en utilisant mousedown pour le clic souris
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <label htmlFor={id}>{content}</label>
      <div className="input-container">
        <input
          className="input_datepicker"
          pattern="[0-9]{2}/[0-9]{2}/[0-9]{4}"
          id={id}
          type="text"
          name={name}
          value={date}
          onChange={handleInputChange}
          onClick={showCalendar}
          placeholder={placeholder}
        />
        {/* Affichage du calendrier si visible */}
        {visible && (
          <div ref={calendarDate} className="calendar-container">
            <Calendar
              onChange={closeCalendar}
              value={value}
              className="customCalendar"
              tileClassName="customTile"
            />
          </div>
        )}

        <div className="icon-container">
          <CalendarIcon className="calendar-icon" onClick={showCalendar} />
        </div>
      </div>
    </div>
  );
};

export default DatePicker;

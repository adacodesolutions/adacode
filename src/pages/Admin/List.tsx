import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const List = ({ studentList }) => {
  const handleDelete = () => {
    console.log("Delete");
  };
  const handleStatus = ({ item }) => {};
  return (
    <div className="studentlist_container">
      <table>
        <tr>
          <th>Id</th>
          <th>Student Name</th>
          <th>Phone Number</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
        {studentList.map((item, index) => (
          <tr key={index}>
            <td>{index}</td>
            <td>{item.studentname}</td>
            <td>{item.phonenumber}</td>
            <td>{item.isCalled ? <>Called</> : <>Not Called</>}</td>
            <td className="table_icons_container">
              <a href={`tel:+91${item.phonenumber}`}>
                <button
                  className="phone-icon"
                  onClick={() => handleStatus(item.phonenumber)}
                >
                  <FaPhoneAlt />
                </button>
              </a>
              <a href={`http://wa.me/91${item.phonenumber}`}>
                <button className="whatsapp-icon">
                  <FaWhatsapp />
                </button>
              </a>
              <button
                onClick={() => handleDelete(index)}
                className="delete-icon"
              >
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default List;

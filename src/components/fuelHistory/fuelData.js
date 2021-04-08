import React, { useState } from "react";
import del from "../../assets/images/delete.svg";
import editimg from "../../assets/images/edit.svg";
import "./fuelData.scss";
import { deleteUser } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import Edit from "../edit/edit";

//for review
const FuelData = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.itemReducer.items);
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState("");

  // mpdal
  const handleShowModal = (x) => {
    setShowModal(toggleShowModal);
    if (showModal === false) {
      setItem(x);
    }
  };

  const toggleShowModal = () => {
    return {
      showModal: setShowModal(!showModal),
    };
  };

  return (
    <>
      <div className="maindiv">
        <table className="content-table">
          <thead>
            <tr>
              <th>Vehicle</th>
              <th>Time</th>
              <th>Total KM</th>
              <th>Volume</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>
                  {item.name} <br />
                  {item.status === "Out Of service" ? (
                    <span style={{ color: "red" }}>{item.status}</span>
                  ) : item.status === "In shop" ? (
                    <span style={{ color: "#C1931B" }}>{item.status}</span>
                  ) : item.status === "Active" ? (
                    <span style={{ color: "green" }}>{item.status}</span>
                  ) : (
                    ""
                  )}
                </td>
                <td>{item.time} </td>
                <td>{item.Total_km}</td>
                <td>{item.volume}</td>
                <td>{item.cost}</td>
                <td>
                  <tc style={{ marginRight: "27px" }}>
                    <i
                      onClick={() =>
                        handleShowModal([
                          item.name,
                          item.time,
                          item.Total_km,
                          item.volume,
                          item.cost,
                          item.id,
                        ])
                      }
                    >
                      <img
                        alt="edit item"
                        src={editimg}
                        style={{ cursor: "pointer" }}
                      />
                    </i>
                  </tc>
                  <tc>
                    <i onClick={() => dispatch(deleteUser(item.id))}>
                      <img
                        alt="delete item"
                        src={del}
                        style={{ cursor: "pointer" }}
                      />
                    </i>
                  </tc>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* -------------- modal------------ */}
        <div>
          <Edit show={showModal} exit={handleShowModal} info={item} />
        </div>
      </div>
    </>
  );
};

export default FuelData;

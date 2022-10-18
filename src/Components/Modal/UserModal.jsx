import { Button } from "@mui/material";
import React from "react";
import toast from "react-hot-toast";
import { IoClose } from "react-icons/io5";
import { useTheme } from "../../context/themeContext";
import { useUserData } from "../../context/UserContext";
import { addUserData } from "../../Services/addUser";
import "./modal.css";

export const UserModal = ({ setIsOpen }) => {
  const { userData, setUserData, dispatch, addUser } = useUserData();
  const { theme } = useTheme();

  const changeHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };
  const clickHandler = () => {
    if (
      userData.email === "" ||
      userData.first_name === "" ||
      userData.last_name === ""
    ) {
      toast("please fill all the data", { icon: "✔" });
    } else {
      setUserData({ email: "", first_name: "", last_name: "" });
      setIsOpen(false);
      addUser(userData);
    }
  };
  const cancelHandler = () => {
    setIsOpen(false);
    setUserData({ email: "", first_name: "", last_name: "" });
  };
  return (
    <div className="modal-background">
      <div
        className="modal-container create-note-modal"
        style={{ backgroundColor: theme === "light" ? "black" : "white" }}
      >
        <header className="modal-header flex-center">
          <h3>ADD USER</h3>
          <button className="close-icon" onClick={cancelHandler}>
            <IoClose />
          </button>
        </header>
        <form className="add-note-container">
          <input
            type="text"
            className="note-title"
            placeholder="email"
            name="email"
            onChange={changeHandler}
            value={userData.email}
          />
          <input
            id="note-desc"
            className="note-select"
            placeholder="first name"
            name="first_name"
            onChange={changeHandler}
            value={userData.first_name}
          />
          <div className="add-note-footer">
            <div className="note-select">
              <input
                type="text"
                className="note-tagline"
                placeholder="last_name"
                name="last_name"
                onChange={changeHandler}
                value={userData.last_name}
              />

              <Button variant="contained" onClick={clickHandler}>
                Add
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

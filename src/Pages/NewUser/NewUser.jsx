import React from "react";
import "./NewUser.css";

const NewUser = () => {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="john Smith" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="ashik@gmail.com" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Phone</label>
          <input type="text" placeholder="+00 000 0000" />
        </div>
        <div className="newUserItem">
          <label htmlFor="">Address</label>
          <input type="text" placeholder="Yunnan | China" />
        </div>
        <div className="newUserItem">
          <label>Genter</label>
          <div className="newUserGender">
            <input type="radio" name="genter" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="genter" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="genter" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelcet" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <button className="newUserButton">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;

import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const MOCK_API_URL = "https://64409916792fe886a891fe21.mockapi.io/NewDod";
  const [users, setUsers] = useState([]);

  const [newUserName, setNewUsername] = useState("");
  const [newUserBreed, setNewUserBreed] = useState("");
  const [newUserAvailability, setNewUserAvailability] = useState("");

  // update
  const [updatedName, setUpdatedUsername] = useState("");
  const [updatedBreed, setUpdatedBreed] = useState("");
  const [updatedAvailability, setUpdatedAvailability] = useState("");

  // console.log(users)

  function getUsers() {
    fetch(MOCK_API_URL)
      .then((data) => data.json())
      .then((data) => setUsers(data));
  }

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  function deleteUser(id) {
    fetch(`${MOCK_API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => getUsers());
  }

  function postNewUser(e) {
    e.preventDefault();

    // console.log(newUserName, newUserBreed, newUserAvailability);

    fetch(MOCK_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newUserName,
        breed: newUserBreed,
        availability: newUserAvailability,
      }),
    }).then(() => getUsers());
  }

  function updateUser(e, userObject) {
    e.preventDefault();

    let updatedUserObject = {
      ...userObject,
      name: updatedName,
      breed: updatedBreed,
      availability: updatedAvailability,
    };

    fetch(`${MOCK_API_URL}/${userObject.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUserObject),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => getUsers());
  }

  return (
    <div className="App">
      {}
      <form>
        <h3>New Dog Form</h3>
        <label>Name</label>
        <input onChange={(e) => setNewUsername(e.target.value)}></input>
        <label>Breed</label>
        <input onChange={(e) => setNewUserBreed(e.target.value)}></input>
        <label>Availability</label>
        <input onChange={(e) => setNewUserAvailability(e.target.value)}></input>
        <button onClick={(e) => postNewUser(e)}>Submit</button>
      </form>

      {}
      {users.map((user, index) => (
        <div className="userContainer" key={index}>
          <div>
            Name: {user.name} <br></br>
            Breed: {user.breed} <br></br>
            Availability: {user.availability} <br></br>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </div>
          <form>
            <h3> Update Dog Information</h3>
            <label>Update Name</label>
            <input onChange={(e) => setUpdatedUsername(e.target.value)}></input>
            <br></br>

            <label>Update Breed</label>
            <input onChange={(e) => setUpdatedBreed(e.target.value)}></input>
            <br></br>

            <label>Update availability</label>
            <input
              onChange={(e) => setUpdatedAvailability(e.target.value)}
            ></input>
            <br></br>
            <button onClick={(e) => updateUser(e, user)}>Update</button>
          </form>
        </div>
      ))}
    </div>
  );
}

export default App;

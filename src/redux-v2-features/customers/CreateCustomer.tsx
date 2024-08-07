import "../styles.css";
import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "../../redux-v2/reducers/feature-slices/customerSlice";
import { Dispatch } from "redux";

function Customer() {
  const [fullName, setFullName]:[string, React.Dispatch<React.SetStateAction<string>>] = useState("");
  const [nationalID, setNationalID]: [string, React.Dispatch<React.SetStateAction<string>>] = useState("");

  const dispatch: Dispatch = useDispatch();

  function handleClick() {
    if(!fullName || !nationalID) return;
    dispatch(createCustomer({ fullName, nationalID }))
  }

  return (
    <div>
      <h2>Create new customer</h2>
      <div className="inputs">
        <div>
          <label>Customer full name</label>
          <input
            value={fullName}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFullName(e.target.value)}
          />
        </div>
        <div>
          <label>National ID</label>
          <input
            value={nationalID}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNationalID(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Create new customer</button>
      </div>
    </div>
  );
}

export default Customer;

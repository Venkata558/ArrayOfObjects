import React, { useState } from "react";

function MyComp() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handleYearChange(e) {
    setCarYear(e.target.value);
  }

  function handleMakeChange(e) {
    setCarMake(e.target.value);
  }

  function handleModelChange(e) {
    setCarModel(e.target.value);
  }

  return (
    <div className="container">
      <h2>List of Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li
            className="listEle"
            key={index}
            onClick={() => handleRemoveCar(index)}
          >
            {car.year}
            {car.make}
            {car.model}
          </li>
        ))}
      </ul>
      <input
        className="inp"
        type="number"
        value={carYear}
        onChange={handleYearChange}
      />{" "}
      <br />
      <input
        className="inp"
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter Car Make"
      />
      <br />
      <input
        className="inp"
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter Car Model"
      />
      <br />
      <button className="btn" onClick={handleAddCar}>
        Add Car
      </button>
    </div>
  );
}
export default MyComp;

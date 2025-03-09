import React, { useState } from "react";
import axios from "axios";
import "./AddHerb.css";

const AddHerb = () => {
  const [herbData, setHerbData] = useState({
    name: "",
    botanicalName: "",
    location: {
      state: "",
      region: "",
      latitude: "",
      longitude: "",
    },
    growthConditions: {
      temperature: {
        min: "",
        max: "",
      },
      humidity: {
        min: "",
        max: "",
      },
      sunlight: "",
    },
    uses: [],
    symptoms: [],
    preparationInstructions: "",
    foundInMedicines: [],
  });
  
  const [image, setImage] = useState(null);
  const [useInput, setUseInput] = useState("");
  const [medicineInput, setMedicineInput] = useState("");
  const [symptomInput, setSymptomInput] = useState({
    name: "",
    description: "",
    instructions: "",
  });

  const handleChange = (e, section, subsection, field) => {
    if (section) {
      if (subsection) {
        setHerbData((prevData) => ({
          ...prevData,
          [section]: {
            ...prevData[section],
            [subsection]: {
              ...prevData[section][subsection],
              [field]: e.target.value,
            },
          },
        }));
      } else {
        setHerbData((prevData) => ({
          ...prevData,
          [section]: {
            ...prevData[section],
            [e.target.name]: e.target.value,
          },
        }));
      }
    } else {
      setHerbData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.value,
      }));
    }
  };
  

  // const handleChange = (e, section, subsection, field) => {
  //   console.log(e, section, subsection, field);
  //   if (section) {
  //     if (subsection) {
  //       setHerbData({
  //         ...herbData,
  //         [section]: {
  //           ...herbData[section],
  //           [subsection]: {
  //             ...herbData[section][subsection],
  //             [field]: e.target.value,
  //           },
  //         },
  //       });
  //     } else {
  //       setHerbData({
  //         ...herbData,
  //         [section]: {
  //           ...herbData[section],
  //           [e.target.name]: e.target.value,
  //         },
  //       });
  //     }
  //   } else {
  //     setHerbData({ ...herbData, [e.target.name]: e.target.value });
  //   }
  // };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const addUse = () => {
    if (useInput.trim()) {
      setHerbData({ ...herbData, uses: [...herbData.uses, useInput.trim()] });
      setUseInput("");
    }
  };

  const addMedicine = () => {
    if (medicineInput.trim()) {
      setHerbData({ 
        ...herbData, 
        foundInMedicines: [...herbData.foundInMedicines, medicineInput.trim()] 
      });
      setMedicineInput("");
    }
  };

  const addSymptom = () => {
    if (symptomInput.name.trim()) {
      setHerbData({
        ...herbData,
        symptoms: [...herbData.symptoms, { ...symptomInput }],
      });
      setSymptomInput({ name: "", description: "", instructions: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting herbData:", herbData);
    const formData = new FormData();
    let reqData = JSON.stringify(herbData);
    // Convert nested objects to JSON strings
    // formData.append("herbData", JSON.stringify(herbData));
    
    if (image) {
      formData.append("image", image);
    }
    console.log(reqData);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/herbs",
        reqData, 
        {
          headers: { "Content-Type": "application/json" },
        }
        // formData,
        // {
        //   headers: { "Content-Type": "multipart/form-data" },
        // }
      );
      alert("Herb added successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error adding herb:", error);
      alert("Failed to add herb.");
    }
  };

  return (
    <div className="add-herb-container">
      <h2 className="add-herb-heading">Add a New Herb</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <h3 className="sub-heading">Basic Information</h3>
        <input
          type="text"
          name="name"
          placeholder="Herb Name"
          value={herbData.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="text"
          name="botanicalName"
          placeholder="Botanical Name"
          value={herbData.botanicalName}
          onChange={(e) => handleChange(e)}
          required
        />

        <h3>Location</h3>
        <input
          type="text"
          name="state"
          placeholder="State"
          value={herbData.location.state}
          onChange={(e) => handleChange(e, "location")}
        />
        <input
          type="text"
          name="region"
          placeholder="Region"
          value={herbData.location.region}
          onChange={(e) => handleChange(e, "location")}
        />
        <input
          type="number"
          name="latitude"
          placeholder="Latitude"
          value={herbData.location.latitude}
          onChange={(e) => handleChange(e, "location")}
        />
        <input
          type="number"
          name="longitude"
          placeholder="Longitude"
          value={herbData.location.longitude}
          onChange={(e) => handleChange(e, "location")}
        />

        <h3>Growth Conditions</h3>
        <input
          type="number"
          name="min"
          placeholder="Min Temperature"
          value={herbData.growthConditions.temperature.min}
          onChange={(e) => handleChange(e, "growthConditions", "temperature", "min")}
        />
        <input
          type="number"
          name="max"
          placeholder="Max Temperature"
          value={herbData.growthConditions.temperature.max}
          onChange={(e) => handleChange(e, "growthConditions", "temperature", "max")}
        />
        <input
          type="number"
          name="min"
          placeholder="Min Humidity"
          value={herbData.growthConditions.humidity.min}
          onChange={(e) => handleChange(e, "growthConditions", "humidity", "min")}
        />
        <input
          type="number"
          name="max"
          placeholder="Max Humidity"
          value={herbData.growthConditions.humidity.max}
          onChange={(e) => handleChange(e, "growthConditions", "humidity", "max")}
        />
        <input
          type="text"
          name="sunlight"
          placeholder="Sunlight Requirements"
          value={herbData.growthConditions.sunlight}
          onChange={(e) => handleChange(e, "growthConditions")}
        />

        <h3>Uses</h3>
        <div className="array-input">
          <input
            type="text"
            placeholder="Add a use"
            value={useInput}
            onChange={(e) => setUseInput(e.target.value)}
          />
          <button type="button" onClick={addUse}>Add</button>
        </div>
        <div className="tags">
          {herbData.uses.map((use, index) => (
            <span key={index} className="tag">{use}</span>
          ))}
        </div>

        <h3>Symptoms</h3>
        <div className="symptom-inputs">
          <input
            type="text"
            placeholder="Symptom Name"
            value={symptomInput.name}
            onChange={(e) => setSymptomInput({...symptomInput, name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Description"
            value={symptomInput.description}
            onChange={(e) => setSymptomInput({...symptomInput, description: e.target.value})}
          />
          <input
            type="text"
            placeholder="Instructions"
            value={symptomInput.instructions}
            onChange={(e) => setSymptomInput({...symptomInput, instructions: e.target.value})}
          />
          <button type="button" onClick={addSymptom}>Add Symptom</button>
        </div>
        <div className="symptoms-list">
          {herbData.symptoms.map((symptom, index) => (
            <div key={index} className="symptom-item">
              <strong>{symptom.name}</strong>: {symptom.description} - {symptom.instructions}
            </div>
          ))}
        </div>

        <h3>Preparation</h3>
        <textarea
          name="preparationInstructions"
          placeholder="Preparation Instructions"
          value={herbData.preparationInstructions}
          onChange={handleChange}
        />

        <h3>Found in Medicines</h3>
        <div className="array-input">
          <input
            type="text"
            placeholder="Add a medicine"
            value={medicineInput}
            onChange={(e) => setMedicineInput(e.target.value)}
          />
          <button type="button" onClick={addMedicine}>Add</button>
        </div>
        <div className="tags">
          {herbData.foundInMedicines.map((medicine, index) => (
            <span key={index} className="tag">{medicine}</span>
          ))}
        </div>

        <h3>Image</h3>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        <button type="submit" className="submit-btn">Add Herb</button>
      </form>
    </div>
  );
};

export default AddHerb;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HerbDetail.css";

const HerbDetail = () => {
  const { id } = useParams();
  const [herb, setHerb] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/herbs/${id}`)
      .then((response) => setHerb(response.data))
      .catch((error) => console.error("Error fetching herb details:", error));
  }, [id]);

  if (!herb) return <p>Loading...</p>;

  return (
    <>
    <div className="herb-detail-container">
      <h1>{herb.name} ({herb.botanicalName})</h1>
      <img src={`http://localhost:5000/uploads/${herb.image}`} alt={herb.name} className="herb-image"/>

      {/* 🌿 Location Section */}
      <h3>🌍 Location</h3>
      <p><strong>State:</strong> {herb.location.state}</p>
      <p><strong>Region:</strong> {herb.location.region}</p>
      <p><strong>Coordinates:</strong> {herb.location.latitude}, {herb.location.longitude}</p>

      {/* 🌞 Growth Conditions Section */}
      <h3>🌱 Growth Conditions</h3>
      <p><strong>Temperature:</strong> {herb.growthConditions.temperature.min}°C - {herb.growthConditions.temperature.max}°C</p>
      <p><strong>Humidity:</strong> {herb.growthConditions.humidity.min}% - {herb.growthConditions.humidity.max}%</p>
      <p><strong>Sunlight:</strong> {herb.growthConditions.sunlight}</p>

      {/* 🌿 Uses Section */}
      <h3>🩺 Uses</h3>
      <ul>
        {herb.uses.map((use, index) => (
          <li key={index}>{use}</li>
        ))}
      </ul>

      {/* 🤒 Symptoms & Instructions Section */}
      <h3>💊 Symptoms & Treatment</h3>
      {herb.symptoms.length > 0 ? (
        <ul>
          {herb.symptoms.map((symptom, index) => (
            <li key={index}>
              <strong>{symptom.name}:</strong> {symptom.description}
              <p><strong>Instructions:</strong> {symptom.instructions}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No symptoms listed.</p>
      )}

      {/* 🏺 Found in Medicines Section */}
      <h3>💊 Found in Medicines</h3>
      {herb.foundInMedicines.length > 0 ? (
        <p>{herb.foundInMedicines.join(", ")}</p>
      ) : (
        <p>No known medicines listed.</p>
      )}

      {/* 🍵 Preparation Instructions */}
      <h3>📝 Preparation Instructions</h3>
      <p>{herb.preparationInstructions || "No preparation instructions available."}</p>
    </div>
    </>
  );
};

export default HerbDetail;



// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const HerbDetail = () => {
//   const { id } = useParams();
//   const [herb, setHerb] = useState(null);

//   useEffect(() => {
//     axios.get(`http://localhost:5000/api/herbs/${id}`)
//       .then((response) => setHerb(response.data))
//       .catch((error) => console.error("Error fetching herb details:", error));
//   }, [id]);

//   if (!herb) return <p>Loading...</p>;

//   return (
//     <div>
//       <h1>{herb.name} ({herb.botanicalName})</h1>
//       <img src={`http://localhost:5000/uploads/${herb.image}`} alt={herb.name} />
//       <p><strong>Uses:</strong> {herb.uses.join(", ")}</p>
//       <p><strong>Medicines:</strong> {herb.medicines.join(", ")}</p>
//       <p><strong>Preparation:</strong> {herb.preparation}</p>
//     </div>
//   );
// };

// export default HerbDetail;

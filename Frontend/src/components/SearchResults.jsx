import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HerbCard from "../components/HerbCard";
import SearchResultCard from "./SearchResultCard";

const SearchResults = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const herbQuery = queryParams.get("query");
    const locationQuery = queryParams.get("location");

    const [herbs, setHerbs] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchHerbs = async () => {
            try {
                const params = new URLSearchParams();
                if (herbQuery) params.append("query", herbQuery);
                if (locationQuery) params.append("location", locationQuery);
                let url = `http://localhost:5000/api/herbs/search?${params.toString()}`;
                console.log(url);
                 await axios.get(url)
                .then(response => {
                    console.log(response.data);
                    setHerbs(response.data);  // Store data in state when request is successful
                    setError("");  // Set loading to false after the request is completed
                  })
                  .catch(error => {
                    setError(error.message);  // Store the error if the request fails
                    // setLoading(false);  // Set loading to false if there's an error
                  });
                
                 // Clear any previous errors
            } catch (error) {
                console.error("Error fetching herbs:", error);
                setError(error.response?.data?.message || "Error fetching herbs.");
            }
        };

        fetchHerbs();
    }, [herbQuery, locationQuery]);

    return (
        <div>
            <h2>Search Results</h2>
            {error ? (
                <p style={{ color: "red" }}>{error}</p>
            ) : (
                herbs.length > 0 ? (
                    <div className="herb-list">
                        {herbs.map((herb) => (
                            // <HerbCard key={herb._id} herb={herb} />
                            <SearchResultCard key={herb._id} herb={herb}/>
                        ))}
                    </div>
                ) : (
                    <p>No herbs found</p>
                )
            )}
        </div>
    );
};

export default SearchResults;



// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import HerbCard from "../components/HerbCard"; 

// const SearchResults = () => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const herbQuery = queryParams.get("query");
//     const locationQuery = queryParams.get("location");

//     const [herbs, setHerbs] = useState([]);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const fetchHerbs = async () => {
//             try {
//                 let url = "http://localhost:5000/api/herbs/search?";
//                 if (herbQuery) url += `query=${herbQuery}`;
//                 if (locationQuery) url += `&location=${locationQuery}`;

//                 const response = await axios.get(url);
//                 setHerbs(response.data);
//                 setError(""); // Clear error if successful
//             } catch (error) {
//                 console.error("Error fetching herbs:", error);
//                 setError(error.response?.data?.message || "Error fetching herbs.");
//             }
//         };

//         fetchHerbs();
//     }, [herbQuery, locationQuery]);

//     return (
//         <div>
//             <h2>Search Results</h2>
//             {error ? <p style={{ color: "red" }}>{error}</p> : (
//                 herbs.length > 0 ? (
//                     <div className="herb-list">
//                         {herbs.map((herb) => (
//                             <HerbCard key={herb._id} herb={herb} />
//                         ))}
//                     </div>
//                 ) : (
//                     <p>No herbs found</p>
//                 )
//             )}
//         </div>
//     );
// };

// export default SearchResults;


// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
// import HerbCard from "../components/HerbCard"; 

// const SearchResults = () => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const herbQuery = queryParams.get("query");
//     const locationQuery = queryParams.get("location");

//     const [herbs, setHerbs] = useState([]);
    
//     useEffect(() => {
//         const fetchHerbs = async () => {
//             try {
//                 let url = "http://localhost:5000/api/herbs/search?";
//                 if (herbQuery) url += `query=${herbQuery}`;
//                 if (locationQuery) url += `&location=${locationQuery}`;
                
//                 const response = await axios.get(url);
//                 setHerbs(response.data);
//             } catch (error) {
//                 console.error("Error fetching herbs:", error);
//             }
//         };

//         fetchHerbs();
//     }, [herbQuery, locationQuery]);

//     return (
//         <div>
//             <h2>Search Results</h2>
//             {herbs.length > 0 ? (
//                 <div className="herb-list">
//                     {herbs.map((herb) => (
//                         <HerbCard key={herb._id} herb={herb} />
//                     ))}
//                 </div>
//             ) : (
//                 <p>No herbs found</p>
//             )}
//         </div>
//     );
// };

// export default SearchResults;

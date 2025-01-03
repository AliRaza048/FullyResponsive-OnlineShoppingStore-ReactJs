//---------------without redux-persist-----------------
// DataProvider.js
import React, { createContext, useEffect, useState } from "react";
import { fetchCollectionsData } from "./fetchData";

// Create a context to share data between components
export const DataContext = createContext();

const DataProvider = ({ children }) => {

  const [homeImprovementData, setHomeImprovementData] = useState([]);
  const [electronicCollectionData, setElectronicCollectionData] = useState([]);
  const [loading, setLoading] = useState(true); // Initial loading state for first 5 products
  const [loadingMore, setLoadingMore] = useState(false); // To handle background loading of next products
  const [lastHomeImprovementDoc, setLastHomeImprovementDoc] = useState(null);
  const [lastElectronicCollectionDoc, setLastElectronicCollectionDoc] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      const { homeImprovementData, electronicCollectionData, lastHomeImprovementDoc, lastElectronicCollectionDoc } = await fetchCollectionsData();
      setHomeImprovementData(homeImprovementData);
      setElectronicCollectionData(electronicCollectionData);
      setLastHomeImprovementDoc(lastHomeImprovementDoc);
      setLastElectronicCollectionDoc(lastElectronicCollectionDoc);
      setLoading(false); // Set loading to false once the first set of products is loaded
      loadMoreHomeImprovement();  // Start loading next products in the background
      loadMoreElectronicCollection(); // Start loading next products in the background
    };

    fetchInitialData();
  }, []);

  // Function to load more products for home improvement with a delay
  const loadMoreHomeImprovement = async () => {
    if (lastHomeImprovementDoc && !loadingMore) {
      setLoadingMore(true); // Set loadingMore true to prevent multiple fetches
      setTimeout(async () => {
        
        const { homeImprovementData, lastHomeImprovementDoc: newLastHomeImprovementDoc } = await fetchCollectionsData(lastHomeImprovementDoc);


        setHomeImprovementData((prevData) => [...prevData, ...homeImprovementData]);
        console.log(homeImprovementData)
        setLastHomeImprovementDoc(newLastHomeImprovementDoc);
        setLoadingMore(false); // Set loadingMore false after the data is loaded
      }, 0); // Delay of 0 seconds
    }
  };


  // Function to load more products for electronic collection with a delay
  const loadMoreElectronicCollection = async () => {
    if (lastElectronicCollectionDoc && !loadingMore) {
      setLoadingMore(true); // Set loadingMore true to prevent multiple fetches
      setTimeout(async () => {
        const { electronicCollectionData, lastElectronicCollectionDoc: newLastElectronicCollectionDoc } = await fetchCollectionsData(lastElectronicCollectionDoc);
        setElectronicCollectionData((prevData) => [...prevData, ...electronicCollectionData]);
        setLastElectronicCollectionDoc(newLastElectronicCollectionDoc);
        setLoadingMore(false); // Set loadingMore false after the data is loaded
      }, 0); // Delay of 0 seconds
    }
  };

 

  return (
    <DataContext.Provider value={{
      homeImprovementData,
      electronicCollectionData,
      loading,
      loadingMore,
      loadMoreHomeImprovement,
      loadMoreElectronicCollection,
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;





//-------------with redux-persist------
// DataProvider.js
// import React, { createContext, useEffect, useState } from "react";
// import { fetchCollectionsData } from "./fetchData";


// import { homeImprovementRequest, electronicCollectionRequest } from "../redux/slice/dataFetch";
// import { store } from "../redux/store";
// import { useDispatch } from "react-redux";

// // Create a context to share data between components
// export const DataContext = createContext();

// const DataProvider = ({ children }) => {

//   const dispatch = useDispatch();


//   const [homeImprovementData, setHomeImprovementData] = useState([]);
//   const [electronicCollectionData, setElectronicCollectionData] = useState([]);
//   const [loading, setLoading] = useState(true); // Initial loading state for first 5 products
//   const [loadingMore, setLoadingMore] = useState(false); // To handle background loading of next products
//   const [lastHomeImprovementDoc, setLastHomeImprovementDoc] = useState(null);
//   const [lastElectronicCollectionDoc, setLastElectronicCollectionDoc] = useState(null);

//   useEffect(() => {
//     const fetchInitialData = async () => {
//       const { homeImprovementData, electronicCollectionData, lastHomeImprovementDoc, lastElectronicCollectionDoc } = await fetchCollectionsData();
//       setHomeImprovementData(homeImprovementData);
//       setElectronicCollectionData(electronicCollectionData);
//       setLastHomeImprovementDoc(lastHomeImprovementDoc);
//       setLastElectronicCollectionDoc(lastElectronicCollectionDoc);
//       setLoading(false); // Set loading to false once the first set of products is loaded
//       loadMoreHomeImprovement();  // Start loading next products in the background
//       loadMoreElectronicCollection(); // Start loading next products in the background
//     };

//     fetchInitialData();
//   }, []);

//   // Function to load more products for home improvement with a delay
//   const loadMoreHomeImprovement = async () => {
//     if (lastHomeImprovementDoc && !loadingMore) {
//       setLoadingMore(true); // Set loadingMore true to prevent multiple fetches
//       setTimeout(async () => {
        
//         const { homeImprovementData, lastHomeImprovementDoc: newLastHomeImprovementDoc } = await fetchCollectionsData(lastHomeImprovementDoc);


// //         setHomeImprovementData((prevData) => [...prevData, ...homeImprovementData]);
// //         console.log(homeImprovementData)
// //         setLastHomeImprovementDoc(newLastHomeImprovementDoc);
// //         debugger
// //         store.dispatch(homeImprovementRequest({          
// //           homeImprovement:homeImprovementData,
// //         })

// // )


// //         setLoadingMore(false); // Set loadingMore false after the data is loaded
        
// //       }, 2000); // Delay of 2 seconds
// //     }
// //   };

// // setHomeImprovementData((prevData) => {
// //   const updatedData = [...prevData, ...homeImprovementData];


//  // Update the state first
//  setHomeImprovementData((prevData) => {
//   const updatedData = [...prevData, ...homeImprovementData];

//   // Dispatch to Redux after the state is updated
//   store.dispatch(
//     homeImprovementRequest({
//       homeImprovement: updatedData,
//     })
//   );

//   return updatedData; // Ensure state is updated
// });

// setLastHomeImprovementDoc(newLastHomeImprovementDoc);
// setLoadingMore(false); // Set loadingMore false after the data is loaded
// }, 2000); // Delay of 2 seconds
// }
// };






//   // Function to load more products for electronic collection with a delay
//   const loadMoreElectronicCollection = async () => {
//     if (lastElectronicCollectionDoc && !loadingMore) {
//       setLoadingMore(true); // Set loadingMore true to prevent multiple fetches
//       setTimeout(async () => {
//         const { electronicCollectionData, lastElectronicCollectionDoc: newLastElectronicCollectionDoc } = await fetchCollectionsData(lastElectronicCollectionDoc);
//   //       setElectronicCollectionData((prevData) => [...prevData, ...electronicCollectionData]);
//   //       setLastElectronicCollectionDoc(newLastElectronicCollectionDoc);
//   //       setLoadingMore(false); // Set loadingMore false after the data is loaded
//   //     }, 2000); // Delay of 2 seconds
//   //   }
//   // };
//   // Update the state first
//   setElectronicCollectionData((prevData) => {
//   const updatedData = [...prevData, ...electronicCollectionData];

//   // Dispatch to Redux after the state is updated
//   store.dispatch(
//     electronicCollectionRequest({
//       electronicCollection: updatedData,
//     })
//   );

//   return updatedData; // Ensure state is updated
// });

// setLastElectronicCollectionDoc(newLastElectronicCollectionDoc);
// setLoadingMore(false); // Set loadingMore false after the data is loaded
// }, 2000); // Delay of 2 seconds
// }
// };

//   return (
//     <DataContext.Provider value={{
//       homeImprovementData,
//       electronicCollectionData,
//       loading,
//       loadingMore,
//       loadMoreHomeImprovement,
//       loadMoreElectronicCollection,
//     }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export default DataProvider;
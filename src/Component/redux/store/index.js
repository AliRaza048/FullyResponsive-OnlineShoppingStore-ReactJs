import { configureStore } from "@reduxjs/toolkit";
import { collectionSlice } from "../slice/dataFetch"; // Ensure this is the correct import
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default: local storage



const homeCollactionConfig = {
    key: "HomeCollaction", // Corrected spacing issues
    storage,
};
const electronicCollectionConfig = {
    key: "ElectronicCollection", // Corrected spacing issues
    storage,
};

// const homeCollactionConfig = {
//     key: "HomeCollaction", // Corrected spacing issues
//     storage,
// };

const homeCollectionpersistReducer = persistReducer(homeCollactionConfig, collectionSlice.reducer)
const electronicCollectionpersistReducer = persistReducer(electronicCollectionConfig, collectionSlice.reducer)
// const homeCollectionpersistReducer = persistReducer(homeCollactionConfig, collectionSlice.reducer)


const store = configureStore({
    reducer: {
        homeImprovement: homeCollectionpersistReducer, // Use the reducer property of the slice
        electronicCollection: electronicCollectionpersistReducer,
        // homeImprovement: homeCollectionpersistReducer,
    },
});
const persistor = persistStore(store);
export {store, persistor}
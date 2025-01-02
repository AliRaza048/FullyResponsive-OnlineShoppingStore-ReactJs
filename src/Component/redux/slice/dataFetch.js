import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    homeImprovement: [],
    electronicCollection: []
    // homeImprovement: [],
}

export const collectionSlice = createSlice({
    name: 'homeImprovement',
    initialState,
    reducers: {
        homeImprovementRequest(state, action) {
            // debugger
            const {homeImprovement} = action.payload;
            state.homeImprovement = homeImprovement;
        },

        electronicCollectionRequest(state, action) {
            const {electronicCollection} = action.payload;
            state.electronicCollection = electronicCollection;
        }
}})

export const { homeImprovementRequest, electronicCollectionRequest } = collectionSlice.actions;


export default  collectionSlice.reducer;


// fetchData.js
import { collection, getDocs, query, limit, startAfter, orderBy } from "firebase/firestore";
import db from "../firebase/firebase"; // Import Firebase config file


export const fetchCollectionsData = async (lastDoc = null) => {
  try {
    // Fetch data from `homeImprovement`
    const homeImprovementRef = collection(db, "homeImprovement");
    let homeImprovementQuery = query(homeImprovementRef, orderBy("id"), limit(1));
    if (lastDoc) {
      homeImprovementQuery = query(homeImprovementRef, orderBy("id"), startAfter(lastDoc), limit(1));
    }
    const homeImprovementSnapshot = await getDocs(homeImprovementQuery);
    const homeImprovementData = homeImprovementSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Fetch data from `electronicCollection`
    const electronicCollectionRef = collection(db, "electronicCollection");
    let electronicCollectionQuery = query(electronicCollectionRef, orderBy("id"), limit(1));
    if (lastDoc) {
      electronicCollectionQuery = query(electronicCollectionRef, orderBy("id"), startAfter(lastDoc), limit(1));
    }
    const electronicCollectionSnapshot = await getDocs(electronicCollectionQuery);
    const electronicCollectionData = electronicCollectionSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return {
      homeImprovementData,
      electronicCollectionData,
      lastHomeImprovementDoc: homeImprovementSnapshot.docs[homeImprovementSnapshot.docs.length - 1],
      lastElectronicCollectionDoc: electronicCollectionSnapshot.docs[electronicCollectionSnapshot.docs.length - 1],
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return {
      homeImprovementData: [],
      electronicCollectionData: [],
      lastHomeImprovementDoc: null,
      lastElectronicCollectionDoc: null,
    };
  }
};




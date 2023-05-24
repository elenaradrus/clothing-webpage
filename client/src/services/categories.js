import { db } from "../firebase-config";
import COLLECTIONS from "./constants";
import { 
    collection, 
    getDocs,
    getDoc,
    doc
} from "firebase/firestore";

//const docRef = doc(db, COLLECTIONS.CATEGORIES);

class ItemsDataService {
    getCategories = async () => {
        const querySnapshot = await getDocs(collection(db, COLLECTIONS.CATEGORIES));
        return querySnapshot;
    }

    getItems = async (categoryId) => { 
        const querySnapshot = await getDocs(collection(db, COLLECTIONS.CATEGORIES, categoryId, COLLECTIONS.ITEMS ));
        return querySnapshot;
    }
    
    getItem = async (categoryId, itemId) => { 
        const itemDocRef = doc(db, COLLECTIONS.CATEGORIES, categoryId, COLLECTIONS.ITEMS, itemId );
        const itemSnapshot = await getDoc(itemDocRef);
        return itemSnapshot;
    }
}

const itemsDataService = new ItemsDataService();
export default itemsDataService;

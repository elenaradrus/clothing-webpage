import { db } from "../firebase-config";
import COLLECTIONS from "./constants";
import { 
    collection, 
    getDocs 
} from "firebase/firestore";

//const docRef = doc(db, COLLECTIONS.CATEGORIES);

class ItemsDataService {
    getCategories = async () => {
        const querySnapshot = await getDocs(collection(db, COLLECTIONS.CATEGORIES));
        return querySnapshot;
    }

    getItems = async (itemId) => { 
        const querySnapshot = await getDocs(collection(db, COLLECTIONS.CATEGORIES, itemId, COLLECTIONS.ITEMS ));
        return querySnapshot;
    }
}

const itemsDataService = new ItemsDataService();
export default itemsDataService;

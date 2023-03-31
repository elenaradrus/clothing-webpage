import { db } from "../firebase-config";
import COLLECTIONS from "./constants";
import { 
    collection, 
    getDocs 
} from "firebase/firestore";

//const docRef = doc(db, COLLECTIONS.CATEGORIES);

class CategoriesDataService {
    getCatogories = async () => {
        const querySnapshot = await getDocs(collection(db, COLLECTIONS.CATEGORIES));
        return querySnapshot;
    }
}

const categoriesDataService = new CategoriesDataService();
export default categoriesDataService;

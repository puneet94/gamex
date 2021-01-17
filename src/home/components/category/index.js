/*Container component for catgeory view */

import { useDispatch, useSelector } from 'react-redux';
import CategoryView from "./CategoryView";
import {addCategory, removeCategory} from "../../actions/filters";


const CategoryDropdown = () => {


    const selectedCategories = useSelector(state => state.filters.categories);
    const categories = useSelector(state=>state.gamesData.categories);


    const dispatch = useDispatch();


    return (
        <CategoryView selectedCategories={selectedCategories} categories={categories}
            removeCategory={(category)=>dispatch(removeCategory(category))}
            addCategory={(category) => dispatch(addCategory(category))}
        />
    );
}

export default CategoryDropdown;
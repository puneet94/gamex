import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import CategoryView from "./CategoryView";
import { REMOVE_CATEGORY,ADD_CATEGORY } from "../../../types";


const fetchCategories = async () => {
    let GEN_URL = `/code-challenge/api/categories`;
    try {
        const response = await fetch(GEN_URL);
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error);
    }
}
const CategoryDropdown = () => {


    const selectedCategories = useSelector(state => state.filters.categories);
    const [categories, setCategories] = useState([]);


    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCategories();

            if (data && data.length) {
                setCategories(data);

            }
        }
        fetchData();
    }, []);

    return (
        <CategoryView selectedCategories={selectedCategories} categories={categories}

            removeCategory={(category) => dispatch({
                type: REMOVE_CATEGORY, payload: { category }
            })}
            addCategory={(category) => dispatch({
                type: ADD_CATEGORY, payload: { category }
            })}
        />
    );
}

export default CategoryDropdown;
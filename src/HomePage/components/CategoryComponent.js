import { useEffect, useState, useRef } from "react";
import { useDispatch , useSelector} from 'react-redux';

import "./CategoryComponent.css";

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


    const selectedCategories = useSelector(state=>state.filters.categories);


    const myRef = useRef();

    const [categorySearchText, setCategorySearchText] = useState("");
    const [showCategories, setShowCategories] = useState(false);
    const [categories, setCategories] = useState([]);


    const dispatch = useDispatch();
    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setShowCategories(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCategories();
            
            if (data && data.length) {
                setCategories(data);

            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });
    return (
        <div onClick={() => setShowCategories(true)} className="categoryContainer" ref={myRef}>
            <div>
                <div>
                    <ul>
                        {
                            selectedCategories.map(category => {
                                return <li className="selectedCategoryItem" key={category}>
                                    <div className="selectedCategoryItemContainer">
                                        <div>{category}</div>
                                        <span className="closeButton" onClick={(e) => {e.stopPropagation(); dispatch({type:"REMOVE_CATEGORY",payload:{category}})}}>X</span>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                    <input type="text" value={categorySearchText} onChange={(e) => { setCategorySearchText(e.target.value) }} />
                </div>
            </div>
            <div>
                {showCategories ? <div className="categoryListContainer" >
                    {categories.map(category => {
                        return (category.toLowerCase().includes(categorySearchText.toLowerCase()) &&
                            <div onClick={() => dispatch({type:"ADD_CATEGORY",payload:{category}})} key={category}>{category}</div>)
                    })}
                </div> : null}
            </div>


        </div>
    );
}

export default CategoryDropdown;
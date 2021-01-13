import { useEffect, useState, useRef } from "react";
import "./CategoryComponent.css";
const URL = "https://api.dev.cloud.barbooksaustralia.com/code-challenge/";
const fetchCategories = async () => {
    let GEN_URL = `/code-challenge/api/categories`;
    try {
        const response = await fetch(GEN_URL);
        const data = await response.json()
        console.log("data for cats");

        return data
    } catch (error) {
        console.log(error);
    }
}
const updateSelectedCategories = (selectedCategories, setSelectedCategories, category,type,setCategory) => {
    if(type==="add"){
        if (selectedCategories.indexOf(category) == -1) {
            let list = [...selectedCategories, category]
            setSelectedCategories(list)
            setCategory(list)
        }
    }else{
        let list = selectedCategories.filter((selectedCategory)=>selectedCategory!=category);
        setSelectedCategories(list);
        setCategory(list);
    }
    
}
const CategoryDropdown = ({setCategory}) => {


    const myRef = useRef();

    const [categorySearchText, setCategorySearchText] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);


    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setShowCategories(false);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCategories();
            console.log(data);
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
                            selectedCategories.map(selectedCategory => {
                                return <li className="selectedCategoryItem">
                                    <div className="selectedCategoryItemContainer">
                                        <div>{selectedCategory}</div>
                                        <span className="closeButton" onClick={(e) => {e.stopPropagation(); updateSelectedCategories(selectedCategories, setSelectedCategories, selectedCategory, "remove",setCategory)}}>X</span>
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
                            <div onClick={() => updateSelectedCategories(selectedCategories, setSelectedCategories, category, "add",setCategory)} key={category}>{category}</div>)
                    })}
                </div> : null}
            </div>


        </div>
    );
}

export default CategoryDropdown;
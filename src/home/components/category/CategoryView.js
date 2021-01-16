import PropTypes from 'prop-types';
import "./styles.css";
import { useEffect, useState, useRef } from "react";
const CategoryView = ({ selectedCategories,categories,removeCategory,addCategory}) => {

    const myRef = useRef();

    const [categorySearchText, setCategorySearchText] = useState("");
    const [showCategories, setShowCategories] = useState(false);
    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setShowCategories(false);
        }
    };

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
                                        <span className="closeButton"
                                            onClick={(e) => {
                                                e.stopPropagation(); 
                                                removeCategory(category)
                                            }}>
                                            X</span>
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
                            <div
                                onClick={() => addCategory(category)
                                }
                                key={category}>{category}</div>
                        )
                    })}
                </div> : null}
            </div>


        </div>)
}


CategoryView.propTypes = {
    selectedCategories:PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
    removeCategory: PropTypes.func,
    addCategory: PropTypes.func
}

export default CategoryView;
import PropTypes from 'prop-types';
import "./styles.css";
import { useEffect, useState, useRef } from "react";

const CategoryView = ({ selectedCategories, categories, removeCategory, addCategory }) => {

    const myRef = useRef();
    const [cursor, setCursor] = useState(0);
    const [categorySearchText, setCategorySearchText] = useState("");
    const [showCategories, setShowCategories] = useState(false);
    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setShowCategories(false);
        }
    };
    const handleKeyDown = (e) => {
        if (e.keyCode === 38 && cursor > 0) {
            setCursor(cursor - 1);
        } else if (e.keyCode === 40 && cursor < categories.length - 1) {
            setCursor(cursor + 1);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    return (
        <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-around", alignItems: "center" }}>
            <div style={{ flex: 1 }}>Filter by category</div>
            <div onClick={() => setShowCategories(true)} className="categoryContainer" ref={myRef}>
                <div>
                    <div className="categoryTagsContainer">
                        {<ul className="categoryTags">
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
                        </ul>}

                    </div>
                    <div>
                        <input type="text" data-test="categorySearchText" value={categorySearchText} onChange={(e) => { setCategorySearchText(e.target.value) }} onKeyDown={handleKeyDown} />
                    </div>
                </div>
                <div>

                    {showCategories ? <div className="categoryListContainer" data-test="categoryListContainer">
                        {categories.map((category, i) => {
                            return (category.toLowerCase().includes(categorySearchText.toLowerCase()) &&
                                <div data-test="categoryListItem" 
                                className={`categoryListItem ${cursor === i ? 'active' : ""}`}
                                    onClick={() => addCategory(category)
                                    }
                                    key={category}>{category}</div>
                            )
                        })}
                    </div> : null}
                </div>

            </div>
        </div>)
}


CategoryView.propTypes = {
    selectedCategories: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.string),
    removeCategory: PropTypes.func,
    addCategory: PropTypes.func
}

export default CategoryView;
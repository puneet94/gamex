
/*Presentation component for sortyby view */

import PropTypes from 'prop-types';
import "./styles.css";
const SortyByView = ({sort_by,updateSortBy,sortByList})=>{
    return (
        <div className="sortByContainer">
            <div>Sort By</div>
            <select
            data-test="selectSortByComponent"
                value={sort_by}
                onChange={e => {
                   updateSortBy(e.target.value)
                }}
                className="" >
                {
                    sortByList.map((sortObject) => <option value={sortObject.name} 
                    key={sortObject.name}>{sortObject.label}</option>)
                }
            </select >
        </div>
    );
}

SortyByView.propTypes = {
    sort_by: PropTypes.string,
    updateSortBy: PropTypes.func,
    sortByList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string
    }))
}
export default SortyByView;
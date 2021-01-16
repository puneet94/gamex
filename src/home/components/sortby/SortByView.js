import PropTypes from 'prop-types';

const SortyByView = ({sort_by,sortByChange,sortByList})=>{
    return (
        <div>
            <select
            data-test="selectSortByComponent"
                value={sort_by}
                onChange={e => {
                   sortByChange(e.target.value)
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
    sortByChange: PropTypes.func,
    sortByList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string
    }))
}
export default SortyByView;
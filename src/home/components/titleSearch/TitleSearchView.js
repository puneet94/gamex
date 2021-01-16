import PropTypes from 'prop-types';
import "./styles.css";
const TitleSearchView = ({titleUpdate, title})=>{
    return (
        <div className="titleSearchContainer">
            <input type="text" value={title} onChange={(e) => {
                titleUpdate(e.target.value)
            }}
            placeholder="Search By Name"
            data-test="titleSearchComponent"
            />
        </div>
    );
}

TitleSearchView.propTypes = {
    title: PropTypes.string,
    titleUpdate: PropTypes.func
}
export default TitleSearchView;
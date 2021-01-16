import PropTypes from 'prop-types';

const TitleSearchView = ({titleUpdate, title})=>{
    return (
        <div>
            <input type="text" value={title} onChange={(e) => {
                titleUpdate(e.target.value)
            }}

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
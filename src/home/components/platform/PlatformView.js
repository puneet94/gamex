

import PropTypes from 'prop-types';
import "./styles.css";

const PlatformView = ({updatePlatform,platform,platformList})=>{
    return (
        <div className="platformContainer">
            
            <div>Filter By Platform</div>
        <select
            value={platform}
            data-test="selectPlatformComponent"
            onChange={e => {
                updatePlatform(e.target.value)
            }}
            className="" >
            {
                platformList.map((platformObject) => <option value={platformObject.name} 
                key={platformObject.name}>{platformObject.label}</option>)
            }
        </select >
    </div>
    )
}


PlatformView.propTypes = {
    platform: PropTypes.string,
    updatePlatform: PropTypes.func,
    platformList: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        label: PropTypes.string
    }))
}

export default PlatformView
/*
    * Functional component which displays screenshots in horizontal scrollable div 
    * TODO: Carousel for images
*/
import "./styles.css"
import PropTypes from 'prop-types';
const GameScreenshots = ({screenshots})=>{
    return (
        <div className="gamePageScreenshots" >
                    {screenshots && screenshots.map((screenshot) => {
                        return (
                            <div key={screenshot.id} className="gamePageScreenshotContainer">
                                <img src={`code-challenge${screenshot.image}`} alt="" />
                            </div>
                        )
                    })}
                </div>
    )
}

GameScreenshots.propTypes = {
    screenshots: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        image: PropTypes.string
    }))
}
export default GameScreenshots;
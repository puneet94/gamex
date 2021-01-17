/*

    Functional component which displays game details
*/

import PropTypes from 'prop-types';
import "./styles.css";
const GameDetails = ({gameDetails,goBack})=>{
    return (
        <div className="gamePageDetails">
                    <div className="gamePageImage">
                        {gameDetails.thumbnail && <img data-test="gameDetailsthumbnail" src={`code-challenge${gameDetails.thumbnail}`} alt="" />}
                    </div>
                    <div className="gamePageContents">
                        <div className="gamePageAttributes">
                            <div className="gamePageRequirements">
                                <h4>Requirements</h4>
                                {gameDetails.minimumSystemRequirements ?
                                    <div> <div className="gameTags">OS</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.os}</div>
                                        <div className="gameTags">Processor</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.processor}</div>
                                        <div className="gameTags">Memory</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.memory}</div>
                                        <div className="gameTags">Graphics</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.graphics}</div>
                                        <div className="gameTags">Storage</div>
                                        <div className="gameTagsDetails">{gameDetails.minimumSystemRequirements.storage}</div>

                                    </div> : null
                                }

                            </div>
                            <div className="gamePageDescription">
                                <h4>{gameDetails.title}</h4>
                                {gameDetails.shortDescription}


                            </div>
                        </div>
                        <button data-test="backbutton" onClick={goBack}>Back</button>
                    </div>
                </div>
    )
}
GameDetails.propTypes = {
    goBack: PropTypes.func,
    gameDetails: PropTypes.shape({
        thumbnail: PropTypes.string,
        title: PropTypes.string
    })
}
export default GameDetails;
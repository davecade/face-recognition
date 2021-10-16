import React from 'react'
import './FaceRecognition.scss'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="center">
            <div className="image-container">
                <img src={imageUrl} alt="" width='500px' height='auto' />
                <div className="bounding-box" style={{
                    top: `${box.topRow*100}%`,
                    right: `${100-(box.rightCol*100)}%`,
                    bottom: `${100-(box.bottomRow*100)}%`,
                    left: `${box.leftCol*100}%`
                }
                }></div>
            </div>
                
        </div>
    )
}

export default FaceRecognition

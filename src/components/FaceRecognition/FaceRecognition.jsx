import React from 'react'
import './FaceRecognition.scss'

const FaceRecognition = ({imageUrl, box}) => {
    return (
        <div className="center">
            <div className="image-container">
                <img src={imageUrl} alt="" width='500px' height='auto' />
                <div className="bounding-box" style={{
                    top: `${box.top_row*100}%`,
                    right: `${100-(box.right_col*100)}%`, //calculate % from left of image
                    bottom: `${100-(box.bottom_row*100)}%`, //calculate % from top of image
                    left: `${box.left_col*100}%`
                }
                }></div>
            </div>
                
        </div>
    )
}

export default FaceRecognition

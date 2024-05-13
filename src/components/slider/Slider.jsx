import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
    const [imgIndex, setImgIndex] = useState(null);

    return (
        <div className="slider">
            {
                imgIndex !== null && (
                    <div className="fullSlider">
                        <div className="arrow">
                            <img src="/arrow.png" alt="" onClick={() => setImgIndex(imgIndex - 1 < 0 ? images.length - 1 : imgIndex - 1)} />
                        </div>
                        <div className="imgContainer">
                            <img src={images[imgIndex]} alt="" />
                        </div>
                        <div className="arrow">
                            <img src="/arrow.png" className="right" alt="" onClick={() => setImgIndex(imgIndex + 1 > images.length - 1 ? 0 : imgIndex + 1) } />
                        </div>
                        <div className="close" onClick={() => setImgIndex(null)}>&times;</div>
                    </div>
                )
            }
            <div className="bigImage">
                <img src={images[0]} alt="" onClick={() => setImgIndex(0)}/>
            </div>
            <div className="smallImages">
                {images.slice(1).map((image, index) => (
                    <img key={index} src={image} alt="" onClick={() => setImgIndex(index + 1)} />
                ))}
            </div>
        </div>
    )
}

export default Slider;

import React from "react";

export default function VideoRelated({ videoImg, videoTitle, onClick, index }) {
    return (
            <div className="row my-3 p-3 videoRelated" onClick={onClick} data-index={index}>
                <div className="col-4">
                    <img scr={videoImg} alt="Video Thumnail" className="img-fluid" />
                </div>
                <div className="col-8">
                    <p>{videoTitle}</p>
                </div>
            </div>
    );
}

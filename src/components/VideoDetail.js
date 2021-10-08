import React from "react";
import { Link, useParams } from "react-router-dom";

export default function VideoDetail(videos) {
    let { videoIndex } = useParams();

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <Link className="btn btn-primary" to="/">
                        Back
                    </Link>
                </div>
                <div className="col-12 col-md-7">
                    <h3>{videos.videos[videoIndex].snippet.title}</h3>
                    <img className="w-100" alt="Video Thumnail" src={videos.videos[videoIndex].snippet.thumbnails.high.url} />
                </div>
                <div className="col-12 col-md-4 mt-5 mt-md-0">
                    <div>
                        <h5>Published dates:</h5>
                        <p>{videos.videos[videoIndex].snippet.publishTime}</p>
                    </div>
                    <div>
                        <h5>Description:</h5>
                        <p>{videos.videos[videoIndex].snippet.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

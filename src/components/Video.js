import React from "react";
import YouTube from "react-youtube";
import { Link } from "react-router-dom";

export default function Video({ video, onStateChange, opts }) {
    if (video.id === "") {
        return <h3 className="mt-3 text-center">Search for a video!</h3>;
    }
    return (
        <div className="col-12 col-md-8">
            <YouTube className="w-100 mt-5" opts={opts} videoId={video.id} onStateChange={onStateChange} />
            <div className="d-flex align-items-center justify-content-between">
                <div>
                    <h3 className="mt-3 me-3">{video.title}</h3>
                </div>
                <div>
                    <Link className="btn btn-primary" to={`details/${video.index}`}>
                        Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

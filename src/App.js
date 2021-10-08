import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import YoutubeAPI from "./components/YoutubeAPI";
import Video from "./components/Video";
import VideoRelated from "./components/VideoRelated";
import VideoDetail from "./components/VideoDetail";

function App() {
    /* declare state */
    const [search, setSearch] = useState("");
    const [viewCount, setViewCount] = useState(0);
    const [dataVideos, setDataVideos] = useState([]);
    const [videoFirst, setVideoFirst] = useState({ id: "", title: "", index: 0 });

    const searchRef = useRef();
    //search bar functions
    const handlerChangeSearch = () => {
        const value = searchRef.current.value;
        setSearch(value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        handlerSubmit();
    };
    const handlerSubmit = async () => {
        const response = await YoutubeAPI.get("/search", {
            params: {
                q: search,
            },
        });
        setDataVideos(response.data.items);
        setVideoFirst({ id: response.data.items[0].id.videoId, title: response.data.items[0].snippet.title, index: 0 });
    };
    //search bar functions end
    //video functions
    const handlerPlayVideo = (e) => {
        if (e.target.getPlayerState() === -1) {
            setViewCount(viewCount + 1);
        }
    };
    const handlerClickVideo = (event) => {
        let videoIndex = event.currentTarget.getAttribute("data-index");
        setVideoFirst({ id: dataVideos[videoIndex].id.videoId, title: dataVideos[videoIndex].snippet.title, index: videoIndex });
    };
    //video functions end

    //video player options
    const opts = {
        height: "400",
        playerVars: {
            origin: `${window.location.protocol}//www.youtube.com`,
        },
    };

    const videoList = dataVideos
        .slice(1)
        .map((video, index) => <VideoRelated key={index} index={index + 1} onClick={handlerClickVideo} videoImg={video.snippet.thumbnails.high.url} videoTitle={video.snippet.title} />);

    return (
        <Router>
            <Switch>
                <Route path="/details/:videoIndex">
                    <VideoDetail videos={dataVideos} />
                </Route>
                <Route path="/">
                    <div className="container mt-5">
                        <form className="row form-controls" onSubmit={handleFormSubmit}>
                            <div className="col-12 col-md-8">
                                <input type="text" ref={searchRef} value={search} onChange={handlerChangeSearch} placeholder="Search" className="w-100" />
                            </div>
                            <div className="col-12 col-md-4 mt-3 mt-md-0">
                                <input type="submit" className="btn btn-primary" value="Search" className="w-100" />
                            </div>
                        </form>
                        <div className="row justify-content-end">
                            <Video opts={opts} onStateChange={handlerPlayVideo} video={videoFirst} />
                            <div className="col-12 col-md-4 mt-5">
                                {videoList}
                                <p className="mt-4">Videos watches: {viewCount}</p>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;

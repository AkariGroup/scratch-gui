import React from 'react';

import json from '../../settings/settings.json';

const hostname = location.hostname;

class VideoStreaming extends React.Component {
    constructor () {
        super();
        this.state = {};
    }
    stageStreamUrl = `http://${hostname}:${json.stream_port}${json.stream_api}`;
    render () {
        return (
            this.stageStreamUrl === null ? null : (
                <img
                    id="img"
                    src={this.stageStreamUrl}
                />)
        );
    }
}


export default VideoStreaming;

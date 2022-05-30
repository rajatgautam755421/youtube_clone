import React from 'react';
import './VideoRow.css'

const VideoRow = ({ image, channel, title, views, subs, timeStamp, Description }) => {
    return (
        <div className="VideoRow">
            <img src={image} alt={channel} />
            <span className="ViseoRow__ALL">
                <h3 className="VideoRow__text">{title}</h3>
                <p className="VideoRow__headline"> {channel} . <span className="VideoRow__SUBS">{subs} Subscribers </span>  . {views} Views . {timeStamp}</p>
                <p className="VideoRow__description">{Description}</p>
            </span>

        </div>
    )
}

export default VideoRow

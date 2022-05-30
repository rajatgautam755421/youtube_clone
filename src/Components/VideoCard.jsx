import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './videoCard.css';

const VideoCard = ({ image, channel, channelImage, title, views, timeStamp }) => {
    return (
        <div className="videoCard">
            <img className="videoCard__thumbnail" src={image} alt="" srcset="" />
            <div className="video_info">
                <Avatar className='videoCard__avatar' alt={channel} src={channelImage} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timeStamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard

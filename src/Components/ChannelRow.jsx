import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import Style from './ChannelRow.module.css';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';


const ChannelRow = ({ image, channel, verified, subs, noOfVideos, Description }) => {
    return (
        <div className={Style.channelRow}>

            <Avatar className={Style.videoCard__avatar} alt={channel} src={image} />

            <div className={Style.channelRow__Text}>
                <h4>{channel} {verified && <CheckCircleOutlineOutlinedIcon />}</h4>
                <p>{subs} Subscribers . {noOfVideos} Videos</p>
                <p>{Description}</p>
            </div>

        </div>
    )
}

export default ChannelRow

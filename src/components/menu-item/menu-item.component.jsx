import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, match}) => (
    <div className ={`${size} menu-item`} onClick={()=> window.history.push(`${match.url}${linkUrl}`)}>
        <div 
        className = 'background-image' 
        style={{backgroundImage: `url(${imageUrl})`}} >           
        </div>

        <div className ='content'>
            <h1 className ='title'> {title.toUpperCase()} </h1>
            <span className='subtitle'> SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem); 
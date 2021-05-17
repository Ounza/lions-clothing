import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './directory.styles.scss';
class Directory extends Component {
    state = {  
       sections: [
        {
            title: 'hats',
            imageUrl: '../../images/hats_image.jpg',
            id: 1,
            linkUrl: 'shop/hats'
          },
          {
            title: 'jackets',
            imageUrl: '../../images/jackets_image.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
          },
          {
            title: 'sneakers',
            imageUrl: '../../images/sneakers_image.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
          },
          {
            title: 'womens',
            imageUrl: '../../images/woman_image.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
          },
          {
            title: 'mens',
            imageUrl: '../../images/man_image.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
          }
       ] 
    }
    render() { 
        return ( 
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps}/>
                    ))
                }
            </div>
         );
    }
}
 
export default Directory;
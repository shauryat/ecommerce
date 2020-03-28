import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.scss';
import SwipeableViews from 'react-swipeable-views';
import  { Breakpoint } from 'react-socks';
import CollectionItem from '../collection-item/collection-item.component';
import {
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles';


const styles = {
  root: {
    padding: '0 2rem',
    marginLeft : '-0.9rem'
  },
  slideContainer: {
    marginLeft:'-0.2rem',
    
  }, 

};

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  
  <div>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>

   
  <Breakpoint small down>
     <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
        {items
         .filter((item, idx) => idx < 4)
             .map(item => (
           <CollectionItem key={item.id} item={item} />
          ))}
    </SwipeableViews>
 </Breakpoint>


<Breakpoint large up>
    <PreviewContainer>
    {items
      .filter((item, idx) => idx < 4)
      .map(item => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </PreviewContainer>
  </Breakpoint>
  </div>
);

export default withRouter(CollectionPreview);

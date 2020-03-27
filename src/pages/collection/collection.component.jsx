import React from 'react';
import { connect } from 'react-redux';
import { Breakpoint } from 'react-socks';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionTitle, CollectionPageContainer, CollectionItemsContainer } from './collection.styles';
import SwipeableViews from 'react-swipeable-views';

const styles = {
  root: {
    padding: '0 3rem',
    marginLeft : '-1.9rem'
  },
  slideContainer: {
    marginLeft:'-1rem',
    
  }, 

};

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
   
  <div>
     <CollectionTitle>{title}</CollectionTitle>
     
     <Breakpoint small down>
       <SwipeableViews style={styles.root} slideStyle={styles.slideContainer}>
         {items.map(item => (
               <CollectionItem key={item.id} item={item} />
               ))}
              </SwipeableViews>
      </Breakpoint>

     <Breakpoint large up>
       <CollectionPageContainer>
          <CollectionItemsContainer>
             {items.map(item => (
                <CollectionItem key={item.id} item={item} />
                   ))}
          </CollectionItemsContainer>
       </CollectionPageContainer>
      </Breakpoint>

        </div>
   
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

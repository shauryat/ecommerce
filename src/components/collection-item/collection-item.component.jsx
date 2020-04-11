import React from 'react';
import { connect } from 'react-redux';
import CartIcon from '@material-ui/icons/AddShoppingCart';
import { addItem } from '../../redux/cart/cart.actions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl} = item;
  const [open, setOpen] = React.useState(false);

  const theme = createMuiTheme({
    palette: {
       type:'light',
       primary : {
         main:'#4caf50'
       },
       secondary : {
         main: '#f44336'
       }
    },

  });

  
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
  <div className="normal mobile">
    <Card className="mobile" variant="outlined">
    
    <CardActionArea>
        <CardMedia
          component="img"
          height="299"
          image={imageUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h7" component="h2" color="textSecondary">
          ${price}
        </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
          </Typography>
        </CardContent>
      </CardActionArea> 
      <CardActions>
      <Button 
      
      color="default" startIcon={<CartIcon />} 
      onClick={handleClickOpen}>
      Add To Cart
      </Button>  
      </CardActions>
    </Card>
    
    <Dialog
    open={open}
    fullScreen={fullScreen}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">Do Want To Add "{name}" To your Cart?</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        If you want to add the following item to your cart click agree down below To
        add the selected item in your Cart
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="secondary">
        No
      </Button>
      <Button color="primary" autoFocus  onClick={() => {
        handleClose() ;  addItem(item);}}>
        Yes
      </Button>
    </DialogActions>
  </Dialog>
    </div> 
    </ThemeProvider>
   
  );
}
   
 

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);

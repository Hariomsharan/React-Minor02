import React from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      padding: "10px 1.5rem"
    },
    imageSpace: {
      marginRight: '1rem'
    }
  }));


function SingleRecipe(props) {
    const classes = useStyles();
    const { image, description, dish, id }  = props.recipe;
    return (
        <div>
        <Button
        onClick={ () => props.history.push(`/recipeinfo/${id}`) }
        variant="contained"
        color="secondary"
        className={classes.button}
        title={description}
        >
        <img className={classes.imageSpace} height={50} src={image} alt={dish} />
        {dish}
        </Button>
        </div>
    )
}

export default withRouter(SingleRecipe);

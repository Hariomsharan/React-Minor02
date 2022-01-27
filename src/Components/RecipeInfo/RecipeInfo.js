import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { Redirect, Route, Switch } from 'react-router-dom';

import { GetActiveRecipe, RemoveActiveRecipe, GetRecipe } from '../../Store/Actions';

import { makeStyles } from '@material-ui/core/styles';
import {Paper, CardMedia } from '@material-ui/core';
import AddRecipe from '../AddRecipe/AddRecipe';
import RecipeDetail from './RecipeDetail/RecipeDetail';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: "100%",
    minHeight: '500px',
    marginBottom: "2rem"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: "50%"
  },
  cover: {
    width: "50%",
  }
}));

function RecipeInfo(props) {
  const classes = useStyles();

  const [state, setstate] = useState({dish: '', image: ''})

  useEffect(() => {
    if(props.activerecipe === null ){
      setTimeout(() => {
        props.GetActiveRecipe(props.match.params.id);
      }, 1500);
      } else {
        setstate({...props.activerecipe})
      }

      return () => {
        if(props.activerecipe){
          props.RemoveActiveRecipe();
        }
      }
  }, [props]);

  return (
    <Paper elevation={3} className={classes.root}>
    <CardMedia
        className={classes.cover}
        src="image aane mein time lgta hai bhdwe"
        image={state.image}
        title={state.dish}
      />
      <div className={classes.details}>
    
        <Switch>
            <Route exact path={`${props.match.url}/`} component={RecipeDetail} />
            <Route path={`${props.match.url}/edit`} component={AddRecipe} />
            <Redirect from={props.match.url} to={`${props.match.url}/`} />
        </Switch>  

        </div>
    </Paper>
  );
}

const mapStateToProps = state => {
  return {
    activerecipe: state.RecipeReducer.activerecipe
  }
}

const mapDispatchToProps = ({
  GetActiveRecipe,
  RemoveActiveRecipe,
  GetRecipe

})

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInfo);

import { 
    ACTIVE_RECIPE, 
    REMOVE_ACTIVE_RECIPE,
    // CREATE_RECIPE,
    // MODIFY_RECIPE,
    // REMOVE_RECIPE,
    GET_RECIPIES 
} from "../ActionTypes";

import axios from '../../utils/axios';


export const GetRecipe = () => dispatch =>  {
  axios.post('/recipe/read')
      .then(response => {
        return dispatch({
          type: GET_RECIPIES,
          payload: response.data.recipies,
        });
      })
      .catch(err => console.log(err));
};

export const CreateRecipe = (recipe) => dispatch => {
  axios.post('/recipe/create', {...recipe})
      .then(response => {
        console.log(response);
        return dispatch(GetRecipe())
      })
      .catch(err => console.log(err.response));
  // return {
  //     type: CREATE_RECIPE,
  //     payload: recipe
  // };
};

export const ModifyRecipe = (id, recipe) => dispatch => {
  axios.patch(`/recipe/update/${id}`, {...recipe})
      .then(response => {
        console.log(response);
        return dispatch(GetRecipe())
      })
      .catch(err => console.log(err));
  // return {
  //     type: MODIFY_RECIPE,
  //     payload: recipe
  // };
};

export const RemoveRecipe = (id) => dispatch => {
  axios.delete(`/recipe/delete/${id}`)
  .then(response => {
    console.log(response);
    return dispatch(GetRecipe())
  })
  .catch(err => console.log(err));
  // return {
  //   type: REMOVE_RECIPE,
  //   payload: id
  // };
};

export const GetActiveRecipe = (id) => {
  return {
    type: ACTIVE_RECIPE,
    payload: id,
  };
};

export const RemoveActiveRecipe = () => {
  return {
    type: REMOVE_ACTIVE_RECIPE,
  };
};
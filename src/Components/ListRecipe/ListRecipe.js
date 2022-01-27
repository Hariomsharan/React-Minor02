import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import loader from '../../assets/loader.gif';


import SingleRecipe from "./SingleRecipe/SingleRecipe";

function ListRecipe(props) {
  const [state, setstate] = useState(null);

  useEffect(() => {
    setstate({ recipies: props.recipies });
  }, [props.recipies]);

  let recipielist = <img src={loader} alt={loader} />;
  ;
  if (state) {
    recipielist = state.recipies.map((r) => (
      <SingleRecipe key={r.date} recipe={r} />
    ));
  }

  return recipielist;
}

const mapStateToProps = (state) => {
  return {
    recipies: [...state.RecipeReducer.recipies],
  };
};

export default connect(mapStateToProps)(ListRecipe);

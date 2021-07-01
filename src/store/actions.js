import { loadingActions } from "./loading-slice";
import { recipesActions } from "./recipes-slice";

export const fetchRecipeItemsData = (searchedItem) => {
  return async (dispatch) => {
    const getData = async () => {
      try {
        dispatch(loadingActions.setResultsLoading({ payload: true }));

        const RES = await fetch(
          `https://forkify-api.herokuapp.com/api/search?q=${searchedItem}`
        );
        console.log(RES);
        if (!RES.ok) {
          throw new Error("Something went wrong");
        }
        const data = await RES.json();
        dispatch(recipesActions.addRecipe({ payload: data }));
        dispatch(loadingActions.setResultsLoading({ payload: false }));
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  };
};

export const fetchRecipeIngridientData = (newHash) => {
  return async (dispatch) => {
    const getRecipeData = async () => {
      try {
        dispatch(loadingActions.setLoading({ payload: true }));

        const RES = await fetch(
          `https://forkify-api.herokuapp.com/api/get?rId=${newHash}`
        );
        if (!RES.ok) {
          throw new Error("Something went wrong");
        }
        const DATA = await RES.json();
        const { recipe } = DATA;
        dispatch(recipesActions.addRecipeIngridients({ payload: recipe }));
        dispatch(loadingActions.setLoading({ payload: false }));
      } catch (error) {
        console.error(error);
      }
    };
    getRecipeData();
  };
};

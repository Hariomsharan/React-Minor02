import { 
    ACTIVE_RECIPE, 
    REMOVE_ACTIVE_RECIPE,
    // CREATE_RECIPE,
    // MODIFY_RECIPE,
    // REMOVE_RECIPE,
    GET_RECIPIES 
} from "../ActionTypes";

const initialState = {
    recipies: [
        {id: 'dsfkl@dskmldsk838',date: 'August 19, 2020 11:49:09 AM', dish: 'Mint Mojito', chef: 'nikhil', ingredientsArray:['mint', 'water', 'mojito paste', 'pudina leaf'], description: 'The Mint Mojito is so relaxing while people are stressed out, it provides positive vive while having.', image: 'https://data.thefeedfeed.com/recommended/post_3966940.jpeg'},
        {id: '84895kjfdkdkj&jfkjsd', date: 'August 20, 2020 11:39:45 AM', dish: 'Paneer Pakoda', chef: 'khushi', ingredientsArray:['paneer', 'besan', 'spices', 'oil'], description: 'The Paneer Pakoda is an Indian spicy and crispy dish which is made of paneer inside the basen, it is kind of tasty.', image: 'https://www.manjulaskitchen.com/wp-content/uploads/paneer_pakoras.jpg'}
      ],
      activerecipe: null
}

const RecipeReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECIPIES:
            const RecipiesApi = action.payload.map(r => {
                return {
                    ...r,
                    id: r._id,
                    date: String(r.createdAt)
                }
            })
            return {
                ...state,
                recipies: RecipiesApi
            }
        case ACTIVE_RECIPE:
            return {
                ...state,
                activerecipe: state.recipies.find(r => r.id === action.payload)
            }
        case REMOVE_ACTIVE_RECIPE:
            return {
                ...state,
                activerecipe: null
            } 
        // case REMOVE_RECIPE :
        //     const filterRecipeDuplicate = state.recipies.filter(r => r.id !== action.payload);
        //     return {
        //         ...state,
        //         recipies: filterRecipeDuplicate
        //     } 
        // case CREATE_RECIPE :
        //     const CreateRecipeDuplicate = [...state.recipies];
        //     CreateRecipeDuplicate.push(action.payload);
        //     return {
        //         ...state,
        //         recipies: CreateRecipeDuplicate
        //     }   
        // case MODIFY_RECIPE :
        //     const ModifyRecipeDuplicate = [...state.recipies];
        //     const index = ModifyRecipeDuplicate.findIndex(r => r.id === action.payload.id);
        //     ModifyRecipeDuplicate[index] = action.payload;
        //     return {
        //         ...state,
        //         recipies: ModifyRecipeDuplicate
        //     }        
        default:
            return state;
    }
}

export default RecipeReducer;
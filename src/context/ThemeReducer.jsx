const ThemeReducer = (state, action) => {

switch (action.type) {
case "CHANGE":
    return{
        ...state,
        darkTheme: state.darkTheme ? false : true,
    }

default:
    return state;
}

};

export default ThemeReducer;
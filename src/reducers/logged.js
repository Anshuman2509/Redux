const loggedReducer=(state='Audi',action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return 'BMW';
        default :
        return state;
    }
}

export default loggedReducer;
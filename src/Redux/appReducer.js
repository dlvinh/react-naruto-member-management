import { add_user, delete_user, edit_user } from "./ReduxActionType/reduxActionTypeList";

const userState = {
    userList:[
        {
            id: 1,
            userName: "NarutoTheHokage",
            fullName: "	Uzumaki Naruto",
            password: "12345678",
            email: "naruto@gmail.com",
            phoneNo: "123456789",
            role: "Hokage"
        },
        {
            id: 2,
            userName: "CrushOfNaruto",
            fullName: "Uchiha Sasuke",
            password: "12345678",
            email: "sasuke@gmail.com",
            phoneNo: "123456789",
            role: "Jonin"
        }
    ],
    editUser:{

    }
    
}
    

const appStateReducer = (state= userState, action)=>{
    switch(action.type){
        case add_user:{
            let newList = [...state.userList];
            let date = new Date();
            let newId = `${date.getMinutes()}${date.getMilliseconds()}` ;
            let newUser = {
                ...action.obj, id: newId
            }
            newList.push(newUser);
            return {...state,userList: newList}
        };
        case edit_user:{
            let user = state.userList.find(user => user.id == action.obj.id);
            return {...state, editUser: user};
        }
        case delete_user:{
            let newUserList = [...state.userList];
            let index = newUserList.findIndex(user => user.id == action.obj.id);
            newUserList.splice(index,1);
            return {...state,userList: newUserList};
        }
        default: return {...state};
    }
}

export default appStateReducer;
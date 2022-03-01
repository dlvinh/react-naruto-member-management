import { add_user, delete_user, edit_user } from "../ReduxActionType/reduxActionTypeList"

export const add_user_action = (newUser)=>{
    return {
        type: add_user,
        obj: newUser,
    }
}

export const delete_user_action = (user) =>({type:delete_user,obj: user});

export const edit_user_action = (user)=>({type: edit_user, obj:user});
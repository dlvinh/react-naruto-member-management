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
    ]
    
}
    

const appStateReducer = (state= userState, action)=>{
    switch(action.type){
        default: return {...state};
    }
}

export default appStateReducer;
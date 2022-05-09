import { configureStore, createSlice } from "@reduxjs/toolkit";
// 모든 데이터를 저장해서 일단 가져오는 것.
// 개인데이터 말고 전체데이터를 일단 담아놓는다.
// 개인데이터는 해당 컴포넌트에서 서버통신으로 받을 것.
// 공유필요한 것만 여기서 설치하기...

// like useState
let user = createSlice({
    name : "user",
    initialState :"윤승환",
    // 수정
    reducers :{
        changeName(state){
            return "윤_승환"
        }
    }
})
export let {changeName} = user.actions

let data = createSlice({
    name : "data",
    initialState :["윤승환","hi"]
})



export default configureStore({
    reducer:{ 
        // state등록하기
        user : user.reducer,
        data : data.reducer
    }
})
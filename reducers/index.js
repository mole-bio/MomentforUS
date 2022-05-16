import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";

const initialState = {
  //   name: "swoosh",
  //   age: 35,
  //   password: "biogerentology",
  user: {},
  post: {
    mainPosts: [],
  },
};

// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "senescence",
// };
// 위의 기존 함수를 동적으로 변경한 것이 action creator
const changeNickname = (data) => {
  return {
    type: "CHANGE_NICKNAME",
    data,
  };
};
// store.dispatch(changeNickname('바꿀 이름'))

// reducer는 (이전상태, 액션) 을 => 다음상태로 변화시키는 역할을 한다
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
      default:
        return state;
    }
  },
  user,
});

export default rootReducer;

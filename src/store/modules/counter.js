// 카운터 관련 상태 로직
import { createAction, handleActions } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// create action function
export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

// set default
const initialState = {
    number: 0
};

// 액션함수 생성; reducer
export default handleActions({
    [INCREMENT]: (state, action) => {
        return { number: state.number + 1 };
    },
    //비구조화 할당
    [DECREMENT]: ({ number }) => ({ number: number - 1 })
}, initialState);
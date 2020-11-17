import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  counterSelector,
} from "../CreateSlice/counterSlice";

function Counter(props) {
  const dispatch = useDispatch();
  const { count } = useSelector(counterSelector);

  console.log(count);
  return (
    <div>
      this is a counter app
      <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      {/* count.reducer.count name comes from count->useSelector, reducer->from
      store, and count again from slice initialState */}
      {count}
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;

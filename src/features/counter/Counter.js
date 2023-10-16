import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div class={styles.row}>
        <button
          class={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span class={styles.value}>{count}</span>
        <button
          class={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div class={styles.row}>
        <input
          class={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          class={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          class={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          class={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}

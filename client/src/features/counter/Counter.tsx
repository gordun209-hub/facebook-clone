import { useState } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'

import { decrement, increment, incrementByAmount } from './counterSlice'

const Counter = () => {
  const count = useAppSelector(state => state.counter.count)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input
          type='number'
          value={incrementAmount}
          onChange={e => setIncrementAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={() => dispatch(incrementByAmount(incrementAmount))}>
          Increment by amount
        </button>
      </div>
    </div>
  )
}

export default Counter

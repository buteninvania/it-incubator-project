import { renderHook, act } from '@testing-library/react-hooks'
import useRatingData from './useRatingData'

test('Should return an array of rating data, in the given order', () => {
  const {result} = renderHook(() => useRatingData(3))
  expect(result.current).toStrictEqual([true, true, true, false, false])
})
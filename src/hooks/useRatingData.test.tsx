import { renderHook, act } from '@testing-library/react-hooks'
import useRatingData from './useRatingData'

test('Should return an array of ratings in the given order', () => {
  const {result} = renderHook(() => useRatingData(3))
})
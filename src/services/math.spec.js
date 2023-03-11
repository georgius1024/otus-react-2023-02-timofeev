jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({ data: 42 })
}))
import axios from 'axios'
import math from './math'

describe('math expressions evaluation', () => {
  it('works as expected', async () => {
    const result = await math('2+2')
    expect(result).toBe(42)
    expect(axios.get).toHaveBeenCalledWith('https://api.mathjs.org/v4/?expr=2%2B2')
  })
})

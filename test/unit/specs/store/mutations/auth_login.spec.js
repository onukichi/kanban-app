import mutations from '@/store/mutations'
import { expect } from 'chai'

describe('AUTH_LOGINミューテーション', () => {
  it('ミューテーションのペイロード値が状態authに設定されること', () => {
    const state = {}

    const token = '1234567890abcdef'
    const userId = 1
    mutations.AUTH_LOGIN(state, { token, userId })

    expect(state.auth.token).to.equal(token)
    expect(state.auth.userId).to.equal(userId)
  })
})
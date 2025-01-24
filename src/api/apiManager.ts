import request from './apiBuilder'

export const apiManager = {
  // 範例: 取得版本號
  getVersion: async () => {
    return request.get('/api/getVersion')
  },
  // 範例: [進線] 查詢進線客戶所有保單
  queryInsurance: async <T>(param: T) => {
    return request.post('/api/queryInsurance', { params: param })
  }
}

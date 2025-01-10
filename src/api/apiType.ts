import type { AxiosResponse } from 'axios'

// 通用響應格式
export interface ApiResponse<T = any> {
  data: T
  code: number
  message: string
}

// 通用請求參數
export interface ApiRequest {
  param?: any
}

// API 模組的類型
export type ApiModules = {
  [K in 'apiManager']: {
    [key: string]: (param?: any) => Promise<AxiosResponse<any, any>>
  }
}

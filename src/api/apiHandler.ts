import { apiManager } from './apiManager'
import type { ApiRequest, ApiResponse, ApiModules } from './apiType'
import { ElNotification } from 'element-plus'

const apiModules: ApiModules = {
  apiManager
}

export const apiHandler = {
  // API 請求
  request: async (
    action: string,
    { param }: ApiRequest
  ): Promise<ApiResponse> => {
    if (!apiModules.apiManager || !apiModules.apiManager[action]) {
      throw new Error(`Invalid API action: ${action}`)
    }

    const response = await apiModules.apiManager[action](param)
    return response.data || response
  },

  // API 回應
  responseHandler<
    T extends {
      returnCode?: string
      returnMessage?: string
      returnMsg?: string
    }
  >(
    response: T,
    successFunc: () => void = () => {},
    errorFunc: () => void = () => {}
  ) {
    if (
      response &&
      response.returnCode &&
      response.returnCode.endsWith('0000')
    ) {
      successFunc()
    } else {
      const msg = response?.returnMessage || response?.returnMsg || 'Error'
      ElNotification({
        message: msg,
        type: 'error'
      })
      errorFunc()
    }
  }
}

export default apiHandler

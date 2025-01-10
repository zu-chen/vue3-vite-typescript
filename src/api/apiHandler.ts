import { getAPI } from './getAPI'
import { insertAPI } from './insertAPI'
import { updateAPI } from './updateAPI'
import { deleteAPI } from './deleteAPI'
import type { ApiRequest, ApiResponse, ApiModules } from './apiType'
import { ElNotification } from 'element-plus'

const apiModules: ApiModules = {
  getAPI,
  insertAPI,
  updateAPI,
  deleteAPI
}

export const apiHandler = {
  // API請求
  request: async (
    action: string,
    { method, param }: ApiRequest
  ): Promise<ApiResponse> => {
    const [module] = method.split('.')

    if (
      !apiModules[module as keyof ApiModules] ||
      !apiModules[module as keyof ApiModules][action]
    ) {
      throw new Error(`Invalid API method: ${method}`)
    }

    try {
      const response =
        await apiModules[module as keyof ApiModules][action](param)
      return response.data || response
    } catch (error) {
      throw error
    }
  },

  // API 預設回應處理流程
  responseHandler(
    response: any,
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

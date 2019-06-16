// import axios from '@/libs/api.request'
import axios from '@/libs/axios'

const API_BASE_URL = '/api/users/v1'

export const getProfile = () => {
  return axios.request({
    url: `${API_BASE_URL}/profile/`,
    method: 'get'
  })
}

export const getUserList = ({ page = 1, pageSize = 15, filters }) => {
  let params = { offset: page - 1, limit: pageSize }
  if (filters) {
    params = Object.assign(params, filters)
  }
  return axios.request({
    url: `${API_BASE_URL}/users/`,
    method: 'get',
    params: params
  })
}

export const getUnreadCount = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(function () {
      resolve(3)
    }, 300)
  })
}

export const getMessage = () => {
  return axios.request({
    url: 'message/init',
    method: 'get'
  })
}

export const getContentByMsgId = msg_id => {
  return axios.request({
    url: 'message/content',
    method: 'get',
    params: {
      msg_id
    }
  })
}

export const hasRead = msg_id => {
  return axios.request({
    url: 'message/has_read',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const removeReaded = msg_id => {
  return axios.request({
    url: 'message/remove_readed',
    method: 'post',
    data: {
      msg_id
    }
  })
}

export const restoreTrash = msg_id => {
  return axios.request({
    url: 'message/restore',
    method: 'post',
    data: {
      msg_id
    }
  })
}

import axios from '@/libs/axios'

export const login = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axios.request({
    url: '/api/authentication/v1/auth/',
    data,
    method: 'post'
  })
}

export const logout = (token) => {
  return axios.request({
    url: '/api/authentication/v1/logout/',
    method: 'post'
  })
}

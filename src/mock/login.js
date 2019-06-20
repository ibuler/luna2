import { getParams } from '@/libs/util'
const USER_MAP = {
  admin: {
    'id': '2c56fd37-db65-40ed-b787-b65a98635f12',
    'name': 'Administrator',
    'username': 'admin',
    'email': 'admin@mycomany.com',
    'groups': ['3efa7a71-3589-4b48-b163-8bcf777706c5'],
    'groups_display': 'Default',
    'role': 'Admin',
    'role_display': '管理员',
    'wechat': '',
    'phone': null,
    'otp_level': 0,
    'comment': '',
    'source': 'local',
    'source_display': 'Local',
    'is_valid': true,
    'is_expired': false,
    'is_active': true,
    'created_by': 'Administrator',
    'is_first_login': false,
    'date_password_last_updated': '2019-04-19 10:35:02 +0800',
    'date_expired': '2089-04-01 10:34:00 +0800',
    'avatar_url': '/static/img/avatar/admin.png'
  },
  user: {
    'id': '3c56fd37-db65-40ed-b787-b65a98635f12',
    'name': 'ibuler',
    'username': 'ibuler',
    'email': 'ibuler@mycomany.com',
    'groups': ['3efa7a71-3589-4b48-b163-8bcf777706c5'],
    'groups_display': 'Default',
    'role': 'Admin',
    'role_display': '管理员',
    'wechat': '',
    'phone': null,
    'otp_level': 0,
    'comment': '',
    'source': 'local',
    'source_display': 'Local',
    'is_valid': true,
    'is_expired': false,
    'is_active': true,
    'created_by': 'Administrator',
    'is_first_login': false,
    'date_password_last_updated': '2019-04-19 10:35:02 +0800',
    'date_expired': '2089-04-01 10:34:00 +0800',
    'avatar_url': '/static/img/avatar/admin.png'
  }
}

export const login = req => {
  req = JSON.parse(req.body)
  if (req.username === 'admin') {
    return USER_MAP.admin
  } else {
    return USER_MAP.user
  }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}

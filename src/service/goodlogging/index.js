import Axios from '../../util/axios'

export default {
  createUser(username, email, password, level, address) {
    return Axios({
      url: '/auth/register',
      method: 'post',
      data: {
        username,
        email,
        password,
        level,
        address,
      },
    })
  },
  login(email, password) {
    return Axios({
      url: '/auth/login',
      method: 'post',
      data: {
        email,
        password,
      },
    })
  },
  user(level, address) {
    return Axios({
      url: '/user',
      method: 'put',
      data: {
        level,
        address,
      },
    })
  },
  startPlogging() {
    return Axios({
      url: '/plogging/start',
      method: 'post',
    })
  },
  endPlogging(id) {
    return Axios({
      url: `/plogging/end/${id}`,
      method: 'post',
    })
  },
  plogging(id, latitude, longitude, district) {
    return Axios({
      url: `/trash/${id}?lat=${latitude}&lon=${longitude}&district=${district}`,
      method: 'post',
    })
  },
  getPloggingInfo() {
    return Axios({
      url: '/plogging',
      method: 'get',
    })
  },
}

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
  startPlogging() {
    return Axios({
      url: '/plogging/start',
      method: 'post',
    })
  },
  plogging() {
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
}

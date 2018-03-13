class Configure {
  // Configure Class
  // It should be Singleton
  constructor () {
    this.BASE_URL = 'http://192.168.1.4'
    this.PORT = '9090'
  }
  getInstance () {
    return this
  }
  setHost (host) {
    this.BASE_URL = host
  }
  getHost () {
    return this.BASE_URL
  }
  getHostString () {
    console.log(this.BASE_URL + ':' + this.PORT)
    return this.BASE_URL + ':' + this.PORT
  }
  setPort (port) {
    this.PORT = port
  }
  getPort (port) {
    return this.port
  }
}

let config = new Configure()

export {
  config
}

const net = require("net")
clt ={
  createConnect:function (host, port) {
        return new Promise(function (resolve, reject) {
            let clt = net.connect(port, host)
            clt.on('connect', () => {
              clt.request = function(send,timeout=5000) {
                return new Promise(function (resolve, reject) {
                    clt.on('data', (data) => {
                        return resolve(data)
                    })
                    clt.on('error', (err) => {
                        return reject(err)
                    })
                    setTimeout(() => {
                        return reject('request time out:'+timeout)
                    }, timeout);
                    clt.write(send)
                })  
              }
                return resolve(clt)
            })
            clt.on('error', (err) => {
                return reject(err)
            })
        })
    }
}
module.exports = clt


let tcp =require('./index')
async function f1() {
    try {
      let conn  = await tcp.createConnect('127.0.0.1',60000)
      if (!conn) return 
      console.log('连接成功')
      let aa = await   conn.request('aaaa',1000)
       console.log(aa.toString())
    } catch(e) {
        console.error('err:'+e)
    }
    process.exit(0)
}
f1()

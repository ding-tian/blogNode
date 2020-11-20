// 引入express模块
const express = require('express')
// 创建路由
const router = express.Router()
// 引入path模块
var path = require('path')
// 引入fs模块
const fs = require('fs')
// 引入解析markdown模块
const marked = require('marked')

let fsPath = path.join(__dirname, '../', 'note')
// console.log(fsPath)
// 返回笔记列表
router.get('/findNoteList', (req, res, next) => {
  // 获取分页的参数
  // let { page, size } = req.query
  const data = findNoteList(fsPath, function (data) {
    res.json(data)
  })
})
// 返回笔记详情
router.get('/getNoteByName/:name', (req, res, next) => {
  const { name: fileNmae } = req.params
  let notePath = path.join(fsPath, fileNmae)
  console.log(fileNmae)
  console.log(notePath)
  fs.readFile(notePath + '.md', 'utf-8', (err, data) => {
    if (err) throw new Error('文件不存在')
    res.json(marked(data))
  })
})

// 返回文件中所有的md文件夹名称
function findNoteList(dir, callback) {
  let result = []
  let files = fs.readdirSync(dir)
  let redStream
  console.log(files)

  files.forEach(val => {
    let obj = {}
    if (val.endsWith('.md')) {
      obj.name = val.split('.md')[0]
      obj.ctime = fs.statSync(path.join(fsPath, val)).ctime
      // 读取流
      redStream = fs.createReadStream(path.join(fsPath, val), {
        // 一次读取的字节数
        highWaterMark: 150
      })
      // 从可读流读取的数据设置字符编码
      redStream.setEncoding('utf8')
      // 调用data事件自动开始读取数据
      redStream.once('data', function (chunk) {
        // console.log(chunk)
        chunk = chunk.replace(/[#_>.-~`*:-]*/g, '')
        obj.content = chunk
        result.push(obj)
      })
    }
  })
  // 监听读取结束事件
  redStream.on('end', function () {
    callback(result)
  })
}

// 导出note路由
module.exports = router

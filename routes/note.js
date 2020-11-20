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

// 返回笔记列表
router.get('/findNoteList', (req, res, next) => {
  // 获取分页的参数
  // let { page, size } = req.query
  findNoteList('./note', function (data) {
    res.json(data)
    // 分页的开始
    // const start = (page - 1) * size
    // 分页的结束
    // const end = page * size
    // 筛选符合要求的数组
    // const newData = data.filter((ele, index) => start <= index && index < end)
    // 总数量
    // const total = data.length
    // 返回笔记列表
    // res.json({ noteList: newData, total })
  })
})
// 返回笔记详情
router.get('/getNoteByName/:name', (req, res, next) => {
  const { name: fileNmae } = req.params

  fs.readFile('./note/' + fileNmae + '.md', 'utf-8', (err, data) => {
    if (err) throw new Error('文件不存在')
    res.json(marked(data))
  })
})

// 返回文件中所有的md文件夹名称
function findNoteList(dir, callback) {
  let list = []
  let newList = []
  let redStream
  try {
    // 递归查找出所有.md文件的路径
    function listFile(dir) {
      // 返回dir的目录
      var arr = fs.readdirSync(dir)
      // 变量这个目录
      arr.forEach((item, index) => {
        // 将dir与文件夹中的文件拼接
        var fullpath = path.join(dir, item)
        // 返回一个stats对象
        var stats = fs.statSync(fullpath)
        // 判断是否文件夹
        if (stats.isDirectory()) {
          // 如果是文件夹, 调用方法继续查找
          listFile(fullpath)
        } else {
          let obj = {}
          if (fullpath.endsWith('.md')) {
            // 设置文件名
            obj.name = fullpath
            // 设置文件上次修改时间
            obj.ctime = stats.ctimeMs
            // 读取流
            redStream = fs.createReadStream(fullpath, {
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
            })
            list.push(obj)
          }
        }
        // 监听读取结束事件
        redStream.on('end', function () {
          // console.log(list)
          if (index === arr.length - 1) {
            list.forEach((file) => {
              let fileAry = file.name.split('\\')
              file.name = fileAry.pop().slice(0, -3)
              newList.push(file)
            })
            callback(newList)
          }
        })
      })
    }
    listFile(dir)
  } catch (err) {
    throw new Error(err)
  }
}

// 导出note路由
module.exports = router

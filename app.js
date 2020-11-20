// 引入错误处理中间件
var createError = require('http-errors')
// 引入express框架
var express = require('express')
// 引入系统模块path
var path = require('path')
// 引入cookieParser模块
var cookieParser = require('cookie-parser')
// 引入logger模块
var logger = require('morgan')
// 引入history模块
var history = require('connect-history-api-fallback')
// 引入首页路由
var indexRouter = require('./routes/index')
// 引入用户路由
var usersRouter = require('./routes/users')
// 引入笔记路由
var noteRouter = require('./routes/note')
// 开启 gzip 配置
const compression = require('compression')
// 创建服务器
var app = express()
// 开启 gzip 配置
app.use(compression())
// 视图引擎设置
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')
// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  // 设置允许跨域
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
// 将前端请求做处理
app.use(
  history({
    rewrites: [
      {
        from: /^\/note\/.*$/,
        to: function (context) {
          return context.parsedUrl.pathname
        }
      },
      {
        from: /^\/article\/.*$/,
        to: function (context) {
          return context.parsedUrl.pathname
        }
      }
    ]
  })
)

app.use(logger('dev'))
// 处理post请求参数
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
// 配置静态文件地址
app.use(express.static(path.join(__dirname, 'public')))
// 配置路由
app.use('/note', noteRouter)
app.use('/', indexRouter)
app.use('/users', usersRouter)

// 捕获404并转发到错误处理程序
app.use(function (req, res, next) {
  next(createError(404))
})

// 错误处理
app.use(function (err, req, res, next) {
  // 设置本地变量，只在开发中提供错误
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // 呈现错误页面
  res.status(err.status || 500)
  res.render('error')
})
// 导出app
module.exports = app

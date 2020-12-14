#订阅 ros 话题，返回订阅内容并通过 sokect.io emit 到 web 页面中显示

# socket

## Socket.io

- 使用的 socket 包
  版本号
  "socket.io": "^2.3.0"
  v3 以上 flutter 不能连接至该 socket

## PortName

- 监听的端口号
  3000

## position

- 反馈当前位置
  返回值类型
  String

## battery

- 反馈当前电池电量
  返回值类型
  String

## velocity

- 反馈当前速度
  返回值类型
  String

## goal

- 生成目标位置
  返回值类型
  String

# 话题

## /position

说明

- 反馈当前位置

话题类型

参数类型

- pose

  - x: `float64`

  - y: `float64`

---

## /goal

说明

- 设定目标位置

话题类型

参数类型

- string

---

## /battery

说明

- 电池电压

话题类型

参数类型

- float32

---

## /velocity

说明

- 速度反馈

话题类型

参数类型

- vel
  - linear: float32
  - angulur: float32

---

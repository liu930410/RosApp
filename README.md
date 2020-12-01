#订阅ros话题，返回订阅内容并通过sokect.io emit到web页面中显示








# 话题


## /position   

说明

*  反馈当前位置

话题类型

参数类型
*   pose

    *   x: `float64` 

    *   y: `float64`

---

## /goal

说明

*  设定目标位置

话题类型

参数类型

* string

---

## /battery

说明

* 电池电压

话题类型

参数类型

* float32

---

## /velocity

说明

* 速度反馈

话题类型

参数类型

* vel
    
    * linear: float32
    * angulur: float32

---
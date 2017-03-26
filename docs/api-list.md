# 获取接口列表 - /admin/api/list

## 类型

GET

## 参数

参数名 | 说明
--- | ---
group | 分组名称,多个以`,`分隔
type | 请求类型,多个以`,`分隔
url | 链接名称,模糊匹配

## 返回值

```js
{
    items: [
        {
            id: '唯一标识',
            name: '接口名称',
            url: '链接',
            group: '分组',
            type: 'GET,POST'
        }
    ]
}
```

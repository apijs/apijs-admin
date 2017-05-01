# 获取接口详情 - /apijs-admin/api/data

## 类型

GET

## 参数

参数名 | 说明
--- | ---
id | 唯一标识

## 返回值

```js
{
    data: {
        "id": "1234",
        name: '接口名称',
        url: '链接',
        group: '分组',
        type: 'GET,POST',
        content: '返回值内容',
        docs: '文档内容',
        dataType: '返回值类型'
    }
}
```
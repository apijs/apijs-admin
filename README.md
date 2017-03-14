# Apijs后台管理

## Api接口

### 获取所有分组 - /admin/api/group

#### 返回值

```js
{
    items: [
        {
            text: '用户接口'
        },
        {
            text: '验证码相关'
        }
    ]
}
```

### 获取接口列表 - /admin/api/list

#### 参数

参数名 | 说明
--- | ---
group | 分组名称,多个以`,`分隔
type | 请求类型,多个以`,`分隔
url | 链接名称,模糊匹配

#### 返回值

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

### 创建接口 - /admin/api/add

#### 参数

参数名 | 说明
--- | ---
group | 分组名称
type | 请求类型
url | 链接名称
name | 链接名称
content | 返回值内容
docs | 文档内容
dataType | 返回值类型

#### 返回值

```js
{
    data: {
        "id": "1234"
    }
}
```

### 更新接口 - /admin/api/update

#### 参数

参数名 | 说明
--- | ---
group | 分组名称
type | 请求类型
url | 链接名称
name | 链接名称
content | 返回值内容
docs | 文档内容
dataType | 返回值类型

#### 返回值

```js
{
    data: {
        "id": "1234"
    }
}
```

### 获取接口详情 - /admin/api/data

#### 参数

参数名 | 说明
--- | ---
id | 唯一标识

#### 返回值

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
# INFINITYCRAFT Forms - API 文档

本文档为 INFINITYCRAFT Forms 后端提供了所有必要的 API 接口信息。

## 基础信息

- **API 根路径**: `/api`
- **认证方式**: 对于需要认证的端点，请在 HTTP 请求头中提供 `Authorization` 字段，格式为 `Bearer <YOUR_JWT_TOKEN>`。

---

## 认证 (`/api/auth`)

### 1. 用户注册

- **端点**: `POST /api/auth/register`
- **描述**: 创建一个新用户账户。
- **认证**: 无需认证。

**请求体 (Request Body)**: `application/json`

```json
{
  "email": "test@example.com",
  "password": "password123",
  "name": "Test User"
}
```

- `email` (string, required, email format): 用户的电子邮箱。
- `password` (string, required, min 6 characters): 用户的密码。
- `name` (string, optional): 用户的姓名。

**成功响应 (Success Response)**: `201 Created`

```json
{
  "status": "success",
  "data": {
    "user": {
      "id": "clxqlg5w0000008l0g9p8h3q4",
      "email": "test@example.com",
      "name": "Test User",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

**错误响应 (Error Response)**: `400 Bad Request` (邮箱已存在或数据验证失败)

```json
{
  "status": "error",
  "message": "User with this email already exists"
}
```

### 2. 用户登录

- **端点**: `POST /api/auth/login`
- **描述**: 使用邮箱和密码登录，获取 JWT。
- **认证**: 无需认证。

**请求体 (Request Body)**: `application/json`

```json
{
  "email": "test@example.com",
  "password": "password123"
}
```

- `email` (string, required, email format): 用户的电子邮箱。
- `password` (string, required): 用户的密码。

**成功响应 (Success Response)**: `200 OK`

```json
{
  "status": "success",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**错误响应 (Error Response)**: `401 Unauthorized` (邮箱或密码错误)

```json
{
  "status": "error",
  "message": "Invalid email or password"
}
```

---

## 表单 (`/api/forms`)

### 1. 创建新表单

- **端点**: `POST /api/forms`
- **描述**: 为当前登录的用户创建一个新的表单。
- **认证**: 需要认证 (Bearer Token)。

**请求体 (Request Body)**: `application/json`

```json
{
  "title": "我的第一个问卷"
}
```

- `title` (string, required): 表单的标题。

**成功响应 (Success Response)**: `201 Created`

```json
{
  "status": "success",
  "data": {
    "id": "form_cuid_123",
    "title": "我的第一个问卷",
    "description": null,
    "published": false,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "authorId": "user_cuid_abc"
  }
}
```

### 2. 获取我的所有表单

- **端点**: `GET /api/forms`
- **描述**: 获取当前登录用户创建的所有表单列表。
- **认证**: 需要认证 (Bearer Token)。

**成功响应 (Success Response)**: `200 OK`

```json
{
  "status": "success",
  "data": [
    {
      "id": "form_cuid_123",
      "title": "我的第一个问卷",
      "description": "这是一个描述",
      "published": true,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "authorId": "user_cuid_abc",
      "_count": {
        "submissions": 15
      }
    }
  ]
}
```

### 3. 获取单个表单用于公开填写

- **端点**: `GET /api/forms/:formId`
- **描述**: 获取一个表单的详细信息及其所有区块。此接口为 **无需认证** 的公开接口，用于向终端用户展示问卷以供填写。
- **认证**: 无需认证。

**成功响应 (Success Response)**: `200 OK`

```json
{
  "status": "success",
  "data": {
    "id": "form_cuid_123",
    "title": "我的第一个问卷",
    "description": "这是一个描述",
    "published": true,
    "authorId": "user_cuid_abc",
    "blocks": [
      {
        "id": "block_cuid_xyz",
        "formId": "form_cuid_123",
        "type": "TEXT_INPUT",
        "order": 0,
        "properties": {
          "label": "您的姓名",
          "placeholder": "请输入姓名"
        }
      }
    ]
  }
}
```

### 4. 更新表单基本信息

- **端点**: `PUT /api/forms/:formId`
- **描述**: 更新表单的标题、描述或发布状态。
- **认证**: 需要认证 (Bearer Token)，且必须是表单的创建者。

**请求体 (Request Body)**: `application/json`

```json
{
  "title": "更新后的标题",
  "description": "这是更新后的描述",
  "published": true
}
```
- `title` (string, optional)
- `description` (string, optional)
- `published` (boolean, optional)

**成功响应 (Success Response)**: `200 OK`

```json
{
  "status": "success",
  "data": {
    "id": "form_cuid_123",
    "title": "更新后的标题",
    "description": "这是更新后的描述",
    "published": true,
    // ...
  }
}
```

### 5. 更新表单的区块

- **端点**: `PUT /api/forms/:formId/blocks`
- **描述**: **（核心功能）** 全量更新一个表单的所有区块。用于保存表单编辑器的拖拽布局结果。
- **认证**: 需要认证 (Bearer Token)，且必须是表单的创建者。

**请求体 (Request Body)**: `application/json`

```json
{
  "blocks": [
    {
      "type": "TEXT_INPUT",
      "order": 0,
      "properties": { "label": "您的姓名", "required": true }
    },
    {
      "type": "SINGLE_CHOICE",
      "order": 1,
      "properties": { "label": "您的性别", "options": ["男", "女"] }
    }
  ]
}
```
- `blocks` (array, required): 包含表单所有区块对象的数组。后端会删除所有旧区块，并创建这些新区块。

**成功响应 (Success Response)**: `200 OK`

```json
{
  "status": "success",
  "message": "Form blocks updated successfully"
}
```

### 6. 删除表单

- **端点**: `DELETE /api/forms/:formId`
- **描述**: 删除一个表单及其所有相关的区块和提交。
- **认证**: 需要认证 (Bearer Token)，且必须是表单的创建者。

**成功响应 (Success Response)**: `204 No Content`

---

## 提交 (`/api/forms/:formId/submissions`)

### 1. 提交一份回答

- **端点**: `POST /api/forms/:formId/submissions`
- **描述**: 向一个表单提交一份回答。
- **认证**: 无需认证 (公开)。

**请求体 (Request Body)**: `application/json`

```json
{
  "data": {
    "block_cuid_xyz": "张三",
    "block_cuid_abc": "男"
  }
}
```
- `data` (object, required): 一个 JSON 对象，其 `key` 是表单区块的 `id`，`value` 是用户的回答。

**成功响应 (Success Response)**: `201 Created`

```json
{
  "status": "success",
  "data": {
    "id": "submission_cuid_789",
    "createdAt": "2023-01-02T10:00:00.000Z",
    "formId": "form_cuid_123",
    "data": {
      "block_cuid_xyz": "张三",
      "block_cuid_abc": "男"
    }
  }
}
```

### 2. 获取一个表单的所有提交

- **端点**: `GET /api/forms/:formId/submissions`
- **描述**: 获取一个表单的所有提交数据。
- **认证**: 需要认证 (Bearer Token)，且必须是表单的创建者。

**成功响应 (Success Response)**: `200 OK`

```json
{
  "status": "success",
  "data": [
    {
      "id": "submission_cuid_789",
      "createdAt": "2023-01-02T10:00:00.000Z",
      "formId": "form_cuid_123",
      "data": {
        "block_cuid_xyz": "张三"
      }
    }
  ]
}
```

---

## 结果分析 (`/api/forms/:formId/results`)

### 1. 获取表单的统计结果

- **端点**: `GET /api/forms/:formId/results`
- **描述**: 获取一个表单所有提交的聚合统计结果。
- **认证**: 需要认证 (Bearer Token)，且必须是表单的创建者。

**成功响应 (Success Response)**: `200 OK`

```json
{
  "status": "success",
  "data": {
    "totalSubmissions": 50,
    "resultsByBlock": {
      "block_cuid_abc": {
        "type": "SINGLE_CHOICE",
        "properties": { "label": "您的性别", "options": ["男", "女"] },
        "result": {
          "男": 30,
          "女": 20
        }
      },
      "block_cuid_xyz": {
        "type": "TEXT_INPUT",
        "properties": { "label": "您的姓名" },
        "result": {
          "responses": ["张三", "李四", "..."]
        }
      }
    }
  }
}
```
- `totalSubmissions`: 总提交数。
- `resultsByBlock`: 一个以区块 ID 为 `key` 的对象。
    - `type`: 区块类型。
    - `properties`: 区块的原始属性。
    - `result`: 聚合后的结果。
        - 对于选择题，是每个选项的计数值。
        - 对于文本题，是所有回答的数组。

---

## 管理员 (`/api/admin`)

所有管理员端点都需要认证 (Bearer Token)，并且用户角色必须是 `ADMIN`。

### 1. 获取所有用户列表

- **端点**: `GET /api/admin/users`
- **描述**: 获取系统内所有用户的列表。
- **认证**: 需要管理员权限。

**成功响应 (Success Response)**: `200 OK`

```json
{
  "status": "success",
  "data": [
    {
      "id": "user_cuid_abc",
      "email": "test@example.com",
      "name": "Test User",
      "role": "USER",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    {
      "id": "admin_cuid_xyz",
      "email": "admin@example.com",
      "name": "Administrator",
      "role": "ADMIN",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  ]
}
```
*注意: 响应中的用户对象不包含 `password` 字段。*

### 2. 获取单个用户详情

- **端点**: `GET /api/admin/users/:userId`
- **描述**: 获取指定 ID 的单个用户的详细信息。
- **认证**: 需要管理员权限。

**成功响应 (Success Response)**: `200 OK` (内容同上，但只包含单个用户)

**错误响应 (Error Response)**: `404 Not Found`

```json
{
  "status": "error",
  "message": "User not found"
}
```

### 3. 删除用户

- **端点**: `DELETE /api/admin/users/:userId`
- **描述**: 删除指定 ID 的用户。
- **认证**: 需要管理员权限。

**成功响应 (Success Response)**: `204 No Content`

**错误响应 (Error Response)**: `400 Bad Request` (例如，试图删除自己)

```json
{
  "status": "error",
  "message": "Admin cannot delete their own account"
}
```

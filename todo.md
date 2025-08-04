# INFINITYCRAFT Forms - 后端开发任务清单

这是一个用于构建问卷和投票应用的 Node.js 后端服务的任务清单。

## 阶段一：项目初始化与基础架构

- [x] 1. **环境搭建**
    - [x] 1.1. 创建 `backend` 子目录。
    - [x] 1.2. 在 `backend` 目录中初始化 pnpm 项目 (`pnpm init`)。
    - [x] 1.3. 安装 TypeScript 及相关类型定义 (`typescript`, `ts-node`, `nodemon`, `@types/node`)。
    - [x] 1.4. 初始化 TypeScript 配置文件 (`tsconfig.json`)。
    - [x] 1.5. 安装核心依赖: Express, Zod, jsonwebtoken, bcryptjs, cors, helmet (`express`, `zod`, `jsonwebtoken`, `bcryptjs`, `cors`, `helmet`, `@types/express`, `@types/jsonwebtoken`, `@types/bcryptjs`, `@types/cors`)。


- [x] 2. **数据库设置 (Prisma & PostgreSQL)**
    - [x] 2.1. 安装 Prisma (`prisma`)。
    - [x] 2.2. 初始化 Prisma (`pnpm prisma init --datasource-provider postgresql`)。
    - [x] 2.3. 在 `.env` 文件中配置数据库连接字符串。
    - [x] 2.4. 设计数据库模型 (`schema.prisma`)：
        - [x] 采用基于“区块”(Block)的灵活架构。
        - [x] 创建 `User`, `Form`, `FormBlock` 和 `Submission` 模型。
        - [x] 使用 `JSON` 类型字段存储区块的动态属性 (`properties`) 和提交的具体数据 (`data`)，以支持高度可定制化。
    - [x] 2.5. 生成初始数据库迁移文件 (`pnpm prisma migrate dev --name init`)。
    - [x] 2.6. 创建 Prisma 客户端实例，并确保全局单例。

- [x] 3. **项目结构与配置**
    - [x] 3.1. 创建 `src` 目录作为源代码根目录。
    - [x] 3.2. 创建模块化目录结构: `src/api`, `src/modules`, `src/database`, `src/middleware`, `src/utils`, `src/config`。
    - [x] 3.3. 设置 Express 服务器入口文件 (`src/api/index.ts`)，使其与 Vercel Serverless Functions 兼容。
    - [x] 3.4. 实现全局错误处理中间件。
    - [x] 3.5. 实现路由总入口，并按模块加载路由。

- [x] 4. **Vercel 部署配置**
    - [x] 4.1. 在项目根目录创建 `vercel.json`。
    - [x] 4.2. 配置 `builds` 指令，将 `backend/src/api/index.ts` 构建为 `node` serverless function。
    - [x] 4.3. 配置 `rewrites`，将所有 `/api/**` 的请求重写到后端服务。

## 阶段二：核心功能模块开发

- [x] 5. **用户模块 (`/modules/user`)**
    - [x] 5.1. 定义用户注册和登录的 Zod 验证 schema。
    - [x] 5.2. 实现用户服务 (`user.service.ts`)：
        - [x] `createUser` (密码哈希处理)
        - [x] `loginUser` (密码验证和 JWT 生成)
        - [x] `getUserById`
    - [x] 5.3. 实现用户控制器 (`user.controller.ts`)，处理 HTTP 请求和响应。
    - [x] 5.4. 创建用户路由 (`user.routes.ts`)，连接 `/auth/register` 和 `/auth/login` 等端点。
    - [x] 5.5. 创建 JWT 认证中间件 (`middleware/auth.middleware.ts`)，用于保护需要登录的路由。

- [x] 6. **表单/问卷模块 (`/modules/form`)**
    - [x] 6.1. 定义创建和更新表单的 Zod 验证 schema。
    - [x] 6.2. 实现表单服务 (`form.service.ts`)：
        - [x] `createForm` (关联创建者 User)
        - [x] `getFormWithBlocks` (获取表单及其所有区块)
        - [x] `getFormsByUser` (分页列表)
        - [x] `updateForm` (权限校验，只有创建者能修改)
        - [x] `updateFormBlocks` (用于保存整个表单的区块布局和属性)
        - [x] `deleteForm` (权限校验)
    - [x] 6.3. 实现表单控制器 (`form.controller.ts`)。
    - [x] 6.4. 创建表单路由 (`form.routes.ts`)，应用 JWT 认证中间件。

- [x] 7. **提交模块 (`/modules/submission`)**
    - [x] 7.1. 定义提交数据的 Zod 验证 schema (需要能验证动态的 JSON 结构)。
    - [x] 7.2. 实现提交服务 (`submission.service.ts`)：
        - [x] `createSubmission` (将包含所有区块答案的 JSON 数据存入数据库)
        - [x] `getSubmissionsByFormId` (权限校验，只有表单创建者能查看所有提交)
        - [x] `getSubmissionById`
    - [x] 7.3. 实现提交控制器 (`submission.controller.ts`)。
    - [x] 7.4. 创建提交路由 (`submission.routes.ts`)。

## 阶段三：高级功能与优化

- [x] 8. **结果统计与分析**
    - [x] 8.1. 设计并实现一个新的服务 `analysis.service.ts` 用于处理复杂的数据聚合。
    - [x] 8.2. 为表单设计一个新的 API 端点 `GET /forms/{id}/results`，并由新的控制器 `analysis.controller.ts` 处理。
    - [x] 8.3. 在服务层聚合提交数据，为不同类型的区块（如选择题、文本题）提供不同的统计视图。
    - [x] 8.4. 返回格式化的、多维度的统计结果，例如：
        - [x] 选择题的选项计数和百分比。
        - [x] 文本题的词云分析或常见词汇列表。
        - [x] 提交来源（IP、时间段）的统计。
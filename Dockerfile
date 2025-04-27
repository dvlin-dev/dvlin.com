# 第一阶段：构建应用
FROM node:20-alpine AS build

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json（或pnpm-lock.yaml）
COPY package.json pnpm-lock.yaml ./

# 安装pnpm
RUN npm install -g pnpm

# 安装依赖
RUN pnpm install

# 复制所有源代码
COPY . .

# 构建项目
RUN pnpm build

# 第二阶段：使用Nginx提供静态内容
FROM nginx:alpine

# 从构建阶段复制构建产物到Nginx的静态资源目录
COPY --from=build /app/dist /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx服务器
CMD ["nginx", "-g", "daemon off;"]

# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:alpine

# 复制 Astro 构建产物到 Nginx 的静态资源目录
COPY ./dist /usr/share/nginx/html

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx 服务器
CMD ["nginx", "-g", "daemon off;"]

# react-project-demo

## 简述
    基于react v16搭建的项目框架，通过脚手架create-react-app v1.5创建出的基础框架，然后
    再手动加入路由、redux、国际化等扩展功能，组件库使用antd v3.10，使用fetch API和后台交互，
    编写样式可以使用scss和less方式书写，项目中默认启用eslint对基础语法进行检查
    核心依赖插件的版本如下：
    react: 16.3.2
    react-router: 3.2.0
    redux: 4.0.0
    webpack: 3.8.1
    antd: 3.10.1

    PS: 开发环境建议使用node v6.11.0, npm v6.0.1的环境，node版本较高可能导致安装node-sass失败
## 运行
	1. 将项目代码clone下来，可通过前端开发工具（webstorm、vscode或notepad++等）打开编辑
	2. npm install	根据package.json配置文件安装项目需要的所有依赖
	3. npm start	启动项目（默认3000端口号）
	
	PS；npm start默认是从国外镜像地址安装依赖，比较慢，可设置cnpm从国内淘宝镜像地址中下载。
	设置方式	npm install cnpm -g --registry=https://registry.npm.taobao.org
## 访问
	localhost:3000

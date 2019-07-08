# [React Laboratory](https://liuzane.github.io/react-laboratory/)
This is a the React experiment project.
## Features
* Create-React-App
* Multi-page application
* React Router & React Redux
* Ant Design
* International language
* ESLint validation
* In and out of the animation
* The react-app-rewired configuration
## How to add environment variables
.env
> 注意：[create-react-app 会去掉node环境变量](https://www.html.cn/create-react-app/docs/adding-custom-environment-variables/)，想要添加变量需要加上前缀REACT_APP_

> 如果想更改端口等配置，请参考 [create-react-app 高级配置](https://www.html.cn/create-react-app/docs/advanced-configuration/)
```text
REACT_APP_SCRIPT=$npm_lifecycle_event   // 加上 $ 表示是获取 process.env 中的变量
REACT_APP_xxx=xxx                       // 模板
```

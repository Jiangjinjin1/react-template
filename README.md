This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## 如果使用vscode，再添加.editorconfig

> 注意：解决项目‘LF’的问题！！！

> 1.拉代码之前，要先设置git 规则和vscode的规则

```text
git需要设置：git config --global core.autocrlf input
vscode设置："files.eol": "\n"
```

## 依赖包作用解释

> @babel/plugin-proposal-class-properties  是类中定义实例属性的新方法,以前定义实例的属性只能写在constructor中，现在可以直接写在外面

```javascript
//以前定义实例属性写在constructor
class Test extends React.Component{
	constructor(props){
		super(props)
		this.state = {}
	}
}
//现在定义实例属性可以直接写在外面
class Test extends React.Component{
	state = {}
}
```

> @babel/plugin-proposal-decorators  使用修饰器语法
我使用修饰器语法的场景：

**react的状态管理mobx需要@observable、@observer来观察变化
react路由需要@withRouter将路由信息传递给组件的props对象上
antd组件的form表单@Form.create()等**

> case-sensitive-paths-webpack-plugin  兼容不同系统下的webpack获取的实际路径

> eslint-plugin-import  eslint-import-resolver-babel-module  两个库结合使用

```javascript
// 在.eslintrc.json中配置
"settings": {
    "import/resolver": {
      "babel-module": {}
    }
}
```
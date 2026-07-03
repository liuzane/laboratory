// 样式
import './styles';

// 应用入口
import App from './App';

const app: App = new App();

document.getElementById('app')!.append(...app.render());

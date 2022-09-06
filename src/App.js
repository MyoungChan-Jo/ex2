
import 'antd/dist/antd.css';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import MainPageComponent from './main/index.js';
import ProductPage from "./product/index";
import UploadPage from "./upload/index";

function App() {
  return (
    
    <div>
      <Switch>
        <Route path="/" exact component={MainPageComponent} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/upload" component={UploadPage} />
      </Switch>
    </div>
  );
}

export default App;


{/*
    <Switch>
        <Route exact={true} patch = "/" >
          <MainPageComponent/>
        </Route>
        <Route exact={true} path="/product">
          <ProductPage/>
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage/>
        </Route>
      </Switch> 강의대로가면 에러남
  */}
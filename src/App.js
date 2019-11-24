import React, {Component} from 'react';
import {Tabs} from 'antd';
import InPlay from './components/InPlay';
import Upcoming from './components/UpComing';
import './App.css';
import 'antd/dist/antd.css';

const { TabPane } = Tabs;

class App extends Component{
   constructor(props){
     super(props);
   }

    callback = (key) => {
        console.log(key);
    };

   render(){
     return(
         // Main
         <Tabs defaultActiveKey="1" onChange={this.callback}>
             <TabPane tab="In Play" key="1">
                 <InPlay/>
             </TabPane>
             <TabPane tab="Up Coming" key="2">
                 <Upcoming/>
             </TabPane>
         </Tabs>
     )
   }
}


export default App;

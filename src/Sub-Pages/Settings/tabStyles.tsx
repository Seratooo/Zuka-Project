import React from "react";
import { TabBar } from "react-native-tab-view";


const  renderTabBar  =  (props:any)  =>  ( 
  <>
  < TabBar 
    { ... props } 
    indicatorStyle = { {  backgroundColor : '#b57d03' } } 
    style = { {  backgroundColor : 'white' } } 
    labelStyle = {{color: 'black'}}
  /> 
  
  </>
) ;
export default renderTabBar;
import { Button, Row, Col,Form,Input,Checkbox} from "antd";
import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import Register from '../component/Register';
import React,{useState}from 'react';

export default function Member(){
    return(
        <div className="wrapper">
        <MyNav/>
        <Register/>
        <MyFooter/>
    </div>
    )
}
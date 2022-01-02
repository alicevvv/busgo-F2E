import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import Memberinfo from "../component/Memberinfo";
import React,{useState}from 'react';

export default function MyMember(){
    return(
    <div className="wrapper">
        <MyNav/>
        <Memberinfo/>
        <MyFooter/>
    </div>
    )
}
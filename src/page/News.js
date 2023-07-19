import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Select, Input, Button, Typography, List, Collapse } from "antd";
import { getNews } from "../api/busApi";
import { CaretRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import React,{ useEffect, useState } from "react";

const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;
const { Panel } = Collapse;

export default function News() {
  
  const [newsData, setNewsData]=useState([]);

  const onSearch = (value) => {
    console.log(value);
  };
  async function getRecentNews(){
    setNewsData([]);
    const allNews = await getNews();
    console.log(allNews);
    setNewsData(allNews);
  }

  useEffect(()=>{
    getRecentNews();
    console.log(newsData);
  },[])

  return (
    <div className="wrapper">
      <MyNav />
      <div className="d-flex justify-content-center minh">
        {
          newsData.length>1?
          <Collapse
          bordered={false}
          // defaultActiveKey={['1']}
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
          className="site-collapse-custom-collapse bg-white"
          style={{width:'600px',height:'auto',marginTop:'20px'}}
        >
          {
              newsData.map((item)=>{
                return(
                  <Panel header={item.newsTitle} className="site-collapse-custom-panel">
                  <p>詳細：{item.newsDescription}</p>
                  <div className="d-flex justify-content-end">發佈時間：{item.newsPublishTime}</div>
                  <div className="d-flex justify-content-end">更新時間：{item.newsUpdateTime}</div>
                </Panel>
                )
              })
            }
        </Collapse>
        :<div></div>
        }
        
      </div>
      <MyFooter />
    </div>
  );
}

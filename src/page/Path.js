import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Divider, Input, Space, Radio, Modal, Button, Spin } from "antd";
import { QuestionCircleOutlined,LoadingOutlined} from "@ant-design/icons";
import React, { useState } from "react";
import BusStation from "../component/BusStation";
import busdata from "../json/BusData.json";
import { getAllRoutes,getBusGoStop } from "../api/busApi";
import { useEffect } from "react/cjs/react.development";

const { Search } = Input;
const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const findDegree = (degree) => {
  if (degree === "normal") {
    return <div className="busdegree degree-yellow">FAD-061</div>;
  } else if (degree === "high") {
    return <div className="busdegree degree-orange">FAD-053</div>;
  }
};


export default function Path() {
  // console.log(pathname.value);
  // alert(pathname);
  // model
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  // route data
  const [routeData,setRouteData]=useState([]);

  async function getRoutes(){
    let nameDatas = [];
    setRouteData([]);
    const allRoutes = await getAllRoutes();
    if(allRoutes){
      for(let i=0;i<allRoutes.length;i++){
        const nameData = {
          routeName: allRoutes[i].routeName
        };
        nameDatas.push(nameData);
      }
      setRouteData(nameDatas);
    }
  }

  const [GoBusDatas, setGoBusDatas]=useState([]);
  const [startStop,setStartStop] = useState('');
  const [lastStop,setLastStop] = useState('');
  async function getBusGotoStops(value){
      const allBusGoStops = await getBusGoStop(value);
      setGoBusDatas(allBusGoStops);
      // setStartStop(allBusGoStops.StopName)
      // setLastStop(allBusGoStops[allBusGoStops.length - 1].StopName)
  }
  async function getBusTime(value){
    // const allTime = await getBusGoTime(value);
  }
    
  const [busName,setBusName]=useState([]);
  useEffect(()=>{
    getRoutes();
    getBusGotoStops(278);
    setBusName(278);
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
    // getBusTime(278);
  },[]);
  // search
  const onSearch = (value) =>{
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
    getBusGotoStops(value);
    setBusName(value);
    getBusTime(value);
  }
  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh">
        <Col
          xs={{ span: 24, offset: 0 }}
          md={{ span: 24, offset: 0 }}
          xl={{ span: 8, offset: 2 }}
        >
          <div className="flex-column align-items-center mt-3">
            <Search
              placeholder="輸入公車路線/站牌"
              style={{ width: "295px", fontSize: 16 }}
              onSearch={onSearch}
              list="data"
              enterButton
            />
            <datalist id="data" style={{height:'5em',overflow:'hidden'}}>
              {routeData.map((item, index)=>
              <option value={item.routeName} key={index}></option>
              )}
            </datalist>
            <div style={{ marginTop: "90px" }}>FAD-061</div>
            <div className="mt-3">
              <img src="./img/bus_m.svg"></img>
            </div>
            <div className="mt-3">公車擁擠度：普通</div>
            <div className="mt-5 mb-4">
              <img src="./img/bus_degree.svg"></img>
            </div>
          </div>
        </Col>
        <Col xs={0} md={0} xl={{ span: 2 }}></Col>
        <Col xs={2} md={2} xl={2} className="bg-light"></Col>
        <Col xs={20} sm={20} md={20} xl={8} className="bg-light">
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="font-normal" style={{ fontSize: "24px" }}>
              {busName}路線{" "}
              <Button className="btn-businfo" onClick={showModal}>
                {<QuestionCircleOutlined />}
              </Button>
              {/* <div style={{ fontSize: "16px" }}>已收藏個站牌</div> */}
            </span>
            <Modal
              title=""
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              style={{ borderRadius: "20px" }}
              footer={false}
            >
              <div style={{padding:'20px'}}>
                <p>起迄站名 : </p>
                <p>{startStop} - {lastStop}</p>
                <Divider/>
                <p>業者服務電話 : 臺北客運 0800-003-307</p>
                <p>新北市政府交通局公車申訴服務電話 : 02-89682460</p>
              </div>
            </Modal>
            <Radio.Group name="directionRadioGroup" defaultValue={0}>
              <Space direction="vertical">
                <Radio value={0}>去程</Radio> 
                {/* 往三峽北大社區 */}
                <Radio value={1}>回程</Radio>
                {/* 往板橋公車站 */}
              </Space>
            </Radio.Group>
          </div>
          <div
          className="mb-4"
            style={{
              marginTop: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "start",
              maxHeight: "55vh",
              overflowY: "scroll",
            }}
          >
            { console.log(isLoading),
              isLoading ===true?
              <Spin indicator={loadingIcon} />
              :
            <div className="flex-column" style={{ width: "100%" }}>
              <Row>
                <Col span={6}>
                  {GoBusDatas.map((item) => {
                    console.log(item.BusStatus);
                    if(item.BusStatus == 1){
                      return <div className="bg-yellow bustimeBadge">{item.BusTime}</div>;
                    }else{
                      return <div className="bg-primary bustimeBadge">{item.BusTime}</div>;
                    }
                  })}
                </Col>
                <Col span={10}>
                  {GoBusDatas.map((item) => {
                  return <div className="busstation">
                    {item.Stopname}</div>
                  })}
                </Col>
                <Col span={2}>
                  <Radio className="busradio"></Radio>
                </Col>
                <Col span={1}></Col>
                <Col span={5}>
                  {/* {findDegree(busdata.degree)} */}
                  {/* {console.log(item.index)} */}
                  </Col>
                <Col span={1}></Col>
              </Row>
            </div>
            }
          </div>
        </Col>
        <Col xs={2} md={2} xl={2} className="bg-light"></Col>
      </Row>
      <MyFooter />
    </div>
  );
}

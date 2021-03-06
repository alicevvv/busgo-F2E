import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Divider, Input, Space, Radio, Modal, Button, Spin } from "antd";
import { QuestionCircleOutlined,LoadingOutlined} from "@ant-design/icons";
import React, { useContext, useState } from "react";
import BusStation from "../component/BusStation";
import busdata from "../json/BusData.json";
import { getAllRoutes,getBusGoStop,getBusBackStop } from "../api/busApi";
import { useEffect } from "react";
import { StoreContext } from "../store";


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
  // alert(pathname);
  // model
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const {state:{searching}} = useContext(StoreContext);
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
  const [BackBusDatas, setBackBusDatas] = useState([]);
  const [direction,setdirection] = useState('go');
  const [nowDatas, setNowDatas]=useState([]);
  const [startStop,setStartStop] = useState('');
  const [lastStop,setLastStop] = useState('');
  async function getBusGotoStops(value){
      const allBusGoStops = await getBusGoStop(value);
      setGoBusDatas(allBusGoStops);
      setNowDatas(allBusGoStops);
      // const allBusBackStops = [...allBusGoStops].reverse();
      // setBackBusDatas(allBusBackStops);
      setStartStop(allBusGoStops[0].Stopname);
      setLastStop(allBusGoStops[allBusGoStops.length - 1].Stopname);
  }
  async function getBusBackStops(value){
    const allBusBackstop = await getBusBackStop(value);
    setBackBusDatas(allBusBackstop);
    setNowDatas(allBusBackstop);
    // const allTime = await getBusGoTime(value);
  }
    
  const [busName,setBusName]=useState([]);
  useEffect(()=>{
    getRoutes();
    getBusGotoStops(searching.busName);
    setBusName(searching.busName);
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
  },[]);
  // search

  const onSearch = (value) =>{
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
    getBusGotoStops(value);
    setBusName(value);
    setdirection('go');
    // getBusTime(value);
  }

  const backRoute = e =>{
    // setGoBusDatas(BackBusDatas);
    console.log(e.target.value);
    if(e.target.value === "go"){
      // setNowDatas(GoBusDatas);
      getBusGotoStops(busName);
      setdirection('go');
    }else if (e.target.value==="back"){
      getBusBackStops(busName);
      setdirection('back');
    }
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
              placeholder="??????????????????/??????"
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
            <div className="mt-3">????????????????????????</div>
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
              {busName}??????{" "}
              <Button className="btn-businfo" onClick={showModal}>
                {<QuestionCircleOutlined />}
              </Button>
              {/* <div style={{ fontSize: "16px" }}>??????????????????</div> */}
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
                <p className="yellow-rec">???????????? : </p>
                <p>{startStop} - {lastStop}</p>
                <Divider/>
                <p>?????????????????? : ???????????? 0800-003-307</p>
                <p>???????????????????????????????????????????????? : 02-89682460</p>
              </div>
            </Modal>
            <Radio.Group name="directionRadioGroup" value={direction} onChange={backRoute}>
              <Space direction="vertical">
                <Radio value={'go'} defaultChecked={true}>??????</Radio> 
                {/* ????????????????????? */}
                <Radio value={'back'}>??????</Radio>
                {/* ?????????????????? */}
              </Space>
            </Radio.Group>
          </div>
          <div
          className="mb-4"
            style={{
              marginTop: "30px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "start",
              height: "calc(100vh - 387px)",
              overflowY: "scroll",
            }}
          >
            { isLoading ===true?
              <Spin indicator={loadingIcon} />
              :
            <div className="flex-column" style={{ width: "100%" }}>
              <Row>
                <Col span={6}>
                  {nowDatas.map((item) => {
                    if(item.BusStatus == 1){
                      return <div className="bg-yellow bustimeBadge">{item.BusTime}</div>;
                    }else{
                      return <div className="bg-primary bustimeBadge">{item.BusTime}</div>;
                    }
                  })}
                </Col>
                <Col span={10}>
                  {nowDatas.map((item) => {
                  return <div className="busstation">
                    {item.Stopname}</div>
                  })}
                </Col>
                <Col span={2}>
                  {
                   nowDatas.map(()=>{
                     return <div className="radioWrapper">
                       <div className="busCircle"></div>
                        {/* <div className="circleLine"></div> */}
                       {/* <Radio className="busradio"></Radio> */}
                       </div>
                   })
                  }
                </Col>
                <Col span={1}></Col>
                <Col span={5}>
                  {/* {findDegree(busdata.degree)} */}
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

import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Divider, Input, Space, Radio, Modal, Button, Spin, Select } from "antd";
import { QuestionCircleOutlined,LoadingOutlined} from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { getAllRoutes,getBusGoStop,getBusBackStop } from "../api/busApi";
import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { StoreContext } from "../store";
import { useNavigate, useLocation } from "react-router-dom";
import { setSearchName } from "../action/index";
import { useDispatch } from "react-redux";
const loadingIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


export default function Path() {
  // model
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading,setIsLoading] = useState(true);
  const {state:{searching}, dispatch} = useContext(StoreContext);
  const [routeData,setRouteData]=useState([]);
  const [searchBusName,setSearchBusName] = useState();
  const [busName,setBusName]=useState([]);
  const [GoBusDatas, setGoBusDatas]=useState([]);
  const [BackBusDatas, setBackBusDatas] = useState([]);
  const [direction,setdirection] = useState('go');
  const [nowDatas, setNowDatas]=useState([]);
  const [startStop,setStartStop] = useState('');
  const [lastStop,setLastStop] = useState('');

  const location = useLocation();



  const navigate = useNavigate();

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

  async function getRoutes(){
    let nameDatas = [];
    setRouteData([]);
    const allRoutes = await getAllRoutes();
    if(allRoutes){
      for(let i=0;i<allRoutes.length;i++){
        const nameData = {
          value: allRoutes[i].routeName,
          label:allRoutes[i].routeName
        };
        nameDatas.push(nameData);
      }
      setRouteData(nameDatas);
    }
  }

  
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

  const getSearchBusName = ()=>{

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

  const selectSearch = (value) =>{
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
    setBusName(value)
    getBusGotoStops(value);
    setdirection('go');

    setSearchName(dispatch,value)
    navigate(`/path:${value}`)
  }

  useEffect(()=>{
    if(location.pathname.split(':')[1]==''){

      navigate('/')
    }
    getRoutes();
    setBusName(decodeURI(location.pathname.split(':')[1]));
    getBusGotoStops(decodeURI(location.pathname.split(':')[1]));

    console.log(decodeURI(location.pathname.split(':')[1]));
    setTimeout(()=>{
      setIsLoading(false);
    },2000);
  },[]);

  

  // const handleSearch = (value) =>{
  //   setSearchName(dispatch,value);
  //   navigate(`/path:${value}`)
  // }

  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh">
        <Col
          xs={{ span: 24, offset: 0 }}
          md={{ span: 24, offset: 0 }}
          xl={{ span: 8, offset: 2 }}
        >
          <div className="flex-column align-items-center justify-content-center h100">
            <Select
              showSearch
              placeholder="輸入公車路線/站牌"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              style={{ width: "249px", fontSize: 16, marginBottom:'36px'}}
              options={routeData}
              onSelect={selectSearch}
            >
            </Select>
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
              marginTop:'12px'
            }}
          >
            <span className="font-normal" style={{ fontSize: "24px" }}>
              {busName}路線{" "}
              <Button className="btn-businfo" onClick={showModal}>
                {<QuestionCircleOutlined />}
              </Button>
            </span>
            <Modal
              title=""
              onOk={handleOk}
              onCancel={handleCancel}
              style={{ borderRadius: "20px" }}
              footer={false}
              visible={isModalVisible}
            >
              <div style={{padding:'20px'}}>
                <p className="yellow-rec">起迄站名 : </p>
                <p>{startStop} - {lastStop}</p>
                <Divider/>
                <p>業者服務電話 : 臺北客運 0800-003-307</p>
                <p>新北市政府交通局公車申訴服務電話 : 02-89682460</p>
              </div>
            </Modal>
            <Radio.Group name="directionRadioGroup" value={direction} onChange={backRoute}>
              <Space direction="vertical">
                <Radio value={'go'} defaultChecked={true}>去程</Radio> 
                <Radio value={'back'}>回程</Radio>
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
              height: "calc(100vh - 277px)",
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
                       </div>
                   })
                  }
                </Col>
                <Col span={1}></Col>
                <Col span={5}></Col>
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

import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Select, Input, Typography, List, Button } from "antd";
import { CaretDownOutlined,SearchOutlined } from "@ant-design/icons";
import newsdata from "../json/Newsdata.json";
import { Link } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import { getAllRoutes, getNews ,getBusGoStop} from "../api/busApi";
import { setSearchName } from "../action/index";
import { StoreContext } from "../store";

const { Option } = Select;
const { Title } = Typography;


function Home() {
  const [routeData,setRouteData]= useState([]);
  const [newsData,setNewsData] = useState([]);
  const [GoBusDatas, setGoBusDatas]=useState([]);
  const { state: { searching }, dispatch } = useContext(StoreContext);
  // console.log(busName);

  // async function _search_options(searchName) {
  //   setRouteData([]);
  //   console.log(searchName);
  //   if(searchName.value==='none') return;
  //   const allRoutes = await getAllRoutes(searchName.value);
  // }

  async function getRoutes(){
    let nameDatas = [];
    setRouteData([]);
    const allRoutes = await getAllRoutes();
    if(allRoutes){
      for(let i=0;i< allRoutes.length;i++){
        const nameData={
          routeName: allRoutes[i].routeName
        };
        nameDatas.push(nameData);
      }
      setRouteData(nameDatas);
    }
  }
  async function getRecentNews(){
    let allData = [];
    setNewsData([]);
    const allNews = await getNews();
    if(allNews){
      for(let i=0;i<allNews.length;i++){
        const data={
          title: allNews.newsTitle
        }
        allData.push(data);
      }
      setNewsData(allData);
    }
  }
  async function getBusGotoStops(value){
    const allBusGoStops = await getBusGoStop(value);
    setGoBusDatas(allBusGoStops);
}

  useEffect(()=>{
    getRoutes();
    getRecentNews();
    getBusGotoStops('278');
  },[]);

  const [getBusName,setBusName] = useState();
  
  const getSearchName=()=>{
    var val = document.getElementById('searchInput').value;
    setSearchName(dispatch,val)
    setBusName(val);
  }

  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh">
        <Col xs={24} md={24} xl={12}>
          <div className="flex-column align-items-center mt-3">
            <Select
              suffixIcon={<CaretDownOutlined style={{ color: "#343E4B" }} />}
              defaultValue="????????????/??????"
              style={{ width: 160, fontSize: "18px" }}
              bordered={false}
              className="mb-4 weight700"
            >
              <Option value="????????????/??????">????????????/??????</Option>
              <Option value="???????????????">???????????????</Option>
            </Select>
            <div className="d-flex flex-row"
            style={{marginBottom: "100px"}}
            >
            <Input
              placeholder="??????????????????/??????"
              style={{ width: "249px", fontSize: 16}}
              list="data"
              id="searchInput"
              
            />
            <Link to={`path:${getBusName}`} onClick={getSearchName}>
              <Button type="primary" icon={<SearchOutlined />}
              style={{width:'49px',height:'35px'}}
              />
            </Link>
            {/* <button onClick={getSearchName}></button> */}
            
            </div>
            <datalist id="data" style={{height:'5em',overflow:'hidden'}}>
              {routeData.map((item)=>
              <option value={item.routeName}></option>
              )}
            </datalist>
            <img src="./img/mascot.svg"></img>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} xl={12} className="bg-light">
          <div className="flex-column align-items-center mt-3">
            <div
              className="flex-row"
              style={{
                width: "475px",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Title level={4}>????????????</Title>
              <Link to="./news" type="text">
                MORE+
              </Link>
            </div>
            <List
              bordered
              dataSource={newsdata}
              renderItem={(item) => (
                <List.Item>
                  <Link to="./">{item}</Link>
                </List.Item>
              )}
            />
          </div>
        </Col>
      </Row>
      <MyFooter />
    </div>
  );
}

export default Home;

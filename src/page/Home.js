import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Select, Input, Typography, List, Button } from "antd";
import { CaretDownOutlined,SearchOutlined } from "@ant-design/icons";
// import newsdata from "../json/Newsdata.json";
import { Link } from "react-router-dom";
import React,{ useState ,useEffect, useContext} from "react";
import { getAllRoutes, getNews ,getBusGoStop} from "../api/busApi";
import { setSearchName } from "../action/index";
import { StoreContext } from "../store";
import { useNavigate } from "react-router-dom";

const { Option } = Select;
const { Title } = Typography;


function Home() {
  const [routeData,setRouteData]= useState([]);
  const [newsData,setNewsData] = useState([]);
  const [GoBusDatas, setGoBusDatas]=useState([]);
  const { state: { searching }, dispatch } = useContext(StoreContext);
  const navigate = useNavigate();

  async function getRoutes(){
    let nameDatas = [];
    setRouteData([]);
    const allRoutes = await getAllRoutes();
    if(allRoutes){
      for(let i=0;i< allRoutes.length;i++){
        const nameData={
          value: allRoutes[i].routeName,
          label: allRoutes[i].routeName
        };
        nameDatas.push(nameData);
      }
      setRouteData(nameDatas);
    }
  }
  async function getRecentNews(){
    setNewsData([]);
    const allNews = await getNews();
    setNewsData(allNews);
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

  const handleSearch=(value)=>{
    setSearchName(dispatch,value);
    navigate(`/path:${value}`)
  }

  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh">
        <Col xs={24} md={24} xl={12}>
          <div className="flex-column align-items-center mt-3">
            <div className="mb-4" style={{fontSize: "16px"}}>
              查詢路線/站牌
            </div>
            <div className="d-flex flex-row"
            style={{marginBottom: "100px"}}
            >
            <Select
              showSearch
              placeholder="輸入公車路線/站牌"
              optionFilterProp="children"
              filterOption={(input, option) => (option?.label ?? '').includes(input)}
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
              }
              style={{ width: "249px", fontSize: 16}}
              options={routeData}
              onSelect={handleSearch}
              id="searchInput"
            >
            </Select>
            {/* <Link to={`path:${getBusName}`} onClick={getSearchName}>
              <Button type="primary" icon={<SearchOutlined />}
              style={{width:'49px',height:'35px'}}
              />
            </Link> */}
            </div>
            <img src="./img/mascot.svg"></img>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} xl={12} className="bg-light">
          <div className="flex-column align-items-center mt-3">
            <div
              className="flex-row"
              style={{
                width: "475px",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Title level={4}>最新公告</Title>
              <Link to="./news" type="text">
                MORE+
              </Link>
            </div>
            <List
              bordered
              dataSource={newsData}
              style={{maxWidth:'480px'}}
              renderItem={(item) => (
                <List.Item>
                  <Link to={`./news`}
                    style={{maxWidth:'440px',whiteSpace:'nowrap',overflow:'hidden', textOverflow:'ellipsis'}}
                  >{item.newsTitle}</Link>
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

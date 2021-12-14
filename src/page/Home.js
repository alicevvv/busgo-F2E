import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Select, Input, Typography, List, Button } from "antd";
import { CaretDownOutlined,SearchOutlined } from "@ant-design/icons";
import newsdata from "../json/Newsdata.json";
import { Link } from "react-router-dom";
import { useState ,useEffect, useContext} from "react";
import searchOption from "../json/searchOption.json"
import { getAllRoutes } from "../api/busApi";
import { StoreContext } from "../store";

const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;


function Home() {
  const [routeData,setRouteData]= useState([]);
  // const {state:{ busName }, dispatch} = useContext(StoreContext);
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

  useEffect(()=>{
    getRoutes();
  },[]);

  const [getBusName,setBusName] = useState();
  
  const getSearchName=()=>{
    var val = document.getElementById('searchInput').value;
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
              defaultValue="查詢路線/站牌"
              style={{ width: 160, fontSize: "18px" }}
              bordered={false}
              className="mb-4 weight700"
            >
              <Option value="查詢路線/站牌">查詢路線/站牌</Option>
              <Option value="查詢目的地">查詢目的地</Option>
            </Select>
            {/* <Search
              placeholder="輸入公車路線/站牌"
              // id="route_input"
              style={{ width: "295px", fontSize: 16, marginBottom: "100px" }}
              onSearch={onSearch}
              list="data"
              enterButton
            /> */}
            <div className="d-flex flex-row"
            style={{marginBottom: "100px"}}
            >
            <Input
              placeholder="輸入公車路線/站牌"
              style={{ width: "249px", fontSize: 16 }}
              list="data"
              id="searchInput"
              onChange={getSearchName}
            />
            <Link to={`./path:${getBusName}`}>
              <Button type="primary" icon={<SearchOutlined />}
              style={{width:'49px',height:'35px'}}
              />
            </Link>
            
            </div>
            <datalist id="data">
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
              <Title level={4}>最新公告</Title>
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

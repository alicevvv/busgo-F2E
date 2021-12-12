import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Select, Input, Button, Typography, List } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import newsdata from "../json/Newsdata.json";
import { Link } from "react-router-dom";
import { useState ,useEffect} from "react";
import searchOption from "../json/searchOption.json"
import { getAllRoutes } from "../api/busApi";

const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;


function Home() {
  const [busName,setbusName] = useState("");
  const [first,setFirst] = useState(1);
  const [routeData,setRouteData]= useState([]);

  const onSearch = (value) => {
    console.log('value'+value);
    window.location.href='./path';
  };

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

  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh">
        <Col xs={24} md={24} xl={12}>
          <div className="flex-column align-items-center mt-3">
            <Select
              suffixIcon={<CaretDownOutlined style={{ color: "#343E4B" }} />}
              defaultValue="查詢目的地"
              style={{ width: 160, fontSize: "18px" }}
              bordered={false}
              className="mb-4 weight700"
            >
              <Option value="查詢目的地">查詢目的地</Option>
              <Option value="查詢路線/站牌">查詢路線/站牌</Option>
            </Select>
            <Search
              placeholder="輸入公車路線/站牌"
              // id="route_input"
              style={{ width: "295px", fontSize: 16, marginBottom: "100px" }}
              onSearch={onSearch}
              list="data"
              enterButton
            />
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

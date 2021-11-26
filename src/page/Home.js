import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Space, Row, Col, Select, Search } from "antd";

const { Option } = Select;

function Home() {
  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh">
        <Col md={24} xl={12}>
          <div className="flex-column align-items-center">
            <Select
              defaultValue="查詢目的地"
              style={{ width: 160 }}
              bordered={false}
            >
              <Option value="查詢目的地">查詢目的地</Option>
              <Option value="查詢路線/站牌">查詢路線/站牌</Option>
            </Select>
            <Search
              placeholder="輸入公車路線/站牌"
              value="932"
              id="route_input"
              style={{ width: "100%", fontSize: 16, color: "#1890ff" }}
            />
            <img src="./img/mascot.png"></img>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} xl={12} className="bg-light">
          <div></div>
        </Col>
      </Row>
      <MyFooter />
    </div>
  );
}

export default Home;

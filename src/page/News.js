import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Select, Input, Button, Typography, List } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import newsdata from "../json/Newsdata.json";
import { Link } from "react-router-dom";

const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;
const onSearch = (value) => {
  console.log(value);
};

export default function News() {
  return (
    <div className="wrapper">
      <MyNav />
      <Row className="minh">
        <Col xs={24} md={24} xl={12}></Col>
        <Col xs={0} md={0} xl={12} className="bg-light"></Col>
      </Row>
      <MyFooter />
    </div>
  );
}

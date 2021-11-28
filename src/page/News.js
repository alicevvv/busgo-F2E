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
      <Row className="minh"></Row>
      <MyFooter />
    </div>
  );
}

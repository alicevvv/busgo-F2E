import React from "react";
import { Row, Col, Typography, Menu, Dropdown } from "antd";
import { MoreOutlined } from "@ant-design/icons";
const { Title } = Typography;

const menu = (
  // <Menu>
  //   <Menu.item>
  //     <a>1</a>
  //   </Menu.item>
  //   <Menu.item>
  //     <a>2</a>
  //   </Menu.item>
  //   <Menu.item>
  //     <a>3</a>
  //   </Menu.item>
  // </Menu>
  <Menu>
    <Menu.Item key="0">
      <a href="">增加群組</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="1">
      <a href="">修改群組</a>
    </Menu.Item>
  </Menu>
);

export default function Memberinfo() {
  return (
    <div class="wrapper">
      <Row className="justify-content-center">
        <h1>Hello,<span className="text-yellow">atain.625</span>!</h1>
      </Row>
      <Row style={{ minHeight: "600px" }}>
        <Col
          xs={{ span: 20, offset: 2 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 9, offset: 3 }}
          style={{ padding: "0px 8px" }}
        >
          <div className="member-card">
            <Title level={4}>會員資訊</Title>
            <Row>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                <div className="d-flex flex-column justify-content-between h-100">
                  <div>
                    <h5 className="text-size-14">帳戶｜atain.625</h5>
                    <h5 className="text-size-14">信箱｜A112233@gmail.com</h5>
                  </div>
                  <div>
                    <button
                      className="btn-member-info"
                      style={{ marginRight: "0.5rem" }}
                    >
                      修改資訊
                    </button>
                    <button className="btn-member-info">設定</button>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                <img src="../img/card.png" />
              </Col>
            </Row>
          </div>
          <div className="member-card">
            <Title level={4}>到站提醒</Title>
            <Row style={{ alignItems: "end" }}>
              <img className="mr-2" src="./img/bell.svg" />
              <h4 className="mr-2">3分鐘</h4>
              <h4 className="mr-2">805</h4>
              <h4 className="mr-2">|</h4>
              <h4>大同莊園</h4>
            </Row>
            <Row style={{ alignItems: "end" }}>
              <img className="mr-2" src="./img/bell.svg" />
              <h4 className="mr-2">5分鐘</h4>
              <h4 className="mr-2">939</h4>
              <h4 className="mr-2">|</h4>
              <h4>森林公園</h4>
            </Row>
            <Row style={{ alignItems: "end" }}>
              <img className="mr-2" src="./img/bell.svg" />
              <h4 className="mr-2">3分鐘</h4>
              <h4 className="mr-2">932</h4>
              <h4 className="mr-2">|</h4>
              <h4>板橋公車站</h4>
            </Row>
          </div>
        </Col>
        <Col
          xs={{ span: 20, offset: 2 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 9, offset: 0 }}
          style={{ padding: "0px 8px" }}
        >
          <div className="member-card" style={{ height: "576px" }}>
            <Row className="justify-content-between">
              <Title level={4}>我的路線</Title>
              {/* <MoreOutlined /> */}
              <Dropdown overlay={menu} trigger={["click"]} placement="bottomRight">
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                ><MoreOutlined style={{transform:'rotate(90deg)',fontSize:'1.6rem'}} />
                </a>
              </Dropdown>
            </Row>
            <img src="./img/myRoute.png"></img>
          </div>
        </Col>
      </Row>
    </div>
  );
}

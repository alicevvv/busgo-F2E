import MyNav from "../component/MyNav";
import MyFooter from "../component/Footer";
import { Row, Col, Divider, Input, Space, Radio, Modal, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import BusStation from "../component/BusStation";

const { Search } = Input;
const number = "932";

export default function Path() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
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
              placeholder="輸入公車路線/站牌"
              style={{ width: "295px", fontSize: 16 }}
              enterButton
            />
            <div style={{ marginTop: "90px" }}>FAD-061</div>
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
            class="mt-3"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span className="font-normal" style={{ fontSize: "24px" }}>
              932路線{" "}
              <Button className="btn-businfo" onClick={showModal}>
                {<QuestionCircleOutlined />}
              </Button>
              {/* <div style={{ fontSize: "16px" }}>已收藏個站牌</div> */}
            </span>
            <Modal
              title="Basic Modal"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              style={{ borderRadius: "20px" }}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Modal>
            <Radio.Group name="directionRadioGroup" defaultValue={0}>
              <Space direction="vertical">
                <Radio value={0}>往三峽北大社區</Radio>
                <Radio value={1}>往板橋公車站</Radio>
              </Space>
            </Radio.Group>
          </div>
          <div
          className="mb-4"
            style={{
              marginTop: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "start",
              maxHeight: "55vh",
              overflowY: "scroll",
            }}
          >
            <BusStation number={number} />
          </div>
        </Col>
        <Col xs={2} md={2} xl={2} className="bg-light"></Col>
      </Row>
      <MyFooter />
    </div>
  );
}

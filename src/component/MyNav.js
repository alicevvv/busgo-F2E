import React from "react";
import { Space, Row, Col } from "antd";
import { Link } from "react-router-dom";

export default function MyNav() {
  return (
    <div className="nav">
      <Row>
        <Col md={24} xl={12} className="minh pl-3">
          <div className="p-3">
            <img src="./img/logo.svg"></img>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} xl={12} className="minh bg-light">
          <div className="p-3">
            <div className="d-flex justify-content-end pr-3">
              <div class="menuBar">
                <Link to="./" class="p-3">
                  最新消息
                </Link>
                <Link to="./news" class="p-3">
                  附近站牌
                </Link>
                <Link to="./" class="p-3">
                  路線規劃
                </Link>
                <Link to="./" class="p-3">
                  乘客服務
                </Link>
                <Link to="./" class="p-3">
                  會員登入
                </Link>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

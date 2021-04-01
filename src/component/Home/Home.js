import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { getNutrition } from "../../action/index";
import "./Home.css";
import { Input, Button, Form, Row, Col } from "antd";

class Home extends Component {
  handleOnclick = (id, name) => {};

  onFinish = (values) => {
    const { fetchNutrition, history } = this.props;
    fetchNutrition({ ingr: values.ingr.split(/\n/) });
    history.push("/summary");
  };

  render() {
    return (
      <div className="br-ingredient-container">
        <Row>
          <Col span={12} offset={6}>
            <Form scrollToFirstError onFinish={this.onFinish}>
              <Form.Item
                rules={[{ required: true, message: "this is required" }]}
                name="ingr"
              >
                <Input.TextArea placeholder="Enter an ingredient " allowClear />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchNutrition: (ingr) => dispatch(getNutrition(ingr)),
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));

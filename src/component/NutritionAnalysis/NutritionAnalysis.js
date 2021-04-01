import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { Button, List, Card } from "antd";
import "./NutritionAnalysis.css";

const NutritionAnalysis = (props) => {
  const mappDate = () => {
    if (data) {
      const allReci = data.ingredients.map((item) => item.parsed[0]);
      return allReci.map((item, index) => ({
        title: `item ${index + 1}`,
        quantity: item.quantity,
        measure: item.measure,
        food: item.foodMatch,
        weight: item.weight,
        calories: item.nutrients["ENERC_KCAL"].quantity,
      }));
    }
  };

  const [showNutrition, setShowNutrition] = useState(false);
  const showNutritionDataVariable = [
    { name: "ENERC_KCAL" },
    { name: "FAT" },
    { name: "CHOLE" },
    { name: "NA" },
    { name: "FIBTG" },
    { name: "PROCNT" },
    { name: "TOCPHA" },
    { name: "VITA_RAE" },
    { name: "VITB6A" },
    { name: "VITB12" },
    { name: "VITC" },
    { name: "VITD" },
    { name: "VITK1" },
    { name: "CA" },
    { name: "FE" },
    { name: "P" },
  ];

  const {
    history,
    nutrition: { data },
  } = props;

  useEffect(() => {
    mappDate();
  }, [data]);

  const showNutritionData = () => {
    return showNutritionDataVariable.map((item) => (
      <div className="br-ingredient-analysis-container__nutrition">
        <div>
          {data.totalNutrients[item.name].label}:
          {data.totalNutrients[item.name].quantity.toFixed(1) +
            " " +
            data.totalNutrients[item.name].unit}
        </div>
        <div>
          {data.totalDaily[item.name].quantity.toFixed(1) +
            data.totalDaily[item.name].unit}
        </div>
      </div>
    ));
  };
  return (
    <>
      <div className="br-ingredient-analysis-container">
        <Button type="primary" onClick={() => setShowNutrition(true)}>
          Total Nutrition
        </Button>
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data ? mappDate() : []}
          renderItem={(item) => (
            <List.Item>
              <Card title={item.title}>
                <div>Qty: {item.quantity}</div>
                <div>Unit: {item.measure}</div>
                <div>food: {item.food}</div>
                <div>weight: {item.weight.toFixed(1)} g</div>
                <div>calories: {item.calories.toFixed(1)} kcal</div>
              </Card>
            </List.Item>
          )}
        />
        {showNutrition && (
          <Card title="Total Nutrition">{showNutritionData()}</Card>
        )}

        <Button
          className="mr-10"
          onClick={() => {
            history.push("/");
          }}
        >
          Back
        </Button>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {};

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NutritionAnalysis));

import { Card, Col, Divider, Button } from "antd";

const FoodBox = (food) => {
  return (
    <Col>
      <Card
      title={food.name}
      style={{ width: 230, height: 300, margin: 10 }}
      >
      <img src="{food.image}" alt="" width={100} />
      <p>Calories: {food.calories}</p>
      <p>Servings: {food.servings}</p>
      <p>
        <b>Total Calories: {food.calories * food.servings}</b>
      </p>
      <button type="primary"> Delete </button>
      </Card>
    </Col>
  )
}

export default FoodBox;
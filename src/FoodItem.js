function FoodItem(props) {
  const { food, onFoodOpenClick } = props;
  return (
    <div className="food-item">
      <img
        src={food.thumbnailUrl}
        onClick={() => {
          onFoodOpenClick(food);
        }}
      />
      <h4>{food.title}</h4>
    </div>
  );
}

export default FoodItem;

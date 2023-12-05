import './FoodPost.css';
function FoodPost(props) {
  const {food,offFood}= props
  return (
    <div className="food-post">
      <div className="food-post-bg" onClick={()=>{ offFood(null) }}/>
      <div className="food-post-content">
        <img src={food.thumbnailUrl} />
        <h4>{food.title}</h4>
      </div>
    </div>
  );
}
export default FoodPost;

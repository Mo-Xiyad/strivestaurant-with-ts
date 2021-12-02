import ListGroup from "react-bootstrap/ListGroup";
import { ItemInterFace } from "../helpers/ItemInterface";
interface DishCommentsProps {
  selectedDish: ItemInterFace;
}

const DishComments = ({ selectedDish }: DishCommentsProps) => (
  <ListGroup>
    {selectedDish ? (
      selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
);

export default DishComments;

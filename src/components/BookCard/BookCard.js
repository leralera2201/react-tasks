import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import { useHistory } from "react-router-dom";

const BookCard = ({ book: { title, description, id } }) => {
  const history = useHistory();

  const goToDetail = () => {
    history.push(`/books/${id}`);
  };

  return (
    <Card className={"card-width"}>
      <CardBody>
        <CardTitle tag="h3">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted mt-3">
          {description}
        </CardSubtitle>
        <Button onClick={goToDetail} className={"mt-3"}>
          Go to detail
        </Button>
      </CardBody>
    </Card>
  );
};

export default BookCard;

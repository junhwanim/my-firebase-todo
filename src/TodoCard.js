import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

export default function TodoCard(props) {
  const { subject, body, handleEdit, handleDelete } = props;

  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="h2">
          {subject}
        </Typography>
        <Typography variant="body2" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          size="small"
          onClick={handleEdit}
          color="primary"
        >
          Edit
        </Button>
        <Button
          variant="text"
          size="small"
          onClick={handleDelete}
          color="secondary"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function TodoCardDialog(props) {
  const { isDialogOpen, currentTodo, handleCloseDialog } = props;

  const subjectRef = useRef();
  const bodyRef = useRef();

  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => handleCloseDialog()}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Edit Todo</DialogTitle>
      <DialogContent>
        <div className="dialog-inputs">
          <TextField inputRef={subjectRef} autoFocus label="Subject" />
          <TextField inputRef={bodyRef} label="Body" multiline rows={5} />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleCloseDialog()} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() =>
            handleCloseDialog({
              id: currentTodo.id,
              subject: subjectRef.current.value,
              body: bodyRef.current.value,
            })
          }
          color="primary"
        >
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

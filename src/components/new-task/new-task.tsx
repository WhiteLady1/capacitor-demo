import React from 'react';
import { Button, Image, Modal } from '@nextui-org/react';

import PlusIcon from '../../img/plus.svg';

interface NewTaskProps {
  opened: boolean;
  onSave: (text: string) => void;
};

export const NewTask:React.FC<NewTaskProps> = ({
  opened,
  onSave,
}) => {
  const [newTask, setNewTask] = React.useState<string>('');

  const handelSave = () => {
    onSave(newTask);
  };

  return (
    <Modal open={opened}>
      <Modal.Body>
        textové pole
      </Modal.Body>
      <Modal.Footer>
        <Button
          color="secondary"
          css={{ minWidth: "unset" }}
          onClick={handelSave}
        >
          <Image src={PlusIcon} />
        </Button>
        <Button onClick={() => console.log('close')}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
import React from 'react';
import { Card, Checkbox } from '@nextui-org/react';
import { ToDoListInerface } from '../../source/data';
import './to-do-list.css';

interface ToDoListData {
  toDoListData: ToDoListInerface [];
  toDoColors: number;
  onChange: (id: string) => void;
};

export const ToDoList: React.FC<ToDoListData> = ({
  toDoListData,
  toDoColors,
  onChange,
}) => {
  const [data, setData] = React.useState([...toDoListData]);

  const setSelected = (id: string) => {
    setData(prevValue => prevValue.map(item => item.id === id ? {
      ...item,
      done: !item.done,
    } : item));
    onChange(id);
  };

  return (
    <ul className="to-do-list" style={{ margin: 0 }}>
      {data.map(listItem => (
        <Card
          key={listItem.id}
          variant="bordered"
          isHoverable
          isPressable
          onPressEnd={() => setSelected(listItem.id)}
          css={{ marginBottom: "15px"}}
        >
          <Card.Body css={{ padding:'$5' }}>
            <li className="to-do-list__item" style={{ marginBottom: 0 }}>
              <Checkbox
                color={toDoColors === 0 ? "warning" : "primary"}
                lineThrough
                isRounded
                isSelected={listItem.done}
                onChange={() => setSelected(listItem.id)}
                css={{ fontSize: "12px" }}
              >
                {listItem.itemName}
              </Checkbox>
            </li>
          </Card.Body>
        </Card>
      ))}
    </ul>
  );
};

import React from 'react';
import { ToDoCard, ToDoList } from '../components';
import { Button, Image, Text, User } from '@nextui-org/react';
import { DataInterface, ToDoListInerface } from '../source/data';

import ProfilePhoto from '../img/profile.JPEG';
import NotificationIcon from '../img/notification.svg';
import SearchIcon from '../img/search.svg';
import PlusIcon from '../img/plus.svg';

import './main-layout.css'

interface MainLayoutData {
  mainData: DataInterface[];
};

export const MainLayout: React.FC<MainLayoutData> = ({
  mainData
}) => {
  const [categoriColor, setCategoriColor] = React.useState<number>(0);
  const [addTask, setAddTask] = React.useState<boolean>(false);
  const [data, setData] = React.useState([...mainData]);

  const addNewTask = (text: string) => {
    console.log(text);
    setAddTask(!addTask);
  };

  const updateData = (id: string) => {
    console.log('update task with id:', id);
    setData(prevValue => prevValue.map(list => ({
      ...list,
      toDoList: list.toDoList.map(item => item.id === id ? {
        ...item,
        done: !item.done,
      } : item)
    })));
  };

  const getCountOfDoneTasks = (items: ToDoListInerface[]) => {
    const length = items.length;
    const count = items.filter(item => item.done=== true).length;
    if (length !== 0) {
      return (count/length) * 100;
    }
    return 0;
  };

  return (
    <div className="main-layout">
      <section className="main-layout__user">
        <User
          src={ProfilePhoto}
          name="Blanka S."
          css={{ paddingLeft: "$0"}}
          color="success"
          bordered
        />
        <div className="main-layout__user__icons">
          <Image
            width={25}
            src={NotificationIcon}
          />
          <Image
            width={30}
            src={SearchIcon}
          />
        </div>
      </section>
      <section className="main-layout__categories">
        <Text css={{ textTransform: "uppercase", fontSize: "12px", marginBottom: "10px" }}>Categories</Text>
        <div className="main-layout__categories__wrapper">
          {data.map((card, index) => (
            <ToDoCard
              key={card.id}
              count={card.toDoList.length}
              name={card.name}
              done={getCountOfDoneTasks(card.toDoList)}
              cardColor={index}
              onSelect={(number) => setCategoriColor(number)}
            />
          ))}
        </div>
      </section>
      <section className="main-layout__tasks">
        <Text css={{ textTransform: "uppercase", fontSize: "12px", marginBottom: "10px" }}>Your tasks</Text>
        <ToDoList
          toDoListData={data[categoriColor].toDoList}
          toDoColors={categoriColor}
          onChange={(id) => updateData(id)}
        />
      </section>
      <div className="main-layout__add-button">
        <Button
          color="secondary"
          css={{ minWidth: "unset" }}
          onPress={() => setAddTask(!addTask)}
        >
          <Image src={PlusIcon} />
        </Button>
      </div>
    </div>
  );
};

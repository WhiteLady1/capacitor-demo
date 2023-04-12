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
  const [data, setData] = React.useState([...mainData]);
  const [toDoData, setToDoData] = React.useState([...data[0].toDoList]);

  const changeFilter = (id: string, index: number) => {
    setCategoriColor(index);

    console.log('před', toDoData);
    setToDoData([...data[1].toDoList]);
    console.log('Po', toDoData)

    console.log('co to vrací', data.find(list => list.id === id)?.toDoList || [])
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
    <div className='main-layout'>
      <section className='main-layout__user'>
        <User
          src={ProfilePhoto}
          name='Blanka S.'
          css={{ paddingLeft: '$0'}}
          color="success"
          bordered
        />
        <div className='main-layout__user__icons'>
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
      <section className='main-layout__categories'>
        <Text css={{ textTransform: "uppercase", fontSize: "12px", marginBottom: "10px" }}>Categories</Text>
        <div className='main-layout__categories__wrapper'>
          {data.map((card, index) => (
            <ToDoCard
              key={card.id}
              count={card.toDoList.length}
              name={card.name}
              done={getCountOfDoneTasks(card.toDoList)}
              cardColor={index}
              onSelect={(number) => changeFilter(card.id, number)}
            />
          ))}
        </div>
      </section>
      <section className='main-layout__tasks'>
        <Text css={{ textTransform: "uppercase", fontSize: "12px", marginBottom: "10px" }}>Your tasks</Text>
        <ToDoList
          toDoListData={toDoData}
          toDoColors={categoriColor}
          onChange={(id) => updateData(id)}
        />
      </section>
      <div className='main-layout__add-button'>
        <Button
          color="secondary"
          css={{ minWidth: "unset" }}
        >
          <Image src={PlusIcon} />
        </Button>
      </div>
    </div>
  );
};

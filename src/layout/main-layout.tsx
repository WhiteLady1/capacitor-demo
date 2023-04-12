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
          {mainData.map((card, index) => (
            <ToDoCard
              key={card.id}
              count={card.toDoList.length}
              name={card.name}
              done={getCountOfDoneTasks(card.toDoList)}
              cardColor={index}
              onSelect={() => setCategoriColor(index)}
            />
          ))}
        </div>
      </section>
      <section className='main-layout__tasks'>
        <Text css={{ textTransform: "uppercase", fontSize: "12px", marginBottom: "10px" }}>Your tasks</Text>
        <ToDoList
          toDoListData={mainData[categoriColor].toDoList}
          toDoColors={categoriColor}
        />
      </section>
      <div className='main-layout__add-button'>
        <Button
          color="secondary"
          css={{ minWidth: "unset" }}
        >
          {/* New task */}
          <Image src={PlusIcon} />
        </Button>
      </div>
    </div>
  );
};

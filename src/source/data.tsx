export interface ToDoListInerface {
  id: string;
  itemName: string;
  done: boolean;
}

export interface DataInterface {
  id: string;
  name: string;
  toDoList: ToDoListInerface[];
};

export const DATA: DataInterface[] = [
  {
    id: 'DDD333',
    name: 'Work',
    toDoList: [
      {
        id: 'DKRT6555',
        itemName: 'Create demo',
        done: true,
      },
      {
        id: 'GTNJJ89',
        itemName: 'Fill TimeSheat',
        done: false,
      },
      {
        id: 'HGJ789',
        itemName: 'Call Anna',
        done: false,
      }
    ]
  }, {
    id: 'AAA334',
    name: 'Private',
    toDoList: [
      {
        id: 'FGHL970',
        itemName: 'Go shoping',
        done: false,
      },
      {
        id: 'FGGLL8111',
        itemName: 'Buy sinema tickets',
        done: false,
      },
      {
        id: 'ASTMK1200',
        itemName: 'Repair the dishwasher',
        done: false,
      },
      {
        id: 'AS881200',
        itemName: 'Repair the dishwasher',
        done: false,
      }
    ]
  }
];
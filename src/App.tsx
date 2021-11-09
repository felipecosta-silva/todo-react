import React from 'react';
import { useState } from 'react';
import * as S from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './Components/ListItem/index';
import { AddArea } from './Components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Estudar',
      done: false
    },
    {
      id: 2,
      name: 'Estudar programação',
      done: true
    }
  ]);

  const handleAddtask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  }

  return (
    <S.Container>
      <S.Area>
        <S.Header>
          Lista de Tarefas
        </S.Header>
        <AddArea onEnter={handleAddtask} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </S.Area>
    </S.Container>
  );
}

export default App;
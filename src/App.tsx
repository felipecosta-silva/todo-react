import React from 'react';
import { useState } from 'react';
import * as S from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './Components/ListItem/index';
import { AddArea } from './Components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Comprar o pão na padaria', done: false },
    { id: 2, name: 'Comprar um bolo na padaria', done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  // Função feita para tarefinha de casa.
  const handleTaskChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }
    setList(newList);
  }

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            onChange={handleTaskChange}
          />
        ))}

      </S.Area>
    </S.Container>
  );
}

export default App;
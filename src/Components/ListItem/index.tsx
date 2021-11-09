import React from 'react';
import * as S from './styles';
import { Item } from '../../types/Item';
import { useState } from 'react';

type Props = {
  item: Item
}

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsCheckd] = useState(item.done);

  return (
    <S.Container
      done={isChecked}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={e => setIsCheckd(e.target.checked)}
      />
      <label>{item.name}</label>
    </S.Container>
  )
}
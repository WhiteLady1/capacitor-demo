import React from 'react';
import { Card, Progress, Text } from '@nextui-org/react';

const CARD_COLORS = ['#A0DCFF', '#DDEFE8'];

interface ToDoCardProps {
  count: number;
  name: string;
  done: number;
  cardColor: number;
  onSelect: (index:number) => void;
};

export const ToDoCard: React.FC<ToDoCardProps> = ({
  count,
  name,
  done,
  cardColor,
  onSelect,
}) => {
  const handleClick = () => {
    onSelect(cardColor === 0 ? 0 : 1);
  };

  return (
    <Card
      variant='flat'
      isHoverable
      isPressable
      css={{ width: '150px', backgroundColor: `${CARD_COLORS[cardColor]}` }}
      onClick={handleClick}
    >
      <Card.Header
        css={{
            paddingBottom: '$0',
          }}
      >
        <Text size='$xs'>{count} tasks</Text>
      </Card.Header>
      <Card.Body css={{ py: '$0' }}>
        <Text size="$lg">{name}</Text>
      </Card.Body>
      <Card.Footer>
        <Progress
          size='xs'
          color={cardColor === 0 ? "warning" : "primary"}
          value={done}
          css={{ background: "$background"}}
        />
      </Card.Footer>
    </Card>
  );
};

import React from 'react';

type Position = 'flex-start' | 'center' | 'flex-end';
type TextPosition = 'left' | 'center' | 'right';

interface Props {
  horizontal?: Position;
  vertical?: Position;
  text?: TextPosition;
}

const Container: React.FC<Props> = ({
  horizontal = 'flex-start',
  vertical = 'flex-start',
  children,
  text = 'left',
}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: horizontal,
      justifyContent: vertical,
      textAlign: text,
    }}
  >
    {children}
  </div>
);

export default Container;

import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

// style  ---------------------------------------------------
type StyleProps = ContainerProps;
interface ContainerProps {
  // style props
}
const Container = styled.div<ContainerProps>`
  display: flex;
`;

// props  ---------------------------------------------------
interface OwnProps {
  children: ReactElement;
}
export type TodoItemProps = StyleProps & OwnProps;

// Element  -------------------------------------------------
const TodoItem: FC<TodoItemProps> = ({ children }) => (
  <Container>{JSON.stringify(children, null, 2)}</Container>
);

export default TodoItem;

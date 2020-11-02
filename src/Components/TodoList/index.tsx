import React, { ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { Todo, TodoCollection } from '../../Store/types';
import { TodoItem } from './TodoItem';

// style  ---------------------------------------------------
interface StyleProps {
  // style props
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

// props  ---------------------------------------------------
interface OwnProps {
  todoList: TodoCollection;
}
export type TodoListProps = Partial<PropsFromRedux> & StyleProps & OwnProps;

// Element  -------------------------------------------------
export function PureTodoList({ todoList }: TodoListProps): ReactElement {
  const todoValues = Object.values(todoList) as Todo[];
  return (
    <Container>
      {todoValues.map((todo: Todo) => (
        <TodoItem>{todo}</TodoItem>
      ))}
    </Container>
  );
}

// Redux connector  ------------------------------------------
const mapStateToProps = () => ({
  // props
});
const mapDispatch = {
  // dispatch functions
};
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PureTodoList);

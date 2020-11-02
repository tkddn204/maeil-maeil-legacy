import React, { ReactElement } from 'react';
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
export function TodoItem({ children }: TodoItemProps): ReactElement {
  return <Container>{JSON.stringify(children, null, 2)}</Container>;
}

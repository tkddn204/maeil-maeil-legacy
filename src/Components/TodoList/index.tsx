import React, { ReactElement } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../Store';

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
  // Own Props
}
export type TodoListProps = Partial<PropsFromRedux> & StyleProps & OwnProps;

// Element  -------------------------------------------------
export function PureTodoList({}: TodoListProps): ReactElement {
  return <Container>hello</Container>;
}

// Redux connector  ------------------------------------------
const mapStateToProps = ({}: RootState) => ({
  // props
});
const mapDispatch = {
  // dispatch functions
};
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PureTodoList);

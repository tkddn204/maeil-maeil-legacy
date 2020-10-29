import React, { ReactElement } from 'react';
import { DateTime } from 'luxon';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { change } from '../../Store/Date/dateSlice';

interface ContainerProps {
  color?: string;
}
const Container = styled.div<ContainerProps>`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ color }) => color};
`;

interface StateProps {
  date?: DateTime;
}

interface DispatchProps {
  onClick?: () => void;
}

type OwnProps = ContainerProps;

export type DateViewerProps = StateProps & DispatchProps & OwnProps;

export function DateViewer({
  date,
  onClick,
  color,
}: DateViewerProps): ReactElement {
  return (
    <Container onClick={onClick} color={color}>
      {date?.toString() || DateTime.local().toString()}
    </Container>
  );
}

const mapStateToProps = ({ date }: StateProps, { color }: OwnProps) => ({
  date,
  color,
});
const mapDispatch: DispatchProps = {
  onClick: () => change,
};
export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatch,
)(DateViewer);

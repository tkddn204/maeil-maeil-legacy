import { DateTime, DurationObjectUnits } from 'luxon';
import React, { ReactElement, useState } from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import { RootState } from '../../Store';
import { change } from '../../Store/Date/dateSlice';

interface ContainerProps {
  color?: string;
}
const Container = styled.div<ContainerProps>`
  display: flex;
  color: ${({ color }) => color};
`;

const DateText = styled.h1`
  width: 200px;
  color: inherit;
  margin: 0 1rem;
`;

const DateController = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonStyle = css`
  width: 2rem;
  height: 2rem;
  margin: 0.5rem;
`;

const PlusDateButton = styled.button`
  ${ButtonStyle}
`;

const MinusDateButton = styled.button`
  ${ButtonStyle}
`;

interface StateProps {
  date?: DateTime;
}

interface DispatchProps {
  changeDate?: typeof change;
}

type DateFormat = 'default' | string;
interface OwnProps extends ContainerProps {
  format?: DateFormat;
}

export type DateViewerProps = StateProps & DispatchProps & OwnProps;

export function DateViewer({
  date,
  changeDate,
  format = 'default',
  color,
}: DateViewerProps): ReactElement {
  const [dateState, setDateState] = useState<DateTime>(
    date || DateTime.local(),
  );
  const [duration] = useState<DurationObjectUnits>({ day: 1 });

  const onChangeDate = (isPlus: boolean) => {
    const changedDate = isPlus
      ? dateState.plus(duration)
      : dateState.minus(duration);
    setDateState(changedDate);
    if (changeDate) {
      changeDate(changedDate);
    }
  };

  let printedDate: string;
  if (format === 'default') {
    printedDate = dateState.toLocaleString();
  } else {
    printedDate = dateState.toFormat(format);
  }
  return (
    <Container color={color}>
      <DateText>{printedDate}</DateText>
      <DateController>
        <MinusDateButton onClick={() => onChangeDate(false)}>-</MinusDateButton>
        <PlusDateButton onClick={() => onChangeDate(true)}>+</PlusDateButton>
      </DateController>
    </Container>
  );
}

const mapStateToProps = ({ date }: RootState, { color }: OwnProps) => ({
  date: date.current,
  color,
});
const mapDispatch: DispatchProps = {
  changeDate: change,
};
export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatch,
)(DateViewer);

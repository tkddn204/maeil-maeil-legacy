import { DateTime, DurationObjectUnits } from 'luxon';
import React, { ReactElement, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import styled, { css } from 'styled-components';

import { RootState } from '../../Store';
import { change } from '../../Store/Date/dateSlice';

// style  ---------------------------------------------------
type StyleProps = ContainerProps;
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

// props  ---------------------------------------------------
type DateFormat = 'default' | string;
interface OwnProps {
  date?: DateTime;
  format?: DateFormat;
}
export type DateViewerProps = Partial<PropsFromRedux> & StyleProps & OwnProps;

// Element  -------------------------------------------------
export function PureDateViewer({
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

// Redux connector  ------------------------------------------
const mapStateToProps = ({ date }: RootState) => ({
  date: date.current,
});
const mapDispatch = {
  changeDate: change,
};
const connector = connect(mapStateToProps, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(PureDateViewer);

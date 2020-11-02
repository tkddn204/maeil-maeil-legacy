import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import faker from 'faker';
import { DateTime } from 'luxon';
import { TodoListProps, PureTodoList } from '.';
import { Alarm, TodoCollection } from '../../Store/types';

export default {
  title: 'Components/TodoList',
  component: PureTodoList,
} as Meta;

type StoryProps = TodoListProps;

export const TodoListComponent: Story<StoryProps> = ({ todoList }) => (
  <PureTodoList todoList={todoList} />
);

const generatedTodoCollection: (num: number) => TodoCollection = (
  num: number,
) => {
  const returned: TodoCollection = {};
  const fakeToday = faker.date.recent();
  faker.locale = 'ko';
  for (let i = 0; i < num; ++i) {
    const id = faker.random.uuid();
    returned[id] = {
      id,
      title: faker.name.title(),
      description: faker.lorem.sentence(),
      alarm: new Array(faker.random.number(3)).map(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars,no-unused-vars
        (_) =>
          ({
            content: faker.lorem.words(faker.random.number(3)),
            isOn: faker.random.boolean(),
            time: {
              hour: faker.random.number(23),
              minute: faker.random.number(59),
            },
          } as Alarm),
      ),
      createdDate: DateTime.fromJSDate(fakeToday),
      goal: {
        content: faker.lorem.words(faker.random.number(3)),
        date: DateTime.fromJSDate(
          faker.date.soon(faker.random.number(7), fakeToday),
        ),
      },
      progress: faker.random.number(99),
      repeat: '* * * 2 3',
    };
  }
  return returned;
};

TodoListComponent.args = {
  todoList: generatedTodoCollection(5),
};

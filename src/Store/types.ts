import { DateObjectUnits, DateTime } from 'luxon';

interface Collection<T> {
  [id: string]: T;
}
interface Document {
  readonly id: string;
}

export type UserCollection = Collection<User>;
export interface User extends Document {
  role: string;
  groups: string;
}

export type GroupColleciton = Collection<Group>;
export type GroupUser = Pick<User, 'id' | 'role'>;
export interface Group extends Document {
  users: GroupUser[];
}

export type TodoDataCollection = Collection<TodoData>;
export interface TodoDataSettings {
  background: string;
}
export interface TodoData extends Document {
  settings: TodoDataSettings;
  crons: string[];
  todos: TodoCollection;
  days: DayCollection;
}

export type TodoCollection = Collection<Todo>;
export interface Goal {
  content: string;
  date?: DateTime;
}
export interface Alarm {
  content: string;
  time: Pick<DateObjectUnits, 'hour' | 'minute'>;
  isOn: boolean;
}
export interface Todo extends Document {
  title: string;
  description: string;
  goal: Goal;
  progress: number;
  repeat: string;
  alarm: Alarm[];
  createdDate: DateTime;
}

export type DayCollection = Collection<Day>;
export interface Day extends Document {
  date: DateTime;
  todos: TodoCollection;
}

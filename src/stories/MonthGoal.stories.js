import { MonthGoal } from './MonthGoal';

export default{
  title: 'Month/MonthGoal',
  component: MonthGoal,
  argTypes: {
    month: {control:"text"},
    text: {control:"text"}
  }
};
const Template = (args)=> <MonthGoal {...args} />;

export const April = Template.bind({});
April.args={
  month: "April",
  text: "긍정!"
}
export const MyMonthGoal = (args) =>{
  return <MonthGoal {...args} />
}
// ArrowButton.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import { ArrowButton, ArrowButtonProps } from './ArrowButton';

const meta: Meta<ArrowButtonProps> = {
  component: ArrowButton,
  title: 'Components/ArrowButton',
};

export default meta;

type Story = StoryObj<ArrowButtonProps>;

export const Default: Story = {
  render: (args) => <ArrowButton {...args} />,
  args: {
    onClick: () => alert('Clicked!'),  // Мок-обработчик клика
    isOpen: false,  // Установим значение isOpen
  },
};

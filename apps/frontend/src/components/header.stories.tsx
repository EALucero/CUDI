import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';

const meta = {
    title: 'Components/Header',
    component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

interface User {
    id: number;
    name: string;
}

export const pepito: Story = {
    id: 1,
    name: 'Pepito Perez',
} as User;
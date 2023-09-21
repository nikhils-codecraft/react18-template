import {Meta, StoryObj} from '@storybook/react'

import App from './App'

const meta: Meta<typeof App> = {
  component: App,
}

type Story = StoryObj<typeof App>

export const AppStory: Story = {
  render: () => <App />,
}

export default meta

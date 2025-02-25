import { hbs } from 'ember-cli-htmlbars';
import { icons } from '../../assets/icons';

export default {
  title: 'Components/Notifications/AuAlert',
  argTypes: {
    title: { control: 'text', description: 'Add a title to the alert' },
    skin: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error'],
      description: 'Sets the style of the alert',
    },
    icon: {
      control: 'select',
      options: icons,
      description: 'Add an icon to the alert',
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Set the size of the alert',
    },
    closable: { control: 'boolean', description: 'Makes the alert closable' },
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuAlert
      @alertTitle={{this.title}}
      @alertSkin={{this.skin}}
      @alertIcon={{this.icon}}
      @alertSize={{this.size}}
      @closable={{this.closable}}
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
    </AuAlert>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  title: 'Alert',
  skin: 'warning',
  icon: 'download',
  size: 'default',
  closable: false,
};

import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuModal',
  argTypes: {
    modalOpen: { control: 'boolean', description: 'Show or hide the modal' },
    closeModal: {
      control: 'function',
      description: 'Add the action to close the modal',
    },
    title: { control: 'text', description: 'Set the title of the modal' },
    size: {
      control: 'select',
      options: ['default', 'large', 'fullscreen'],
      description: 'Set the size of the modal',
    },
    padding: {
      control: 'select',
      options: ['default', 'none'],
      description: 'Set the padding of the modal',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

const Template = (args) => ({
  template: hbs`
    <div id="ember-appuniversum-wormhole"></div>
    <AuModal
      @modalOpen={{this.modalOpen}}
      @closeModal={{this.closeModal}}
      @size={{this.size}}
      @padding={{this.padding}}
    >
      <:title>{{this.title}}</:title>
      <:body>
        <p>Modal content</p>
      </:body>
      <:footer>
        <AuButton>Action</AuButton>
      </:footer>
    </AuModal>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  modalOpen: true,
  closeModal: null,
  title: 'Modal',
  size: 'default',
  padding: 'default',
};

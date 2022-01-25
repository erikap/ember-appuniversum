import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuParagraph',
  argTypes: {
    text: { control: 'text', description:'' },
    size: { control: 'select', options: ['default','small','large'], description:'Defines the size of the paragraph'},
    muted: { control: 'boolean', description:'Makes the paragraph color muted'},
    uppercase: { control: 'boolean', description:'Make the paragraph uppercase'},
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuParagraph
      @size={{this.size}}
      @muted={{this.muted}}
      @uppercase={{this.uppercase}}
    >
      {{text}}
    </AuParagraph>`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  text: "This longer body text where we show a bit more content in a paragraph and it contains bold and italic text styles.",
  size: "default",
  muted: false,
  uppercase: false
};

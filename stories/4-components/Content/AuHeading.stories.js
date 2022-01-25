import { hbs } from 'ember-cli-htmlbars';

export default {
  title: 'Components/Content/AuHeading',
  argTypes: {
    text: { control: 'text', description:'' },
    level: { control: 'select', options: ['1', '2', '3', '4', '5', '6'], description:'Defines the depth of the heading (h1 > h6)'},
    skin: { control: 'select', options: ['1', '2', '3', '4', '5', '6'], description:'Defines the style and size of the heading'},
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuHeading
      @level={{this.level}}
      @skin={{this.skin}}
    >
      {{text}}
    </AuHeading>`,
  context: args,
});

const TemplateAll = () => ({
  template: hbs`
    <AuHeading
      @level="1"
      @skin="1"
    >
      Heading 1
    </AuHeading>
    <AuHr />
    <AuHeading
      @level="2"
      @skin="2"
    >
      Heading 2
    </AuHeading>
    <AuHr />
    <AuHeading
      @level="3"
      @skin="3"
    >
      Heading 3
    </AuHeading>
    <AuHr />
    <AuHeading
      @level="4"
      @skin="4"
    >
      Heading 4
    </AuHeading>
    <AuHr />
    <AuHeading
      @level="5"
      @skin="5"
    >
      Heading 5
    </AuHeading>
    <AuHr />
    <AuHeading
      @level="6"
      @skin="6"
    >
      Heading 6
    </AuHeading>
    `
});

export const Component = Template.bind({});
Component.args = {
  text: "Titel",
  level: "1",
  skin: "1"
};

export const AllHeadings = TemplateAll.bind({});

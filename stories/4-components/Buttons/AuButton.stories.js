import { hbs } from 'ember-cli-htmlbars';
const icons = [
  "add",
  "alert-triangle",
  "archive",
  "arrow-down",
  "arrow-left",
  "arrow-right",
  "arrow-up",
  "attachment",
  "bin",
  "bold",
  "book",
  "calendar-new",
  "calendar",
  "caret-down",
  "caret-up-down",
  "caret-up",
  "check",
  "checkbox-checked",
  "checkbox-indeterminate",
  "checkbox-unchecked",
  "chevron-down",
  "chevron-left",
  "chevron-right",
  "chevron-up",
  "circle-check",
  "circle-full",
  "circle-info",
  "circle-pause",
  "circle-question",
  "circle-step-1",
  "circle-step-2",
  "circle-step-3",
  "circle-step-4",
  "circle-step-5",
  "circle-step-6",
  "circle-three-dots",
  "circle-x",
  "circle",
  "clock-rewind",
  "clock",
  "comment",
  "copy-paste",
  "copy",
  "cross",
  "dash",
  "document-added",
  "document",
  "documents",
  "download",
  "draft",
  "drag-handle-2",
  "drag-handle",
  "drag",
  "expand-vertical",
  "expand",
  "export",
  "external-link",
  "external",
  "eye",
  "file",
  "filter",
  "folder",
  "gear",
  "github",
  "hierarchal-back",
  "hierarchical-back",
  "html-dot",
  "html-plus",
  "html",
  "import",
  "indent",
  "info-circle",
  "italic",
  "label",
  "link-broken",
  "link-external",
  "link",
  "lock-closed",
  "lock-open",
  "login",
  "logout",
  "mail",
  "manual",
  "message",
  "minimize",
  "nav-down",
  "nav-left",
  "nav-right",
  "nav-up-down",
  "nav-up",
  "no-sign",
  "not-visible",
  "ordered-list",
  "paperclip",
  "pdf-dot",
  "pdf-plus",
  "pdf",
  "pencil",
  "plus-text",
  "plus",
  "printer-view",
  "printer",
  "question-circle",
  "redo",
  "remove",
  "renew",
  "reverse-indent",
  "search-folder",
  "search",
  "settings",
  "sign",
  "signinghub",
  "sitemap",
  "strikethrough",
  "switch",
  "synchronize",
  "three-dots",
  "trash",
  "underlined",
  "unordered-list",
  "upload",
  "user-add",
  "user-check",
  "user-fill",
  "user-popup",
  "user",
  "users",
  "visible",
  "word-dot",
  "word-plus",
  "word",
  "x",
]

export default {
  title: 'Components/Buttons/AuButton',
  argTypes: {
    text: { control: 'text', description:'' },
    skin: { control: 'select', options: ['primary', 'secondary', 'link', 'link-secondary'], description:'Defines the style of the button'},
    size: { control: 'select', options: ['', 'large'], description:'Set the size of the button'},
    icon: { control: 'select', options: icons, description:'Adds an icon' },
    iconAlignment: { control: 'select', options: ['', 'left', 'right'], description:'Choose the position of the icon, adds correct margin next to the icon'},
    hideText: {control: 'boolean', description:'Hides the button text visually'},
    width: { control: 'select', options: ['', 'block'], description:'Defines the width of a button'},
    alert: {control: 'boolean', description:'Adds an alert state to the button'},
    disabled: {control: 'boolean', description:'Adds a disabled state to the button'},
    loading: {control: 'boolean', description:'Adds a loading state to the button'},
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuButton
      @skin={{this.skin}}
      @size={{this.size}}
      @icon={{this.icon}}
      @iconAlignment={{this.iconAlignment}}
      @hideText={{this.hideText}}
      @width={{this.width}}
      @alert={{this.alert}}
      @disabled={{this.disabled}}
      @loading={{this.loading}}
    >
      {{text}}
    </AuButton>`,
  context: args,
});

export const Primary = Template.bind({});
Primary.args = {
  text: 'Button',
  skin: 'primary',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  alert: false,
  disabled: false,
  loading: false
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
  skin: 'secondary',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  alert: false,
  disabled: false,
  loading: false
};

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  text: 'Primary link',
  skin: 'link',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  alert: false,
  disabled: false,
  loading: false
};

export const SecondaryLink = Template.bind({});
SecondaryLink.args = {
  text: 'Secondary link',
  skin: 'link-secondary',
  icon: '',
  iconAlignment: 'left',
  hideText: false,
  width: '',
  alert: false,
  disabled: false,
  loading: false
};

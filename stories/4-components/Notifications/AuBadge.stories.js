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
  title: 'Components/Notifications/AuBadge',
  argTypes: {
    skin: { control: 'select', options: ['', 'border', 'brand', 'success', 'warning', 'error', 'action', 'gray'], description:'Sets the color and background color'},
    size: { control: 'select', options: ['', 'small'], description:'Change the size of the badge'},
    icon: { control: 'select', options: icons, description:'Adds an icon to the badge' },
    number: {control: 'text', description:'Adds a number to the badge'}
  },
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => ({
  template: hbs`
    <AuBadge
      @icon={{this.icon}}
      @skin={{this.skin}}
      @size={{this.size}}
      @number={{this.number}}
    />`,
  context: args,
});

export const Component = Template.bind({});
Component.args = {
  skin: '',
  icon: 'info-circle',
  size: '',
  number: ''
};

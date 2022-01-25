import Component from '@glimmer/component';

export default class AuParagraphComponent extends Component {
  get size() {
    if (this.args.size == 'small')
      return 'au-c-paragraph--small';
    if (this.args.size == 'large')
      return 'au-c-paragraph--large';
    return '';
  }

  get muted() {
    if (this.args.muted)
      return 'au-c-paragraph--muted';
    return '';
  }

  get uppercase() {
    if (this.args.uppercase)
      return 'au-c-paragraph--uppercase';
    return '';
  }
}

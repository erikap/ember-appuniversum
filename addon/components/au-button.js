import Component from '@glimmer/component';

export default class AuButton extends Component {
  get size() {
    if (this.args.size == 'large') return 'au-c-button--large';
    else return '';
  }

  get width() {
    if (this.args.width == 'block') return 'au-c-button--block';
    else return '';
  }

  get skin() {
    if (this.args.skin == 'secondary') return 'au-c-button--secondary';
    if (this.args.skin == 'tertiary')
      // DEPRECATED
      return 'au-c-button--link';
    if (this.args.skin == 'link') return 'au-c-button--link';
    if (this.args.skin == 'link-secondary')
      return 'au-c-button--link-secondary';
    else return 'au-c-button--primary';
  }

  get alert() {
    if (this.args.alert) return 'au-c-button--alert';
    else return '';
  }

  get disabled() {
    if (this.args.disabled) return 'is-disabled';
    else return '';
  }

  get loading() {
    if (this.args.loading) return 'is-loading';
    else return '';
  }
}

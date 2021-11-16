/* eslint-disable no-useless-constructor */
import Emoji from './Emoji';

export default class Text extends Emoji {
  constructor(props) {
    super(props);
  }
  
  render() {
    const text2 = this.addEmoji('i am from text jsx', '😄');
    return super.render(text2);
  }
}

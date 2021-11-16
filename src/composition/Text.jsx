const Text = ({ addEmoji, addBracket }) => {
  let text2 = 'i am from text jsx';
  if (addEmoji) {
    text2 = addEmoji(text2, '😄');
  }
  if (addBracket) {
    text2 = addBracket(text2);
  }
     
  return (
    <div>
      <h1>{ text2 }</h1>
    </div>
  );
};

export default Text;

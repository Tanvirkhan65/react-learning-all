const User = ({ name }) => {
  return (
    <div>
      <h1>{name(false)}</h1>
    </div>
  );
};
export default User;

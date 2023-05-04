function ProfileCard({title, handle, image}) {
  // const title = props.title;
  // const handle = props.handle;
  // const {title, handle} = props;
  return (
    <div>
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
      <img src={image} alt="App Logo" />
    </div>
  );
}

export default ProfileCard;

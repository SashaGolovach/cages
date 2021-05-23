import Styles from "./styles.module.scss";

function Project() {
  return (
    <>
      <div className={Styles.project}>
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          className={Styles.projectAvatar}
        />
        <div className={Styles.container}>
          <h4>
            <b>John Doe</b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </>
  );
}

export default Project;

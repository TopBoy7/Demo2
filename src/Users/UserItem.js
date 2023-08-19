import styles from "./UserItem.module.css";
function UserItem(props) {
  return (
    <section className={styles["users"]}>
      <ul className={styles["users ul"]}>
        {props.users.map((user) => (
          <li key={user.id} className={styles["users li"]}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </section>
  );
}

export default UserItem;

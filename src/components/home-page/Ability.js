function Ability({ name, description, icon }) {
  return (
    <div className="ability inactive">
      <i className={`${icon} colored`}></i>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Ability;

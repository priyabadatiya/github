function SinglePerson(props) {
    return (
      <li className="card">
        <div className="info">
          <img src={props.image} alt={props.name} />
          <h2>{props.name}</h2>
        </div>
        <p>{props.description}</p>
        <a href={props.wikiLink}>Learn More!</a>
      </li>
    );
  }
  export default SinglePerson;
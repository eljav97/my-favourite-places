interface PlaceEntryProps {
    title: string;
    tags: string[];
    body: string;
    views: number;
    likes: number;
    postDate: { month: string; day: number; year: number };
  }
  
  function PlaceEntry(props: PlaceEntryProps): JSX.Element {
    return (
      <section>
        <h2>{props.title}</h2>
        <p>
          <i>Tags: {props.tags.join(", ")}</i>
        </p>
        <p>{props.body}</p>
        <h4>Stats</h4>
        <ul>
          <li>Views: {props.views}</li>
          <li>Likes: {props.likes}</li>
        </ul>
        <p>
          <small>Posted: March 3, 2003</small>
        </p>
      </section>
    );
  }
  
  export default PlaceEntry;
  
import PlaceEntry from "./PlaceEntry";

function MainContent(): JSX.Element {
  return (
    <main>
      <PlaceEntry
        title={"Discovering React components"}
        tags={["react", "components", "reusability"]}
        body={"Today, I discovered reusable React components - I love them! It makes things so much more convenient!"}
        views={1}
        likes={1}
        postDate={{ month: "June", day: 13, year: 2021 }}
      />
      <PlaceEntry
        title={"Dreaming of Stones"}
        tags={["dreams", "sleep", "insights"]}
        body={
          "Recently, I've been trying out a new tactic to try to help myself fall asleep: counting stones. Normally, we count sheep to fall asleep - my problem is that I think sheep are fascinating animals, so this really doesn't help me. However, I think we can all agree that stones are boring (sorry, geologists) - so I've been counting stones instead!"
        }
        views={10}
        likes={5}
        postDate={{ month: "March", day: 3, year: 2003 }}
      />
      <section>
        <h2>Writing poetry</h2>
        <p>
          <i>Tags: poetry, meta</i>
        </p>
        <p>
          Being creative... I'd like to do more of it. I'll write some haikus!
        </p>
        <h4>Stats</h4>
        <ul>
          <li>Views: 93</li>
          <li>Likes: 11</li>
        </ul>
        <p>
          <small>Posted: March 2, 2003</small>
        </p>
      </section>
      <section>
        <h2>The trolley problem</h2>
        <p>
          <i>Tags: philosophy</i>
        </p>
        <p>
          I came across the Trolley Problem recently. I found it deeply
          troubling... why is it called 'the Trolley Problem' when it's actually
          about trains?
        </p>
        <h4>Stats</h4>
        <ul>
          <li>Views: 2</li>
          <li>Likes: 0</li>
        </ul>
        <p>
          <small>Posted: July 28, 2003</small>
        </p>
      </section>
    </main>
  );
}

export default MainContent;

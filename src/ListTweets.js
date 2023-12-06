import TweetCategory from "./Category";
import TweetRow from "./Row";

const TweetList = ({ tweets, filterText, inThisLocation }) => {
  const rows = [];
  let lastCategory = null;

  tweets.forEach((tweet) => {
    if (tweet.text.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inThisLocation && !tweet.isLocal) {
      return;
    }
    if (tweet.category !== lastCategory) {
      rows.push(
        <div className="myContainer3">
          <TweetCategory category={tweet.category} key={tweet.category} />
        </div>
      );
    }
    rows.push(
      <div className="myContainer4">
        <TweetRow tweet={tweet} key={tweet.text} />
      </div>
    );
    lastCategory = tweet.category;
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Tweet Text</th>
          <th>Retweets</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default TweetList;

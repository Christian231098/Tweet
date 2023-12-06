const TweetRow = ({ tweet }) => {
  const color = tweet.isLocal ? "inherit" : "red";
  const textStyle = { color: color };
  return (
    <tr>
      <td>
        <span style={textStyle}>{tweet.text}</span>
      </td>
      <td>{tweet.retweets}</td>
    </tr>
  );
};
export default TweetRow;

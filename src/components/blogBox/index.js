import "./style.css";
const BlogBox = ({ blog }) => {
  const { id, name, body, topic, link } = blog;
  return (
    <div key={id} className="blogBox__container">
      <div className="blogHeading">
        <div className="blogName">{name}</div>
        <img src={topic} loading="lazy" alt="/" />
      </div>
      <div className="blogDescription">{body}</div>
      <div className="blogbtn__box">
        <a href={link}>
          <button className="blogBtn">Read</button>
        </a>
      </div>
    </div>
  );
};
export default BlogBox;

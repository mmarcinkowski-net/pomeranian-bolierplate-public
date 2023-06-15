import './styles.css';

export const Author = (props) => {
  return (
    <div class="blog-post-author">
      <span>{props.name}</span>
      <br />
      <span>{props.position}</span>
    </div>
  );
};

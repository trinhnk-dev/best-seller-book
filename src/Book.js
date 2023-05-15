const Book = (props) => {
  const { img, author, title, children, number } = props;
  // const { img, author, title, children } = props.book;

  return (
    <article className="book" style={{ position: "relative" }}>
      <img src={img} alt={title} />
      <h1 className="titleBook">{title}</h1>
      {author}
      <span className="number">{`#${number + 1}`}</span>
      {children}
    </article>
  );
};

export default Book;

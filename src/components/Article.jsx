function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let readTime = null;

  if (minutes) {
    if (minutes < 30) {
      const coffeeCups = Math.ceil(minutes / 5);
      readTime = `${"☕️".repeat(coffeeCups)} ${minutes} min read`;
    } else {
      const bentoBoxes = Math.ceil(minutes / 10);
      readTime = `${"🍱".repeat(bentoBoxes)} ${minutes} min read`;
    }
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      {readTime ? <small> · {readTime}</small> : null}
      <p>{preview}</p>
    </article>
  );
}

export default Article;

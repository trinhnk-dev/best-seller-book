import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import "./style.css";
import Book from "./Book";

const BookList = () => {
  const displayAnyThing = () => {
    console.log("display AnyThing");
  };
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "50px 0px" }}>
        Amazon Best Seller Book
      </h1>
      <section className="bookList">
        {books.map((book, index) => {
          const { img, title, author } = book;
          console.log(book);
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

// const EventHandleExample = () => {
//   // const EventHandleChange = (e) => {
//   //   console.log(e.target);
//   //   console.log(e.target.name);
//   //   console.log(e.target.value);
//   //   console.log("handled");
//   // };
//   // const EventHandleClick = (e) => {
//   //   console.log(e.target.type);
//   // };
//   return (
//     <section>
//       <form>
//         <input
//           type="text"
//           name="example"
//           onChange={(e) => console.log(e.target.value)}
//           style={{ margin: "10px 0px" }}
//         />
//         <button type="button" onClick={() => console.log("clicked")}>
//           Click me
//         </button>
//       </form>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);

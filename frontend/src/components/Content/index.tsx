import { useCallback, useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";

import Search from "../Search";
import ReadingList from "../ReadingList";

export type Books = {
  books: {
    __typename: string;
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
  }[];
};

export type Unpack<T> = T extends (infer U)[] ? U : T;

const GET_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;

function Content() {
  const { loading, data } = useQuery<Books>(GET_BOOKS);
  const [books, setBooks] = useState<Books["books"]>([]);
  const [readListBooks, setReadListBooks] = useState<Books["books"]>([]);

  //   console.group("Fetch data logic");
  //   console.log("Fetched DATA:: ", data);
  //   console.groupEnd();

  useEffect(() => {
    let mounted = true;

    // if (loading) {
    //   return undefined;
    // }

    if (mounted && !loading) {
      setBooks([...(data?.books || [])]);
    }

    return () => {
      mounted = false;
    };
  }, [loading, data?.books]);

  const addBookToReadList = useCallback(
    (bookObj: Unpack<Books["books"]>) => {
      const exists = readListBooks.find((bk) => bk?.title === bookObj.title);
      //   const newEntry = [...readListBooks].unshift(bookObj);
      if (!exists) setReadListBooks([bookObj, ...readListBooks]);
    },
    [readListBooks, setReadListBooks]
  );
  const removeFromReadList = useCallback(
    (book: Unpack<Books["books"]>) => {
      const filtered = readListBooks.filter((bk) => {
        console.log("Received prop book: ", book);
        console.log("bk.title === book.title ", bk.title !== book.title);
        return bk.title !== book.title;
      });
      setReadListBooks([...filtered]);
    },
    [readListBooks, setReadListBooks]
  );

  return (
    <main style={{ paddingBlockStart: 20 }}>
      <Search
        books={books}
        loading={loading}
        addBookToReadList={addBookToReadList}
      />
      <ReadingList
        books={readListBooks}
        removeFromReadList={removeFromReadList}
      />
    </main>
  );
}

export default Content;

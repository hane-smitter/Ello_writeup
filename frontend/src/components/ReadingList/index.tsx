import { memo } from "react";
import { v4 as uuidv4 } from "uuid";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import type { Books, Unpack } from "../Content";

function ReadingList({
  books,
  removeFromReadList,
}: {
  books: Books["books"];
  removeFromReadList: (book: Unpack<Books["books"]>) => void;
}) {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: 2 }}>
        Reading List
      </Typography>
      <Typography variant="overline">
        ({books.length}) {books.length === 1 ? "book" : "books"} in reading list
      </Typography>
      {books.length < 1 ? (
        <Box
          sx={{
            typography: "h6",
            border: "3px solid #efefef",
            textAlign: "center",
            padding: "10px",
          }}
        >
          Reading list is empty. Search for books to add them to this list
        </Box>
      ) : (
        <Grid container>
          {books.map((book) => (
            <Grid item sm={6} md={4} key={uuidv4()}>
              <Box sx={{ padding: "5px" }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={book.coverPhotoURL}
                    title={book.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {book.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontStyle: "italic" }}
                    >
                      <Typography variant="caption">Author:</Typography>{" "}
                      <span
                        style={{ fontWeight: 600, textTransform: "capitalize" }}
                      >
                        {book.author}
                      </span>
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => removeFromReadList(book)}
                    >
                      remove from list
                    </Button>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default memo(ReadingList);

import { type Attributes, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useQuery, gql } from "@apollo/client";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

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

type Books = {
  books: {
    __typename: string;
    author: string;
    coverPhotoURL: string;
    readingLevel: string;
    title: string;
  }[];
};

function Search() {
  const [open, setOpen] = useState<boolean>(false);
  const [inpOptions, setInpOptions] = useState<Books["books"]>([]);
  const { loading, data } = useQuery<Books>(GET_BOOKS);

  //   console.group("Fetch data logic");
  //   console.log("Fetched DATA:: ", data);
  //   console.groupEnd();

  useEffect(() => {
    let mounted = true;

    // if (loading) {
    //   return undefined;
    // }

    if (mounted && !loading) {
      setInpOptions([...(data?.books || [])]);
    }

    return () => {
      mounted = false;
    };
  }, [loading, data?.books]);

  return (
    <div>
      <Autocomplete
        sx={{ minWidth: "250px" }}
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title}
        options={inpOptions}
        loading={loading}
        renderOption={(props, option) => {
          const { key, ...restProps } = props as Attributes;

          return (
            <Box
              component="li"
              sx={{ "& > .bk-image": { ml: -1, mr: 0.8, flexShrink: 1 } }}
              {...restProps}
              key={uuidv4()}
            >
              <img
                className="bk-image"
                height="50"
                width="50"
                src={`/${option.coverPhotoURL}`}
                alt={option.title}
                key={uuidv4()}
              />

              <span style={{ fontSize: "13px" }} key={uuidv4()}>
                <Box
                  component="span"
                  sx={{ display: "block", fontWeight: 600 }}
                >
                  {option.title}
                </Box>
                <Box
                  component="span"
                  sx={{
                    typography: "caption",
                    fontStyle: "italic",
                    textTransform: "capitalize",
                  }}
                >
                  By&nbsp;{option.author}
                </Box>
              </span>
            </Box>
          );
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search a book title"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color="inherit" size={15} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </div>
  );
}

export default Search;

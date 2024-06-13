import { useEffect, useMemo, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

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
  const { loading, error, data } = useQuery<Books>(GET_BOOKS);

  console.log({ inpOptions });
  //   console.group("Fetch data logic");
  //   console.log("Fetched DATA:: ", data);
  //   console.groupEnd();

  useEffect(() => {
    let mounted = true;

    // if (loading) {
    //   return undefined;
    // }

    // console.log("loading status: ", loading);
    // console.log("Data value: ", data);
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
        sx={{ width: 300 }}
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
        renderInput={(params) => (
          <TextField
            {...params}
            label="Books"
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

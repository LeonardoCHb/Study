import React, { useState,  } from "react";
import { Provider as PaperProvider, Searchbar, Chip } from 'react-native-paper';

const SearchBarStyle = {
    padding: 1,
    marginBottom: 40,
};

export function SearchField() {
  const [searchText, setSearchText] = useState("");

  console.log(searchText);

  return (
      <>
        <Searchbar
          theme={SearchBarStyle}
          placeholder="Ex: Math Assignments"
          onChangeText={(searchText) => setSearchText(searchText)}
          value={searchText}
          style={SearchBarStyle}
        />
      </>
  );
}

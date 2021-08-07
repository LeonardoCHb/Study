import React, { useState,  } from "react";
import { Searchbar } from 'react-native-paper';

const SearchBarStyle = {
    padding: 1,
    marginInline:30,
    marginBottom: 40,
    borderRadius: 10,
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

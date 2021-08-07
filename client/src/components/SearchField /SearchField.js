import React, { useState, useEffect } from "react";
import { SearchBar, ThemeProvider } from "react-native-elements";

const theme = {
  SearchBar: {
    containerStyle: {
      padding: 3,
      backgroundColor: "#252836",
      borderWidth: 1,
      borderRadius: 15,
      marginBottom: 15,
    },
    inputStyle: {
      padding: 3,
      color: "#FFFFFF",
      backgroundColor: "#252836",
    },
    inputContainerStyle: {
      backgroundColor: "#252836",
    },
  },
};

export function SearchField() {
  const [searchText, setSearchText] = useState("");

  console.log(searchText);

  return (
    <ThemeProvider theme={theme}>
      <SearchBar
        placeholder="Ex: Math Assignments"
        placeholderTextColor="#808191"
        onChangeText={(searchText) => setSearchText(searchText)}
        value={searchText}
      />
    </ThemeProvider>
  );
}

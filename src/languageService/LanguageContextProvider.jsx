import React, { useReducer, createContext } from "react";

export const LanguageContext = createContext();

const initialState = {
  language: {
    name: "English",
    code: "en",
  },
};

const languageOptions = {
  en: {
    name: "English",
    code: "en",
  },
  cn: {
    name: "Chinese",
    code: "cn",
  },
};

const reducer = (state, action) => {
  console.log(action, {
    language: languageOptions[action.payload.code] ?? languageOptions["en"],
  });
  switch (action.type) {
    case "Change_To":
      return {
        language: languageOptions[action.payload.code] ?? languageOptions["en"],
      };
  }
};

export const LanguageContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LanguageContext.Provider value={[state, dispatch]}>
      {props.children}
    </LanguageContext.Provider>
  );
};

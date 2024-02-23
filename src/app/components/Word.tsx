import { periodicTable } from "../shared/constants";
import { selectFirstName, selectLastName } from "../store/geral/geralSelectors";
import { useAppSelector } from "../store/hooks";
import { CardWords, WordMatch, WordNonMatch } from "./styles/Style";

function Words() {
  const firstName = useAppSelector(selectFirstName);
  const lastName = useAppSelector(selectLastName);

  const firstNameWords = firstName.split(" ");
  const lastNameWords = lastName.split(" ");

  const allWords = [...firstNameWords, ...lastNameWords];

  const isPeriodicElement = (word: string) => {
    const twoLetters = word.slice(0, 2).toLowerCase();
    return periodicTable.includes(twoLetters);
  };

  const highlightedWords = allWords.map((word, index) => {
    const keyMap = word + index.toString();

    if (isPeriodicElement(word)) {
      const elementSymbol = <WordMatch>{word.slice(0, 2)}</WordMatch>;
      const restOfWord = word.slice(2);
      return (
        <WordNonMatch key={keyMap}>
          {elementSymbol}
          {restOfWord}
        </WordNonMatch>
      );
    } else {
      return <WordNonMatch key={keyMap}>{word} </WordNonMatch>;
    }
  });

  return <CardWords>{highlightedWords}</CardWords>;
}

export default Words;

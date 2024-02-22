import { selectFirstName, selectLastName } from "../store/geral/geralSelectors";
import { useAppSelector } from "../store/hooks";
import { CardWords, WordMatch } from "./Style";

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
      const elementSymbol = (
        <WordMatch>{word.slice(0, 2)}</WordMatch>
      );
      const restOfWord = word.slice(2);
      return (
        <span key={keyMap}>
          {elementSymbol}
          {restOfWord}
        </span>
      );
    } else {
      return <span key={keyMap}>{word} </span>;
    }
  });

  return <CardWords>{highlightedWords}</CardWords>;
}

export default Words;

export const periodicTable = [
  "H",
  "He",
  "Li",
  "Be",
  "B",
  "C",
  "N",
  "O",
  "F",
  "Ne",
  "Na",
  "Mg",
  "Al",
  "Si",
  "P",
  "S",
  "Cl",
  "Ar",
  "K",
  "Ca",
  "Sc",
  "Ti",
  "V",
  "Cr",
  "Mn",
  "Fe",
  "Co",
  "Ni",
  "Cu",
  "Zn",
  "Ga",
  "Ge",
  "As",
  "Se",
  "Br",
  "Kr",
  "Rb",
  "Sr",
  "Y",
  "Zr",
  "Nb",
  "Mo",
  "Tc",
  "Ru",
  "Rh",
  "Pd",
  "Ag",
  "Cd",
  "In",
  "Sn",
  "Sb",
  "Te",
  "I",
  "Xe",
  "Cs",
  "Ba",
  "La",
  "Ce",
  "Pr",
  "Nd",
  "Pm",
  "Sm",
  "Eu",
  "Gd",
  "Tb",
  "Dy",
  "Ho",
  "Er",
  "Tm",
  "Yb",
  "Lu",
  "Hf",
  "Ta",
  "W",
  "Re",
  "Os",
  "Ir",
  "Pt",
  "Au",
  "Hg",
  "Tl",
  "Pb",
  "Bi",
  "Po",
  "At",
  "Rn",
  "Fr",
  "Ra",
  "Ac",
  "Th",
  "Pa",
  "U",
  "Np",
  "Pu",
  "Am",
  "Cm",
  "Bk",
  "Cf",
  "Es",
  "Fm",
  "Md",
  "No",
  "Lr",
  "Rf",
  "Db",
  "Sg",
  "Bh",
  "Hs",
  "Mt",
  "Ds",
  "Rg",
  "Cn",
  "Nh",
  "Fl",
  "Mc",
  "Lv",
  "Ts",
  "Og",
].map((word) => word.toLowerCase());

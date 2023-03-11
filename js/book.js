const books = [
  {
    id: "a2b61947-a644-4cb4-9698-13bb2e978d8a",
    title: "The Modern Prometheus",
    image: "https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg",
    author: "Shelley, Mary Wollstonecraft",
    category: "science",
    sample:
      "This entertaining story will keep you.This spellbinding fiction will leave you.This spellbinding literature will leave a lasting impression on you.",
    discription:
      "This unputdownable narrative will transport you.This entertaining book will mesmerize you.This unputdownable story will transport you.This captivating story will take you.This intriguing book will captivate you.This gripping book will leave you.This mesmerizing literature will captivate you.This intriguing novel will keep you.This mesmerizing prose will leave a lasting impression on you.This captivating tale will keep you.This captivating tale will leave you.This thought-provoking fiction will leave a lasting impression on you.This spellbinding story will transport you.This thought-provoking narrative will mesmerize you.This spellbinding novel will mesmerize you.This entertaining tale will take you.This captivating prose will mesmerize you.This mesmerizing prose will mesmerize you.This gripping literature will leave a lasting impression on you.This captivating story will transport you.",
  },
  {
    id: "1774a0dd-effd-45f6-9e37-77954b9dadf4",
    title: "The Strange Case",
    image: "https://www.gutenberg.org/cache/epub/43/pg43.cover.medium.jpg",
    author: "Stevenson, Robert Louis",
    category: "science",
    sample:
      "This unputdownable book will keep you.This captivating novel will leave you.This intriguing fiction will transport you.",
    discription:
      "This intriguing tale will captivate you.This thought-provoking novel will captivate you.This entertaining book will leave a lasting impression on you.This captivating book will take you.This mesmerizing work will leave you.This captivating prose will leave you.This compelling tale will take you.This spellbinding tale will take you.This compelling work will leave a lasting impression on you.This captivating story will mesmerize you.This fascinating narrative will leave you.This entertaining work will take you.This fascinating prose will keep you.This entertaining fiction will transport you.This intriguing narrative will leave a lasting impression on you.This mesmerizing work will keep you.This fascinating fiction will leave a lasting impression on you.This intriguing narrative will transport you.This compelling narrative will captivate you.This captivating tale will captivate you.",
  },
  {
    id: "c1adcaf5-e915-42ba-b872-c389cba4ebdc",
    title: "The Prince",
    image: "https://www.gutenberg.org/cache/epub/1232/pg1232.cover.medium.jpg",
    author: "Machiavelli, Niccol\u00f2",
    category: "science",
    sample:
      "This mesmerizing story will keep you.This unputdownable story will captivate you.This fascinating novel will mesmerize you.",
    discription:
      "This entertaining story will leave you.This gripping tale will keep you.This compelling literature will keep you.This entertaining tale will leave you.This fascinating work will keep you.This compelling narrative will take you.This captivating fiction will leave you.This unputdownable fiction will transport you.This captivating tale will mesmerize you.This spellbinding story will transport you.This entertaining literature will leave a lasting impression on you.This mesmerizing literature will transport you.This thought-provoking book will transport you.This gripping novel will mesmerize you.This compelling narrative will keep you.This unputdownable book will leave you.This captivating book will leave a lasting impression on you.This compelling story will transport you.This intriguing narrative will transport you.This gripping narrative will mesmerize you.",
  },
  {
    id: "c665d5d7-eb49-4db7-a182-2b18f250c2e2",
    title: "The War of the Worlds",
    image: "https://www.gutenberg.org/cache/epub/36/pg36.cover.medium.jpg",
    author: "Wells, H. G. (Herbert George)",
    category: "science",
    sample:
      "This entertaining prose will leave you.This entertaining book will mesmerize you.This intriguing work will leave a lasting impression on you.",
    discription:
      "This entertaining work will mesmerize you.This unputdownable story will leave a lasting impression on you.This unputdownable literature will mesmerize you.This spellbinding book will keep you.This compelling work will leave you.This captivating novel will keep you.This gripping narrative will captivate you.This compelling fiction will take you.This gripping literature will keep you.This thought-provoking fiction will captivate you.This intriguing fiction will take you.This fascinating prose will take you.This gripping narrative will transport you.This thought-provoking tale will captivate you.This fascinating book will mesmerize you.This compelling narrative will leave a lasting impression on you.This fascinating narrative will leave you.This compelling literature will transport you.This fascinating book will take you.This thought-provoking fiction will transport you.",
  },
  {
    id: "cade6bc0-1212-4a47-aa49-8ea47882292d",
    title: "The Republic",
    image: "https://www.gutenberg.org/cache/epub/1497/pg1497.cover.medium.jpg",
    author: "Plato",
    category: "science",
    sample:
      "This fascinating book will transport you.This gripping book will take you.This mesmerizing book will transport you.",
    discription:
      "This mesmerizing novel will leave a lasting impression on you.This thought-provoking work will transport you.This thought-provoking work will leave a lasting impression on you.This gripping work will take you.This intriguing tale will keep you.This compelling prose will take you.This intriguing tale will transport you.This spellbinding work will keep you.This fascinating narrative will take you.This gripping fiction will captivate you.This fascinating tale will transport you.This thought-provoking novel will leave a lasting impression on you.This spellbinding novel will take you.This unputdownable literature will captivate you.This compelling narrative will take you.This spellbinding literature will mesmerize you.This fascinating fiction will transport you.This captivating novel will leave you.This gripping literature will leave a lasting impression on you.This entertaining story will keep you.",
  },
  {
    id: "23469aa8-1fb7-4b2c-9fed-4ca71635984e",
    title: "Second Treatise of Government",
    image: "https://www.gutenberg.org/cache/epub/7370/pg7370.cover.medium.jpg",
    author: "Locke, John",
    category: "science",
    sample:
      "This thought-provoking novel will mesmerize you.This compelling prose will leave you.This unputdownable story will captivate you.",
    discription:
      "This gripping fiction will leave a lasting impression on you.This compelling tale will keep you.This gripping literature will take you.This unputdownable story will captivate you.This intriguing prose will mesmerize you.This spellbinding fiction will leave a lasting impression on you.This entertaining literature will keep you.This intriguing literature will mesmerize you.This gripping work will leave a lasting impression on you.This thought-provoking narrative will leave a lasting impression on you.This fascinating novel will transport you.This gripping story will leave a lasting impression on you.This spellbinding fiction will leave a lasting impression on you.This mesmerizing prose will mesmerize you.This compelling literature will take you.This captivating narrative will keep you.This thought-provoking book will mesmerize you.This captivating book will transport you.This intriguing fiction will captivate you.This unputdownable work will transport you.",
  },
  {
    id: "d5f20795-e528-4507-9031-4759d43f97d5",
    title: "Leviathan",
    image: "https://www.gutenberg.org/cache/epub/3207/pg3207.cover.medium.jpg",
    author: "Hobbes, Thomas",
    category: "science",
    sample:
      "This captivating story will mesmerize you.This compelling tale will captivate you.This captivating narrative will leave you.",
    discription:
      "This captivating narrative will captivate you.This entertaining prose will transport you.This mesmerizing book will leave you.This fascinating narrative will transport you.This entertaining book will leave a lasting impression on you.This captivating fiction will captivate you.This intriguing story will captivate you.This mesmerizing fiction will leave a lasting impression on you.This intriguing fiction will keep you.This spellbinding narrative will leave you.This mesmerizing story will take you.This compelling fiction will mesmerize you.This fascinating story will leave a lasting impression on you.This entertaining fiction will keep you.This spellbinding fiction will transport you.This mesmerizing prose will transport you.This thought-provoking prose will transport you.This entertaining novel will transport you.This intriguing novel will leave you.This unputdownable tale will leave you.",
  },
  {
    id: "ddeba3ba-8ebf-4a2e-8371-3f0a3251882f",
    title: "The Time Machine",
    image: "https://www.gutenberg.org/cache/epub/35/pg35.cover.medium.jpg",
    author: "Wells, H. G. (Herbert George)",
    category: "science",
    sample:
      "This gripping literature will transport you.This captivating work will take you.This entertaining book will take you.",
    discription:
      "This intriguing prose will captivate you.This intriguing prose will transport you.This unputdownable prose will captivate you.This thought-provoking tale will take you.This fascinating prose will captivate you.This unputdownable story will leave you.This compelling literature will take you.This spellbinding prose will leave you.This compelling work will leave you.This unputdownable tale will transport you.This entertaining literature will mesmerize you.This gripping novel will mesmerize you.This thought-provoking literature will transport you.This entertaining work will transport you.This mesmerizing narrative will keep you.This unputdownable novel will take you.This entertaining narrative will leave a lasting impression on you.This fascinating fiction will keep you.This gripping novel will keep you.This gripping narrative will captivate you.",
  },
  {
    id: "d9ef16c4-2373-4567-b269-b8b0920b9dd0",
    title: "The Modern Prometheus",
    image:
      "https://www.gutenberg.org/cache/epub/42324/pg42324.cover.medium.jpg",
    author: "Shelley, Mary Wollstonecraft",
    category: "science",
    sample:
      "This intriguing story will mesmerize you.This compelling story will mesmerize you.This entertaining prose will captivate you.",
    discription:
      "This intriguing work will leave you.This spellbinding story will leave you.This gripping narrative will mesmerize you.This mesmerizing story will leave you.This entertaining tale will keep you.This unputdownable literature will transport you.This intriguing fiction will leave a lasting impression on you.This entertaining fiction will transport you.This thought-provoking prose will transport you.This entertaining tale will take you.This compelling tale will take you.This compelling work will captivate you.This compelling novel will keep you.This compelling novel will mesmerize you.This fascinating narrative will captivate you.This gripping book will leave a lasting impression on you.This unputdownable novel will leave a lasting impression on you.This compelling prose will leave a lasting impression on you.This fascinating fiction will keep you.This spellbinding work will leave you.",
  },
  {
    id: "e3cb1d79-56ff-4954-b907-06766a4e6882",
    title: "Anthem",
    image: "https://www.gutenberg.org/cache/epub/1250/pg1250.cover.medium.jpg",
    author: "Rand, Ayn",
    category: "science",
    sample:
      "This spellbinding book will mesmerize you.This thought-provoking tale will captivate you.This captivating story will mesmerize you.",
    discription:
      "This intriguing narrative will captivate you.This compelling work will leave you.This intriguing literature will keep you.This mesmerizing prose will transport you.This gripping story will leave you.This spellbinding novel will leave a lasting impression on you.This fascinating story will captivate you.This entertaining novel will captivate you.This spellbinding work will leave a lasting impression on you.This gripping story will take you.This thought-provoking prose will keep you.This thought-provoking novel will leave you.This unputdownable book will captivate you.This unputdownable narrative will mesmerize you.This fascinating narrative will transport you.This compelling work will leave you.This thought-provoking book will take you.This spellbinding literature will leave a lasting impression on you.This intriguing prose will keep you.This intriguing fiction will take you.",
  },
  {
    id: "9a6a3158-96de-445e-8dbd-98c554c3df25",
    title: "Common Sense",
    image: "https://www.gutenberg.org/cache/epub/147/pg147.cover.medium.jpg",
    author: "Paine, Thomas",
    category: "science",
    sample:
      "This unputdownable narrative will mesmerize you.This mesmerizing novel will captivate you.This gripping tale will mesmerize you.",
    discription:
      "This compelling tale will keep you.This captivating literature will leave a lasting impression on you.This thought-provoking fiction will leave a lasting impression on you.This mesmerizing work will keep you.This unputdownable tale will leave you.This intriguing tale will take you.This spellbinding novel will mesmerize you.This mesmerizing prose will leave a lasting impression on you.This gripping story will mesmerize you.This fascinating work will captivate you.This gripping novel will leave you.This spellbinding tale will leave you.This entertaining fiction will transport you.This gripping story will transport you.This thought-provoking prose will take you.This entertaining work will transport you.This compelling prose will captivate you.This spellbinding novel will keep you.This fascinating prose will transport you.This intriguing book will transport you.",
  },
  {
    id: "dfe632db-ee28-415e-9de1-ee53555f9019",
    title: "The Modern Prometheus",
    image:
      "https://www.gutenberg.org/cache/epub/41445/pg41445.cover.medium.jpg",
    author: "Shelley, Mary Wollstonecraft",
    category: "science",
    sample:
      "This spellbinding work will transport you.This gripping fiction will leave a lasting impression on you.This entertaining fiction will mesmerize you.",
    discription:
      "This thought-provoking novel will leave you.This fascinating tale will mesmerize you.This fascinating work will transport you.This thought-provoking novel will keep you.This spellbinding tale will leave you.This mesmerizing prose will keep you.This compelling novel will keep you.This compelling narrative will take you.This captivating literature will take you.This mesmerizing work will captivate you.This mesmerizing literature will keep you.This fascinating tale will leave you.This intriguing novel will leave you.This captivating story will leave you.This captivating tale will transport you.This thought-provoking literature will leave a lasting impression on you.This compelling work will transport you.This intriguing narrative will captivate you.This fascinating work will captivate you.This thought-provoking narrative will transport you.",
  },
  {
    id: "25d870a6-4aba-44de-85d3-98552f2f7c3b",
    title: "The Art of War",
    image: "https://www.gutenberg.org/cache/epub/132/pg132.cover.medium.jpg",
    author: "Sunzi, active 6th century B.C.",
    category: "science",
    sample:
      "This fascinating novel will leave a lasting impression on you.This fascinating story will leave a lasting impression on you.This entertaining work will leave you.",
    discription:
      "This captivating work will keep you.This thought-provoking prose will keep you.This compelling story will leave you.This thought-provoking prose will leave a lasting impression on you.This entertaining narrative will keep you.This gripping novel will keep you.This compelling prose will captivate you.This fascinating prose will keep you.This entertaining fiction will mesmerize you.This compelling story will leave you.This unputdownable tale will leave a lasting impression on you.This thought-provoking narrative will transport you.This thought-provoking work will take you.This spellbinding narrative will leave you.This mesmerizing work will leave a lasting impression on you.This mesmerizing prose will leave you.This captivating tale will mesmerize you.This captivating fiction will transport you.This thought-provoking story will leave you.This fascinating novel will leave a lasting impression on you.",
  },
  {
    id: "58929020-afa7-4906-8871-5f9218861fbe",
    title: "Twenty Thousand Leagues under the Sea",
    image: "https://www.gutenberg.org/cache/epub/164/pg164.cover.medium.jpg",
    author: "Verne, Jules",
    category: "science",
    sample:
      "This unputdownable tale will leave you.This unputdownable novel will keep you.This unputdownable story will leave a lasting impression on you.",
    discription:
      "This fascinating fiction will keep you.This captivating narrative will transport you.This gripping fiction will leave you.This captivating prose will captivate you.This unputdownable story will transport you.This fascinating fiction will keep you.This gripping fiction will leave you.This fascinating book will mesmerize you.This gripping literature will keep you.This gripping literature will captivate you.This captivating tale will mesmerize you.This unputdownable book will captivate you.This captivating tale will take you.This compelling tale will keep you.This intriguing work will leave a lasting impression on you.This spellbinding prose will keep you.This fascinating book will take you.This gripping narrative will keep you.This thought-provoking novel will leave a lasting impression on you.This compelling fiction will leave you.",
  },
  {
    id: "93a42a2f-698b-444c-8a67-f025a67a197c",
    title: "The Invisible Man",
    image: "https://www.gutenberg.org/cache/epub/5230/pg5230.cover.medium.jpg",
    author: "Wells, H. G. (Herbert George)",
    category: "science",
    sample:
      "This intriguing prose will leave a lasting impression on you.This captivating tale will keep you.This thought-provoking work will take you.",
    discription:
      "This entertaining book will leave you.This mesmerizing tale will leave you.This captivating narrative will keep you.This compelling narrative will mesmerize you.This entertaining story will captivate you.This thought-provoking work will mesmerize you.This unputdownable narrative will take you.This gripping novel will take you.This thought-provoking prose will leave a lasting impression on you.This entertaining book will captivate you.This mesmerizing fiction will captivate you.This unputdownable book will keep you.This entertaining novel will mesmerize you.This compelling literature will mesmerize you.This intriguing book will keep you.This entertaining work will leave a lasting impression on you.This fascinating narrative will mesmerize you.This unputdownable story will take you.This thought-provoking literature will take you.This compelling story will captivate you.",
  },
  {
    id: "204a8196-1fec-4b8c-9787-34c11edf29ce",
    title: "2 B R 0 2 B",
    image:
      "https://www.gutenberg.org/cache/epub/21279/pg21279.cover.medium.jpg",
    author: "Vonnegut, Kurt",
    category: "science",
    sample:
      "This thought-provoking work will captivate you.This compelling fiction will keep you.This thought-provoking story will mesmerize you.",
    discription:
      "This mesmerizing narrative will keep you.This captivating work will keep you.This gripping literature will keep you.This thought-provoking prose will transport you.This thought-provoking book will transport you.This captivating narrative will leave a lasting impression on you.This spellbinding fiction will keep you.This intriguing fiction will keep you.This fascinating tale will leave a lasting impression on you.This captivating literature will leave you.This entertaining tale will leave you.This compelling prose will leave a lasting impression on you.This captivating story will captivate you.This thought-provoking book will leave you.This captivating book will transport you.This captivating book will captivate you.This entertaining work will transport you.This gripping literature will keep you.This mesmerizing work will leave you.This gripping novel will leave you.",
  },
  {
    id: "143b26ca-314a-4093-ac68-2ba82d843413",
    title: "On War",
    image: "https://www.gutenberg.org/cache/epub/1946/pg1946.cover.medium.jpg",
    author: "Clausewitz, Carl von",
    category: "science",
    sample:
      "This captivating fiction will transport you.This mesmerizing story will captivate you.This captivating work will captivate you.",
    discription:
      "This unputdownable literature will take you.This captivating narrative will take you.This fascinating novel will leave you.This spellbinding literature will transport you.This gripping book will mesmerize you.This gripping prose will take you.This fascinating prose will captivate you.This fascinating work will transport you.This unputdownable book will mesmerize you.This unputdownable fiction will leave a lasting impression on you.This spellbinding book will leave you.This captivating literature will keep you.This unputdownable literature will mesmerize you.This fascinating literature will leave a lasting impression on you.This spellbinding narrative will mesmerize you.This spellbinding tale will take you.This thought-provoking narrative will keep you.This unputdownable book will take you.This compelling novel will transport you.This entertaining prose will leave a lasting impression on you.",
  },
  {
    id: "486bf4c6-a95b-4f7f-a140-83bcb4d6e8da",
    title: "The island ",
    image: "https://www.gutenberg.org/cache/epub/159/pg159.cover.medium.jpg",
    author: "Wells, H. G. (Herbert George)",
    category: "science",
    sample:
      "This captivating narrative will captivate you.This gripping story will leave a lasting impression on you.This unputdownable novel will keep you.",
    discription:
      "This unputdownable novel will mesmerize you.This entertaining fiction will keep you.This mesmerizing novel will mesmerize you.This captivating prose will keep you.This gripping fiction will captivate you.This captivating story will leave a lasting impression on you.This spellbinding work will leave you.This spellbinding fiction will mesmerize you.This captivating fiction will leave you.This gripping novel will captivate you.This thought-provoking narrative will keep you.This unputdownable fiction will leave a lasting impression on you.This captivating prose will take you.This thought-provoking fiction will take you.This intriguing tale will take you.This mesmerizing literature will take you.This spellbinding novel will leave you.This captivating novel will mesmerize you.This fascinating novel will leave a lasting impression on you.This spellbinding tale will keep you.",
  },
  {
    id: "47036b49-8046-4de2-b699-005f52f711ea",
    title: "The Republic of Plato",
    image:
      "https://www.gutenberg.org/cache/epub/55201/pg55201.cover.medium.jpg",
    author: "Plato",
    category: "science",
    sample:
      "This compelling narrative will leave a lasting impression on you.This gripping prose will leave you.This intriguing novel will take you.",
    discription:
      "This captivating narrative will take you.This compelling story will take you.This spellbinding work will leave a lasting impression on you.This unputdownable literature will keep you.This mesmerizing novel will leave a lasting impression on you.This intriguing fiction will take you.This thought-provoking work will mesmerize you.This thought-provoking fiction will mesmerize you.This spellbinding narrative will transport you.This entertaining story will keep you.This compelling fiction will leave you.This mesmerizing literature will mesmerize you.This thought-provoking literature will leave a lasting impression on you.This unputdownable tale will transport you.This mesmerizing story will transport you.This captivating novel will leave a lasting impression on you.This captivating narrative will transport you.This captivating novel will captivate you.This entertaining narrative will transport you.This mesmerizing literature will leave you.",
  },
  {
    id: "2810c44d-4119-4785-9824-39ae8c977bed",
    title: "The stainless steel rat",
    image:
      "https://www.gutenberg.org/cache/epub/70034/pg70034.cover.medium.jpg",
    author: "Harrison, Harry",
    category: "science",
    sample:
      "This thought-provoking work will take you.This gripping novel will leave a lasting impression on you.This unputdownable literature will leave a lasting impression on you.",
    discription:
      "This spellbinding story will take you.This fascinating prose will transport you.This intriguing narrative will leave a lasting impression on you.This unputdownable tale will leave a lasting impression on you.This entertaining literature will take you.This thought-provoking tale will leave a lasting impression on you.This spellbinding fiction will captivate you.This gripping story will leave a lasting impression on you.This spellbinding story will captivate you.This gripping book will mesmerize you.This mesmerizing book will leave you.This fascinating prose will take you.This fascinating prose will leave you.This gripping fiction will take you.This compelling narrative will captivate you.This gripping narrative will transport you.This spellbinding tale will transport you.This compelling novel will take you.This gripping prose will captivate you.This gripping novel will captivate you.",
  },
  {
    id: "8661d039-41f0-4359-a5cc-cc09f8fd8010",
    title: "A Connecticut Yankee ",
    image: "https://www.gutenberg.org/cache/epub/86/pg86.cover.medium.jpg",
    author: "Twain, Mark",
    category: "science",
    sample:
      "This fascinating fiction will mesmerize you.This mesmerizing prose will leave you.This thought-provoking fiction will mesmerize you.",
    discription:
      "This entertaining fiction will mesmerize you.This thought-provoking work will keep you.This spellbinding story will leave a lasting impression on you.This compelling story will keep you.This mesmerizing narrative will captivate you.This spellbinding prose will take you.This gripping literature will transport you.This gripping novel will mesmerize you.This entertaining tale will mesmerize you.This entertaining tale will take you.This spellbinding work will leave you.This captivating tale will captivate you.This mesmerizing fiction will leave a lasting impression on you.This captivating prose will mesmerize you.This mesmerizing tale will keep you.This captivating novel will transport you.This intriguing tale will mesmerize you.This thought-provoking literature will mesmerize you.This unputdownable literature will leave you.This entertaining book will keep you.",
  },
  {
    id: "2060aaaf-144d-4f4d-b8c4-7bfa1012e97f",
    title: "Second Variety",
    image:
      "https://www.gutenberg.org/cache/epub/32032/pg32032.cover.medium.jpg",
    author: "Dick, Philip K.",
    category: "science",
    sample:
      "This spellbinding narrative will leave you.This intriguing literature will take you.This compelling literature will take you.",
    discription:
      "This unputdownable prose will take you.This mesmerizing prose will mesmerize you.This captivating tale will captivate you.This captivating story will transport you.This spellbinding book will take you.This gripping fiction will keep you.This thought-provoking prose will captivate you.This spellbinding book will take you.This mesmerizing literature will leave a lasting impression on you.This compelling story will mesmerize you.This unputdownable work will captivate you.This captivating narrative will leave you.This entertaining tale will leave a lasting impression on you.This unputdownable novel will captivate you.This captivating narrative will take you.This thought-provoking novel will keep you.This thought-provoking literature will transport you.This fascinating work will leave you.This entertaining prose will captivate you.This thought-provoking tale will take you.",
  },
  {
    id: "344e04ae-e6a9-4306-9bf9-c54c862b001d",
    title: "We",
    image:
      "https://www.gutenberg.org/cache/epub/61963/pg61963.cover.medium.jpg",
    author: "Zamiatin, Evgenii Ivanovich",
    category: "science",
    sample:
      "This intriguing prose will captivate you.This entertaining novel will keep you.This fascinating work will keep you.",
    discription:
      "This compelling story will mesmerize you.This compelling fiction will take you.This thought-provoking novel will take you.This unputdownable narrative will leave a lasting impression on you.This mesmerizing prose will take you.This fascinating narrative will take you.This intriguing tale will take you.This fascinating narrative will captivate you.This compelling prose will captivate you.This mesmerizing work will leave a lasting impression on you.This compelling narrative will captivate you.This fascinating narrative will keep you.This fascinating story will mesmerize you.This thought-provoking narrative will transport you.This unputdownable fiction will keep you.This entertaining story will leave you.This entertaining book will leave a lasting impression on you.This spellbinding prose will take you.This captivating fiction will leave a lasting impression on you.This thought-provoking narrative will captivate you.",
  },
  {
    id: "d04915dc-a2ea-4f3f-b4a7-3ea507a639e1",
    title: "Road Stop",
    image:
      "https://www.gutenberg.org/cache/epub/61309/pg61309.cover.medium.jpg",
    author: "Mason, David",
    category: "science",
    sample:
      "This unputdownable prose will transport you.This captivating novel will take you.This entertaining narrative will keep you.",
    discription:
      "This captivating prose will transport you.This thought-provoking tale will leave you.This entertaining work will leave a lasting impression on you.This mesmerizing narrative will keep you.This unputdownable work will leave you.This compelling novel will take you.This fascinating literature will take you.This unputdownable prose will captivate you.This fascinating tale will captivate you.This unputdownable prose will keep you.This captivating narrative will keep you.This compelling novel will leave you.This fascinating narrative will leave you.This spellbinding story will transport you.This gripping book will captivate you.This intriguing literature will leave a lasting impression on you.This fascinating prose will captivate you.This thought-provoking tale will captivate you.This intriguing novel will mesmerize you.This gripping book will mesmerize you.",
  },
  {
    id: "7b3c898c-f1bc-4b51-9301-ed9e05958c35",
    title: "To the Centre of the Earth",
    image:
      "https://www.gutenberg.org/cache/epub/18857/pg18857.cover.medium.jpg",
    author: "Verne, Jules",
    category: "science",
    sample:
      "This entertaining tale will leave you.This gripping literature will keep you.This unputdownable tale will leave you.",
    discription:
      "This mesmerizing narrative will mesmerize you.This gripping story will take you.This spellbinding fiction will leave you.This entertaining novel will take you.This compelling narrative will mesmerize you.This intriguing prose will transport you.This thought-provoking book will leave you.This intriguing tale will leave you.This unputdownable novel will mesmerize you.This thought-provoking tale will transport you.This intriguing tale will leave a lasting impression on you.This captivating narrative will transport you.This mesmerizing novel will mesmerize you.This entertaining prose will mesmerize you.This spellbinding book will leave a lasting impression on you.This entertaining tale will transport you.This captivating literature will mesmerize you.This thought-provoking prose will transport you.This captivating prose will take you.This entertaining work will leave a lasting impression on you.",
  },
  {
    id: "eeed560e-7f00-4b28-8e5c-03b4efcda226",
    title:
      "Discourse on the Method",
    image: "https://www.gutenberg.org/cache/epub/59/pg59.cover.medium.jpg",
    author: "Descartes, Ren\u00e9",
    category: "science",
    sample:
      "This spellbinding fiction will leave a lasting impression on you.This intriguing novel will leave you.This entertaining work will take you.",
    discription:
      "This compelling narrative will mesmerize you.This entertaining narrative will captivate you.This thought-provoking work will take you.This spellbinding literature will transport you.This compelling fiction will captivate you.This mesmerizing tale will leave a lasting impression on you.This unputdownable literature will leave you.This intriguing novel will transport you.This captivating story will keep you.This spellbinding fiction will take you.This entertaining fiction will leave you.This spellbinding story will transport you.This intriguing novel will take you.This spellbinding novel will mesmerize you.This unputdownable book will keep you.This gripping fiction will leave you.This gripping story will take you.This gripping work will leave you.This captivating literature will take you.This entertaining prose will take you.",
  },
  {
    id: "b0060918-bdd0-4198-9720-ceb2847761b1",
    title: "The last space ship",
    image:
      "https://www.gutenberg.org/cache/epub/69916/pg69916.cover.medium.jpg",
    author: "Leinster, Murray",
    category: "science",
    sample:
      "This intriguing novel will keep you.This captivating literature will keep you.This spellbinding literature will take you.",
    discription:
      "This entertaining prose will transport you.This entertaining narrative will leave you.This thought-provoking tale will transport you.This entertaining novel will leave a lasting impression on you.This compelling novel will leave a lasting impression on you.This spellbinding work will leave you.This gripping literature will mesmerize you.This spellbinding work will captivate you.This captivating tale will captivate you.This entertaining tale will mesmerize you.This spellbinding prose will keep you.This gripping prose will mesmerize you.This mesmerizing literature will captivate you.This thought-provoking fiction will leave you.This spellbinding novel will leave a lasting impression on you.This mesmerizing prose will transport you.This mesmerizing literature will transport you.This gripping story will leave you.This captivating prose will leave a lasting impression on you.This spellbinding literature will leave you.",
  },
  {
    id: "ede5412b-4555-4d17-8275-2652ce050f36",
    title: "Schizophrenic",
    image:
      "https://www.gutenberg.org/cache/epub/69921/pg69921.cover.medium.jpg",
    author: "Loomis, Noel M.",
    category: "science",
    sample:
      "This entertaining work will transport you.This compelling story will take you.This spellbinding novel will take you.",
    discription:
      "This compelling work will transport you.This entertaining book will take you.This mesmerizing literature will mesmerize you.This captivating work will take you.This spellbinding work will transport you.This captivating work will captivate you.This compelling narrative will leave a lasting impression on you.This mesmerizing literature will mesmerize you.This compelling fiction will transport you.This compelling fiction will captivate you.This captivating narrative will leave a lasting impression on you.This intriguing literature will keep you.This entertaining literature will take you.This spellbinding story will transport you.This mesmerizing book will leave you.This spellbinding work will captivate you.This compelling prose will transport you.This entertaining narrative will leave a lasting impression on you.This compelling book will mesmerize you.This unputdownable book will leave you.",
  },
  {
    id: "ea72bc69-3da4-4778-becd-9a00e6c90402",
    title: "A Princess of Mars",
    image: "https://www.gutenberg.org/cache/epub/62/pg62.cover.medium.jpg",
    author: "Burroughs, Edgar Rice",
    category: "science",
    sample:
      "This compelling book will mesmerize you.This entertaining novel will leave you.This spellbinding novel will mesmerize you.",
    discription:
      "This captivating book will leave a lasting impression on you.This thought-provoking fiction will keep you.This entertaining fiction will captivate you.This spellbinding novel will transport you.This unputdownable prose will leave you.This entertaining fiction will keep you.This spellbinding narrative will leave you.This thought-provoking prose will leave you.This entertaining novel will leave a lasting impression on you.This fascinating tale will transport you.This captivating story will captivate you.This thought-provoking novel will leave a lasting impression on you.This compelling tale will mesmerize you.This intriguing novel will keep you.This compelling novel will mesmerize you.This spellbinding narrative will keep you.This captivating book will leave a lasting impression on you.This compelling literature will keep you.This entertaining book will leave you.This fascinating work will leave you.",
  },
  {
    id: "fd9d4c88-7554-4b90-8304-533cd086c1b1",
    title: "Edison's Conquest of Mars",
    image:
      "https://www.gutenberg.org/cache/epub/19141/pg19141.cover.medium.jpg",
    author: "Serviss, Garrett Putman",
    category: "science",
    sample:
      "This entertaining fiction will keep you.This entertaining fiction will take you.This spellbinding work will keep you.",
    discription:
      "This mesmerizing story will mesmerize you.This gripping literature will leave a lasting impression on you.This spellbinding prose will keep you.This captivating literature will captivate you.This compelling novel will take you.This spellbinding fiction will take you.This spellbinding work will captivate you.This unputdownable literature will mesmerize you.This entertaining work will mesmerize you.This intriguing novel will leave a lasting impression on you.This unputdownable narrative will mesmerize you.This fascinating prose will mesmerize you.This spellbinding prose will take you.This spellbinding literature will leave a lasting impression on you.This gripping fiction will leave a lasting impression on you.This gripping novel will keep you.This fascinating literature will take you.This thought-provoking narrative will captivate you.This unputdownable fiction will keep you.This thought-provoking narrative will captivate you.",
  },
  {
    id: "f9d7b174-1872-4603-bcbe-f8d06478b268",
    title: "A Romance of Many Dimensions",
    image: "https://www.gutenberg.org/cache/epub/201/pg201.cover.medium.jpg",
    author: "Abbott, Edwin Abbott",
    category: "science",
    sample:
      "This mesmerizing tale will leave a lasting impression on you.This gripping tale will leave a lasting impression on you.This spellbinding tale will leave a lasting impression on you.",
    discription:
      "This mesmerizing fiction will leave a lasting impression on you.This mesmerizing work will take you.This gripping novel will take you.This spellbinding narrative will leave a lasting impression on you.This spellbinding narrative will leave a lasting impression on you.This thought-provoking fiction will keep you.This entertaining novel will transport you.This entertaining narrative will mesmerize you.This thought-provoking prose will take you.This spellbinding story will transport you.This mesmerizing prose will leave a lasting impression on you.This unputdownable novel will keep you.This thought-provoking fiction will transport you.This spellbinding literature will take you.This spellbinding fiction will transport you.This fascinating work will leave you.This spellbinding literature will mesmerize you.This compelling literature will captivate you.This unputdownable tale will leave you.This entertaining fiction will take you.",
  },
  {
    id: "c09fbfbe-631c-4726-854d-4bdff7160954",
    title: "The Strange Case ",
    image: "https://www.gutenberg.org/cache/epub/42/pg42.cover.medium.jpg",
    author: "Stevenson, Robert Louis",
    category: "science",
    sample:
      "This gripping story will leave you.This compelling tale will leave you.This spellbinding tale will leave a lasting impression on you.",
    discription:
      "This captivating prose will leave you.This gripping tale will mesmerize you.This thought-provoking work will keep you.This captivating fiction will captivate you.This fascinating novel will keep you.This fascinating literature will keep you.This entertaining tale will leave you.This unputdownable narrative will leave you.This entertaining tale will mesmerize you.This intriguing narrative will transport you.This entertaining story will take you.This intriguing literature will transport you.This mesmerizing literature will transport you.This fascinating work will take you.This unputdownable book will leave you.This entertaining novel will leave you.This unputdownable work will leave a lasting impression on you.This spellbinding narrative will mesmerize you.This fascinating novel will captivate you.This entertaining narrative will captivate you.",
  },
  {
    id: "6769d43b-985e-4437-8d68-636a0904bd2f",
    title:
      "Calculus Made Easy: Being a very-simplest introduction to those beautiful methods which are generally called by the terrifying names of the Differential Calculus and the Integral Calculus",
    image:
      "https://www.gutenberg.org/cache/epub/33283/pg33283.cover.medium.jpg",
    author: "Thompson, Silvanus P. (Silvanus Phillips)",
    category: "mathematics",
    sample:
      "This mesmerizing prose will keep you.This thought-provoking book will mesmerize you.This entertaining literature will transport you.",
    discription:
      "This fascinating book will keep you.This spellbinding literature will keep you.This compelling narrative will take you.This thought-provoking prose will keep you.This intriguing tale will keep you.This mesmerizing book will leave you.This entertaining novel will mesmerize you.This fascinating literature will take you.This intriguing tale will take you.This gripping work will leave a lasting impression on you.This compelling tale will mesmerize you.This intriguing narrative will leave you.This mesmerizing work will mesmerize you.This unputdownable narrative will take you.This mesmerizing prose will transport you.This captivating work will transport you.This compelling novel will take you.This thought-provoking book will leave a lasting impression on you.This gripping prose will captivate you.This entertaining novel will transport you.",
  },
  {
    id: "921eee32-7d85-431d-a434-ea7a4443c022",
    title: "Tractatus Logico-Philosophicus",
    image: "https://www.gutenberg.org/cache/epub/5740/pg5740.cover.medium.jpg",
    author: "Wittgenstein, Ludwig",
    category: "mathematics",
    sample:
      "This captivating literature will take you.This mesmerizing novel will mesmerize you.This mesmerizing book will mesmerize you.",
    discription:
      "This gripping book will leave you.This fascinating tale will leave you.This spellbinding tale will captivate you.This captivating prose will captivate you.This thought-provoking narrative will mesmerize you.This compelling fiction will take you.This spellbinding book will leave a lasting impression on you.This gripping book will transport you.This compelling narrative will captivate you.This spellbinding tale will mesmerize you.This mesmerizing fiction will captivate you.This thought-provoking story will leave you.This fascinating book will keep you.This gripping novel will take you.This entertaining novel will transport you.This captivating prose will transport you.This unputdownable literature will keep you.This intriguing literature will transport you.This entertaining work will take you.This thought-provoking novel will mesmerize you.",
  },
  {
    id: "35eeaf5e-f4d1-4658-9f7c-56d8b33dc536",
    title: "Flatland: A Romance of Many Dimensions",
    image: "https://www.gutenberg.org/cache/epub/201/pg201.cover.medium.jpg",
    author: "Abbott, Edwin Abbott",
    category: "mathematics",
    sample:
      "This spellbinding tale will mesmerize you.This unputdownable book will keep you.This unputdownable work will keep you.",
    discription:
      "This mesmerizing prose will captivate you.This gripping narrative will mesmerize you.This unputdownable literature will transport you.This gripping work will leave you.This thought-provoking work will leave you.This thought-provoking work will keep you.This fascinating literature will keep you.This compelling tale will captivate you.This intriguing narrative will captivate you.This intriguing tale will leave you.This entertaining work will leave a lasting impression on you.This fascinating fiction will take you.This fascinating novel will leave you.This captivating tale will leave you.This intriguing literature will take you.This captivating work will captivate you.This spellbinding tale will take you.This unputdownable tale will leave a lasting impression on you.This compelling narrative will captivate you.This mesmerizing work will transport you.",
  },
  {
    id: "3c9763c0-cd32-43f2-8ac0-0a3c9326c553",
    title: "A Course of Pure Mathematics: Third Edition",
    image:
      "https://www.gutenberg.org/cache/epub/38769/pg38769.cover.medium.jpg",
    author: "Hardy, G. H. (Godfrey Harold)",
    category: "mathematics",
    sample:
      "This unputdownable fiction will keep you.This compelling tale will leave a lasting impression on you.This fascinating work will transport you.",
    discription:
      "This captivating work will keep you.This intriguing prose will leave you.This thought-provoking book will keep you.This compelling work will transport you.This spellbinding tale will leave a lasting impression on you.This spellbinding work will captivate you.This thought-provoking book will leave you.This fascinating prose will leave a lasting impression on you.This thought-provoking prose will mesmerize you.This thought-provoking book will captivate you.This compelling prose will mesmerize you.This fascinating literature will leave you.This thought-provoking prose will leave you.This spellbinding book will transport you.This fascinating book will mesmerize you.This intriguing literature will captivate you.This entertaining narrative will leave a lasting impression on you.This captivating literature will leave a lasting impression on you.This mesmerizing narrative will transport you.This entertaining work will take you.",
  },
  {
    id: "2a4529f2-7e90-461f-9ffd-d8b51c9cc93b",
    title: "Philosophiae Naturalis Principia Mathematica",
    image:
      "https://www.gutenberg.org/cache/epub/28233/pg28233.cover.medium.jpg",
    author: "Newton, Isaac",
    category: "mathematics",
    sample:
      "This entertaining tale will leave a lasting impression on you.This captivating literature will leave you.This fascinating prose will captivate you.",
    discription:
      "This spellbinding narrative will leave you.This thought-provoking novel will take you.This intriguing prose will transport you.This compelling fiction will transport you.This captivating fiction will take you.This gripping book will mesmerize you.This gripping fiction will transport you.This thought-provoking prose will leave a lasting impression on you.This spellbinding work will leave a lasting impression on you.This gripping story will captivate you.This unputdownable narrative will mesmerize you.This spellbinding novel will leave a lasting impression on you.This gripping narrative will take you.This compelling fiction will keep you.This intriguing narrative will keep you.This compelling prose will leave a lasting impression on you.This thought-provoking story will keep you.This thought-provoking work will captivate you.This mesmerizing narrative will leave a lasting impression on you.This thought-provoking literature will keep you.",
  },
  {
    id: "8ca1b2fe-1b77-4c6b-a024-ea957e199cb5",
    title: "An Introduction to Mathematics",
    image:
      "https://www.gutenberg.org/cache/epub/41568/pg41568.cover.medium.jpg",
    author: "Whitehead, Alfred North",
    category: "mathematics",
    sample:
      "This captivating story will transport you.This thought-provoking tale will leave you.This gripping novel will leave a lasting impression on you.",
    discription:
      "This compelling book will leave you.This mesmerizing narrative will captivate you.This entertaining book will take you.This mesmerizing literature will captivate you.This intriguing novel will leave a lasting impression on you.This compelling fiction will captivate you.This mesmerizing work will transport you.This compelling tale will mesmerize you.This compelling prose will leave a lasting impression on you.This fascinating prose will leave a lasting impression on you.This mesmerizing book will captivate you.This mesmerizing narrative will leave a lasting impression on you.This thought-provoking story will leave a lasting impression on you.This compelling book will captivate you.This unputdownable novel will captivate you.This thought-provoking prose will leave a lasting impression on you.This spellbinding prose will leave you.This gripping tale will leave a lasting impression on you.This intriguing fiction will transport you.This entertaining work will leave a lasting impression on you.",
  },
  {
    id: "a5202af2-9cb4-4041-bf8c-663a0bdb11bb",
    title: "The First Six Books of the Elements of Euclid",
    image:
      "https://www.gutenberg.org/cache/epub/21076/pg21076.cover.medium.jpg",
    author: "Euclid",
    category: "mathematics",
    sample:
      "This entertaining tale will leave a lasting impression on you.This thought-provoking work will leave you.This compelling narrative will transport you.",
    discription:
      "This intriguing narrative will keep you.This spellbinding tale will transport you.This thought-provoking narrative will leave a lasting impression on you.This unputdownable narrative will keep you.This entertaining narrative will transport you.This unputdownable story will keep you.This compelling prose will transport you.This gripping tale will transport you.This mesmerizing prose will captivate you.This thought-provoking fiction will captivate you.This mesmerizing novel will leave you.This captivating tale will leave you.This intriguing fiction will take you.This fascinating fiction will mesmerize you.This entertaining narrative will take you.This entertaining story will keep you.This intriguing narrative will mesmerize you.This intriguing story will transport you.This spellbinding prose will keep you.This captivating book will leave a lasting impression on you.",
  },
  {
    id: "e9e85c68-803b-410b-b64b-b9b057f37006",
    title:
      "An Investigation of the Laws of Thought: On which are founded the mathematical theories of logic and probabilities",
    image:
      "https://www.gutenberg.org/cache/epub/15114/pg15114.cover.medium.jpg",
    author: "Boole, George",
    category: "mathematics",
    sample:
      "This gripping book will mesmerize you.This fascinating novel will take you.This fascinating prose will leave a lasting impression on you.",
    discription:
      "This fascinating fiction will take you.This mesmerizing book will take you.This mesmerizing prose will mesmerize you.This unputdownable story will leave you.This thought-provoking literature will leave you.This gripping literature will take you.This thought-provoking book will keep you.This unputdownable tale will mesmerize you.This intriguing story will leave a lasting impression on you.This gripping work will mesmerize you.This gripping book will leave a lasting impression on you.This spellbinding story will take you.This entertaining novel will leave a lasting impression on you.This gripping book will transport you.This entertaining novel will transport you.This fascinating literature will leave a lasting impression on you.This thought-provoking narrative will captivate you.This compelling fiction will leave a lasting impression on you.This thought-provoking book will keep you.This compelling work will leave a lasting impression on you.",
  },
  {
    id: "938c8919-ed0c-4e77-842f-b6ef32deba30",
    title: "Science and hypothesis",
    image:
      "https://www.gutenberg.org/cache/epub/37157/pg37157.cover.medium.jpg",
    author: "Poincar\u00e9, Henri",
    category: "mathematics",
    sample:
      "This spellbinding book will leave you.This intriguing work will take you.This mesmerizing novel will captivate you.",
    discription:
      "This gripping tale will transport you.This entertaining narrative will keep you.This entertaining work will leave a lasting impression on you.This captivating narrative will leave a lasting impression on you.This gripping literature will leave a lasting impression on you.This intriguing narrative will mesmerize you.This thought-provoking tale will captivate you.This captivating literature will leave you.This gripping narrative will take you.This thought-provoking prose will transport you.This entertaining work will take you.This mesmerizing narrative will leave a lasting impression on you.This gripping literature will take you.This mesmerizing story will mesmerize you.This thought-provoking story will transport you.This mesmerizing prose will leave a lasting impression on you.This spellbinding book will captivate you.This intriguing tale will mesmerize you.This thought-provoking narrative will leave you.This spellbinding novel will keep you.",
  },
  {
    id: "8d4b0d2e-68cf-4b8d-b2f0-0b5b71c96f3e",
    title: "Spherical Trigonometry: For the Use of Colleges and Schools",
    image:
      "https://www.gutenberg.org/cache/epub/19770/pg19770.cover.medium.jpg",
    author: "Todhunter, I. (Isaac)",
    category: "mathematics",
    sample:
      "This gripping tale will take you.This thought-provoking narrative will captivate you.This compelling book will transport you.",
    discription:
      "This entertaining tale will take you.This intriguing story will mesmerize you.This captivating tale will transport you.This mesmerizing prose will leave a lasting impression on you.This gripping book will leave you.This intriguing work will leave you.This entertaining novel will keep you.This thought-provoking literature will captivate you.This intriguing book will take you.This fascinating prose will captivate you.This fascinating fiction will transport you.This entertaining narrative will leave you.This captivating work will leave a lasting impression on you.This captivating story will transport you.This spellbinding novel will captivate you.This unputdownable book will keep you.This entertaining book will mesmerize you.This entertaining fiction will keep you.This thought-provoking narrative will keep you.This mesmerizing story will leave a lasting impression on you.",
  },
  {
    id: "37873df9-5ecc-4cde-8fba-ac8263ec51a2",
    title: "Mysticism and Logic and Other Essays",
    image:
      "https://www.gutenberg.org/cache/epub/25447/pg25447.cover.medium.jpg",
    author: "Russell, Bertrand",
    category: "mathematics",
    sample:
      "This fascinating literature will keep you.This compelling story will leave you.This unputdownable narrative will mesmerize you.",
    discription:
      "This captivating tale will leave you.This thought-provoking prose will transport you.This intriguing prose will leave you.This captivating book will leave a lasting impression on you.This spellbinding literature will leave you.This entertaining prose will keep you.This compelling narrative will leave you.This unputdownable story will mesmerize you.This intriguing prose will leave a lasting impression on you.This thought-provoking literature will transport you.This intriguing literature will mesmerize you.This fascinating fiction will keep you.This gripping book will keep you.This mesmerizing book will take you.This unputdownable tale will transport you.This intriguing literature will transport you.This unputdownable work will take you.This gripping prose will leave a lasting impression on you.This thought-provoking tale will take you.This entertaining fiction will leave a lasting impression on you.",
  },
  {
    id: "ec26a345-f139-4720-a4fb-5a2fc58203e4",
    title: "Flatland: A Romance of Many Dimensions",
    image: "https://www.gutenberg.org/cache/epub/97/pg97.cover.medium.jpg",
    author: "Abbott, Edwin Abbott",
    category: "mathematics",
    sample:
      "This fascinating novel will keep you.This gripping book will mesmerize you.This thought-provoking prose will captivate you.",
    discription:
      "This spellbinding story will leave you.This captivating fiction will captivate you.This gripping tale will leave you.This unputdownable tale will mesmerize you.This mesmerizing literature will leave a lasting impression on you.This intriguing prose will captivate you.This intriguing narrative will leave a lasting impression on you.This unputdownable story will mesmerize you.This fascinating book will leave you.This thought-provoking literature will keep you.This entertaining literature will captivate you.This unputdownable fiction will captivate you.This intriguing book will captivate you.This intriguing literature will leave you.This spellbinding novel will take you.This compelling tale will mesmerize you.This spellbinding novel will keep you.This thought-provoking story will mesmerize you.This captivating literature will transport you.This spellbinding fiction will captivate you.",
  },
  {
    id: "503efe6a-ad6b-4989-9b36-0d414df5ea61",
    title: "First Course in the Theory of Equations",
    image:
      "https://www.gutenberg.org/cache/epub/29785/pg29785.cover.medium.jpg",
    author: "Dickson, Leonard E. (Leonard Eugene)",
    category: "mathematics",
    sample:
      "This thought-provoking literature will transport you.This unputdownable tale will captivate you.This compelling narrative will take you.",
    discription:
      "This unputdownable fiction will transport you.This captivating novel will transport you.This mesmerizing tale will mesmerize you.This fascinating novel will captivate you.This captivating literature will leave a lasting impression on you.This thought-provoking narrative will transport you.This thought-provoking fiction will mesmerize you.This entertaining tale will captivate you.This gripping story will take you.This spellbinding novel will take you.This compelling novel will captivate you.This entertaining story will mesmerize you.This thought-provoking tale will captivate you.This intriguing literature will take you.This spellbinding book will mesmerize you.This spellbinding prose will keep you.This intriguing prose will leave you.This mesmerizing prose will take you.This mesmerizing work will leave you.This entertaining prose will keep you.",
  },
  {
    id: "04186505-afd8-4309-9cf7-88577ac0ffa5",
    title:
      "The Meaning of Relativity: Four lectures delivered at Princeton University, May, 1921",
    image:
      "https://www.gutenberg.org/cache/epub/36276/pg36276.cover.medium.jpg",
    author: "Einstein, Albert",
    category: "mathematics",
    sample:
      "This compelling work will keep you.This entertaining tale will leave a lasting impression on you.This unputdownable fiction will captivate you.",
    discription:
      "This spellbinding novel will leave a lasting impression on you.This intriguing novel will leave you.This spellbinding fiction will take you.This compelling work will captivate you.This thought-provoking story will keep you.This captivating work will leave a lasting impression on you.This fascinating fiction will transport you.This intriguing book will mesmerize you.This spellbinding fiction will keep you.This gripping story will keep you.This intriguing tale will leave a lasting impression on you.This mesmerizing tale will leave you.This mesmerizing fiction will leave a lasting impression on you.This entertaining book will mesmerize you.This intriguing book will mesmerize you.This gripping tale will captivate you.This unputdownable tale will leave a lasting impression on you.This entertaining book will mesmerize you.This spellbinding novel will mesmerize you.This spellbinding work will captivate you.",
  },
  {
    id: "95010114-3978-411b-81e0-a06f779441d2",
    title: "The Foundations of Geometry",
    image:
      "https://www.gutenberg.org/cache/epub/17384/pg17384.cover.medium.jpg",
    author: "Hilbert, David",
    category: "mathematics",
    sample:
      "This unputdownable work will transport you.This compelling story will keep you.This captivating book will take you.",
    discription:
      "This fascinating novel will leave a lasting impression on you.This intriguing narrative will transport you.This unputdownable story will mesmerize you.This gripping prose will captivate you.This fascinating novel will transport you.This intriguing fiction will leave a lasting impression on you.This entertaining book will take you.This fascinating tale will take you.This intriguing literature will take you.This spellbinding novel will take you.This thought-provoking literature will leave you.This thought-provoking book will mesmerize you.This mesmerizing novel will take you.This intriguing narrative will captivate you.This gripping work will leave a lasting impression on you.This entertaining work will leave a lasting impression on you.This gripping fiction will keep you.This gripping novel will mesmerize you.This spellbinding fiction will mesmerize you.This fascinating work will mesmerize you.",
  },
  {
    id: "ee4e2ddc-e01b-4b6c-807f-55d6b333d351",
    title: "Lectures on Elementary Mathematics",
    image:
      "https://www.gutenberg.org/cache/epub/36640/pg36640.cover.medium.jpg",
    author: "Lagrange, J. L. (Joseph Louis)",
    category: "mathematics",
    sample:
      "This compelling fiction will leave you.This mesmerizing literature will take you.This thought-provoking tale will captivate you.",
    discription:
      "This thought-provoking book will leave a lasting impression on you.This spellbinding tale will captivate you.This gripping book will take you.This fascinating novel will take you.This captivating story will transport you.This mesmerizing tale will captivate you.This spellbinding novel will keep you.This captivating novel will leave a lasting impression on you.This unputdownable prose will leave a lasting impression on you.This mesmerizing fiction will leave a lasting impression on you.This gripping prose will take you.This mesmerizing book will transport you.This fascinating novel will mesmerize you.This thought-provoking prose will transport you.This entertaining story will mesmerize you.This entertaining book will leave a lasting impression on you.This intriguing fiction will leave you.This mesmerizing literature will mesmerize you.This gripping tale will keep you.This entertaining fiction will mesmerize you.",
  },
  {
    id: "0bd149a2-ae2d-438a-af9b-5c25a39d7c24",
    title:
      "The Mathematical Analysis of Logic: Being an Essay Towards a Calculus of Deductive Reasoning",
    image:
      "https://www.gutenberg.org/cache/epub/36884/pg36884.cover.medium.jpg",
    author: "Boole, George",
    category: "mathematics",
    sample:
      "This entertaining fiction will transport you.This mesmerizing book will keep you.This fascinating literature will transport you.",
    discription:
      "This compelling novel will leave you.This compelling prose will transport you.This mesmerizing story will leave a lasting impression on you.This gripping prose will transport you.This intriguing work will transport you.This gripping fiction will leave a lasting impression on you.This captivating tale will leave a lasting impression on you.This spellbinding story will mesmerize you.This fascinating fiction will keep you.This captivating book will leave a lasting impression on you.This thought-provoking story will leave you.This spellbinding story will keep you.This thought-provoking story will leave you.This entertaining narrative will transport you.This intriguing fiction will transport you.This spellbinding story will captivate you.This spellbinding story will take you.This mesmerizing work will keep you.This fascinating novel will leave a lasting impression on you.This thought-provoking tale will leave a lasting impression on you.",
  },
  {
    id: "ed9d0fcc-2c2e-4a47-915b-2d9aa62cd147",
    title:
      "1001 \u0437\u0430\u0434\u0430\u0447\u0430 \u0434\u043b\u044f \u0443\u043c\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u0447\u0435\u0442\u0430",
    image:
      "https://www.gutenberg.org/cache/epub/16527/pg16527.cover.medium.jpg",
    author: "Rachinskii, Sergei Aleksandrovich",
    category: "mathematics",
    sample:
      "This captivating novel will captivate you.This spellbinding book will captivate you.This intriguing fiction will keep you.",
    discription:
      "This intriguing narrative will leave you.This compelling narrative will captivate you.This entertaining work will mesmerize you.This unputdownable story will keep you.This gripping prose will transport you.This compelling narrative will leave a lasting impression on you.This thought-provoking prose will keep you.This intriguing story will leave you.This thought-provoking novel will take you.This intriguing literature will captivate you.This mesmerizing prose will mesmerize you.This fascinating literature will leave you.This intriguing work will mesmerize you.This gripping novel will captivate you.This mesmerizing fiction will leave you.This thought-provoking narrative will keep you.This compelling tale will mesmerize you.This fascinating tale will captivate you.This unputdownable prose will transport you.This fascinating book will leave a lasting impression on you.",
  },
  {
    id: "9d21d537-7825-4d5b-bf6e-230a6f45b685",
    title: "Space\u2014Time\u2014Matter",
    image:
      "https://www.gutenberg.org/cache/epub/43006/pg43006.cover.medium.jpg",
    author: "Weyl, Hermann",
    category: "mathematics",
    sample:
      "This fascinating narrative will keep you.This gripping book will leave you.This mesmerizing novel will mesmerize you.",
    discription:
      "This gripping tale will leave a lasting impression on you.This unputdownable fiction will mesmerize you.This thought-provoking book will leave you.This mesmerizing story will keep you.This intriguing novel will leave you.This unputdownable book will transport you.This gripping tale will take you.This entertaining prose will mesmerize you.This unputdownable work will take you.This compelling fiction will take you.This fascinating tale will captivate you.This unputdownable novel will leave you.This thought-provoking story will mesmerize you.This gripping prose will captivate you.This entertaining fiction will keep you.This spellbinding story will mesmerize you.This thought-provoking narrative will take you.This entertaining prose will leave a lasting impression on you.This gripping fiction will mesmerize you.This mesmerizing tale will leave a lasting impression on you.",
  },
  {
    id: "e47dfc17-7710-4c88-9ab6-6c46c8fb8bd0",
    title: "Mathematical Recreations and Essays",
    image:
      "https://www.gutenberg.org/cache/epub/26839/pg26839.cover.medium.jpg",
    author: "Ball, W. W. Rouse (Walter William Rouse)",
    category: "mathematics",
    sample:
      "This fascinating book will captivate you.This fascinating work will transport you.This spellbinding novel will keep you.",
    discription:
      "This gripping work will leave you.This spellbinding fiction will take you.This unputdownable book will captivate you.This fascinating narrative will captivate you.This intriguing prose will leave a lasting impression on you.This entertaining novel will keep you.This spellbinding work will take you.This entertaining narrative will captivate you.This entertaining tale will leave a lasting impression on you.This gripping literature will keep you.This fascinating work will leave you.This fascinating tale will leave you.This unputdownable story will keep you.This mesmerizing prose will transport you.This gripping literature will take you.This entertaining fiction will transport you.This gripping narrative will transport you.This entertaining prose will captivate you.This thought-provoking novel will leave you.This captivating work will transport you.",
  },
  {
    id: "575b7e2f-2dab-4857-8174-b4a994fb6a5e",
    title: "The Mathematical Theory of Relativity",
    image:
      "https://www.gutenberg.org/cache/epub/59248/pg59248.cover.medium.jpg",
    author: "Eddington, Arthur Stanley, Sir",
    category: "mathematics",
    sample:
      "This captivating literature will leave you.This gripping book will captivate you.This thought-provoking tale will leave a lasting impression on you.",
    discription:
      "This intriguing fiction will leave you.This intriguing story will captivate you.This entertaining work will leave you.This mesmerizing prose will mesmerize you.This thought-provoking prose will leave a lasting impression on you.This unputdownable story will leave you.This compelling work will keep you.This mesmerizing work will take you.This spellbinding tale will mesmerize you.This gripping narrative will transport you.This entertaining literature will leave a lasting impression on you.This unputdownable work will leave you.This mesmerizing prose will transport you.This intriguing book will leave a lasting impression on you.This thought-provoking fiction will keep you.This entertaining story will transport you.This thought-provoking book will captivate you.This unputdownable story will captivate you.This compelling narrative will keep you.This mesmerizing literature will take you.",
  },
  {
    id: "9c718ab2-c14a-40b9-9937-c6aeee9ff050",
    title: "A Treatise on Probability",
    image:
      "https://www.gutenberg.org/cache/epub/32625/pg32625.cover.medium.jpg",
    author: "Keynes, John Maynard",
    category: "mathematics",
    sample:
      "This fascinating story will leave you.This mesmerizing work will transport you.This entertaining fiction will take you.",
    discription:
      "This intriguing narrative will leave a lasting impression on you.This compelling story will keep you.This entertaining work will keep you.This captivating story will mesmerize you.This intriguing prose will leave you.This entertaining tale will leave you.This entertaining story will keep you.This entertaining work will take you.This unputdownable story will leave a lasting impression on you.This spellbinding work will keep you.This entertaining tale will captivate you.This captivating work will leave a lasting impression on you.This entertaining fiction will captivate you.This thought-provoking prose will mesmerize you.This unputdownable story will transport you.This compelling work will take you.This unputdownable book will leave you.This captivating novel will take you.This unputdownable prose will take you.This intriguing literature will mesmerize you.",
  },
  {
    id: "324f665f-1b2d-4b72-914e-20cc59be4329",
    title: "Plane Geometry",
    image:
      "https://www.gutenberg.org/cache/epub/33063/pg33063.cover.medium.jpg",
    author: "Wentworth, G. A. (George Albert)",
    category: "mathematics",
    sample:
      "This intriguing literature will leave you.This unputdownable literature will captivate you.This captivating book will captivate you.",
    discription:
      "This unputdownable book will take you.This thought-provoking work will take you.This intriguing book will take you.This unputdownable work will leave you.This mesmerizing book will keep you.This thought-provoking tale will take you.This compelling work will keep you.This mesmerizing story will leave a lasting impression on you.This thought-provoking book will keep you.This intriguing tale will leave you.This captivating tale will keep you.This fascinating prose will leave you.This captivating work will leave you.This captivating tale will mesmerize you.This compelling tale will keep you.This mesmerizing tale will transport you.This mesmerizing story will captivate you.This compelling fiction will transport you.This mesmerizing narrative will keep you.This gripping literature will captivate you.",
  },
  {
    id: "1072730e-5b74-4b18-978c-5a75ae5c7f15",
    title: "A First Book in Algebra",
    image:
      "https://www.gutenberg.org/cache/epub/13309/pg13309.cover.medium.jpg",
    author: "Boyden, Wallace C. (Wallace Clarke)",
    category: "mathematics",
    sample:
      "This captivating prose will leave a lasting impression on you.This compelling work will mesmerize you.This thought-provoking tale will mesmerize you.",
    discription:
      "This intriguing narrative will leave you.This captivating work will leave you.This unputdownable fiction will take you.This fascinating book will take you.This fascinating story will leave you.This entertaining tale will leave a lasting impression on you.This fascinating book will leave you.This gripping literature will take you.This gripping fiction will take you.This unputdownable story will leave you.This mesmerizing fiction will leave a lasting impression on you.This intriguing work will transport you.This unputdownable book will captivate you.This mesmerizing tale will leave a lasting impression on you.This compelling prose will leave you.This spellbinding prose will transport you.This captivating tale will captivate you.This intriguing book will mesmerize you.This spellbinding fiction will keep you.This entertaining novel will transport you.",
  },
  {
    id: "b1bee697-1487-43f7-8935-15b60b3e10d5",
    title: "Introduction to Mathematical Philosophy",
    image:
      "https://www.gutenberg.org/cache/epub/41654/pg41654.cover.medium.jpg",
    author: "Russell, Bertrand",
    category: "mathematics",
    sample:
      "This intriguing work will leave a lasting impression on you.This mesmerizing novel will leave you.This captivating tale will keep you.",
    discription:
      "This compelling narrative will leave a lasting impression on you.This thought-provoking literature will keep you.This fascinating book will transport you.This gripping tale will mesmerize you.This thought-provoking story will take you.This intriguing narrative will mesmerize you.This compelling literature will mesmerize you.This spellbinding novel will transport you.This spellbinding fiction will take you.This fascinating literature will take you.This unputdownable tale will keep you.This compelling book will leave a lasting impression on you.This captivating literature will keep you.This gripping prose will mesmerize you.This thought-provoking tale will keep you.This thought-provoking novel will keep you.This intriguing literature will captivate you.This mesmerizing book will take you.This unputdownable fiction will leave you.This intriguing book will leave you.",
  },
  {
    id: "49d3236c-75b7-461c-92a0-8a0774715ace",
    title: "The Life and Letters of Lewis Carroll (Rev. C. L. Dodgson)",
    image:
      "https://www.gutenberg.org/cache/epub/11483/pg11483.cover.medium.jpg",
    author: "Collingwood, Stuart Dodgson",
    category: "mathematics",
    sample:
      "This entertaining prose will keep you.This spellbinding work will captivate you.This thought-provoking tale will transport you.",
    discription:
      "This thought-provoking story will leave a lasting impression on you.This compelling narrative will leave a lasting impression on you.This captivating literature will take you.This thought-provoking book will captivate you.This compelling prose will captivate you.This entertaining book will take you.This captivating story will mesmerize you.This intriguing fiction will mesmerize you.This entertaining tale will mesmerize you.This unputdownable story will take you.This compelling work will leave a lasting impression on you.This spellbinding novel will transport you.This thought-provoking novel will leave you.This spellbinding prose will leave a lasting impression on you.This captivating prose will transport you.This thought-provoking tale will mesmerize you.This gripping narrative will mesmerize you.This intriguing narrative will mesmerize you.This fascinating tale will captivate you.This compelling book will keep you.",
  },
  {
    id: "f02f241b-3130-4fc8-a729-7d6047c95cd3",
    title: "Essays on the Theory of Numbers",
    image:
      "https://www.gutenberg.org/cache/epub/21016/pg21016.cover.medium.jpg",
    author: "Dedekind, Richard",
    category: "mathematics",
    sample:
      "This gripping book will transport you.This compelling tale will transport you.This compelling book will take you.",
    discription:
      "This compelling narrative will transport you.This thought-provoking novel will leave you.This thought-provoking narrative will leave you.This unputdownable tale will captivate you.This unputdownable work will leave you.This spellbinding novel will take you.This thought-provoking narrative will mesmerize you.This mesmerizing novel will leave a lasting impression on you.This compelling story will mesmerize you.This thought-provoking narrative will keep you.This intriguing literature will leave a lasting impression on you.This compelling narrative will transport you.This spellbinding literature will keep you.This intriguing fiction will keep you.This mesmerizing novel will leave you.This gripping prose will leave you.This thought-provoking book will leave a lasting impression on you.This mesmerizing book will transport you.This fascinating story will captivate you.This spellbinding work will captivate you.",
  },
  {
    id: "9e965ecd-15e0-43aa-9d7e-455243eb0a5e",
    title:
      "The Foundations of Science: Science and Hypothesis, The Value of Science, Science and Method",
    image:
      "https://www.gutenberg.org/cache/epub/39713/pg39713.cover.medium.jpg",
    author: "Poincar\u00e9, Henri",
    category: "mathematics",
    sample:
      "This entertaining book will transport you.This fascinating tale will transport you.This fascinating prose will transport you.",
    discription:
      "This compelling prose will captivate you.This compelling prose will take you.This captivating narrative will leave you.This thought-provoking prose will leave a lasting impression on you.This unputdownable story will leave you.This spellbinding tale will captivate you.This spellbinding book will leave a lasting impression on you.This entertaining work will leave you.This spellbinding novel will leave you.This captivating fiction will mesmerize you.This entertaining story will transport you.This gripping story will transport you.This unputdownable prose will transport you.This mesmerizing tale will leave a lasting impression on you.This entertaining literature will leave a lasting impression on you.This captivating literature will transport you.This fascinating literature will captivate you.This spellbinding story will mesmerize you.This entertaining fiction will captivate you.This gripping story will keep you.",
  },
  {
    id: "1bb19446-f972-45cb-9011-d47ee14327dc",
    title: "A Short Account of the History of Mathematics",
    image:
      "https://www.gutenberg.org/cache/epub/31246/pg31246.cover.medium.jpg",
    author: "Ball, W. W. Rouse (Walter William Rouse)",
    category: "mathematics",
    sample:
      "This compelling tale will captivate you.This mesmerizing prose will leave a lasting impression on you.This entertaining work will take you.",
    discription:
      "This entertaining story will captivate you.This compelling narrative will take you.This intriguing prose will take you.This thought-provoking prose will mesmerize you.This intriguing tale will leave a lasting impression on you.This spellbinding book will keep you.This intriguing novel will take you.This gripping narrative will take you.This thought-provoking story will leave you.This intriguing story will leave a lasting impression on you.This unputdownable literature will captivate you.This entertaining book will transport you.This fascinating novel will captivate you.This captivating fiction will leave you.This compelling literature will leave you.This mesmerizing fiction will leave you.This entertaining novel will keep you.This thought-provoking fiction will leave you.This intriguing literature will leave you.This entertaining prose will leave a lasting impression on you.",
  },
  {
    id: "9ea3429e-bb3c-43d2-8e09-ab9d75e181a7",
    title: "A Tangled Tale",
    image:
      "https://www.gutenberg.org/cache/epub/29042/pg29042.cover.medium.jpg",
    author: "Carroll, Lewis",
    category: "mathematics",
    sample:
      "This unputdownable tale will take you.This entertaining work will leave you.This unputdownable novel will keep you.",
    discription:
      "This captivating literature will leave a lasting impression on you.This intriguing work will leave a lasting impression on you.This thought-provoking work will transport you.This unputdownable story will leave you.This compelling novel will leave a lasting impression on you.This fascinating prose will mesmerize you.This mesmerizing story will leave a lasting impression on you.This gripping prose will leave a lasting impression on you.This captivating fiction will captivate you.This captivating work will leave a lasting impression on you.This intriguing novel will keep you.This intriguing novel will take you.This mesmerizing fiction will leave a lasting impression on you.This intriguing book will leave a lasting impression on you.This intriguing prose will leave you.This gripping literature will take you.This spellbinding book will keep you.This thought-provoking prose will mesmerize you.This compelling narrative will transport you.This thought-provoking story will leave you.",
  },
  {
    id: "5a6af66e-5ee1-4a25-b0fa-77116898c490",
    title: "The First Steps in Algebra",
    image:
      "https://www.gutenberg.org/cache/epub/36670/pg36670.cover.medium.jpg",
    author: "Wentworth, G. A. (George Albert)",
    category: "mathematics",
    sample:
      "This spellbinding narrative will transport you.This unputdownable fiction will take you.This spellbinding tale will transport you.",
    discription:
      "This compelling literature will take you.This spellbinding literature will leave you.This compelling tale will take you.This spellbinding work will captivate you.This intriguing tale will captivate you.This mesmerizing literature will mesmerize you.This entertaining narrative will leave you.This unputdownable novel will keep you.This gripping fiction will transport you.This captivating novel will take you.This spellbinding novel will take you.This fascinating story will keep you.This compelling book will keep you.This thought-provoking work will keep you.This unputdownable tale will keep you.This spellbinding story will captivate you.This fascinating work will leave you.This compelling work will leave you.This thought-provoking prose will transport you.This fascinating story will captivate you.",
  },
  {
    id: "1f534463-a656-4f3e-8dc6-8ca85ac7c711",
    title: "Solid Geometry with Problems and Applications (Revised edition)",
    image:
      "https://www.gutenberg.org/cache/epub/29807/pg29807.cover.medium.jpg",
    author: "Lennes, N. J. (Nels Johann)",
    category: "mathematics",
    sample:
      "This gripping tale will take you.This thought-provoking tale will keep you.This mesmerizing prose will take you.",
    discription:
      "This captivating novel will mesmerize you.This unputdownable novel will leave you.This unputdownable prose will leave a lasting impression on you.This compelling story will transport you.This thought-provoking literature will leave you.This fascinating prose will leave you.This unputdownable prose will captivate you.This mesmerizing fiction will take you.This captivating work will leave a lasting impression on you.This mesmerizing book will captivate you.This spellbinding tale will transport you.This gripping novel will leave a lasting impression on you.This thought-provoking fiction will take you.This thought-provoking novel will mesmerize you.This captivating literature will transport you.This thought-provoking prose will keep you.This intriguing fiction will transport you.This unputdownable story will leave you.This spellbinding story will leave you.This captivating narrative will captivate you.",
  },
  {
    id: "91d763e7-a027-4314-995b-c1fc9657ec61",
    title: "Moby Dick; Or, The Whale",
    image: "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
    author: "Melville, Herman",
    category: "adventure",
    sample:
      "This spellbinding tale will captivate you.This spellbinding story will transport you.This spellbinding work will captivate you.",
    discription:
      "This unputdownable prose will take you.This spellbinding literature will leave you.This intriguing tale will leave you.This thought-provoking story will transport you.This fascinating novel will leave a lasting impression on you.This thought-provoking novel will keep you.This thought-provoking novel will mesmerize you.This thought-provoking novel will leave a lasting impression on you.This gripping narrative will take you.This unputdownable book will take you.This mesmerizing fiction will transport you.This compelling literature will keep you.This intriguing literature will take you.This thought-provoking novel will keep you.This compelling novel will keep you.This spellbinding work will leave a lasting impression on you.This unputdownable book will keep you.This spellbinding fiction will leave you.This compelling narrative will leave a lasting impression on you.This unputdownable narrative will leave a lasting impression on you.",
  },
  {
    id: "e3a58a2b-68d3-4478-bb28-03efff30bda6",
    title: "The Adventures of Ferdinand Count Fathom \u2014 Complete",
    image: "https://www.gutenberg.org/cache/epub/6761/pg6761.cover.medium.jpg",
    author: "Smollett, T. (Tobias)",
    category: "adventure",
    sample:
      "This thought-provoking prose will leave you.This unputdownable work will leave you.This entertaining narrative will captivate you.",
    discription:
      "This intriguing story will transport you.This entertaining story will leave a lasting impression on you.This compelling literature will transport you.This captivating narrative will transport you.This unputdownable literature will take you.This gripping novel will mesmerize you.This gripping fiction will leave you.This compelling novel will leave you.This thought-provoking fiction will keep you.This intriguing novel will take you.This intriguing book will leave a lasting impression on you.This captivating narrative will keep you.This mesmerizing work will keep you.This spellbinding novel will keep you.This unputdownable tale will keep you.This gripping literature will keep you.This thought-provoking prose will captivate you.This spellbinding narrative will leave you.This intriguing fiction will leave a lasting impression on you.This unputdownable prose will keep you.",
  },
  {
    id: "4def8f7f-23d9-4597-990a-664dd0179a66",
    title: "Twenty Years After",
    image: "https://www.gutenberg.org/cache/epub/1259/pg1259.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "adventure",
    sample:
      "This entertaining fiction will leave you.This thought-provoking tale will captivate you.This entertaining literature will take you.",
    discription:
      "This spellbinding tale will captivate you.This unputdownable book will keep you.This mesmerizing literature will captivate you.This entertaining prose will captivate you.This compelling book will keep you.This mesmerizing work will take you.This unputdownable work will mesmerize you.This compelling story will leave you.This unputdownable book will leave a lasting impression on you.This spellbinding novel will keep you.This gripping story will keep you.This fascinating prose will take you.This intriguing novel will captivate you.This unputdownable tale will mesmerize you.This captivating tale will transport you.This gripping work will keep you.This thought-provoking prose will keep you.This gripping tale will captivate you.This gripping narrative will captivate you.This fascinating narrative will keep you.",
  },
  {
    id: "49f4c1ff-d7ce-4b29-bdfd-9e92b8314ef5",
    title: "Adventures of Huckleberry Finn",
    image: "https://www.gutenberg.org/cache/epub/76/pg76.cover.medium.jpg",
    author: "Twain, Mark",
    category: "adventure",
    sample:
      "This fascinating tale will leave you.This intriguing fiction will leave you.This compelling work will captivate you.",
    discription:
      "This unputdownable literature will captivate you.This entertaining prose will transport you.This compelling prose will take you.This fascinating narrative will leave a lasting impression on you.This captivating story will leave a lasting impression on you.This thought-provoking book will leave you.This intriguing book will leave you.This spellbinding prose will leave a lasting impression on you.This spellbinding story will leave you.This mesmerizing story will transport you.This intriguing book will take you.This thought-provoking literature will transport you.This thought-provoking prose will take you.This spellbinding story will keep you.This gripping narrative will leave you.This thought-provoking literature will leave a lasting impression on you.This intriguing novel will leave a lasting impression on you.This intriguing story will leave a lasting impression on you.This gripping book will transport you.This gripping book will mesmerize you.",
  },
  {
    id: "919343e8-d1c2-490e-8743-c36e92722914",
    title: "The Count of Monte Cristo, Illustrated",
    image: "https://www.gutenberg.org/cache/epub/1184/pg1184.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "adventure",
    sample:
      "This mesmerizing work will leave you.This gripping tale will leave you.This fascinating book will leave you.",
    discription:
      "This gripping literature will transport you.This fascinating narrative will leave you.This intriguing tale will keep you.This unputdownable story will captivate you.This fascinating narrative will leave you.This spellbinding fiction will keep you.This compelling tale will take you.This entertaining novel will leave a lasting impression on you.This gripping book will mesmerize you.This captivating tale will leave you.This thought-provoking literature will take you.This unputdownable work will leave a lasting impression on you.This entertaining tale will mesmerize you.This mesmerizing work will mesmerize you.This unputdownable narrative will keep you.This compelling novel will take you.This unputdownable story will transport you.This thought-provoking work will keep you.This captivating prose will keep you.This fascinating fiction will mesmerize you.",
  },
  {
    id: "b3001dae-0fb9-460c-bbfc-845de1199ea0",
    title: "The Adventures of Tom Sawyer, Complete",
    image: "https://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg",
    author: "Twain, Mark",
    category: "adventure",
    sample:
      "This compelling story will mesmerize you.This intriguing prose will keep you.This gripping literature will take you.",
    discription:
      "This intriguing novel will take you.This fascinating story will take you.This fascinating literature will captivate you.This unputdownable work will transport you.This compelling book will captivate you.This gripping tale will leave you.This compelling work will keep you.This unputdownable fiction will leave a lasting impression on you.This gripping literature will keep you.This fascinating prose will mesmerize you.This mesmerizing prose will captivate you.This compelling literature will leave a lasting impression on you.This unputdownable work will take you.This unputdownable novel will take you.This unputdownable narrative will mesmerize you.This mesmerizing fiction will keep you.This spellbinding narrative will keep you.This gripping narrative will take you.This unputdownable fiction will captivate you.This thought-provoking tale will captivate you.",
  },
  {
    id: "bc77f56b-c330-4cb0-ab7a-852f104611ec",
    title: "The Call of the Wild",
    image: "https://www.gutenberg.org/cache/epub/215/pg215.cover.medium.jpg",
    author: "London, Jack",
    category: "adventure",
    sample:
      "This captivating literature will leave you.This captivating fiction will transport you.This thought-provoking fiction will leave you.",
    discription:
      "This intriguing novel will keep you.This spellbinding work will captivate you.This captivating prose will leave you.This spellbinding book will mesmerize you.This entertaining novel will leave you.This entertaining prose will mesmerize you.This captivating literature will mesmerize you.This gripping novel will transport you.This spellbinding work will keep you.This fascinating prose will leave you.This unputdownable narrative will keep you.This unputdownable work will leave a lasting impression on you.This gripping story will leave a lasting impression on you.This entertaining tale will leave you.This compelling prose will leave a lasting impression on you.This gripping story will keep you.This gripping prose will keep you.This mesmerizing narrative will captivate you.This captivating novel will mesmerize you.This mesmerizing fiction will mesmerize you.",
  },
  {
    id: "dffe1673-467d-4983-b29e-2ba917240298",
    title: "The Jungle Book",
    image: "https://www.gutenberg.org/cache/epub/236/pg236.cover.medium.jpg",
    author: "Kipling, Rudyard",
    category: "adventure",
    sample:
      "This thought-provoking book will captivate you.This fascinating work will keep you.This entertaining novel will leave a lasting impression on you.",
    discription:
      "This compelling novel will leave a lasting impression on you.This compelling narrative will captivate you.This gripping tale will leave you.This thought-provoking work will keep you.This intriguing book will mesmerize you.This intriguing tale will keep you.This entertaining tale will take you.This intriguing narrative will mesmerize you.This entertaining work will keep you.This unputdownable work will take you.This mesmerizing prose will take you.This gripping work will take you.This unputdownable tale will leave a lasting impression on you.This spellbinding fiction will captivate you.This intriguing prose will mesmerize you.This unputdownable story will transport you.This fascinating story will keep you.This intriguing story will mesmerize you.This gripping prose will mesmerize you.This thought-provoking narrative will take you.",
  },
  {
    id: "48ea777f-90ed-4048-9087-dbbe9fe95b8e",
    title: "The Life and Adventures of Robinson Crusoe",
    image: "https://www.gutenberg.org/cache/epub/521/pg521.cover.medium.jpg",
    author: "Defoe, Daniel",
    category: "adventure",
    sample:
      "This thought-provoking prose will take you.This entertaining tale will leave you.This unputdownable story will leave you.",
    discription:
      "This captivating book will captivate you.This intriguing literature will leave you.This mesmerizing novel will captivate you.This unputdownable literature will captivate you.This intriguing prose will transport you.This intriguing fiction will take you.This captivating book will leave a lasting impression on you.This compelling novel will take you.This unputdownable prose will captivate you.This captivating narrative will take you.This captivating work will leave a lasting impression on you.This spellbinding book will transport you.This mesmerizing fiction will leave a lasting impression on you.This thought-provoking fiction will take you.This fascinating fiction will take you.This mesmerizing book will mesmerize you.This spellbinding fiction will captivate you.This captivating work will take you.This fascinating tale will leave a lasting impression on you.This thought-provoking tale will leave you.",
  },
  {
    id: "83f270c4-8c0a-4b3d-9779-455cd66917d8",
    title: "White Fang",
    image: "https://www.gutenberg.org/cache/epub/910/pg910.cover.medium.jpg",
    author: "London, Jack",
    category: "adventure",
    sample:
      "This captivating narrative will keep you.This captivating story will keep you.This entertaining book will mesmerize you.",
    discription:
      "This spellbinding fiction will transport you.This intriguing literature will keep you.This thought-provoking tale will leave you.This mesmerizing literature will captivate you.This spellbinding fiction will transport you.This fascinating story will take you.This captivating book will take you.This mesmerizing book will transport you.This gripping work will leave you.This gripping story will take you.This thought-provoking prose will keep you.This entertaining novel will keep you.This spellbinding fiction will mesmerize you.This mesmerizing fiction will transport you.This intriguing novel will take you.This gripping work will captivate you.This entertaining novel will keep you.This spellbinding literature will captivate you.This mesmerizing novel will mesmerize you.This fascinating prose will captivate you.",
  },
  {
    id: "27913dc0-99b8-437d-91f4-b428c0fd2639",
    title: "Twenty Thousand Leagues under the Sea",
    image: "https://www.gutenberg.org/cache/epub/164/pg164.cover.medium.jpg",
    author: "Verne, Jules",
    category: "adventure",
    sample:
      "This entertaining novel will captivate you.This unputdownable story will keep you.This unputdownable tale will captivate you.",
    discription:
      "This entertaining prose will take you.This compelling fiction will transport you.This unputdownable literature will keep you.This captivating narrative will leave a lasting impression on you.This captivating work will leave a lasting impression on you.This spellbinding work will take you.This spellbinding book will leave a lasting impression on you.This intriguing book will leave a lasting impression on you.This mesmerizing book will keep you.This compelling story will captivate you.This gripping tale will transport you.This compelling work will transport you.This thought-provoking prose will captivate you.This fascinating story will leave you.This fascinating novel will leave you.This entertaining tale will take you.This captivating work will take you.This thought-provoking work will leave a lasting impression on you.This unputdownable literature will captivate you.This thought-provoking story will leave a lasting impression on you.",
  },
  {
    id: "8d586cfb-a1b1-4577-9b1a-018834125633",
    title: "Around the World in Eighty Days",
    image: "https://www.gutenberg.org/cache/epub/103/pg103.cover.medium.jpg",
    author: "Verne, Jules",
    category: "adventure",
    sample:
      "This compelling work will transport you.This mesmerizing work will leave a lasting impression on you.This thought-provoking novel will captivate you.",
    discription:
      "This unputdownable literature will leave a lasting impression on you.This thought-provoking narrative will transport you.This entertaining work will mesmerize you.This captivating book will leave you.This unputdownable prose will take you.This thought-provoking literature will leave a lasting impression on you.This captivating fiction will transport you.This compelling narrative will keep you.This intriguing story will keep you.This fascinating novel will transport you.This fascinating literature will take you.This gripping work will transport you.This mesmerizing narrative will captivate you.This thought-provoking narrative will mesmerize you.This compelling fiction will keep you.This thought-provoking tale will take you.This captivating book will transport you.This captivating tale will transport you.This entertaining fiction will captivate you.This thought-provoking narrative will keep you.",
  },
  {
    id: "3fe66a60-cdcd-43dc-80df-89bd5b0fc42f",
    title: "The Three Musketeers",
    image: "https://www.gutenberg.org/cache/epub/1257/pg1257.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "adventure",
    sample:
      "This entertaining fiction will mesmerize you.This entertaining narrative will leave a lasting impression on you.This compelling novel will keep you.",
    discription:
      "This fascinating work will leave a lasting impression on you.This thought-provoking fiction will captivate you.This gripping book will keep you.This entertaining fiction will take you.This compelling fiction will leave a lasting impression on you.This spellbinding narrative will transport you.This gripping prose will keep you.This spellbinding literature will mesmerize you.This intriguing book will captivate you.This mesmerizing tale will captivate you.This thought-provoking tale will captivate you.This compelling tale will mesmerize you.This fascinating prose will mesmerize you.This intriguing story will leave a lasting impression on you.This spellbinding novel will transport you.This mesmerizing tale will leave you.This intriguing story will keep you.This unputdownable fiction will captivate you.This thought-provoking literature will leave a lasting impression on you.This compelling book will captivate you.",
  },
  {
    id: "37e7538c-9c32-46f9-9047-3eabc51f5b36",
    title:
      "The Extraordinary Adventures of Ars\u00e8ne Lupin, Gentleman-Burglar",
    image: "https://www.gutenberg.org/cache/epub/6133/pg6133.cover.medium.jpg",
    author: "Leblanc, Maurice",
    category: "adventure",
    sample:
      "This mesmerizing literature will take you.This spellbinding prose will keep you.This fascinating literature will mesmerize you.",
    discription:
      "This fascinating literature will captivate you.This compelling tale will mesmerize you.This fascinating book will leave you.This spellbinding prose will captivate you.This thought-provoking story will leave a lasting impression on you.This entertaining story will leave a lasting impression on you.This entertaining novel will leave a lasting impression on you.This intriguing tale will leave a lasting impression on you.This spellbinding work will leave a lasting impression on you.This captivating prose will keep you.This thought-provoking tale will leave a lasting impression on you.This thought-provoking work will captivate you.This entertaining novel will captivate you.This compelling fiction will leave a lasting impression on you.This spellbinding fiction will leave a lasting impression on you.This mesmerizing book will keep you.This gripping book will leave a lasting impression on you.This spellbinding book will leave a lasting impression on you.This spellbinding narrative will captivate you.This thought-provoking work will keep you.",
  },
  {
    id: "47fe74b4-38fd-41b7-90d4-a784169a5738",
    title: "Kidnapped",
    image: "https://www.gutenberg.org/cache/epub/421/pg421.cover.medium.jpg",
    author: "Stevenson, Robert Louis",
    category: "adventure",
    sample:
      "This unputdownable prose will leave a lasting impression on you.This mesmerizing fiction will captivate you.This intriguing fiction will mesmerize you.",
    discription:
      "This intriguing fiction will mesmerize you.This fascinating novel will transport you.This gripping prose will keep you.This thought-provoking story will leave you.This unputdownable prose will transport you.This captivating fiction will leave a lasting impression on you.This entertaining tale will keep you.This intriguing work will leave you.This intriguing story will leave you.This entertaining fiction will leave a lasting impression on you.This intriguing tale will keep you.This gripping book will leave you.This spellbinding novel will leave you.This fascinating work will transport you.This unputdownable book will transport you.This intriguing work will keep you.This entertaining prose will leave a lasting impression on you.This unputdownable work will transport you.This unputdownable prose will leave you.This entertaining prose will captivate you.",
  },
  {
    id: "615c23ca-fc55-4b6c-8513-9d7a685c9f40",
    title: "The Scarlet Pimpernel",
    image: "https://www.gutenberg.org/cache/epub/60/pg60.cover.medium.jpg",
    author: "Orczy, Emmuska Orczy, Baroness",
    category: "adventure",
    sample:
      "This fascinating story will transport you.This mesmerizing story will take you.This spellbinding book will captivate you.",
    discription:
      "This gripping literature will mesmerize you.This captivating fiction will take you.This thought-provoking work will leave you.This intriguing literature will leave you.This entertaining novel will mesmerize you.This entertaining prose will take you.This thought-provoking work will mesmerize you.This entertaining story will mesmerize you.This compelling book will leave you.This thought-provoking prose will leave a lasting impression on you.This gripping story will transport you.This entertaining book will mesmerize you.This mesmerizing prose will leave a lasting impression on you.This unputdownable novel will leave you.This thought-provoking novel will keep you.This unputdownable narrative will leave a lasting impression on you.This entertaining narrative will captivate you.This compelling novel will take you.This fascinating work will leave you.This fascinating novel will transport you.",
  },
  {
    id: "fc3ef1ed-d06a-4cd4-b350-a46f4a192eea",
    title: "A Journey to the Centre of the Earth",
    image:
      "https://www.gutenberg.org/cache/epub/18857/pg18857.cover.medium.jpg",
    author: "Verne, Jules",
    category: "adventure",
    sample:
      "This gripping story will keep you.This captivating prose will captivate you.This thought-provoking prose will leave you.",
    discription:
      "This fascinating prose will leave you.This spellbinding narrative will leave you.This captivating work will leave a lasting impression on you.This fascinating work will take you.This gripping work will leave you.This unputdownable novel will captivate you.This spellbinding story will leave you.This unputdownable tale will captivate you.This fascinating story will transport you.This entertaining novel will take you.This unputdownable work will leave you.This captivating literature will take you.This spellbinding prose will transport you.This thought-provoking tale will captivate you.This fascinating book will leave you.This unputdownable work will transport you.This compelling narrative will leave you.This intriguing story will leave a lasting impression on you.This gripping work will take you.This entertaining novel will leave a lasting impression on you.",
  },
  {
    id: "6b273043-6102-4386-969b-9da271ffdedf",
    title: "The Last of the Mohicans; A narrative of 1757",
    image: "https://www.gutenberg.org/cache/epub/940/pg940.cover.medium.jpg",
    author: "Cooper, James Fenimore",
    category: "adventure",
    sample:
      "This entertaining novel will leave a lasting impression on you.This captivating narrative will captivate you.This captivating narrative will transport you.",
    discription:
      "This intriguing literature will mesmerize you.This captivating story will mesmerize you.This spellbinding prose will keep you.This mesmerizing work will leave you.This mesmerizing literature will leave a lasting impression on you.This gripping literature will keep you.This thought-provoking novel will keep you.This fascinating literature will take you.This entertaining work will leave a lasting impression on you.This entertaining tale will leave you.This spellbinding story will mesmerize you.This compelling book will captivate you.This intriguing fiction will take you.This captivating book will captivate you.This spellbinding prose will leave you.This mesmerizing book will leave a lasting impression on you.This compelling story will transport you.This gripping tale will transport you.This gripping narrative will captivate you.This thought-provoking story will leave a lasting impression on you.",
  },
  {
    id: "83a18de4-25bd-451c-95b5-0e12ae0719c4",
    title: "The Man in the Brown Suit",
    image:
      "https://www.gutenberg.org/cache/epub/61168/pg61168.cover.medium.jpg",
    author: "Christie, Agatha",
    category: "adventure",
    sample:
      "This captivating narrative will leave a lasting impression on you.This captivating fiction will mesmerize you.This captivating tale will captivate you.",
    discription:
      "This captivating tale will keep you.This spellbinding literature will take you.This compelling story will captivate you.This spellbinding book will transport you.This gripping work will transport you.This entertaining story will take you.This gripping fiction will leave you.This compelling tale will captivate you.This entertaining novel will leave you.This fascinating work will transport you.This fascinating work will captivate you.This thought-provoking fiction will transport you.This unputdownable literature will mesmerize you.This intriguing work will transport you.This intriguing tale will leave you.This fascinating tale will keep you.This mesmerizing story will transport you.This compelling story will leave a lasting impression on you.This compelling book will leave you.This captivating narrative will take you.",
  },
  {
    id: "e9028e2d-b691-4ef2-b210-2ed773c2e5c5",
    title: "Kim",
    image: "https://www.gutenberg.org/cache/epub/2226/pg2226.cover.medium.jpg",
    author: "Kipling, Rudyard",
    category: "adventure",
    sample:
      "This intriguing book will captivate you.This mesmerizing narrative will take you.This entertaining story will leave you.",
    discription:
      "This compelling novel will take you.This entertaining book will leave a lasting impression on you.This gripping work will mesmerize you.This entertaining tale will transport you.This spellbinding book will captivate you.This compelling novel will take you.This thought-provoking work will leave you.This fascinating story will captivate you.This unputdownable narrative will mesmerize you.This unputdownable story will transport you.This gripping story will captivate you.This spellbinding work will captivate you.This captivating book will take you.This gripping tale will transport you.This entertaining work will leave you.This thought-provoking narrative will transport you.This fascinating fiction will mesmerize you.This captivating fiction will keep you.This entertaining prose will transport you.This compelling narrative will take you.",
  },
  {
    id: "eb050657-1aa7-41ff-91da-7eb4eb09e8f6",
    title: "The Box-Car Children",
    image:
      "https://www.gutenberg.org/cache/epub/42796/pg42796.cover.medium.jpg",
    author: "Warner, Gertrude Chandler",
    category: "adventure",
    sample:
      "This mesmerizing literature will captivate you.This entertaining tale will leave you.This unputdownable tale will leave you.",
    discription:
      "This fascinating narrative will leave you.This fascinating tale will take you.This unputdownable literature will leave you.This captivating prose will keep you.This captivating prose will captivate you.This thought-provoking prose will keep you.This thought-provoking work will mesmerize you.This unputdownable story will leave you.This mesmerizing novel will leave a lasting impression on you.This gripping narrative will mesmerize you.This gripping tale will leave you.This compelling novel will keep you.This thought-provoking fiction will captivate you.This entertaining tale will captivate you.This intriguing book will leave you.This captivating story will leave a lasting impression on you.This intriguing tale will captivate you.This thought-provoking literature will leave you.This unputdownable narrative will leave you.This fascinating book will keep you.",
  },
  {
    id: "220e69d2-2124-46e4-9d2d-ce7a0bad63eb",
    title: "The Mysterious Island",
    image: "https://www.gutenberg.org/cache/epub/1268/pg1268.cover.medium.jpg",
    author: "Verne, Jules",
    category: "adventure",
    sample:
      "This compelling novel will mesmerize you.This gripping narrative will leave a lasting impression on you.This compelling prose will leave a lasting impression on you.",
    discription:
      "This entertaining literature will take you.This captivating work will leave you.This spellbinding work will mesmerize you.This entertaining novel will transport you.This unputdownable literature will take you.This captivating tale will transport you.This intriguing tale will leave you.This spellbinding narrative will transport you.This mesmerizing work will transport you.This intriguing work will captivate you.This mesmerizing prose will keep you.This thought-provoking prose will leave you.This mesmerizing story will leave you.This fascinating work will mesmerize you.This spellbinding tale will mesmerize you.This spellbinding narrative will leave you.This captivating fiction will captivate you.This compelling narrative will captivate you.This mesmerizing novel will keep you.This fascinating narrative will leave a lasting impression on you.",
  },
  {
    id: "aead5dec-a574-46d7-8529-d3b0d41b6dd1",
    title: "Tarzan of the Apes",
    image: "https://www.gutenberg.org/cache/epub/78/pg78.cover.medium.jpg",
    author: "Burroughs, Edgar Rice",
    category: "adventure",
    sample:
      "This mesmerizing story will leave a lasting impression on you.This mesmerizing book will keep you.This gripping work will transport you.",
    discription:
      "This mesmerizing book will captivate you.This thought-provoking tale will keep you.This intriguing fiction will keep you.This compelling book will mesmerize you.This entertaining book will transport you.This unputdownable novel will leave a lasting impression on you.This captivating book will transport you.This unputdownable narrative will transport you.This compelling book will transport you.This captivating story will mesmerize you.This entertaining literature will transport you.This mesmerizing work will leave you.This gripping prose will keep you.This mesmerizing literature will mesmerize you.This entertaining prose will transport you.This fascinating fiction will keep you.This fascinating work will keep you.This entertaining literature will captivate you.This fascinating prose will keep you.This fascinating prose will keep you.",
  },
  {
    id: "e73de35e-5720-4a84-b143-a43f50e75da3",
    title: "The Thirty-Nine Steps",
    image: "https://www.gutenberg.org/cache/epub/558/pg558.cover.medium.jpg",
    author: "Buchan, John",
    category: "adventure",
    sample:
      "This compelling fiction will take you.This intriguing work will mesmerize you.This compelling book will take you.",
    discription:
      "This compelling novel will take you.This captivating story will leave a lasting impression on you.This fascinating literature will transport you.This fascinating narrative will keep you.This gripping literature will keep you.This intriguing story will leave a lasting impression on you.This intriguing fiction will keep you.This fascinating story will mesmerize you.This entertaining prose will keep you.This mesmerizing prose will leave a lasting impression on you.This mesmerizing narrative will leave a lasting impression on you.This captivating literature will captivate you.This entertaining narrative will keep you.This compelling narrative will keep you.This mesmerizing narrative will transport you.This compelling tale will leave a lasting impression on you.This spellbinding novel will keep you.This fascinating prose will take you.This mesmerizing novel will transport you.This captivating prose will keep you.",
  },
  {
    id: "c0a14b6d-e8a2-4e12-bb44-b0d65dcb3c9a",
    title: "Le comte de Monte-Cristo, Tome I",
    image:
      "https://www.gutenberg.org/cache/epub/17989/pg17989.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "adventure",
    sample:
      "This fascinating fiction will transport you.This captivating work will take you.This unputdownable literature will leave you.",
    discription:
      "This unputdownable tale will transport you.This gripping book will take you.This thought-provoking narrative will leave a lasting impression on you.This thought-provoking fiction will transport you.This thought-provoking tale will keep you.This entertaining book will take you.This entertaining novel will keep you.This captivating work will leave a lasting impression on you.This entertaining novel will transport you.This unputdownable fiction will mesmerize you.This spellbinding novel will captivate you.This unputdownable narrative will leave you.This spellbinding literature will leave a lasting impression on you.This spellbinding novel will leave you.This spellbinding narrative will leave a lasting impression on you.This entertaining work will mesmerize you.This compelling work will leave you.This mesmerizing narrative will mesmerize you.This intriguing novel will leave a lasting impression on you.This spellbinding novel will mesmerize you.",
  },
  {
    id: "a8a3497a-4b87-4a18-809d-d7db616e35af",
    title: "Moby-Dick; or, The Whale",
    image: "https://www.gutenberg.org/cache/epub/15/pg15.cover.medium.jpg",
    author: "Melville, Herman",
    category: "adventure",
    sample:
      "This gripping prose will mesmerize you.This unputdownable story will captivate you.This unputdownable story will captivate you.",
    discription:
      "This fascinating story will keep you.This intriguing book will take you.This fascinating narrative will transport you.This unputdownable book will transport you.This intriguing tale will mesmerize you.This unputdownable story will leave a lasting impression on you.This captivating literature will transport you.This unputdownable fiction will keep you.This fascinating novel will leave a lasting impression on you.This captivating fiction will captivate you.This fascinating tale will leave a lasting impression on you.This captivating novel will transport you.This mesmerizing novel will take you.This spellbinding literature will leave you.This unputdownable tale will leave a lasting impression on you.This gripping literature will take you.This gripping narrative will mesmerize you.This intriguing novel will leave a lasting impression on you.This thought-provoking novel will leave you.This thought-provoking novel will leave you.",
  },
  {
    id: "e813d9f1-cf1b-4cd8-94b8-6815581d0e00",
    title: "King Solomon's Mines",
    image: "https://www.gutenberg.org/cache/epub/2166/pg2166.cover.medium.jpg",
    author: "Haggard, H. Rider (Henry Rider)",
    category: "adventure",
    sample:
      "This thought-provoking story will take you.This thought-provoking novel will leave a lasting impression on you.This captivating book will captivate you.",
    discription:
      "This thought-provoking tale will captivate you.This spellbinding book will keep you.This gripping literature will captivate you.This unputdownable fiction will leave you.This thought-provoking narrative will mesmerize you.This intriguing novel will transport you.This fascinating fiction will mesmerize you.This unputdownable book will keep you.This gripping fiction will captivate you.This intriguing prose will transport you.This unputdownable work will leave you.This spellbinding fiction will keep you.This thought-provoking tale will take you.This mesmerizing work will keep you.This intriguing novel will keep you.This spellbinding novel will keep you.This intriguing narrative will captivate you.This fascinating novel will leave a lasting impression on you.This fascinating prose will leave a lasting impression on you.This fascinating prose will leave a lasting impression on you.",
  },
  {
    id: "eb55edb7-d542-44b4-bd6b-34613ae8f139",
    title: "Joseph Andrews, Vol. 1",
    image: "https://www.gutenberg.org/cache/epub/9611/pg9611.cover.medium.jpg",
    author: "Fielding, Henry",
    category: "adventure",
    sample:
      "This intriguing narrative will captivate you.This mesmerizing literature will leave you.This gripping book will captivate you.",
    discription:
      "This intriguing literature will leave a lasting impression on you.This entertaining narrative will leave a lasting impression on you.This entertaining novel will keep you.This unputdownable narrative will take you.This intriguing tale will mesmerize you.This compelling narrative will keep you.This gripping work will mesmerize you.This intriguing fiction will take you.This compelling narrative will leave a lasting impression on you.This unputdownable work will keep you.This intriguing prose will leave you.This unputdownable literature will leave you.This spellbinding literature will keep you.This fascinating work will captivate you.This gripping book will mesmerize you.This gripping book will captivate you.This fascinating literature will take you.This captivating story will captivate you.This spellbinding literature will take you.This captivating prose will keep you.",
  },
  {
    id: "b1ebd71d-1761-47b2-9a6d-7b9f81938fb2",
    title:
      "Twenty Thousand Leagues Under the Seas: An Underwater Tour of the World",
    image: "https://www.gutenberg.org/cache/epub/2488/pg2488.cover.medium.jpg",
    author: "Verne, Jules",
    category: "adventure",
    sample:
      "This compelling literature will leave you.This entertaining story will transport you.This thought-provoking literature will leave you.",
    discription:
      "This spellbinding book will leave a lasting impression on you.This thought-provoking book will leave you.This gripping story will mesmerize you.This mesmerizing story will captivate you.This fascinating fiction will mesmerize you.This fascinating story will take you.This thought-provoking tale will keep you.This gripping prose will leave you.This thought-provoking novel will keep you.This gripping tale will captivate you.This captivating tale will leave a lasting impression on you.This gripping novel will keep you.This mesmerizing story will transport you.This compelling prose will keep you.This spellbinding story will keep you.This unputdownable work will keep you.This mesmerizing literature will leave you.This compelling book will leave a lasting impression on you.This fascinating fiction will leave a lasting impression on you.This captivating narrative will transport you.",
  },
  {
    id: "04ad2e29-fac9-4491-9285-8f9d6bd43f1e",
    title: "The Prisoner of Zenda",
    image: "https://www.gutenberg.org/cache/epub/95/pg95.cover.medium.jpg",
    author: "Hope, Anthony",
    category: "adventure",
    sample:
      "This thought-provoking story will captivate you.This unputdownable prose will mesmerize you.This unputdownable prose will leave a lasting impression on you.",
    discription:
      "This captivating book will leave you.This gripping fiction will captivate you.This intriguing story will leave a lasting impression on you.This compelling prose will captivate you.This compelling fiction will leave you.This entertaining book will transport you.This mesmerizing story will leave you.This thought-provoking prose will leave you.This spellbinding novel will leave a lasting impression on you.This thought-provoking story will keep you.This thought-provoking book will captivate you.This thought-provoking novel will keep you.This unputdownable prose will take you.This entertaining book will captivate you.This gripping book will leave you.This thought-provoking novel will leave a lasting impression on you.This gripping story will leave you.This mesmerizing fiction will transport you.This unputdownable work will mesmerize you.This intriguing book will keep you.",
  },
  {
    id: "fcdbc84a-1648-417e-9a09-43e1db52fc3b",
    title: "The Fortunes and Misfortunes of the Famous Moll Flanders",
    image: "https://www.gutenberg.org/cache/epub/370/pg370.cover.medium.jpg",
    author: "Defoe, Daniel",
    category: "adventure",
    sample:
      "This mesmerizing work will leave a lasting impression on you.This fascinating novel will take you.This entertaining fiction will keep you.",
    discription:
      "This captivating fiction will take you.This fascinating literature will mesmerize you.This thought-provoking fiction will captivate you.This unputdownable fiction will transport you.This unputdownable novel will take you.This gripping narrative will keep you.This intriguing literature will keep you.This gripping tale will captivate you.This gripping narrative will leave a lasting impression on you.This mesmerizing story will transport you.This entertaining narrative will take you.This spellbinding fiction will leave you.This captivating tale will leave a lasting impression on you.This mesmerizing narrative will leave a lasting impression on you.This entertaining novel will leave you.This gripping work will leave you.This fascinating story will take you.This thought-provoking fiction will transport you.This gripping book will keep you.This unputdownable narrative will take you.",
  },
  {
    id: "c09d60e1-f231-49db-9465-195c5794b62e",
    title: "Beyond the sunset",
    image:
      "https://www.gutenberg.org/cache/epub/70077/pg70077.cover.medium.jpg",
    author: "Smith, Arthur D. Howden (Arthur Douglas Howden)",
    category: "adventure",
    sample:
      "This mesmerizing prose will take you.This entertaining work will transport you.This compelling story will captivate you.",
    discription:
      "This unputdownable book will keep you.This mesmerizing literature will captivate you.This entertaining fiction will captivate you.This captivating prose will keep you.This intriguing prose will mesmerize you.This spellbinding novel will keep you.This unputdownable literature will leave a lasting impression on you.This fascinating fiction will captivate you.This compelling work will take you.This fascinating novel will leave you.This compelling work will captivate you.This spellbinding tale will mesmerize you.This fascinating story will keep you.This spellbinding prose will leave a lasting impression on you.This mesmerizing novel will leave you.This entertaining narrative will captivate you.This gripping fiction will mesmerize you.This compelling literature will leave you.This intriguing literature will transport you.This unputdownable story will take you.",
  },
  {
    id: "419bc08c-654a-4569-af3a-e1478fff7151",
    title: "Middlemarch",
    image: "https://www.gutenberg.org/cache/epub/145/pg145.cover.medium.jpg",
    author: "Eliot, George",
    category: "historical",
    sample:
      "This spellbinding fiction will leave a lasting impression on you.This captivating book will transport you.This captivating narrative will leave you.",
    discription:
      "This entertaining book will take you.This thought-provoking story will take you.This spellbinding fiction will take you.This thought-provoking story will take you.This intriguing book will transport you.This unputdownable literature will leave a lasting impression on you.This spellbinding prose will leave you.This entertaining story will leave a lasting impression on you.This fascinating story will captivate you.This captivating prose will keep you.This gripping literature will captivate you.This gripping work will keep you.This unputdownable prose will leave you.This thought-provoking literature will keep you.This gripping tale will leave you.This unputdownable narrative will captivate you.This spellbinding work will leave you.This thought-provoking work will leave a lasting impression on you.This gripping novel will transport you.This captivating book will mesmerize you.",
  },
  {
    id: "359750b8-20d7-4e2d-a885-1d40b34ac8b8",
    title: "The Expedition of Humphry Clinker",
    image: "https://www.gutenberg.org/cache/epub/2160/pg2160.cover.medium.jpg",
    author: "Smollett, T. (Tobias)",
    category: "historical",
    sample:
      "This entertaining literature will leave a lasting impression on you.This spellbinding work will take you.This unputdownable book will leave a lasting impression on you.",
    discription:
      "This mesmerizing novel will keep you.This intriguing prose will transport you.This gripping novel will keep you.This spellbinding story will captivate you.This mesmerizing book will leave a lasting impression on you.This thought-provoking literature will transport you.This compelling literature will mesmerize you.This spellbinding story will keep you.This intriguing story will transport you.This fascinating story will keep you.This gripping book will leave you.This compelling story will mesmerize you.This mesmerizing literature will keep you.This intriguing narrative will keep you.This fascinating prose will mesmerize you.This unputdownable story will leave a lasting impression on you.This captivating fiction will take you.This thought-provoking tale will take you.This spellbinding work will keep you.This captivating narrative will mesmerize you.",
  },
  {
    id: "406d807e-1b83-46c5-ab2b-eebd73d1b1b9",
    title: "The Adventures of Roderick Random",
    image: "https://www.gutenberg.org/cache/epub/4085/pg4085.cover.medium.jpg",
    author: "Smollett, T. (Tobias)",
    category: "historical",
    sample:
      "This fascinating literature will captivate you.This mesmerizing fiction will take you.This thought-provoking prose will transport you.",
    discription:
      "This fascinating story will mesmerize you.This mesmerizing work will keep you.This gripping tale will leave a lasting impression on you.This thought-provoking prose will transport you.This compelling literature will mesmerize you.This compelling literature will transport you.This mesmerizing literature will leave a lasting impression on you.This compelling work will take you.This gripping work will mesmerize you.This unputdownable story will take you.This fascinating literature will captivate you.This intriguing narrative will keep you.This mesmerizing narrative will captivate you.This thought-provoking prose will captivate you.This spellbinding book will take you.This gripping book will leave a lasting impression on you.This compelling prose will leave a lasting impression on you.This entertaining story will keep you.This mesmerizing prose will mesmerize you.This unputdownable prose will keep you.",
  },
  {
    id: "61ba7f0f-5635-4b04-bf97-cacf6913ba2a",
    title: "Twenty Years After",
    image: "https://www.gutenberg.org/cache/epub/1259/pg1259.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "historical",
    sample:
      "This fascinating literature will captivate you.This captivating prose will leave you.This entertaining work will mesmerize you.",
    discription:
      "This mesmerizing story will captivate you.This unputdownable narrative will captivate you.This fascinating work will keep you.This intriguing fiction will take you.This captivating book will keep you.This mesmerizing novel will captivate you.This entertaining literature will mesmerize you.This unputdownable narrative will take you.This unputdownable novel will transport you.This gripping narrative will keep you.This captivating narrative will leave a lasting impression on you.This mesmerizing work will transport you.This compelling fiction will mesmerize you.This thought-provoking book will captivate you.This mesmerizing book will leave you.This captivating narrative will take you.This spellbinding tale will leave a lasting impression on you.This spellbinding narrative will leave a lasting impression on you.This mesmerizing literature will leave you.This spellbinding book will leave you.",
  },
  {
    id: "f836b1e0-b079-4c4d-9580-a345d66d0849",
    title: "A Tale of Two Cities",
    image: "https://www.gutenberg.org/cache/epub/98/pg98.cover.medium.jpg",
    author: "Dickens, Charles",
    category: "historical",
    sample:
      "This mesmerizing work will leave a lasting impression on you.This fascinating narrative will captivate you.This mesmerizing prose will transport you.",
    discription:
      "This mesmerizing book will take you.This intriguing literature will leave you.This intriguing novel will captivate you.This mesmerizing narrative will keep you.This thought-provoking novel will keep you.This compelling fiction will captivate you.This thought-provoking literature will leave a lasting impression on you.This thought-provoking story will keep you.This thought-provoking book will leave you.This compelling tale will captivate you.This captivating tale will captivate you.This intriguing tale will leave a lasting impression on you.This thought-provoking fiction will leave you.This entertaining work will keep you.This captivating novel will leave you.This intriguing novel will captivate you.This unputdownable tale will keep you.This entertaining story will leave you.This thought-provoking tale will captivate you.This gripping narrative will take you.",
  },
  {
    id: "42112393-5887-4485-96db-aea42e0f96ad",
    title: "The Scarlet Letter",
    image:
      "https://www.gutenberg.org/cache/epub/25344/pg25344.cover.medium.jpg",
    author: "Hawthorne, Nathaniel",
    category: "historical",
    sample:
      "This captivating work will leave you.This entertaining novel will leave you.This intriguing tale will leave you.",
    discription:
      "This intriguing book will leave you.This spellbinding fiction will leave you.This fascinating novel will captivate you.This thought-provoking book will transport you.This fascinating book will leave you.This fascinating book will leave you.This intriguing work will transport you.This entertaining literature will leave you.This fascinating novel will mesmerize you.This compelling book will captivate you.This compelling work will leave you.This thought-provoking work will captivate you.This thought-provoking fiction will captivate you.This captivating fiction will take you.This gripping literature will transport you.This mesmerizing tale will leave a lasting impression on you.This fascinating narrative will mesmerize you.This intriguing tale will take you.This mesmerizing work will keep you.This fascinating story will take you.",
  },
  {
    id: "1e66de99-04ea-43df-9335-eb0451e58309",
    title: "Noli Me Tangere",
    image:
      "https://www.gutenberg.org/cache/epub/20228/pg20228.cover.medium.jpg",
    author: "Rizal, Jos\u00e9",
    category: "historical",
    sample:
      "This mesmerizing novel will captivate you.This thought-provoking work will captivate you.This mesmerizing story will take you.",
    discription:
      "This unputdownable narrative will leave a lasting impression on you.This entertaining story will captivate you.This compelling literature will take you.This intriguing story will leave you.This captivating fiction will leave a lasting impression on you.This gripping prose will leave you.This entertaining narrative will leave a lasting impression on you.This thought-provoking prose will leave a lasting impression on you.This captivating fiction will leave a lasting impression on you.This compelling narrative will leave a lasting impression on you.This fascinating fiction will transport you.This thought-provoking tale will captivate you.This gripping tale will leave you.This spellbinding narrative will keep you.This captivating story will transport you.This compelling fiction will take you.This intriguing literature will transport you.This entertaining story will keep you.This thought-provoking literature will leave a lasting impression on you.This intriguing work will take you.",
  },
  {
    id: "e986ab7e-fea9-412b-922e-227dd22861e7",
    title: "The Count of Monte Cristo, Illustrated",
    image: "https://www.gutenberg.org/cache/epub/1184/pg1184.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "historical",
    sample:
      "This mesmerizing book will transport you.This intriguing book will take you.This fascinating fiction will keep you.",
    discription:
      "This compelling fiction will take you.This fascinating work will transport you.This gripping prose will take you.This gripping fiction will transport you.This mesmerizing fiction will leave a lasting impression on you.This thought-provoking literature will leave you.This gripping tale will keep you.This gripping tale will keep you.This fascinating novel will mesmerize you.This unputdownable narrative will keep you.This entertaining prose will leave a lasting impression on you.This mesmerizing tale will keep you.This mesmerizing book will leave you.This thought-provoking tale will captivate you.This thought-provoking work will leave you.This spellbinding narrative will transport you.This thought-provoking novel will mesmerize you.This unputdownable work will leave you.This thought-provoking fiction will captivate you.This unputdownable book will mesmerize you.",
  },
  {
    id: "dcd90a36-5dec-4742-b239-5126609ca53e",
    title: "War and Peace",
    image: "https://www.gutenberg.org/cache/epub/2600/pg2600.cover.medium.jpg",
    author: "Tolstoy, Leo, graf",
    category: "historical",
    sample:
      "This captivating narrative will transport you.This captivating prose will captivate you.This entertaining work will leave you.",
    discription:
      "This intriguing story will leave a lasting impression on you.This fascinating novel will transport you.This captivating literature will transport you.This thought-provoking story will captivate you.This spellbinding literature will leave a lasting impression on you.This intriguing book will captivate you.This spellbinding work will keep you.This thought-provoking novel will mesmerize you.This mesmerizing tale will mesmerize you.This entertaining literature will keep you.This unputdownable story will leave a lasting impression on you.This compelling prose will keep you.This thought-provoking story will leave you.This entertaining literature will leave a lasting impression on you.This fascinating literature will take you.This gripping book will keep you.This intriguing narrative will captivate you.This gripping literature will transport you.This mesmerizing tale will leave a lasting impression on you.This fascinating literature will leave a lasting impression on you.",
  },
  {
    id: "cb0a3498-e63c-4754-a129-858350794bf3",
    title: "Treasure Island",
    image: "https://www.gutenberg.org/cache/epub/120/pg120.cover.medium.jpg",
    author: "Stevenson, Robert Louis",
    category: "historical",
    sample:
      "This compelling prose will transport you.This spellbinding prose will captivate you.This entertaining literature will take you.",
    discription:
      "This mesmerizing fiction will mesmerize you.This unputdownable book will leave a lasting impression on you.This entertaining story will transport you.This gripping fiction will captivate you.This spellbinding work will transport you.This thought-provoking prose will keep you.This entertaining prose will captivate you.This mesmerizing prose will take you.This spellbinding book will transport you.This fascinating work will keep you.This entertaining work will captivate you.This thought-provoking literature will take you.This fascinating story will captivate you.This entertaining book will transport you.This compelling literature will transport you.This intriguing work will leave you.This thought-provoking fiction will leave a lasting impression on you.This captivating book will keep you.This gripping narrative will keep you.This mesmerizing tale will keep you.",
  },
  {
    id: "4ca604a9-a213-4c21-85f8-e00f4917718c",
    title: "Les Mis\u00e9rables",
    image: "https://www.gutenberg.org/cache/epub/135/pg135.cover.medium.jpg",
    author: "Hugo, Victor",
    category: "historical",
    sample:
      "This entertaining work will take you.This thought-provoking novel will transport you.This spellbinding story will leave you.",
    discription:
      "This compelling book will captivate you.This thought-provoking book will leave you.This captivating book will transport you.This entertaining tale will mesmerize you.This captivating literature will mesmerize you.This fascinating book will take you.This mesmerizing novel will leave a lasting impression on you.This entertaining narrative will transport you.This captivating literature will mesmerize you.This compelling novel will leave a lasting impression on you.This gripping fiction will take you.This captivating narrative will captivate you.This gripping tale will leave a lasting impression on you.This fascinating book will take you.This unputdownable story will leave you.This compelling novel will keep you.This gripping fiction will transport you.This spellbinding narrative will mesmerize you.This intriguing book will keep you.This intriguing book will mesmerize you.",
  },
  {
    id: "478665e0-f866-4176-aa69-5f14a2317af7",
    title: "The Prince and the Pauper",
    image: "https://www.gutenberg.org/cache/epub/1837/pg1837.cover.medium.jpg",
    author: "Twain, Mark",
    category: "historical",
    sample:
      "This spellbinding tale will keep you.This mesmerizing novel will captivate you.This thought-provoking novel will keep you.",
    discription:
      "This mesmerizing narrative will mesmerize you.This unputdownable fiction will leave you.This intriguing book will captivate you.This entertaining prose will leave a lasting impression on you.This gripping book will transport you.This fascinating book will keep you.This spellbinding narrative will keep you.This thought-provoking work will keep you.This entertaining fiction will mesmerize you.This thought-provoking prose will leave you.This mesmerizing work will transport you.This compelling novel will take you.This entertaining story will leave you.This fascinating narrative will leave you.This unputdownable narrative will captivate you.This entertaining work will transport you.This compelling book will mesmerize you.This unputdownable literature will mesmerize you.This gripping prose will captivate you.This fascinating prose will leave a lasting impression on you.",
  },
  {
    id: "f126c245-be4e-47b7-9c0a-43f639d4f9f9",
    title: "The Social Cancer: A Complete English Version of Noli Me Tangere",
    image: "https://www.gutenberg.org/cache/epub/6737/pg6737.cover.medium.jpg",
    author: "Rizal, Jos\u00e9",
    category: "historical",
    sample:
      "This compelling story will keep you.This intriguing work will leave you.This compelling novel will leave you.",
    discription:
      "This gripping work will transport you.This spellbinding literature will transport you.This mesmerizing narrative will leave a lasting impression on you.This intriguing story will take you.This mesmerizing novel will leave a lasting impression on you.This gripping work will keep you.This spellbinding work will leave you.This fascinating literature will captivate you.This mesmerizing work will leave a lasting impression on you.This entertaining book will take you.This mesmerizing tale will mesmerize you.This entertaining literature will leave a lasting impression on you.This fascinating book will take you.This spellbinding prose will leave a lasting impression on you.This unputdownable prose will leave a lasting impression on you.This intriguing book will leave you.This captivating prose will captivate you.This gripping prose will transport you.This captivating story will keep you.This fascinating book will leave you.",
  },
  {
    id: "cb590242-67f0-4c9b-a469-2d1f08fb346d",
    title: "The Idiot",
    image: "https://www.gutenberg.org/cache/epub/2638/pg2638.cover.medium.jpg",
    author: "Dostoyevsky, Fyodor",
    category: "historical",
    sample:
      "This thought-provoking work will transport you.This compelling prose will transport you.This unputdownable prose will mesmerize you.",
    discription:
      "This unputdownable prose will leave a lasting impression on you.This thought-provoking narrative will transport you.This mesmerizing tale will leave you.This intriguing literature will transport you.This thought-provoking narrative will keep you.This entertaining fiction will leave a lasting impression on you.This spellbinding fiction will transport you.This intriguing narrative will leave you.This thought-provoking narrative will captivate you.This unputdownable prose will transport you.This gripping narrative will take you.This thought-provoking work will captivate you.This spellbinding book will transport you.This unputdownable story will captivate you.This captivating novel will captivate you.This captivating prose will captivate you.This spellbinding novel will mesmerize you.This fascinating story will take you.This unputdownable fiction will mesmerize you.This spellbinding book will captivate you.",
  },
  {
    id: "3ce47350-f194-469a-af07-015c114d61a2",
    title: "The Red Badge of Courage: An Episode of the American Civil War",
    image: "https://www.gutenberg.org/cache/epub/73/pg73.cover.medium.jpg",
    author: "Crane, Stephen",
    category: "historical",
    sample:
      "This entertaining fiction will take you.This compelling narrative will mesmerize you.This spellbinding tale will leave you.",
    discription:
      "This captivating literature will captivate you.This entertaining novel will captivate you.This fascinating narrative will transport you.This compelling literature will transport you.This fascinating prose will mesmerize you.This spellbinding literature will keep you.This fascinating story will mesmerize you.This entertaining literature will keep you.This mesmerizing story will leave you.This spellbinding prose will transport you.This thought-provoking story will keep you.This thought-provoking tale will captivate you.This thought-provoking novel will captivate you.This gripping tale will transport you.This spellbinding work will take you.This gripping work will leave you.This fascinating prose will leave you.This captivating literature will take you.This mesmerizing story will leave a lasting impression on you.This compelling prose will mesmerize you.",
  },
  {
    id: "00e01893-1950-42f9-afe6-003a264a7fea",
    title: "The Three Musketeers",
    image: "https://www.gutenberg.org/cache/epub/1257/pg1257.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "historical",
    sample:
      "This captivating book will leave you.This unputdownable novel will leave you.This gripping story will transport you.",
    discription:
      "This thought-provoking story will transport you.This captivating prose will leave you.This thought-provoking narrative will mesmerize you.This intriguing narrative will captivate you.This thought-provoking fiction will leave a lasting impression on you.This captivating fiction will transport you.This compelling book will take you.This fascinating tale will transport you.This spellbinding story will keep you.This intriguing story will leave a lasting impression on you.This captivating work will leave a lasting impression on you.This gripping story will transport you.This captivating work will leave you.This spellbinding book will transport you.This compelling fiction will keep you.This unputdownable book will mesmerize you.This thought-provoking tale will captivate you.This gripping narrative will take you.This fascinating book will keep you.This compelling story will take you.",
  },
  {
    id: "83eedef3-d09f-497e-9682-25f71146aa46",
    title: "Vanity Fair",
    image: "https://www.gutenberg.org/cache/epub/599/pg599.cover.medium.jpg",
    author: "Thackeray, William Makepeace",
    category: "historical",
    sample:
      "This fascinating story will take you.This gripping novel will captivate you.This thought-provoking book will leave a lasting impression on you.",
    discription:
      "This unputdownable tale will transport you.This mesmerizing story will keep you.This captivating book will keep you.This intriguing book will take you.This compelling literature will transport you.This captivating tale will mesmerize you.This thought-provoking prose will mesmerize you.This captivating tale will mesmerize you.This thought-provoking tale will keep you.This unputdownable fiction will mesmerize you.This gripping fiction will captivate you.This gripping work will keep you.This compelling novel will keep you.This unputdownable novel will captivate you.This spellbinding work will take you.This spellbinding book will mesmerize you.This unputdownable literature will leave you.This compelling literature will mesmerize you.This gripping fiction will leave you.This thought-provoking prose will take you.",
  },
  {
    id: "a668151b-3912-4d0c-a8c6-9c3993898243",
    title: "Notre-Dame de Paris",
    image: "https://www.gutenberg.org/cache/epub/2610/pg2610.cover.medium.jpg",
    author: "Hugo, Victor",
    category: "historical",
    sample:
      "This unputdownable prose will leave a lasting impression on you.This intriguing book will leave a lasting impression on you.This compelling narrative will transport you.",
    discription:
      "This mesmerizing novel will take you.This mesmerizing book will leave a lasting impression on you.This spellbinding tale will take you.This compelling book will take you.This thought-provoking narrative will mesmerize you.This intriguing book will take you.This unputdownable novel will take you.This unputdownable prose will transport you.This spellbinding book will transport you.This gripping story will take you.This thought-provoking fiction will mesmerize you.This gripping tale will captivate you.This fascinating narrative will leave a lasting impression on you.This unputdownable novel will transport you.This fascinating fiction will leave a lasting impression on you.This fascinating narrative will transport you.This fascinating literature will leave a lasting impression on you.This entertaining story will captivate you.This gripping tale will leave you.This entertaining literature will leave you.",
  },
  {
    id: "726b66ea-d01a-409e-8648-7aaf73dec8c1",
    title: "Kidnapped",
    image: "https://www.gutenberg.org/cache/epub/421/pg421.cover.medium.jpg",
    author: "Stevenson, Robert Louis",
    category: "historical",
    sample:
      "This intriguing fiction will keep you.This fascinating book will mesmerize you.This unputdownable fiction will leave a lasting impression on you.",
    discription:
      "This intriguing fiction will leave a lasting impression on you.This gripping book will transport you.This unputdownable book will transport you.This mesmerizing story will captivate you.This mesmerizing prose will take you.This intriguing prose will leave a lasting impression on you.This compelling prose will leave you.This gripping tale will captivate you.This entertaining book will leave a lasting impression on you.This compelling prose will captivate you.This entertaining literature will captivate you.This intriguing work will leave you.This intriguing fiction will leave you.This intriguing novel will mesmerize you.This mesmerizing prose will take you.This intriguing work will leave a lasting impression on you.This gripping book will leave you.This spellbinding literature will leave you.This spellbinding tale will keep you.This compelling narrative will leave you.",
  },
  {
    id: "285934fc-06b0-43d1-a7ed-b8b120eca04c",
    title: "Ivanhoe: A Romance",
    image: "https://www.gutenberg.org/cache/epub/82/pg82.cover.medium.jpg",
    author: "Scott, Walter",
    category: "historical",
    sample:
      "This entertaining book will transport you.This mesmerizing fiction will mesmerize you.This compelling story will leave a lasting impression on you.",
    discription:
      "This mesmerizing prose will transport you.This compelling novel will leave you.This thought-provoking prose will captivate you.This compelling fiction will captivate you.This spellbinding book will captivate you.This spellbinding tale will take you.This unputdownable literature will leave you.This compelling literature will mesmerize you.This thought-provoking story will mesmerize you.This entertaining novel will leave a lasting impression on you.This entertaining story will take you.This unputdownable work will mesmerize you.This intriguing fiction will leave you.This compelling work will leave a lasting impression on you.This spellbinding fiction will keep you.This captivating literature will captivate you.This intriguing literature will captivate you.This gripping literature will captivate you.This intriguing novel will leave you.This unputdownable fiction will leave a lasting impression on you.",
  },
  {
    id: "82133763-c894-4497-9e35-5fdd17646974",
    title: "The Scarlet Pimpernel",
    image: "https://www.gutenberg.org/cache/epub/60/pg60.cover.medium.jpg",
    author: "Orczy, Emmuska Orczy, Baroness",
    category: "historical",
    sample:
      "This entertaining work will keep you.This captivating work will leave a lasting impression on you.This spellbinding prose will leave you.",
    discription:
      "This thought-provoking literature will keep you.This gripping story will leave a lasting impression on you.This entertaining story will captivate you.This fascinating story will captivate you.This spellbinding story will leave you.This mesmerizing book will captivate you.This compelling narrative will mesmerize you.This mesmerizing work will transport you.This fascinating tale will keep you.This gripping tale will transport you.This gripping prose will mesmerize you.This intriguing narrative will keep you.This intriguing book will leave you.This intriguing narrative will leave a lasting impression on you.This spellbinding work will transport you.This spellbinding prose will leave a lasting impression on you.This mesmerizing literature will keep you.This mesmerizing literature will keep you.This thought-provoking book will transport you.This intriguing story will transport you.",
  },
  {
    id: "318b6a32-ae07-4a6a-a1b9-3ce9db8e3289",
    title: "Black Beauty",
    image: "https://www.gutenberg.org/cache/epub/271/pg271.cover.medium.jpg",
    author: "Sewell, Anna",
    category: "historical",
    sample:
      "This mesmerizing work will transport you.This unputdownable narrative will transport you.This unputdownable tale will transport you.",
    discription:
      "This thought-provoking narrative will mesmerize you.This entertaining narrative will keep you.This compelling fiction will mesmerize you.This unputdownable fiction will keep you.This spellbinding literature will captivate you.This intriguing novel will leave a lasting impression on you.This captivating narrative will captivate you.This unputdownable story will leave you.This unputdownable tale will transport you.This intriguing fiction will leave you.This captivating book will keep you.This thought-provoking work will leave you.This gripping book will mesmerize you.This spellbinding literature will leave you.This captivating fiction will keep you.This thought-provoking prose will leave a lasting impression on you.This fascinating literature will captivate you.This gripping prose will keep you.This intriguing literature will leave a lasting impression on you.This intriguing tale will mesmerize you.",
  },
  {
    id: "fbe502ae-f21e-414a-bb5f-86d036f3cd2d",
    title:
      "A Journal of the Plague Year: Being Observations or Memorials of the Most Remarkable Occurrences, as Well Public as Private, Which Happened in London During the Last Great Visitation in 1665. Written by a Citizen Who Continued All the While in London",
    image: "https://www.gutenberg.org/cache/epub/376/pg376.cover.medium.jpg",
    author: "Defoe, Daniel",
    category: "historical",
    sample:
      "This unputdownable narrative will mesmerize you.This unputdownable fiction will keep you.This intriguing work will captivate you.",
    discription:
      "This captivating narrative will mesmerize you.This captivating literature will mesmerize you.This entertaining prose will transport you.This gripping narrative will transport you.This captivating work will leave a lasting impression on you.This captivating literature will captivate you.This spellbinding story will transport you.This mesmerizing book will captivate you.This captivating fiction will mesmerize you.This mesmerizing story will leave you.This captivating novel will keep you.This mesmerizing novel will keep you.This unputdownable fiction will keep you.This intriguing work will take you.This intriguing narrative will captivate you.This thought-provoking story will leave you.This captivating tale will transport you.This gripping narrative will leave a lasting impression on you.This intriguing story will leave you.This fascinating novel will captivate you.",
  },
  {
    id: "4d13b397-5c8e-4f22-a25a-41dcb36faffc",
    title: "The Last of the Mohicans; A narrative of 1757",
    image: "https://www.gutenberg.org/cache/epub/940/pg940.cover.medium.jpg",
    author: "Cooper, James Fenimore",
    category: "historical",
    sample:
      "This spellbinding book will transport you.This mesmerizing literature will keep you.This thought-provoking book will leave you.",
    discription:
      "This compelling novel will keep you.This thought-provoking literature will captivate you.This mesmerizing fiction will captivate you.This unputdownable book will take you.This entertaining fiction will mesmerize you.This unputdownable work will transport you.This unputdownable tale will keep you.This captivating fiction will leave a lasting impression on you.This spellbinding tale will take you.This intriguing story will take you.This captivating prose will captivate you.This unputdownable literature will transport you.This gripping narrative will transport you.This intriguing narrative will mesmerize you.This fascinating fiction will captivate you.This entertaining literature will leave a lasting impression on you.This spellbinding tale will leave you.This spellbinding work will keep you.This compelling book will take you.This intriguing tale will mesmerize you.",
  },
  {
    id: "7200a32d-ab2a-47da-ae1d-69c857fe02ba",
    title: "The extraordinary confessions of Diana Please",
    image:
      "https://www.gutenberg.org/cache/epub/69885/pg69885.cover.medium.jpg",
    author: "Capes, Bernard",
    category: "historical",
    sample:
      "This unputdownable book will take you.This compelling tale will leave a lasting impression on you.This thought-provoking work will mesmerize you.",
    discription:
      "This captivating narrative will take you.This fascinating literature will captivate you.This spellbinding story will take you.This gripping work will take you.This spellbinding novel will transport you.This fascinating tale will leave you.This entertaining work will leave a lasting impression on you.This mesmerizing story will captivate you.This unputdownable fiction will transport you.This gripping novel will keep you.This mesmerizing narrative will transport you.This thought-provoking tale will keep you.This fascinating literature will leave you.This compelling tale will keep you.This mesmerizing literature will leave you.This gripping work will keep you.This intriguing prose will keep you.This intriguing work will keep you.This unputdownable story will keep you.This thought-provoking novel will keep you.",
  },
  {
    id: "73ec88b2-3504-4e24-8b12-c068afd27b7f",
    title: "Shakespeare's Roman plays and their background",
    image:
      "https://www.gutenberg.org/cache/epub/69937/pg69937.cover.medium.jpg",
    author: "MacCallum, Mungo William, Sir",
    category: "historical",
    sample:
      "This unputdownable narrative will leave a lasting impression on you.This compelling tale will take you.This spellbinding fiction will keep you.",
    discription:
      "This gripping narrative will leave a lasting impression on you.This unputdownable novel will transport you.This entertaining novel will keep you.This compelling story will leave a lasting impression on you.This gripping prose will transport you.This entertaining prose will mesmerize you.This spellbinding tale will leave a lasting impression on you.This spellbinding story will leave a lasting impression on you.This unputdownable novel will leave you.This mesmerizing narrative will leave a lasting impression on you.This intriguing book will keep you.This mesmerizing story will transport you.This unputdownable prose will mesmerize you.This gripping work will leave a lasting impression on you.This thought-provoking novel will take you.This gripping book will captivate you.This unputdownable tale will leave a lasting impression on you.This compelling tale will keep you.This entertaining prose will transport you.This intriguing narrative will keep you.",
  },
  {
    id: "1d819514-0c77-4966-b791-1ec1947615cd",
    title: "The History of Mary Prince, a West Indian Slave",
    image:
      "https://www.gutenberg.org/cache/epub/17851/pg17851.cover.medium.jpg",
    author: "Prince, Mary",
    category: "historical",
    sample:
      "This spellbinding book will leave you.This gripping literature will leave a lasting impression on you.This entertaining novel will keep you.",
    discription:
      "This gripping work will take you.This compelling book will leave a lasting impression on you.This unputdownable literature will take you.This unputdownable book will take you.This unputdownable narrative will leave a lasting impression on you.This captivating tale will transport you.This thought-provoking tale will transport you.This thought-provoking story will keep you.This unputdownable narrative will transport you.This compelling narrative will transport you.This spellbinding narrative will keep you.This spellbinding story will captivate you.This intriguing narrative will captivate you.This compelling work will keep you.This mesmerizing fiction will keep you.This gripping book will keep you.This captivating work will take you.This compelling tale will mesmerize you.This fascinating book will keep you.This captivating novel will keep you.",
  },
  {
    id: "d73392f9-f0f1-46ac-a8ef-7398454bfab3",
    title: "Twice-told tales",
    image:
      "https://www.gutenberg.org/cache/epub/13707/pg13707.cover.medium.jpg",
    author: "Hawthorne, Nathaniel",
    category: "historical",
    sample:
      "This mesmerizing prose will leave a lasting impression on you.This mesmerizing fiction will keep you.This entertaining literature will captivate you.",
    discription:
      "This thought-provoking book will leave a lasting impression on you.This unputdownable prose will keep you.This spellbinding story will transport you.This captivating fiction will mesmerize you.This entertaining prose will take you.This entertaining narrative will captivate you.This intriguing literature will transport you.This unputdownable narrative will transport you.This captivating story will keep you.This spellbinding work will transport you.This captivating literature will leave a lasting impression on you.This captivating literature will captivate you.This intriguing prose will take you.This fascinating book will leave a lasting impression on you.This intriguing narrative will captivate you.This unputdownable narrative will captivate you.This fascinating narrative will mesmerize you.This mesmerizing novel will mesmerize you.This gripping work will captivate you.This spellbinding story will leave you.",
  },
  {
    id: "8948d9e2-b22e-4202-9849-ed94779d8f1b",
    title: "O Pioneers!",
    image: "https://www.gutenberg.org/cache/epub/24/pg24.cover.medium.jpg",
    author: "Cather, Willa",
    category: "historical",
    sample:
      "This spellbinding literature will take you.This spellbinding literature will take you.This fascinating literature will transport you.",
    discription:
      "This unputdownable fiction will keep you.This captivating fiction will leave you.This entertaining literature will keep you.This fascinating tale will leave a lasting impression on you.This mesmerizing book will mesmerize you.This thought-provoking book will transport you.This compelling literature will leave a lasting impression on you.This entertaining fiction will transport you.This fascinating work will leave a lasting impression on you.This mesmerizing tale will mesmerize you.This captivating story will leave a lasting impression on you.This mesmerizing prose will captivate you.This gripping work will keep you.This intriguing work will captivate you.This gripping story will keep you.This spellbinding book will take you.This gripping prose will keep you.This gripping literature will keep you.This captivating novel will transport you.This spellbinding novel will leave a lasting impression on you.",
  },
  {
    id: "211ff525-1869-4cb4-8188-8f309b252ae6",
    title: "The Ballad of the White Horse",
    image: "https://www.gutenberg.org/cache/epub/1719/pg1719.cover.medium.jpg",
    author: "Chesterton, G. K. (Gilbert Keith)",
    category: "historical",
    sample:
      "This spellbinding story will transport you.This gripping narrative will captivate you.This spellbinding prose will leave a lasting impression on you.",
    discription:
      "This captivating book will mesmerize you.This entertaining tale will leave a lasting impression on you.This thought-provoking novel will mesmerize you.This captivating prose will keep you.This mesmerizing book will leave a lasting impression on you.This thought-provoking story will captivate you.This intriguing story will mesmerize you.This mesmerizing book will take you.This thought-provoking work will keep you.This mesmerizing prose will captivate you.This compelling fiction will mesmerize you.This gripping novel will mesmerize you.This entertaining literature will leave you.This compelling prose will transport you.This mesmerizing narrative will leave a lasting impression on you.This gripping fiction will take you.This intriguing tale will leave you.This intriguing narrative will captivate you.This mesmerizing book will captivate you.This gripping tale will leave a lasting impression on you.",
  },
  {
    id: "e7a823dd-a4f4-4b6b-8927-c119345b2f4e",
    title: "Le comte de Monte-Cristo, Tome I",
    image:
      "https://www.gutenberg.org/cache/epub/17989/pg17989.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "historical",
    sample:
      "This captivating book will leave a lasting impression on you.This entertaining novel will leave a lasting impression on you.This entertaining work will leave a lasting impression on you.",
    discription:
      "This fascinating book will leave a lasting impression on you.This spellbinding novel will captivate you.This spellbinding novel will leave you.This intriguing work will leave you.This entertaining narrative will transport you.This entertaining work will keep you.This entertaining fiction will leave a lasting impression on you.This compelling work will captivate you.This fascinating book will leave you.This spellbinding story will transport you.This compelling narrative will leave you.This entertaining narrative will transport you.This gripping book will leave a lasting impression on you.This unputdownable book will take you.This mesmerizing tale will captivate you.This thought-provoking literature will take you.This unputdownable literature will captivate you.This entertaining narrative will take you.This fascinating book will keep you.This mesmerizing novel will captivate you.",
  },
  {
    id: "058da901-a922-44d7-8b6c-64dce1dc994b",
    title: "The instinct of workmanship, and the state of industrial arts",
    image:
      "https://www.gutenberg.org/cache/epub/69888/pg69888.cover.medium.jpg",
    author: "Veblen, Thorstein",
    category: "technology",
    sample:
      "This unputdownable tale will captivate you.This intriguing fiction will captivate you.This unputdownable book will mesmerize you.",
    discription:
      "This intriguing narrative will transport you.This gripping work will leave a lasting impression on you.This fascinating book will leave a lasting impression on you.This unputdownable narrative will leave a lasting impression on you.This gripping fiction will transport you.This captivating literature will take you.This unputdownable book will leave you.This thought-provoking story will take you.This entertaining story will mesmerize you.This spellbinding narrative will mesmerize you.This thought-provoking book will mesmerize you.This gripping work will transport you.This thought-provoking work will keep you.This mesmerizing literature will transport you.This entertaining novel will transport you.This entertaining novel will leave a lasting impression on you.This captivating book will leave you.This captivating fiction will leave you.This thought-provoking story will take you.This fascinating narrative will mesmerize you.",
  },
  {
    id: "4c86fb0c-6518-4b34-9128-e1b8ea731d66",
    title: "The Book of Household Management",
    image:
      "https://www.gutenberg.org/cache/epub/10136/pg10136.cover.medium.jpg",
    author: "Beeton, Mrs. (Isabella Mary)",
    category: "technology",
    sample:
      "This captivating literature will leave you.This fascinating novel will mesmerize you.This mesmerizing tale will captivate you.",
    discription:
      "This fascinating literature will keep you.This unputdownable work will leave you.This mesmerizing work will leave you.This entertaining work will leave you.This entertaining tale will transport you.This entertaining narrative will keep you.This intriguing fiction will take you.This thought-provoking prose will captivate you.This mesmerizing book will captivate you.This entertaining literature will transport you.This mesmerizing work will captivate you.This fascinating book will keep you.This entertaining fiction will transport you.This spellbinding story will mesmerize you.This spellbinding work will mesmerize you.This captivating tale will leave a lasting impression on you.This gripping work will leave you.This thought-provoking novel will transport you.This spellbinding prose will take you.This mesmerizing story will take you.",
  },
  {
    id: "4bbf3162-ca4d-44d6-ad94-b370b3529b49",
    title:
      "The Mechanical Properties of Wood: Including a Discussion of the Factors Affecting the Mechanical Properties, and Methods of Timber Testing",
    image:
      "https://www.gutenberg.org/cache/epub/12299/pg12299.cover.medium.jpg",
    author: "Record, Samuel J. (Samuel James)",
    category: "technology",
    sample:
      "This compelling narrative will keep you.This compelling literature will leave a lasting impression on you.This thought-provoking fiction will leave a lasting impression on you.",
    discription:
      "This entertaining narrative will keep you.This spellbinding prose will mesmerize you.This thought-provoking literature will captivate you.This spellbinding story will keep you.This captivating work will leave a lasting impression on you.This captivating story will leave you.This gripping book will transport you.This gripping prose will captivate you.This thought-provoking story will captivate you.This spellbinding book will leave you.This compelling tale will mesmerize you.This compelling fiction will leave a lasting impression on you.This intriguing narrative will keep you.This intriguing narrative will take you.This entertaining narrative will captivate you.This unputdownable literature will mesmerize you.This fascinating novel will captivate you.This intriguing prose will leave you.This intriguing fiction will keep you.This entertaining novel will leave you.",
  },
  {
    id: "7a3e6ff3-738c-4e9a-b865-d3239d7f8938",
    title: "Encyclopedia of Needlework",
    image:
      "https://www.gutenberg.org/cache/epub/20776/pg20776.cover.medium.jpg",
    author: "Dillmont, Th\u00e9r\u00e8se de",
    category: "technology",
    sample:
      "This unputdownable prose will keep you.This captivating story will mesmerize you.This spellbinding story will leave you.",
    discription:
      "This entertaining narrative will mesmerize you.This thought-provoking work will captivate you.This entertaining narrative will transport you.This thought-provoking literature will captivate you.This entertaining prose will transport you.This entertaining tale will keep you.This gripping fiction will leave a lasting impression on you.This spellbinding literature will keep you.This mesmerizing tale will transport you.This gripping prose will keep you.This mesmerizing story will mesmerize you.This compelling novel will leave a lasting impression on you.This intriguing prose will leave a lasting impression on you.This thought-provoking narrative will take you.This mesmerizing novel will take you.This spellbinding novel will mesmerize you.This fascinating book will transport you.This spellbinding book will keep you.This gripping literature will take you.This entertaining novel will take you.",
  },
  {
    id: "773a5290-c055-47d9-86ad-4d7ff9ed58a1",
    title: "Embroidery and Tapestry Weaving",
    image:
      "https://www.gutenberg.org/cache/epub/20386/pg20386.cover.medium.jpg",
    author: "Christie, Grace",
    category: "technology",
    sample:
      "This thought-provoking fiction will captivate you.This thought-provoking novel will transport you.This intriguing book will leave a lasting impression on you.",
    discription:
      "This gripping story will take you.This captivating work will captivate you.This spellbinding narrative will keep you.This intriguing prose will take you.This thought-provoking tale will mesmerize you.This fascinating book will captivate you.This spellbinding work will leave you.This captivating literature will transport you.This unputdownable story will keep you.This mesmerizing narrative will captivate you.This unputdownable work will leave a lasting impression on you.This entertaining novel will captivate you.This fascinating work will captivate you.This entertaining novel will mesmerize you.This thought-provoking novel will transport you.This thought-provoking novel will take you.This captivating tale will keep you.This spellbinding tale will take you.This entertaining literature will keep you.This unputdownable prose will mesmerize you.",
  },
  {
    id: "19a43de3-2d78-41bc-9e28-55edab3180e8",
    title: "Beeton's Book of Needlework",
    image:
      "https://www.gutenberg.org/cache/epub/15147/pg15147.cover.medium.jpg",
    author: "Beeton, Mrs. (Isabella Mary)",
    category: "technology",
    sample:
      "This intriguing story will take you.This entertaining fiction will leave you.This thought-provoking book will mesmerize you.",
    discription:
      "This intriguing prose will captivate you.This intriguing novel will keep you.This mesmerizing tale will leave a lasting impression on you.This thought-provoking book will captivate you.This captivating novel will transport you.This fascinating prose will captivate you.This captivating book will take you.This spellbinding literature will keep you.This thought-provoking work will mesmerize you.This unputdownable work will captivate you.This mesmerizing story will keep you.This intriguing story will leave a lasting impression on you.This fascinating book will keep you.This thought-provoking fiction will take you.This fascinating tale will take you.This spellbinding work will keep you.This entertaining tale will mesmerize you.This intriguing prose will mesmerize you.This mesmerizing fiction will leave you.This intriguing literature will take you.",
  },
  {
    id: "a224a493-f37e-4cd5-9dd3-f0ae5d36b6dc",
    title: "Handbook of Wool Knitting and Crochet",
    image:
      "https://www.gutenberg.org/files/26113/26113_page_images/af0001-image1.jpg",
    author: "Anonymous",
    category: "technology",
    sample:
      "This entertaining tale will leave you.This fascinating prose will leave you.This gripping book will leave a lasting impression on you.",
    discription:
      "This gripping work will leave a lasting impression on you.This captivating prose will leave a lasting impression on you.This unputdownable literature will take you.This fascinating literature will mesmerize you.This gripping narrative will leave a lasting impression on you.This unputdownable story will mesmerize you.This entertaining book will transport you.This spellbinding book will take you.This thought-provoking tale will captivate you.This compelling novel will keep you.This fascinating novel will captivate you.This gripping fiction will leave a lasting impression on you.This mesmerizing work will mesmerize you.This fascinating fiction will keep you.This entertaining book will transport you.This captivating novel will keep you.This intriguing story will leave a lasting impression on you.This entertaining fiction will mesmerize you.This spellbinding fiction will leave a lasting impression on you.This spellbinding prose will leave you.",
  },
  {
    id: "415b9a58-e010-486b-84d4-c08695954aa8",
    title:
      "Self-Instructor in the Art of Hair Work, Dressing Hair, Making Curls, Switches, Braids, and Hair Jewelry of Every Description.",
    image:
      "https://www.gutenberg.org/cache/epub/38658/pg38658.cover.medium.jpg",
    author: "Campbell, Mark, active 19th century",
    category: "technology",
    sample:
      "This gripping prose will leave you.This captivating novel will take you.This gripping prose will keep you.",
    discription:
      "This unputdownable book will leave you.This thought-provoking work will mesmerize you.This entertaining work will leave you.This compelling story will keep you.This spellbinding prose will take you.This mesmerizing fiction will keep you.This intriguing tale will captivate you.This spellbinding fiction will keep you.This spellbinding novel will captivate you.This unputdownable story will transport you.This fascinating literature will leave a lasting impression on you.This fascinating work will leave a lasting impression on you.This thought-provoking literature will leave you.This fascinating literature will keep you.This mesmerizing story will captivate you.This spellbinding story will take you.This spellbinding novel will leave a lasting impression on you.This spellbinding tale will leave a lasting impression on you.This captivating novel will captivate you.This mesmerizing prose will transport you.",
  },
  {
    id: "acc10053-6afc-4bfa-8dd8-22ba1e44f962",
    title: "Woodwork Joints: How They Are Set Out, How Made and Where Used.",
    image:
      "https://www.gutenberg.org/cache/epub/21531/pg21531.cover.medium.jpg",
    author: "Fairham, William",
    category: "technology",
    sample:
      "This entertaining book will mesmerize you.This fascinating literature will captivate you.This compelling story will leave you.",
    discription:
      "This thought-provoking tale will mesmerize you.This intriguing story will take you.This unputdownable tale will transport you.This fascinating story will keep you.This entertaining fiction will mesmerize you.This mesmerizing work will take you.This spellbinding novel will captivate you.This compelling tale will leave you.This thought-provoking book will mesmerize you.This spellbinding literature will leave you.This captivating fiction will transport you.This entertaining work will take you.This captivating narrative will captivate you.This captivating novel will leave you.This unputdownable tale will leave a lasting impression on you.This thought-provoking novel will take you.This entertaining prose will keep you.This entertaining story will transport you.This mesmerizing book will mesmerize you.This thought-provoking tale will leave you.",
  },
  {
    id: "a4af6fbe-43b8-476e-92f6-22ec2eddbac1",
    title: "The American Frugal Housewife",
    image:
      "https://www.gutenberg.org/cache/epub/13493/pg13493.cover.medium.jpg",
    author: "Child, Lydia Maria",
    category: "technology",
    sample:
      "This mesmerizing prose will keep you.This mesmerizing book will take you.This fascinating novel will keep you.",
    discription:
      "This captivating prose will keep you.This fascinating work will take you.This compelling novel will captivate you.This captivating book will transport you.This intriguing tale will captivate you.This captivating literature will captivate you.This spellbinding prose will leave you.This mesmerizing narrative will captivate you.This entertaining fiction will leave you.This unputdownable prose will keep you.This compelling work will keep you.This compelling story will take you.This mesmerizing narrative will keep you.This thought-provoking novel will take you.This gripping story will transport you.This mesmerizing fiction will take you.This spellbinding fiction will captivate you.This captivating tale will mesmerize you.This gripping tale will keep you.This intriguing narrative will keep you.",
  },
  {
    id: "3b4be5dd-a148-474f-ac10-f72500d0253f",
    title:
      "The Art of Perfumery, and Methods of Obtaining the Odors of Plants: With Instructions for the Manufacture of Perfumes for the Handkerchief, Scented Powders, Odorous Vinegars, Dentifrices, Pomatums, Cosmetics, Perfumed Soap, Etc., to which is Added an Appendix on Preparing Artificial Fruit-Essences, Etc.",
    image:
      "https://www.gutenberg.org/cache/epub/16378/pg16378.cover.medium.jpg",
    author: "Piesse, G. W. Septimus (George William Septimus)",
    category: "technology",
    sample:
      "This thought-provoking narrative will keep you.This mesmerizing narrative will leave you.This intriguing narrative will leave you.",
    discription:
      "This thought-provoking story will leave you.This compelling work will captivate you.This spellbinding narrative will leave you.This gripping story will leave a lasting impression on you.This entertaining fiction will captivate you.This intriguing book will leave you.This entertaining story will leave you.This unputdownable narrative will keep you.This thought-provoking tale will captivate you.This thought-provoking book will mesmerize you.This captivating story will keep you.This unputdownable tale will keep you.This entertaining narrative will leave a lasting impression on you.This mesmerizing literature will mesmerize you.This compelling book will mesmerize you.This thought-provoking narrative will take you.This thought-provoking book will leave you.This spellbinding fiction will captivate you.This spellbinding novel will leave a lasting impression on you.This mesmerizing book will captivate you.",
  },
  {
    id: "d4f9e44a-7296-4a03-99d7-f0b3e881e6ab",
    title:
      "How it Works: Dealing in simple language with steam, electricity, light, heat, sound, hydraulics, optics, etc., and with their applications to apparatus in common use",
    image:
      "https://www.gutenberg.org/cache/epub/28553/pg28553.cover.medium.jpg",
    author: "Williams, Archibald",
    category: "technology",
    sample:
      "This spellbinding novel will mesmerize you.This mesmerizing prose will keep you.This unputdownable literature will mesmerize you.",
    discription:
      "This spellbinding prose will captivate you.This fascinating prose will leave a lasting impression on you.This captivating novel will take you.This mesmerizing literature will transport you.This intriguing novel will mesmerize you.This unputdownable prose will transport you.This compelling prose will leave you.This unputdownable narrative will mesmerize you.This intriguing literature will leave a lasting impression on you.This unputdownable work will captivate you.This spellbinding fiction will leave a lasting impression on you.This compelling story will leave a lasting impression on you.This entertaining narrative will keep you.This mesmerizing literature will transport you.This compelling prose will transport you.This captivating tale will mesmerize you.This fascinating literature will leave a lasting impression on you.This fascinating book will leave you.This entertaining narrative will keep you.This intriguing tale will leave you.",
  },
  {
    id: "25c4cbae-b92f-4713-96d6-a56d9df33389",
    title:
      "A Treatise on Domestic Economy; For the Use of Young Ladies at Home and at School",
    image:
      "https://www.gutenberg.org/cache/epub/21829/pg21829.cover.medium.jpg",
    author: "Beecher, Catharine Esther",
    category: "technology",
    sample:
      "This unputdownable book will leave a lasting impression on you.This intriguing literature will captivate you.This unputdownable literature will mesmerize you.",
    discription:
      "This thought-provoking work will captivate you.This captivating story will leave you.This captivating story will keep you.This spellbinding novel will take you.This intriguing story will transport you.This intriguing literature will captivate you.This unputdownable novel will transport you.This intriguing novel will take you.This intriguing work will take you.This thought-provoking story will keep you.This unputdownable book will captivate you.This spellbinding book will mesmerize you.This unputdownable novel will leave a lasting impression on you.This thought-provoking prose will transport you.This spellbinding book will leave you.This thought-provoking prose will keep you.This entertaining work will leave a lasting impression on you.This compelling fiction will mesmerize you.This compelling book will transport you.This captivating narrative will leave a lasting impression on you.",
  },
  {
    id: "f9ac0112-c997-4132-aea3-f6d2fbca0fa9",
    title: "John Deere's Steel Plow",
    image:
      "https://www.gutenberg.org/cache/epub/34562/pg34562.cover.medium.jpg",
    author: "Kendall, Edward C.",
    category: "technology",
    sample:
      "This gripping tale will transport you.This captivating story will leave a lasting impression on you.This intriguing book will mesmerize you.",
    discription:
      "This compelling work will transport you.This unputdownable prose will captivate you.This captivating novel will keep you.This entertaining literature will captivate you.This compelling prose will transport you.This thought-provoking story will captivate you.This entertaining narrative will leave a lasting impression on you.This fascinating work will transport you.This captivating novel will leave a lasting impression on you.This intriguing fiction will mesmerize you.This entertaining tale will transport you.This fascinating work will keep you.This spellbinding fiction will leave a lasting impression on you.This mesmerizing book will captivate you.This fascinating story will keep you.This intriguing work will captivate you.This entertaining novel will leave you.This intriguing work will leave a lasting impression on you.This spellbinding prose will leave a lasting impression on you.This intriguing fiction will keep you.",
  },
  {
    id: "3838db3b-1e78-47b2-94e8-2cfcc4477866",
    title: "Mission Furniture: How to Make It, Part 1",
    image:
      "https://www.gutenberg.org/cache/epub/23770/pg23770.cover.medium.jpg",
    author: "Windsor, H. H. (Henry Haven)",
    category: "technology",
    sample:
      "This thought-provoking novel will transport you.This gripping novel will leave you.This thought-provoking fiction will transport you.",
    discription:
      "This mesmerizing literature will keep you.This spellbinding book will take you.This thought-provoking narrative will leave you.This unputdownable book will keep you.This intriguing book will take you.This thought-provoking book will take you.This thought-provoking work will leave a lasting impression on you.This thought-provoking tale will transport you.This compelling story will take you.This thought-provoking fiction will keep you.This entertaining prose will take you.This thought-provoking book will leave a lasting impression on you.This spellbinding tale will captivate you.This intriguing work will keep you.This thought-provoking fiction will mesmerize you.This compelling work will take you.This intriguing literature will keep you.This intriguing narrative will captivate you.This compelling narrative will captivate you.This unputdownable tale will keep you.",
  },
  {
    id: "9a5cbe86-2ea3-4419-8687-75702f3a1c08",
    title: "The Invention of the Sewing Machine",
    image:
      "https://www.gutenberg.org/cache/epub/32677/pg32677.cover.medium.jpg",
    author: "Cooper, Grace Rogers",
    category: "technology",
    sample:
      "This unputdownable story will leave you.This compelling literature will take you.This compelling novel will leave a lasting impression on you.",
    discription:
      "This intriguing prose will leave a lasting impression on you.This captivating work will mesmerize you.This intriguing narrative will leave you.This spellbinding work will transport you.This intriguing work will keep you.This entertaining work will leave a lasting impression on you.This unputdownable narrative will keep you.This intriguing tale will leave you.This compelling novel will take you.This intriguing literature will transport you.This spellbinding book will transport you.This intriguing tale will mesmerize you.This thought-provoking literature will leave a lasting impression on you.This compelling literature will take you.This spellbinding story will captivate you.This intriguing work will captivate you.This intriguing tale will mesmerize you.This spellbinding prose will transport you.This fascinating tale will take you.This captivating book will leave a lasting impression on you.",
  },
  {
    id: "74c21c36-5108-454d-be0f-2fa4c7771783",
    title: "Dress Design: An Account of Costume for Artists & Dressmakers",
    image:
      "https://www.gutenberg.org/cache/epub/34903/pg34903.cover.medium.jpg",
    author: "Hughes, Talbot",
    category: "technology",
    sample:
      "This gripping story will transport you.This fascinating prose will take you.This intriguing narrative will take you.",
    discription:
      "This compelling literature will transport you.This gripping fiction will keep you.This mesmerizing tale will leave a lasting impression on you.This entertaining fiction will transport you.This fascinating work will take you.This intriguing book will keep you.This captivating literature will mesmerize you.This gripping tale will leave you.This captivating novel will keep you.This mesmerizing tale will keep you.This gripping work will transport you.This entertaining fiction will mesmerize you.This unputdownable novel will leave a lasting impression on you.This captivating narrative will leave you.This mesmerizing tale will captivate you.This compelling literature will captivate you.This mesmerizing story will take you.This mesmerizing work will mesmerize you.This spellbinding story will leave a lasting impression on you.This spellbinding tale will captivate you.",
  },
  {
    id: "562e533f-a699-4da8-9803-cb3d34f02286",
    title:
      "Carpentry for Boys: In a Simple Language, Including Chapters on Drawing, Laying Out Work, Designing and Architecture With 250 Original Illustrations",
    image:
      "https://www.gutenberg.org/cache/epub/20763/pg20763.cover.medium.jpg",
    author: "Zerbe, James Slough",
    category: "technology",
    sample:
      "This captivating book will transport you.This intriguing narrative will leave you.This captivating narrative will take you.",
    discription:
      "This captivating narrative will mesmerize you.This mesmerizing literature will transport you.This thought-provoking prose will keep you.This mesmerizing story will keep you.This gripping story will transport you.This compelling story will leave a lasting impression on you.This compelling book will transport you.This captivating narrative will mesmerize you.This thought-provoking prose will leave you.This entertaining fiction will captivate you.This mesmerizing fiction will captivate you.This unputdownable prose will captivate you.This intriguing literature will keep you.This entertaining fiction will keep you.This captivating story will mesmerize you.This gripping prose will take you.This fascinating narrative will transport you.This gripping story will leave a lasting impression on you.This gripping narrative will transport you.This intriguing novel will leave you.",
  },
  {
    id: "86fdcf8f-f7a8-4ea0-a723-830dd57991b4",
    title:
      "Soap-Making Manual: A Practical Handbook on the Raw Materials, Their Manipulation, Analysis and Control in the Modern Soap Plant.",
    image:
      "https://www.gutenberg.org/cache/epub/34114/pg34114.cover.medium.jpg",
    author: "Thomssen, Edgar George",
    category: "technology",
    sample:
      "This spellbinding fiction will take you.This thought-provoking prose will captivate you.This compelling prose will transport you.",
    discription:
      "This intriguing literature will keep you.This captivating story will leave you.This captivating narrative will mesmerize you.This gripping work will keep you.This fascinating work will leave a lasting impression on you.This captivating book will keep you.This spellbinding tale will take you.This thought-provoking narrative will captivate you.This fascinating narrative will take you.This compelling tale will leave a lasting impression on you.This unputdownable tale will take you.This unputdownable literature will leave a lasting impression on you.This fascinating work will mesmerize you.This mesmerizing prose will leave you.This thought-provoking novel will take you.This compelling story will mesmerize you.This gripping literature will leave a lasting impression on you.This compelling work will leave a lasting impression on you.This mesmerizing novel will captivate you.This entertaining literature will take you.",
  },
  {
    id: "a418aa9c-b073-4398-814b-2f385556f06f",
    title:
      "Mechanical Drawing Self-Taught: Comprising instructions in the selection and preparation of drawing instruments, elementary instruction in practical mechanical drawing; together with examples in simple geometry and elementary mechanism, including screw threads, gear wheels, mechanical motions, engines and boilers",
    image:
      "https://www.gutenberg.org/cache/epub/23319/pg23319.cover.medium.jpg",
    author: "Rose, Joshua",
    category: "technology",
    sample:
      "This thought-provoking story will transport you.This unputdownable book will take you.This gripping prose will transport you.",
    discription:
      "This unputdownable prose will captivate you.This mesmerizing book will captivate you.This compelling prose will mesmerize you.This captivating prose will captivate you.This entertaining book will take you.This entertaining novel will keep you.This spellbinding prose will take you.This spellbinding book will leave you.This fascinating book will captivate you.This gripping novel will keep you.This compelling narrative will leave a lasting impression on you.This compelling narrative will transport you.This unputdownable book will leave a lasting impression on you.This fascinating literature will transport you.This compelling tale will transport you.This gripping prose will leave a lasting impression on you.This mesmerizing fiction will captivate you.This mesmerizing story will take you.This thought-provoking novel will keep you.This fascinating narrative will mesmerize you.",
  },
  {
    id: "6eb065e4-7984-468b-b198-b3021ebba891",
    title: "The House in Good Taste",
    image:
      "https://www.gutenberg.org/cache/epub/14715/pg14715.cover.medium.jpg",
    author: "De Wolfe, Elsie",
    category: "technology",
    sample:
      "This compelling work will transport you.This unputdownable prose will transport you.This entertaining work will take you.",
    discription:
      "This mesmerizing story will keep you.This captivating narrative will keep you.This compelling book will transport you.This entertaining book will captivate you.This compelling literature will keep you.This gripping story will take you.This gripping novel will mesmerize you.This entertaining literature will leave you.This mesmerizing novel will leave you.This gripping literature will take you.This captivating prose will mesmerize you.This entertaining work will take you.This captivating book will mesmerize you.This captivating fiction will leave you.This intriguing novel will mesmerize you.This unputdownable literature will leave you.This unputdownable prose will keep you.This intriguing work will mesmerize you.This fascinating novel will transport you.This spellbinding novel will leave a lasting impression on you.",
  },
  {
    id: "0eda060d-3f68-4be6-8041-4395297702ce",
    title: "A Plain Cookery Book for the Working Classes",
    image:
      "https://www.gutenberg.org/cache/epub/22114/pg22114.cover.medium.jpg",
    author: "Francatelli, Charles Elm\u00e9",
    category: "technology",
    sample:
      "This compelling tale will captivate you.This fascinating novel will keep you.This gripping prose will transport you.",
    discription:
      "This thought-provoking fiction will keep you.This fascinating narrative will keep you.This captivating tale will take you.This spellbinding fiction will take you.This gripping novel will take you.This fascinating literature will mesmerize you.This intriguing story will mesmerize you.This compelling literature will leave a lasting impression on you.This captivating work will leave you.This compelling prose will take you.This gripping novel will transport you.This mesmerizing novel will take you.This compelling tale will transport you.This intriguing novel will leave a lasting impression on you.This thought-provoking narrative will mesmerize you.This gripping tale will mesmerize you.This mesmerizing fiction will mesmerize you.This unputdownable story will transport you.This captivating literature will leave a lasting impression on you.This gripping literature will keep you.",
  },
  {
    id: "a9d81f71-90e0-4051-bf66-9a78ded4133d",
    title: "Wood-Carving: Design and Workmanship",
    image:
      "https://www.gutenberg.org/cache/epub/22107/pg22107.cover.medium.jpg",
    author: "Jack, George",
    category: "technology",
    sample:
      "This entertaining novel will leave a lasting impression on you.This mesmerizing prose will take you.This compelling fiction will leave a lasting impression on you.",
    discription:
      "This gripping book will transport you.This compelling book will mesmerize you.This thought-provoking narrative will captivate you.This fascinating literature will captivate you.This compelling story will captivate you.This mesmerizing book will mesmerize you.This intriguing novel will captivate you.This entertaining novel will leave you.This compelling work will leave you.This unputdownable work will take you.This intriguing book will mesmerize you.This gripping tale will take you.This unputdownable story will keep you.This entertaining book will transport you.This fascinating story will leave a lasting impression on you.This gripping work will captivate you.This intriguing story will captivate you.This intriguing story will leave a lasting impression on you.This intriguing work will leave a lasting impression on you.This intriguing novel will transport you.",
  },
  {
    id: "ab5c2a4f-7c3e-4868-a459-700246254ff3",
    title: "Ancient Egyptian and Greek Looms",
    image:
      "https://www.gutenberg.org/cache/epub/25731/pg25731.cover.medium.jpg",
    author: "Roth, H. Ling (Henry Ling)",
    category: "technology",
    sample:
      "This mesmerizing narrative will captivate you.This captivating novel will leave a lasting impression on you.This compelling book will transport you.",
    discription:
      "This compelling book will transport you.This spellbinding fiction will take you.This intriguing prose will mesmerize you.This fascinating work will transport you.This unputdownable narrative will keep you.This mesmerizing book will captivate you.This intriguing tale will mesmerize you.This intriguing novel will keep you.This captivating fiction will keep you.This unputdownable tale will mesmerize you.This intriguing story will keep you.This entertaining story will leave you.This compelling prose will captivate you.This fascinating tale will keep you.This compelling novel will captivate you.This unputdownable narrative will mesmerize you.This spellbinding work will mesmerize you.This unputdownable tale will mesmerize you.This compelling story will leave a lasting impression on you.This unputdownable narrative will leave you.",
  },
  {
    id: "e1379d6d-023b-4357-a7e8-51f617f44e3c",
    title: "Hand-Loom Weaving: A Manual for School and Home",
    image:
      "https://www.gutenberg.org/cache/epub/31630/pg31630.cover.medium.jpg",
    author: "Todd, Mattie Phipps",
    category: "technology",
    sample:
      "This spellbinding prose will leave a lasting impression on you.This entertaining fiction will keep you.This gripping book will leave you.",
    discription:
      "This spellbinding fiction will leave a lasting impression on you.This thought-provoking literature will mesmerize you.This intriguing tale will keep you.This unputdownable story will captivate you.This spellbinding prose will take you.This spellbinding prose will captivate you.This compelling novel will mesmerize you.This entertaining work will leave a lasting impression on you.This compelling work will leave you.This unputdownable story will transport you.This compelling fiction will captivate you.This captivating narrative will transport you.This unputdownable narrative will leave you.This thought-provoking story will transport you.This fascinating work will take you.This thought-provoking fiction will captivate you.This thought-provoking work will take you.This spellbinding work will transport you.This captivating tale will leave a lasting impression on you.This unputdownable fiction will captivate you.",
  },
  {
    id: "bf2660e8-e1fc-4f7c-a476-8d2a88aaded5",
    title: "The Handbook of Soap Manufacture",
    image:
      "https://www.gutenberg.org/cache/epub/21724/pg21724.cover.medium.jpg",
    author: "Appleton, H. A.",
    category: "technology",
    sample:
      "This spellbinding tale will transport you.This captivating fiction will transport you.This fascinating story will take you.",
    discription:
      "This spellbinding book will mesmerize you.This entertaining tale will captivate you.This mesmerizing prose will leave a lasting impression on you.This mesmerizing tale will keep you.This fascinating prose will mesmerize you.This entertaining tale will mesmerize you.This gripping prose will mesmerize you.This spellbinding prose will keep you.This entertaining work will leave a lasting impression on you.This spellbinding book will transport you.This entertaining novel will captivate you.This gripping story will captivate you.This entertaining story will leave you.This mesmerizing story will take you.This intriguing story will captivate you.This thought-provoking work will captivate you.This compelling novel will take you.This compelling book will mesmerize you.This mesmerizing literature will leave a lasting impression on you.This unputdownable work will leave you.",
  },
  {
    id: "0ad3c0e3-e489-4701-9cc8-0a98d79bb848",
    title: "The Chemistry of Food and Nutrition",
    image:
      "https://www.gutenberg.org/cache/epub/15237/pg15237.cover.medium.jpg",
    author: "Duncan, A. W.",
    category: "technology",
    sample:
      "This intriguing literature will leave you.This fascinating fiction will transport you.This intriguing novel will transport you.",
    discription:
      "This intriguing work will take you.This spellbinding novel will leave a lasting impression on you.This gripping tale will take you.This gripping fiction will mesmerize you.This spellbinding book will take you.This captivating prose will mesmerize you.This gripping book will keep you.This intriguing work will captivate you.This spellbinding story will keep you.This unputdownable story will captivate you.This mesmerizing work will leave you.This spellbinding book will mesmerize you.This entertaining narrative will keep you.This gripping work will keep you.This spellbinding prose will transport you.This captivating literature will captivate you.This intriguing tale will leave a lasting impression on you.This compelling novel will leave a lasting impression on you.This intriguing prose will leave you.This gripping literature will take you.",
  },
  {
    id: "fc6b0447-989d-4d39-ba2e-35ffb0e976e2",
    title: "Opportunities in Engineering",
    image:
      "https://www.gutenberg.org/cache/epub/24681/pg24681.cover.medium.jpg",
    author: "Horton, Charles M. (Charles Marcus)",
    category: "technology",
    sample:
      "This compelling fiction will take you.This compelling literature will take you.This spellbinding fiction will leave you.",
    discription:
      "This entertaining story will keep you.This unputdownable book will take you.This thought-provoking story will mesmerize you.This compelling narrative will keep you.This entertaining narrative will transport you.This captivating fiction will take you.This compelling novel will mesmerize you.This gripping novel will keep you.This captivating work will leave a lasting impression on you.This mesmerizing novel will mesmerize you.This fascinating prose will captivate you.This gripping narrative will transport you.This fascinating literature will take you.This compelling literature will leave a lasting impression on you.This mesmerizing story will leave a lasting impression on you.This fascinating tale will captivate you.This spellbinding book will leave a lasting impression on you.This spellbinding tale will mesmerize you.This thought-provoking story will captivate you.This unputdownable tale will leave you.",
  },
  {
    id: "acd30a63-2258-45c6-a674-003e1754bdfd",
    title:
      "Bloodletting Instruments in the National Museum of History and Technology",
    image:
      "https://www.gutenberg.org/cache/epub/33102/pg33102.cover.medium.jpg",
    author: "Appel, Toby A.",
    category: "technology",
    sample:
      "This captivating work will leave a lasting impression on you.This entertaining work will keep you.This mesmerizing work will leave a lasting impression on you.",
    discription:
      "This spellbinding story will keep you.This intriguing book will mesmerize you.This fascinating prose will take you.This spellbinding work will leave you.This intriguing literature will take you.This thought-provoking story will keep you.This captivating novel will leave a lasting impression on you.This captivating novel will leave you.This intriguing tale will transport you.This fascinating book will leave you.This intriguing book will take you.This intriguing literature will leave you.This compelling narrative will transport you.This unputdownable fiction will leave you.This entertaining work will captivate you.This compelling work will mesmerize you.This gripping fiction will mesmerize you.This gripping prose will mesmerize you.This unputdownable tale will leave you.This compelling fiction will captivate you.",
  },
  {
    id: "127b2ce4-e19c-4317-bc9f-2044e0479d77",
    title: "Philippine Mats: Philippine Craftsman Reprint Series No. 1",
    image:
      "https://www.gutenberg.org/cache/epub/30850/pg30850.cover.medium.jpg",
    author: "Philippines. Bureau of Education",
    category: "technology",
    sample:
      "This intriguing tale will transport you.This spellbinding narrative will leave you.This entertaining literature will captivate you.",
    discription:
      "This unputdownable story will mesmerize you.This fascinating narrative will captivate you.This spellbinding narrative will transport you.This compelling story will take you.This entertaining prose will leave you.This unputdownable work will mesmerize you.This gripping prose will captivate you.This entertaining tale will leave a lasting impression on you.This thought-provoking book will leave a lasting impression on you.This fascinating tale will take you.This unputdownable story will keep you.This compelling book will captivate you.This thought-provoking literature will mesmerize you.This compelling work will leave a lasting impression on you.This thought-provoking novel will transport you.This mesmerizing fiction will keep you.This unputdownable fiction will leave a lasting impression on you.This fascinating work will mesmerize you.This entertaining prose will mesmerize you.This compelling novel will keep you.",
  },
  {
    id: "b4b950de-c055-4490-af7d-b38db0a8d20c",
    title: "Mission Furniture: How to Make It, Part 2",
    image:
      "https://www.gutenberg.org/cache/epub/23991/pg23991.cover.medium.jpg",
    author: "Windsor, H. H. (Henry Haven)",
    category: "technology",
    sample:
      "This mesmerizing novel will mesmerize you.This compelling novel will leave you.This unputdownable novel will transport you.",
    discription:
      "This unputdownable book will leave you.This fascinating narrative will transport you.This entertaining prose will keep you.This unputdownable novel will take you.This captivating novel will captivate you.This gripping story will leave a lasting impression on you.This thought-provoking story will leave you.This thought-provoking novel will keep you.This mesmerizing literature will leave a lasting impression on you.This compelling tale will captivate you.This captivating novel will mesmerize you.This spellbinding story will leave you.This fascinating story will leave you.This spellbinding book will leave you.This entertaining book will mesmerize you.This captivating fiction will leave a lasting impression on you.This entertaining book will transport you.This unputdownable fiction will transport you.This fascinating novel will take you.This fascinating fiction will take you.",
  },
  {
    id: "80361767-026a-49bc-99c6-66a1eae939bf",
    title: "A Room with a View",
    image: "https://www.gutenberg.org/cache/epub/2641/pg2641.cover.medium.jpg",
    author: "Forster, E. M. (Edward Morgan)",
    category: "stories",
    sample:
      "This unputdownable tale will captivate you.This intriguing fiction will leave a lasting impression on you.This spellbinding fiction will keep you.",
    discription:
      "This unputdownable tale will keep you.This spellbinding work will leave a lasting impression on you.This thought-provoking fiction will leave you.This unputdownable work will leave a lasting impression on you.This entertaining work will take you.This compelling literature will take you.This unputdownable work will mesmerize you.This unputdownable book will keep you.This entertaining book will transport you.This captivating fiction will take you.This mesmerizing fiction will captivate you.This compelling novel will take you.This entertaining book will keep you.This gripping novel will leave you.This fascinating story will mesmerize you.This entertaining prose will leave you.This entertaining prose will captivate you.This entertaining novel will mesmerize you.This unputdownable fiction will mesmerize you.This thought-provoking literature will leave you.",
  },
  {
    id: "577a44de-ca6b-4553-a7f9-8fe1d4265a51",
    title: "Middlemarch",
    image: "https://www.gutenberg.org/cache/epub/145/pg145.cover.medium.jpg",
    author: "Eliot, George",
    category: "stories",
    sample:
      "This fascinating narrative will transport you.This mesmerizing story will leave you.This entertaining tale will mesmerize you.",
    discription:
      "This mesmerizing book will take you.This mesmerizing prose will take you.This gripping narrative will keep you.This fascinating narrative will mesmerize you.This compelling book will take you.This thought-provoking book will transport you.This entertaining fiction will mesmerize you.This fascinating tale will leave you.This unputdownable story will take you.This spellbinding tale will leave you.This fascinating narrative will take you.This intriguing story will leave a lasting impression on you.This intriguing novel will leave a lasting impression on you.This captivating prose will mesmerize you.This fascinating novel will transport you.This mesmerizing book will leave a lasting impression on you.This gripping narrative will transport you.This compelling narrative will keep you.This mesmerizing fiction will take you.This thought-provoking literature will leave you.",
  },
  {
    id: "2d50d138-4fd3-4ac3-8673-2c34b769d095",
    title: "Moby Dick; Or, The Whale",
    image: "https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg",
    author: "Melville, Herman",
    category: "stories",
    sample:
      "This spellbinding narrative will leave a lasting impression on you.This fascinating story will take you.This entertaining fiction will leave a lasting impression on you.",
    discription:
      "This mesmerizing fiction will take you.This mesmerizing novel will leave you.This captivating literature will captivate you.This unputdownable story will leave you.This gripping story will take you.This mesmerizing literature will captivate you.This thought-provoking tale will keep you.This entertaining work will leave a lasting impression on you.This mesmerizing work will take you.This entertaining fiction will take you.This fascinating fiction will take you.This spellbinding story will leave a lasting impression on you.This gripping novel will transport you.This thought-provoking fiction will keep you.This unputdownable narrative will transport you.This mesmerizing narrative will mesmerize you.This mesmerizing novel will leave a lasting impression on you.This mesmerizing narrative will captivate you.This fascinating narrative will transport you.This fascinating fiction will leave a lasting impression on you.",
  },
  {
    id: "a192c6a1-f5ff-430f-a635-6b35ed03f496",
    title: "The Enchanted April",
    image:
      "https://www.gutenberg.org/cache/epub/16389/pg16389.cover.medium.jpg",
    author: "Von Arnim, Elizabeth",
    category: "stories",
    sample:
      "This fascinating narrative will captivate you.This compelling work will keep you.This gripping novel will keep you.",
    discription:
      "This compelling book will leave you.This captivating fiction will leave a lasting impression on you.This thought-provoking book will mesmerize you.This intriguing book will leave a lasting impression on you.This gripping book will keep you.This fascinating book will leave a lasting impression on you.This gripping tale will mesmerize you.This entertaining fiction will mesmerize you.This fascinating tale will mesmerize you.This compelling literature will captivate you.This compelling fiction will mesmerize you.This captivating prose will captivate you.This thought-provoking literature will transport you.This thought-provoking tale will leave you.This mesmerizing book will take you.This intriguing prose will captivate you.This fascinating fiction will leave a lasting impression on you.This entertaining fiction will captivate you.This gripping work will leave you.This gripping literature will mesmerize you.",
  },
  {
    id: "e483099e-81bb-45fa-8f18-8cfa686aeea7",
    title: "The Adventures of Ferdinand Count Fathom \u2014 Complete",
    image: "https://www.gutenberg.org/cache/epub/6761/pg6761.cover.medium.jpg",
    author: "Smollett, T. (Tobias)",
    category: "stories",
    sample:
      "This entertaining novel will captivate you.This intriguing fiction will take you.This compelling tale will keep you.",
    discription:
      "This mesmerizing tale will mesmerize you.This unputdownable narrative will keep you.This captivating prose will take you.This gripping literature will leave you.This entertaining book will keep you.This entertaining book will mesmerize you.This captivating book will captivate you.This fascinating prose will leave a lasting impression on you.This gripping work will captivate you.This compelling fiction will transport you.This gripping story will transport you.This gripping novel will leave a lasting impression on you.This gripping narrative will leave you.This spellbinding novel will take you.This intriguing novel will leave a lasting impression on you.This intriguing literature will captivate you.This fascinating narrative will leave a lasting impression on you.This unputdownable tale will transport you.This mesmerizing novel will leave a lasting impression on you.This unputdownable novel will leave a lasting impression on you.",
  },
  {
    id: "cdfe20bf-46fd-4644-beb4-c4ce1a7810a6",
    title: "The Adventures of Roderick Random",
    image: "https://www.gutenberg.org/cache/epub/4085/pg4085.cover.medium.jpg",
    author: "Smollett, T. (Tobias)",
    category: "stories",
    sample:
      "This captivating prose will captivate you.This captivating work will leave you.This gripping fiction will transport you.",
    discription:
      "This entertaining book will take you.This thought-provoking prose will take you.This spellbinding fiction will take you.This spellbinding work will mesmerize you.This gripping literature will take you.This spellbinding story will keep you.This mesmerizing prose will transport you.This spellbinding prose will leave a lasting impression on you.This fascinating book will take you.This captivating fiction will mesmerize you.This gripping literature will leave you.This gripping book will keep you.This gripping literature will captivate you.This intriguing prose will transport you.This compelling tale will leave a lasting impression on you.This entertaining tale will mesmerize you.This mesmerizing novel will leave a lasting impression on you.This mesmerizing tale will leave a lasting impression on you.This fascinating story will keep you.This unputdownable narrative will transport you.",
  },
  {
    id: "650def1a-d55b-44af-8676-d098b493ead8",
    title: "History of Tom Jones, a Foundling",
    image: "https://www.gutenberg.org/cache/epub/6593/pg6593.cover.medium.jpg",
    author: "Fielding, Henry",
    category: "stories",
    sample:
      "This compelling book will leave a lasting impression on you.This entertaining book will keep you.This compelling fiction will take you.",
    discription:
      "This mesmerizing fiction will take you.This thought-provoking tale will leave you.This gripping story will transport you.This entertaining book will captivate you.This gripping prose will captivate you.This unputdownable narrative will leave a lasting impression on you.This fascinating literature will captivate you.This fascinating prose will keep you.This compelling narrative will captivate you.This thought-provoking book will transport you.This gripping story will leave a lasting impression on you.This mesmerizing novel will mesmerize you.This thought-provoking work will captivate you.This mesmerizing work will leave you.This captivating fiction will take you.This fascinating work will captivate you.This thought-provoking narrative will leave a lasting impression on you.This mesmerizing narrative will leave you.This compelling prose will keep you.This spellbinding fiction will take you.",
  },
  {
    id: "d701400f-daa8-4847-8c5d-2af21d7924f5",
    title: "Pride and Prejudice",
    image: "https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg",
    author: "Austen, Jane",
    category: "stories",
    sample:
      "This thought-provoking prose will take you.This spellbinding prose will mesmerize you.This compelling fiction will transport you.",
    discription:
      "This unputdownable prose will captivate you.This unputdownable literature will take you.This mesmerizing prose will leave a lasting impression on you.This thought-provoking prose will captivate you.This captivating work will take you.This unputdownable prose will mesmerize you.This thought-provoking narrative will captivate you.This mesmerizing book will captivate you.This compelling novel will take you.This mesmerizing work will transport you.This thought-provoking tale will transport you.This unputdownable narrative will take you.This intriguing narrative will take you.This unputdownable fiction will leave a lasting impression on you.This entertaining tale will keep you.This unputdownable work will leave you.This thought-provoking narrative will captivate you.This mesmerizing narrative will leave a lasting impression on you.This thought-provoking tale will take you.This unputdownable prose will keep you.",
  },
  {
    id: "57ebf9f5-ad2b-4d26-850f-7042469718b7",
    title: "Alice's Adventures in Wonderland",
    image: "https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg",
    author: "Carroll, Lewis",
    category: "stories",
    sample:
      "This mesmerizing prose will leave a lasting impression on you.This gripping tale will leave you.This fascinating tale will leave you.",
    discription:
      "This captivating literature will transport you.This spellbinding fiction will leave a lasting impression on you.This captivating novel will leave a lasting impression on you.This intriguing novel will mesmerize you.This captivating literature will leave you.This captivating literature will transport you.This thought-provoking story will leave you.This mesmerizing novel will transport you.This thought-provoking literature will mesmerize you.This entertaining fiction will take you.This mesmerizing book will transport you.This fascinating novel will leave you.This captivating book will mesmerize you.This compelling fiction will transport you.This unputdownable literature will leave a lasting impression on you.This fascinating story will mesmerize you.This compelling prose will leave you.This intriguing work will take you.This unputdownable fiction will captivate you.This spellbinding prose will keep you.",
  },
  {
    id: "a56e3c82-fcde-465e-8115-dcb97c35bda5",
    title: "A Tale of Two Cities",
    image: "https://www.gutenberg.org/cache/epub/98/pg98.cover.medium.jpg",
    author: "Dickens, Charles",
    category: "stories",
    sample:
      "This captivating novel will leave you.This captivating fiction will take you.This thought-provoking prose will leave a lasting impression on you.",
    discription:
      "This compelling narrative will leave a lasting impression on you.This entertaining novel will leave you.This spellbinding novel will leave a lasting impression on you.This entertaining novel will leave you.This mesmerizing work will take you.This compelling fiction will captivate you.This thought-provoking prose will mesmerize you.This unputdownable fiction will mesmerize you.This captivating work will captivate you.This unputdownable narrative will keep you.This entertaining novel will take you.This gripping prose will leave a lasting impression on you.This thought-provoking prose will captivate you.This fascinating work will mesmerize you.This compelling narrative will take you.This entertaining narrative will transport you.This thought-provoking fiction will transport you.This gripping narrative will leave a lasting impression on you.This intriguing work will captivate you.This gripping prose will keep you.",
  },
  {
    id: "2f3d9ce2-adb5-47dc-9067-35726edb0b7f",
    title: "The Adventures of Sherlock Holmes",
    image: "https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg",
    author: "Doyle, Arthur Conan",
    category: "stories",
    sample:
      "This spellbinding story will leave a lasting impression on you.This compelling work will leave you.This mesmerizing novel will transport you.",
    discription:
      "This compelling prose will captivate you.This intriguing prose will keep you.This gripping literature will captivate you.This thought-provoking novel will transport you.This fascinating work will take you.This intriguing fiction will leave you.This intriguing work will captivate you.This entertaining fiction will take you.This captivating novel will leave you.This entertaining prose will captivate you.This spellbinding tale will mesmerize you.This gripping fiction will take you.This entertaining prose will captivate you.This gripping story will keep you.This intriguing story will leave a lasting impression on you.This intriguing literature will leave a lasting impression on you.This thought-provoking novel will take you.This intriguing book will mesmerize you.This spellbinding story will keep you.This unputdownable work will keep you.",
  },
  {
    id: "3bda59ae-eda1-4cc8-8690-7db518a23d16",
    title: "Jane Eyre: An Autobiography",
    image: "https://www.gutenberg.org/cache/epub/1260/pg1260.cover.medium.jpg",
    author: "Bront\u00eb, Charlotte",
    category: "stories",
    sample:
      "This intriguing fiction will take you.This compelling story will captivate you.This thought-provoking prose will keep you.",
    discription:
      "This entertaining prose will captivate you.This compelling tale will transport you.This fascinating book will captivate you.This unputdownable tale will transport you.This mesmerizing tale will mesmerize you.This mesmerizing work will take you.This compelling story will mesmerize you.This compelling narrative will take you.This unputdownable narrative will leave a lasting impression on you.This fascinating story will transport you.This mesmerizing novel will leave you.This fascinating work will captivate you.This thought-provoking fiction will take you.This intriguing narrative will captivate you.This captivating work will keep you.This entertaining fiction will leave a lasting impression on you.This spellbinding fiction will leave you.This compelling narrative will keep you.This captivating prose will keep you.This mesmerizing story will leave a lasting impression on you.",
  },
  {
    id: "4312e45a-b059-4494-88c4-4a954f280cb0",
    title: "Adventures of Huckleberry Finn",
    image: "https://www.gutenberg.org/cache/epub/76/pg76.cover.medium.jpg",
    author: "Twain, Mark",
    category: "stories",
    sample:
      "This unputdownable prose will mesmerize you.This compelling prose will keep you.This compelling fiction will keep you.",
    discription:
      "This entertaining narrative will leave you.This thought-provoking book will mesmerize you.This mesmerizing tale will take you.This intriguing prose will leave you.This spellbinding narrative will mesmerize you.This thought-provoking literature will take you.This unputdownable prose will take you.This fascinating tale will captivate you.This mesmerizing narrative will leave a lasting impression on you.This captivating prose will leave a lasting impression on you.This unputdownable tale will mesmerize you.This intriguing literature will leave you.This fascinating story will captivate you.This thought-provoking novel will leave a lasting impression on you.This captivating fiction will keep you.This intriguing novel will transport you.This compelling fiction will keep you.This unputdownable novel will leave a lasting impression on you.This captivating prose will leave you.This compelling literature will leave a lasting impression on you.",
  },
  {
    id: "c1e63083-52eb-4a4a-8786-d6c06e6a7ceb",
    title: "Crime and Punishment",
    image: "https://www.gutenberg.org/cache/epub/2554/pg2554.cover.medium.jpg",
    author: "Dostoyevsky, Fyodor",
    category: "stories",
    sample:
      "This captivating book will transport you.This unputdownable novel will transport you.This intriguing story will take you.",
    discription:
      "This captivating book will keep you.This spellbinding novel will keep you.This entertaining novel will keep you.This unputdownable story will mesmerize you.This spellbinding work will transport you.This spellbinding tale will mesmerize you.This unputdownable fiction will mesmerize you.This unputdownable tale will captivate you.This compelling work will leave a lasting impression on you.This intriguing story will transport you.This gripping work will take you.This mesmerizing fiction will keep you.This spellbinding literature will leave you.This spellbinding work will take you.This unputdownable novel will take you.This captivating narrative will keep you.This entertaining work will captivate you.This captivating novel will keep you.This unputdownable book will take you.This thought-provoking work will leave you.",
  },
  {
    id: "2bb3049a-f9e8-4f8e-bdab-e32f3e230bd0",
    title: "A Christmas Carol in Prose; Being a Ghost Story of Christmas",
    image: "https://www.gutenberg.org/cache/epub/46/pg46.cover.medium.jpg",
    author: "Dickens, Charles",
    category: "stories",
    sample:
      "This thought-provoking novel will captivate you.This compelling tale will mesmerize you.This gripping literature will transport you.",
    discription:
      "This captivating literature will captivate you.This fascinating narrative will captivate you.This fascinating fiction will take you.This compelling narrative will leave you.This gripping story will leave you.This compelling literature will leave you.This spellbinding tale will take you.This thought-provoking work will keep you.This entertaining fiction will keep you.This intriguing prose will take you.This entertaining narrative will keep you.This intriguing work will leave you.This gripping prose will transport you.This captivating book will keep you.This thought-provoking novel will take you.This entertaining narrative will keep you.This captivating work will leave you.This intriguing literature will take you.This spellbinding narrative will mesmerize you.This compelling work will leave a lasting impression on you.",
  },
  {
    id: "ccb0be2a-b595-4064-9802-6603b04f0e51",
    title: "The Count of Monte Cristo, Illustrated",
    image: "https://www.gutenberg.org/cache/epub/1184/pg1184.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "stories",
    sample:
      "This mesmerizing book will captivate you.This intriguing tale will leave a lasting impression on you.This entertaining story will take you.",
    discription:
      "This unputdownable tale will mesmerize you.This gripping book will captivate you.This fascinating book will leave a lasting impression on you.This entertaining fiction will captivate you.This thought-provoking narrative will captivate you.This captivating story will take you.This fascinating tale will captivate you.This thought-provoking narrative will transport you.This intriguing fiction will leave you.This entertaining book will keep you.This thought-provoking book will mesmerize you.This entertaining narrative will mesmerize you.This captivating book will leave you.This entertaining story will transport you.This spellbinding fiction will leave you.This mesmerizing literature will captivate you.This thought-provoking novel will leave a lasting impression on you.This unputdownable narrative will transport you.This gripping novel will mesmerize you.This fascinating work will keep you.",
  },
  {
    id: "d5756ea7-b2d7-4d60-8d5d-497690225252",
    title: "War and Peace",
    image: "https://www.gutenberg.org/cache/epub/2600/pg2600.cover.medium.jpg",
    author: "Tolstoy, Leo, graf",
    category: "stories",
    sample:
      "This entertaining book will transport you.This unputdownable literature will captivate you.This entertaining book will leave you.",
    discription:
      "This compelling narrative will captivate you.This intriguing prose will leave you.This thought-provoking book will mesmerize you.This fascinating book will take you.This unputdownable novel will transport you.This fascinating prose will mesmerize you.This gripping narrative will transport you.This thought-provoking novel will mesmerize you.This compelling prose will leave a lasting impression on you.This gripping tale will mesmerize you.This intriguing narrative will leave you.This intriguing narrative will take you.This captivating work will leave a lasting impression on you.This gripping novel will take you.This gripping narrative will transport you.This entertaining fiction will transport you.This entertaining fiction will leave a lasting impression on you.This entertaining narrative will captivate you.This fascinating work will keep you.This unputdownable tale will leave you.",
  },
  {
    id: "bdf91d72-aa01-4601-815f-7cbe16d254db",
    title: "Dubliners",
    image: "https://www.gutenberg.org/cache/epub/2814/pg2814.cover.medium.jpg",
    author: "Joyce, James",
    category: "stories",
    sample:
      "This entertaining narrative will transport you.This fascinating prose will keep you.This entertaining book will leave you.",
    discription:
      "This thought-provoking fiction will leave you.This unputdownable story will captivate you.This entertaining work will leave a lasting impression on you.This entertaining story will mesmerize you.This unputdownable prose will leave a lasting impression on you.This captivating narrative will mesmerize you.This compelling narrative will take you.This gripping work will keep you.This mesmerizing fiction will keep you.This mesmerizing work will leave you.This compelling story will captivate you.This thought-provoking story will keep you.This gripping fiction will mesmerize you.This intriguing book will leave you.This thought-provoking novel will leave a lasting impression on you.This entertaining fiction will captivate you.This compelling work will transport you.This fascinating fiction will transport you.This entertaining narrative will leave you.This spellbinding novel will keep you.",
  },
  {
    id: "12edcb56-8c88-490f-8fa8-406e81544526",
    title: "The War of the Worlds",
    image: "https://www.gutenberg.org/cache/epub/36/pg36.cover.medium.jpg",
    author: "Wells, H. G. (Herbert George)",
    category: "stories",
    sample:
      "This unputdownable prose will captivate you.This entertaining narrative will transport you.This gripping work will transport you.",
    discription:
      "This intriguing book will leave a lasting impression on you.This gripping novel will transport you.This gripping prose will captivate you.This entertaining tale will transport you.This gripping narrative will keep you.This spellbinding tale will transport you.This intriguing narrative will take you.This fascinating book will leave a lasting impression on you.This unputdownable literature will captivate you.This fascinating narrative will transport you.This captivating narrative will keep you.This intriguing novel will take you.This thought-provoking book will mesmerize you.This fascinating tale will leave a lasting impression on you.This fascinating book will take you.This intriguing narrative will leave you.This compelling prose will transport you.This fascinating story will leave you.This captivating novel will transport you.This spellbinding novel will transport you.",
  },
  {
    id: "a3ff8f21-157d-4517-aa4d-1a6e38816a8b",
    title: "Wuthering Heights",
    image: "https://www.gutenberg.org/cache/epub/768/pg768.cover.medium.jpg",
    author: "Bront\u00eb, Emily",
    category: "stories",
    sample:
      "This entertaining novel will keep you.This unputdownable narrative will captivate you.This gripping story will leave a lasting impression on you.",
    discription:
      "This intriguing story will captivate you.This thought-provoking prose will captivate you.This entertaining book will take you.This compelling literature will mesmerize you.This fascinating book will leave you.This captivating literature will mesmerize you.This gripping tale will take you.This unputdownable story will keep you.This entertaining prose will leave you.This entertaining work will mesmerize you.This spellbinding novel will leave you.This spellbinding literature will take you.This unputdownable tale will captivate you.This unputdownable prose will captivate you.This entertaining tale will take you.This entertaining narrative will leave a lasting impression on you.This gripping prose will mesmerize you.This captivating tale will keep you.This mesmerizing book will captivate you.This thought-provoking work will leave a lasting impression on you.",
  },
  {
    id: "e26cd809-7e3d-437d-865e-580c973c3d27",
    title: "The Adventures of Tom Sawyer, Complete",
    image: "https://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg",
    author: "Twain, Mark",
    category: "stories",
    sample:
      "This spellbinding literature will mesmerize you.This captivating literature will mesmerize you.This intriguing work will transport you.",
    discription:
      "This intriguing literature will keep you.This fascinating literature will captivate you.This captivating novel will take you.This captivating novel will transport you.This intriguing narrative will take you.This captivating book will captivate you.This captivating prose will mesmerize you.This captivating story will leave you.This captivating story will take you.This captivating book will keep you.This intriguing novel will captivate you.This fascinating narrative will mesmerize you.This spellbinding work will leave you.This spellbinding book will mesmerize you.This unputdownable novel will transport you.This fascinating prose will captivate you.This thought-provoking fiction will keep you.This mesmerizing narrative will keep you.This thought-provoking narrative will leave a lasting impression on you.This spellbinding literature will take you.",
  },
  {
    id: "0715a666-dc46-4e61-8fab-375ee6b7bb5f",
    title: "Treasure Island",
    image: "https://www.gutenberg.org/cache/epub/120/pg120.cover.medium.jpg",
    author: "Stevenson, Robert Louis",
    category: "stories",
    sample:
      "This unputdownable novel will mesmerize you.This captivating prose will transport you.This gripping literature will take you.",
    discription:
      "This spellbinding work will leave you.This entertaining fiction will keep you.This thought-provoking prose will transport you.This gripping literature will mesmerize you.This fascinating fiction will transport you.This entertaining prose will leave you.This unputdownable novel will transport you.This unputdownable story will captivate you.This mesmerizing book will leave you.This thought-provoking work will captivate you.This gripping story will leave you.This captivating fiction will keep you.This entertaining prose will keep you.This gripping novel will keep you.This entertaining literature will keep you.This spellbinding tale will captivate you.This intriguing literature will leave you.This gripping work will take you.This compelling tale will mesmerize you.This fascinating tale will captivate you.",
  },
  {
    id: "68caa9af-93b9-4905-bb21-cb977b7dfeb3",
    title: "The Romance of Lust: A classic Victorian erotic novel",
    image:
      "https://www.gutenberg.org/cache/epub/30254/pg30254.cover.medium.jpg",
    author: "Anonymous",
    category: "stories",
    sample:
      "This spellbinding fiction will transport you.This thought-provoking fiction will take you.This compelling work will mesmerize you.",
    discription:
      "This unputdownable tale will mesmerize you.This gripping literature will leave a lasting impression on you.This gripping work will transport you.This spellbinding work will take you.This thought-provoking tale will keep you.This gripping tale will mesmerize you.This gripping fiction will transport you.This compelling story will captivate you.This compelling work will captivate you.This mesmerizing prose will leave a lasting impression on you.This compelling story will captivate you.This fascinating novel will transport you.This unputdownable prose will captivate you.This entertaining literature will transport you.This spellbinding novel will leave a lasting impression on you.This spellbinding tale will captivate you.This mesmerizing book will leave a lasting impression on you.This mesmerizing fiction will take you.This unputdownable fiction will mesmerize you.This intriguing prose will take you.",
  },
  {
    id: "ad816e99-c0e2-4b3f-9f4a-e98377e62044",
    title: "The Hound of the Baskervilles",
    image: "https://www.gutenberg.org/cache/epub/2852/pg2852.cover.medium.jpg",
    author: "Doyle, Arthur Conan",
    category: "stories",
    sample:
      "This unputdownable fiction will captivate you.This intriguing story will leave a lasting impression on you.This unputdownable fiction will leave you.",
    discription:
      "This entertaining work will mesmerize you.This spellbinding story will leave a lasting impression on you.This entertaining story will mesmerize you.This compelling novel will keep you.This spellbinding book will leave a lasting impression on you.This spellbinding fiction will captivate you.This fascinating story will transport you.This captivating story will keep you.This entertaining literature will leave a lasting impression on you.This unputdownable tale will mesmerize you.This unputdownable book will transport you.This mesmerizing narrative will leave a lasting impression on you.This mesmerizing story will leave a lasting impression on you.This mesmerizing work will captivate you.This entertaining prose will mesmerize you.This unputdownable book will keep you.This compelling narrative will keep you.This gripping narrative will keep you.This thought-provoking prose will leave you.This gripping story will take you.",
  },
  {
    id: "647770df-f98f-47ec-a4c5-522209f14f7d",
    title: "Anna Karenina",
    image: "https://www.gutenberg.org/cache/epub/1399/pg1399.cover.medium.jpg",
    author: "Tolstoy, Leo, graf",
    category: "stories",
    sample:
      "This thought-provoking narrative will mesmerize you.This fascinating narrative will captivate you.This compelling work will keep you.",
    discription:
      "This compelling fiction will keep you.This entertaining novel will leave you.This fascinating literature will leave a lasting impression on you.This gripping novel will captivate you.This intriguing story will leave you.This spellbinding book will keep you.This thought-provoking novel will mesmerize you.This captivating story will keep you.This mesmerizing book will captivate you.This intriguing book will take you.This gripping work will mesmerize you.This compelling prose will leave you.This mesmerizing story will take you.This compelling prose will keep you.This intriguing tale will take you.This gripping story will captivate you.This intriguing book will keep you.This intriguing work will leave a lasting impression on you.This intriguing literature will mesmerize you.This captivating narrative will transport you.",
  },
  {
    id: "2dd0d56d-0aa0-4694-8544-be33b2c50399",
    title: "Emma",
    image: "https://www.gutenberg.org/cache/epub/158/pg158.cover.medium.jpg",
    author: "Austen, Jane",
    category: "stories",
    sample:
      "This entertaining tale will leave you.This fascinating narrative will mesmerize you.This entertaining book will take you.",
    discription:
      "This fascinating tale will mesmerize you.This unputdownable fiction will leave a lasting impression on you.This intriguing story will take you.This mesmerizing prose will leave you.This entertaining narrative will captivate you.This gripping literature will leave a lasting impression on you.This captivating literature will leave a lasting impression on you.This thought-provoking fiction will leave you.This unputdownable narrative will transport you.This thought-provoking story will transport you.This compelling fiction will captivate you.This entertaining work will keep you.This entertaining book will keep you.This mesmerizing story will keep you.This fascinating narrative will take you.This captivating tale will transport you.This spellbinding tale will transport you.This fascinating work will take you.This intriguing book will take you.This compelling literature will keep you.",
  },
  {
    id: "f10f99f9-e57c-44e5-bdc7-b698ae5f9070",
    title: "A Study in Scarlet",
    image: "https://www.gutenberg.org/cache/epub/244/pg244.cover.medium.jpg",
    author: "Doyle, Arthur Conan",
    category: "stories",
    sample:
      "This gripping novel will leave you.This mesmerizing story will leave a lasting impression on you.This compelling work will mesmerize you.",
    discription:
      "This entertaining work will captivate you.This fascinating story will captivate you.This unputdownable narrative will mesmerize you.This thought-provoking work will leave a lasting impression on you.This intriguing novel will keep you.This thought-provoking work will captivate you.This mesmerizing work will mesmerize you.This spellbinding literature will transport you.This gripping literature will leave a lasting impression on you.This mesmerizing work will leave you.This thought-provoking narrative will leave a lasting impression on you.This fascinating story will transport you.This fascinating prose will captivate you.This gripping book will captivate you.This spellbinding narrative will captivate you.This compelling book will leave a lasting impression on you.This captivating literature will keep you.This captivating book will captivate you.This compelling fiction will take you.This entertaining work will leave a lasting impression on you.",
  },
  {
    id: "30acf06a-7ea0-41a3-bd9a-7c3a275795b2",
    title: "The Call of the Wild",
    image: "https://www.gutenberg.org/cache/epub/215/pg215.cover.medium.jpg",
    author: "London, Jack",
    category: "stories",
    sample:
      "This fascinating book will keep you.This mesmerizing story will take you.This gripping work will transport you.",
    discription:
      "This thought-provoking story will leave you.This gripping literature will keep you.This spellbinding story will leave you.This captivating literature will keep you.This gripping work will take you.This mesmerizing prose will take you.This intriguing narrative will transport you.This captivating fiction will take you.This mesmerizing story will transport you.This thought-provoking prose will keep you.This gripping literature will take you.This spellbinding narrative will transport you.This gripping literature will take you.This compelling literature will keep you.This compelling book will take you.This fascinating literature will keep you.This fascinating narrative will leave you.This unputdownable narrative will take you.This thought-provoking fiction will transport you.This compelling work will leave you.",
  },
  {
    id: "ffddea1c-2170-4915-ab67-8c7beb32861d",
    title: "Sense and Sensibility",
    image: "https://www.gutenberg.org/cache/epub/161/pg161.cover.medium.jpg",
    author: "Austen, Jane",
    category: "stories",
    sample:
      "This compelling work will transport you.This gripping tale will leave you.This fascinating prose will mesmerize you.",
    discription:
      "This fascinating literature will transport you.This gripping fiction will keep you.This entertaining story will mesmerize you.This entertaining literature will captivate you.This entertaining story will take you.This mesmerizing prose will mesmerize you.This spellbinding literature will keep you.This thought-provoking tale will keep you.This unputdownable narrative will take you.This mesmerizing fiction will leave a lasting impression on you.This thought-provoking work will leave you.This thought-provoking narrative will captivate you.This intriguing book will leave a lasting impression on you.This mesmerizing prose will transport you.This mesmerizing novel will keep you.This spellbinding work will take you.This fascinating narrative will captivate you.This intriguing tale will take you.This unputdownable tale will leave you.This thought-provoking story will leave you.",
  },
  {
    id: "9a18da66-5e79-4c81-9b65-e5d9548f7489",
    title: "Persuasion",
    image: "https://www.gutenberg.org/cache/epub/105/pg105.cover.medium.jpg",
    author: "Austen, Jane",
    category: "stories",
    sample:
      "This spellbinding novel will transport you.This fascinating literature will leave you.This gripping narrative will take you.",
    discription:
      "This spellbinding fiction will mesmerize you.This gripping book will leave a lasting impression on you.This mesmerizing story will transport you.This intriguing story will mesmerize you.This mesmerizing story will captivate you.This mesmerizing tale will leave you.This entertaining novel will captivate you.This unputdownable prose will keep you.This captivating tale will transport you.This spellbinding tale will transport you.This fascinating narrative will leave a lasting impression on you.This compelling prose will captivate you.This mesmerizing story will keep you.This gripping tale will transport you.This spellbinding story will take you.This compelling fiction will transport you.This captivating fiction will keep you.This intriguing work will keep you.This fascinating prose will mesmerize you.This intriguing literature will transport you.",
  },
  {
    id: "5ec0ad47-5098-4d2c-8655-a9fe20915744",
    title: "Anthem",
    image: "https://www.gutenberg.org/cache/epub/1250/pg1250.cover.medium.jpg",
    author: "Rand, Ayn",
    category: "stories",
    sample:
      "This mesmerizing work will mesmerize you.This thought-provoking prose will leave you.This entertaining book will keep you.",
    discription:
      "This intriguing literature will leave you.This compelling tale will leave you.This spellbinding prose will captivate you.This unputdownable narrative will captivate you.This compelling book will transport you.This fascinating story will captivate you.This fascinating work will take you.This entertaining narrative will take you.This mesmerizing narrative will take you.This captivating book will transport you.This spellbinding fiction will take you.This fascinating prose will captivate you.This compelling story will leave you.This gripping story will take you.This unputdownable novel will transport you.This spellbinding prose will mesmerize you.This captivating story will keep you.This thought-provoking fiction will keep you.This thought-provoking tale will transport you.This unputdownable book will keep you.",
  },
  {
    id: "4d42bc92-2112-473d-8446-5ff52d36182e",
    title: "The Jungle Book",
    image: "https://www.gutenberg.org/cache/epub/236/pg236.cover.medium.jpg",
    author: "Kipling, Rudyard",
    category: "stories",
    sample:
      "This captivating novel will keep you.This unputdownable novel will transport you.This spellbinding story will mesmerize you.",
    discription:
      "This captivating work will transport you.This unputdownable novel will leave a lasting impression on you.This intriguing novel will leave a lasting impression on you.This unputdownable literature will keep you.This thought-provoking fiction will take you.This intriguing prose will take you.This mesmerizing story will take you.This mesmerizing narrative will captivate you.This compelling literature will take you.This thought-provoking narrative will take you.This entertaining narrative will keep you.This intriguing story will keep you.This mesmerizing book will captivate you.This unputdownable fiction will leave you.This thought-provoking book will transport you.This gripping narrative will transport you.This entertaining narrative will keep you.This entertaining literature will captivate you.This thought-provoking literature will take you.This fascinating literature will transport you.",
  },
  {
    id: "dc8410da-20d7-4f20-a3cd-9f30cd2dfdfb",
    title: "The Blue Castle: a novel",
    image:
      "https://www.gutenberg.org/cache/epub/67979/pg67979.cover.medium.jpg",
    author: "Montgomery, L. M. (Lucy Maud)",
    category: "romance",
    sample:
      "This unputdownable narrative will keep you.This unputdownable prose will leave you.This unputdownable work will leave a lasting impression on you.",
    discription:
      "This thought-provoking work will mesmerize you.This gripping prose will mesmerize you.This spellbinding book will keep you.This captivating prose will leave a lasting impression on you.This gripping tale will transport you.This intriguing tale will captivate you.This captivating book will captivate you.This mesmerizing fiction will leave a lasting impression on you.This captivating book will leave you.This captivating tale will mesmerize you.This thought-provoking book will leave you.This spellbinding story will leave you.This compelling story will captivate you.This spellbinding story will leave a lasting impression on you.This unputdownable literature will captivate you.This captivating work will transport you.This mesmerizing book will mesmerize you.This thought-provoking literature will keep you.This captivating tale will leave a lasting impression on you.This unputdownable work will captivate you.",
  },
  {
    id: "058315e8-be29-4f2e-aedf-6bdcdda3f2ac",
    title: "Don Quixote",
    image: "https://www.gutenberg.org/cache/epub/996/pg996.cover.medium.jpg",
    author: "Cervantes Saavedra, Miguel de",
    category: "romance",
    sample:
      "This mesmerizing novel will transport you.This fascinating novel will mesmerize you.This intriguing novel will leave a lasting impression on you.",
    discription:
      "This unputdownable prose will leave a lasting impression on you.This entertaining tale will mesmerize you.This intriguing fiction will keep you.This mesmerizing narrative will mesmerize you.This compelling story will take you.This unputdownable fiction will take you.This intriguing narrative will mesmerize you.This entertaining prose will transport you.This unputdownable fiction will leave you.This intriguing story will keep you.This entertaining tale will keep you.This unputdownable tale will mesmerize you.This intriguing novel will leave you.This mesmerizing work will leave a lasting impression on you.This mesmerizing book will mesmerize you.This mesmerizing story will keep you.This fascinating prose will take you.This intriguing story will mesmerize you.This intriguing prose will leave you.This captivating narrative will keep you.",
  },
  {
    id: "a1be0689-2267-4e5f-ae07-49ceeb0717f9",
    title: "Le Morte d'Arthur: Volume 1",
    image: "https://www.gutenberg.org/cache/epub/1251/pg1251.cover.medium.jpg",
    author: "Malory, Thomas, Sir",
    category: "romance",
    sample:
      "This intriguing tale will mesmerize you.This unputdownable story will leave a lasting impression on you.This thought-provoking fiction will leave a lasting impression on you.",
    discription:
      "This entertaining narrative will leave a lasting impression on you.This gripping literature will take you.This spellbinding fiction will take you.This mesmerizing literature will transport you.This intriguing work will leave a lasting impression on you.This compelling story will captivate you.This thought-provoking fiction will transport you.This mesmerizing novel will take you.This captivating work will captivate you.This intriguing literature will mesmerize you.This spellbinding narrative will transport you.This thought-provoking novel will mesmerize you.This mesmerizing story will leave a lasting impression on you.This mesmerizing prose will captivate you.This compelling narrative will transport you.This gripping fiction will captivate you.This gripping book will captivate you.This captivating tale will transport you.This intriguing book will leave a lasting impression on you.This captivating story will leave you.",
  },
  {
    id: "6ab99e05-9d7b-44ec-957c-064614ea89d1",
    title: "Don Quijote",
    image: "https://www.gutenberg.org/cache/epub/2000/pg2000.cover.medium.jpg",
    author: "Cervantes Saavedra, Miguel de",
    category: "romance",
    sample:
      "This compelling story will captivate you.This unputdownable literature will transport you.This unputdownable novel will leave a lasting impression on you.",
    discription:
      "This entertaining tale will leave you.This gripping fiction will transport you.This thought-provoking novel will transport you.This spellbinding literature will keep you.This entertaining narrative will keep you.This compelling literature will leave you.This intriguing novel will mesmerize you.This captivating narrative will leave you.This captivating novel will captivate you.This unputdownable book will keep you.This fascinating work will transport you.This captivating story will keep you.This mesmerizing narrative will mesmerize you.This captivating book will mesmerize you.This captivating literature will leave a lasting impression on you.This intriguing book will captivate you.This compelling narrative will mesmerize you.This gripping prose will leave a lasting impression on you.This spellbinding novel will transport you.This mesmerizing literature will mesmerize you.",
  },
  {
    id: "86f916b4-a00c-4d2a-b098-de325dec217f",
    title: "A Connecticut Yankee in King Arthur's Court",
    image: "https://www.gutenberg.org/cache/epub/86/pg86.cover.medium.jpg",
    author: "Twain, Mark",
    category: "romance",
    sample:
      "This compelling narrative will transport you.This mesmerizing novel will leave you.This unputdownable work will keep you.",
    discription:
      "This unputdownable prose will captivate you.This compelling tale will keep you.This fascinating literature will mesmerize you.This gripping book will take you.This gripping narrative will leave a lasting impression on you.This thought-provoking book will captivate you.This compelling narrative will transport you.This spellbinding tale will keep you.This mesmerizing tale will keep you.This mesmerizing tale will take you.This thought-provoking narrative will keep you.This compelling narrative will transport you.This unputdownable narrative will take you.This fascinating prose will keep you.This unputdownable book will leave a lasting impression on you.This captivating book will leave you.This entertaining novel will transport you.This intriguing fiction will transport you.This intriguing novel will captivate you.This captivating narrative will mesmerize you.",
  },
  {
    id: "21863311-dabf-43f5-9725-61ba77c6b342",
    title: "Notre-Dame de Paris",
    image: "https://www.gutenberg.org/cache/epub/2610/pg2610.cover.medium.jpg",
    author: "Hugo, Victor",
    category: "romance",
    sample:
      "This entertaining work will take you.This captivating story will captivate you.This compelling novel will leave you.",
    discription:
      "This thought-provoking fiction will keep you.This gripping prose will leave you.This unputdownable story will take you.This compelling work will leave you.This captivating literature will captivate you.This gripping book will captivate you.This fascinating prose will mesmerize you.This spellbinding work will leave a lasting impression on you.This thought-provoking tale will keep you.This compelling fiction will transport you.This gripping narrative will captivate you.This compelling prose will take you.This spellbinding fiction will leave a lasting impression on you.This unputdownable book will mesmerize you.This spellbinding work will transport you.This mesmerizing tale will leave a lasting impression on you.This unputdownable fiction will mesmerize you.This spellbinding book will captivate you.This captivating story will transport you.This unputdownable narrative will take you.",
  },
  {
    id: "577b25a2-1fc7-4228-82e1-412cc0066252",
    title: "The Lady of the Lake",
    image: "https://www.gutenberg.org/cache/epub/3011/pg3011.cover.medium.jpg",
    author: "Scott, Walter",
    category: "romance",
    sample:
      "This mesmerizing prose will leave you.This entertaining tale will leave a lasting impression on you.This unputdownable prose will keep you.",
    discription:
      "This spellbinding narrative will leave a lasting impression on you.This intriguing novel will transport you.This compelling prose will captivate you.This spellbinding work will keep you.This fascinating literature will keep you.This fascinating tale will take you.This unputdownable fiction will captivate you.This thought-provoking prose will leave a lasting impression on you.This entertaining work will mesmerize you.This fascinating literature will take you.This intriguing fiction will transport you.This thought-provoking story will take you.This gripping tale will keep you.This thought-provoking work will leave you.This intriguing novel will take you.This mesmerizing tale will take you.This entertaining prose will leave a lasting impression on you.This captivating fiction will keep you.This thought-provoking narrative will transport you.This mesmerizing book will take you.",
  },
  {
    id: "bc5885ac-5281-4696-85f2-80eff24f6b6e",
    title: "The Legends of King Arthur and His Knights",
    image:
      "https://www.gutenberg.org/cache/epub/12753/pg12753.cover.medium.jpg",
    author: "Malory, Thomas, Sir",
    category: "romance",
    sample:
      "This unputdownable novel will leave a lasting impression on you.This gripping story will take you.This spellbinding prose will transport you.",
    discription:
      "This unputdownable novel will transport you.This compelling story will keep you.This spellbinding narrative will leave a lasting impression on you.This intriguing prose will keep you.This entertaining literature will leave you.This thought-provoking story will mesmerize you.This entertaining tale will keep you.This entertaining story will leave you.This gripping novel will captivate you.This captivating novel will take you.This fascinating work will leave you.This entertaining literature will leave you.This entertaining tale will mesmerize you.This fascinating novel will leave a lasting impression on you.This entertaining prose will take you.This spellbinding narrative will leave you.This compelling novel will leave a lasting impression on you.This intriguing story will captivate you.This thought-provoking book will leave you.This spellbinding novel will mesmerize you.",
  },
  {
    id: "5f3f3ccf-c77d-427e-b84f-1188ea2780f9",
    title: "The History of Don Quixote, Volume 1, Complete",
    image: "https://www.gutenberg.org/cache/epub/5921/pg5921.cover.medium.jpg",
    author: "Cervantes Saavedra, Miguel de",
    category: "romance",
    sample:
      "This fascinating prose will keep you.This gripping work will captivate you.This compelling novel will transport you.",
    discription:
      "This spellbinding fiction will leave a lasting impression on you.This intriguing book will keep you.This captivating novel will leave you.This intriguing fiction will captivate you.This unputdownable book will captivate you.This thought-provoking story will transport you.This gripping story will leave you.This mesmerizing book will captivate you.This gripping literature will keep you.This intriguing work will keep you.This mesmerizing prose will mesmerize you.This fascinating prose will leave you.This thought-provoking literature will captivate you.This mesmerizing novel will leave you.This captivating fiction will captivate you.This intriguing prose will leave you.This entertaining story will keep you.This fascinating story will take you.This mesmerizing work will transport you.This compelling work will keep you.",
  },
  {
    id: "a5d8db9a-7e80-418a-af7a-36ee70766041",
    title: "Le Morte d'Arthur: Volume 2",
    image: "https://www.gutenberg.org/cache/epub/1252/pg1252.cover.medium.jpg",
    author: "Malory, Thomas, Sir",
    category: "romance",
    sample:
      "This spellbinding prose will mesmerize you.This entertaining novel will captivate you.This fascinating work will transport you.",
    discription:
      "This intriguing literature will leave you.This fascinating novel will leave a lasting impression on you.This unputdownable fiction will take you.This entertaining narrative will keep you.This entertaining narrative will transport you.This captivating prose will leave a lasting impression on you.This thought-provoking book will mesmerize you.This compelling story will take you.This compelling novel will keep you.This compelling fiction will take you.This thought-provoking story will leave a lasting impression on you.This captivating literature will captivate you.This mesmerizing book will transport you.This gripping book will leave a lasting impression on you.This mesmerizing fiction will mesmerize you.This compelling book will take you.This captivating story will leave you.This fascinating fiction will mesmerize you.This intriguing work will captivate you.This compelling prose will leave you.",
  },
  {
    id: "98341184-9ded-4aa5-86c3-d3591753351f",
    title: "Four Arthurian Romances",
    image: "https://www.gutenberg.org/cache/epub/831/pg831.cover.medium.jpg",
    author: "Chr\u00e9tien, de Troyes, active 12th century",
    category: "romance",
    sample:
      "This gripping book will transport you.This intriguing story will mesmerize you.This spellbinding book will take you.",
    discription:
      "This spellbinding literature will leave a lasting impression on you.This unputdownable story will leave a lasting impression on you.This fascinating tale will captivate you.This spellbinding literature will mesmerize you.This unputdownable book will captivate you.This mesmerizing narrative will leave a lasting impression on you.This compelling work will mesmerize you.This spellbinding work will leave you.This compelling tale will leave a lasting impression on you.This mesmerizing novel will transport you.This unputdownable book will mesmerize you.This gripping literature will captivate you.This compelling tale will take you.This captivating narrative will mesmerize you.This compelling prose will leave you.This gripping prose will captivate you.This mesmerizing story will captivate you.This intriguing work will leave a lasting impression on you.This compelling work will mesmerize you.This spellbinding narrative will transport you.",
  },
  {
    id: "75d19abc-c397-45cd-a348-449d6318b975",
    title: "French Mediaeval Romances from the Lays of Marie de France",
    image:
      "https://www.gutenberg.org/cache/epub/11417/pg11417.cover.medium.jpg",
    author: "Marie, de France, active 12th century",
    category: "romance",
    sample:
      "This captivating story will leave you.This captivating novel will take you.This intriguing story will mesmerize you.",
    discription:
      "This captivating prose will captivate you.This entertaining literature will captivate you.This compelling prose will captivate you.This gripping story will take you.This gripping tale will mesmerize you.This fascinating literature will keep you.This compelling tale will take you.This entertaining book will transport you.This spellbinding literature will leave you.This gripping book will take you.This fascinating narrative will leave a lasting impression on you.This mesmerizing literature will leave you.This compelling tale will captivate you.This captivating book will leave you.This gripping book will take you.This compelling work will leave you.This intriguing book will take you.This mesmerizing novel will leave you.This unputdownable literature will leave a lasting impression on you.This gripping tale will captivate you.",
  },
  {
    id: "7bb41af1-7aac-4d92-91b2-f6963a1d1ab1",
    title: "The Romance of Tristan and Iseult",
    image:
      "https://www.gutenberg.org/cache/epub/14244/pg14244.cover.medium.jpg",
    author: "B\u00e9dier, Joseph",
    category: "romance",
    sample:
      "This spellbinding story will mesmerize you.This unputdownable novel will transport you.This entertaining literature will captivate you.",
    discription:
      "This entertaining literature will take you.This thought-provoking literature will captivate you.This compelling tale will take you.This captivating literature will keep you.This entertaining novel will leave you.This intriguing novel will leave you.This captivating literature will take you.This entertaining literature will leave a lasting impression on you.This mesmerizing tale will leave you.This unputdownable story will captivate you.This mesmerizing story will leave a lasting impression on you.This thought-provoking story will mesmerize you.This spellbinding book will leave you.This gripping literature will take you.This captivating literature will keep you.This unputdownable work will transport you.This gripping story will take you.This intriguing story will mesmerize you.This fascinating literature will captivate you.This mesmerizing fiction will take you.",
  },
  {
    id: "8276d500-54b8-4347-bc94-04f256ff0b08",
    title:
      "Le Morte Darthur: Sir Thomas Malory's Book of King Arthur and his Noble; Knights of the Round Table",
    image:
      "https://www.gutenberg.org/cache/epub/46853/pg46853.cover.medium.jpg",
    author: "Malory, Thomas, Sir",
    category: "romance",
    sample:
      "This spellbinding narrative will transport you.This unputdownable story will transport you.This thought-provoking book will mesmerize you.",
    discription:
      "This captivating work will leave you.This mesmerizing tale will transport you.This gripping prose will keep you.This compelling tale will captivate you.This gripping book will leave you.This compelling novel will keep you.This unputdownable work will captivate you.This compelling novel will captivate you.This unputdownable tale will keep you.This entertaining work will mesmerize you.This gripping story will mesmerize you.This mesmerizing fiction will captivate you.This unputdownable novel will keep you.This unputdownable tale will take you.This intriguing prose will transport you.This spellbinding narrative will keep you.This compelling narrative will leave a lasting impression on you.This mesmerizing narrative will take you.This intriguing narrative will transport you.This gripping novel will take you.",
  },
  {
    id: "dd8ee642-ce23-4dc7-b86a-3ab114299430",
    title: "The Man in the Iron Mask",
    image: "https://www.gutenberg.org/cache/epub/2759/pg2759.cover.medium.jpg",
    author: "Dumas, Alexandre",
    category: "romance",
    sample:
      "This gripping tale will keep you.This entertaining novel will captivate you.This unputdownable novel will transport you.",
    discription:
      "This compelling story will leave a lasting impression on you.This entertaining fiction will leave you.This gripping story will transport you.This gripping book will captivate you.This fascinating novel will captivate you.This unputdownable tale will keep you.This gripping novel will transport you.This thought-provoking novel will keep you.This captivating fiction will mesmerize you.This spellbinding literature will leave a lasting impression on you.This gripping novel will leave a lasting impression on you.This thought-provoking literature will transport you.This fascinating novel will mesmerize you.This entertaining novel will take you.This unputdownable tale will transport you.This compelling fiction will leave a lasting impression on you.This spellbinding story will mesmerize you.This gripping work will take you.This spellbinding tale will leave you.This thought-provoking novel will keep you.",
  },
  {
    id: "fb41cf1b-3815-4675-967c-447f5932b7e6",
    title: "Idylls of the King",
    image: "https://www.gutenberg.org/cache/epub/610/pg610.cover.medium.jpg",
    author: "Tennyson, Alfred Tennyson, Baron",
    category: "romance",
    sample:
      "This thought-provoking fiction will mesmerize you.This intriguing novel will captivate you.This captivating prose will take you.",
    discription:
      "This intriguing prose will leave a lasting impression on you.This spellbinding prose will transport you.This intriguing work will captivate you.This thought-provoking narrative will mesmerize you.This entertaining novel will keep you.This gripping tale will take you.This thought-provoking novel will captivate you.This captivating narrative will transport you.This gripping fiction will leave you.This gripping novel will leave a lasting impression on you.This thought-provoking fiction will captivate you.This thought-provoking prose will transport you.This spellbinding literature will take you.This gripping work will captivate you.This compelling work will take you.This intriguing novel will captivate you.This intriguing novel will transport you.This unputdownable narrative will take you.This captivating book will transport you.This entertaining narrative will captivate you.",
  },
  {
    id: "5c7cc6f0-f3ee-4b3c-b415-d93ed30a1c18",
    title: "Parzival: A Knightly Epic (vol. 1 of 2)",
    image:
      "https://www.gutenberg.org/cache/epub/47297/pg47297.cover.medium.jpg",
    author: "Wolfram, von Eschenbach, active 12th century",
    category: "romance",
    sample:
      "This thought-provoking tale will leave you.This mesmerizing prose will captivate you.This entertaining literature will captivate you.",
    discription:
      "This unputdownable tale will mesmerize you.This compelling book will mesmerize you.This gripping book will take you.This captivating fiction will leave you.This captivating prose will transport you.This intriguing book will transport you.This compelling narrative will leave you.This mesmerizing work will leave you.This entertaining narrative will mesmerize you.This thought-provoking fiction will transport you.This spellbinding prose will transport you.This gripping novel will take you.This fascinating novel will take you.This spellbinding fiction will leave you.This thought-provoking tale will transport you.This intriguing prose will mesmerize you.This captivating story will keep you.This gripping work will transport you.This spellbinding fiction will mesmerize you.This thought-provoking prose will transport you.",
  },
  {
    id: "ca5bc15f-0ee9-4390-81b6-76fb71c93975",
    title: "The shadow between them; $b or, A blighted name",
    image:
      "https://www.gutenberg.org/cache/epub/70010/pg70010.cover.medium.jpg",
    author: "Miller, Alex. McVeigh, Mrs.",
    category: "romance",
    sample:
      "This mesmerizing book will leave you.This thought-provoking novel will mesmerize you.This entertaining story will mesmerize you.",
    discription:
      "This unputdownable literature will take you.This thought-provoking work will keep you.This captivating narrative will captivate you.This unputdownable book will take you.This captivating fiction will captivate you.This fascinating work will leave a lasting impression on you.This fascinating book will captivate you.This thought-provoking novel will mesmerize you.This fascinating story will captivate you.This thought-provoking story will leave you.This thought-provoking work will leave you.This captivating book will transport you.This compelling work will take you.This compelling work will transport you.This captivating tale will take you.This unputdownable fiction will keep you.This gripping novel will mesmerize you.This spellbinding book will mesmerize you.This thought-provoking literature will take you.This captivating story will leave you.",
  },
  {
    id: "46ca81eb-63f7-4abb-b4b3-cdf1c0650cb1",
    title: "The History of Don Quixote, Volume 2, Complete",
    image: "https://www.gutenberg.org/cache/epub/5946/pg5946.cover.medium.jpg",
    author: "Cervantes Saavedra, Miguel de",
    category: "romance",
    sample:
      "This spellbinding novel will take you.This compelling fiction will mesmerize you.This gripping book will take you.",
    discription:
      "This captivating work will leave a lasting impression on you.This gripping literature will keep you.This compelling fiction will transport you.This intriguing story will take you.This fascinating literature will leave a lasting impression on you.This entertaining book will captivate you.This unputdownable fiction will keep you.This intriguing fiction will leave a lasting impression on you.This mesmerizing novel will leave a lasting impression on you.This intriguing fiction will leave a lasting impression on you.This spellbinding prose will keep you.This entertaining fiction will leave you.This entertaining literature will keep you.This unputdownable story will leave you.This unputdownable work will leave a lasting impression on you.This compelling narrative will mesmerize you.This gripping novel will take you.This captivating tale will leave you.This captivating novel will keep you.This mesmerizing story will captivate you.",
  },
  {
    id: "1ab34835-840d-4b44-86dd-188e5d2ee6be",
    title: "Le roman de la rose - Tome I",
    image:
      "https://www.gutenberg.org/cache/epub/16816/pg16816.cover.medium.jpg",
    author: "Jean, de Meun",
    category: "romance",
    sample:
      "This thought-provoking book will leave you.This thought-provoking story will keep you.This thought-provoking literature will captivate you.",
    discription:
      "This gripping tale will take you.This entertaining literature will leave a lasting impression on you.This gripping tale will captivate you.This compelling novel will keep you.This intriguing fiction will mesmerize you.This mesmerizing book will mesmerize you.This compelling book will leave a lasting impression on you.This entertaining novel will captivate you.This unputdownable work will keep you.This gripping fiction will captivate you.This fascinating fiction will transport you.This fascinating literature will transport you.This fascinating literature will take you.This spellbinding novel will mesmerize you.This captivating work will captivate you.This gripping story will captivate you.This spellbinding fiction will transport you.This intriguing literature will leave you.This compelling prose will keep you.This compelling prose will mesmerize you.",
  },
  {
    id: "591d0e56-4341-4561-93e5-d45f03e960fc",
    title: "Bulfinch's Mythology",
    image: "https://www.gutenberg.org/cache/epub/4928/pg4928.cover.medium.jpg",
    author: "Bulfinch, Thomas",
    category: "romance",
    sample:
      "This gripping literature will transport you.This captivating novel will transport you.This spellbinding book will take you.",
    discription:
      "This captivating tale will transport you.This entertaining book will transport you.This compelling novel will captivate you.This entertaining literature will leave you.This captivating novel will mesmerize you.This thought-provoking novel will captivate you.This fascinating book will keep you.This gripping story will leave you.This captivating fiction will captivate you.This entertaining literature will mesmerize you.This thought-provoking work will take you.This intriguing work will mesmerize you.This spellbinding tale will captivate you.This compelling story will leave you.This unputdownable tale will take you.This entertaining story will leave a lasting impression on you.This gripping prose will leave you.This gripping tale will take you.This captivating novel will keep you.This entertaining literature will leave a lasting impression on you.",
  },
  {
    id: "e7c06ecd-941a-4e00-a1b7-021e20e85482",
    title: "The Story of King Arthur and his Knights",
    image:
      "https://www.gutenberg.org/cache/epub/60184/pg60184.cover.medium.jpg",
    author: "Pyle, Howard",
    category: "romance",
    sample:
      "This intriguing novel will leave a lasting impression on you.This gripping fiction will mesmerize you.This compelling fiction will leave you.",
    discription:
      "This entertaining work will leave you.This intriguing book will captivate you.This captivating fiction will take you.This mesmerizing book will captivate you.This thought-provoking work will leave you.This mesmerizing literature will keep you.This captivating novel will captivate you.This fascinating fiction will keep you.This spellbinding work will mesmerize you.This thought-provoking novel will take you.This compelling fiction will transport you.This entertaining prose will leave you.This spellbinding literature will take you.This gripping prose will take you.This entertaining fiction will mesmerize you.This fascinating book will mesmerize you.This spellbinding tale will transport you.This intriguing literature will captivate you.This thought-provoking book will take you.This intriguing story will leave a lasting impression on you.",
  },
  {
    id: "a710413d-c2bf-4cba-966d-40dbb6c2c46e",
    title: "Notre-Dame de Paris",
    image:
      "https://www.gutenberg.org/cache/epub/19657/pg19657.cover.medium.jpg",
    author: "Hugo, Victor",
    category: "romance",
    sample:
      "This compelling novel will transport you.This gripping fiction will mesmerize you.This compelling literature will leave you.",
    discription:
      "This thought-provoking book will keep you.This captivating work will leave you.This mesmerizing story will keep you.This gripping fiction will captivate you.This thought-provoking tale will leave you.This intriguing novel will take you.This spellbinding fiction will keep you.This unputdownable work will keep you.This spellbinding tale will mesmerize you.This captivating narrative will captivate you.This fascinating work will transport you.This fascinating tale will take you.This entertaining book will leave a lasting impression on you.This spellbinding narrative will leave you.This captivating fiction will take you.This thought-provoking narrative will transport you.This entertaining prose will captivate you.This entertaining prose will leave a lasting impression on you.This unputdownable novel will transport you.This gripping story will take you.",
  },
  {
    id: "dba6e527-80c5-4d19-87b7-3ccd4a9bcbda",
    title: "King Arthur and the Knights of the Round Table",
    image:
      "https://www.gutenberg.org/cache/epub/36462/pg36462.cover.medium.jpg",
    author: "Malory, Thomas, Sir",
    category: "romance",
    sample:
      "This compelling story will keep you.This captivating narrative will take you.This thought-provoking narrative will leave a lasting impression on you.",
    discription:
      "This captivating story will keep you.This intriguing narrative will leave you.This captivating prose will leave you.This thought-provoking fiction will leave a lasting impression on you.This captivating novel will mesmerize you.This captivating prose will leave you.This mesmerizing book will transport you.This spellbinding tale will take you.This mesmerizing prose will mesmerize you.This fascinating work will take you.This captivating fiction will mesmerize you.This spellbinding book will captivate you.This entertaining fiction will take you.This compelling fiction will keep you.This spellbinding literature will captivate you.This compelling book will captivate you.This thought-provoking book will take you.This thought-provoking story will leave a lasting impression on you.This compelling literature will keep you.This mesmerizing prose will take you.",
  },
  {
    id: "4fcabadd-e5bc-4219-94ec-7e0aa61ad72c",
    title: "Orlando Furioso",
    image: "https://www.gutenberg.org/cache/epub/615/pg615.cover.medium.jpg",
    author: "Ariosto, Lodovico",
    category: "romance",
    sample:
      "This thought-provoking narrative will take you.This intriguing book will take you.This gripping fiction will take you.",
    discription:
      "This mesmerizing prose will leave a lasting impression on you.This unputdownable narrative will leave a lasting impression on you.This gripping book will mesmerize you.This spellbinding work will keep you.This compelling tale will keep you.This compelling book will take you.This compelling fiction will take you.This entertaining narrative will keep you.This intriguing fiction will captivate you.This gripping literature will captivate you.This gripping work will leave a lasting impression on you.This fascinating narrative will captivate you.This fascinating book will leave you.This thought-provoking literature will take you.This mesmerizing tale will keep you.This unputdownable fiction will mesmerize you.This gripping fiction will keep you.This entertaining book will leave a lasting impression on you.This compelling tale will mesmerize you.This compelling novel will leave you.",
  },
  {
    id: "79a379de-dc2c-4964-ba7b-ca450527c6ca",
    title: "Undine",
    image: "https://www.gutenberg.org/cache/epub/2825/pg2825.cover.medium.jpg",
    author: "La Motte-Fouqu\u00e9, Friedrich Heinrich Karl, Freiherr de",
    category: "romance",
    sample:
      "This entertaining novel will keep you.This mesmerizing prose will keep you.This unputdownable fiction will transport you.",
    discription:
      "This mesmerizing novel will keep you.This mesmerizing literature will take you.This spellbinding narrative will keep you.This entertaining work will take you.This intriguing story will mesmerize you.This thought-provoking novel will take you.This intriguing fiction will leave a lasting impression on you.This compelling story will captivate you.This fascinating narrative will take you.This spellbinding tale will take you.This thought-provoking narrative will captivate you.This spellbinding prose will take you.This gripping book will transport you.This thought-provoking story will take you.This captivating fiction will keep you.This thought-provoking story will transport you.This intriguing work will captivate you.This entertaining prose will mesmerize you.This gripping work will leave you.This entertaining work will mesmerize you.",
  },
  {
    id: "bbedfc3a-7828-45a2-a02d-5bf4061df278",
    title: "O crime do padre Amaro, scenas da vida devota",
    image:
      "https://www.gutenberg.org/cache/epub/31971/pg31971.cover.medium.jpg",
    author: "Queir\u00f3s, E\u00e7a de",
    category: "romance",
    sample:
      "This compelling narrative will mesmerize you.This intriguing work will leave a lasting impression on you.This intriguing narrative will leave a lasting impression on you.",
    discription:
      "This gripping work will leave you.This spellbinding work will leave you.This spellbinding fiction will take you.This compelling tale will keep you.This thought-provoking story will leave a lasting impression on you.This thought-provoking narrative will transport you.This mesmerizing prose will captivate you.This spellbinding fiction will captivate you.This unputdownable work will leave a lasting impression on you.This mesmerizing book will transport you.This unputdownable fiction will leave a lasting impression on you.This compelling book will leave a lasting impression on you.This fascinating tale will transport you.This thought-provoking work will mesmerize you.This spellbinding literature will leave a lasting impression on you.This entertaining book will leave you.This entertaining work will mesmerize you.This thought-provoking book will keep you.This spellbinding tale will mesmerize you.This unputdownable literature will mesmerize you.",
  },
  {
    id: "3fa816b7-9d49-42b9-add9-40789c1091e1",
    title: "Hypnerotomachia: The Strife of Loue in a Dreame",
    image:
      "https://www.gutenberg.org/cache/epub/18459/pg18459.cover.medium.jpg",
    author: "Colonna, Francesco",
    category: "romance",
    sample:
      "This compelling literature will captivate you.This mesmerizing literature will mesmerize you.This intriguing tale will captivate you.",
    discription:
      "This captivating story will take you.This captivating work will transport you.This gripping literature will transport you.This thought-provoking book will leave a lasting impression on you.This thought-provoking novel will leave a lasting impression on you.This compelling literature will mesmerize you.This intriguing tale will take you.This unputdownable work will leave you.This gripping novel will captivate you.This compelling book will captivate you.This thought-provoking work will captivate you.This spellbinding novel will take you.This unputdownable fiction will captivate you.This captivating fiction will mesmerize you.This compelling work will mesmerize you.This mesmerizing work will leave a lasting impression on you.This entertaining tale will transport you.This intriguing tale will transport you.This entertaining narrative will leave a lasting impression on you.This thought-provoking novel will leave you.",
  },
  {
    id: "745ae98f-a8ed-46fb-a1bc-f724ba3aa7f7",
    title:
      "On the Origin of Species By Means of Natural Selection: Or, the Preservation of Favoured Races in the Struggle for Life",
    image: "https://www.gutenberg.org/cache/epub/1228/pg1228.cover.medium.jpg",
    author: "Darwin, Charles",
    category: "biology",
    sample:
      "This thought-provoking work will captivate you.This unputdownable prose will take you.This mesmerizing work will leave you.",
    discription:
      "This intriguing tale will keep you.This compelling story will leave you.This gripping story will take you.This compelling narrative will leave a lasting impression on you.This thought-provoking literature will mesmerize you.This gripping narrative will captivate you.This gripping story will leave a lasting impression on you.This spellbinding work will take you.This mesmerizing novel will leave you.This thought-provoking tale will mesmerize you.This captivating literature will transport you.This unputdownable book will captivate you.This unputdownable literature will leave you.This captivating work will take you.This intriguing novel will keep you.This gripping narrative will leave you.This fascinating novel will leave you.This fascinating fiction will transport you.This captivating prose will keep you.This gripping book will captivate you.",
  },
  {
    id: "0a726b04-54d5-486b-adaa-ab2652e30c70",
    title:
      "The Origin of Species by Means of Natural Selection: Or, the Preservation of Favoured Races in the Struggle for Life, 6th Edition",
    image: "https://www.gutenberg.org/cache/epub/2009/pg2009.cover.medium.jpg",
    author: "Darwin, Charles",
    category: "biology",
    sample:
      "This unputdownable prose will transport you.This captivating literature will take you.This mesmerizing story will mesmerize you.",
    discription:
      "This gripping literature will mesmerize you.This mesmerizing narrative will transport you.This thought-provoking story will keep you.This captivating story will transport you.This entertaining novel will take you.This spellbinding narrative will leave a lasting impression on you.This intriguing narrative will leave you.This mesmerizing story will captivate you.This intriguing tale will mesmerize you.This gripping tale will captivate you.This entertaining novel will transport you.This intriguing novel will leave a lasting impression on you.This entertaining story will leave a lasting impression on you.This compelling tale will leave you.This gripping narrative will mesmerize you.This entertaining story will keep you.This captivating narrative will transport you.This entertaining prose will take you.This gripping tale will leave a lasting impression on you.This unputdownable tale will take you.",
  },
  {
    id: "16a0875c-f51f-4359-a7f1-1cc3dddbc0af",
    title: "The Descent of Man, and Selection in Relation to Sex",
    image: "https://www.gutenberg.org/cache/epub/2300/pg2300.cover.medium.jpg",
    author: "Darwin, Charles",
    category: "biology",
    sample:
      "This compelling tale will keep you.This fascinating narrative will leave you.This spellbinding tale will take you.",
    discription:
      "This compelling tale will mesmerize you.This unputdownable novel will leave a lasting impression on you.This thought-provoking story will leave a lasting impression on you.This entertaining book will mesmerize you.This unputdownable literature will mesmerize you.This spellbinding prose will leave a lasting impression on you.This compelling narrative will transport you.This mesmerizing book will leave you.This compelling literature will keep you.This compelling literature will captivate you.This thought-provoking narrative will keep you.This entertaining narrative will keep you.This intriguing story will captivate you.This thought-provoking prose will keep you.This compelling book will leave you.This captivating story will take you.This unputdownable fiction will mesmerize you.This unputdownable book will transport you.This fascinating literature will take you.This intriguing work will keep you.",
  },
  {
    id: "3be710a8-4e22-4cb3-ac25-ee568ef951ae",
    title: "Ahead of his time",
    image:
      "https://www.gutenberg.org/cache/epub/69833/pg69833.cover.medium.jpg",
    author: "Cummings, Ray",
    category: "biology",
    sample:
      "This captivating story will captivate you.This captivating tale will captivate you.This captivating book will keep you.",
    discription:
      "This intriguing literature will keep you.This captivating tale will leave a lasting impression on you.This compelling fiction will take you.This mesmerizing work will captivate you.This intriguing fiction will leave a lasting impression on you.This captivating novel will transport you.This captivating story will keep you.This thought-provoking book will leave a lasting impression on you.This entertaining fiction will transport you.This spellbinding narrative will keep you.This captivating fiction will leave a lasting impression on you.This intriguing fiction will captivate you.This captivating work will take you.This intriguing story will leave you.This mesmerizing tale will transport you.This thought-provoking book will leave you.This thought-provoking fiction will leave you.This mesmerizing work will take you.This mesmerizing tale will transport you.This compelling story will mesmerize you.",
  },
  {
    id: "bf224771-8e31-403b-8cf9-b1596376942c",
    title: "Explanation of Terms Used in Entomology",
    image:
      "https://www.gutenberg.org/cache/epub/22748/pg22748.cover.medium.jpg",
    author: "Smith, John Bernhard",
    category: "biology",
    sample:
      "This mesmerizing tale will keep you.This thought-provoking prose will take you.This compelling narrative will mesmerize you.",
    discription:
      "This entertaining narrative will leave you.This compelling story will keep you.This unputdownable novel will take you.This thought-provoking fiction will transport you.This mesmerizing prose will leave you.This spellbinding fiction will mesmerize you.This mesmerizing work will captivate you.This unputdownable prose will captivate you.This fascinating story will captivate you.This unputdownable work will captivate you.This gripping prose will mesmerize you.This entertaining literature will transport you.This fascinating work will leave a lasting impression on you.This thought-provoking novel will take you.This gripping literature will transport you.This mesmerizing work will captivate you.This intriguing literature will transport you.This fascinating novel will mesmerize you.This entertaining work will take you.This entertaining fiction will transport you.",
  },
  {
    id: "ae328b07-accc-4ef9-9751-8f13c35447a2",
    title: "Zoonomia; Or, the Laws of Organic Life, Vol. I",
    image:
      "https://www.gutenberg.org/cache/epub/15707/pg15707.cover.medium.jpg",
    author: "Darwin, Erasmus",
    category: "biology",
    sample:
      "This entertaining novel will transport you.This mesmerizing work will transport you.This thought-provoking prose will leave a lasting impression on you.",
    discription:
      "This unputdownable story will captivate you.This compelling tale will leave you.This intriguing prose will take you.This fascinating book will mesmerize you.This captivating novel will leave a lasting impression on you.This entertaining fiction will transport you.This compelling literature will captivate you.This entertaining fiction will keep you.This compelling tale will captivate you.This spellbinding prose will leave you.This compelling tale will transport you.This captivating novel will leave you.This spellbinding work will captivate you.This unputdownable work will transport you.This mesmerizing story will mesmerize you.This captivating tale will take you.This gripping novel will leave a lasting impression on you.This gripping work will captivate you.This fascinating book will leave a lasting impression on you.This spellbinding prose will captivate you.",
  },
  {
    id: "1df10ec6-2e8a-40b9-b911-3e007a3c9bfe",
    title: "Evolution and Adaptation",
    image:
      "https://www.gutenberg.org/cache/epub/63540/pg63540.cover.medium.jpg",
    author: "Morgan, Thomas Hunt",
    category: "biology",
    sample:
      "This spellbinding literature will leave you.This entertaining fiction will leave you.This gripping narrative will mesmerize you.",
    discription:
      "This thought-provoking narrative will leave a lasting impression on you.This captivating story will leave you.This intriguing literature will mesmerize you.This fascinating fiction will keep you.This mesmerizing prose will captivate you.This intriguing narrative will mesmerize you.This entertaining fiction will take you.This thought-provoking narrative will leave you.This thought-provoking story will leave you.This compelling novel will captivate you.This compelling prose will transport you.This spellbinding prose will take you.This intriguing novel will transport you.This entertaining novel will captivate you.This intriguing book will take you.This unputdownable narrative will leave you.This gripping prose will keep you.This fascinating work will transport you.This unputdownable literature will leave a lasting impression on you.This fascinating fiction will take you.",
  },
  {
    id: "59cf6710-b7fd-44a0-b2cd-c49e294afef2",
    title: "Our Vanishing Wild Life: Its Extermination and Preservation",
    image:
      "https://www.gutenberg.org/cache/epub/13249/pg13249.cover.medium.jpg",
    author: "Hornaday, William T. (William Temple)",
    category: "biology",
    sample:
      "This gripping fiction will take you.This fascinating tale will take you.This thought-provoking tale will mesmerize you.",
    discription:
      "This captivating work will captivate you.This intriguing tale will leave a lasting impression on you.This captivating story will captivate you.This spellbinding book will leave you.This unputdownable fiction will keep you.This unputdownable novel will transport you.This entertaining tale will transport you.This spellbinding narrative will take you.This captivating prose will keep you.This spellbinding story will transport you.This entertaining novel will take you.This spellbinding tale will leave a lasting impression on you.This intriguing fiction will transport you.This thought-provoking book will keep you.This entertaining book will leave a lasting impression on you.This thought-provoking book will captivate you.This captivating story will take you.This thought-provoking narrative will captivate you.This thought-provoking work will take you.This compelling story will leave you.",
  },
  {
    id: "4ef7e9c2-25e5-414a-b2fc-0aa2dddfa80e",
    title:
      "On the Origin of Species by Means of Natural Selection: or the Preservation of Favoured Races in the Struggle for Life. (2nd edition)",
    image:
      "https://www.gutenberg.org/cache/epub/22764/pg22764.cover.medium.jpg",
    author: "Darwin, Charles",
    category: "biology",
    sample:
      "This compelling narrative will leave a lasting impression on you.This fascinating tale will leave a lasting impression on you.This gripping prose will captivate you.",
    discription:
      "This unputdownable fiction will leave you.This entertaining literature will take you.This captivating story will leave you.This intriguing prose will leave a lasting impression on you.This compelling tale will transport you.This thought-provoking work will transport you.This mesmerizing work will transport you.This entertaining story will leave you.This unputdownable fiction will mesmerize you.This compelling narrative will take you.This fascinating book will captivate you.This gripping work will leave a lasting impression on you.This spellbinding novel will mesmerize you.This gripping story will take you.This fascinating book will leave you.This thought-provoking literature will mesmerize you.This captivating literature will keep you.This captivating book will captivate you.This fascinating novel will keep you.This captivating book will leave you.",
  },
  {
    id: "515a1d03-80d1-4c0b-b442-f82b3f045e3f",
    title: "The Principles of Biology, Volume 1 (of 2)",
    image:
      "https://www.gutenberg.org/cache/epub/54612/pg54612.cover.medium.jpg",
    author: "Spencer, Herbert",
    category: "biology",
    sample:
      "This unputdownable novel will take you.This unputdownable fiction will leave you.This entertaining tale will transport you.",
    discription:
      "This gripping tale will captivate you.This fascinating fiction will transport you.This thought-provoking novel will leave you.This mesmerizing literature will transport you.This spellbinding novel will take you.This thought-provoking literature will leave you.This fascinating work will take you.This unputdownable story will keep you.This intriguing book will leave a lasting impression on you.This intriguing literature will leave you.This gripping tale will transport you.This spellbinding prose will leave a lasting impression on you.This compelling prose will mesmerize you.This compelling story will keep you.This entertaining prose will leave a lasting impression on you.This compelling story will take you.This mesmerizing book will leave you.This gripping book will captivate you.This spellbinding story will transport you.This mesmerizing narrative will keep you.",
  },
  {
    id: "ddb687cd-7109-4c37-a8d6-525350ac3572",
    title: "The Descent of Man and Selection in Relation to Sex, Vol. I",
    image:
      "https://www.gutenberg.org/cache/epub/34967/pg34967.cover.medium.jpg",
    author: "Darwin, Charles",
    category: "biology",
    sample:
      "This entertaining tale will captivate you.This compelling narrative will take you.This gripping prose will keep you.",
    discription:
      "This fascinating work will take you.This entertaining fiction will captivate you.This compelling story will leave a lasting impression on you.This gripping prose will keep you.This intriguing work will transport you.This captivating prose will leave a lasting impression on you.This spellbinding fiction will keep you.This spellbinding work will leave you.This captivating literature will transport you.This captivating narrative will leave you.This unputdownable novel will captivate you.This spellbinding narrative will take you.This unputdownable tale will keep you.This compelling prose will transport you.This unputdownable book will take you.This intriguing tale will captivate you.This thought-provoking story will leave a lasting impression on you.This compelling prose will leave a lasting impression on you.This fascinating story will captivate you.This mesmerizing literature will take you.",
  },
  {
    id: "68de4313-24dc-46d3-b18f-ae7c7bbd5ad9",
    title: "The History of Insects",
    image:
      "https://www.gutenberg.org/cache/epub/10834/pg10834.cover.medium.jpg",
    author: "Unknown",
    category: "biology",
    sample:
      "This mesmerizing work will leave you.This spellbinding prose will leave a lasting impression on you.This compelling fiction will transport you.",
    discription:
      "This spellbinding fiction will mesmerize you.This mesmerizing tale will leave you.This fascinating literature will captivate you.This mesmerizing story will leave you.This thought-provoking fiction will leave a lasting impression on you.This spellbinding fiction will captivate you.This unputdownable narrative will leave you.This unputdownable book will leave you.This entertaining book will take you.This compelling prose will mesmerize you.This thought-provoking narrative will keep you.This compelling tale will leave a lasting impression on you.This gripping fiction will leave you.This captivating prose will mesmerize you.This compelling prose will leave you.This intriguing book will leave a lasting impression on you.This spellbinding novel will mesmerize you.This unputdownable work will leave you.This entertaining literature will leave a lasting impression on you.This mesmerizing prose will mesmerize you.",
  },
  {
    id: "dc6325f0-d603-4b5e-9fe0-b072678358b7",
    title: "Mimicry in Butterflies",
    image:
      "https://www.gutenberg.org/cache/epub/42606/pg42606.cover.medium.jpg",
    author: "Punnett, Reginald Crundall",
    category: "biology",
    sample:
      "This thought-provoking book will take you.This thought-provoking fiction will take you.This unputdownable work will transport you.",
    discription:
      "This entertaining narrative will leave a lasting impression on you.This mesmerizing work will keep you.This compelling novel will transport you.This unputdownable novel will keep you.This thought-provoking narrative will take you.This captivating fiction will keep you.This fascinating novel will take you.This intriguing book will captivate you.This compelling story will mesmerize you.This mesmerizing story will transport you.This intriguing literature will transport you.This gripping narrative will keep you.This thought-provoking tale will take you.This captivating book will keep you.This spellbinding fiction will leave you.This mesmerizing work will mesmerize you.This mesmerizing story will take you.This unputdownable narrative will take you.This entertaining story will captivate you.This thought-provoking fiction will captivate you.",
  },
  {
    id: "6f206ed3-f76a-4598-90a0-a068156ea9f8",
    title: "The call from beyond",
    image:
      "https://www.gutenberg.org/cache/epub/69308/pg69308.cover.medium.jpg",
    author: "Simak, Clifford D.",
    category: "biology",
    sample:
      "This thought-provoking novel will leave you.This compelling book will mesmerize you.This spellbinding work will take you.",
    discription:
      "This fascinating work will keep you.This thought-provoking narrative will leave a lasting impression on you.This intriguing prose will captivate you.This thought-provoking fiction will take you.This thought-provoking prose will keep you.This compelling narrative will captivate you.This spellbinding tale will leave you.This spellbinding novel will transport you.This unputdownable fiction will mesmerize you.This spellbinding literature will leave you.This intriguing story will transport you.This fascinating story will keep you.This captivating narrative will keep you.This spellbinding story will mesmerize you.This intriguing story will take you.This fascinating book will leave you.This captivating story will transport you.This fascinating fiction will leave you.This spellbinding literature will leave a lasting impression on you.This compelling prose will take you.",
  },
  {
    id: "c52804cf-d292-4fb6-91e8-5f215254f85d",
    title: "The Variation of Animals and Plants Under Domestication, Vol. I.",
    image:
      "https://www.gutenberg.org/cache/epub/24923/pg24923.cover.medium.jpg",
    author: "Darwin, Charles",
    category: "biology",
    sample:
      "This mesmerizing tale will leave a lasting impression on you.This gripping literature will mesmerize you.This spellbinding literature will mesmerize you.",
    discription:
      "This thought-provoking book will captivate you.This fascinating story will keep you.This gripping work will leave a lasting impression on you.This unputdownable novel will take you.This intriguing literature will take you.This entertaining literature will keep you.This compelling story will mesmerize you.This mesmerizing tale will keep you.This spellbinding literature will mesmerize you.This gripping work will transport you.This compelling story will take you.This captivating literature will captivate you.This gripping book will take you.This spellbinding story will transport you.This captivating novel will mesmerize you.This intriguing tale will captivate you.This captivating story will leave a lasting impression on you.This spellbinding literature will captivate you.This entertaining narrative will keep you.This unputdownable book will keep you.",
  },
  {
    id: "91658cb9-8d39-48cd-bc20-877bc4dc4a3c",
    title: "An Elementary Study of Insects",
    image:
      "https://www.gutenberg.org/cache/epub/23434/pg23434.cover.medium.jpg",
    author: "Haseman, Leonard",
    category: "biology",
    sample:
      "This fascinating literature will leave you.This fascinating tale will transport you.This entertaining prose will leave you.",
    discription:
      "This mesmerizing story will captivate you.This spellbinding book will keep you.This mesmerizing novel will captivate you.This compelling narrative will keep you.This captivating story will leave you.This gripping literature will leave a lasting impression on you.This entertaining literature will captivate you.This unputdownable narrative will take you.This intriguing novel will transport you.This intriguing literature will captivate you.This entertaining tale will leave you.This compelling book will leave you.This unputdownable tale will mesmerize you.This thought-provoking story will leave a lasting impression on you.This fascinating story will captivate you.This mesmerizing book will captivate you.This intriguing prose will leave a lasting impression on you.This gripping prose will captivate you.This unputdownable book will transport you.This thought-provoking fiction will leave you.",
  },
  {
    id: "4afd7c2c-fd51-4b21-b880-94cfb976a85e",
    title: "Social Life in the Insect World",
    image:
      "https://www.gutenberg.org/cache/epub/18350/pg18350.cover.medium.jpg",
    author: "Fabre, Jean-Henri",
    category: "biology",
    sample:
      "This spellbinding story will keep you.This thought-provoking fiction will take you.This unputdownable work will captivate you.",
    discription:
      "This intriguing work will mesmerize you.This fascinating story will leave you.This intriguing story will keep you.This entertaining novel will leave a lasting impression on you.This compelling prose will transport you.This thought-provoking prose will transport you.This mesmerizing book will keep you.This thought-provoking literature will leave you.This fascinating novel will leave a lasting impression on you.This fascinating prose will mesmerize you.This captivating novel will keep you.This spellbinding narrative will transport you.This unputdownable story will leave you.This unputdownable work will leave you.This intriguing narrative will mesmerize you.This captivating work will keep you.This fascinating work will take you.This thought-provoking prose will leave a lasting impression on you.This mesmerizing fiction will captivate you.This gripping literature will take you.",
  },
  {
    id: "dd5d533b-5566-480d-b715-7daf6dfe8a91",
    title: "Birds in Town & Village",
    image: "https://www.gutenberg.org/cache/epub/7353/pg7353.cover.medium.jpg",
    author: "Hudson, W. H. (William Henry)",
    category: "biology",
    sample:
      "This entertaining narrative will leave you.This fascinating novel will take you.This entertaining prose will keep you.",
    discription:
      "This mesmerizing literature will leave you.This entertaining book will leave you.This compelling tale will leave you.This mesmerizing narrative will take you.This spellbinding narrative will transport you.This unputdownable work will leave a lasting impression on you.This fascinating fiction will transport you.This thought-provoking tale will transport you.This intriguing story will captivate you.This captivating story will keep you.This unputdownable novel will captivate you.This captivating literature will leave a lasting impression on you.This unputdownable fiction will leave you.This mesmerizing narrative will leave you.This spellbinding prose will take you.This gripping fiction will leave you.This mesmerizing literature will take you.This fascinating book will take you.This spellbinding prose will leave a lasting impression on you.This captivating literature will leave you.",
  },
  {
    id: "55eb5b97-a37a-4c5d-a42b-9bfc7dafd17c",
    title:
      "Biology: A lecture delivered at Columbia University in the series; on Science, Philosophy and Art November 20, 1907",
    image:
      "https://www.gutenberg.org/cache/epub/18911/pg18911.cover.medium.jpg",
    author: "Wilson, Edmund B. (Edmund Beecher)",
    category: "biology",
    sample:
      "This fascinating tale will leave you.This gripping work will transport you.This fascinating prose will mesmerize you.",
    discription:
      "This captivating literature will take you.This thought-provoking work will mesmerize you.This compelling book will leave a lasting impression on you.This gripping literature will mesmerize you.This captivating prose will leave you.This fascinating prose will take you.This gripping prose will captivate you.This spellbinding story will keep you.This captivating prose will transport you.This spellbinding book will leave a lasting impression on you.This captivating fiction will keep you.This compelling tale will mesmerize you.This spellbinding narrative will transport you.This captivating fiction will take you.This spellbinding novel will leave you.This fascinating prose will take you.This unputdownable literature will take you.This captivating narrative will leave you.This fascinating prose will keep you.This gripping book will captivate you.",
  },
  {
    id: "385db575-4971-4756-826b-9582eb1ffea0",
    title:
      "More Letters of Charles Darwin \u2014 Volume 1: A Record of His Work in a Series of Hitherto Unpublished Letters",
    image: "https://www.gutenberg.org/cache/epub/2739/pg2739.cover.medium.jpg",
    author: "Darwin, Charles",
    category: "biology",
    sample:
      "This spellbinding book will transport you.This spellbinding tale will take you.This unputdownable prose will take you.",
    discription:
      "This intriguing tale will transport you.This spellbinding book will captivate you.This compelling literature will transport you.This compelling narrative will take you.This thought-provoking prose will leave you.This entertaining fiction will leave you.This entertaining book will captivate you.This entertaining novel will take you.This compelling tale will captivate you.This gripping work will transport you.This unputdownable literature will transport you.This unputdownable fiction will leave you.This mesmerizing literature will mesmerize you.This spellbinding story will captivate you.This entertaining fiction will mesmerize you.This mesmerizing literature will leave you.This compelling novel will leave a lasting impression on you.This intriguing prose will leave you.This intriguing fiction will captivate you.This entertaining prose will transport you.",
  },
  {
    id: "05d3709d-a596-4f9b-abc6-9fc739f909e3",
    title:
      "The Elements of Bacteriological Technique: A Laboratory Guide for Medical, Dental, and Technical Students. Second Edition Rewritten and Enlarged.",
    image:
      "https://www.gutenberg.org/cache/epub/27713/pg27713.cover.medium.jpg",
    author: "Eyre, J. W. H. (John William Henry)",
    category: "biology",
    sample:
      "This entertaining prose will leave you.This compelling tale will transport you.This compelling fiction will leave a lasting impression on you.",
    discription:
      "This intriguing fiction will take you.This unputdownable narrative will leave a lasting impression on you.This mesmerizing work will take you.This fascinating literature will leave a lasting impression on you.This gripping novel will keep you.This thought-provoking prose will captivate you.This spellbinding story will mesmerize you.This spellbinding prose will keep you.This unputdownable narrative will take you.This fascinating work will leave you.This thought-provoking fiction will leave a lasting impression on you.This captivating narrative will keep you.This captivating narrative will keep you.This captivating narrative will leave you.This compelling book will leave a lasting impression on you.This compelling novel will mesmerize you.This gripping literature will take you.This gripping narrative will transport you.This compelling work will leave you.This mesmerizing fiction will keep you.",
  },
  {
    id: "a75952c4-1735-48ba-9139-7e26d8ca9d0e",
    title: "Birds of the Indian Hills",
    image:
      "https://www.gutenberg.org/cache/epub/23755/pg23755.cover.medium.jpg",
    author: "Dewar, Douglas",
    category: "biology",
    sample:
      "This mesmerizing novel will take you.This intriguing story will transport you.This mesmerizing literature will captivate you.",
    discription:
      "This intriguing book will keep you.This intriguing book will leave you.This gripping narrative will keep you.This unputdownable tale will leave you.This mesmerizing fiction will take you.This mesmerizing literature will take you.This mesmerizing story will transport you.This spellbinding literature will leave a lasting impression on you.This compelling prose will mesmerize you.This fascinating prose will leave a lasting impression on you.This spellbinding work will take you.This compelling narrative will keep you.This intriguing story will mesmerize you.This thought-provoking narrative will leave a lasting impression on you.This mesmerizing story will captivate you.This captivating book will mesmerize you.This spellbinding fiction will leave a lasting impression on you.This thought-provoking tale will leave you.This mesmerizing narrative will mesmerize you.This spellbinding novel will leave a lasting impression on you.",
  },
  {
    id: "e0ca2b0d-25ed-4823-865f-eec627eb9595",
    title: "Natural Wonders",
    image:
      "https://www.gutenberg.org/cache/epub/47961/pg47961.cover.medium.jpg",
    author: "Brewster, Edwin Tenney",
    category: "biology",
    sample:
      "This captivating story will transport you.This unputdownable fiction will take you.This intriguing narrative will keep you.",
    discription:
      "This spellbinding narrative will leave you.This fascinating tale will leave a lasting impression on you.This spellbinding work will leave a lasting impression on you.This mesmerizing tale will captivate you.This thought-provoking story will keep you.This captivating tale will leave you.This compelling story will keep you.This spellbinding literature will captivate you.This unputdownable narrative will captivate you.This fascinating narrative will take you.This mesmerizing literature will take you.This intriguing work will keep you.This captivating novel will leave you.This intriguing novel will keep you.This entertaining fiction will take you.This fascinating tale will leave a lasting impression on you.This spellbinding story will captivate you.This compelling work will leave a lasting impression on you.This spellbinding novel will keep you.This fascinating novel will leave you.",
  },
  {
    id: "a1e2879b-e75f-431e-ab69-e968dacd9a42",
    title: "The Variation of Animals and Plants under Domestication",
    image: "https://www.gutenberg.org/cache/epub/3332/pg3332.cover.medium.jpg",
    author: "Darwin, Charles",
    category: "biology",
    sample:
      "This thought-provoking story will transport you.This compelling novel will take you.This unputdownable tale will take you.",
    discription:
      "This entertaining story will leave you.This fascinating narrative will transport you.This mesmerizing literature will leave you.This intriguing literature will leave a lasting impression on you.This fascinating fiction will transport you.This entertaining tale will keep you.This spellbinding prose will transport you.This intriguing fiction will mesmerize you.This fascinating work will leave a lasting impression on you.This unputdownable prose will transport you.This mesmerizing prose will leave a lasting impression on you.This intriguing literature will leave a lasting impression on you.This gripping narrative will leave you.This captivating novel will leave a lasting impression on you.This compelling literature will transport you.This unputdownable book will keep you.This thought-provoking story will mesmerize you.This mesmerizing narrative will mesmerize you.This mesmerizing fiction will leave a lasting impression on you.This intriguing story will mesmerize you.",
  },
  {
    id: "7965426d-d135-46f0-aea0-809c5d0fce0a",
    title: "The Human Side of Animals",
    image:
      "https://www.gutenberg.org/cache/epub/19850/pg19850.cover.medium.jpg",
    author: "Dixon, Royal",
    category: "biology",
    sample:
      "This spellbinding narrative will keep you.This intriguing novel will leave a lasting impression on you.This thought-provoking narrative will transport you.",
    discription:
      "This fascinating prose will leave you.This compelling prose will captivate you.This intriguing literature will transport you.This unputdownable literature will leave you.This mesmerizing novel will captivate you.This entertaining novel will mesmerize you.This intriguing prose will leave you.This mesmerizing fiction will take you.This captivating tale will take you.This captivating tale will transport you.This intriguing novel will keep you.This spellbinding work will mesmerize you.This compelling prose will transport you.This captivating story will leave you.This thought-provoking novel will take you.This mesmerizing story will transport you.This compelling prose will captivate you.This spellbinding tale will take you.This thought-provoking story will keep you.This mesmerizing tale will leave you.",
  },
  {
    id: "e27d9d2a-5929-4979-8fc0-7f11b5a52861",
    title: "A Civic Biology, Presented in Problems",
    image:
      "https://www.gutenberg.org/cache/epub/39969/pg39969.cover.medium.jpg",
    author: "Hunter, George W. (George William)",
    category: "biology",
    sample:
      "This mesmerizing story will leave you.This unputdownable novel will leave a lasting impression on you.This captivating work will mesmerize you.",
    discription:
      "This intriguing prose will captivate you.This entertaining work will transport you.This thought-provoking fiction will leave a lasting impression on you.This intriguing work will leave you.This compelling prose will take you.This thought-provoking literature will mesmerize you.This compelling work will take you.This captivating work will transport you.This unputdownable narrative will take you.This compelling work will captivate you.This captivating narrative will keep you.This compelling prose will keep you.This intriguing fiction will transport you.This mesmerizing prose will take you.This compelling fiction will transport you.This unputdownable fiction will leave you.This compelling novel will leave you.This spellbinding narrative will leave you.This fascinating prose will keep you.This thought-provoking novel will transport you.",
  },
  {
    id: "106f6366-9dc2-4f47-aba3-687bd528708e",
    title: "Vestiges of the Natural History of Creation",
    image: "https://www.gutenberg.org/cache/epub/7116/pg7116.cover.medium.jpg",
    author: "Chambers, Robert",
    category: "biology",
    sample:
      "This gripping story will leave you.This gripping story will captivate you.This captivating narrative will mesmerize you.",
    discription:
      "This unputdownable fiction will keep you.This mesmerizing novel will transport you.This thought-provoking fiction will captivate you.This compelling work will leave you.This fascinating tale will leave a lasting impression on you.This unputdownable fiction will keep you.This fascinating literature will keep you.This intriguing book will transport you.This captivating work will mesmerize you.This mesmerizing novel will transport you.This unputdownable literature will transport you.This entertaining fiction will leave a lasting impression on you.This gripping prose will take you.This captivating book will take you.This intriguing fiction will take you.This gripping narrative will transport you.This entertaining novel will leave you.This unputdownable prose will transport you.This spellbinding novel will keep you.This fascinating narrative will leave a lasting impression on you.",
  },
  {
    id: "136a51ea-09e7-4ef3-bfea-4f7a9dbe0938",
    title:
      "\u00dcber die Entstehung der Arten im Thier- und Pflanzen-Reich durch nat\u00fcrliche Z\u00fcchtung",
    image:
      "https://www.gutenberg.org/cache/epub/69172/pg69172.cover.medium.jpg",
    author: "Darwin, Charles",
    category: "biology",
    sample:
      "This captivating work will leave a lasting impression on you.This unputdownable work will captivate you.This compelling novel will keep you.",
    discription:
      "This entertaining narrative will keep you.This spellbinding work will keep you.This fascinating story will leave a lasting impression on you.This compelling book will take you.This intriguing literature will transport you.This gripping work will leave you.This entertaining work will keep you.This intriguing story will take you.This entertaining tale will leave a lasting impression on you.This compelling story will transport you.This entertaining tale will leave you.This spellbinding novel will take you.This fascinating prose will mesmerize you.This gripping book will keep you.This thought-provoking book will keep you.This intriguing prose will leave you.This entertaining story will mesmerize you.This fascinating story will take you.This thought-provoking work will mesmerize you.This spellbinding narrative will leave you.",
  },
  {
    id: "0fcb1c11-3945-48e2-8996-dc652911e8fa",
    title: "The Wonders of Life: A Popular Study of Biological Philosophy",
    image:
      "https://www.gutenberg.org/cache/epub/46652/pg46652.cover.medium.jpg",
    author: "Haeckel, Ernst",
    category: "biology",
    sample:
      "This fascinating story will leave you.This entertaining prose will leave you.This entertaining literature will keep you.",
    discription:
      "This thought-provoking tale will leave you.This thought-provoking work will leave a lasting impression on you.This captivating story will keep you.This compelling work will mesmerize you.This thought-provoking novel will leave a lasting impression on you.This gripping story will keep you.This entertaining book will captivate you.This unputdownable story will leave a lasting impression on you.This mesmerizing literature will leave you.This captivating work will mesmerize you.This intriguing literature will mesmerize you.This unputdownable fiction will mesmerize you.This spellbinding prose will take you.This gripping novel will leave a lasting impression on you.This spellbinding tale will mesmerize you.This unputdownable narrative will captivate you.This intriguing story will mesmerize you.This mesmerizing work will transport you.This gripping narrative will captivate you.This mesmerizing work will take you.",
  },
  {
    id: "f88d8a2f-86f4-4f52-923d-6fd2b31b9791",
    title: "What is Darwinism?",
    image:
      "https://www.gutenberg.org/cache/epub/19192/pg19192.cover.medium.jpg",
    author: "Hodge, Charles",
    category: "biology",
    sample:
      "This entertaining story will leave you.This thought-provoking tale will mesmerize you.This fascinating book will leave you.",
    discription:
      "This mesmerizing prose will keep you.This mesmerizing prose will leave a lasting impression on you.This thought-provoking prose will captivate you.This gripping work will mesmerize you.This intriguing prose will leave you.This compelling fiction will mesmerize you.This unputdownable fiction will leave you.This spellbinding fiction will leave you.This spellbinding work will transport you.This mesmerizing narrative will transport you.This intriguing book will transport you.This gripping prose will leave you.This spellbinding narrative will transport you.This mesmerizing story will mesmerize you.This captivating literature will captivate you.This captivating book will transport you.This spellbinding fiction will leave a lasting impression on you.This mesmerizing book will leave a lasting impression on you.This fascinating novel will transport you.This gripping tale will take you.",
  },
  {
    id: "28e04db4-d3eb-423b-81e1-64aff1d402bf",
    title: "Ducks at a Distance: A Waterfowl Identification Guide",
    image:
      "https://www.gutenberg.org/cache/epub/18884/pg18884.cover.medium.jpg",
    author: "Hines, Bob",
    category: "biology",
    sample:
      "This spellbinding story will mesmerize you.This compelling literature will leave a lasting impression on you.This thought-provoking fiction will mesmerize you.",
    discription:
      "This captivating novel will take you.This entertaining work will transport you.This spellbinding narrative will leave you.This fascinating narrative will leave you.This gripping novel will leave you.This mesmerizing narrative will captivate you.This intriguing story will leave a lasting impression on you.This captivating prose will take you.This gripping novel will take you.This spellbinding prose will leave a lasting impression on you.This unputdownable narrative will captivate you.This intriguing story will take you.This entertaining tale will mesmerize you.This entertaining book will leave you.This intriguing story will leave you.This captivating novel will keep you.This captivating story will captivate you.This thought-provoking literature will leave a lasting impression on you.This gripping fiction will captivate you.This fascinating narrative will leave a lasting impression on you.",
  },
  {
    id: "d588abbd-d514-4735-b885-ee7e1d488baf",
    title: "The Blue Castle: a novel",
    image:
      "https://www.gutenberg.org/cache/epub/67979/pg67979.cover.medium.jpg",
    author: "Montgomery, L. M. (Lucy Maud)",
    category: "self",
    sample:
      "This compelling narrative will leave you.This spellbinding novel will leave you.This fascinating tale will keep you.",
    discription:
      "This entertaining literature will leave a lasting impression on you.This captivating story will transport you.This compelling story will captivate you.This intriguing literature will take you.This captivating prose will take you.This intriguing novel will keep you.This gripping tale will leave you.This compelling novel will leave a lasting impression on you.This spellbinding tale will transport you.This mesmerizing work will leave a lasting impression on you.This entertaining fiction will captivate you.This spellbinding fiction will captivate you.This gripping tale will leave you.This intriguing prose will mesmerize you.This thought-provoking narrative will captivate you.This unputdownable story will leave you.This gripping work will leave you.This captivating story will mesmerize you.This compelling work will keep you.This entertaining tale will transport you.",
  },
  {
    id: "3e1115af-9ae9-437a-bf2d-93ec8a8e28e1",
    title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
    image: "https://www.gutenberg.org/cache/epub/43/pg43.cover.medium.jpg",
    author: "Stevenson, Robert Louis",
    category: "self",
    sample:
      "This entertaining tale will leave you.This compelling literature will leave you.This unputdownable tale will captivate you.",
    discription:
      "This captivating book will leave you.This gripping tale will take you.This captivating fiction will mesmerize you.This mesmerizing work will keep you.This compelling literature will transport you.This mesmerizing narrative will captivate you.This mesmerizing tale will mesmerize you.This intriguing book will transport you.This compelling book will captivate you.This unputdownable book will keep you.This fascinating narrative will take you.This gripping narrative will keep you.This captivating literature will keep you.This unputdownable work will mesmerize you.This entertaining work will captivate you.This fascinating work will captivate you.This mesmerizing fiction will mesmerize you.This unputdownable work will take you.This thought-provoking story will mesmerize you.This intriguing story will take you.",
  },
  {
    id: "d897d598-2976-40c3-8f2a-6bc0a7f38452",
    title: "The Awakening, and Selected Short Stories",
    image: "https://www.gutenberg.org/cache/epub/160/pg160.cover.medium.jpg",
    author: "Chopin, Kate",
    category: "self",
    sample:
      "This thought-provoking book will take you.This compelling narrative will transport you.This compelling book will captivate you.",
    discription:
      "This mesmerizing book will take you.This gripping narrative will transport you.This intriguing novel will transport you.This gripping tale will leave a lasting impression on you.This unputdownable fiction will take you.This captivating prose will leave a lasting impression on you.This spellbinding narrative will leave you.This compelling book will take you.This unputdownable tale will keep you.This mesmerizing book will mesmerize you.This spellbinding fiction will mesmerize you.This spellbinding narrative will captivate you.This spellbinding novel will transport you.This unputdownable tale will captivate you.This captivating story will take you.This thought-provoking prose will transport you.This gripping book will take you.This unputdownable story will mesmerize you.This entertaining narrative will captivate you.This fascinating work will transport you.",
  },
  {
    id: "e182e4df-6f37-48d5-ae0a-159c61907ebd",
    title: "Siddhartha",
    image: "https://www.gutenberg.org/cache/epub/2500/pg2500.cover.medium.jpg",
    author: "Hesse, Hermann",
    category: "self",
    sample:
      "This fascinating story will leave you.This entertaining literature will captivate you.This compelling book will keep you.",
    discription:
      "This entertaining fiction will keep you.This entertaining work will captivate you.This spellbinding novel will transport you.This compelling tale will transport you.This captivating story will leave a lasting impression on you.This fascinating fiction will captivate you.This thought-provoking literature will leave you.This captivating novel will keep you.This captivating fiction will mesmerize you.This entertaining tale will captivate you.This compelling work will transport you.This compelling novel will transport you.This intriguing literature will transport you.This spellbinding literature will leave a lasting impression on you.This fascinating literature will leave you.This thought-provoking work will keep you.This thought-provoking tale will captivate you.This intriguing prose will mesmerize you.This thought-provoking tale will mesmerize you.This compelling tale will keep you.",
  },
  {
    id: "46efd676-fa93-4a85-aeb1-0d14d78c2287",
    title: "Anne of the Island",
    image: "https://www.gutenberg.org/cache/epub/51/pg51.cover.medium.jpg",
    author: "Montgomery, L. M. (Lucy Maud)",
    category: "self",
    sample:
      "This mesmerizing work will leave you.This entertaining book will leave you.This intriguing work will leave you.",
    discription:
      "This captivating book will transport you.This compelling prose will leave a lasting impression on you.This captivating tale will leave you.This mesmerizing novel will leave a lasting impression on you.This entertaining book will take you.This intriguing narrative will leave a lasting impression on you.This compelling work will captivate you.This thought-provoking book will transport you.This fascinating literature will keep you.This fascinating prose will leave you.This thought-provoking work will captivate you.This intriguing story will captivate you.This gripping book will captivate you.This captivating literature will leave you.This spellbinding work will take you.This spellbinding literature will take you.This spellbinding work will mesmerize you.This unputdownable literature will transport you.This captivating fiction will leave a lasting impression on you.This unputdownable narrative will transport you.",
  },
  {
    id: "ca51cc9c-6cf2-47a4-a1d0-abed66374497",
    title: "The Strange Case of Dr. Jekyll and Mr. Hyde",
    image: "https://www.gutenberg.org/cache/epub/42/pg42.cover.medium.jpg",
    author: "Stevenson, Robert Louis",
    category: "self",
    sample:
      "This mesmerizing fiction will captivate you.This thought-provoking work will leave a lasting impression on you.This compelling story will keep you.",
    discription:
      "This gripping tale will leave you.This intriguing literature will captivate you.This intriguing tale will transport you.This thought-provoking novel will take you.This captivating prose will captivate you.This gripping prose will leave a lasting impression on you.This captivating novel will mesmerize you.This unputdownable tale will leave a lasting impression on you.This entertaining work will transport you.This unputdownable literature will leave you.This thought-provoking narrative will leave a lasting impression on you.This intriguing literature will leave you.This thought-provoking prose will leave a lasting impression on you.This captivating tale will mesmerize you.This thought-provoking fiction will leave you.This thought-provoking narrative will mesmerize you.This unputdownable story will leave a lasting impression on you.This compelling fiction will captivate you.This fascinating narrative will mesmerize you.This mesmerizing fiction will leave a lasting impression on you.",
  },
  {
    id: "ed1b211d-160f-4819-89c5-e5663424a91b",
    title: "Siddhartha: eine indische Dichtung",
    image: "https://www.gutenberg.org/cache/epub/2499/pg2499.cover.medium.jpg",
    author: "Hesse, Hermann",
    category: "self",
    sample:
      "This fascinating book will leave you.This gripping novel will mesmerize you.This unputdownable work will take you.",
    discription:
      "This gripping literature will leave you.This thought-provoking novel will take you.This thought-provoking novel will leave a lasting impression on you.This gripping narrative will take you.This spellbinding story will leave you.This captivating literature will leave a lasting impression on you.This entertaining fiction will leave you.This fascinating story will captivate you.This fascinating work will leave you.This fascinating fiction will mesmerize you.This entertaining book will mesmerize you.This fascinating story will take you.This spellbinding work will leave a lasting impression on you.This thought-provoking novel will leave you.This fascinating literature will mesmerize you.This entertaining literature will captivate you.This fascinating book will captivate you.This spellbinding work will take you.This thought-provoking literature will leave you.This gripping book will leave a lasting impression on you.",
  },
  {
    id: "5fec5b70-67bf-4df9-bd95-47fcd5e132e1",
    title: "Things To Make",
    image:
      "https://www.gutenberg.org/cache/epub/14664/pg14664.cover.medium.jpg",
    author: "Williams, Archibald",
    category: "self",
    sample:
      "This mesmerizing narrative will leave a lasting impression on you.This fascinating book will leave you.This compelling prose will transport you.",
    discription:
      "This compelling novel will captivate you.This mesmerizing story will transport you.This thought-provoking narrative will keep you.This unputdownable narrative will leave you.This fascinating fiction will mesmerize you.This intriguing work will mesmerize you.This thought-provoking fiction will captivate you.This fascinating work will keep you.This thought-provoking tale will captivate you.This fascinating narrative will mesmerize you.This gripping fiction will leave you.This gripping book will leave a lasting impression on you.This entertaining tale will leave you.This unputdownable work will transport you.This compelling story will transport you.This gripping literature will take you.This thought-provoking work will keep you.This gripping literature will transport you.This unputdownable tale will take you.This gripping story will captivate you.",
  },
  {
    id: "c161e4cc-19a7-4dc3-8199-24bde88c8304",
    title: "Understood Betsy",
    image: "https://www.gutenberg.org/cache/epub/5347/pg5347.cover.medium.jpg",
    author: "Fisher, Dorothy Canfield",
    category: "self",
    sample:
      "This mesmerizing novel will leave you.This intriguing narrative will transport you.This mesmerizing literature will captivate you.",
    discription:
      "This entertaining fiction will take you.This fascinating novel will leave a lasting impression on you.This thought-provoking story will take you.This entertaining work will mesmerize you.This mesmerizing work will keep you.This mesmerizing story will leave a lasting impression on you.This fascinating work will keep you.This spellbinding narrative will mesmerize you.This gripping novel will transport you.This spellbinding fiction will keep you.This spellbinding narrative will keep you.This captivating fiction will mesmerize you.This thought-provoking story will take you.This thought-provoking book will leave you.This fascinating fiction will captivate you.This gripping narrative will leave you.This fascinating literature will captivate you.This thought-provoking literature will leave you.This thought-provoking book will leave you.This entertaining narrative will take you.",
  },
  {
    id: "60b97089-d302-4ad5-888c-852e93746de4",
    title: "The Key to Success",
    image:
      "https://www.gutenberg.org/cache/epub/37036/pg37036.cover.medium.jpg",
    author: "Conwell, Russell H.",
    category: "self",
    sample:
      "This entertaining novel will take you.This mesmerizing book will captivate you.This thought-provoking prose will transport you.",
    discription:
      "This intriguing tale will take you.This unputdownable story will transport you.This captivating tale will leave you.This mesmerizing novel will leave a lasting impression on you.This gripping novel will keep you.This thought-provoking fiction will mesmerize you.This entertaining story will mesmerize you.This gripping literature will take you.This intriguing book will keep you.This intriguing narrative will keep you.This spellbinding literature will leave a lasting impression on you.This intriguing fiction will leave a lasting impression on you.This captivating narrative will leave a lasting impression on you.This fascinating story will keep you.This spellbinding work will transport you.This thought-provoking book will leave you.This compelling fiction will mesmerize you.This captivating work will keep you.This spellbinding story will leave a lasting impression on you.This captivating tale will leave a lasting impression on you.",
  },
  {
    id: "1c3aa208-8ecf-4d6e-baf0-5e3be4614448",
    title: "Romola",
    image:
      "https://www.gutenberg.org/cache/epub/24020/pg24020.cover.medium.jpg",
    author: "Eliot, George",
    category: "self",
    sample:
      "This intriguing narrative will leave a lasting impression on you.This gripping prose will take you.This gripping tale will captivate you.",
    discription:
      "This captivating book will captivate you.This spellbinding novel will leave you.This captivating prose will transport you.This unputdownable story will leave a lasting impression on you.This mesmerizing novel will mesmerize you.This gripping prose will transport you.This gripping literature will transport you.This compelling fiction will transport you.This gripping prose will leave you.This spellbinding book will captivate you.This fascinating tale will take you.This compelling tale will captivate you.This entertaining literature will leave you.This mesmerizing story will transport you.This mesmerizing prose will captivate you.This intriguing work will mesmerize you.This gripping literature will leave you.This captivating book will transport you.This entertaining story will leave you.This thought-provoking work will leave a lasting impression on you.",
  },
  {
    id: "b46a817d-6c92-43bc-a76f-ab80a6675f64",
    title:
      "No Cross, No Crown: A Discourse, Shewing the Nature and Discipline of the Holy Cross of Christ",
    image:
      "https://www.gutenberg.org/cache/epub/44895/pg44895.cover.medium.jpg",
    author: "Penn, William",
    category: "self",
    sample:
      "This spellbinding work will captivate you.This thought-provoking tale will mesmerize you.This spellbinding story will leave a lasting impression on you.",
    discription:
      "This entertaining book will transport you.This gripping tale will leave a lasting impression on you.This intriguing novel will take you.This captivating story will leave you.This compelling tale will transport you.This gripping novel will take you.This thought-provoking fiction will transport you.This unputdownable work will take you.This mesmerizing fiction will keep you.This captivating story will keep you.This captivating work will keep you.This thought-provoking literature will transport you.This mesmerizing novel will keep you.This thought-provoking work will transport you.This compelling work will leave you.This unputdownable fiction will captivate you.This spellbinding fiction will transport you.This captivating literature will leave a lasting impression on you.This unputdownable book will transport you.This captivating tale will keep you.",
  },
  {
    id: "474d92d1-b0d4-472f-9002-affd7c74c208",
    title: "Wilhelm Meister's Apprenticeship and Travels, Vol. I (of 2)",
    image:
      "https://www.gutenberg.org/cache/epub/36483/pg36483.cover.medium.jpg",
    author: "Goethe, Johann Wolfgang von",
    category: "self",
    sample:
      "This gripping book will keep you.This fascinating literature will transport you.This mesmerizing book will take you.",
    discription:
      "This gripping prose will transport you.This unputdownable work will captivate you.This spellbinding story will transport you.This thought-provoking book will leave you.This intriguing narrative will keep you.This entertaining story will take you.This gripping prose will leave a lasting impression on you.This unputdownable prose will transport you.This gripping tale will transport you.This thought-provoking book will leave a lasting impression on you.This spellbinding book will keep you.This mesmerizing narrative will captivate you.This mesmerizing prose will transport you.This captivating prose will transport you.This intriguing tale will leave a lasting impression on you.This entertaining narrative will mesmerize you.This captivating work will leave you.This spellbinding work will keep you.This fascinating work will transport you.This gripping novel will leave a lasting impression on you.",
  },
  {
    id: "99466774-9680-4710-9e4c-e1c1d5742f24",
    title: "Kuninkaitten kuningas",
    image:
      "https://www.gutenberg.org/cache/epub/69933/pg69933.cover.medium.jpg",
    author: "Wells, H. G. (Herbert George)",
    category: "self",
    sample:
      "This unputdownable story will leave a lasting impression on you.This spellbinding story will captivate you.This spellbinding novel will take you.",
    discription:
      "This unputdownable narrative will take you.This fascinating prose will transport you.This thought-provoking literature will captivate you.This spellbinding book will keep you.This mesmerizing story will mesmerize you.This thought-provoking novel will keep you.This captivating prose will leave you.This entertaining prose will keep you.This intriguing literature will leave you.This spellbinding tale will keep you.This captivating tale will captivate you.This entertaining narrative will leave you.This captivating fiction will mesmerize you.This gripping narrative will leave a lasting impression on you.This spellbinding book will leave a lasting impression on you.This spellbinding literature will leave a lasting impression on you.This intriguing novel will take you.This unputdownable narrative will mesmerize you.This thought-provoking book will mesmerize you.This captivating tale will leave a lasting impression on you.",
  },
  {
    id: "594ae8cd-c053-4def-83e3-59cf42fb75a8",
    title:
      "Broad-Sword and Single-Stick: With Chapters on Quarter-Staff, Bayonet, Cudgel, Shillalah, Walking-Stick, Umbrella and Other Weapons of Self-Defence",
    image:
      "https://www.gutenberg.org/cache/epub/31214/pg31214.cover.medium.jpg",
    author: "Headley, Rowland George Allanson-Winn, Baron",
    category: "self",
    sample:
      "This fascinating book will transport you.This fascinating book will transport you.This intriguing book will mesmerize you.",
    discription:
      "This entertaining narrative will take you.This spellbinding narrative will leave a lasting impression on you.This spellbinding literature will mesmerize you.This thought-provoking work will take you.This unputdownable fiction will mesmerize you.This unputdownable narrative will keep you.This gripping narrative will transport you.This unputdownable literature will leave a lasting impression on you.This compelling prose will mesmerize you.This spellbinding work will leave a lasting impression on you.This thought-provoking novel will leave you.This captivating book will leave a lasting impression on you.This intriguing literature will leave you.This mesmerizing prose will keep you.This spellbinding book will captivate you.This fascinating novel will transport you.This unputdownable novel will transport you.This intriguing book will take you.This entertaining novel will captivate you.This intriguing fiction will leave you.",
  },
  {
    id: "5a590168-98a2-4a2e-9ec9-485634621e84",
    title: "A Double Story",
    image: "https://www.gutenberg.org/cache/epub/5676/pg5676.cover.medium.jpg",
    author: "MacDonald, George",
    category: "self",
    sample:
      "This gripping book will leave you.This captivating story will keep you.This entertaining fiction will transport you.",
    discription:
      "This gripping prose will leave a lasting impression on you.This entertaining book will leave a lasting impression on you.This unputdownable novel will captivate you.This captivating story will take you.This gripping narrative will mesmerize you.This intriguing book will captivate you.This mesmerizing fiction will leave a lasting impression on you.This intriguing prose will mesmerize you.This unputdownable literature will captivate you.This mesmerizing tale will keep you.This unputdownable prose will leave you.This captivating work will take you.This entertaining literature will leave you.This fascinating book will mesmerize you.This fascinating literature will transport you.This thought-provoking tale will keep you.This thought-provoking tale will keep you.This thought-provoking fiction will take you.This compelling narrative will leave a lasting impression on you.This captivating fiction will mesmerize you.",
  },
  {
    id: "26884686-1d4e-4038-9f2b-e94f1959d375",
    title: "Siddhartha: A Poem of India",
    image:
      "https://www.gutenberg.org/cache/epub/58344/pg58344.cover.medium.jpg",
    author: "Hesse, Hermann",
    category: "self",
    sample:
      "This mesmerizing novel will keep you.This compelling novel will keep you.This gripping story will keep you.",
    discription:
      "This unputdownable narrative will captivate you.This fascinating book will take you.This thought-provoking book will mesmerize you.This gripping prose will mesmerize you.This unputdownable literature will transport you.This spellbinding novel will take you.This unputdownable prose will take you.This gripping work will leave you.This mesmerizing tale will leave a lasting impression on you.This entertaining tale will leave a lasting impression on you.This unputdownable novel will take you.This fascinating prose will leave you.This mesmerizing fiction will transport you.This thought-provoking work will transport you.This fascinating tale will captivate you.This fascinating narrative will keep you.This thought-provoking novel will keep you.This compelling tale will leave you.This thought-provoking novel will keep you.This intriguing work will leave you.",
  },
  {
    id: "708656b9-63ed-4dfd-93a7-89642c791da1",
    title:
      "Les R\u00eaveries du Promeneur Solitaire: Ouvrage faisant suite aux Confessions",
    image:
      "https://www.gutenberg.org/cache/epub/65434/pg65434.cover.medium.jpg",
    author: "Rousseau, Jean-Jacques",
    category: "self",
    sample:
      "This entertaining tale will take you.This thought-provoking fiction will keep you.This fascinating work will leave a lasting impression on you.",
    discription:
      "This spellbinding novel will transport you.This captivating prose will leave you.This captivating literature will take you.This unputdownable prose will mesmerize you.This entertaining prose will leave a lasting impression on you.This entertaining work will mesmerize you.This compelling book will take you.This mesmerizing narrative will captivate you.This captivating novel will transport you.This captivating narrative will mesmerize you.This captivating fiction will keep you.This captivating book will take you.This spellbinding book will leave you.This captivating novel will captivate you.This mesmerizing narrative will leave you.This captivating prose will take you.This unputdownable book will leave you.This spellbinding story will take you.This mesmerizing narrative will keep you.This captivating narrative will mesmerize you.",
  },
  {
    id: "517cc2dd-0b87-46a8-b3f1-4b191afc1d05",
    title: "Self-Control, Its Kingship and Majesty",
    image:
      "https://www.gutenberg.org/cache/epub/51469/pg51469.cover.medium.jpg",
    author: "Jordan, William George",
    category: "self",
    sample:
      "This spellbinding narrative will keep you.This spellbinding narrative will keep you.This entertaining story will take you.",
    discription:
      "This fascinating prose will captivate you.This fascinating story will captivate you.This unputdownable literature will take you.This mesmerizing work will mesmerize you.This fascinating book will transport you.This unputdownable narrative will leave you.This spellbinding tale will mesmerize you.This fascinating novel will take you.This thought-provoking work will take you.This compelling fiction will captivate you.This fascinating novel will take you.This fascinating prose will captivate you.This unputdownable novel will mesmerize you.This thought-provoking novel will captivate you.This mesmerizing tale will captivate you.This spellbinding novel will mesmerize you.This mesmerizing narrative will transport you.This gripping literature will keep you.This thought-provoking book will captivate you.This entertaining book will take you.",
  },
  {
    id: "e0b2f18c-25d0-4268-8a5c-b0970f9beda8",
    title: "El caso extra\u00f1o del Doctor Jekyll",
    image:
      "https://www.gutenberg.org/cache/epub/62627/pg62627.cover.medium.jpg",
    author: "Stevenson, Robert Louis",
    category: "self",
    sample:
      "This intriguing novel will take you.This gripping prose will take you.This gripping work will take you.",
    discription:
      "This entertaining prose will mesmerize you.This entertaining fiction will leave you.This fascinating prose will leave you.This intriguing tale will keep you.This spellbinding fiction will mesmerize you.This compelling book will mesmerize you.This entertaining prose will leave a lasting impression on you.This thought-provoking tale will leave you.This captivating story will leave a lasting impression on you.This fascinating story will take you.This captivating story will mesmerize you.This intriguing story will captivate you.This entertaining prose will keep you.This mesmerizing literature will take you.This entertaining fiction will take you.This fascinating literature will leave you.This fascinating story will take you.This captivating book will take you.This mesmerizing prose will leave you.This captivating work will leave you.",
  },
  {
    id: "7240445f-4f05-41af-80c0-921f68559810",
    title: "A Book of Golden Deeds",
    image: "https://www.gutenberg.org/cache/epub/6489/pg6489.cover.medium.jpg",
    author: "Yonge, Charlotte M. (Charlotte Mary)",
    category: "self",
    sample:
      "This mesmerizing fiction will captivate you.This intriguing narrative will leave a lasting impression on you.This entertaining story will captivate you.",
    discription:
      "This spellbinding novel will leave a lasting impression on you.This unputdownable tale will mesmerize you.This intriguing tale will leave you.This spellbinding book will leave a lasting impression on you.This entertaining story will keep you.This fascinating narrative will leave you.This entertaining story will leave a lasting impression on you.This fascinating novel will leave a lasting impression on you.This intriguing work will leave a lasting impression on you.This fascinating narrative will mesmerize you.This thought-provoking literature will captivate you.This captivating prose will take you.This captivating literature will take you.This captivating fiction will keep you.This thought-provoking novel will leave a lasting impression on you.This fascinating tale will take you.This entertaining fiction will keep you.This mesmerizing tale will leave you.This compelling prose will mesmerize you.This fascinating prose will transport you.",
  },
  {
    id: "21ce6a81-7b95-4f52-90b9-a27bbdad319b",
    title: "The Intellectual Life",
    image:
      "https://www.gutenberg.org/cache/epub/32151/pg32151.cover.medium.jpg",
    author: "Hamerton, Philip Gilbert",
    category: "self",
    sample:
      "This entertaining novel will transport you.This mesmerizing tale will leave a lasting impression on you.This fascinating book will leave you.",
    discription:
      "This fascinating narrative will leave a lasting impression on you.This spellbinding narrative will take you.This fascinating prose will mesmerize you.This gripping tale will transport you.This intriguing book will mesmerize you.This mesmerizing fiction will mesmerize you.This unputdownable book will keep you.This intriguing book will keep you.This captivating fiction will take you.This mesmerizing book will leave a lasting impression on you.This unputdownable fiction will take you.This intriguing fiction will captivate you.This captivating fiction will leave a lasting impression on you.This entertaining story will mesmerize you.This fascinating tale will captivate you.This compelling narrative will mesmerize you.This unputdownable tale will transport you.This thought-provoking fiction will mesmerize you.This captivating novel will take you.This captivating novel will take you.",
  },
  {
    id: "1808ce6d-d011-485c-ae7c-de4b713a8eea",
    title: "Increasing Personal Efficiency",
    image:
      "https://www.gutenberg.org/cache/epub/36898/pg36898.cover.medium.jpg",
    author: "Conwell, Russell H.",
    category: "self",
    sample:
      "This captivating prose will keep you.This gripping story will leave you.This fascinating narrative will leave you.",
    discription:
      "This unputdownable literature will leave you.This spellbinding novel will keep you.This spellbinding novel will transport you.This unputdownable literature will leave you.This fascinating tale will leave you.This entertaining novel will leave you.This spellbinding novel will leave a lasting impression on you.This thought-provoking novel will keep you.This compelling literature will transport you.This unputdownable story will mesmerize you.This mesmerizing prose will captivate you.This captivating tale will mesmerize you.This fascinating fiction will transport you.This mesmerizing story will leave you.This compelling tale will keep you.This thought-provoking book will transport you.This thought-provoking work will take you.This captivating prose will leave you.This thought-provoking work will captivate you.This fascinating tale will mesmerize you.",
  },
  {
    id: "12ecb078-ba27-4a32-88ba-77507a93ba32",
    title: "Mark the Match Boy; or, Richard Hunter's Ward",
    image:
      "https://www.gutenberg.org/cache/epub/53071/pg53071.cover.medium.jpg",
    author: "Alger, Horatio, Jr.",
    category: "self",
    sample:
      "This compelling fiction will keep you.This captivating story will leave you.This intriguing work will take you.",
    discription:
      "This fascinating narrative will take you.This unputdownable narrative will keep you.This mesmerizing fiction will mesmerize you.This thought-provoking literature will take you.This compelling work will leave you.This fascinating narrative will transport you.This unputdownable literature will leave a lasting impression on you.This spellbinding book will keep you.This gripping narrative will take you.This captivating novel will leave a lasting impression on you.This intriguing story will leave a lasting impression on you.This captivating prose will mesmerize you.This compelling prose will transport you.This thought-provoking fiction will leave you.This intriguing literature will transport you.This mesmerizing work will keep you.This intriguing fiction will take you.This captivating tale will take you.This mesmerizing work will take you.This intriguing narrative will take you.",
  },
  {
    id: "1af230ce-2560-4eab-af04-98e327cb4e53",
    title: "Christina Alberta's father",
    image:
      "https://www.gutenberg.org/cache/epub/69410/pg69410.cover.medium.jpg",
    author: "Wells, H. G. (Herbert George)",
    category: "self",
    sample:
      "This intriguing narrative will leave you.This fascinating story will keep you.This spellbinding prose will take you.",
    discription:
      "This mesmerizing novel will captivate you.This spellbinding work will leave a lasting impression on you.This spellbinding prose will leave you.This captivating tale will mesmerize you.This captivating story will take you.This captivating fiction will leave a lasting impression on you.This unputdownable literature will leave you.This spellbinding narrative will mesmerize you.This compelling literature will leave a lasting impression on you.This mesmerizing prose will transport you.This thought-provoking novel will leave a lasting impression on you.This mesmerizing book will captivate you.This mesmerizing narrative will leave you.This gripping book will keep you.This intriguing narrative will keep you.This compelling prose will leave a lasting impression on you.This compelling prose will take you.This thought-provoking book will transport you.This compelling work will mesmerize you.This fascinating tale will leave you.",
  },
  {
    id: "cc8dd003-a78b-40e6-a098-55b155db415b",
    title: "A Little Boy Lost",
    image:
      "https://www.gutenberg.org/cache/epub/38421/pg38421.cover.medium.jpg",
    author: "Hudson, W. H. (William Henry)",
    category: "self",
    sample:
      "This unputdownable novel will mesmerize you.This unputdownable novel will mesmerize you.This entertaining tale will keep you.",
    discription:
      "This spellbinding tale will keep you.This mesmerizing tale will transport you.This captivating literature will transport you.This spellbinding novel will keep you.This entertaining book will transport you.This intriguing novel will mesmerize you.This spellbinding story will mesmerize you.This mesmerizing tale will captivate you.This mesmerizing prose will take you.This fascinating prose will mesmerize you.This unputdownable tale will mesmerize you.This gripping literature will keep you.This captivating fiction will leave you.This unputdownable book will captivate you.This intriguing literature will keep you.This mesmerizing story will leave a lasting impression on you.This mesmerizing tale will keep you.This unputdownable narrative will keep you.This fascinating tale will keep you.This unputdownable novel will leave a lasting impression on you.",
  },
  {
    id: "272e447a-ced7-4aa8-9669-7387628ea26a",
    title: "The Errand Boy; Or, How Phil Brent Won Success",
    image: "https://www.gutenberg.org/cache/epub/462/pg462.cover.medium.jpg",
    author: "Alger, Horatio, Jr.",
    category: "self",
    sample:
      "This thought-provoking book will take you.This entertaining prose will take you.This compelling literature will take you.",
    discription:
      "This mesmerizing literature will take you.This captivating story will leave a lasting impression on you.This intriguing literature will leave you.This spellbinding book will take you.This intriguing book will keep you.This captivating literature will captivate you.This mesmerizing fiction will keep you.This spellbinding fiction will mesmerize you.This captivating tale will mesmerize you.This unputdownable fiction will transport you.This spellbinding fiction will leave a lasting impression on you.This mesmerizing literature will mesmerize you.This captivating literature will keep you.This compelling story will transport you.This mesmerizing work will captivate you.This spellbinding novel will keep you.This intriguing narrative will leave a lasting impression on you.This mesmerizing tale will transport you.This compelling book will keep you.This unputdownable tale will transport you.",
  },
  {
    id: "95ce2047-070b-4439-ac7f-54f07dd14f6a",
    title: "Self-control: A Novel",
    image:
      "https://www.gutenberg.org/cache/epub/41196/pg41196.cover.medium.jpg",
    author: "Brunton, Mary",
    category: "self",
    sample:
      "This gripping work will keep you.This fascinating novel will transport you.This spellbinding tale will captivate you.",
    discription:
      "This captivating book will mesmerize you.This entertaining prose will take you.This spellbinding prose will captivate you.This thought-provoking work will keep you.This captivating tale will keep you.This captivating narrative will mesmerize you.This spellbinding literature will leave a lasting impression on you.This compelling tale will transport you.This captivating story will leave you.This thought-provoking work will leave a lasting impression on you.This fascinating tale will leave you.This mesmerizing story will leave you.This fascinating literature will mesmerize you.This intriguing novel will transport you.This unputdownable prose will leave you.This gripping literature will keep you.This intriguing narrative will captivate you.This unputdownable tale will leave a lasting impression on you.This captivating novel will take you.This unputdownable narrative will keep you.",
  },
  {
    id: "b447a907-1b0d-4f61-98cd-1464cf1e60fa",
    title: "Every Man His Own University",
    image:
      "https://www.gutenberg.org/cache/epub/36955/pg36955.cover.medium.jpg",
    author: "Conwell, Russell H.",
    category: "self",
    sample:
      "This gripping work will leave you.This unputdownable story will keep you.This captivating book will mesmerize you.",
    discription:
      "This gripping story will captivate you.This intriguing narrative will leave a lasting impression on you.This intriguing tale will mesmerize you.This spellbinding work will leave a lasting impression on you.This unputdownable prose will transport you.This gripping prose will leave you.This thought-provoking narrative will keep you.This fascinating work will take you.This unputdownable fiction will transport you.This intriguing literature will transport you.This spellbinding story will captivate you.This unputdownable tale will leave a lasting impression on you.This unputdownable literature will transport you.This mesmerizing book will transport you.This compelling story will keep you.This thought-provoking prose will leave you.This unputdownable novel will transport you.This fascinating work will transport you.This fascinating fiction will mesmerize you.This fascinating literature will keep you.",
  },
  {
    id: "a08daade-ae57-46bd-b0e5-9a7340b35daf",
    title: "A Man's Value to Society: Studies in Self Culture and Character",
    image:
      "https://www.gutenberg.org/cache/epub/28875/pg28875.cover.medium.jpg",
    author: "Hillis, Newell Dwight",
    category: "self",
    sample:
      "This compelling narrative will leave you.This compelling fiction will leave you.This spellbinding book will leave you.",
    discription:
      "This entertaining novel will leave a lasting impression on you.This thought-provoking novel will mesmerize you.This mesmerizing book will keep you.This fascinating story will leave a lasting impression on you.This spellbinding literature will leave a lasting impression on you.This spellbinding work will keep you.This captivating novel will take you.This intriguing book will mesmerize you.This entertaining literature will transport you.This mesmerizing tale will mesmerize you.This fascinating story will leave you.This gripping literature will mesmerize you.This spellbinding tale will leave you.This spellbinding novel will mesmerize you.This unputdownable narrative will keep you.This gripping tale will mesmerize you.This fascinating book will leave a lasting impression on you.This mesmerizing story will leave you.This spellbinding story will keep you.This intriguing book will take you.",
  },
  {
    id: "83c440f8-2336-4944-8577-484ee96d22ba",
    title: "Cookery and Dining in Imperial Rome",
    image:
      "https://www.gutenberg.org/cache/epub/29728/pg29728.cover.medium.jpg",
    author: "Apicius",
    category: "cook",
    sample:
      "This captivating fiction will leave a lasting impression on you.This fascinating story will captivate you.This thought-provoking work will leave a lasting impression on you.",
    discription:
      "This captivating narrative will mesmerize you.This unputdownable prose will take you.This spellbinding book will mesmerize you.This spellbinding literature will keep you.This intriguing narrative will leave a lasting impression on you.This intriguing literature will leave a lasting impression on you.This fascinating novel will captivate you.This gripping novel will leave you.This captivating book will mesmerize you.This gripping novel will transport you.This gripping prose will mesmerize you.This unputdownable fiction will keep you.This captivating prose will mesmerize you.This thought-provoking narrative will mesmerize you.This entertaining book will keep you.This compelling narrative will leave a lasting impression on you.This compelling work will keep you.This captivating narrative will captivate you.This fascinating literature will transport you.This compelling fiction will keep you.",
  },
  {
    id: "151bb15e-9c63-4728-b879-ce31236b4086",
    title: "The Book of Household Management",
    image:
      "https://www.gutenberg.org/cache/epub/10136/pg10136.cover.medium.jpg",
    author: "Beeton, Mrs. (Isabella Mary)",
    category: "cook",
    sample:
      "This thought-provoking tale will leave you.This captivating literature will take you.This captivating tale will leave a lasting impression on you.",
    discription:
      "This fascinating work will take you.This captivating prose will captivate you.This entertaining story will keep you.This spellbinding narrative will leave a lasting impression on you.This compelling narrative will leave you.This entertaining story will keep you.This entertaining prose will leave a lasting impression on you.This intriguing work will transport you.This compelling tale will keep you.This intriguing tale will take you.This compelling tale will leave you.This unputdownable narrative will leave a lasting impression on you.This entertaining book will keep you.This entertaining literature will leave you.This entertaining prose will take you.This captivating book will transport you.This fascinating tale will transport you.This intriguing narrative will keep you.This thought-provoking narrative will leave a lasting impression on you.This compelling novel will leave you.",
  },
  {
    id: "84293e10-645d-4d1c-8caf-c30066c28849",
    title:
      'The "ideal" cookery book: A reliable guide for home cooking: containing 249 useful and dainty recipes (third edition)',
    image:
      "https://www.gutenberg.org/cache/epub/69876/pg69876.cover.medium.jpg",
    author: "Clarke, Lilian",
    category: "cook",
    sample:
      "This thought-provoking narrative will captivate you.This entertaining story will captivate you.This spellbinding story will keep you.",
    discription:
      "This intriguing work will leave you.This compelling tale will captivate you.This entertaining story will keep you.This gripping book will leave a lasting impression on you.This unputdownable narrative will captivate you.This spellbinding literature will transport you.This thought-provoking story will mesmerize you.This fascinating prose will leave a lasting impression on you.This intriguing narrative will keep you.This intriguing novel will leave a lasting impression on you.This entertaining story will leave a lasting impression on you.This mesmerizing fiction will mesmerize you.This captivating novel will transport you.This compelling prose will captivate you.This thought-provoking fiction will leave you.This fascinating narrative will keep you.This captivating narrative will transport you.This entertaining fiction will keep you.This mesmerizing narrative will leave a lasting impression on you.This compelling prose will transport you.",
  },
  {
    id: "961e184c-dd4f-4abf-9e3b-6d7db84ebdaf",
    title: "Pennsylvania Dutch Cooking",
    image:
      "https://www.gutenberg.org/cache/epub/26558/pg26558.cover.medium.jpg",
    author: "Unknown",
    category: "cook",
    sample:
      "This gripping fiction will leave you.This compelling novel will leave you.This unputdownable narrative will keep you.",
    discription:
      "This spellbinding book will leave a lasting impression on you.This captivating story will keep you.This captivating book will leave a lasting impression on you.This intriguing literature will mesmerize you.This thought-provoking narrative will captivate you.This fascinating work will keep you.This mesmerizing prose will take you.This intriguing literature will leave you.This thought-provoking literature will leave a lasting impression on you.This unputdownable work will transport you.This spellbinding work will transport you.This intriguing narrative will mesmerize you.This captivating work will captivate you.This spellbinding novel will leave you.This gripping tale will leave a lasting impression on you.This spellbinding novel will transport you.This entertaining literature will take you.This intriguing literature will leave a lasting impression on you.This compelling narrative will transport you.This compelling literature will captivate you.",
  },
  {
    id: "42ee5827-9a92-4e51-9385-f581073a8f77",
    title: "Cheese and its economical uses in the diet",
    image:
      "https://www.gutenberg.org/cache/epub/70067/pg70067.cover.medium.jpg",
    author: "Hunt, Caroline Louisa",
    category: "cook",
    sample:
      "This entertaining work will leave a lasting impression on you.This fascinating story will captivate you.This unputdownable work will captivate you.",
    discription:
      "This fascinating novel will leave a lasting impression on you.This intriguing work will take you.This gripping book will leave you.This mesmerizing book will captivate you.This unputdownable narrative will leave a lasting impression on you.This entertaining literature will mesmerize you.This gripping tale will leave you.This fascinating novel will mesmerize you.This gripping fiction will keep you.This intriguing work will mesmerize you.This mesmerizing tale will take you.This unputdownable tale will transport you.This compelling narrative will transport you.This intriguing book will leave a lasting impression on you.This mesmerizing work will leave you.This captivating novel will keep you.This thought-provoking book will take you.This mesmerizing novel will take you.This thought-provoking tale will transport you.This intriguing literature will transport you.",
  },
  {
    id: "d83d6f82-19b0-484d-93a7-d93ad3ba4742",
    title:
      "The Whitehouse Cookbook (1887): Cooking, Toilet and Household Recipes, Menus, Dinner-Giving, Table Etiquette, Care of the Sick, Health Suggestions, Facts Worth Knowing, Etc., Etc.; The Whole Comprising a Comprehensive Cyclopedia of Information for the Home",
    image:
      "https://www.gutenberg.org/cache/epub/13923/pg13923.cover.medium.jpg",
    author: "Ziemann, Hugo",
    category: "cook",
    sample:
      "This spellbinding narrative will captivate you.This captivating novel will captivate you.This thought-provoking work will keep you.",
    discription:
      "This unputdownable prose will transport you.This mesmerizing prose will keep you.This intriguing literature will take you.This gripping novel will captivate you.This entertaining prose will transport you.This fascinating work will keep you.This captivating story will mesmerize you.This entertaining narrative will take you.This mesmerizing story will transport you.This fascinating literature will take you.This spellbinding literature will transport you.This fascinating literature will take you.This fascinating novel will leave you.This spellbinding narrative will leave you.This fascinating narrative will mesmerize you.This fascinating prose will transport you.This thought-provoking literature will transport you.This entertaining prose will take you.This unputdownable prose will leave a lasting impression on you.This entertaining narrative will mesmerize you.",
  },
  {
    id: "c40a958a-defa-4c28-aa0f-a5805ebf29a0",
    title: "Foods that will win the war and how to cook them (1918)",
    image:
      "https://www.gutenberg.org/cache/epub/15464/pg15464.cover.medium.jpg",
    author: "Goudiss, Alberta M. (Alberta Moorhouse)",
    category: "cook",
    sample:
      "This spellbinding literature will mesmerize you.This mesmerizing fiction will leave you.This entertaining novel will leave you.",
    discription:
      "This thought-provoking work will keep you.This gripping tale will leave a lasting impression on you.This compelling prose will transport you.This unputdownable story will leave a lasting impression on you.This compelling prose will transport you.This thought-provoking fiction will mesmerize you.This captivating fiction will leave you.This captivating work will leave you.This intriguing work will captivate you.This intriguing tale will leave a lasting impression on you.This intriguing tale will captivate you.This thought-provoking work will mesmerize you.This spellbinding prose will captivate you.This unputdownable novel will transport you.This spellbinding novel will leave you.This captivating literature will leave you.This thought-provoking fiction will leave you.This intriguing story will mesmerize you.This intriguing fiction will leave you.This spellbinding fiction will take you.",
  },
  {
    id: "4689c672-34d5-415f-a8cd-a56ec429ad45",
    title:
      "The Forme of Cury: A Roll of Ancient English Cookery Compiled, about A.D. 1390",
    image: "https://www.gutenberg.org/cache/epub/8102/pg8102.cover.medium.jpg",
    author: "Pegge, Samuel",
    category: "cook",
    sample:
      "This entertaining literature will keep you.This captivating book will captivate you.This entertaining work will take you.",
    discription:
      "This entertaining work will leave you.This unputdownable book will mesmerize you.This fascinating fiction will leave you.This unputdownable fiction will leave a lasting impression on you.This mesmerizing fiction will take you.This mesmerizing fiction will mesmerize you.This spellbinding book will leave you.This gripping book will transport you.This fascinating book will leave you.This captivating narrative will mesmerize you.This mesmerizing narrative will mesmerize you.This intriguing story will mesmerize you.This captivating literature will leave a lasting impression on you.This thought-provoking fiction will take you.This thought-provoking fiction will keep you.This mesmerizing book will keep you.This mesmerizing prose will captivate you.This compelling work will take you.This intriguing narrative will transport you.This gripping prose will keep you.",
  },
  {
    id: "1ff2a5a6-49db-47b9-a6b2-6a61385cffcd",
    title: "The American Frugal Housewife",
    image:
      "https://www.gutenberg.org/cache/epub/13493/pg13493.cover.medium.jpg",
    author: "Child, Lydia Maria",
    category: "cook",
    sample:
      "This unputdownable narrative will leave a lasting impression on you.This thought-provoking prose will leave a lasting impression on you.This mesmerizing literature will transport you.",
    discription:
      "This unputdownable narrative will keep you.This captivating work will keep you.This compelling novel will captivate you.This entertaining story will transport you.This compelling narrative will take you.This gripping work will leave a lasting impression on you.This fascinating prose will take you.This captivating story will leave a lasting impression on you.This compelling literature will mesmerize you.This intriguing narrative will captivate you.This thought-provoking fiction will take you.This captivating novel will captivate you.This mesmerizing work will captivate you.This compelling novel will take you.This intriguing work will leave a lasting impression on you.This compelling book will leave you.This captivating narrative will leave you.This compelling story will captivate you.This intriguing novel will transport you.This unputdownable tale will captivate you.",
  },
  {
    id: "9b1ab7ff-3479-4bdf-800c-187808419b0c",
    title:
      "The Candy Maker's Guide: A Collection of Choice Recipes for Sugar Boiling",
    image:
      "https://www.gutenberg.org/cache/epub/30293/pg30293.cover.medium.jpg",
    author: "Fletcher Manufacturing Company",
    category: "cook",
    sample:
      "This mesmerizing fiction will mesmerize you.This thought-provoking novel will leave you.This captivating narrative will leave you.",
    discription:
      "This captivating prose will mesmerize you.This unputdownable story will take you.This gripping tale will transport you.This unputdownable work will take you.This unputdownable narrative will keep you.This entertaining tale will leave a lasting impression on you.This spellbinding novel will leave a lasting impression on you.This captivating narrative will leave a lasting impression on you.This gripping work will captivate you.This intriguing literature will take you.This mesmerizing prose will mesmerize you.This intriguing prose will mesmerize you.This compelling work will leave a lasting impression on you.This compelling novel will captivate you.This entertaining literature will captivate you.This compelling prose will mesmerize you.This gripping work will take you.This mesmerizing book will take you.This fascinating fiction will transport you.This entertaining tale will captivate you.",
  },
  {
    id: "5255e0f0-bd8c-4d45-a654-f6f82d40146c",
    title: "A Dissertation upon Roast Pig",
    image:
      "https://www.gutenberg.org/cache/epub/43566/pg43566.cover.medium.jpg",
    author: "Lamb, Charles",
    category: "cook",
    sample:
      "This gripping literature will leave you.This spellbinding book will mesmerize you.This gripping fiction will leave you.",
    discription:
      "This compelling novel will transport you.This unputdownable book will captivate you.This spellbinding novel will transport you.This gripping tale will leave you.This fascinating book will keep you.This thought-provoking literature will mesmerize you.This compelling literature will leave a lasting impression on you.This unputdownable narrative will captivate you.This unputdownable prose will mesmerize you.This spellbinding book will keep you.This captivating literature will transport you.This gripping prose will keep you.This unputdownable work will leave you.This gripping fiction will keep you.This spellbinding narrative will take you.This entertaining literature will keep you.This unputdownable narrative will keep you.This spellbinding prose will leave you.This captivating book will captivate you.This captivating fiction will leave you.",
  },
  {
    id: "23d7e9a7-3066-4161-a02b-9798b7aa2a15",
    title:
      "Good Things to Eat, as Suggested by Rufus: A Collection of Practical Recipes for Preparing Meats, Game, Fowl, Fish, Puddings, Pastries, Etc.",
    image:
      "https://www.gutenberg.org/cache/epub/18435/pg18435.cover.medium.jpg",
    author: "Estes, Rufus",
    category: "cook",
    sample:
      "This gripping literature will mesmerize you.This captivating narrative will keep you.This compelling narrative will mesmerize you.",
    discription:
      "This intriguing story will captivate you.This compelling book will mesmerize you.This unputdownable narrative will transport you.This captivating tale will keep you.This entertaining work will mesmerize you.This intriguing prose will take you.This gripping literature will take you.This spellbinding literature will captivate you.This entertaining literature will take you.This spellbinding story will captivate you.This spellbinding tale will keep you.This captivating prose will leave a lasting impression on you.This mesmerizing fiction will keep you.This entertaining prose will keep you.This gripping prose will captivate you.This spellbinding narrative will transport you.This mesmerizing fiction will captivate you.This compelling tale will keep you.This intriguing book will leave you.This spellbinding work will transport you.",
  },
  {
    id: "d9a30d7d-da67-4743-9482-41141b5a8cb5",
    title: "The Ladies Book of Useful Information: Compiled from many sources",
    image:
      "https://www.gutenberg.org/cache/epub/26368/pg26368.cover.medium.jpg",
    author: "Anonymous",
    category: "cook",
    sample:
      "This gripping book will leave you.This unputdownable story will take you.This entertaining book will captivate you.",
    discription:
      "This compelling book will captivate you.This gripping prose will take you.This spellbinding narrative will leave you.This thought-provoking novel will leave you.This compelling tale will mesmerize you.This spellbinding work will mesmerize you.This gripping narrative will transport you.This fascinating narrative will transport you.This entertaining narrative will leave you.This gripping literature will mesmerize you.This captivating narrative will leave you.This thought-provoking literature will keep you.This captivating narrative will take you.This thought-provoking tale will transport you.This fascinating book will take you.This fascinating prose will mesmerize you.This spellbinding work will mesmerize you.This unputdownable fiction will mesmerize you.This spellbinding prose will captivate you.This spellbinding novel will mesmerize you.",
  },
  {
    id: "eddddf67-1ba0-4cee-ad28-94815a7738a6",
    title:
      "Science in the Kitchen: A Scientific Treatise On Food Substances and Their Dietetic Properties, Together with a Practical Explanation of the Principles of Healthful Cookery, and a Large Number of Original, Palatable, and Wholesome Recipes",
    image:
      "https://www.gutenberg.org/cache/epub/12238/pg12238.cover.medium.jpg",
    author: "Kellogg, E. E. (Ella Ervilla)",
    category: "cook",
    sample:
      "This captivating book will keep you.This unputdownable tale will take you.This gripping prose will leave a lasting impression on you.",
    discription:
      "This compelling tale will mesmerize you.This gripping literature will leave you.This unputdownable narrative will keep you.This spellbinding narrative will mesmerize you.This spellbinding novel will leave you.This gripping prose will mesmerize you.This entertaining tale will mesmerize you.This compelling work will mesmerize you.This fascinating book will leave a lasting impression on you.This compelling literature will captivate you.This captivating work will leave a lasting impression on you.This fascinating story will leave you.This gripping work will mesmerize you.This intriguing literature will leave you.This captivating narrative will take you.This unputdownable prose will take you.This gripping literature will captivate you.This thought-provoking book will leave you.This compelling story will leave you.This mesmerizing narrative will mesmerize you.",
  },
  {
    id: "32786a5c-ec74-46b9-b66b-ee0133b0fc57",
    title: "The Closet of Sir Kenelm Digby Knight Opened",
    image:
      "https://www.gutenberg.org/cache/epub/16441/pg16441.cover.medium.jpg",
    author: "Digby, Kenelm",
    category: "cook",
    sample:
      "This fascinating story will take you.This thought-provoking fiction will captivate you.This intriguing literature will keep you.",
    discription:
      "This fascinating work will leave a lasting impression on you.This unputdownable novel will take you.This entertaining book will leave you.This thought-provoking story will leave you.This intriguing book will leave a lasting impression on you.This mesmerizing work will take you.This unputdownable work will take you.This spellbinding literature will leave a lasting impression on you.This intriguing narrative will captivate you.This unputdownable fiction will leave you.This fascinating literature will leave a lasting impression on you.This gripping narrative will take you.This unputdownable story will take you.This unputdownable story will leave you.This thought-provoking prose will mesmerize you.This entertaining novel will keep you.This intriguing work will captivate you.This spellbinding prose will keep you.This thought-provoking book will transport you.This unputdownable prose will take you.",
  },
  {
    id: "5472f7f0-e0b6-4930-885d-feed4718c9d2",
    title: "The accomplisht cook: or, The art & mystery of cookery",
    image:
      "https://www.gutenberg.org/cache/epub/22790/pg22790.cover.medium.jpg",
    author: "May, Robert",
    category: "cook",
    sample:
      "This spellbinding fiction will leave a lasting impression on you.This entertaining tale will take you.This thought-provoking tale will keep you.",
    discription:
      "This compelling literature will leave a lasting impression on you.This compelling story will transport you.This gripping tale will transport you.This spellbinding novel will keep you.This gripping work will captivate you.This compelling novel will take you.This intriguing prose will mesmerize you.This captivating work will keep you.This entertaining work will take you.This mesmerizing novel will keep you.This entertaining book will keep you.This captivating narrative will keep you.This compelling work will mesmerize you.This intriguing story will captivate you.This captivating fiction will leave a lasting impression on you.This mesmerizing work will mesmerize you.This mesmerizing work will captivate you.This entertaining novel will captivate you.This captivating prose will leave a lasting impression on you.This thought-provoking novel will take you.",
  },
  {
    id: "357e190f-cc46-4434-90c7-77b6543c1242",
    title: "The Cook's Oracle; and Housekeeper's Manual",
    image:
      "https://www.gutenberg.org/cache/epub/28681/pg28681.cover.medium.jpg",
    author: "Kitchiner, William",
    category: "cook",
    sample:
      "This gripping literature will take you.This gripping novel will keep you.This gripping tale will leave a lasting impression on you.",
    discription:
      "This entertaining narrative will captivate you.This mesmerizing narrative will take you.This thought-provoking work will captivate you.This mesmerizing story will mesmerize you.This gripping fiction will captivate you.This entertaining book will leave you.This thought-provoking work will take you.This fascinating tale will keep you.This thought-provoking work will leave a lasting impression on you.This thought-provoking fiction will leave a lasting impression on you.This entertaining prose will mesmerize you.This spellbinding book will keep you.This mesmerizing fiction will transport you.This fascinating book will transport you.This spellbinding story will mesmerize you.This intriguing tale will captivate you.This intriguing work will keep you.This spellbinding novel will transport you.This gripping prose will leave a lasting impression on you.This gripping book will captivate you.",
  },
  {
    id: "229ab18a-f774-4a97-880c-ef9ec2b42357",
    title: "The Complete Book of Cheese",
    image:
      "https://www.gutenberg.org/cache/epub/14293/pg14293.cover.medium.jpg",
    author: "Brown, Bob",
    category: "cook",
    sample:
      "This fascinating prose will mesmerize you.This unputdownable novel will transport you.This mesmerizing work will leave a lasting impression on you.",
    discription:
      "This mesmerizing work will captivate you.This thought-provoking prose will leave you.This spellbinding novel will captivate you.This captivating book will mesmerize you.This mesmerizing narrative will captivate you.This captivating work will captivate you.This intriguing work will captivate you.This captivating work will take you.This compelling novel will captivate you.This thought-provoking story will leave you.This spellbinding narrative will take you.This mesmerizing novel will leave you.This intriguing fiction will mesmerize you.This mesmerizing fiction will transport you.This captivating story will leave you.This thought-provoking story will transport you.This captivating literature will take you.This fascinating novel will take you.This mesmerizing prose will leave a lasting impression on you.This mesmerizing literature will transport you.",
  },
  {
    id: "80f4ce35-7561-4b55-be73-e7219458bbbf",
    title: "A Plain Cookery Book for the Working Classes",
    image:
      "https://www.gutenberg.org/cache/epub/22114/pg22114.cover.medium.jpg",
    author: "Francatelli, Charles Elm\u00e9",
    category: "cook",
    sample:
      "This fascinating book will transport you.This spellbinding literature will leave you.This compelling tale will mesmerize you.",
    discription:
      "This entertaining literature will keep you.This compelling literature will keep you.This thought-provoking book will captivate you.This compelling book will take you.This mesmerizing work will transport you.This intriguing tale will leave you.This fascinating fiction will keep you.This captivating fiction will captivate you.This thought-provoking prose will leave a lasting impression on you.This gripping tale will mesmerize you.This spellbinding story will leave you.This spellbinding tale will mesmerize you.This entertaining fiction will mesmerize you.This spellbinding prose will captivate you.This spellbinding tale will take you.This fascinating book will leave you.This spellbinding fiction will take you.This compelling prose will take you.This intriguing literature will mesmerize you.This thought-provoking book will leave a lasting impression on you.",
  },
  {
    id: "e7f460c2-3046-4f6f-88a0-a7da3b2bb903",
    title:
      "The Italian Cook Book: The Art of Eating Well; Practical Recipes of the Italian Cuisine, Pastries, Sweets, Frozen Delicacies, and Syrups",
    image:
      "https://www.gutenberg.org/cache/epub/24407/pg24407.cover.medium.jpg",
    author: "Gentile, Maria",
    category: "cook",
    sample:
      "This intriguing fiction will transport you.This entertaining book will captivate you.This entertaining prose will leave you.",
    discription:
      "This captivating book will keep you.This captivating story will mesmerize you.This entertaining prose will transport you.This captivating fiction will take you.This thought-provoking tale will take you.This spellbinding tale will keep you.This compelling narrative will keep you.This compelling literature will leave a lasting impression on you.This compelling prose will leave you.This spellbinding tale will transport you.This captivating book will leave you.This compelling fiction will mesmerize you.This thought-provoking narrative will captivate you.This captivating prose will transport you.This thought-provoking novel will transport you.This unputdownable work will transport you.This mesmerizing story will leave you.This compelling work will keep you.This mesmerizing book will take you.This captivating story will leave you.",
  },
  {
    id: "40009c0f-150a-4cec-a135-dec0ddc06eed",
    title: "Chocolate and Cocoa Recipes and Home Made Candy Recipes",
    image:
      "https://www.gutenberg.org/cache/epub/13177/pg13177.cover.medium.jpg",
    author: "Parloa, Maria",
    category: "cook",
    sample:
      "This compelling book will transport you.This intriguing fiction will captivate you.This intriguing novel will transport you.",
    discription:
      "This intriguing work will keep you.This mesmerizing literature will captivate you.This mesmerizing book will captivate you.This compelling novel will captivate you.This entertaining narrative will transport you.This gripping narrative will take you.This mesmerizing book will keep you.This captivating literature will leave you.This fascinating tale will mesmerize you.This spellbinding tale will leave you.This spellbinding narrative will transport you.This entertaining work will transport you.This spellbinding literature will take you.This intriguing book will captivate you.This fascinating story will mesmerize you.This spellbinding narrative will mesmerize you.This entertaining work will captivate you.This fascinating book will take you.This unputdownable story will mesmerize you.This fascinating book will transport you.",
  },
  {
    id: "db7a6c31-2000-476e-ab2f-48555795826e",
    title: "The Virginia Housewife; Or, Methodical Cook",
    image:
      "https://www.gutenberg.org/cache/epub/12519/pg12519.cover.medium.jpg",
    author: "Randolph, Mary",
    category: "cook",
    sample:
      "This entertaining fiction will leave a lasting impression on you.This captivating work will keep you.This spellbinding book will transport you.",
    discription:
      "This intriguing novel will captivate you.This gripping tale will transport you.This mesmerizing narrative will take you.This entertaining story will leave a lasting impression on you.This intriguing literature will transport you.This mesmerizing narrative will mesmerize you.This mesmerizing story will captivate you.This mesmerizing work will keep you.This spellbinding novel will leave you.This unputdownable book will mesmerize you.This unputdownable literature will leave a lasting impression on you.This mesmerizing prose will take you.This spellbinding narrative will mesmerize you.This thought-provoking story will mesmerize you.This captivating story will captivate you.This unputdownable literature will leave you.This intriguing fiction will leave you.This thought-provoking fiction will mesmerize you.This spellbinding narrative will leave you.This compelling story will captivate you.",
  },
  {
    id: "db3d5ea7-c7b6-4389-808f-67dc27b7dea4",
    title: "The Story of Crisco",
    image:
      "https://www.gutenberg.org/cache/epub/13286/pg13286.cover.medium.jpg",
    author: "Neil, Marion Harris",
    category: "cook",
    sample:
      "This mesmerizing narrative will leave a lasting impression on you.This entertaining fiction will mesmerize you.This mesmerizing narrative will keep you.",
    discription:
      "This gripping book will take you.This compelling work will leave you.This thought-provoking book will keep you.This intriguing work will leave a lasting impression on you.This fascinating work will mesmerize you.This gripping tale will captivate you.This captivating fiction will take you.This thought-provoking tale will captivate you.This thought-provoking story will keep you.This entertaining book will mesmerize you.This fascinating novel will captivate you.This mesmerizing book will mesmerize you.This intriguing narrative will leave you.This spellbinding novel will keep you.This gripping narrative will captivate you.This compelling tale will leave a lasting impression on you.This entertaining literature will keep you.This compelling work will transport you.This thought-provoking novel will leave you.This intriguing prose will keep you.",
  },
  {
    id: "12d2448b-02e8-4478-9747-4c23852ddf9b",
    title: "Betty Crocker's Bisquick Cook Book: 157 Recipes and Ideas",
    image:
      "https://www.gutenberg.org/cache/epub/62841/pg62841.cover.medium.jpg",
    author: "Crocker, Betty",
    category: "cook",
    sample:
      "This mesmerizing book will captivate you.This captivating work will transport you.This fascinating narrative will leave you.",
    discription:
      "This intriguing book will leave you.This fascinating narrative will leave you.This unputdownable tale will captivate you.This thought-provoking book will captivate you.This spellbinding literature will transport you.This compelling novel will transport you.This unputdownable story will take you.This compelling work will transport you.This captivating work will mesmerize you.This gripping book will leave you.This mesmerizing narrative will leave you.This unputdownable literature will captivate you.This compelling work will captivate you.This intriguing tale will leave a lasting impression on you.This spellbinding work will leave you.This captivating book will mesmerize you.This thought-provoking tale will transport you.This spellbinding book will transport you.This fascinating novel will mesmerize you.This fascinating story will take you.",
  },
  {
    id: "684e014f-6449-41c1-bcf6-733c22f8646a",
    title:
      "Motherly talks with young housekeepers: embracing eighty-seven brief articles on topics of home interest, and about five hundred choice receipts for cooking, etc.",
    image:
      "https://www.gutenberg.org/cache/epub/69858/pg69858.cover.medium.jpg",
    author: "Beecher, H. W., Mrs.",
    category: "cook",
    sample:
      "This compelling story will leave you.This spellbinding prose will transport you.This spellbinding fiction will take you.",
    discription:
      "This gripping tale will leave a lasting impression on you.This unputdownable book will mesmerize you.This unputdownable book will take you.This entertaining story will leave you.This compelling novel will keep you.This captivating book will leave a lasting impression on you.This fascinating literature will captivate you.This captivating prose will take you.This unputdownable fiction will mesmerize you.This unputdownable story will mesmerize you.This captivating book will leave a lasting impression on you.This mesmerizing work will transport you.This entertaining story will keep you.This intriguing novel will mesmerize you.This spellbinding tale will transport you.This captivating book will take you.This thought-provoking narrative will leave you.This thought-provoking fiction will leave you.This intriguing prose will transport you.This thought-provoking narrative will leave you.",
  },
  {
    id: "3573fe81-ec5f-4578-84f4-3cb8acacf6f0",
    title: "The Chemistry of Food and Nutrition",
    image:
      "https://www.gutenberg.org/cache/epub/15237/pg15237.cover.medium.jpg",
    author: "Duncan, A. W.",
    category: "cook",
    sample:
      "This thought-provoking novel will transport you.This intriguing novel will leave you.This intriguing tale will leave a lasting impression on you.",
    discription:
      "This intriguing book will leave a lasting impression on you.This mesmerizing prose will take you.This unputdownable fiction will leave a lasting impression on you.This entertaining story will captivate you.This captivating prose will transport you.This compelling fiction will transport you.This unputdownable prose will take you.This gripping story will mesmerize you.This thought-provoking fiction will leave a lasting impression on you.This spellbinding novel will leave you.This compelling story will leave a lasting impression on you.This thought-provoking story will leave a lasting impression on you.This intriguing work will leave you.This captivating prose will transport you.This mesmerizing literature will keep you.This compelling novel will leave a lasting impression on you.This mesmerizing book will leave you.This mesmerizing novel will take you.This spellbinding literature will leave a lasting impression on you.This captivating narrative will transport you.",
  },
  {
    id: "db214caa-8dd7-4fbe-b22a-1caa0154e7f2",
    title: "Old Cookery Books and Ancient Cuisine",
    image:
      "https://www.gutenberg.org/cache/epub/12293/pg12293.cover.medium.jpg",
    author: "Hazlitt, William Carew",
    category: "cook",
    sample:
      "This compelling tale will leave a lasting impression on you.This unputdownable prose will take you.This compelling literature will captivate you.",
    discription:
      "This fascinating work will mesmerize you.This mesmerizing tale will keep you.This thought-provoking work will leave you.This entertaining book will take you.This entertaining story will mesmerize you.This unputdownable literature will captivate you.This entertaining novel will mesmerize you.This spellbinding novel will transport you.This entertaining book will leave you.This fascinating novel will mesmerize you.This intriguing narrative will take you.This spellbinding literature will take you.This gripping story will take you.This intriguing book will captivate you.This gripping fiction will keep you.This unputdownable story will mesmerize you.This compelling story will leave a lasting impression on you.This compelling tale will transport you.This fascinating prose will take you.This spellbinding fiction will transport you.",
  },
  {
    id: "5c53d42f-7a3a-45da-ab29-2dd9aefd8658",
    title: "Fifty-Two Sunday Dinners: A Book of Recipes",
    image:
      "https://www.gutenberg.org/cache/epub/31534/pg31534.cover.medium.jpg",
    author: "Hiller, Elizabeth O.",
    category: "cook",
    sample:
      "This fascinating narrative will keep you.This compelling tale will leave a lasting impression on you.This intriguing book will captivate you.",
    discription:
      "This thought-provoking story will mesmerize you.This captivating story will captivate you.This gripping tale will keep you.This captivating prose will take you.This fascinating narrative will mesmerize you.This mesmerizing work will mesmerize you.This intriguing narrative will captivate you.This gripping book will take you.This unputdownable story will leave a lasting impression on you.This spellbinding book will keep you.This thought-provoking book will keep you.This mesmerizing novel will leave you.This fascinating literature will take you.This entertaining tale will captivate you.This compelling prose will leave a lasting impression on you.This mesmerizing tale will mesmerize you.This fascinating prose will leave a lasting impression on you.This fascinating prose will mesmerize you.This fascinating work will transport you.This gripping literature will leave you.",
  },
  {
    id: "b6333514-b940-4807-9a0a-75d5c183214d",
    title: "Diet and Health; With Key to the Calories",
    image:
      "https://www.gutenberg.org/cache/epub/15069/pg15069.cover.medium.jpg",
    author: "Peters, Lulu Hunt",
    category: "cook",
    sample:
      "This unputdownable book will keep you.This spellbinding book will transport you.This unputdownable book will transport you.",
    discription:
      "This gripping tale will captivate you.This spellbinding story will mesmerize you.This gripping narrative will mesmerize you.This intriguing tale will leave a lasting impression on you.This unputdownable prose will transport you.This entertaining literature will captivate you.This mesmerizing work will take you.This captivating narrative will transport you.This thought-provoking literature will leave you.This thought-provoking narrative will leave a lasting impression on you.This compelling prose will leave a lasting impression on you.This gripping tale will leave a lasting impression on you.This fascinating story will leave you.This gripping fiction will leave a lasting impression on you.This spellbinding tale will captivate you.This entertaining work will mesmerize you.This mesmerizing literature will leave you.This thought-provoking novel will mesmerize you.This mesmerizing narrative will keep you.This thought-provoking fiction will captivate you.",
  },
  {
    id: "64626103-5e58-4929-a227-c2ef7ef2d758",
    title: "Suppers: Novel Suggestions for Social Occasions",
    image:
      "https://www.gutenberg.org/cache/epub/33975/pg33975.cover.medium.jpg",
    author: "Pierce, Paul",
    category: "cook",
    sample:
      "This spellbinding work will take you.This captivating narrative will take you.This fascinating literature will mesmerize you.",
    discription:
      "This unputdownable book will keep you.This unputdownable narrative will captivate you.This fascinating story will leave you.This unputdownable narrative will take you.This unputdownable story will captivate you.This captivating fiction will take you.This compelling novel will keep you.This mesmerizing story will leave a lasting impression on you.This spellbinding story will leave a lasting impression on you.This mesmerizing fiction will mesmerize you.This gripping book will captivate you.This fascinating story will leave a lasting impression on you.This fascinating tale will captivate you.This captivating work will leave you.This thought-provoking novel will captivate you.This entertaining tale will mesmerize you.This entertaining narrative will leave you.This spellbinding story will take you.This unputdownable tale will take you.This thought-provoking prose will mesmerize you.",
  },
];

function loadBooks(cate) {
  var len = books.length;
  let details = books;
  var dispay = document.getElementById("searchResaults");
  var search = document.getElementById("searchBookInput").value="";


  dispay.innerHTML = "";

  for (var x = 0; x < len; x++) {
    if (cate != "all") {
      if (details[x].category == cate) {
        var card = document.createElement("div");
        card.classList.add("card");
        dispay.appendChild(card);

        var BookImgContainer = document.createElement("div");
        BookImgContainer.classList.add("BookImgContainer");
        card.appendChild(BookImgContainer);

        var detailView = document.createElement("div");
        detailView.classList.add("details");
        card.appendChild(detailView);

        var bookImage = document.createElement("img");
        bookImage.classList.add("BookImg");
        bookImage.src = details[x].image;
        BookImgContainer.appendChild(bookImage);

        var name = document.createElement("p");
        name.textContent = details[x].title;
        name.classList.add("BookTitle");
        detailView.appendChild(name);

        var author = document.createElement("p");
        author.textContent = details[x].author;
        author.classList.add("BookAuthor");
        detailView.appendChild(author);

        var starView = document.createElement("div");
        starView.classList.add("starView");
        detailView.appendChild(starView);

        for (var s = 1; s <= details[x].stars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star-fill.svg";
          starView.appendChild(star);
        }

        let emptyStars = 5 - details[x].stars;

        for (var s = 1; s <= emptyStars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star.svg";
          starView.appendChild(star);
        }

        var sample = document.createElement("p");
        sample.textContent = details[x].sample;
        sample.classList.add("BookPara");
        detailView.appendChild(sample);

        var cardBtnView = document.createElement("div");
        cardBtnView.classList.add("cardBtnView");
        detailView.appendChild(cardBtnView);

        var btn1 = document.createElement("a");
        btn1.textContent = "View";
        btn1.setAttribute("href", details[x].pagePath);
        btn1.classList.add("cardBtn", "cardBtn1");
        cardBtnView.appendChild(btn1);

        var btn2 = document.createElement("a");
        btn2.textContent = "Download";
        btn2.setAttribute("download", details[x].title + ".pdf");
        btn2.setAttribute("href", details[x].filePath);
        btn2.setAttribute("target", "_blank");
        btn2.classList.add("cardBtn", "cardBtn2");
        cardBtnView.appendChild(btn2);
      }
    } else {
      var card = document.createElement("div");
      card.classList.add("card");
      dispay.appendChild(card);

      var BookImgContainer = document.createElement("div");
      BookImgContainer.classList.add("BookImgContainer");
      card.appendChild(BookImgContainer);

      var detailView = document.createElement("div");
      detailView.classList.add("details");
      card.appendChild(detailView);

      var bookImage = document.createElement("img");
      bookImage.classList.add("BookImg");
      bookImage.src = details[x].image;
      BookImgContainer.appendChild(bookImage);

      var name = document.createElement("p");
      name.textContent = details[x].title;
      name.classList.add("BookTitle");
      detailView.appendChild(name);

      var author = document.createElement("p");
      author.textContent = details[x].author;
      author.classList.add("BookAuthor");
      detailView.appendChild(author);

      var starView = document.createElement("div");
      starView.classList.add("starView");
      detailView.appendChild(starView);

      for (var s = 1; s <= details[x].stars; s++) {
        var star = document.createElement("img");
        star.classList.add("star");
        star.src = "images/search_Img/star-fill.svg";
        starView.appendChild(star);
      }

      let emptyStars = 5 - details[x].stars;

      for (var s = 1; s <= emptyStars; s++) {
        var star = document.createElement("img");
        star.classList.add("star");
        star.src = "images/search_Img/star.svg";
        starView.appendChild(star);
      }

      var sample = document.createElement("p");
      sample.textContent = details[x].sample;
      sample.classList.add("BookPara");
      detailView.appendChild(sample);

      var cardBtnView = document.createElement("div");
      cardBtnView.classList.add("cardBtnView");
      detailView.appendChild(cardBtnView);

      var btn1 = document.createElement("a");
      btn1.textContent = "View";
      btn1.setAttribute("href", details[x].pagePath);
      btn1.classList.add("cardBtn", "cardBtn1");
      cardBtnView.appendChild(btn1);

      var btn2 = document.createElement("a");
      btn2.textContent = "Download";
      btn2.setAttribute("download", details[x].title + ".pdf");
      btn2.setAttribute("href", details[x].filePath);
      btn2.setAttribute("target", "_blank");
      btn2.classList.add("cardBtn", "cardBtn2");
      cardBtnView.appendChild(btn2);
    }
  }
}

function searchBook(cate) {

 

  var len = books.length;
  let details = books;
  var dispay = document.getElementById("searchResaults");
  var search = document.getElementById("searchBookInput").value;

  dispay.innerHTML = "";

  var count = 0;

  for (var x = 0; x < len; x++) {
    if (cate != "all") {
      if (details[x].category == cate && details[x].title == search) {
        count++;

        var card = document.createElement("div");
        card.classList.add("card");
        dispay.appendChild(card);

        var BookImgContainer = document.createElement("div");
        BookImgContainer.classList.add("BookImgContainer");
        card.appendChild(BookImgContainer);

        var detailView = document.createElement("div");
        detailView.classList.add("details");
        card.appendChild(detailView);

        var bookImage = document.createElement("img");
        bookImage.classList.add("BookImg");
        bookImage.src = details[x].image;
        BookImgContainer.appendChild(bookImage);

        var name = document.createElement("p");
        name.textContent = details[x].title;
        name.classList.add("BookTitle");
        detailView.appendChild(name);

        var author = document.createElement("p");
        author.textContent = details[x].author;
        author.classList.add("BookAuthor");
        detailView.appendChild(author);

        var starView = document.createElement("div");
        starView.classList.add("starView");
        detailView.appendChild(starView);

        for (var s = 1; s <= details[x].stars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star-fill.svg";
          starView.appendChild(star);
        }

        let emptyStars = 5 - details[x].stars;

        for (var s = 1; s <= emptyStars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star.svg";
          starView.appendChild(star);
        }

        var sample = document.createElement("p");
        sample.textContent = details[x].Samplediscription;
        sample.classList.add("BookPara");
        detailView.appendChild(sample);

        var cardBtnView = document.createElement("div");
        cardBtnView.classList.add("cardBtnView");
        detailView.appendChild(cardBtnView);

        var btn1 = document.createElement("a");
        btn1.textContent = "View";
        btn1.setAttribute("href", details[x].pagePath);
        btn1.classList.add("cardBtn", "cardBtn1");
        cardBtnView.appendChild(btn1);

        var btn2 = document.createElement("a");
        btn2.textContent = "Download";
        btn2.setAttribute("download", details[x].title + ".pdf");
        btn2.setAttribute("href", details[x].filePath);
        btn2.setAttribute("target", "_blank");
        btn2.classList.add("cardBtn", "cardBtn2");
        cardBtnView.appendChild(btn2);
      }
    } else {
      if (details[x].title == search) {
        count++;

        var card = document.createElement("div");
        card.classList.add("card");
        dispay.appendChild(card);

        var BookImgContainer = document.createElement("div");
        BookImgContainer.classList.add("BookImgContainer");
        card.appendChild(BookImgContainer);

        var detailView = document.createElement("div");
        detailView.classList.add("details");
        card.appendChild(detailView);

        var bookImage = document.createElement("img");
        bookImage.classList.add("BookImg");
        bookImage.src = details[x].image;
        BookImgContainer.appendChild(bookImage);

        var name = document.createElement("p");
        name.textContent = details[x].title;
        name.classList.add("BookTitle");
        detailView.appendChild(name);

        var author = document.createElement("p");
        author.textContent = details[x].author;
        author.classList.add("BookAuthor");
        detailView.appendChild(author);

        var starView = document.createElement("div");
        starView.classList.add("starView");
        detailView.appendChild(starView);

        for (var s = 1; s <= details[x].stars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star-fill.svg";
          starView.appendChild(star);
        }

        let emptyStars = 5 - details[x].stars;

        for (var s = 1; s <= emptyStars; s++) {
          var star = document.createElement("img");
          star.classList.add("star");
          star.src = "images/search_Img/star.svg";
          starView.appendChild(star);
        }

        var sample = document.createElement("p");
        sample.textContent = details[x].Samplediscription;
        sample.classList.add("BookPara");
        detailView.appendChild(sample);

        var cardBtnView = document.createElement("div");
        cardBtnView.classList.add("cardBtnView");
        detailView.appendChild(cardBtnView);

        var btn1 = document.createElement("a");
        btn1.textContent = "View";
        btn1.setAttribute("href", details[x].pagePath);
        btn1.classList.add("cardBtn", "cardBtn1");
        cardBtnView.appendChild(btn1);

        var btn2 = document.createElement("a");
        btn2.textContent = "Download";
        btn2.setAttribute("download", details[x].title + ".pdf");
        btn2.setAttribute("href", details[x].filePath);
        btn2.setAttribute("target", "_blank");
        btn2.classList.add("cardBtn", "cardBtn2");
        cardBtnView.appendChild(btn2);
      }
    }
  }

  if (count == 0) {
    var noItemView = document.createElement("div");
    noItemView.classList.add("NoresaultText");
    dispay.appendChild(noItemView);

    var noImg = document.createElement("img");
    noImg.classList.add("noResaultImg");
    noImg.src = "images/search_Img/book.svg";
    noItemView.appendChild(noImg);

    var NoText = document.createElement("h1");
    NoText.textContent = "No Book Found";
    noItemView.appendChild(NoText);
  }

  window.scroll({
    top: 700,
    left: 100,
    behavior: "smooth",
  });
}

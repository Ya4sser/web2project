// Our book catalog. In a later phase this will come from a backend/database.
// All titles are classic public-domain books.
const books = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    price: 12.99,
    year: 1813,
    pages: 432,
    rating: 4.8,
    color: "#7a3b4f",
    description:
      "Elizabeth Bennet meets the proud Mr. Darcy, and first impressions turn out to be very wrong. A witty story about love, class and changing your mind.",
  },
  {
    id: 2,
    title: "Frankenstein",
    author: "Mary Shelley",
    category: "Horror",
    price: 10.5,
    year: 1818,
    pages: 280,
    rating: 4.5,
    color: "#2f4a3a",
    description:
      "A young scientist builds a living creature and then abandons it. One of the first science-fiction novels, asking what it means to be human.",
  },
  {
    id: 3,
    title: "The Time Machine",
    author: "H. G. Wells",
    category: "Science Fiction",
    price: 9.99,
    year: 1895,
    pages: 118,
    rating: 4.3,
    color: "#1f4e79",
    description:
      "An inventor travels to the year 802,701 and discovers what has become of humanity. A short, fast-paced classic.",
  },
  {
    id: 4,
    title: "Moby-Dick",
    author: "Herman Melville",
    category: "Adventure",
    price: 14.25,
    year: 1851,
    pages: 635,
    rating: 4.1,
    color: "#29506b",
    description:
      "Captain Ahab chases the white whale that took his leg, dragging his whole crew along on a dangerous ocean voyage.",
  },
  {
    id: 5,
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur Conan Doyle",
    category: "Mystery",
    price: 11.75,
    year: 1892,
    pages: 307,
    rating: 4.7,
    color: "#5b4636",
    description:
      "Twelve short cases solved by the world's most famous detective and his loyal friend Dr. Watson.",
  },
  {
    id: 6,
    title: "Dracula",
    author: "Bram Stoker",
    category: "Horror",
    price: 11.0,
    year: 1897,
    pages: 418,
    rating: 4.4,
    color: "#5e1f24",
    description:
      "Told through letters and diaries, a group of friends try to stop Count Dracula from spreading his curse to England.",
  },
  {
    id: 7,
    title: "Treasure Island",
    author: "Robert Louis Stevenson",
    category: "Adventure",
    price: 8.99,
    year: 1883,
    pages: 292,
    rating: 4.2,
    color: "#8a5a1f",
    description:
      "Young Jim Hawkins finds a treasure map and sails with pirates, including the unforgettable Long John Silver.",
  },
  {
    id: 8,
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    category: "Romance",
    price: 12.5,
    year: 1847,
    pages: 500,
    rating: 4.6,
    color: "#4d4a6b",
    description:
      "An orphan grows into an independent governess and falls for her mysterious employer, Mr. Rochester.",
  },
  {
    id: 9,
    title: "Twenty Thousand Leagues Under the Seas",
    author: "Jules Verne",
    category: "Science Fiction",
    price: 13.4,
    year: 1870,
    pages: 426,
    rating: 4.3,
    color: "#1d5c63",
    description:
      "Professor Aronnax is held aboard the Nautilus, Captain Nemo's submarine, on a journey through the world's oceans.",
  },
  {
    id: 10,
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    category: "Mystery",
    price: 9.5,
    year: 1902,
    pages: 256,
    rating: 4.6,
    color: "#3d3d3d",
    description:
      "A family legend about a ghostly hound brings Sherlock Holmes to the foggy moors of Devon.",
  },
  {
    id: 11,
    title: "Little Women",
    author: "Louisa May Alcott",
    category: "Classic",
    price: 10.99,
    year: 1868,
    pages: 449,
    rating: 4.4,
    color: "#a0603a",
    description:
      "The four March sisters grow up during the American Civil War, each chasing a different dream.",
  },
  {
    id: 12,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    category: "Classic",
    price: 9.75,
    year: 1890,
    pages: 254,
    rating: 4.5,
    color: "#3e5641",
    description:
      "A young man stays beautiful forever while his portrait ages and shows every sin he commits.",
  },
];

// A list of all categories, used for the filter buttons
export const categories = ["All", ...new Set(books.map((book) => book.category))];

export default books;

// Word/Logic Problems!

// Puzzle #1 - Finding An Average on the DL
// Three Employees want to know the average of their salaries. They are not allowed to share their individual salaries.
// They cannot directly share their own salaries in anyway, which includes writing things down. 

// ===========================
// Ideas
// ===========================

// bag of skittles, each skittle has a monetary value. Put all skittles together and divide by 3 = average.
// - this still wouldnt work because the separate employees would still be directly communicating their dsalaries, hust through a different medium

// add a 'salt' onto each salary. As the average is being calculated, remove salts of each individual salary.

// ===========================
// Solution
// ===========================

// https://www.geeksforgeeks.org/puzzle-26-know-average-salary-without-disclosing-individual-salaries/

// basically,idea #2 was closest. You add a kind of 'salt' to each person's salary and pass along the sum. At the end you then syphon out the salts and ultimately divide for the average.

// Puzzle #2 - Card Flip Shuffle
// You are in a dark room with a deck of cards. A certain number of the cards are face up and the rest are face down. You can't see the cards. How do you divide the deck in to two piles with equal numbers of face up cards in each?
// You know how many cards are flipped, but you cannot see the deck of cards no matter what and the deck is shuffled, so the flipped cards could be anywhere in the deck.

// ===========================
// Ideas
// ===========================

// remove any number of cards from the deck, make sure first deck has more cards than the second deck.

// clarification: you know how many cards are face up, just not where they are in the deck!

// ===========================
// Solution
// ===========================

// http://puzzles.nigelcoldwell.co.uk/thirtysix.htm

// idea was close, but because we know exactly how many cards are face up, we simply need to remove that many cards from the top no matter what. After that we simply flip them over and the number of face up cards will equalized in the 2 halves of the deck. For this puzzle start small and think of all scenarios, then build up from there!

// ie. consider all scenarios with 2 cards, then 3 cards, 4 cards, etc.
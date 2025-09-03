const questions = [
  // Part 1: Alphabet Test (Q1–Q6)
  {
    q: "If the letters of the word KNOWLEDGE are arranged alphabetically, which letter will be third from the left?",
    options: ["D", "E", "G", "K"],
    correct: 1
  },
  {
    q: "Which letter will be the 15th from the left if the English alphabet is written in reverse?",
    options: ["L", "M", "N", "O"],
    correct: 3
  },
  {
    q: "How many such pairs of letters are there in the word GOVERNMENT, each of which has the same number of letters between them in the word as in the English alphabet?",
    options: ["1", "2", "3", "4"],
    correct: 2
  },
  {
    q: "If every alternate letter from A is omitted, which letter will be the 10th in the new sequence?",
    options: ["P", "Q", "R", "S"],
    correct: 2
  },
  {
    q: "In the word PSYCHOLOGY, how many letters are there between P and Y as in the alphabet?",
    options: ["10", "9", "11", "12"],
    correct: 0
  },
  {
    q: "If B = 2, CAT = 24, then what is the value of DOG?",
    options: ["26", "28", "30", "32"],
    correct: 2
  },

  // Part 2: Calendar (Q7–Q12)
  {
    q: "If 26th January 1950 was a Thursday, what day was 26th January 1960?",
    options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    correct: 1
  },
  {
    q: "How many times does the 1st day of a month fall on a Sunday in a leap year?",
    options: ["2", "3", "4", "5"],
    correct: 3
  },
  {
    q: "If 15th August 1947 was a Friday, then what day was 15th August 2000?",
    options: ["Tuesday", "Monday", "Wednesday", "Thursday"],
    correct: 0
  },
  {
    q: "If today is Monday, what day will it be 61 days later?",
    options: ["Wednesday", "Thursday", "Friday", "Saturday"],
    correct: 2
  },
  {
    q: "On which day of the week will 1st January 2026 fall, if 1st January 2025 is Wednesday?",
    options: ["Thursday", "Friday", "Saturday", "Sunday"],
    correct: 0
  },
  {
    q: "How many odd days are there in 400 years?",
    options: ["0", "1", "2", "3"],
    correct: 0
  },

  // Part 3: Clock (Q13–Q18)
  {
    q: "At what time between 3 and 4 o’clock will the hands be together?",
    options: ["16 4/11 min past 3", "15 min past 3", "18 min past 3", "21 min past 3"],
    correct: 0
  },
  {
    q: "At what time between 2 and 3 will the hands form a right angle?",
    options: ["2:16 4/11", "2:21 9/11", "2:27 3/11", "2:32"],
    correct: 1
  },
  {
    q: "The hands are in a straight line but opposite to each other at?",
    options: ["5:30", "6:00", "6:15", "6:45"],
    correct: 0
  },
  {
    q: "If a clock is 5 minutes slow at 6 AM and gains 10 seconds per hour, what time will it show at 10 PM the same day?",
    options: ["9:55:40", "9:55:50", "9:56:00", "9:56:10"],
    correct: 1
  },
  {
    q: "The angle between the hands of a clock at 7:20 is?",
    options: ["100°", "110°", "120°", "130°"],
    correct: 2
  },
  {
    q: "How many times in a day (24 hours) are the hands in a straight line?",
    options: ["20", "22", "24", "44"],
    correct: 3
  },

  // Part 4: Counting Figure (Verbal) (Q19–Q20)
  {
    q: "How many 3-digit numbers can be formed from digits 1, 2, 3, 4, 5 without repetition?",
    options: ["60", "80", "100", "120"],
    correct: 0
  },
  {
    q: "How many 4-digit numbers divisible by 5 can be formed using digits 0–9 without repetition?",
    options: ["3024", "3456", "4536", "5040"],
    correct: 2
  },

  // Dice (Q21–Q26)
  {
    q: "If in a dice, 1 is opposite to 6, 2 is opposite to 4, then which number is opposite to 5?",
    options: ["1", "2", "3", "6"],
    correct: 2
  },
  {
    q: "A dice has 4 on its top and 2 on its front. Which number will be at the bottom?",
    options: ["1", "3", "5", "6"],
    correct: 3
  },
  {
    q: "If two positions of a dice are shown as: Face 1 opposite to 3, Face 2 opposite to 6. Then which face is opposite to 4?",
    options: ["1", "2", "5", "6"],
    correct: 2
  },
  {
    q: "In a dice, the sum of opposite faces is always:",
    options: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    q: "If two different positions of a dice are given and one shows 2 opposite to 6, another shows 3 opposite to 5, then which number will be opposite to 4?",
    options: ["1", "2", "5", "6"],
    correct: 0
  },
  {
    q: "A dice has numbers 1 to 6. If 2 is opposite to 5, 3 is opposite to 4, then which is opposite to 6?",
    options: ["1", "2", "3", "4"],
    correct: 0
  },
  
  // Ranking Arrangement (Q27–Q33)
  {
    q: "In a row of 50 students, A is 18th from the left. What is his position from the right?",
    options: ["31", "32", "33", "34"],
    correct: 2
  },
  {
    q: "In a row of boys, A is 10th from the left and B is 15th from the right. If they interchange positions, A becomes 25th from the left. How many boys are there in the row?",
    options: ["35", "36", "37", "38"],
    correct: 2
  },
  {
    q: "In a class, Ravi is 17th from the top and 28th from the bottom. How many students are there in the class?",
    options: ["44", "45", "46", "47"],
    correct: 0
  },
  {
    q: "A is 10 ranks above B in a class of 50. If B is 35th from the bottom, what is A’s rank from the top?",
    options: ["5", "6", "15", "16"],
    correct: 1
  },
  {
    q: "In a row of 40 boys, Raju is 12th from the left. What is his position from the right?",
    options: ["27", "28", "29", "30"],
    correct: 2
  },
  {
    q: "In a line of students, A is 10th from the left and B is 20th from the right. If there are 50 students, how many students are between A and B?",
    options: ["19", "20", "21", "22"],
    correct: 2
  },
  {
    q: "In a class, Sita is 20th from the left end and 15th from the right end. How many students are in the class?",
    options: ["33", "34", "35", "36"],
    correct: 1
  },
  
  // Seating Arrangement (Q34–Q40)
  {
    q: "Five friends are sitting in a row. A is to the left of B, C is to the right of D but left of B. Who is in the middle?",
    options: ["A", "B", "C", "D"],
    correct: 2
  },
  {
    q: "Six persons are sitting in a circle. P is between Q and R, S is between R and T, U is to the immediate left of T. Who is to the immediate right of Q?",
    options: ["P", "R", "S", "U"],
    correct: 0
  },
  {
    q: "In a row of 7 persons, A is to the left of B, but to the right of C. If C is to the immediate left of D, who is exactly in the middle?",
    options: ["A", "B", "C", "D"],
    correct: 0
  },
  {
    q: "Eight people A–H are sitting in a line. A is 3rd to the left of B. C is to the right of A but left of D. If E is 2nd to the right of D, who is exactly in the center?",
    options: ["B", "C", "D", "E"],
    correct: 2
  },
  {
    q: "In a circular arrangement of 6 persons, A is to the right of B, C is to the left of D, E is between A and C. Who is opposite B?",
    options: ["A", "C", "D", "E"],
    correct: 3
  },
  {
    q: "Five friends sit in a line. A is left of B, C is right of D but left of A, E is at one end. Who sits in the middle?",
    options: ["A", "B", "C", "D"],
    correct: 3
  },
  {
    q: "Seven persons sit in a row facing north. P is left of Q, R is right of Q, S is right of P but left of T, U is extreme left, V is extreme right. Who is exactly in the middle?",
    options: ["Q", "R", "S", "T"],
    correct: 0
  },

  // Blood Relation (Q41–Q47)
  {
    q: "Pointing to a man, Sita said, 'He is the son of my grandfather’s only son.' How is the man related to Sita?",
    options: ["Brother", "Cousin", "Uncle", "Father"],
    correct: 0
  },
  {
    q: "Introducing a man, a woman said, 'He is the husband of my daughter’s mother.' Who is the man?",
    options: ["Father", "Brother", "Husband", "Uncle"],
    correct: 0
  },
  {
    q: "Pointing to a boy, Ravi said, 'He is the son of my mother’s daughter.' How is the boy related to Ravi?",
    options: ["Son", "Nephew", "Brother", "Cousin"],
    correct: 1
  },
  {
    q: "A woman introduced a man as the son of the only son of her father. How is the man related to the woman?",
    options: ["Brother", "Nephew", "Son", "Cousin"],
    correct: 2
  },
  {
    q: "Pointing to a girl, Mohan said, 'She is the daughter of my grandfather’s only child.' How is the girl related to Mohan?",
    options: ["Sister", "Cousin", "Aunt", "Niece"],
    correct: 0
  },
  {
    q: "A man said, 'Her mother is the only daughter of my mother.' How is the man related to the girl?",
    options: ["Father", "Uncle", "Brother", "Grandfather"],
    correct: 0
  },
  {
    q: "A girl said, 'He is the son of my grandmother’s only son.' How is the boy related to the girl?",
    options: ["Brother", "Cousin", "Uncle", "Father"],
    correct: 0
  },

  // Venn Diagram (Q48–Q53)
  {
    q: "Which of the following groups can be represented by three concentric circles?",
    options: ["Teacher, Doctor, Engineer", "Rose, Flower, Plant", "Men, Women, Children", "Pen, Pencil, Eraser"],
    correct: 1
  },
  {
    q: "Which of the following groups can be represented by intersecting circles?",
    options: ["Boy, Student, Athlete", "Cat, Dog, Cow", "Square, Triangle, Circle", "Doctor, Nurse, Patient"],
    correct: 0
  },
  {
    q: "Which set can be shown as three separate circles with no intersection?",
    options: ["Physics, Chemistry, Mathematics", "Father, Mother, Son", "Pen, Pencil, Paper", "Circle, Rectangle, Triangle"],
    correct: 0
  },
  {
    q: "Which of the following can be represented as one circle within another?",
    options: ["India, Asia, World", "Teacher, Doctor, Engineer", "Men, Boys, Girls", "Bus, Car, Train"],
    correct: 0
  },
  {
    q: "Which of the following can be shown as overlapping but not completely?",
    options: ["Singer, Actor, Dancer", "Rose, Lily, Lotus", "Chair, Table, Bench", "Sun, Moon, Stars"],
    correct: 0
  },
  {
    q: "Which of the following best represents: Students, Boys, Girls?",
    options: ["Three intersecting circles", "One big circle with two parts", "Three separate circles", "Triangle inside circle"],
    correct: 1
  },

  // Syllogism (Q54–Q60)
  {
    q: "Statements: All cats are dogs. All dogs are animals. Conclusions: 1. All cats are animals. 2. All animals are cats.",
    options: ["Only 1 follows", "Only 2 follows", "Both follow", "Neither follows"],
    correct: 0
  },
  {
    q: "Statements: All books are papers. No paper is a pen. Conclusions: 1. No book is a pen. 2. Some pens are books.",
    options: ["Only 1 follows", "Only 2 follows", "Both follow", "Neither follows"],
    correct: 0
  },
  {
    q: "Statements: Some fruits are apples. All apples are mangoes. Conclusions: 1. Some fruits are mangoes. 2. All mangoes are fruits.",
    options: ["Only 1 follows", "Only 2 follows", "Both follow", "Neither follows"],
    correct: 0
  },
  {
    q: "Statements: All cars are buses. Some buses are trains. Conclusions: 1. Some cars are trains. 2. Some trains are buses.",
    options: ["Only 1 follows", "Only 2 follows", "Both follow", "Neither follows"],
    correct: 1
  },
  {
    q: "Statements: No pen is a pencil. All pencils are erasers. Conclusions: 1. No pen is an eraser. 2. Some erasers are pencils.",
    options: ["Only 1 follows", "Only 2 follows", "Both follow", "Neither follows"],
    correct: 1
  },
  {
    q: "Statements: Some doctors are teachers. All teachers are scientists. Conclusions: 1. Some doctors are scientists. 2. All scientists are teachers.",
    options: ["Only 1 follows", "Only 2 follows", "Both follow", "Neither follows"],
    correct: 0
  },
  {
    q: "Statements: All roses are flowers. Some flowers are red. Conclusions: 1. Some roses are red. 2. All flowers are roses.",
    options: ["Only 1 follows", "Only 2 follows", "Both follow", "Neither follows"],
    correct: 3
  },

  // Dictionary & Word Arrangement (Q61–Q70)
  {
    q: "Arrange the words in dictionary order: 1. Zebra 2. Apple 3. Mango 4. Banana",
    options: ["2, 4, 3, 1", "2, 3, 4, 1", "4, 2, 3, 1", "2, 4, 1, 3"],
    correct: 0
  },
  {
    q: "Which word will come last in the dictionary?",
    options: ["Station", "Stable", "Stamina", "Status"],
    correct: 0
  },
  {
    q: "Arrange the words: 1. Elephant 2. Eagle 3. Engine 4. End",
    options: ["2, 1, 3, 4", "2, 3, 4, 1", "1, 2, 3, 4", "3, 2, 1, 4"],
    correct: 1
  },
  {
    q: "Which word will be in the middle in dictionary order?",
    options:

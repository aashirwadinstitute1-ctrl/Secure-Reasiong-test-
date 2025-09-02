const questions = [
  {
    q: "Q1. Which letter will come next in the series: A, C, E, G, ?",
    options: ["H", "I", "J", "K"],
    correct: "I"
  },
  {
    q: "Q2. If 1st January 2000 was Saturday, what day was 1st January 2001?",
    options: ["Sunday", "Monday", "Tuesday", "Friday"],
    correct: "Monday"
  },
  {
    q: "Q3. What time is shown in the given clock?",
    img: "images/clock1.png",
    options: ["2:15", "3:00", "4:45", "6:30"],
    correct: "4:45"
  },
  {
    q: "Q4. How many triangles are there in the given figure?",
    img: "images/triangle1.png",
    options: ["12", "14", "16", "18"],
    correct: "16"
  },
  {
    q: "Q5. A dice is rolled. What is the probability of getting an even number?",
    options: ["1/2", "1/3", "1/6", "2/3"],
    correct: "1/2"
  },
  {
    q: "Q6. If A is taller than B, and B is taller than C, who is the shortest?",
    options: ["A", "B", "C", "Can't be determined"],
    correct: "C"
  },
  {
    q: "Q7. Five friends are sitting in a row. If A is left of B, C is right of D, and E is at one end, who is in the middle?",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    q: "Q8. Pointing to a woman, a man said: 'Her mother is the only daughter of my mother'. How is the man related to the woman?",
    options: ["Father", "Brother", "Uncle", "Cousin"],
    correct: "Father"
  },
  {
    q: "Q9. Which diagram best represents Teachers, Students, and Girls?",
    img: "images/venn1.png",
    options: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    q: "Q10. Statements: All dogs are animals. Some animals are cats. Conclusion?",
    options: [
      "Some cats are dogs",
      "All cats are animals",
      "Some animals are dogs",
      "None"
    ],
    correct: "All cats are animals"
  },
  {
    q: "Q11. Arrange words in dictionary order: (1) Cat (2) Car (3) Can (4) Cup",
    options: ["2,3,1,4", "1,2,3,4", "3,2,1,4", "2,1,3,4"],
    correct: "3,2,1,4"
  },
  {
    q: "Q12. If profit is coded as TQKSGV, how is LOSS coded?",
    options: ["MPTR", "MRTT", "MQTR", "MPTT"],
    correct: "MPTR"
  },
  {
    q: "Q13. Choose the mirror image of the given figure.",
    img: "images/mirror1.png",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    q: "Q14. Paper folded figure is given. Find the unfolded figure.",
    img: "images/paper1.png",
    options: ["A", "B", "C", "D"],
    correct: "A"
  },
  {
    q: "Q15. Find the embedded figure in the diagram.",
    img: "images/embedded1.png",
    options: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    q: "Q16. Complete the figure series.",
    img: "images/series1.png",
    options: ["A", "B", "C", "D"],
    correct: "D"
  },
  {
    q: "Q17. If 2 men or 3 women can do a work in 12 days, how long will 1 man and 1 woman take?",
    options: ["7 days", "8 days", "9 days", "10 days"],
    correct: "8 days"
  },
  {
    q: "Q18. A watch gains 2 minutes every hour. If it is set correctly at 8:00 AM, what time will it show at 12:00 noon?",
    options: ["12:00", "12:08", "12:10", "12:12"],
    correct: "12:08"
  },
  {
    q: "Q19. How many squares are there in the given figure?",
    img: "images/squares1.png",
    options: ["20", "22", "25", "30"],
    correct: "25"
  },
  {
    q: "Q20. A is the brother of B. B is the sister of C. C is the son of D. How is A related to D?",
    options: ["Son", "Daughter", "Nephew", "Father"],
    correct: "Son"
  }
];
// Continue adding questions
questions.push(
  {
    q: "Q21. Which letter will replace the question mark: AZ, BY, CX, ?",
    options: ["DW", "EV", "FW", "DV"],
    correct: "DW"
  },
  {
    q: "Q22. On 15th August 1947, which day of the week was it?",
    options: ["Friday", "Saturday", "Thursday", "Wednesday"],
    correct: "Friday"
  },
  {
    q: "Q23. What time is shown in the clock?",
    img: "images/clock2.png",
    options: ["1:30", "2:30", "3:30", "4:30"],
    correct: "3:30"
  },
  {
    q: "Q24. Count the number of rectangles in the figure.",
    img: "images/rectangle1.png",
    options: ["9", "10", "12", "14"],
    correct: "12"
  },
  {
    q: "Q25. Two dice are rolled. What is the probability of getting sum = 7?",
    options: ["1/6", "1/12", "1/18", "1/36"],
    correct: "1/6"
  },
  {
    q: "Q26. P is taller than Q but shorter than R. Who is the tallest?",
    options: ["P", "Q", "R", "Can't be determined"],
    correct: "R"
  },
  {
    q: "Q27. In a row of boys, A is 10th from left and B is 15th from right. If they interchange their positions, A becomes 20th from left. How many boys are there in the row?",
    options: ["25", "30", "35", "40"],
    correct: "35"
  },
  {
    q: "Q28. Pointing to a photograph, a man says: 'He is my mother's only son's son'. How is the boy related to the man?",
    options: ["Son", "Grandson", "Nephew", "Cousin"],
    correct: "Son"
  },
  {
    q: "Q29. Which diagram best represents Doctors, Males, and Females?",
    img: "images/venn2.png",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    q: "Q30. Statements: All flowers are roses. All roses are plants. Conclusion?",
    options: [
      "All plants are roses",
      "All flowers are plants",
      "Some plants are roses",
      "None"
    ],
    correct: "All flowers are plants"
  },
  {
    q: "Q31. Arrange in dictionary order: (1) Apple (2) Ape (3) April (4) Apply",
    options: ["1,2,3,4", "2,1,4,3", "2,1,3,4", "1,4,2,3"],
    correct: "2,1,4,3"
  },
  {
    q: "Q32. If TRAIN is coded as UQBJM, then SCHOOL is coded as?",
    options: ["TIDNPM", "TIDNQL", "TIDMPL", "TIDNPL"],
    correct: "TIDNPM"
  },
  {
    q: "Q33. Choose the water image of the figure.",
    img: "images/water1.png",
    options: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    q: "Q34. Paper is folded and cut. Find the unfolded figure.",
    img: "images/paper2.png",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    q: "Q35. Find the embedded figure.",
    img: "images/embedded2.png",
    options: ["A", "B", "C", "D"],
    correct: "D"
  },
  {
    q: "Q36. Complete the figure series.",
    img: "images/series2.png",
    options: ["A", "B", "C", "D"],
    correct: "A"
  },
  {
    q: "Q37. If 3 men or 6 women can do a work in 12 days, how long will 1 man and 2 women take?",
    options: ["6 days", "8 days", "9 days", "10 days"],
    correct: "9 days"
  },
  {
    q: "Q38. A clock is set right at 12 noon. It loses 5 minutes every hour. What time will it show at 6:00 PM?",
    options: ["5:30", "5:40", "5:45", "5:50"],
    correct: "5:30"
  },
  {
    q: "Q39. How many circles are there in the figure?",
    img: "images/circles1.png",
    options: ["10", "12", "14", "16"],
    correct: "14"
  },
  {
    q: "Q40. A is the father of B. B is the brother of C. How is A related to C?",
    options: ["Father", "Uncle", "Brother", "Grandfather"],
    correct: "Father"
  }
);
// Continue adding questions
questions.push(
  {
    q: "Q41. If CAT = 3120, DOG = 4157, then BAT = ?",
    options: ["2120", "2119", "2130", "2125"],
    correct: "2119"
  },
  {
    q: "Q42. Which day will be 150 days after 5th March 2025?",
    options: ["Saturday", "Sunday", "Monday", "Tuesday"],
    correct: "Saturday"
  },
  {
    q: "Q43. Find the angle between the hands of the clock at 5:30.",
    options: ["75°", "90°", "120°", "135°"],
    correct: "75°"
  },
  {
    q: "Q44. Count the number of triangles in the figure.",
    img: "images/triangle2.png",
    options: ["12", "14", "16", "18"],
    correct: "16"
  },
  {
    q: "Q45. If two dice are rolled, what is the probability of getting a doublet?",
    options: ["1/12", "1/18", "1/6", "1/36"],
    correct: "1/6"
  },
  {
    q: "Q46. A is taller than B but shorter than C. D is shorter than B. Who is shortest?",
    options: ["A", "B", "C", "D"],
    correct: "D"
  },
  {
    q: "Q47. In a row of students, A is 7th from left and B is 12th from right. Total students = 25. What is the position of A from right?",
    options: ["18th", "19th", "20th", "21st"],
    correct: "19th"
  },
  {
    q: "Q48. Pointing to a lady, a man says: She is the daughter of my mother’s only son. Who is the lady?",
    options: ["Sister", "Daughter", "Niece", "Cousin"],
    correct: "Daughter"
  },
  {
    q: "Q49. Which Venn diagram represents Teacher, Female, Mother?",
    img: "images/venn3.png",
    options: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    q: "Q50. Statements: Some pens are pencils. Some pencils are erasers. Conclusion?",
    options: [
      "Some pens are erasers",
      "Some pencils are pens",
      "All erasers are pens",
      "None"
    ],
    correct: "Some pencils are pens"
  },
  {
    q: "Q51. Arrange in dictionary order: (1) Zebra (2) Zero (3) Zenith (4) Zeal",
    options: ["4,3,2,1", "1,2,3,4", "2,4,3,1", "4,2,3,1"],
    correct: "4,2,3,1"
  },
  {
    q: "Q52. If GAME is coded as FZLD, then PLAY is coded as?",
    options: ["OKZX", "OLZX", "OLBX", "OLZY"],
    correct: "OLZX"
  },
  {
    q: "Q53. Find the mirror image of the given figure.",
    img: "images/mirror2.png",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    q: "Q54. Paper is folded and cut. Find the unfolded figure.",
    img: "images/paper3.png",
    options: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    q: "Q55. Find the embedded figure.",
    img: "images/embedded3.png",
    options: ["A", "B", "C", "D"],
    correct: "A"
  },
  {
    q: "Q56. Complete the series.",
    img: "images/series3.png",
    options: ["A", "B", "C", "D"],
    correct: "D"
  },
  {
    q: "Q57. If 5 men can do a work in 10 days, how many days will 10 men take?",
    options: ["2", "3", "5", "7"],
    correct: "5"
  },
  {
    q: "Q58. A clock gains 2 minutes every hour. If it was set right at 12 noon, what time will it show at 6:00 PM?",
    options: ["6:10", "6:12", "6:15", "6:20"],
    correct: "6:12"
  },
  {
    q: "Q59. How many squares are in the figure?",
    img: "images/square2.png",
    options: ["14", "16", "18", "20"],
    correct: "16"
  },
  {
    q: "Q60. A is brother of B. B is sister of C. How is A related to C?",
    options: ["Brother", "Uncle", "Father", "Cousin"],
    correct: "Brother"
  }
);
// Continue adding questions
questions.push(
  {
    q: "Q61. If in a certain code, DELHI = 73541 and CALCUTTA = 82589662, then how is CALICUT written?",
    options: ["8251896", "8254961", "8251869", "8251968"],
    correct: "8251896"
  },
  {
    q: "Q62. On which date was 26th January 1950?",
    options: ["Monday", "Thursday", "Friday", "Tuesday"],
    correct: "Thursday"
  },
  {
    q: "Q63. Find the angle between the hands of the clock at 9:15.",
    options: ["97.5°", "100°", "105°", "110°"],
    correct: "97.5°"
  },
  {
    q: "Q64. Count the number of rectangles in the figure.",
    img: "images/rectangle2.png",
    options: ["18", "20", "22", "24"],
    correct: "22"
  },
  {
    q: "Q65. A dice is rolled twice. What is the probability of getting an odd number both times?",
    options: ["1/2", "1/3", "1/4", "1/6"],
    correct: "1/4"
  },
  {
    q: "Q66. P is taller than Q. R is shorter than P but taller than Q. Who is tallest?",
    options: ["P", "Q", "R", "Cannot be determined"],
    correct: "P"
  },
  {
    q: "Q67. In a row of students, Ram is 12th from left and 9th from right. How many students are there?",
    options: ["18", "19", "20", "21"],
    correct: "20"
  },
  {
    q: "Q68. Pointing to a boy, a woman said, 'He is the son of my only son.' How is the boy related to the woman?",
    options: ["Son", "Grandson", "Nephew", "Brother"],
    correct: "Grandson"
  },
  {
    q: "Q69. Which Venn diagram represents Doctors, Engineers, Males?",
    img: "images/venn4.png",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    q: "Q70. Statements: All apples are fruits. All fruits are sweet. Conclusions?",
    options: [
      "All apples are sweet",
      "Some fruits are apples",
      "All fruits are apples",
      "None"
    ],
    correct: "All apples are sweet"
  },
  {
    q: "Q71. Arrange in dictionary order: (1) College (2) Colony (3) Cold (4) Collage",
    options: ["4,1,2,3", "1,4,2,3", "2,1,4,3", "1,2,3,4"],
    correct: "4,1,2,3"
  },
  {
    q: "Q72. If LION is coded as MJPO, then BEAR is coded as?",
    options: ["CFBS", "CFBR", "CFAR", "CFBS"],
    correct: "CFBS"
  },
  {
    q: "Q73. Find the mirror image of the figure.",
    img: "images/mirror3.png",
    options: ["A", "B", "C", "D"],
    correct: "C"
  },
  {
    q: "Q74. Paper is folded and cut. Find the unfolded figure.",
    img: "images/paper4.png",
    options: ["A", "B", "C", "D"],
    correct: "B"
  },
  {
    q: "Q75. Find the embedded figure.",
    img: "images/embedded4.png",
    options: ["A", "B", "C", "D"],
    correct: "D"
  },
  {
    q: "Q76. Complete the series.",
    img: "images/series4.png",
    options: ["A", "B", "C", "D"],
    correct: "A"
  },
  {
    q: "Q77. If 12 men can complete a work in 15 days, how many days will 18 men take?",
    options: ["8", "9", "10", "11"],
    correct: "10"
  },
  {
    q: "Q78. A clock is set right at 6 AM. It loses 5 minutes every hour. What will be the time when it shows 7 PM?",
    options: ["9:00 PM", "9:15 PM", "9:30 PM", "9:45 PM"],
    correct: "9:00 PM"
  },
  {
    q: "Q79. How many parallelograms are in the figure?",
    img: "images/parallelogram.png",
    options: ["8", "10", "12", "14"],
    correct: "12"
  },
  {
    q: "Q80. A is father of B. C is mother of B. How is A related to C?",
    options: ["Brother", "Husband", "Uncle", "Cousin"],
    correct: "Husband"
  }
);

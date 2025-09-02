const questions = [
  // Alphabet Test (1–5)
  { id: 1, text: "Alphabet Test: A, C, E, G, ?", options: ["H","I","J","K"], answer: 2 },
  { id: 2, text: "Alphabet Test: AZ, BY, CX, ?", options: ["DW","EV","FW","GX"], answer: 0 },
  { id: 3, text: "Alphabet Test: D, F, H, J, ?", options: ["K","L","M","N"], answer: 1 },
  { id: 4, text: "Alphabet Test: ACE, BDF, CEG, ?", options: ["DFH","EFG","DGI","EHF"], answer: 0 },
  { id: 5, text: "Alphabet Test: A1, B2, C3, ?", options: ["D3","D4","E4","C4"], answer: 1 },

  // Calendar (6–10)
  { id: 6, text: "Calendar: 1 Jan 2025 कौन सा दिन होगा?", options: ["Monday","Wednesday","Thursday","Friday"], answer: 1 },
  { id: 7, text: "Calendar: अगर 29 Feb को जन्म हुआ तो leap year कौन सा?", options: ["2022","2023","2024","2025"], answer: 2 },
  { id: 8, text: "Calendar: 15 Aug 1947 कौन सा दिन था?", options: ["Friday","Thursday","Saturday","Sunday"], answer: 0 },
  { id: 9, text: "Calendar: 26 Jan 1950 कौन सा दिन था?", options: ["Tuesday","Thursday","Wednesday","Friday"], answer: 1 },
  { id: 10, text: "Calendar: अगर आज Monday है तो 100 दिन बाद कौन सा दिन?", options: ["Wednesday","Thursday","Friday","Saturday"], answer: 2 },

  // Clock (11–15)
  { id: 11, text: "Clock: 3:15 पर घड़ी की सुइयों में कोण?", options: ["0°","7.5°","15°","30°"], answer: 1 },
  { id: 12, text: "Clock: 6:00 पर hands का angle?", options: ["90°","180°","270°","0°"], answer: 1 },
  { id: 13, text: "Clock: 9:30 पर hands का angle?", options: ["75°","90°","105°","120°"], answer: 2 },
  { id: 14, text: "Clock: 12 बजे दोनों hands?", options: ["Opposite","Overlap","90° apart","None"], answer: 1 },
  { id: 15, text: "Clock: 10:10 पर angle?", options: ["115°","120°","125°","130°"], answer: 1 },

  // Counting Figures (16–20)
  { id: 16, text: "Counting Figure: एक triangle में कितने छोटे triangle?", options: ["4","6","8","10"], answer: 2 },
  { id: 17, text: "Square को 4 equal parts में divide करने पर कितने square?", options: ["4","5","6","8"], answer: 1 },
  { id: 18, text: "Rectangle में diagonal डालने पर कितने triangles?", options: ["2","4","6","8"], answer: 1 },
  { id: 19, text: "Pentagon में diagonals से कितने triangles?", options: ["10","15","20","25"], answer: 0 },
  { id: 20, text: "Hexagon में diagonals से कितने parts?", options: ["12","15","20","24"], answer: 2 },

  // Dice (21–25)
  { id: 21, text: "Dice: अगर 1 opposite 6 है तो 2 opposite?", options: ["3","4","5","None"], answer: 2 },
  { id: 22, text: "Dice: opposite faces का sum?", options: ["5","6","7","8"], answer: 2 },
  { id: 23, text: "Dice: अगर 2-4-6 एक साथ दिखे तो opposite?", options: ["1","3","5","6"], answer: 1 },
  { id: 24, text: "Dice: standard dice में 3 opposite?", options: ["4","5","6","2"], answer: 0 },
  { id: 25, text: "Dice: 5 opposite?", options: ["1","2","3","6"], answer: 1 },

  // Ranking (26–30)
  { id: 26, text: "Ranking: A सबसे छोटा, C सबसे बड़ा, बीच में?", options: ["A","B","C","None"], answer: 1 },
  { id: 27, text: "Ranking: 10 students में 7th from top, rank from bottom?", options: ["3","4","5","6"], answer: 0 },
  { id: 28, text: "Ranking: class में 40, Ram top से 10th, bottom से rank?", options: ["28","29","30","31"], answer: 1 },
  { id: 29, text: "Ranking: बीच वाला student कौन?", options: ["10th","15th","20th","25th"], answer: 2 },
  { id: 30, text: "Ranking: अगर 2 students add हों तो total?", options: ["42","43","44","45"], answer: 1 },

  // Seating Arrangement (31–35)
  { id: 31, text: "Seating: 5 लोग circle में, A opposite B, left of A?", options: ["B","C","D","E"], answer: 2 },
  { id: 32, text: "Seating: 6 लोग line में, C बीच में, left कौन?", options: ["A","B","D","E"], answer: 1 },
  { id: 33, text: "Seating: A,B,C,D square में, A facing center, right of A?", options: ["B","C","D","None"], answer: 0 },
  { id: 34, text: "Seating: East facing 4 लोग, A leftmost, rightmost कौन?", options: ["B","C","D","None"], answer: 2 },
  { id: 35, text: "Seating: 8 लोग circle में, odd facing out, opposite of 3?", options: ["7","8","4","5"], answer: 2 },

  // Blood Relation (36–40)
  { id: 36, text: "Blood: A is father of B, B is mother of C. Relation A–C?", options: ["Father","Grandfather","Uncle","Brother"], answer: 1 },
  { id: 37, text: "Blood: P is sister of Q, Q is father of R. P is?", options: ["Mother","Aunt","Sister","Grandmother"], answer: 1 },
  { id: 38, text: "Blood: X is son of Y, Y is wife of Z. Relation Z–X?", options: ["Father","Uncle","Brother","Grandfather"], answer: 0 },
  { id: 39, text: "Blood: M is mother of N, N is father of O. M is?", options: ["Grandmother","Aunt","Mother","Sister"], answer: 0 },
  { id: 40, text: "Blood: A is brother of B, C is sister of A. Relation B–C?", options: ["Brother","Sister","Cousin","None"], answer: 1 },

  // Venn Diagram (41–45)
  { id: 41, text: "Venn: Cat, Animal, Dog?", options: ["Separate","Overlapping","Subset","None"], answer: 2 },
  { id: 42, text: "Venn: Teacher, Man, Woman?", options: ["Separate","Overlapping","Subset","None"], answer: 1 },
  { id: 43, text: "Venn: Circle, Square, Triangle?", options: ["Separate","Overlapping","Subset","None"], answer: 0 },
  { id: 44, text: "Venn: Pen, Stationary, Book?", options: ["Subset","Overlapping","Separate","None"], answer: 0 },
  { id: 45, text: "Venn: Doctor, Male, Female?", options: ["Subset","Overlapping","Separate","None"], answer: 1 },

  // Syllogism (46–50)
  { id: 46, text: "Syllogism: All A are B, All B are C ⇒ ?", options: ["All A are C","All C are A","Some A are not C","None"], answer: 0 },
  { id: 47, text: "Syllogism: All cats are dogs, All dogs are animals ⇒ ?", options: ["All cats are animals","All animals are cats","Some cats are not animals","None"], answer: 0 },
  { id: 48, text: "Syllogism: Some A are B, All B are C ⇒ ?", options: ["Some A are C","All C are A","No relation","None"], answer: 0 },
  { id: 49, text: "Syllogism: Some pens are books, All books are papers ⇒ ?", options: ["Some pens are papers","All papers are pens","No relation","None"], answer: 0 },
  { id: 50, text: "Syllogism: All flowers are plants, Some plants are trees ⇒ ?", options: ["Some flowers are trees","All plants are flowers","No conclusion","None"], answer: 2 },

  // Dictionary/Word Arrangement (51–55)
  { id: 51, text: "Dictionary: Arrange - Dog, Cat, Apple, Ball", options: ["Apple, Ball, Cat, Dog","Dog, Cat, Ball, Apple","Cat, Dog, Apple, Ball","None"], answer: 0 },
  { id: 52, text: "Word: Arrange - Mango, Apple, Banana, Grapes", options: ["Apple, Banana, Grapes, Mango","Mango, Apple, Banana, Grapes","Banana, Apple, Grapes, Mango","None"], answer: 0 },
  { id: 53, text: "Word: Arrange - Zebra, Lion, Tiger, Ant", options: ["Ant, Lion, Tiger, Zebra","Lion, Tiger, Zebra, Ant","Tiger, Lion, Zebra, Ant","None"], answer: 0 },
  { id: 54, text: "Word: Arrange - King, Queen, Joker, Ace", options: ["Ace, Joker, King, Queen","King, Queen, Ace, Joker","Queen, King, Joker, Ace","None"], answer: 0 },
  { id: 55, text: "Word: Arrange - Ram, Shyam, Mohan, Aarav", options: ["Aarav, Mohan, Ram, Shyam","Ram, Shyam, Mohan, Aarav","Mohan, Shyam, Aarav, Ram","None"], answer: 0 },

  // Decision Making (56–60)
  { id: 56, text: "Decision: अगर किसी के पास driving license नहीं है तो?", options: ["Allow","Not Allow","Depends","None"], answer: 1 },
  { id: 57, text: "Decision: Student age <18, admission?", options: ["Allow","Not Allow","Depends","None"], answer: 0 },
  { id: 58, text: "Decision: Exam बिना admit card?", options: ["Allow","Not Allow","Depends","None"], answer: 1 },
  { id: 59, text: "Decision: Loan without job?", options: ["Allow","Not Allow","Depends","None"], answer: 2 },
  { id: 60, text: "Decision: Entry without ticket?", options: ["Allow","Not Allow","Depends","None"], answer: 1 },

  // Mirror & Water Image (61–65)
  { id: 61, text: "Mirror: Word CAT का mirror image?", options: ["ƆAT","TAƆ","TAC","None"], answer: 0 },
  { id: 62, text: "Mirror: 123 का mirror?", options: ["321","Ǝ2Ɔ","None","1ƆƐ"], answer: 1 },
  { id: 63, text: "Water: Word WOW का water image?", options: ["MOM","WOW","ʍOʍ","None"], answer: 2 },
  { id: 64, text: "Water: 121 का water image?", options: ["121","ƖƖƖ","None","12Ɩ"], answer: 0 },
  { id: 65, text: "Mirror: PQ का mirror?", options: ["OP","QP","Ƥᑫ","None"], answer: 2 },

  // Paper Cutting/Folding (66–70)
  { id: 66, text: "Paper fold half circle cut, open result?", options: ["Circle","Semi circle","Two circles","Pattern"], answer: 3 },
  { id: 67, text: "Paper fold square diagonally cut, open result?", options: ["2 triangles","4 triangles","Rectangle","None"], answer: 1 },
  { id: 68, text: "Paper fold rectangle middle cut, result?", options: ["2 small rect","2 square","4 rect","None"], answer: 0 },
  { id: 69, text: "Paper fold triangle cut, result?", options: ["Star","Diamond","Hexagon","Pattern"], answer: 3 },
  { id: 70, text: "Paper fold circle 2 fold cut, result?", options: ["4 holes","2 holes","Pattern","None"], answer: 0 },

  // Embedded Figure (71–75)
  { id: 71, text: "Embedded: Square inside circle?", options: ["Yes","No","Can't say","None"], answer: 0 },
  { id: 72, text: "Embedded: Triangle inside hexagon?", options: ["Yes","No","Can't say","None"], answer: 0 },
  { id: 73, text: "Embedded: Arrow inside star?", options: ["Yes","No","Can't say","None"], answer: 0 },
  { id: 74, text: "Embedded: Circle inside rectangle?", options: ["Yes","No","Can't say","None"], answer: 0 },
  { id: 75, text: "Embedded: Pentagon inside octagon?", options: ["Yes","No","Can't say","None"], answer: 0 },

  // Figure Completion (76–78)
  { id: 76, text: "Figure completion: Half circle given, complete?", options: ["Circle","Square","Triangle","None"], answer: 0 },
  { id: 77, text: "Figure completion: Half square given, complete?", options: ["Circle","Square","Triangle","None"], answer: 1 },
  { id: 78, text: "Figure completion: Half triangle given, complete?", options: ["Circle","Square","Triangle","None"], answer: 2 },

  // Figure Series (79–80)
  { id: 79, text: "Figure Series: ▲ ▼ ▲ ▼ ?", options: ["▲","▼","○","□"], answer: 0 },
  { id: 80, text: "Figure Series: ○ □ ○ □ ?", options: ["○","□","△","▼"], answer: 0 },
];

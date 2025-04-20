function generateQuestions(subject) {
    const questions = [];
    for (let i = 1; i <= 40; i++) {
      questions.push({
        q: `What is the answer to question  in ${subject}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: "Option A"
      });
    }
    return questions;
  }

  // const questionsData = {
  //   python: generateQuestions("Python"),
  //   cpp: generateQuestions("C++"),
  //   javascript: generateQuestions("JavaScript"),
  //   oops: generateQuestions("OOPs")
  // };

  const questionsData = {
      
      python: [
          {//1//
          q: "What does 'len()' function do in Python?",
          options: ["Counts items", "Deletes items", "Adds items", "Sorts items"],
          answer: "Counts items"
          },
          {//2//
          q: "Which keyword is used to define a function in Python?",
          options: ["func", "define", "def", "function"],
          answer: "def"
          },
          {//3//
          q: "What is the output of print(2 ** 3)?",
          options: ["6", "8", "9", "Error"],
          answer: "8"
          },
          {//4//
          q: "Which keyword is used for function in Python?",
          options: ["func", "define", "def", "function"],
          answer: "def"
          },
          {//5//
          q: "What data type is the object below? \n x = [1, 2, 3]",
          options: ["Tuple", "List", "Dictionary", "Set"],
          answer: "List"
          },
          {//6//
            q: "Which of the following is used to define a block of code in Python?",
            options: ["Brackets", "Indentation", "Parentheses", "Colon"],
            answer: "Indentation"
            },
            {//7//
            q: "What will be the output of print(bool(0))?",
            options: ["True", "False", "None", "0"],
            answer: "False"
            },
            {//8//
            q: "Which operator is used for floor division in Python?",
            options: ["/", "//", "%", "**"],
            answer: "//"
            },
            {//9//
            q: "Which of the following is a valid variable name in Python?",
            options: ["2variable", "my-variable", "my_variable", "my variable"],
            answer: "my_variable"
            },
            {//10//
            q: "Which of these is not a core data type in Python?",
            options: ["Lists", "Tuples", "Class", "Dictionary"],
            answer: "Class"
            }
      ],
      cpp: [
          {//1//
          q: "What is the default access specifier in C++ class?",
          options: ["private", "public", "protected", "internal"],
          answer: "private"
          },
          {//2//
          q: "Which of the following is the correct syntax to declare a pointer in C++?",
          options: ["int* ptr;", "int ptr*;", "int ptr;", "ptr* int;"],
          answer: "int* ptr;"
          },
          {//3//
          q: "Which header file is needed for input/output operations in C++?",
          options: ["iostream", "stdio", "conio.h", "fstream"],
          answer: "iostream"
          },
          {//4//
          q: "What is the size of 'int' in C++?",
          options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
          answer: "4 bytes"
          },
          {//5//
          q: "Which of the following is the correct syntax to declare a function in C++?",
          options: ["function void func()", "void func();", "void function func()", "void func()"],
          answer: "void func();"
          },
          {//6//
          q: "Which operator is used to access members of a class in C++?",
          options: [".", "->", "&", "::"],
          answer: "."
          },
          {//7//
          q: "In C++, which keyword is used for dynamic memory allocation?",
          options: ["malloc", "calloc", "new", "allocate"],
          answer: "new"
          },
          {//8//
          q: "Which of the following is not an access modifier in C++?",
          options: ["public", "private", "protected", "static"],
          answer: "static"
          },
          {//9//
          q: "What is the purpose of the 'this' pointer in C++?",
          options: ["Access a static variable", "Access instance variable", "Point to the current object", "None of the above"],
          answer: "Point to the current object"
          },
          {//10//
          q: "Which of the following is used for exception handling in C++?",
          options: ["try-except", "try-catch", "throw-catch", "error-catch"],
          answer: "try-catch"
          }
      ],
      javascript: [
          {//1//
          q: "Which symbol is used for single-line comment in JavaScript?",
          options: ["//", "/*", "#", "<!--"],
          answer: "//"
          },
          {//2//
          q: "Which company developed JavaScript?",
          options: ["Netscape", "Oracle", "Microsoft", "Sun Microsystems"],
          answer: "Netscape"
          },
          {//3//
          q: "What is the correct syntax for referring to an external script called 'script.js'?",
          options: ["<script src='script.js'></script>", "<script ref='script.js'></script>", "<script name='script.js'></script>", "<script href='script.js'></script>"],
          answer: "<script src='script.js'></script>"
          },
          {//4//
          q: "Which of the following is correct about JavaScript?",
          options: ["JavaScript is a server-side language", "JavaScript can be used for front-end development only", "JavaScript can be used for both front-end and back-end", "None of the above"],
          answer: "JavaScript can be used for both front-end and back-end"
          },
          {//5//
          q: "Which of the following is a data type in JavaScript?",
          options: ["int", "float", "boolean", "double"],
          answer: "boolean"
          },
          {//6//
            q: "Which of the following is correct about 'null' in JavaScript?",
            options: ["It is a data type", "It represents an empty value", "It is a number", "It is an object"],
            answer: "It represents an empty value"
            },
            {//7//
            q: "How can we create an array in JavaScript?",
            options: ["[]", "{}", "()", "<>"],
            answer: "[]"
            },
            {//8//
            q: "Which of the following is the correct way to add a comment in JavaScript?",
            options: ["// Comment", "# Comment", "/* Comment */", "/ Comment /"],
            answer: "// Comment"
            },
            {//9//
            q: "What is the purpose of the 'this' keyword in JavaScript?",
            options: ["Refers to the global object", "Refers to the current object", "Refers to the current class", "Refers to the current function"],
            answer: "Refers to the current object"
            },
            {//10
            q: "Which of the following methods can be used to loop through an array in JavaScript?",
            options: ["for", "forEach", "while", "All of the above"],
            answer: "All of the above"
            }
      ],
      oops: [
          {//1//
          q: "What is encapsulation?",
          options: [
              "Hiding data",
              "Showing implementation",
              "Inheritance",
              "None of the above"
          ],
          answer: "Hiding data"
          },
          {//2//
          q: "What is an object in OOPs?",
          options: ["A function", "An instance of a class", "A data structure", "A data type"],
          answer: "An instance of a class"
          },
          {//3//
          q: "What is inheritance in OOP?",
          options: ["A way to hide data", "A way to share behavior among classes", "A way to extend functionality", "All of the above"],
          answer: "All of the above"
          },
          {//4//
          q: "What is polymorphism in OOP?",
          options: ["Same method name, different implementation", "Same class, different objects", "Same object, different state", "None of the above"],
          answer: "Same method name, different implementation"
          },
          {//5//
          q: "What is encapsulation in OOP?",
          options: ["Hiding the internal state and behavior", "Inheritance", "Object creation", "None of the above"],
          answer: "Hiding the internal state and behavior"
          },
          {//6
            q: "What does the 'this' keyword refer to in OOP?",
            options: ["The current instance of the class", "The parent class", "The static variable", "None of the above"],
            answer: "The current instance of the class"
            },
            {//7
            q: "What is an abstract class in OOP?",
            options: ["A class that cannot be instantiated", "A class that can be instantiated", "A class that is already implemented", "None of the above"],
            answer: "A class that cannot be instantiated"
            },
            {//8
            q: "Which of the following is an OOP concept?",
            options: ["Classes", "Objects", "Inheritance", "All of the above"],
            answer: "All of the above"
            },
            {//9
            q: "What is the use of a constructor in OOP?",
            options: ["To create a new instance of a class", "To initialize the object", "To initialize variables", "All of the above"],
            answer: "All of the above"
            },
            {//10
            q: "What is the main purpose of the 'super' keyword in OOP?",
            options: ["To call the parent class's methods", "To create a constructor", "To access private data", "None of the above"],
            answer: "To call the parent class's methods"
            }
      ]
      };


  let currentQuestionIndex = 0, score = 0, selectedAnswers = [], questions = [], autoSubmitted = [], timer;
  const quizArea = document.getElementById("quiz-area");
  const timerDisplay = document.getElementById("timer");
  const resultScreen = document.getElementById("result-screen");
  let timeLeft = 40;
  let startTime;

  function startQuiz() {
    resultScreen.style.display = 'none';
    clearInterval(timer);
    const subject = document.getElementById("quiz-subject").value;
    let count = parseInt(document.getElementById("quiz-count").value);
    const availableQuestions = [...questionsData[subject]];
    const shuffled = availableQuestions.sort(() => 0.5 - Math.random());
    questions = shuffled.slice(0, count);
    currentQuestionIndex = 0;
    selectedAnswers = new Array(count).fill(null);
    autoSubmitted = new Array(count).fill(false);
    score = 0;
    startTime = new Date();
    renderQuestion();
  }

  function renderQuestion() {
    clearInterval(timer);
    timeLeft = 40;
    updateTimer();

    const question = questions[currentQuestionIndex];
    const selected = selectedAnswers[currentQuestionIndex];

    quizArea.innerHTML = `
      <div class="question">Q${currentQuestionIndex + 1}. ${question.q}</div>
      <div class="options">
        ${question.options.map(opt => `
          <button class="option-btn ${selected === opt ? 'selected' : ''}" onclick="selectOption('${opt}')">${opt}</button>
        `).join('')}
      </div>
      <div class="navigation-buttons">
        <button onclick="prevQuestion()">Previous</button>
        <button onclick="submitAnswer()">Submit</button>
        <button onclick="resetAnswer()">Reset</button>
        <button onclick="nextQuestion()">Next</button>
      </div>
      <div class="status">${autoSubmitted[currentQuestionIndex] ? 'Answer Submitted' : 'Not Submitted'}</div>
    `;

    timer = setInterval(() => {
      timeLeft--;
      updateTimer();
      if (timeLeft <= 0) {
        clearInterval(timer);
        if (!autoSubmitted[currentQuestionIndex]) submitAnswer(true);
      }
    }, 1000);
  }

  function updateTimer() {
    timerDisplay.textContent = `⏱️ ${timeLeft}s`;
  }

  function selectOption(opt) {
    if (!autoSubmitted[currentQuestionIndex]) {
      selectedAnswers[currentQuestionIndex] = opt;
      renderQuestion();
    }
  }

  function submitAnswer(auto = false) {
    const selected = selectedAnswers[currentQuestionIndex];
    if (!selected) return;
    if (autoSubmitted[currentQuestionIndex]) return;
    autoSubmitted[currentQuestionIndex] = true;
    if (selected === questions[currentQuestionIndex].answer) score++;

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(btn => {
      if (btn.textContent === questions[currentQuestionIndex].answer) {
        btn.classList.add('correct');
      }
      if (btn.textContent === selected && selected !== questions[currentQuestionIndex].answer) {
        btn.classList.add('wrong');
      }
      btn.disabled = true;
    });

    document.querySelector('.status').textContent = 'Answer Submitted';

    if (currentQuestionIndex === questions.length - 1) {
      clearInterval(timer);
      setTimeout(showResult, 1500);
    }
  }

  function resetAnswer() {
    if (autoSubmitted[currentQuestionIndex]) return;
    selectedAnswers[currentQuestionIndex] = null;
    renderQuestion();
  }

  function prevQuestion() {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      renderQuestion();
    }
  }

  function nextQuestion() {
    if (!autoSubmitted[currentQuestionIndex]) submitAnswer(true);
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      renderQuestion();
    }
  }

  function showResult() {
    clearInterval(timer);
    timerDisplay.textContent = '';
    quizArea.innerHTML = '';
    const endTime = new Date();
    const duration = Math.round((endTime - startTime) / 1000);
    resultScreen.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>
                              <p>You completed the quiz in <strong>${duration} seconds</strong>.</p>
                              <button class="review-btn" onclick="reviewAnswers()">Review Answers</button>`;
    resultScreen.style.display = 'block';
  }

  function reviewAnswers() {
    clearInterval(timer);
    timerDisplay.textContent = '';
    let reviewContent = '';
    questions.forEach((question, index) => {
      const selected = selectedAnswers[index];
      reviewContent += `
        <div class="question">Q${index + 1}. ${question.q}</div>
        <div>Your Answer: <b>${selected ? selected : 'Not Answered'}</b></div>
        <div>Correct Answer: <b>${question.answer}</b></div><hr>
      `;
    });
    resultScreen.innerHTML = reviewContent;
  }

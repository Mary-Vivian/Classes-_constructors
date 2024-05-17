class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
    toggleAvailability() {
      this.isAvailable = !this.isAvailable;
    }
  }

  class Rental {
    constructor(car, renterName, rentalStartDate, rentalEndDate) {
      this.car = car;
      this.renterName = renterName;
      this.rentalStartDate = rentalStartDate;
      this.rentalEndDate = rentalEndDate;
    }
    calculateRentalDuration() {
      const startDate = this.rentalStartDate.getTime();
      const endDate = this.rentalEndDate.getTime();
      const duration = endDate - startDate;
      return Math.ceil(duration / (1000 * 60 * 60 * 24)); 
    }
  }
  
  const carname = new Car("Toyota", "Camry", 2020, true);

  const rentalInfo = new Rental(carname, "Mary", new Date("2024-04-20"), new Date("2024-04-25"));
 
  const rentalDuration = rentalInfo.calculateRentalDuration();
  console.log("Rental duration:", rentalDuration, "days");

  // You are building a simple quiz app that contains multiple-choice questions. 
  // Your task is to create two JavaScript classes: Question and Quiz. The Question class will represent individual questions, and the Quiz class will manage a collection of questions and the user's progress. 
  class Question {
    constructor(text, options, correctAnswer) {
      this.text = text;
      this.options = options;
      this.correctAnswer = correctAnswer;
    }
    checkAnswer(userAnswer) {
      return userAnswer === this.correctAnswer;
    }
  }
  class Quiz {
    constructor() {
      this.questions = [];
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
    addQuestion(question) {
      this.questions.push(question);
    }
    nextQuestion() {
      this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer){
      const currentQuestion=this.questions[this.currentQuestionIndex];
      if(currentQuestion.checkAnswer(userAnswer)){
        return this.score++;
      }
    
        this.nextQuestion();
    }
  }

  const question1= new Question("Where do you come from",["Kenya","London","Egypt"],"Kenya")
   
  const question2= new Question("How many galaxies are their?",["100","200","200"],"200");
   const quiz=new Quiz();
   quiz.addQuestion(question1);
   quiz.addQuestion(question2);

   quiz.submitAnswer("Henta");
   quiz.submitAnswer("200");
console.log(Quiz.score);
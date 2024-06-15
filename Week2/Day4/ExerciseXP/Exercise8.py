"""
Exercise 8 : Star Wars Quiz
Instructions
This project allows users to take a quiz to test their Star Wars knowledge.
The number of correct/incorrect answers are tracked and the user receives different messages depending on how well they did on the quiz.

Here is an array of dictionaries, containing those questions and answers

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


Create a function that asks the questions to the user, and check his answers. Track the number of correct, incorrect answers. Create a list of wrong_answers
Create a function that informs the user of his number of correct/incorrect answers.
Bonus : display to the user the questions he answered wrong, his answer, and the correct answer.
If he had more then 3 wrong answers, ask him to play again.
"""

data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]


def ask_questions():
  """Asks the user Star Wars quiz questions and tracks their answers.

  Returns:
      A tuple containing the number of correct answers, a list of user answers, and a list of correct answers (or None for incorrect user answers).
  """

  correct = 0
  user_answers = []
  correct_answers = []
  for question_data in data:
    question = question_data["question"]
    answer = question_data["answer"]
    user_answer = input(f"{question} ")

    user_answers.append(user_answer)

    if user_answer == answer:
      correct += 1
      correct_answers.append(answer)  # Add correct answer only if user got it right
    else:
      correct_answers.append(None)  # Add None for incorrect answers

  return correct, user_answers, correct_answers

def display_results(correct, user_answers, correct_answers, questions):
  """Displays the quiz results to the user, including paired questions, user answers, and correct answers (only for incorrect ones).

  Args:
      correct: The number of correct answers.
      user_answers: A list of user answers.
      correct_answers: A list of correct answers (or None for incorrect user answers).
  """

  total_questions = len(data)

  print(f"\nYou answered {correct} out of {total_questions} questions correctly.")

  print("\nHere are your answers compared to the correct answers:")
  for i in range(total_questions):
    question = questions[i]  # Use 'questions' from the argument (assuming it's passed)
    user_answer = user_answers[i]
    correct_answer = correct_answers[i]
    print(f"\t- {question}")
    print(f"\t\tYour answer: {user_answer}")
    if correct_answer is None:
      print(f"\t\tIncorrect. The correct answer is: {data[i]['answer']}")  # Access answer from data using index

  if correct < total_questions:
    play_again = input("Would you like to try again? (yes/no) ").lower()
    if play_again == "yes":
      main()  # Call the main function to restart the quiz


def main():
  """Runs the Star Wars quiz."""

  correct, user_answers, correct_answers = ask_questions()
  display_results(correct, user_answers, correct_answers, questions=data)  # Pass 'questions' as well


if __name__ == "__main__":
  main()
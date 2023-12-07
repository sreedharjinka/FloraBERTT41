from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import T5Tokenizer, T5ForConditionalGeneration
import spacy

# Load spaCy for vocabulary complexity analysis
nlp = spacy.load("en_core_web_sm")

app = Flask(__name__)
CORS(app)

# Load the model and tokenizer
tokenizer = T5Tokenizer.from_pretrained("mrm8488/t5-base-finetuned-question-generation-ap")
model = T5ForConditionalGeneration.from_pretrained("mrm8488/t5-base-finetuned-question-generation-ap")

@app.route("/generate_questions", methods=["POST"])
def generate_questions():
    data = request.json
    paragraph = data.get("paragraph", "")
    difficulty = data.get("difficulty", 1)  # Default to 1 if not provided

    # Generate multiple unique questions
    question_answers = []
    num_questions_to_generate = 15
    generated_questions = set()  # To store unique questions

    while len(generated_questions) < num_questions_to_generate:
        # Generate a question
        question = "Generate a question: " + paragraph

        # Generate the question using the model
        input_ids = tokenizer.encode(question, return_tensors="pt", max_length=512, truncation=True)
        output_ids = model.generate(input_ids, max_length=100, num_return_sequences=1, do_sample=True)
        # print(output_ids)
        # Decode the generated question
        for e in output_ids:
            generated_question = tokenizer.decode(e, skip_special_tokens=True)[10 : ]
            # print(e, generated_question)
            # Check if the generated question is unique
            if generated_question not in generated_questions:
                # Calculate vocabulary complexity based on the number of unique words
                # question_tokens = nlp(generated_question)
                # unique_words = set([token.text.lower() for token in question_tokens if token.is_alpha])
                # vocabulary_complexity = len(unique_words)
                num_chars = len(generated_question)
                # print(num_chars)
                # Filter questions based on vocabulary complexity and difficulty level
                # You can adjust these criteria based on your requirements
                if num_chars > 100:
                    difficulty_level = 3
                elif num_chars > 70:
                    difficulty_level = 2
                else:
                    difficulty_level = 1

                if difficulty_level == difficulty:
                    question_answers.append({"text": generated_question, "difficulty": difficulty_level})

                # Add the generated question to the set
                generated_questions.add(generated_question)

    return jsonify({"questions": question_answers})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

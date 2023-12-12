import firebase_admin
from firebase_admin import credentials, auth
from flask import Flask, request, jsonify

# Initialize Firebase Admin SDK
cred = credentials.Certificate('path/to/serviceAccountKey.json')
firebase_admin.initialize_app(cred)

app = Flask(__name__)
@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    try:
        # Create user with email and password
        user = auth.create_user(email=email, password=password)
        return jsonify({'message': 'User created successfully'}), 201
    except Exception as e:
        return jsonify({'message': str(e)}), 400

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    try:
        # Sign in user with email and password
        user = auth.get_user_by_email(email)
        auth.verify_password(user.uid, password)
        return jsonify({'message': 'Login successful'}), 200
    except auth.AuthError as e:
        return jsonify({'message': str(e)}), 401
    except Exception as e:
        return jsonify({'message': str(e)}), 404

if __name__ == '__main__':
    app.run()

from flask import Flask, render_template, request, redirect, url_for
import yaml

app = Flask(__name__)

# Load user data from the YAML file
with open('logins.yaml', 'r') as file:
    users = yaml.safe_load(file)

# Function to authenticate users
def authenticate(username, password):
    for user_id, user_data in users.items():
        if user_data['username'] == username and user_data['password'] == password:
            return user_id
    return None


# Dashboard route
@app.route('/dashboard/<int:user_id>')
def dashboard(user_id):
    user_data = users.get(str(user_id))
    if user_data:
        return f'Welcome, {user_data["username"]}! Your ID is {user_data["id"]}'
    else:
        return 'User not found'

if __name__ == '__main__':
    app.run(debug=True)

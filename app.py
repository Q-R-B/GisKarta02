from flask import Flask, redirect, url_for, render_template, request, session, send_from_directory
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import os

app = Flask(__name__)
# app.secret_key = os.urandom(24)

# login_manager = LoginManager()
# login_manager.init_app(app)
# login_manager.login_view = 'login'

# @login_manager.user_loader
# def load_user(user_id):
#     return User.get(user_id)


# class User(UserMixin):
#     users = {
#         os.environ.get('username'): {'password': os.environ.get('password')}
#     }

#     def __init__(self, username):
#         self.id = username

#     @classmethod
#     def get(cls, id):
#         if id in cls.users:
#             return cls(id)
#         return None

# @app.route('/login', methods=['GET', 'POST'])
# def login():
#     if request.method == 'POST':
#         username = request.form['username']
#         password = request.form['password']
#         if username in User.users and User.users[username]['password'] == password:
#             user = User(username)
#             login_user(user)
#             return redirect(url_for('home'))
#         else:
#             return 'Invalid username or password'
#     return render_template('login.html')

@app.route('/')
#@login_required
def home():
    return render_template('index.html')

# @app.route('/logout')
# def logout():
#     logout_user()
#     return redirect(url_for('login'))

@app.route('/layers/<path:filename>')
#@login_required
def send_layers(filename):
    return send_from_directory(os.path.join('static', 'layers'), filename)

@app.route('/resources/<path:filename>')
#@login_required
def send_resources(filename):
    return send_from_directory(os.path.join('static', 'resources'), filename)

@app.route('/styles/<path:filename>')
#@login_required
def send_styles(filename):
    return send_from_directory(os.path.join('static', 'styles'), filename)

@app.route('/webfront/<path:filename>')
#@login_required
def send_webfront(filename):
    return send_from_directory(os.path.join('static', 'webfront'), filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)

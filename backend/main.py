from flask import Flask
from flask_restx import Api
from models import Recipe,User
from exts import db
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from recipes import recipe_ns
from auth import auth_ns


def create_app(config):
    app=Flask(__name__)
    app.config.from_object(config)
    db.init_app(app)
    migrate=Migrate(app, db)
    JWTManager(app)
    api=Api(app, doc='/docs')

    api.add_namespace(recipe_ns)
    api.add_namespace(auth_ns)

    @app.route('/')
    def index():
        return app.send_static_file('index.html')

    @app.errorhandler(404)
    def not_found(err):
        return app.send_static_file('index.html')


    @app.shell_context_processor
    def make_shell_context():
        return {
            "db": db,
            "Recipe": Recipe,
            "User": User
        }



    return app
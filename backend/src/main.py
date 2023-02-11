from db import get_players
from flask import Flask, jsonify

app = Flask(__name__)


@app.get("/players")
def players():
    return jsonify(get_players())

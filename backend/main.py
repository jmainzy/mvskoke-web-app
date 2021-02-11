from flask_cors import CORS
from flask import Flask, jsonify, request
from .entities.term import Term, TermSchema

# creating the Flask application
app = Flask(__name__)
# Before deploying to production, check this: https://flask-cors.readthedocs.io/en/latest/#resource-specific-cors
CORS(app)

@app.route('/terms')
def get_terms():
    # get terms from Firebase
    term1 = Term("1", "wakv")
    term2 = Term("2", "cesse")
    termObjects = [ term1, term2 ]

    # transforming into JSON-serializable objects
    schema = TermSchema(many=True)
    terms = schema.dump(termObjects)
    print("terms:" + str(terms))

    # serializing as JSON
    return jsonify(terms)

@app.route('/terms', methods=['POST'])
def add_term():
    #mount term object
    postedTerm = TermSchema(only=('term'))\
        .load(request.get_json())

    term = Term(**postedTerm.data, created_by="HTTP post request")
    print("adding term "+term.term)

print("hello, world")

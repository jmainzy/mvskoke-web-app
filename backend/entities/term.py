from marshmallow import Schema, fields

class Term():
    def __init__(self, id, term):
        self.id = id
        self.term = term

class TermSchema(Schema):
    id = fields.Str()
    term = fields.Str()
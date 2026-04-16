from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# CLASS
class Student:   #mapped to database table
    def __init__(self, id, name,course=None ):
        self.id=id
        self.name=name
        self.course=course

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "course": self.course
        }

# data holder
students = [
     Student(1, "Akida Mwaura", "Software Development"),
     Student(2, "Mike John", "Cyber Security")
]


#  CRUD students
# Create
@app.route('/students', methods=["POST"])
def create_student():
    data = request.json
    # Auto-generate ID if not provided or find max +1
    if 'id' not in data:
        max_id = max([s.id for s in students]) if students else 0
        data['id'] = max_id + 1
    new_student = Student(id=data["id"], name=data["name"], course=data.get("course"))
    students.append(new_student)
    return jsonify(new_student.to_dict()), 201

# get all
@app.route('/students', methods=['GET'])
def fetch_students():
    return jsonify([student.to_dict() for student in students])

# get single
@app.route('/students/<int:id>', methods=['GET'])
def fetch_student(id):
    student = next((s for s in students if s.id == id), None)
    if student:
        return jsonify(student.to_dict())
    return jsonify({"error": "Student not found"}), 404

# update
@app.route('/students/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.json
    student = next((s for s in students if s.id == id), None)
    if student:
        student.name = data.get("name", student.name)
        student.course = data.get("course", student.course)
        return jsonify(student.to_dict())
    return jsonify({"error": "Student not found"}), 404

# delete
@app.route('/students/<int:id>', methods=['DELETE'])
def delete_student(id):
    global students
    student = next((s for s in students if s.id == id), None)
    if student:
        students = [s for s in students if s.id != id]
        return jsonify({"message": "Student deleted"}), 200
    return jsonify({"error": "Student not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
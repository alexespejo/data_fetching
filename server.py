from flask import Flask, request, jsonify, after_this_request
import datetime as dt 
app = Flask(__name__)

#sample data 
people ={ 'people': [{
  'name': 'Alex', 
   'status':True, 
  'date': dt.datetime.now()},{
  'name': 'Erin', 
   'status':False, 
  'date': dt.datetime.now()}]}

@app.route('/', methods=['GET'])
def index(): #you can change this however you like 
    @after_this_request
    def add_header(response):
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    return people

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=5001)
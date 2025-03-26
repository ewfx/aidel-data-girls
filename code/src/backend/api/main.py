from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from utils.processing_utils import convert_file_to_json
import json

# Initialize FastAPI app
app = FastAPI(
    title="Transaction Analysis API",
    description="API for transaction entity classification and risk scoring",
    version="1.0.0"
)

# Allow frontend to communicate with backend (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (change this for security)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    # Read file contents
    file_contents = await file.read()
    file_text = file_contents.decode("utf-8")  # Convert bytes to string

    # Parse JSON
    json_data = json.loads(file_text) 
    # response_list = []
    # for tx_dict in tx_list:
    #     classified_entities = extract_entities(tx_dict)
    #     risk_measure = evaluate_risk(tx_dict,classified_entities)
    #     response = build_response(tx_dict,classified_entities,risk_measure)
    #     response_list.append(response)
    return {"status": "OK"}

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Transaction Analysis API"}

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "OK"}

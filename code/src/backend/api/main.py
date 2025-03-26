from fastapi import FastAPI, UploadFile, File
from api.routes import router
from fastapi.middleware.cors import CORSMiddleware
from utils.processing_utils import convert_file_to_json

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
def upload_file(file: UploadFile = File(...)):
    print({"filename": file.filename, "content_type": file.content_type})
    return {"filename": file.filename, "content_type": file.content_type}

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Transaction Analysis API"}

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "OK"}

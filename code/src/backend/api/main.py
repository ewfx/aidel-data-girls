from fastapi import FastAPI
from api.routes import router

# Initialize FastAPI app
app = FastAPI(
    title="Transaction Analysis API",
    description="API for transaction entity classification and risk scoring",
    version="1.0.0"
)

# Include API routes
app.include_router(router)

# Root endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Transaction Analysis API"}

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "OK"}

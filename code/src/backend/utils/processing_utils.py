from fastapi import File, UploadFile, HTTPException
import json

async def convert_file_to_json(file: UploadFile = File(...)):
    if not file.filename.endswith(".txt"):
        raise HTTPException(status_code=400, detail="Only .txt files are allowed")

    # Read file content
    content = await file.read()
    text_data = content.decode("utf-8").strip()  # Convert bytes to string

    # Convert extracted text into JSON format (assuming structured key-value format)
    json_data = {}
    for line in text_data.split("\n"):
        if ":" in line:  # Expecting "key: value" format
            key, value = line.split(":", 1)  # Split on first colon
            json_data[key.strip()] = value.strip()
    return json_data
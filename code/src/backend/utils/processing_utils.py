from fastapi import File, UploadFile, HTTPException
import json

async def convert_file_to_json(file: UploadFile = File(...)):
    file_contents = await file.read()
    file_text = file_contents.decode("utf-8")
    # Convert text to JSON
    json_data = json.loads(file_text)
    return json_data
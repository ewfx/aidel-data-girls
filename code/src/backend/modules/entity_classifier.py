import ollama
import json

def extract_entities(input):
    client = ollama.Client()
    model = "mistral"  # Replace with your model name
    prompt = f"""Extract entities from the following transaction and classify them as CORPORATION, SHELL COMPANY, NGO or PERSON:
  {input}

  Output format must be of the following pattern-
  [{{"entity": "","category": "","reason":""}},{{"entity": "","category": "","reason":""}},...]

  Rules-
  1. Do not format response
  2. Response should be strictly in the output format as a json string.
  3. Response should not be formatted as a code block
  """
    response = client.generate(model=model, prompt=prompt)
    try:
        response_json = json.loads(response)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
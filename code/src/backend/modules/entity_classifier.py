from openai import OpenAI
import json

def extract_entities(input):
    print("inside extract entity")
    
    client = OpenAI(
      base_url="https://openrouter.ai/api/v1",
      api_key="", #Add your own key
    )
    
    prompt = f"""Extract entities from the following transaction and classify them as CORPORATION, SHELL COMPANY, NGO or PERSON:
    {input}
    
    Output format must be of the following pattern-
    [{{"entity": "","category": "","reason":""}},{{"entity": "","category": "","reason":""}},...]
    
    Rules-
    1. Do not format response
    2. Response should be strictly in the output format as a json string.
    3. Response should not be formatted as a code block
    4. Any entity that cannot be classified into CORPORATION, SHELL COMPANY, NGO or PERSON should NOT be mentioned
    """
    completion = client.chat.completions.create(
      model="mistralai/mistral-small-3.1-24b-instruct:free",
      messages=[
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": prompt
            }
          ]
        }
      ]
      )
    response = completion.choices[0].message.content
    print(response)
    try:
      response_json = json.loads(response)
    except json.JSONDecodeError as e:
      print(f"Error decoding JSON: {e}")
    return response_json

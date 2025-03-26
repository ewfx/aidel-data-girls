from services.pep_lookup import searchPEPList
import json
import ollama

def evaluate_risk(data, entities):
  print("inside evaluate risk")
  entity_names = []
  entity_types = []
  justification = []

  risk_scoring_input = {}
  for entity in entities:
    entity_names.append(entity.get('entity'))
    if(entity.get('category')=="PERSON"):
      entity_types.append(searchPEPList(entity.get('entity')))
    else:
      entity_types.append(entity.get('category'))
    justification.append(entity.get('reason'))

  risk_scoring_input["entity_names"] = entity_names
  risk_scoring_input["entity_types"] = entity_types
  risk_scoring_input["supporting_evidence"] = justification
  risk_scoring_input["tx_id"] = data["txId"]
  risk_scoring_input["sender_name"] = data["sender"]["name"]
  risk_scoring_input["sender_address"] = data["sender"]["address"]
  risk_scoring_input["receiver_name"] = data["receiver"]["name"]
  risk_scoring_input["receiver_address"] = data["receiver"]["address"]
  risk_scoring_input["amount"] = data["amount"]
  risk_scoring_input["transaction_type"] = data["transactionType"]
  risk_scoring_input["reference"] = data["reference"]
  risk_scoring_input["additional_notes"] = data["additional notes"]

  
  client = ollama.Client()
  model = "mistral"  # Replace with your model name
  prompt = f"""Evaluate the risk of this transaction being suspicious: {risk_scoring_input}
  Output format must be of the following pattern-
  {{"risk_score":"","reason":""}}
  Rules-
  1. Do not format response
  2. Response should be strictly in the output format as a simple string.
  3. response should not be formatted as a code block
  4. Risk score assigned should be out of 100
  5. If PEP are involved, mention in reasoning
  """
  response = client.generate(model=model, prompt=prompt)
  try:
      response_json = json.loads(response.response)
  except json.JSONDecodeError as e:
      print(f"Error decoding JSON: {e}")
  return response_json
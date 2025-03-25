def build_response(data, entities, risk):
    response = {}
    response['txId'] = data['txId']
    entity_names = []
    entity_types = []
    for entity in entities:
       entity_names.append(entity.get('entity'))
       entity_types.append(entity.get('category'))
    response['entity_names'] = entity_names
    response['entity_types'] = entity_types
    response['risk_analysis'] = risk
    return response

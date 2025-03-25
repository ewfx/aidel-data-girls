# api/routes.py
from fastapi import APIRouter
from utils.processing_utils import convert_file_to_json
from modules.entity_classifier import extract_entities
from modules.risk_evaluator import evaluate_risk
from utils.response_builder import build_response

router = APIRouter()

@router.post("/classify_and_evaluate/")
def classify(request):
    tx_list = convert_file_to_json(request)
    response_list = []
    for tx_dict in tx_list:
        classified_entities = extract_entities(tx_dict)
        risk_measure = evaluate_risk(tx_dict,classified_entities)
        response = build_response(tx_dict,classified_entities,risk_measure)
        response_list.append(response)
    return response_list



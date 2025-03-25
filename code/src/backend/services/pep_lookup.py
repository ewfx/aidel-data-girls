import pandas as pd

def searchPEPList(name):
  #Search for name in PEP list: currently .csv is placeholder, eventual expansion will include searching in OFAC
  pep_list = pd.read_csv('pep_names.csv')
  pep_list = pep_list['Name'].tolist()
  if name in pep_list:
    return 'PEP'
  else:
    return 'PERSON'
# 🚀 Project Name
AI-Driven Entity Intelligence Risk Analysis

## 📌 Table of Contents
- [Introduction](#introduction)
- [Demo](#demo)
- [Inspiration](#inspiration)
- [What It Does](#what-it-does)
- [How We Built It](#how-we-built-it)
- [Challenges We Faced](#challenges-we-faced)
- [How to Run](#how-to-run)
- [Tech Stack](#tech-stack)
- [Team](#team)

---

## 🎯 Introduction
Risk is at the heart of every financial decision a bank makes. Whether it's approving loans, processing transactions, or detecting fraud, managing risk at the end of the day is critical to maintaining trust and stability. Given that how indispensable "risk" is for financial institutions, we picked up the challenge: "AI-Driven Entity Intelligence Risk Analysis"

Financial transactions, especially in high-risk areas, need a sharp eye and constant scrutiny to catch fraud, money laundering, and other threats. The problem? Traditional systems rely on fixed rules that can’t keep up with evolving risks. By bringing AI into the mix, we aim to make risk assessment more adaptive, meticulous, and efficient. Instead of just flagging obvious issues, AI digs deeper, identifying hidden patterns and emerging threats—helping us stay ahead of financial crime. Through this project, we're leveraging Gen-AI-based solutions to enhance risk assessment, bringing efficiency and precision to financial risk scoring.

## 🎥 Demo
[Demo](https://drive.google.com/file/d/11B9q5RfMrUIEtDXIswX4mLRru7CorpKo/view?usp=sharing)  
[Presentation] (https://www.canva.com/design/DAGi1nFrm4g/ljtyc6bknxSHlf5TshQk8Q/edit)

## 💡 Inspiration
"Risk" is what slided us into this project. It's undeniable that financial fraudsters are getting smarter, and rule-based systems just can’t keep up. Traditional methods often drown in the flood of transactions, flagging harmless ones while letting real threats slip through. We wanted a system that doesn’t just tick boxes but thinks—an AI that can identify shady shell companies, spot politically exposed persons (PEPs), and make sense of messy transaction data. Enter Mistral-7B, the AI-powered watchdog that doesn’t just call out risks but explains why. With the ever-tightening grip of regulations and the sheer volume of financial data pouring in, manual review is no longer feasible. Our solution scales effortlessly, reducing false alarms and uncovering hidden patterns. Plus, we wanted something transparent—no more black-box decisions. If an AI says a transaction is risky, we want it to back it up with solid reasoning. That’s the dream: a smarter, faster, and more accountable way to keep financial transactions safe.

## ⚙️ What It Does
We utilize Mistral-7B, a powerful open-weight large language model, to analyze transactions based on entity extraction and classification. The model helps identify organizations and individuals, categorize them, and assess their risk levels based on predefined parameters.

Why Mistral-7B?
- High accuracy in entity recognition
- Context-aware classification of entities like Shell Companies, NGOs, Corporations, and Individuals
- Robust understanding of politically exposed persons (PEPs) versus regular individuals
- Since it's a reasoning based model, it provides apt Justification for the given Risk Score it predicts
- Scalable and adaptable to various financial datasets

The Key Steps/Highlights of what the model does:
1. Entity Extraction: Identify the nature of entities in transaction descriptions - Organization, Individual etc.
2. Entity Classification: Categorize entities as Shell Company, NGO, Corporation, or Person.
3. PEP Identification: Determine if a person is politically exposed or not.
4. Risk Evaluation: Assess transaction risk using entity data and other relevant parameters.
5. Scoring & Justification: Provide a confidence score, risk score, supporting evidence, and a justification for the assigned risk level.

## 🛠️ How We Built It
Technologies:
Mistral 7B
 We did the frontend setup using React and in backedn using FAST API. Using React-based UI, the data is uploaded in json format. Data is extracted from the file, and for each transaction, we're prompting the Mistral7B model.e are using an API endpoint provided by OpenRouter to access Mistral-7B LLM model. Capture response from the API and present it in the prescribed output format 

## 🚧 Challenges We Faced
- Data Variability: Transaction descriptions vary widely, especially the Unstructured data, requiring strong generalization and model training.
- Ambiguous Entity Names: Certain organizations and individuals share similar names, which can lead to misclassification false positives.
- Justification Generation: Ensuring the model provides interpretable and trustworthy reasoning for its decisions, along with the appropriate evidence.
- Real-Time Processing: Optimizing inference time to keep response times minimal for high-volume transactions..

## 🏃 How to Run
1. Clone the repository  
   ```sh
   git clone https://github.com/your-repo.git
   ```
2. Install dependencies  
   ```sh
   npm install  # or pip install -r requirements.txt (for Python)
   ```
3. Run the project  
   ```sh
   npm start  # or python app.py
   ```

## 🏗️ Tech Stack
- 🔹 Frontend: React 
- 🔹 Backend: Python FastAPI
- 🔹 Model: Mistral 7B
- 🔹 Frameworks: OpenAI Router

## 👥 Team
- **Mridu Pant** - [GitHub](#) | [LinkedIn](#)
- **Shruti Bhateja** - [GitHub](#) | [LinkedIn](#)
- **Harshitha Peteti** - [GitHub](#) | [LinkedIn](#)
- **Bhavya Malhotra** - [GitHub](#) | [LinkedIn](#)

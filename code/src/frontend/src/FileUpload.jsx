import { useState } from "react";
import axios from "axios";
import "./FileUpload.css"

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [transactionData, setTransactionData] = useState(null);

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a file");
    
    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setTransactionData(response.data);
    } catch (error) {
      console.error("Upload failed", error);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <label className="upload-box">
        <span>Choose a .json file</span>
        <input type="file" accept=".json" onChange={handleFileChange} className="hidden" />
      </label>
      {file && <p className="file-name">Selected File: {file.name}</p>}

      <button onClick={handleUpload} disabled={loading} className="upload-button">
        {loading ? "Uploading..." : "Upload & Process"}
      </button>

      {transactionData && (
        <div className="table-container">
          <h2>Transaction Analysis</h2>
          <table className="transaction-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Extracted Entity</th>
                <th>Entity Type</th>
                <th>Risk Score</th>
                <th>Confidence Score</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
            {transactionData.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.txId}</td>
                  <td>{
                    transaction.entity_names && transaction.entity_names.map((names, ind) => (
                      <tr>{names}</tr>
                    )) 
                  }</td>
                  <td>{
                    transaction.entity_names && transaction.entity_types.map((names, ind) => (
                      <tr>{names}</tr>
                    )) 
                  }</td>
                  <td>{transaction.risk_analysis.risk_score}</td>
                  <td>{transaction.risk_analysis.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
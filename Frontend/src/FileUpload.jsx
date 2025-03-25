import React, { useState } from "react";
import "./FileUpload.css";

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

    setLoading(true);
    setTimeout(() => {
      // Dummy transaction data for testing
      const dummyData = [
        {
          transactionId: "TXN12345",
          extractedEntity: "John Doe",
          entityType: "Person",
          riskScore: "High",
          confidenceScore: "85%",
          reason: "Matched with watchlist",
        },
        {
          transactionId: "TXN67890",
          extractedEntity: "ABC Corp",
          entityType: "Organization",
          riskScore: "Medium",
          confidenceScore: "75%",
          reason: "Suspicious activity detected",
        },
      ];
      setTransactionData(dummyData);
      setLoading(false);
    }, 2000); // Simulate API call
  };

  return (
    <div className="container">
      <label className="upload-box">
        <span>Choose a .txt file</span>
        <input type="file" accept=".txt" onChange={handleFileChange} className="hidden" />
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
                  <td>{transaction.transactionId}</td>
                  <td>{transaction.extractedEntity}</td>
                  <td>{transaction.entityType}</td>
                  <td>{transaction.riskScore}</td>
                  <td>{transaction.confidenceScore}</td>
                  <td>{transaction.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
{/*import react from "react";
import { useState, button } from "react";


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
  
      /*setLoading(true);
      try {
        const response = await axios.post("http://localhost:5000/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        setTransactionData(response.data);
      } catch (error) {
        console.error("Upload failed", error);
      }
      setLoading(false);
    };
  
    return (
      <div className="p-6 flex flex-col items-center gap-4">
        <div>HELLOoooooooo</div>
        <label className="w-64 p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-center hover:bg-gray-100">
          <span className="text-gray-600">Choose a .txt file</span>
          <input type="file" accept=".txt" onChange={handleFileChange} className="hidden" />
        </label>
        {file && <p className="text-sm text-gray-700">Selected File: {file.name}</p>}
        <button onClick={handleUpload} disabled={loading}>
          {loading ? "Uploading..." : "Upload & Process"}
        </button>
  
        {/*transactionData && (
          <Card className="w-full max-w-lg mt-4 p-4 border rounded-lg shadow-md">
            <CardContent>
              <h2 className="text-xl font-bold mb-2">Transaction Analysis</h2>
              <p><strong>Transaction ID:</strong> {transactionData.transactionId}</p>
              <p><strong>Extracted Entity:</strong> {transactionData.extractedEntity}</p>
              <p><strong>Entity Type:</strong> {transactionData.entityType}</p>
              <p><strong>Risk Score:</strong> {transactionData.riskScore}</p>
              <p><strong>Confidence Score:</strong> {transactionData.confidenceScore}</p>
              <p><strong>Reason:</strong> {transactionData.reason}</p>
            </CardContent>
          </Card>
        )
      </div>
    );
  }*/}
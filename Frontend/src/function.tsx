// import { useState } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// export default function FileUpload() {
//   const [file, setFile] = useState<File | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [transactionData, setTransactionData] = useState<any>(null);

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files && event.target.files.length > 0) {
//       setFile(event.target.files[0]);
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) return alert("Please select a file");
//     const formData = new FormData();
//     formData.append("file", file);

//     setLoading(true);
//     try {
//       const response = await axios.post("http://localhost:5000/upload", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       setTransactionData(response.data);
//     } catch (error) {
//       console.error("Upload failed", error);
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="p-6 flex flex-col items-center gap-4">
//       <input type="file" accept=".txt" onChange={handleFileChange} />
//       <Button onClick={handleUpload} disabled={loading}>
//         {loading ? "Uploading..." : "Upload & Process"}
//       </Button>

//       {transactionData && (
//         <Card className="w-full max-w-lg mt-4">
//           <CardContent>
//             <h2 className="text-xl font-bold">Transaction Analysis</h2>
//             <p><strong>Transaction ID:</strong> {transactionData.transactionId}</p>
//             <p><strong>Extracted Entity:</strong> {transactionData.extractedEntity}</p>
//             <p><strong>Entity Type:</strong> {transactionData.entityType}</p>
//             <p><strong>Risk Score:</strong> {transactionData.riskScore}</p>
//             <p><strong>Confidence Score:</strong> {transactionData.confidenceScore}</p>
//             <p><strong>Reason:</strong> {transactionData.reason}</p>
//           </CardContent>
//         </Card>
//       )}
//     </div>
//   );
// }

// upload text input file - .json file
// send it through api to backend for processing 
// submit 
// response - transaction entities, risk score (out of 100), justification - table 
// loveble 
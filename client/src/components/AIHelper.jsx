import React, { useState } from 'react';
import state from '../store/store'
import { useSnapshot } from 'valtio';
import config from '../config/config'

const AIHelper = ({ setedittab }) => {
  const snap = useSnapshot(state)

  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const handleSubmit = async (e) => {
    console.log(prompt)
    e.preventDefault();
    setLoading(true);
    setResult("");
    try {
      const response = await fetch(`${config.development.backendUrl}`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({ prompt })
      });
      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      state.fullDecal = imageUrl;
      state.logoDecal = imageUrl;
      setResult("Image generated and applied!");
    } catch (error) {
      setResult("Error: " + error.message);
      console.log(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="fixed top-70 left-20 z-50 bg-white p-4 rounded glassmorphism shadow-lg min-w-[300px]">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Enter your prompt..."
          className="w-full px-2 py-1 border rounded mb-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded w-full"
          disabled={loading || !prompt}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
        <button
          className="mt-4 px-4  y-2 bg-gray-800 text-white rounded"
          onClick={() => { setedittab("") }}
        >
          Close
        </button>
      </form>
      {result && <div className="mb-4 text-gray-700">{result}</div>}

    </div>
  );
};

export default AIHelper;


"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function CandidateForm() {
  const [formData, setFormData] = useState({
    voterId: "",
    partyName: "",
  });

  const [symbolFile, setSymbolFile] = useState<File | null>(null);
  const [symbolPreview, setSymbolPreview] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSymbolFile(file);
    setSymbolPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!symbolFile) {
      alert("Please upload a symbol image");
      return;
    }

    // TODO: Upload symbolFile to IPFS (e.g. via Pinata/web3.storage) first,
    // get back a CID/URL, then send that URL to the contract:
    // const symbolUrl = await uploadToIPFS(symbolFile);
    // const success = await registerCandidate(formData.voterId, formData.partyName, symbolUrl);

    console.log("Submitting candidate application:", {
      ...formData,
      symbolFile,
    });
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4 text-center">
        Candidate Application
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Voter ID <span className="text-gray-500">(provided by ECN)</span>
          </label>
          <input
            type="text"
            name="voterId"
            value={formData.voterId}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your Voter ID hash"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Party Name
          </label>
          <input
            type="text"
            name="partyName"
            value={formData.partyName}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            placeholder="Enter your party name"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Symbol <span className="text-gray-500">(upload an image)</span>
          </label>

          <div
            onClick={() => fileInputRef.current?.click()}
            className="cursor-pointer flex flex-col items-center justify-center border-2 border-dashed border-gray-700 rounded-lg p-6 hover:border-blue-500 transition-colors"
          >
            {symbolPreview ? (
              <Image
                src={symbolPreview}
                alt="Symbol preview"
                width={80}
                height={80}
                className="rounded object-cover"
              />
            ) : (
              <p className="text-gray-500 text-sm text-center">
                Click to upload symbol image
                <br />
                <span className="text-xs">(PNG, JPG — max 2MB)</span>
              </p>
            )}
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/png, image/jpeg"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <p className="text-xs text-gray-500 text-center">
          Note: in future we can add security to Voter ID verification
        </p>

        <button
          type="submit"
          className="w-full py-2 rounded bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
        >
          Submit Application
        </button>

        {submitted && (
          <p className="text-green-400 text-sm text-center mt-2">
            Candidate application submitted! Awaiting verification...
          </p>
        )}
      </form>
    </div>
  );
}
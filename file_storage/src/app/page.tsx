"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import './globals.css';
import { useMutation, useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';
import React from 'react';

export default function Home() {
  const files = useQuery(api.files.getFiles);
  const createFile = useMutation(api.files.createFile);

  const handleClick = async () => {
    try {
      await createFile({ name: "hry" }); // Passing the name as argument
      console.log("File created successfully");
    } catch (error) {
      console.error("Error creating file:", error);
    }
  };

  return (
    <div>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

      {}
      {files ? (
        files.map((file) => (
          <div key={file._id}>{file.name}</div> // Use _id or appropriate key field
        ))
      ) : (
        <p>Loading files...</p> 
      )}

      {/* Button to create a new file */}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

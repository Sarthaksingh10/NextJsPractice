"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>{error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
      {/* If we will call the error.tsx file inside the folder where the error is ocured our page will crash but if we call error.tsx inside the parent folder the error will be displayed but the application will work  */}
    </div>
  );
}

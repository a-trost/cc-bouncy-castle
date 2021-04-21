import React from "react";

export default function Credit({ author, codepen, youtube, twitter }) {
  return (
    <div className="absolute p-6 text-xs text-gray-500 bg-gray-100 border border-gray-200 rounded-lg shadow-sm bottom-2 right-2 font-body">
      <p>
        Component created by{" "}
        {twitter ? (
          <a
            className="font-bold text-blue-600"
            href={twitter}
            target="_blank"
            rel="noreferrer"
          >
            {author}
          </a>
        ) : (
          author
        )}
      </p>
      {youtube && (
        <p>
          <a target="_blank" rel="noreferrer" href={youtube}>
            Watch them create it.
          </a>
        </p>
      )}
      {codepen && (
        <p>
          <a href={codepen} target="_blank" rel="noreferrer">
            View the CodePen version.
          </a>
        </p>
      )}
    </div>
  );
}

import React from "react";

export default function Credit({
  author,
  codepen,
  youtube,
  twitter,
  pending = false,
}) {
  return (
    <div className="absolute p-6 text-xs text-gray-500 bg-gray-100 border border-gray-200 rounded-lg shadow-sm bottom-2 right-2 font-body">
      {pending ? (
        <>
          Component will be created by{" "}
          <Author twitter={twitter} author={author} />
        </>
      ) : (
        <>
          <p>
            Component created by <Author twitter={twitter} author={author} />
          </p>
          {youtube && (
            <p>
              <a
                className="block mt-1 font-bold text-blue-600"
                target="_blank"
                rel="noreferrer"
                href={youtube}
              >
                Watch how they built it.
              </a>
            </p>
          )}
          {codepen && (
            <p>
              <a
                className="block mt-1 font-bold text-blue-600"
                href={codepen}
                target="_blank"
                rel="noreferrer"
              >
                View the CodePen version.
              </a>
            </p>
          )}
        </>
      )}
    </div>
  );
}

const Author = ({ author, twitter }) => {
  return (
    <>
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
    </>
  );
};

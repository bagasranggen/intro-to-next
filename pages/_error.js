import React from "react";
import Link from "next/link";

const errorPage = () => (
  <div>
    <h1>Oops, something went wrong</h1>
    <p>
      Go back to
      <Link href="/">
        <a> Homepage</a>
      </Link>
    </p>
  </div>
);

export default errorPage;

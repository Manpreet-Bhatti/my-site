import React from "react";
import Layout from "../components/Layout";

export default function NotFoundPage() {
  return (
    <Layout title="404">
      404. Sorry{" "}
      <span role="img" aria-label="sad pensive face">
        😔
      </span>{" "}
      we couldn’t find what you were looking for.
    </Layout>
  );
}

import React from "react";
import LegalDocumentPage from "../components/LegalDocumentPage";
import { disclaimerDocument } from "../data/legalDocuments";
import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <>
      <Helmet>
  <title>Disclaimer | Karyaup</title>

  <meta
    name="description"
    content="Read the Karyaup disclaimer to understand limitations of liability, use of information, and general terms related to using our platform."
  />

  <meta
    name="keywords"
    content="disclaimer, legal disclaimer, website disclaimer, Karyaup disclaimer"
  />

  <meta name="author" content="Karyaup" />

  <meta property="og:title" content="Disclaimer | Karyaup" />
  <meta
    property="og:description"
    content="Understand the limitations and legal terms of using Karyaup."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://karyaup.com/disclaimer"
  />
  <meta property="og:site_name" content="Karyaup" />

  <link
    rel="canonical"
    href="https://karyaup.com/disclaimer"
  />
</Helmet>
      <LegalDocumentPage {...disclaimerDocument} />
    </>
  )
}
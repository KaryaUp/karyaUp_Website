import React from "react";
import LegalDocumentPage from "../components/LegalDocumentPage";
import { termsOfServiceDocument } from "../data/legalDocuments";

export default function TermsOfService() {
  return (
    <>
      <Helmet>
  <title>Terms of Service | Karyaup</title>

  <meta
    name="description"
    content="Review Karyaup's terms of service to understand the rules, conditions, and agreements for using our platform."
  />

  <meta
    name="keywords"
    content="terms of service, terms and conditions, user agreement, legal terms, Karyaup terms"
  />

  <meta name="author" content="Karyaup" />

  <meta property="og:title" content="Terms of Service | Karyaup" />
  <meta
    property="og:description"
    content="Understand the terms and conditions for using Karyaup."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://karyaup.com/terms"
  />
  <meta property="og:site_name" content="Karyaup" />

  <link
    rel="canonical"
    href="https://karyaup.com/terms"
  />
</Helmet>
    <LegalDocumentPage {...termsOfServiceDocument} />
    </>
  )
}

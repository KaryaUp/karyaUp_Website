import React from "react";
import LegalDocumentPage from "../components/LegalDocumentPage";
import { privacyPolicyDocument } from "../data/legalDocuments";
import { Helmet } from "react-helmet-async";

export default function Privacy() {
  return (
    <>
      <Helmet>
  <title>Privacy Policy | Karyaup</title>

  <meta
    name="description"
    content="Read Karyaup's privacy policy to understand how we collect, use, and protect your personal data and information."
  />

  <meta
    name="keywords"
    content="privacy policy, data protection, user privacy, GDPR, Karyaup privacy"
  />

  <meta name="author" content="Karyaup" />

  <meta property="og:title" content="Privacy Policy | Karyaup" />
  <meta
    property="og:description"
    content="Learn how Karyaup handles and protects your personal data."
  />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://karyaup.com/privacy-policy"
  />
  <meta property="og:site_name" content="Karyaup" />

  <link
    rel="canonical"
    href="https://karyaup.com/privacy-policy"
  />
</Helmet>
      <LegalDocumentPage {...privacyPolicyDocument} />;
        </>
      )
}

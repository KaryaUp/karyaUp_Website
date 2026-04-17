import React from "react";
import SubPageLayout from "../../components/SubPageLayout";
import { Helmet } from "react-helmet-async";
import ComingSoon from "../../components/ComingSoon";


export default function VideoTutorials() {
  return (
    <>
      <Helmet>
        <title>Video Tutorials & Guides | Karyaup</title>

        <meta
          name="description"
          content="Watch Karyaup video tutorials to learn how to manage tasks, projects, dashboards, and workflows. Step-by-step guides to help your team work smarter."
        />

        <meta
          name="keywords"
          content="video tutorials, how-to guides, SaaS tutorials, project management tutorials, workflow training, Karyaup tutorials"
        />

        <meta name="author" content="Karyaup" />

        <meta
          property="og:title"
          content="Video Tutorials & Guides | Karyaup"
        />
        <meta
          property="og:description"
          content="Learn Karyaup with step-by-step video tutorials and guides."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://karyaup.com/video-tutorials"
        />
        <meta property="og:site_name" content="Karyaup" />

        <link
          rel="canonical"
          href="https://karyaup.com/video-tutorials"
        />
      </Helmet>
        <ComingSoon/>
    </>
  );
}

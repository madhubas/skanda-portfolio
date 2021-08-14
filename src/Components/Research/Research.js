import React from "react";
import "./Research.scss";
const Research = () => {
  return (
    <div className="research" id="research">
      <div className="research-heading">Research</div>
      <div className="research-content-1">
        <div className="content-heading">
          IRIS - (Initiative for Research and Innovation in STEM ) IRIS National
          Science Fair
        </div>
        <div className="content">
          Aug 2020 - Jan 2021 Summary Heading : Designed and developed a model
          to spot diseases in plants, vegetables and fruits using Deep Learning
          and Machine Learning. Formulated special algorithms which compares
          existing diseases captured in mobile with the available data images
          found in the public data set. The background with a special algorithm
          can identify possible diseases with a public data set . This
          particular model can aid with utmost accuracy upto 99% as the
          validation is done with more than 60K images. ​Research : My
          involvement included research to collect data from farmers,
          agriculture institution to learn, understand the issue , analyze ,
          document and identify workable solution among alternates I have
          collaborated with my mentor , Sandeeep Kumar Ramani, a graduate AI/ML
          student from University of Wisconsin, Madison to develop a working
          prototype .
          <b>
            {" "}
            I have submitted this proposal to Intel's (Initiative for Research
            and Innovation in STEM ) (IRIS) IRIS National Science Fair and IIT
            Bombay Entrepreneurship Programme.
          </b>
        </div>
        <a
          href="https://c5e42103-989a-4674-9a72-290d2851be84.filesusr.com/ugd/fd16df_0949dda33d5142b0ac2d0b6e9c04e655.pdf"
          className="content-anchor"
          target="_blank"
        >
          Read More
        </a>
      </div>
      <div className="research-flex">
        <div className="research-content-2">
          <div className="content-heading">
            Aha Guru - IIT JEE Advanced Teaching Institute
          </div>
          <div className="content">
            From Aug 2019 - present Number of members: 3 Summary: Created
            digital content for strengthening math, science training sessions
            for 9th and 10th grade students including preparation of worksheets,
            powerpoint presentations, videos to explain concepts with
            experiments. Actively involved in setting up MCQ questions/answers
            and paper corrections activities. This effort took more than 2-3
            hours every month starting from Aug 2019 Total Number of hours: 125+
            Attach 3 docs
          </div>
          <div className="anchors">
            <a
              href="https://drive.google.com/file/d/1_6xJ0ZN7zahe4YTmyRvRsLOxKeAYP3hQ/view?usp=sharing"
              target="_blank"
              className="content-anchor"
            >
              Certificate
            </a>

            <a
              href="https://c5e42103-989a-4674-9a72-290d2851be84.filesusr.com/ugd/fd16df_5a7197d6aa0c47ec8631f2735743ba01.pdf"
              target="_blank"
              className="content-anchor"
            >
              PPT
            </a>
          </div>
        </div>
        <div className="research-content-2">
          <div className="content-heading">IIT BOMBAY EUREKA COMPETITION</div>
          <div className="content">
            Submitted Proposal to IIT Bombay's Eureka! Junior competiion, a
            Business-Plan Competition for school students from upto 12th.
            Participated in the Competition Presenting business case for my
            AI/ML engine
          </div>
          <a
            href="https://c5e42103-989a-4674-9a72-290d2851be84.filesusr.com/ugd/fd16df_b43f4c3128e64a45930ebeaef20f67a7.docx?dn=iitbombay.docx"
            target="_blank"
            className="content-anchor"
          >
            Read More
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Research;

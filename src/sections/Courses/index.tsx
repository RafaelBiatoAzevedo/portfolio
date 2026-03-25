import { useState, type FC } from "react";

import {
  ActionButton,
  ActionButtons,
  Container,
  ContentsList,
  CourseCard,
  CourseLogo,
  CourseTitle,
  CourseContent,
  MainCertificateImage,
  Section,
  Title,
  CourseInfo,
  LogoWrapper,
  MainCertificate,
  ToggleWrapper,
  ToggleButton,
  ExpandableContainer,
  Grid,
  FeaturedLeft,
  FeaturedRight,
  CertificateList,
  FeaturedCard,
  CertificateImage,
} from "./styles";

import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";

//logos
import trybeLogo from "../../assets/courses/trybeIcon.png";
import aiFullcycleLogo from "../../assets/courses/fullcycleLogo.png";

//Certificates
import mainCertificateImage from "../../assets/certificates/MainCertificate.png";
import computerScienceCertificateImage from "../../assets/certificates/ComputerScience.png";
import backEndCertificateImage from "../../assets/certificates/BackEnd.png";
import frontEndCertificateImage from "../../assets/certificates/FrontEnd.png";
import fundamentalsCertificateImage from "../../assets/certificates/Fundamentals.png";
import mainAiFullcycleCertificateImage from "../../assets/certificates/AiFullCycle.png";

//PDFs
import mainCertificatePdf from "../../assets/certificates/pdf/MainCertificate.pdf";
import computerScienceCertificatePdf from "../../assets/certificates/pdf/ComputerScience.pdf";
import backEndCertificatePdf from "../../assets/certificates/pdf/BackEnd.pdf";
import frontEndCertificatePdf from "../../assets/certificates/pdf/FrontEnd.pdf";
import fundamentalsCertificatePdf from "../../assets/certificates/pdf/Fundamentals.pdf";
import mainAiFullcycleCertificatePdf from "../../assets/certificates/pdf/AiFullCycle.pdf";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { useTranslation } from "react-i18next";

interface ICoursesProps {
  themeSelected: string;
}

const courses = [
  {
    school: "FullCycle",
    logo: aiFullcycleLogo,
    name: "courses.fullCycle.name",
    startDate: "courses.fullCycle.startDate",
    endDate: "courses.fullCycle.endDate",
    qtdHours: 8,
    status: "courses.fullCycle.status",
    contents: [
      "courses.fullCycle.contentOne",
      "courses.fullCycle.contentTwo",
      "courses.fullCycle.contentThree",
      "courses.fullCycle.contentFour",
      "courses.fullCycle.contentFive",
      "courses.fullCycle.contentSix",
      "courses.fullCycle.contentSeven",
      "courses.fullCycle.contentEight",
      "courses.fullCycle.contentNine",
    ],
    mainCertificate: {
      image: mainAiFullcycleCertificateImage,
      name: "courses.fullCycle.mainCertificate.name",
      link: "",
      pdf: mainAiFullcycleCertificatePdf,
      contents: [],
    },
    certificatesAdditionals: [],
  },
  {
    school: "Trybe",
    logo: trybeLogo,
    name: "courses.trybe.name",
    startDate: "courses.trybe.startDate",
    endDate: "courses.trybe.endDate",
    qtdHours: 1500,
    status: "courses.trybe.status",
    contents: [
      "courses.trybe.contentOne",
      "courses.trybe.contentTwo",
      "courses.trybe.contentThree",
      "courses.trybe.contentFour",
      "courses.trybe.contentFive",
    ],
    mainCertificate: {
      image: mainCertificateImage,
      name: "courses.trybe.mainCertificate.name",
      link: "https://www.credential.net/b41dae45-7403-476c-93a6-f11209ef4474#acc.hkaCTcv9",
      pdf: mainCertificatePdf,
      contents: [
        "courses.trybe.mainCertificate.contentOne",
        "courses.trybe.mainCertificate.contentTwo",
        "courses.trybe.mainCertificate.contentThree",
        "courses.trybe.mainCertificate.contentFour",
        "courses.trybe.mainCertificate.contentFive",
      ],
    },

    certificatesAdditionals: [
      {
        image: computerScienceCertificateImage,
        name: "courses.trybe.certificateAdditionalOne.name",
        link: "https://www.credential.net/2c4b6b78-67b2-4a93-b11a-f7a09e0104d4#acc.skMBFx2T",
        pdf: computerScienceCertificatePdf,
        contents: [
          "courses.trybe.certificateAdditionalOne.contentOne",
          "courses.trybe.certificateAdditionalOne.contentTwo",
          "courses.trybe.certificateAdditionalOne.contentThree",
          "courses.trybe.certificateAdditionalOne.contentFour",
          "courses.trybe.certificateAdditionalOne.contentFive",
          "courses.trybe.certificateAdditionalOne.contentSix",
        ],
      },
      {
        image: backEndCertificateImage,
        name: "courses.trybe.certificateAdditionalTwo.name",
        link: "https://www.credential.net/93d37420-a5d5-4525-9597-f9d4dce703f0#acc.4uVKwoMm",
        pdf: backEndCertificatePdf,
        contents: [
          "courses.trybe.certificateAdditionalTwo.contentOne",
          "courses.trybe.certificateAdditionalTwo.contentTwo",
          "courses.trybe.certificateAdditionalTwo.contentThree",
          "courses.trybe.certificateAdditionalTwo.contentFour",
          "courses.trybe.certificateAdditionalTwo.contentFive",
          "courses.trybe.certificateAdditionalTwo.contentSix",
          "courses.trybe.certificateAdditionalTwo.contentSeven",
          "courses.trybe.certificateAdditionalTwo.contentEight",
          "courses.trybe.certificateAdditionalTwo.contentNine",
          "courses.trybe.certificateAdditionalTwo.contentTen",
          "courses.trybe.certificateAdditionalTwo.contentEleven",
        ],
      },
      {
        image: frontEndCertificateImage,
        name: "courses.trybe.certificateAdditionalThree.name",
        link: "https://www.credential.net/ac89d79b-ddd2-484a-87b0-4697f37ff20a#acc.NpCyBrFc",
        pdf: frontEndCertificatePdf,
        contents: [
          "courses.trybe.certificateAdditionalThree.contentOne",
          "courses.trybe.certificateAdditionalThree.contentTwo",
          "courses.trybe.certificateAdditionalThree.contentThree",
          "courses.trybe.certificateAdditionalThree.contentFour",
          "courses.trybe.certificateAdditionalThree.contentFive",
          "courses.trybe.certificateAdditionalThree.contentSix",
          "courses.trybe.certificateAdditionalThree.contentSeven",
        ],
      },
      {
        image: fundamentalsCertificateImage,
        name: "courses.trybe.certificateAdditionalFour.name",
        link: "https://www.credential.net/fd1a5519-756f-48da-9d64-d449f0eaf0f7#acc.b4VLXrdH",
        pdf: fundamentalsCertificatePdf,
        contents: [
          "courses.trybe.certificateAdditionalFour.contentOne",
          "courses.trybe.certificateAdditionalFour.contentTwo",
          "courses.trybe.certificateAdditionalFour.contentThree",
          "courses.trybe.certificateAdditionalFour.contentFour",
          "courses.trybe.certificateAdditionalFour.contentFive",
          "courses.trybe.certificateAdditionalFour.contentSix",
          "courses.trybe.certificateAdditionalFour.contentSeven",
          "courses.trybe.certificateAdditionalFour.contentEight",
          "courses.trybe.certificateAdditionalFour.contentNine",
        ],
      },
    ],
  },
];

export const Courses: FC<ICoursesProps> = ({ themeSelected }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section id="courses">
      <Container>
        <Title>{t("courses.title")}</Title>
        {courses.map(
          (
            {
              logo,
              name,
              startDate,
              endDate,
              qtdHours,
              status,
              contents,
              mainCertificate,
              certificatesAdditionals,
            },
            index,
          ) => (
            <CourseCard key={index}>
              <CourseTitle>{t(name)}</CourseTitle>

              <CourseContent>
                <LogoWrapper $themeSelected={themeSelected}>
                  <CourseLogo src={logo} />
                </LogoWrapper>

                <CourseInfo>
                  <h3>{t("courses.subtitleOne")}</h3>
                  <p>
                    {t(startDate)} – {t(endDate)}
                  </p>
                  <p>
                    {qtdHours} {t("courses.hours")} • {t(status)}
                  </p>

                  <h3>{t("courses.subtitleTwo")}</h3>
                  <ContentsList>
                    {contents.map((content, index) => (
                      <li key={index}>{t(content)}</li>
                    ))}
                  </ContentsList>
                </CourseInfo>

                {!!mainCertificate && (
                  <MainCertificate>
                    <MainCertificateImage src={mainCertificate.image} />

                    <ActionButtons>
                      <ActionButton href={mainCertificate.pdf} download>
                        <FaDownload /> {t("courses.buttonPrimary")}
                      </ActionButton>

                      {!!mainCertificate.link && (
                        <ActionButton
                          href={mainCertificate.link}
                          target="_blank"
                        >
                          <FaExternalLinkAlt /> {t("courses.buttonSecondary")}
                        </ActionButton>
                      )}
                    </ActionButtons>
                  </MainCertificate>
                )}
              </CourseContent>
              {!!certificatesAdditionals.length && (
                <>
                  <ToggleWrapper>
                    <ToggleButton onClick={() => setIsOpen(!isOpen)}>
                      {isOpen ? (
                        <>
                          <FiEyeOff size={"1.7rem"} /> -
                        </>
                      ) : (
                        <>
                          <FiEye size={"1.7rem"} /> +
                        </>
                      )}
                    </ToggleButton>
                  </ToggleWrapper>
                  <ExpandableContainer $isOpen={isOpen}>
                    <Grid>
                      {certificatesAdditionals.map(
                        ({ image, name, link, pdf, contents }, index) => (
                          <FeaturedCard key={index}>
                            <FeaturedLeft>
                              <CertificateImage src={image} />

                              <ActionButtons>
                                <ActionButton href={pdf} download>
                                  <FaDownload /> {t("courses.buttonPrimary")}
                                </ActionButton>

                                {!!link && (
                                  <ActionButton href={link} target="_blank">
                                    <FaExternalLinkAlt />{" "}
                                    {t("courses.buttonSecondary")}
                                  </ActionButton>
                                )}
                              </ActionButtons>
                            </FeaturedLeft>

                            <FeaturedRight>
                              <h4>{t(name)}</h4>

                              <CertificateList>
                                {contents.map((content, index) => (
                                  <li key={index}>{t(content)}</li>
                                ))}
                              </CertificateList>
                            </FeaturedRight>
                          </FeaturedCard>
                        ),
                      )}
                    </Grid>
                  </ExpandableContainer>
                </>
              )}
            </CourseCard>
          ),
        )}
      </Container>
    </Section>
  );
};

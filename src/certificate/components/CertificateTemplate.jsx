import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { certificateAsset } from '../utils/certificateAssets';

const LOGO_URL = certificateAsset('/logo.png');
const SIGNATURE_URL = certificateAsset('/Ajay_Kela_SIgnature.png');
const BG1_URL = certificateAsset('/assets/bg-1.png');
const BG2_URL = certificateAsset('/assets/bg-2.png');
const STAR_URL = certificateAsset('/assets/star-1.png');
const GREY_STAR_URL = certificateAsset('/assets/grey-star-2.png');

export default function CertificateTemplate() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <style>{`
        * {
          box-sizing: border-box;
        }
        body {
          font-size: 14px;
        }
        .v116_8 {
          width: 1400px;
          height: 1004px;
          background: #BE2328;
          opacity: 1;
          position: relative;
          top: 0px;
          left: 0px;
          overflow: hidden;
          z-index: 1;
        }
        .v116_9 {
          height: 100%;
          background: rgba(246,135,33,1);
          opacity: 0.20000000298023224;
          position: absolute;
          top: 0px;
          left: 46px;
          z-index: 1;
        }
        .v116_14 {
          height: calc(100% - 5rem);
          background: #FBFBF4;
          opacity: 1;
          position: absolute;
          top: 40px;
          left: 40px;
          right: 40px;
          border: 1px solid #BE2328;
          overflow: hidden;
          z-index: 1;
        }
        .v116_13 {
          height: 100px;
          width: 100px;
          opacity: 1;
          position: absolute;
          top: 94px;
          left: 84px;
          right: 80px;
          bottom: 80px;
        }
        .v116_64 {
          text-transform: uppercase;
          left: 0px;
          bottom: 0px;
          font-family: Poppins;
          font-weight: 400;
          font-size: 10px;
          flex: 1;
          color: #666;
        }
        .v116_65 {
          height: 100px;
          width: 100px;
          opacity: 1;
          position: absolute;
          top: 806px;
          left: 84px;
          right: 80px;
          bottom: 80px;
          transform: rotate(-90deg);
        }
        .v116_66 {
          height: 100px;
          width: 100px;
          opacity: 1;
          position: absolute;
          top: 92px;
          right: 84px;
          bottom: 80px;
          transform: rotate(90deg);
        }
        .v116_67 {
          height: 100px;
          width: 100px;
          opacity: 1;
          position: absolute;
          top: 810px;
          right: 82px;
          bottom: 80px;
          transform: rotate(180deg);
        }
        .v116_12 {
          background-color: #FBFBF4;
          height: calc(100% - 6.75rem);
          opacity: 1;
          position: absolute;
          top: 55px;
          left: 55px;
          right: 55px;
          bottom: 55px;
          z-index: 2;
          overflow: hidden;
        }
        .v116_12_a {
          position: absolute;
          z-index: 0;
          top: -33px;
        }
        .v116_12_b {
          position: absolute;
          top: 260px;
          z-index: 0;
        }
        .v116_11 {
          opacity: 1;
          position: absolute;
          bottom: 48px;
          left: 52px;
          z-index: 10;
        }
        .v116_15 {
          height: calc(100% - 5.45rem);
          background: #FBFBF4;
          opacity: 1;
          position: absolute;
          top: 44px;
          left: 44px;
          right: 44px;
          border: 2px solid #BE2328;
          overflow: hidden;
          z-index: 1;
        }
        .v116_16 {
          height: calc(100% - 6.25rem);
          background: #FBFBF4;
          opacity: 1;
          position: absolute;
          top: 50px;
          left: 50px;
          right: 50px;
          border: 3px solid #BE2328;
          overflow: hidden;
          z-index: 1;
        }
        .v116_17 {
          width: 60px;
          height: 59px;
          background: rgba(246,135,33,1);
          opacity: 1;
          position: absolute;
          top: 156px;
          left: 1312px;
          transform: rotate(-90deg);
        }
        .v116_18 {
          width: 60px;
          height: 59px;
          background: rgba(246,135,33,1);
          opacity: 1;
          position: absolute;
          top: 156px;
          left: 96px;
          transform: rotate(-89deg);
        }
        .name {
          color: #fff;
        }
        .v116_31 {
          width: 184px;
          color: rgba(245,133,85,1);
          position: absolute;
          top: 594px;
          left: 14px;
          font-family: Ponnala;
          font-weight: 400;
          font-size: 13px;
          opacity: 1;
          text-align: left;
        }
        .v116_32 {
          width: 800px;
          height: auto;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 280px;
          left: 455px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }
        .v116_33 {
          width: 720px;
          color: rgba(51,51,51,1);
          position: relative;
          top: 0px;
          left: 0px;
          font-family: Poppins;
          font-weight: 400;
          font-size: 20px;
          opacity: 1;
          text-align: left;
          margin-bottom: 28px;
        }
        .v116_34 {
          color: rgba(51,51,51,1);
          opacity: 1;
          text-align: left;
          font-size: 20px;
          font-weight: 400;
          font-family: Poppins;
        }
        .v116_61 {
          color: rgba(51,51,51,1);
          opacity: 1;
          text-align: left;
          font-size: 28px;
          font-weight: 600;
          font-family: "Poppins";
        }
        .v116_3562 {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: baseline;
          gap: 8px;
        }
        .v116_35 {
          width: 720px;
          color: rgba(51,51,51,1);
          position: relative;
          font-family: Poppins;
          font-weight: 600;
          font-size: 28px;
          opacity: 1;
          text-align: left;
        }
        .v116_36 {
          width: 720px;
          color: rgba(51,51,51,1);
          position: relative;
          font-family: Poppins;
          font-weight: 400;
          font-size: 24px;
          opacity: 1;
          text-align: left;
          word-break: break-word;
        }
        .v116_37 {
          width: 720px;
          color: rgba(51,51,51,1);
          position: relative;
          opacity: 1;
          text-align: left;
          font-family: Poppins;
          font-weight: 400;
          font-size: 24px;
        }
        .v116_62 {
          width: 720px;
          color: rgba(51,51,51,1);
          position: relative;
          opacity: 1;
          text-align: left;
          font-family: Poppins;
          font-weight: 600;
          font-size: 28px;
        }
        .v116_38 {
          width: 720px;
          color: rgba(51,51,51,1);
          position: relative;
          font-family: Poppins;
          font-weight: 600;
          font-size: 32px;
          opacity: 1;
          text-align: left;
          border-bottom: 3px solid #BE2328;
          margin-bottom: 15px;
        }
        .v116_39 {
          margin-top: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: .75rem;
        }
        .v116_39 .v116_39_heading span {
          color: #333;
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
        .v116_39 .v116_39_body {
          display: flex;
          align-items: center;
          gap: .75rem;
        }
        .v116_39 .v116_39_body .v116_39_body_left,
        .v116_39 .v116_39_body .v116_39_body_right {
          flex: 1;
          display: flex;
          gap: .75rem;
        }
        .v116_39 .v116_39_body .v116_39_body_left .v116_39_body_text,
        .v116_39 .v116_39_body .v116_39_body_right .v116_39_body_text {
          display: flex;
          flex-direction: column;
        }
        .v116_39_body_text_heading {
          color: #333;
          font-family: Poppins;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
        .v116_39_body_text_subtitle {
          color: #333;
          font-family: Poppins;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
        .v116_40 {
          width: 800px;
          position: absolute;
          top: 200px;
          left: 455px;
          font-weight: 400;
          font-size: 36px;
          opacity: 1;
          text-align: left;
          color: #BE2328;
          font-family: Poppins;
          font-size: 36px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          z-index: 10;
        }
        .v116_45 {
          width: 148px;
          height: 73px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          margin: 26px;
          opacity: 1;
          position: absolute;
          top: 152px;
          left: 180px;
          overflow: hidden;
          z-index: 10;
        }
        .v116_46 {
          width: 148px;
          height: 73px;
          background: url("${LOGO_URL}");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: relative;
          top: 0px;
          left: 0px;
          overflow: hidden;
        }
        .v116_47 {
          width: 90px;
          height: 90px;
          opacity: 1;
          flex: 1;
        }
        .v116_47 img {
          max-height: 100%;
          max-width: 100%;
        }
        .v116_81 {
          width: 108px;
          height: 108px;
          opacity: 1;
          position: absolute;
          top: 815px;
          left: 1115px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          z-index: 10;
        }
        .v116_48 {
          width: 181px;
          height: 160px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 729px;
          left: 180px;
          overflow: hidden;
          z-index: 10;
        }
        .v122_6 {
          width: 181px;
          height: 44px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 116px;
          left: 0px;
          overflow: hidden;
        }
        .v116_50 {
          width: 34px;
          position: absolute;
          top: 0px;
          left: 73px;
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          opacity: 1;
          text-align: center;
        }
        .v116_51 {
          width: 181px;
          position: absolute;
          top: 20px;
          left: 0px;
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          opacity: 1;
          text-align: center;
        }
        .v122_5 {
          width: 129px;
          height: 103px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 0px;
          left: 26px;
          overflow: hidden;
        }
        .v116_49 {
          width: 92px;
          position: absolute;
          top: 73px;
          left: 18px;
          font-family: Poppins;
          font-weight: 400;
          font-size: 20px;
          opacity: 1;
          text-align: center;
        }
        .v122_38 {
          width: 129px;
          height: 52px;
          background: url("${SIGNATURE_URL}");
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: relative;
          top: 0px;
          left: 0px;
          overflow: hidden;
        }
        .v116_53 {
          width: 601px;
          height: 175px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 714px;
          left: 455px;
          overflow: hidden;
          z-index: 10;
        }
        .v116_54 {
          width: 251px;
          height: 120px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          margin: 11px;
          opacity: 1;
          position: relative;
          top: 0px;
          left: 0px;
          overflow: hidden;
        }
        .v116_55 {
          width: 120px;
          height: 120px;
          opacity: 1;
          position: relative;
          top: 0px;
          left: 0px;
          overflow: hidden;
          display: none;
        }
        .v116_55 img {
          max-height: 100%;
          max-width: 100%;
        }
        .v116_56 {
          width: 120px;
          height: 120px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          opacity: 1;
          position: absolute;
          top: 0px;
          left: 131px;
          overflow: hidden;
          display: none;
        }
        .v116_56 img {
          max-height: 100%;
          max-width: 100%;
        }
        .v116_57 {
          width: 601px;
          color: rgba(51,51,51,1);
          position: absolute;
          top: 151px;
          left: 0px;
          font-family: Poppins;
          font-weight: 400;
          font-size: 16px;
          opacity: 1;
          text-align: left;
        }
        .showImage1 {
          display: block;
        }
        .showImage2 {
          display: block;
        }
        .v116_201 {
          width: 150px;
          height: 150px;
          background-repeat: no-repeat;
          background-position: center center;
          background-size: cover;
          margin: 26px;
          opacity: 1;
          position: absolute;
          top: 276px;
          left: 180px;
          overflow: hidden;
          z-index: 10;
        }
      `}</style>

      <div className="v116_8" data-certificate-capture>
        <div className="v116_9"></div>
        <div className="v116_14"></div>
        <div className="v116_15"></div>
        <div className="v116_16"></div>

        <div className="v116_12">
          <div className="v116_12_a">
            <img src={BG1_URL} alt="" crossOrigin="anonymous" />
          </div>
          <div className="v116_12_b">
            <img src={BG2_URL} alt="" crossOrigin="anonymous" />
          </div>
        </div>

        <div className="v116_11">
          <svg width="218" height="367" viewBox="0 0 218 367" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_791_351" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="218" height="367">
              <path d="M217.5 0H0V366.43H217.5V0Z" fill="white" />
            </mask>
            <g mask="url(#mask0_791_351)">
              <path
                d="M208.55 42.01L72.94 106.03L47.9 207.4L0.119995 114.99L0 114.78L-0.119995 114.99L-47.87 207.4L-72.94 106.03L-208.56 42.01L0 366.43L208.55 42.01Z"
                stroke="#BE2429"
                strokeWidth="0.87"
                strokeMiterlimit="10"
              />
            </g>
          </svg>
        </div>

        <div className="name"></div>

        <div className="v116_32">
          <span className="v116_33">This is to certify that</span>
          <span className="v116_38">kiran shankar</span>
          <span className="v116_36">Has successfully completed <b>JobReady: Employability Skills</b></span>
          <span className="v116_37">at the Advanced Level on <b>February 27, 2026</b></span>
          <div className="v116_39">
            <div className="v116_39_heading">
              <span className="v116_39_heading_text">Program Certification Levels</span>
            </div>
            <div className="v116_39_body">
              <div className="v116_39_body_left">
                <div className="v116_39_body_icon">
                  <img src={STAR_URL} alt="" crossOrigin="anonymous" />
                </div>
                <div className="v116_39_body_text">
                  <span className="v116_39_body_text_heading">Certificate of Completion – Advanced:</span>
                  <span className="v116_39_body_text_subtitle">Basic knowledge of concepts + in-class application of skills</span>
                </div>
              </div>
              <div className="v116_39_body_right">
                <div className="v116_39_body_icon">
                  <img src={GREY_STAR_URL} alt="" crossOrigin="anonymous" />
                </div>
                <div className="v116_39_body_text">
                  <span className="v116_39_body_text_heading">Certificate of Completion – Basic:</span>
                  <span className="v116_39_body_text_subtitle">Basic knowledge of <br /> concepts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <span className="v116_40">
          CERTIFICATE OF COMPLETION - ADVANCED
        </span>

        <div className="name"></div>

        <div className="v116_45">
          <div className="v116_46"></div>
        </div>

        <div className="v116_201">
          <div>
            <svg width="140" height="134" viewBox="0 0 140 134" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M70 73.6L105 84.97L140 50.85L70 73.6Z" fill="url(#paint0_linear_791_363)" />
              <path d="M70 73.6L140 50.85L91.63 43.83L70 73.6Z" fill="url(#paint1_linear_791_363)" />
              <path d="M70 73.6L113.26 133.14L105 84.97L70 73.6Z" fill="url(#paint2_linear_791_363)" />
              <path d="M35 84.97L26.73 133.14L70 73.6L35 84.97Z" fill="url(#paint3_linear_791_363)" />
              <path d="M70 73.6L26.73 133.14L70 110.4V73.6Z" fill="url(#paint4_linear_791_363)" />
              <path d="M91.63 43.83L70 0V73.6L91.63 43.83Z" fill="url(#paint5_linear_791_363)" />
              <path d="M70 73.6V110.4L113.26 133.14L70 73.6Z" fill="url(#paint6_linear_791_363)" />
              <path d="M70 73.6L0 50.85L35 84.97L70 73.6Z" fill="url(#paint7_linear_791_363)" />
              <path d="M70 0L48.37 43.83L70 73.6V0Z" fill="url(#paint8_linear_791_363)" />
              <path d="M70 73.6L48.37 43.83L0 50.85L70 73.6Z" fill="url(#paint9_linear_791_363)" />
              <defs>
                <linearGradient id="paint0_linear_791_363" x1="94.57" y1="44.03" x2="113.25" y2="76.63" gradientUnits="userSpaceOnUse">
                  <stop offset="0.58" stopColor="#922E1E" />
                  <stop offset="0.6" stopColor="#96321F" />
                  <stop offset="0.85" stopColor="#C1562C" />
                  <stop offset="0.98" stopColor="#D26432" />
                </linearGradient>
                <linearGradient id="paint1_linear_791_363" x1="108.17" y1="66.81" x2="94.78" y2="47.45" gradientUnits="userSpaceOnUse">
                  <stop offset="0.09" stopColor="#F58443" />
                  <stop offset="0.11" stopColor="#F58847" />
                  <stop offset="0.29" stopColor="#F8AD6C" />
                  <stop offset="0.47" stopColor="#FBCA89" />
                  <stop offset="0.65" stopColor="#FDDF9E" />
                  <stop offset="0.83" stopColor="#FEEBAA" />
                  <stop offset="1" stopColor="#FFF0AF" />
                </linearGradient>
                <linearGradient id="paint2_linear_791_363" x1="109.92" y1="93.61" x2="81.41" y2="108.82" gradientUnits="userSpaceOnUse">
                  <stop offset="0.09" stopColor="#BE5127" />
                  <stop offset="0.13" stopColor="#C15428" />
                  <stop offset="0.41" stopColor="#D36632" />
                  <stop offset="0.61" stopColor="#DA6D36" />
                </linearGradient>
                <linearGradient id="paint3_linear_791_363" x1="28.76" y1="102.68" x2="67.79" y2="104.06" gradientUnits="userSpaceOnUse">
                  <stop offset="0.07" stopColor="#F7924A" />
                  <stop offset="0.1" stopColor="#F79A53" />
                  <stop offset="0.24" stopColor="#FAB573" />
                  <stop offset="0.38" stopColor="#FCCA8C" />
                  <stop offset="0.53" stopColor="#FDDA9E" />
                  <stop offset="0.68" stopColor="#FEE3A8" />
                  <stop offset="0.86" stopColor="#FFE6AC" />
                </linearGradient>
                <linearGradient id="paint4_linear_791_363" x1="46.05" y1="97.88" x2="55.89" y2="121.23" gradientUnits="userSpaceOnUse">
                  <stop offset="0.1" stopColor="#8D2A1C" />
                  <stop offset="0.84" stopColor="#DE6D3C" />
                  <stop offset="0.88" stopColor="#E3723F" />
                </linearGradient>
                <linearGradient id="paint5_linear_791_363" x1="87.21" y1="27.86" x2="52.75" y2="45.76" gradientUnits="userSpaceOnUse">
                  <stop offset="0.02" stopColor="#C25729" />
                  <stop offset="0.11" stopColor="#CA5D2D" />
                  <stop offset="0.29" stopColor="#D56633" />
                  <stop offset="0.49" stopColor="#D96A35" />
                </linearGradient>
                <linearGradient id="paint6_linear_791_363" x1="85.31" y1="122.04" x2="93.59" y2="97.58" gradientUnits="userSpaceOnUse">
                  <stop offset="0.11" stopColor="#D86028" />
                  <stop offset="0.17" stopColor="#DC6931" />
                  <stop offset="0.47" stopColor="#EC9055" />
                  <stop offset="0.7" stopColor="#F7A96B" />
                  <stop offset="0.84" stopColor="#FBB274" />
                </linearGradient>
                <linearGradient id="paint7_linear_791_363" x1="11.42" y1="81.72" x2="38.75" y2="59.12" gradientUnits="userSpaceOnUse">
                  <stop offset="0.36" stopColor="#E3712E" />
                  <stop offset="0.46" stopColor="#EC8743" />
                  <stop offset="0.58" stopColor="#F39A54" />
                  <stop offset="0.7" stopColor="#F8A55E" />
                  <stop offset="0.83" stopColor="#FAA962" />
                </linearGradient>
                <linearGradient id="paint8_linear_791_363" x1="56.97" y1="24.79" x2="72.9" y2="39.47" gradientUnits="userSpaceOnUse">
                  <stop offset="0.04" stopColor="#F6883F" />
                  <stop offset="0.07" stopColor="#F68C44" />
                  <stop offset="0.25" stopColor="#F9A867" />
                  <stop offset="0.43" stopColor="#FBBE82" />
                  <stop offset="0.62" stopColor="#FDCE96" />
                  <stop offset="0.81" stopColor="#FED7A2" />
                  <stop offset="1" stopColor="#FFDBA6" />
                </linearGradient>
                <linearGradient id="paint9_linear_791_363" x1="47.76" y1="80.75" x2="20.83" y2="41.66" gradientUnits="userSpaceOnUse">
                  <stop offset="0.05" stopColor="#FFD17C" />
                  <stop offset="0.06" stopColor="#FFD17D" />
                  <stop offset="0.2" stopColor="#FFDF93" />
                  <stop offset="0.34" stopColor="#FFE8A2" />
                  <stop offset="0.52" stopColor="#FFEEAC" />
                  <stop offset="0.76" stopColor="#FFF0AF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="v116_81">
          <div className="v116_47">
            <QRCodeSVG
              value={window.location.href}
              size={90}
              level="M"
              includeMargin={false}
            />
          </div>
          <span className="v116_64">scan and verify</span>
        </div>

        <div className="v116_48">
          <div className="v122_6">
            <span className="v116_50">CEO</span>
            <span className="v116_51">Wadhwani Foundation</span>
          </div>
          <div className="v122_5">
            <span className="v116_49">Ajay Kela</span>
            <div className="v122_38"></div>
          </div>
        </div>

        <div className="v116_53">
          <div className="v116_54">
            <div className="v116_55">
              {/* instituteImageUrl not available */}
            </div>
            <div className="v116_56">
              {/* partnerImageUrl not available */}
            </div>
          </div>
          <span className="v116_57">This certificate confirms the completion of 75 hours of training</span>
        </div>
      </div>
    </>
  );
}

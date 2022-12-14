import { SVGProps } from "react";

const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    width="18px"
    height="18px"
    {...props}
  >
    <path d="M42 43H18a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zM42 48H18a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z" />
    <path d="M51 17V0H9v17H0v34h6v3h3v6h42v-6h3v-3h6V17h-9zM11 2h38v15H11V2zm38 52v4H11V37h38v17zm1-22c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
    <circle cx={50} cy={27} r={3} />
  </svg>
);

export default SvgPrint;

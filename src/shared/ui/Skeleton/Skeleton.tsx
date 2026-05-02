import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={764}
    height={47}
    viewBox="0 0 764 47"
    backgroundColor="#d0c8c8"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="317" y="335" rx="0" ry="0" width="231" height="66" />
    <rect x="9" y="58" rx="0" ry="0" width="149" height="24" />
    <rect x="19" y="106" rx="0" ry="0" width="346" height="25" />
    <rect x="14" y="145" rx="0" ry="0" width="91" height="25" />
    <rect x="19" y="27" rx="0" ry="0" width="1" height="0" />
    <rect x="0" y="0" rx="8" ry="8" width="764" height="47" />
  </ContentLoader>
);

export default Skeleton;

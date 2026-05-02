// SidebarSkeleton.jsx
import ContentLoader from "react-content-loader";

const SidebarSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={600}
    viewBox="0 0 280 600"
    backgroundColor="#d0c8c8"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Специализация */}
    <rect x="0" y="0" rx="4" ry="4" width="120" height="20" />
    <rect x="0" y="30" rx="3" ry="3" width="16" height="16" />
    <rect x="24" y="32" rx="3" ry="3" width="100" height="14" />
    <rect x="0" y="55" rx="3" ry="3" width="16" height="16" />
    <rect x="24" y="57" rx="3" ry="3" width="120" height="14" />
    <rect x="0" y="80" rx="3" ry="3" width="16" height="16" />
    <rect x="24" y="82" rx="3" ry="3" width="90" height="14" />
    <rect x="0" y="105" rx="3" ry="3" width="16" height="16" />
    <rect x="24" y="107" rx="3" ry="3" width="80" height="14" />
    <rect x="0" y="130" rx="3" ry="3" width="16" height="16" />
    <rect x="24" y="132" rx="3" ry="3" width="60" height="14" />
    <rect x="0" y="160" rx="4" ry="4" width="90" height="16" />

    {/* Навыки */}
    <rect x="0" y="200" rx="4" ry="4" width="80" height="20" />
    <rect x="0" y="230" rx="4" ry="4" width="20" height="20" />
    <rect x="28" y="233" rx="3" ry="3" width="80" height="14" />
    <rect x="0" y="258" rx="4" ry="4" width="20" height="20" />
    <rect x="28" y="261" rx="3" ry="3" width="100" height="14" />
    <rect x="0" y="286" rx="4" ry="4" width="20" height="20" />
    <rect x="28" y="289" rx="3" ry="3" width="60" height="14" />
    <rect x="0" y="314" rx="4" ry="4" width="20" height="20" />
    <rect x="28" y="317" rx="3" ry="3" width="90" height="14" />
    <rect x="0" y="342" rx="4" ry="4" width="20" height="20" />
    <rect x="28" y="345" rx="3" ry="3" width="70" height="14" />
    <rect x="0" y="370" rx="4" ry="4" width="20" height="20" />
    <rect x="28" y="373" rx="3" ry="3" width="95" height="14" />
    <rect x="0" y="400" rx="4" ry="4" width="90" height="16" />

    {/* Уровень сложности */}
    <rect x="0" y="440" rx="4" ry="4" width="140" height="20" />
    <rect x="0" y="470" rx="16" ry="16" width="55" height="30" />
    <rect x="63" y="470" rx="16" ry="16" width="55" height="30" />
    <rect x="126" y="470" rx="16" ry="16" width="55" height="30" />
    <rect x="189" y="470" rx="16" ry="16" width="55" height="30" />

    {/* Рейтинг */}
    <rect x="0" y="520" rx="4" ry="4" width="80" height="20" />
    <rect x="0" y="548" rx="4" ry="4" width="28" height="28" />
    <rect x="36" y="548" rx="4" ry="4" width="28" height="28" />
    <rect x="72" y="548" rx="4" ry="4" width="28" height="28" />
    <rect x="108" y="548" rx="4" ry="4" width="28" height="28" />
    <rect x="144" y="548" rx="4" ry="4" width="28" height="28" />
  </ContentLoader>
);

export default SidebarSkeleton;

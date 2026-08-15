import { useParams } from 'react-router-dom';
import { industriesData, iconMap } from '../data/industries';
import DetailPageLayout from '../components/DetailPageLayout';
import NotFound from './NotFound';

const technicalPoints = [
  'Industry-specific geometry and operating-data assessment',
  'Advanced turbulence, thermal, and multiphase modeling',
  'High-performance computation for complex design cases',
  'Correlation with plant, pilot, or experimental measurements',
  'Optimization studies focused on scale-up and performance',
];

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industriesData.find((entry) => entry.id === slug);

  if (!industry) return <NotFound title="Industry not found" message="That industry does not exist or may have been renamed." />;

  return (
    <DetailPageLayout
      item={industry}
      items={industriesData}
      iconMap={iconMap}
      type="Industry"
      basePath="/industries"
      sectionHash="industries"
      colorKey="gradient"
      technicalPoints={technicalPoints}
    />
  );
}

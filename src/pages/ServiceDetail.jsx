import { useParams } from 'react-router-dom';
import { servicesData, iconMap } from '../data/services';
import DetailPageLayout from '../components/DetailPageLayout';
import NotFound from './NotFound';

const technicalPoints = [
  'Geometry preparation and fit-for-purpose mesh strategy',
  'Physics, boundary-condition, and solver configuration',
  'Convergence monitoring and grid-independence assessment',
  'Validation against experimental or operating data',
  'Design exploration with clear engineering recommendations',
];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((entry) => entry.id === slug);

  if (!service) return <NotFound title="Service not found" message="That service does not exist or may have been renamed." />;

  return (
    <DetailPageLayout
      item={service}
      items={servicesData}
      iconMap={iconMap}
      type="Service"
      basePath="/services"
      sectionHash="services"
      colorKey="color"
      technicalPoints={technicalPoints}
    />
  );
}

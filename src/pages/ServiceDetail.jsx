import { useParams } from 'react-router-dom';
import { servicesData, iconMap } from '../data/services';
import DetailPageLayout from '../components/DetailPageLayout';
import NotFound from './NotFound';
import cfdAnalysisImage from '../assets/services/cfd-analysis.png';
import cfdModelingImage from '../assets/services/cfd-modeling.png';
import heatTransferImage from '../assets/services/heat-transfer.png';
import reactionEngineeringImage from '../assets/services/reaction-engineering.png';
import mixingOptimizationImage from '../assets/services/mixing-optimization.png';
import equipmentDesignImage from '../assets/services/equipment-design.png';
import cfdAutomationImage from '../assets/services/cfd-automation.png';
import processOptimizationImage from '../assets/services/process-optimization.png';
import industrialTrainingImage from '../assets/services/industrial-training.png';

const serviceImages = {
  'cfd-analysis': cfdAnalysisImage,
  'cfd-modeling': cfdModelingImage,
  'heat-transfer': heatTransferImage,
  'reaction-engineering': reactionEngineeringImage,
  'mixing-optimization': mixingOptimizationImage,
  'equipment-design': equipmentDesignImage,
  'cfd-automation': cfdAutomationImage,
  'process-optimization': processOptimizationImage,
  'industrial-training': industrialTrainingImage,
};

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
      backgroundImage={serviceImages[service.id]}
    />
  );
}

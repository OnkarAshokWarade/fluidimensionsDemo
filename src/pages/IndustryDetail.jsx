import { useParams } from 'react-router-dom';
import { industriesData, iconMap } from '../data/industries';
import DetailPageLayout from '../components/DetailPageLayout';
import NotFound from './NotFound';
import chemicalImage from '../assets/industries/chemical.webp';
import pharmaceuticalImage from '../assets/industries/pharmaceutical.webp';
import agroImage from '../assets/industries/agro.webp';
import paintsImage from '../assets/industries/paints-pigments.webp';
import metalsImage from '../assets/industries/metals-metallurgy.webp';
import foodImage from '../assets/industries/food-beverage.webp';
import automobileImage from '../assets/industries/automobile.webp';
import oilGasImage from '../assets/industries/oil-gas.webp';
import cementImage from '../assets/industries/cement-mining.webp';

const industryImages = {
  chemical: chemicalImage,
  pharmaceutical: pharmaceuticalImage,
  agro: agroImage,
  'paints-pigments': paintsImage,
  'metals-metallurgy': metalsImage,
  'food-beverage': foodImage,
  automobile: automobileImage,
  'oil-gas': oilGasImage,
  'cement-mining': cementImage,
};

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
      backgroundImage={industryImages[industry.id]}
    />
  );
}

import ServiceCard from './ServiceCard'

interface WorkCategoryCardProps {
  title: string
  description: string
  icon: string
}

/** Types of work — no photos, no fake project claims */
export default function WorkCategoryCard({ title, description, icon }: WorkCategoryCardProps) {
  return <ServiceCard title={title} description={description} icon={icon} />
}

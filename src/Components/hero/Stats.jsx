import Badge from "../ui/Badge";
import { heroData } from "@/constants/heroData";

export default function Stats() {
  return (
<div className="flex gap-8 justify-center mt-6 flex-wrap ">
  {heroData.stats.map((item) => (
    <Badge key={item.id} icon={item.icon} label={item.label} />
    
  ))}
</div>  );
}
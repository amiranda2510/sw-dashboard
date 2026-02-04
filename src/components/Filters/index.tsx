import Filter from "./Filter";

export default function Filters() {
  return (
    <div className="flex gap-8">
      <Filter criteria="Owner" />
      <Filter criteria="Gym" />
    </div>
  )
}

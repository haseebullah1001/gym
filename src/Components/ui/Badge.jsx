export default function Badge({ icon, label }) {
  return (
    <div className=" bg-yellow-100 backdrop-blur-md px-8 py-3 rounded-3xl shadow-sm text-center flex fle-row items-center gap-2">
      
      <p className="font-bold text-xl text-orange-500">{label}</p>
      {icon}
    </div>
  );
}
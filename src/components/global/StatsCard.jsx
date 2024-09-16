export const StatsCard = ({number,title}) => {
  return (
<div className="flex flex-col bg-primaryBg shadow-md hover:shadow-lg border rounded-xl ">
  
  <div className="p-4 md:p-7 text-center">
    <h3 className="text-4xl font-bold text-navyLogo ">
      {number}
    </h3>
    <p className="mt-2 text-orangeLogo ">
      {title}
    </p>
  </div>
</div>
  )
}

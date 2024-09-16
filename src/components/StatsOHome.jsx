import { useTranslation } from 'react-i18next';
import { StatsCard } from './global/StatsCard'

export const StatsOHome = () => {
  const {t} = useTranslation();
  return (
    <div className='px-4 py-8 mx-auto '>
      <div className="flex flex-wrap  md:flex-nowrap justify-center md:space-x-20 space-x-0 md:space-y-0 space-y-10">
        <div className="md:w-1/4 w-3/4 stats-card ">
          <StatsCard title={t("stats.Revenue")} number='20k' />
        </div>
        <div className="md:w-1/4 w-3/4 stats-card">
          <StatsCard title={t("stats.Products")} number='13' />
        </div>
        <div className="md:w-1/4 w-3/4 stats-card">
          <StatsCard title={t("stats.Happy Client")} number='200' />
        </div>
        <div className="md:w-1/4 w-3/4 stats-card ">
          <StatsCard title={t("stats.Team")} number='20' />
        </div>
      </div>
    </div>
  )
}

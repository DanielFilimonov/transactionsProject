import DateFiltersItem from './DateFiltersItem'


const DateFiltersBlock = () => {

  return (
		<div className="dateFiltersBlock__wrapper">
      <DateFiltersItem filterText={'месяц'} />
      <DateFiltersItem filterText={'полгода'} />
      <DateFiltersItem filterText={'год'} />
		</div>
  );
}

export default DateFiltersBlock;
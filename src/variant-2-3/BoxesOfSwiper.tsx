import { useState } from 'react';
import { SelectedButton } from '../common/SelectedButton';
import { data } from '../common/data';
import { trackClick } from '../utils/events';
import { BoxSwiper } from './BoxSwiper';

type Props = {
  withPromo: boolean;
  showThx: () => void;
};

export const BoxesOfSwiper = ({ withPromo, showThx }: Props) => {
  const [selectedNames, setSelected] = useState<string[]>([]);
  const [items, setItems] = useState(data.slice(0, 3));

  const handleClick = () => {
    const newItems = items.concat(data.slice(items.length, items.length + 3));
    trackClick(newItems.length === 6 ? '1' : newItems.length === 9 ? '2' : '3');
    setItems(newItems);
  };

  return (
    <>
      <div className="p-4 flex flex-col gap-4 cursor-pointer mb-[88px]">
        {items.map(item => (
          <BoxSwiper
            onClick={() =>
              setSelected(
                selectedNames.includes(item.title)
                  ? selectedNames.filter(i => i !== item.title)
                  : selectedNames.concat(item.title),
              )
            }
            category={item.category}
            checked={selectedNames.includes(item.title)}
            percentage={item.percentage}
            subcategory={item.subcategory}
            title={item.title}
            key={item.title}
            img={item.logo}
            promo={withPromo ? item.promo : undefined}
            imgs={item.imgs ?? []}
          />
        ))}

        {items.length !== data.length ? (
          <button
            onClick={handleClick}
            className="hover:bg-slate-200 outline-none border-none rounded-2xl bg-white text-black py-4 text-center text-base font-bold"
          >
            Показать еще
          </button>
        ) : null}
      </div>

      <SelectedButton selectedItems={selectedNames} showThx={showThx} />
    </>
  );
};

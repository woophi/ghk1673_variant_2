import { useCallback, useState } from 'react';
import { ThxLayout } from './common/ThxLayout';
import { BoxesOfSwiper } from './variant-2-3/BoxesOfSwiper';

export const App = () => {
  const [thxShow, setThx] = useState(false);

  const showThx = useCallback(() => {
    setThx(true);
  }, []);

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <div className="relative">
      <h1 className="text-lg font-medium pt-5 px-5 pb-3 text-black">
        Выберите предложения, которыми планируете воспользоваться
      </h1>

      <BoxesOfSwiper showThx={showThx} withPromo={false} />
    </div>
  );
};

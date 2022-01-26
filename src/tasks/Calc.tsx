import {OfferItemPropsData} from '../components/OfferItem';

export const CalculateSum = function (items: OfferItemPropsData[]): number {
  let sum: number = 0;
  items.map(i => {
    sum += i.currency;
  });
  return Math.round(sum * 100) / 100;
};

import USCurrencyFormat from './currency';

export default function CartTotal (props) {
  

  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );
  return USCurrencyFormat.format(total)
}

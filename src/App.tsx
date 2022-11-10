import { useState } from 'react';
import { Select, SelectOption } from './Select';

const options = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Fifth', value: 5 },
];

function App() {
  const [singleValue, setSingleValue] = useState<SelectOption | undefined>(options[0]);
  const [multipleValues, setMultipleValues] = useState<SelectOption[]>([options[0]]);

  return (
    <>
      <label>Single input selector:</label>
      <Select
        multiple={false}
        options={options}
        value={singleValue}
        onChange={(option) => setSingleValue(option)}
      />
      <label>Multiple input selectors:</label>
      <Select
        multiple={true}
        options={options}
        value={multipleValues}
        onChange={(option) => setMultipleValues(option)}
      />
    </>
  );
}

export default App;

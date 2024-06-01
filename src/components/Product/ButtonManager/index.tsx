// components/ButtonManager.tsx
import { useState } from 'react';
import { CirclePlus } from 'lucide-react';


const ButtonManager: React.FC = () => {
  const [buttons, setButtons] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const addButton = (label: string) => {
    if (label && !buttons.includes(label)) {
      setButtons([...buttons, label]);
    }
  };

  const removeButton = (labelToRemove: string) => {
    setButtons(buttons.filter(label => label !== labelToRemove));
  };

  const handleAddClick = () => {
    addButton(input.trim());
    setInput('');
  };

  return (
    <div>
      <div className="items-center flex px-3 border rounded w-48">
        <input  type="text"  value={input} onChange={(e) => setInput(e.target.value)}  className="flex-1  m-1 font-Exo text-gray-700 bg-transparent outline-none"
          placeholder="Add Tag"
        />
            <button onClick={handleAddClick} className="px-4 py-1.5 ml-[-13px] theme-bg-blue text-white rounded" > <CirclePlus strokeWidth={1.75} /> </button>

      </div>
      <div className="mt-4 ">
        {buttons.map((label, index) => (
          <div key={index} className="flex items-center m-1">
            <button className="px-4 py-1.5 bg-gray-100 text-sm font-Exo text-black rounded hover:bg-green-600" >
              {label}
            </button>
            <button
              className="ml-1 px-2 py-1 bg-slate-600 text-white rounded hover:bg-red-600"
              onClick={() => removeButton(label)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default ButtonManager;

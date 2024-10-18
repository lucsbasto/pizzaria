/* eslint-disable @typescript-eslint/no-explicit-any */

const CrustSelection = ({crust, setCrust}: {crust: string, setCrust: any}) => {
  return (
    <div className="">
      <div className="flex gap-x-12 mb-8 font-medium items-center justify-center">
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input 
            className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary cursor-pointer"
            type="radio" 
            name='crust' 
            value='tradicional' 
            checked={crust === 'tradicional'} 
            onChange={e => setCrust(e.target.value)}
          />
          Tradicional
        </label>
        <label className="flex items-center gap-x-2 cursor-pointer">
          <input 
            className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r checked:from-primary checked:to-secondary cursor-pointer"
            type="radio" 
            name='crust' 
            value='catupiry' 
            checked={crust === 'catupiry'} 
            onChange={e => setCrust(e.target.value)}
          />
          Catupiry
        </label>
      </div>
    </div>
  )
}

export default CrustSelection

import { useState } from 'react';
import countries from '../../../lib/data/countries.json';

const CountriesDropdown: React.FC = () => {
    const [country, setCountry] = useState<string>("Afghanistan");
    
    return (
        <div className="raw-field">
          <label htmlFor="country" className="label-text">
            Country
            <span className="text-purple"> *</span>
          </label>
          <select 
            name="country" 
            id="country" 
            className="auth-input" 
            onChange={(e) => {setCountry(e.target.value)}}
            value={country} 
            >
            {countries.map((cnt, index) => 
                <option key={index} value={cnt.name}>{cnt.name}</option>
            )}
          </select>
        </div>      
    );
}

export default CountriesDropdown;
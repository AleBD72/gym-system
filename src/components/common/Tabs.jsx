import { useState } from "react"

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="flex space-x-1">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`py-2 px-4 focus:outline-none font-poppins rounded-t-lg ${activeTab === index ? 'bg-fifthCol text-white' : 'bg-gray-200'}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4">
                {tabs[activeTab].content}
            </div>
        </div>
    )
}

export default Tabs
import { func } from "prop-types"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"
import { useState } from "react"

function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = function (nextIndex) {
        setExpandedIndex(currentExpandedIndex => {
            if (currentExpandedIndex === nextIndex) {
                return -1
            }
            return nextIndex
        })
    }

    const renderedItem = items.map((item, index) => {
        const isExpanded = index === expandedIndex

        const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>

        return (
            <div key={item.id}>
                <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className="border-b p-5">{item.content}</div>}
            </div>
        )

    })

    return <div className="border-x border-t rounded">{renderedItem}</div>
}

export default Accordion

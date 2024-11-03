import { useState } from "react";
import tech_stack, { TechStack } from "@src/shared/tech_stack";

interface TechStackProps {
    techStacks: TechStack[],
    filters: string[],
    addFilter: (filter: string) => void,
    tags: string[]
}


const useTechStacks = (): TechStackProps => {

    const [filters, setFilters] = useState<string[]>([]);

    const addFilter = (filter: string) => {
        setFilters((prev) => {
            const copy = [...prev];
            if (filters.includes(filter)) return copy.filter(item => item.toLowerCase() !== filter.toLowerCase());
            else return [...copy, filter]
        })
    };

    const getTags = (): string[] => [...new Set(tech_stack.map((item) => item.tags).flat())];

    const filterTechStack = (): TechStack[] => {
        if (filters.length === 0)
            return tech_stack

        return tech_stack.reduce<TechStack[]>((acc, prev) => {
            if (prev.tags.some((tag) => filters.includes(tag))) { acc.push(prev); }
            return acc;
        }, [])
    }


    return {
        techStacks: filterTechStack(),
        filters,
        addFilter,
        tags: getTags(),
    }


}


export default useTechStacks;
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function TabNavigation({ currentPath }: { currentPath: string }) {
    const tabs = [
        { value: '/', label: 'About' },
        { value: '/experience', label: 'Experience' },
        { value: '/skills', label: 'Skills' },
        { value: '/projects', label: 'Projects' },
    ];

    return (
        <Tabs value={currentPath} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
                {tabs.map((tab) => (
                    <TabsTrigger key={tab.value} value={tab.value} asChild>
                        <a href={tab.value}>{tab.label}</a>
                    </TabsTrigger>
                ))}
            </TabsList>
        </Tabs>
    );
}

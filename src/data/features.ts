import { Zap, Shield,DollarSign, Heart, Coffee, Smile, Type,Earth, TabletSmartphone, CodeXml } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Zap,
                title: 'حراسة شخصية',
                description: 'حراسة ونقل الأفراد المهمين سواء في المعارض أو الفنادق أو الأحداث'
            },
            {
                icon: DollarSign,
                title: 'أسعار تنافسية',
                description: 'كن واثقا أننا سنعطيك أسعار ترضيك'
            },
            {
                icon: Smile,
                title: 'نسعى لكسب رضى عملائنا',
                description: 'نريد من علاقاتنا مع العملاء أن تكون طويلة الأمد'
            },
            {
                icon: Earth,
                title: 'سنذهب إليك أينما كنت',
                description: 'لدينا استعداد تام للسفر داخل المملكة'
            },
   
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};

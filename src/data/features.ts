import { Zap, DollarSign, Smile, Earth, Heart, Coffee, Shield, Move, DoorOpen, AlertCircle, Users, PenLine, Handshake, Megaphone, AlarmClock, GraduationCap, GanttChart, Map } from 'lucide-astro';

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


export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Move,
                title:  'تحقيق انسيابية الحركة للجمهور',
                description: 'تنظيم وتوجيه حركة الأفراد في المواقع العامة والفعاليات الكبرى'
            },
            {
                icon: DoorOpen,
                title: 'إدارة نقاط الدخول والخروج',
                description: 'ضمان سلاسة حركة الجمهور في نقاط التحويل والخروج'
            },
            {
                icon: AlertCircle,
                title: 'الاستجابة للطوارئ',
                description: 'التعامل مع المواقف الطارئة بسرعة وكفاءة عالية'
            },
            {
                icon: Earth,
                title: 'تحسين تجربة الزوار',
                description: 'تقليل فترات الانتظار وتحسين التنظيم العام'
            },
            {
              icon: Shield,
              title: 'ضمان سلامة الزوار',
              description: 'منع التزاحم أو الإصابات'
            },

            ]
    },
    secondary: {
      id: 'secondary',
      features: [
          {
              icon: PenLine,
              title: 'التخطيط المسبق',
              description: `دراﺳﺔ ﻣﻮﻗﻊ اﻟﻔﻌﺎﻟﻴﺔ و ﺗﺤﻠﻴﻞ ﺣﺠﻢ اﻟﺠﻤﻬﻮر اﻟﻤﺘﻮﻗﻊ  | ﺗﺤﺪﻳﺪ ﻧﻘﺎط اﻟﺨﻄﺮ واﻟﺘﺤﺪﻳﺎت اﻟﻤﺤﺘﻤﻠﺔ`
          },
          {
              icon: Users,
              title: 'التخطيط الميداني',
              description: 'اﺳﺘﺨﺪام ﺣﻮاﺟﺰ ﺗﻮﺟﻴﻬﻴﺔ وﻟﻮﺣﺎت إرﺷﺎدﻳﺔ | ﻣﺮاﻗﺒﺔ ﻣﺴﺘﻤﺮة ﻋﺒﺮ ﻛﺎﻣﻴﺮات وﺗﻘﻨﻴﺎت اﺳﺘﺸﻌﺎر'
          },
          {
              icon: Coffee,
              title: 'التقنيات الذكية',
              description: 'استخدام أنظمة تتبع الحشود وتقنيات إدارة الزحام وتطبيقات الدخول الإلكترونية'
          },
          {
              icon: Handshake,
              title: 'التنسيق مع الجهات',
              description: 'التعاون مع الأمن العام، الدفاع المدني، الإسعاف والمرور'
          },
          {
              icon: Map,
              title: 'رسم خرائط تدفق الجمهور',
              description: 'Mapping Flow إدارة نقاط الدخول والتفتيش'
          },
          {
              icon: GanttChart,
              title: 'تنظيم الطوابير والمسارات',
              description: 'إدارة طوابير الانتظار وتحديد المسارات الآمنة'
          },
          {
              icon: GraduationCap,
              title: 'تدريب وتوفير أفراد مؤهلين',
              description: 'إعداد كوادر مدربة لإدارة الحشود والجمهور'
          },
          {
              icon: AlarmClock,
              title: 'تنفيذ سيناريوهات الطوارئ',
              description: 'تطبيق خطط الإخلاء وحالات الطوارئ'
          },
          {
              icon: Megaphone,
              title: 'أنظمة التوجيه الصوتي',
              description: 'استخدام أجهزة صوتية وإرشادية لتوجيه الزوار'
          }
      ]
  },

};
